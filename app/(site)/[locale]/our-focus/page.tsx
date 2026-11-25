import { getTranslations, setRequestLocale } from "next-intl/server";
import PageShell from "@/components/PageShell";
import { pageMetadata, type PageProps } from "@/lib/metadata";

const PAGE = "our-focus";

export const generateMetadata = pageMetadata(PAGE);

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.our-focus");
  const s = await getTranslations("shared");
  return (
    <PageShell locale={locale} page={PAGE}>
    <main id="main" className="main-focus">
      {"\n"}
      <div className="wrap">
        <nav className="crumbs" aria-label={s("youAreHere")}>
          <ol>
            <li>
              <a href={`/${locale}/`}>
                {s("home")}
              </a>
            </li>
            <li>
              <span aria-current="page">
                {s("ourFocus")}
              </span>
            </li>
          </ol>
        </nav>
        <div className="layout">
          <aside className="local" aria-label={s("ourFocus")}>
            {"\n"}
            <p className="local-k">
              <a href={`/${locale}/our-focus/`}>
                {s("ourFocus")}
              </a>
            </p>
            {"\n"}
            <p className="local-lead">
              {s("whereWeAreConcentratingOurEfforts")}
            </p>
            {"\n"}
            <details className="local-d" open>
              <summary>
                <span>
                  {t("span_2")}
                </span>
                <span className="ln-count">
                  {s("t1Of4")}
                </span>
              </summary>
              {"\n"}
              <nav aria-label={s("inThisSection")}>
                <ul className="ln">
                  <li>
                    <a href={`/${locale}/our-focus/`} aria-current="page">
                      <span className="ln-l">
                        {s("overview")}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href={`/${locale}/our-focus-global-capability-centres/`}>
                      <span className="ln-l">
                        {s("globalCapabilityCentres")}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href={`/${locale}/our-focus-water-solutions/`}>
                      <span className="ln-l">
                        {s("waterSolutions")}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href={`/${locale}/our-focus-recycling-and-waste-management/`}>
                      <span className="ln-l">
                        {s("recyclingAndWasteManagement")}
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </details>
            {"\n"}
          </aside>
          <article className="view view-wide view-focus" aria-labelledby="vh">
            <h1 id="vh" className="v-h">
              {s("whereWeAreConcentratingOurEfforts")}
            </h1>
            {"\n"}
            <div className="v-body f-intro">
              <p>
                {t("p_2")}
              </p>
              <p>
                {t("p_3")}
              </p>
              <p>
                {t("p_4")}
              </p>
            </div>
            {"\n"}
            <h2 className="lab sp">
              {t("h2_1")}
            </h2>
            <ul className="fcards">
              <li className="fcard">
                <a href={`/${locale}/our-focus-global-capability-centres/`}>
                  <h3 className="fcard-h">
                    {s("globalCapabilityCentres")}
                  </h3>
                  <p>
                    {t("p_5")}
                  </p>
                  <span className="arrow" aria-hidden="true">
                    {t("span_8")}
                  </span>
                </a>
              </li>
              <li className="fcard">
                <a href={`/${locale}/our-focus-water-solutions/`}>
                  <h3 className="fcard-h">
                    {s("waterSolutions")}
                  </h3>
                  <p>
                    {t("p_6")}
                  </p>
                  <span className="arrow" aria-hidden="true">
                    {t("span_9")}
                  </span>
                </a>
              </li>
              <li className="fcard">
                <a href={`/${locale}/our-focus-recycling-and-waste-management/`}>
                  <h3 className="fcard-h">
                    {s("recyclingAndWasteManagement")}
                  </h3>
                  <p>
                    {t("p_7")}
                  </p>
                  <span className="arrow" aria-hidden="true">
                    {t("span_10")}
                  </span>
                </a>
              </li>
            </ul>
            {"\n"}
            <div className="f-close">
              <h2 className="v-sub">
                {t("h2_2")}
              </h2>
              <p>
                {t("p_8")}
              </p>
              <p>
                <a className="arrow" href={`/${locale}/contact/?topic=f-other`}>
                  {t("a_3")}
                </a>
              </p>
            </div>
            {"\n"}
            <nav className="pager" aria-label={s("previousAndNext")}>
              <a className="pg pg-next" href={`/${locale}/our-focus-global-capability-centres/`}>
                <span className="pg-k">
                  {s("next")}
                </span>
                {s("globalCapabilityCentres")}
              </a>
            </nav>
          </article>
        </div>
      </div>
      {"\n"}
    </main>
    </PageShell>
  );
}
