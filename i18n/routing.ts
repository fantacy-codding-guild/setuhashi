import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "ja"],
  defaultLocale: "en",
  localePrefix: "always",
  // No language cookie: the approved privacy position is "no cookies, storage or tracking".
  // Remembering the visitor's choice would need a cookie and an updated privacy notice (Sponsor decision).
  localeCookie: false,
});

export type Locale = (typeof routing.locales)[number];

export function otherLocale(locale: string): Locale {
  return locale === "en" ? "ja" : "en";
}
