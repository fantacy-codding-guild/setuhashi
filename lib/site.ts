// Site-wide switches, read at build time from environment variables (see .env.example).

/** "review" (default) keeps the v4.10.2 review markings: the build-status bar, the footer note and noindex.
 *  "production" removes them. Switch only with the Sponsor's written launch approval. */
export const SITE_MODE: "review" | "production" =
  process.env.NEXT_PUBLIC_SITE_MODE === "production" ? "production" : "review";
export const REVIEW = SITE_MODE === "review";

/** Public address used for canonical and hreflang links. */
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://www.setuhashi.com";

/** The enquiry form stays an inactive example unless this is "true" AND the server variables in .env.example are set.
 *  Before enabling, replace the "inactive example" wording on the Contact page with approved copy. */
export const CONTACT_FORM_ENABLED = process.env.NEXT_PUBLIC_CONTACT_FORM_ENABLED === "true";
