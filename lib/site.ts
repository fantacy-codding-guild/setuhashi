export const LANGS = ["en", "ja"] as const;
export type Lang = (typeof LANGS)[number];

export const isLang = (v: string): v is Lang =>
  (LANGS as readonly string[]).includes(v);
export const otherLang = (l: Lang): Lang => (l === "en" ? "ja" : "en");

/**
 * Review-build markers (banner + footer note) and noindex stay ON until the Sponsor-approved
 * production delta is applied (see README → "Going to production"). Flip with env vars at build time:
 *   NEXT_PUBLIC_REVIEW_BUILD=false   removes the review banner and footer note
 *   NEXT_PUBLIC_ALLOW_INDEXING=true  removes noindex/nofollow
 *   NEXT_PUBLIC_SITE_URL=https://…   adds metadataBase, canonical URLs and hreflang alternates
 */
export const REVIEW_BUILD = process.env.NEXT_PUBLIC_REVIEW_BUILD !== "false";
export const ALLOW_INDEXING = process.env.NEXT_PUBLIC_ALLOW_INDEXING === "true";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "";

export const SECTIONS = [
  "who-we-are",
  "what-we-do",
  "who-we-serve",
  "what-we-bring",
  "what-we-offer",
  "how-we-work",
  "our-focus",
  "our-experience",
  "our-people",
  "contact",
] as const;

type Strings = {
  skip: string;
  protoLabel: string;
  logoFile: string;
  logoAlt: string;
  logoH: number;
  langLabel: string;
  menu: string;
  sectionsLabel: string;
  nav: Record<(typeof SECTIONS)[number], string>;
  footerLabel: string;
  tagline: "en" | "ja";
  privacy: string;
  langSelect: string;
  footNote: string;
  homeAlt: string;
};

export const T: Record<Lang, Strings> = {
  en: {
    skip: "Skip to content",
    protoLabel: "Build status",
    logoFile: "SetuHashi_Logo_English_Horizontal_White.svg",
    logoAlt: "SetuHashi — Home",
    logoH: 40,
    langLabel: "Language",
    menu: "Sections",
    sectionsLabel: "Sections",
    nav: {
      "who-we-are": "Who we are",
      "what-we-do": "What we do",
      "who-we-serve": "Who we serve",
      "what-we-bring": "What we bring",
      "what-we-offer": "What we offer",
      "how-we-work": "How we work",
      "our-focus": "Our focus",
      "our-experience": "Our experience",
      "our-people": "Our people",
      contact: "Contact us",
    },
    footerLabel: "Footer",
    tagline: "en",
    privacy: "Privacy",
    langSelect: "Language selection",
    footNote:
      "SetuHashi · internal review build v4.10.2 · nothing on this site is published.",
    homeAlt: "SetuHashi — Home",
  },
  ja: {
    skip: "本文へ移動",
    protoLabel: "ビルドの状態",
    logoFile: "SetuHashi_Logo_Japanese_Horizontal_White.svg",
    logoAlt: "セトゥハシ — ホーム",
    logoH: 46,
    langLabel: "言語",
    menu: "メニュー",
    sectionsLabel: "メニュー",
    nav: {
      "who-we-are": "私たちについて",
      "what-we-do": "事業内容",
      "who-we-serve": "お客様",
      "what-we-bring": "私たちの強み",
      "what-we-offer": "サービス",
      "how-we-work": "進め方",
      "our-focus": "注力分野",
      "our-experience": "経験・事例",
      "our-people": "メンバー",
      contact: "お問い合わせ",
    },
    footerLabel: "フッター",
    tagline: "ja",
    privacy: "プライバシー",
    langSelect: "言語の選択",
    footNote:
      "セトゥハシ · 社内レビュー用のビルド v4.10.2 · このサイトの内容は公開されていません。",
    homeAlt: "セトゥハシ — ホーム",
  },
};

/** Route for a page: /en/ for the welcome page, /en/<slug>/ otherwise. */
export const routeFor = (lang: Lang, slug: string) =>
  slug === "index" ? `/${lang}/` : `/${lang}/${slug}/`;
