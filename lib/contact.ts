import topics from "./contact-topics.json";

/** One enquiry topic (the Contact page's topic list): value, EN/JA label and group. */
export type Topic = { value: string; en: string; ja: string | null; group: string | null };
export const TOPICS = topics as Topic[];

export type Enquiry = { name: string; email: string; organization: string; topic: string; message: string; locale: "en" | "ja" };

const LIMITS = { name: 120, email: 160, organization: 160, message: 4000 } as const;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Server-side check, mirroring the form (same required fields and maximum lengths). Returns the enquiry or an error code. */
export function validateEnquiry(body: unknown): { ok: true; enquiry: Enquiry } | { ok: false; error: string } {
  if (!body || typeof body !== "object") return { ok: false, error: "invalid" };
  const b = body as Record<string, unknown>;
  const s = (k: string) => (typeof b[k] === "string" ? (b[k] as string).trim() : "");
  if (s("website")) return { ok: false, error: "spam" }; // hidden honeypot field, if one is added to the form
  const e: Enquiry = {
    name: s("name"), email: s("email"), organization: s("organization"), topic: s("topic"), message: s("message"),
    locale: s("locale") === "ja" ? "ja" : "en",
  };
  if (!e.name || !e.email || !e.message) return { ok: false, error: "required" };
  if (!EMAIL.test(e.email)) return { ok: false, error: "email" };
  if (e.name.length > LIMITS.name || e.email.length > LIMITS.email || e.organization.length > LIMITS.organization || e.message.length > LIMITS.message) {
    return { ok: false, error: "length" };
  }
  if (e.topic && !TOPICS.some((t) => t.value === e.topic)) e.topic = ""; // unknown topics are ignored, as on the page
  return { ok: true, enquiry: e };
}

/** Plain-text email to the SetuHashi recipient. The visitor's address is set as Reply-To. */
export function buildEmail(e: Enquiry) {
  const topic = TOPICS.find((t) => t.value === e.topic);
  const subject = `Website enquiry${topic ? ` — ${topic.en.replace(/^—\s*/, "")}` : ""}`;
  const text = [
    `Name: ${e.name}`,
    `Email: ${e.email}`,
    `Company or organization: ${e.organization || "—"}`,
    `Topic: ${topic ? `${topic.en.replace(/^—\s*/, "")} (${topic.value})` : "—"}`,
    `Site language: ${e.locale === "ja" ? "Japanese" : "English"}`,
    "",
    e.message,
  ].join("\n");
  return { subject, text };
}
