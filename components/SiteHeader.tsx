import { getTranslations } from "next-intl/server";
import { otherLocale } from "@/i18n/routing";
import { SECTIONS, pageHref, sectionOf } from "@/lib/nav";
import { PAGES } from "@/lib/pages";

const LOGO = {
  en: { src: "/assets/logo/SetuHashi_Logo_English_Horizontal_White.svg", height: 40 },
  ja: { src: "/assets/logo/SetuHashi_Logo_Japanese_Horizontal_White.svg", height: 46 },
} as const;

/** Header: logo, language switch (same page in the other language), phone menu button and section bar. */
export default async function SiteHeader({ locale, page }: { locale: string; page: string }) {
  const t = await getTranslations({ locale, namespace: "common" });
  const other = otherLocale(locale);
  const section = sectionOf(page);
  const logo = LOGO[locale === "ja" ? "ja" : "en"];
  const current = (
    <span className="cur" lang={locale} aria-current="true">
      {locale === "en" ? t("langEn") : t("langJa")}
    </span>
  );
  const switcher = (
    <a href={PAGES[page]?.switchTo ? `/${other}/${PAGES[page].switchTo}` : pageHref(other, page)} lang={other} hrefLang={other} data-lang="">
      {other === "en" ? t("langEn") : t("langJa")}
    </a>
  );
  const sep = <span className="sep" aria-hidden="true">{t("langSep")}</span>;
  return (
    <header className={`hdr hdr-dark hdr-${locale}`}>
      {"\n"}
      <div className="hdr-top">
        <div className="wrap">
          {"\n"}
          <a className="logo" href={pageHref(locale, "")} aria-current={page === "" ? "page" : undefined}>
            <img src={logo.src} alt={t("logoAlt")} width={200} height={logo.height} />
          </a>
          {"\n"}
          <div className="lang" role="group" aria-label={t("langLabel")}>
            {locale === "en" ? current : switcher}
            {sep}
            {locale === "en" ? switcher : current}
          </div>
          {"\n"}
          <button type="button" className="menu-btn" aria-expanded="false" aria-controls="secbar">
            <span className="bars" aria-hidden="true"></span>
            <span className="mb-t">{t("menu")}</span>
          </button>
          {"\n"}
        </div>
      </div>
      {"\n"}
      <nav className="secbar" id="secbar" aria-label={t("sectionsLabel")}>
        <div className="wrap">
          <ul>
            {SECTIONS.map((s) => (
              <li key={s}>
                <a href={pageHref(locale, s)} aria-current={s === page ? "page" : s === section ? "true" : undefined}>
                  {t(`sections.${s}`)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      {"\n"}
    </header>
  );
}
