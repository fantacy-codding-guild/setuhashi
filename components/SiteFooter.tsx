import { getTranslations } from "next-intl/server";
import { FOOTER_LINKS, pageHref } from "@/lib/nav";
import { REVIEW } from "@/lib/site";

export default async function SiteFooter({
  locale,
  page,
}: {
  locale: string;
  page: string;
}) {
  const t = await getTranslations({ locale, namespace: "common" });
  return (
    <footer className={`ftr ftr-${locale}`}>
      <div className="wrap ftr-grid">
        <div className="ftr-id">
          <a href={pageHref(locale, "")} className="ftr-home">
            <img
              src="/assets/logo/SetuHashi_Symbol_Bridge_White.svg"
              alt={t("logoAlt")}
              width={88}
              height={42}
            />
          </a>
          <p>
            {t.rich("footerTagline", {
              ph: (c) => <span className="ph">{c}</span>,
            })}
          </p>
        </div>

        <nav aria-label={t("footerLabel")}>
          <ul className="ftr-nav">
            {FOOTER_LINKS.map((s) => (
              <li key={s}>
                <a
                  href={pageHref(locale, s)}
                  aria-current={
                    s === "privacy" && page === "privacy" ? "page" : undefined
                  }
                >
                  {s === "privacy" ? t("privacy") : t(`sections.${s}`)}
                </a>
              </li>
            ))}
            <li className="ftr-lang">
              <a href="/">{t("languageSelection")}</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
