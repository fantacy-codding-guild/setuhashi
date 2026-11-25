import { NextResponse } from "next/server";
import { Resend } from "resend";
import { buildEmail, validateEnquiry } from "@/lib/contact";
import { CONTACT_FORM_ENABLED } from "@/lib/site";

export async function POST(request: Request) {
  const key = process.env.RESEND_API_KEY,
    to = process.env.CONTACT_TO,
    from = process.env.CONTACT_FROM;
  if (!CONTACT_FORM_ENABLED || !key || !to || !from) {
    // logs which settings are missing, never their values
    console.error("contact disabled", {
      flagOn: CONTACT_FORM_ENABLED,
      hasKey: !!key,
      hasTo: !!to,
      hasFrom: !!from,
    });
    return NextResponse.json({ ok: false, error: "disabled" }, { status: 503 });
  }
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
  }
  const v = validateEnquiry(body);
  if (!v.ok)
    return NextResponse.json(
      { ok: false, error: v.error },
      { status: v.error === "spam" ? 200 : 400 },
    );
  const { subject, text } = buildEmail(v.enquiry);
  try {
    const { error } = await new Resend(key).emails.send({
      from,
      to: to.split(",").map((x) => x.trim()),
      replyTo: v.enquiry.email,
      subject,
      text,
    });
    if (error) {
      console.error("Resend error", error);
      return NextResponse.json({ ok: false, error: "send" }, { status: 502 });
    }
  } catch (e) {
    console.error("Resend exception", e);
    return NextResponse.json({ ok: false, error: "send" }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
