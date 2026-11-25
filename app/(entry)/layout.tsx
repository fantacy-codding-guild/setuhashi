import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { REVIEW, SITE_URL } from "@/lib/site";
import "../fonts.css";
import "../globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations({ locale: "en", namespace: "entry" });
  return {
    metadataBase: new URL(SITE_URL),
    title: t("metaTitle"),
    description: t("metaDescription"),
    robots: REVIEW ? { index: false, follow: false } : undefined,
    icons: { icon: "/assets/icons/favicon.ico" },
  };
}

export default function EntryLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="b-en entry entry-45">{children}</body>
    </html>
  );
}
