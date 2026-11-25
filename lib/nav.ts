import { PAGES } from "./pages";

/** The ten header sections, in order. Labels live in messages/*.json → common.sections. */
export const SECTIONS = [
  "who-we-are", "what-we-do", "who-we-serve", "what-we-bring", "what-we-offer",
  "how-we-work", "our-focus", "our-experience", "our-people", "contact",
] as const;

export type Section = (typeof SECTIONS)[number];

/** Footer links: the sections plus Privacy. */
export const FOOTER_LINKS = [...SECTIONS, "privacy"] as const;

/** Section a page belongs to (highlighted in the header), or null. */
export function sectionOf(page: string): string | null {
  return PAGES[page]?.section ?? null;
}

/** Address of a page in a language: page "" is the language home. */
export function pageHref(locale: string, page: string): string {
  return page ? `/${locale}/${page}/` : `/${locale}/`;
}
