import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import { pageHref } from "./nav";
import { REVIEW, SITE_URL } from "./site";

export type PageProps = { params: Promise<{ locale: string }> };

/** Title, description, language alternates and robots for a page; text comes from messages → pages.<page>. */
export function pageMetadata(page: string) {
  return async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: `pages.${page || "home"}` });
    return {
      metadataBase: new URL(SITE_URL),
      title: t("metaTitle"),
      description: t("metaDescription"),
      robots: REVIEW ? { index: false, follow: false } : undefined,
      alternates: {
        canonical: pageHref(locale, page),
        languages: Object.fromEntries(routing.locales.map((l) => [l, pageHref(l, page)])),
      },
      icons: { icon: "/assets/icons/favicon.ico" },
    };
  };
}
