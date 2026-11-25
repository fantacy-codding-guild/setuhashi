import { NextResponse } from "next/server";
import { Resend } from "resend";
import { buildEmail, validateEnquiry } from "@/lib/contact";
import { CONTACT_FORM_ENABLED } from "@/lib/site";

/** POST /api/contact — sends an enquiry by email with Resend.
 *  Off until NEXT_PUBLIC_CONTACT_FORM_ENABLED=true and RESEND_API_KEY, CONTACT_TO and CONTACT_FROM are set
 *  (Vercel → Settings → Environment Variables). Nothing is stored by this route. */
export async function POST(request: Request) {
  const key = process.env.RESEND_API_KEY, to = process.env.CONTACT_TO, from = process.env.CONTACT_FROM;
  if (!CONTACT_FORM_ENABLED || !key || !to || !from) {
    return NextResponse.json({ ok: false, error: "disabled" }, { status: 503 });
  }
  let body: unknown;
  try { body = await request.json(); } catch { return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 }); }
  const v = validateEnquiry(body);
  if (!v.ok) return NextResponse.json({ ok: false, error: v.error }, { status: v.error === "spam" ? 200 : 400 });
  const { subject, text } = buildEmail(v.enquiry);
  const { error } = await new Resend(key).emails.send({
    from, to: to.split(",").map((x) => x.trim()), replyTo: v.enquiry.email, subject, text,
  });
  if (error) return NextResponse.json({ ok: false, error: "send" }, { status: 502 });
  return NextResponse.json({ ok: true });
}
