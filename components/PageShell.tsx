import { getTranslations } from "next-intl/server";
import { PAGES } from "@/lib/pages";
import { CONTACT_FORM_ENABLED } from "@/lib/site";

import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import SiteBehaviour from "./SiteBehaviour";

/** Frame shared by every page: skip link, review bar, header, the page's <main>, footer and page behaviour. */
export default async function PageShell({
  locale,
  page,
  children,
}: {
  locale: string;
  page: string;
  children: React.ReactNode;
}) {
  const t = await getTranslations({ locale, namespace: "common" });
  const info = PAGES[page];
  const contact =
    page === "contact"
      ? {
          enabled: CONTACT_FORM_ENABLED,
          sent: t("contactSent"),
          failed: t("contactFailed"),
          locale,
        }
      : undefined;
  return (
    <>
      <a className="skip" href="#main">
        {t("skip")}
      </a>

      <SiteHeader locale={locale} page={page} />

      {children}

      <SiteFooter locale={locale} page={page} />

      <SiteBehaviour scripts={info?.scripts ?? []} contact={contact} />
    </>
  );
}
