import { getTranslations, setRequestLocale } from "next-intl/server";
import PageShell from "@/components/PageShell";
import { pageMetadata, type PageProps } from "@/lib/metadata";

const PAGE = "what-we-bring";

export const generateMetadata = pageMetadata(PAGE);

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.what-we-bring");
  const s = await getTranslations("shared");
  return (
    <PageShell locale={locale} page={PAGE}>
    <main id="main" className="main-bring">
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
              <a href={`/${locale}/what-we-bring/`}>
                {s("whatWeBring")}
              </a>
            </li>
            <li>
              <span aria-current="page">
                {s("bothSidesTogether")}
              </span>
            </li>
          </ol>
        </nav>
        <div className="layout">
          <aside className="local" aria-label={s("whatWeBring")}>
            {"\n"}
            <p className="local-k">
              <a href={`/${locale}/what-we-bring/`}>
                {s("whatWeBring")}
              </a>
            </p>
            {"\n"}
            <p className="local-lead">
              {s("complementaryStrengthsConnectedToDelivery")}
            </p>
            <p className="local-intro">
              {s("crossBorderBusinessNeedsMoreThan")}
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
                    <a href={`/${locale}/what-we-bring/`} aria-current="page">
                      <span className="ln-l">
                        {s("bothSidesTogether")}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href={`/${locale}/what-we-bring-development-connected-to-delivery/`}>
                      <span className="ln-l">
                        {s("developmentConnectedToDelivery")}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href={`/${locale}/what-we-bring-capabilities-brought-together/`}>
                      <span className="ln-l">
                        {s("capabilitiesBroughtTogether")}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href={`/${locale}/what-we-bring-involvement-that-fits/`}>
                      <span className="ln-l">
                        {s("involvementThatFits")}
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </details>
            {"\n"}
          </aside>
          <article className="view" aria-labelledby="vh">
            {"\n"}
            <h1 id="vh" className="v-h">
              {s("bothSidesTogether")}
            </h1>
            <p className="v-tag">
              {t("p_3")}
            </p>
            {"\n"}
            <div className="v-grid">
              <div className="v-body">
                <p>
                  {t("p_4")}
                </p>
                <div className="v-mean">
                  <p className="lab">
                    {s("whatThisMeansForYou")}
                  </p>
                  <p>
                    {t("p_6")}
                  </p>
                </div>
              </div>
              <div className="v-fig">
                <figure className="fig fig-bring">
                  <svg viewBox="0 0 360 230" role="img" aria-label={t("label_4")} focusable="false">
                    <rect className="f" x="20" y="24" width="150" height="84"></rect>
                    <rect className="f" x="190" y="24" width="150" height="84"></rect>
                    <line className="hair" x1="180" y1="14" x2="180" y2="118"></line>
                    {"\n"}
                    <text x="95" y="71" textAnchor="middle">
                      {t("text_1")}
                    </text>
                    <text x="265" y="71" textAnchor="middle">
                      {t("text_2")}
                    </text>
                    {"\n"}
                    <path className="ln" d="M95 108 V152 M265 108 V152"></path>
                    <rect className="solid" x="40" y="152" width="280" height="42"></rect>
                    <text x="180" y="178" textAnchor="middle" className="em inv">
                      {t("text_3")}
                    </text>
                  </svg>
                </figure>
              </div>
            </div>
            {"\n"}
            <div className="onward">
              <h2 className="lab">
                {s("howThisWorksInPractice")}
              </h2>
              <p>
                <a className="arrow" href={`/${locale}/how-we-work-clear-interests/`}>
                  {s("clearInterestsAndResponsibilities")}
                </a>
              </p>
            </div>
            {"\n"}
            <nav className="pager" aria-label={s("previousAndNext")}>
              <a className="pg pg-next" href={`/${locale}/what-we-bring-development-connected-to-delivery/`}>
                <span className="pg-k">
                  {s("next")}
                </span>
                {s("developmentConnectedToDelivery")}
              </a>
            </nav>
            {"\n"}
          </article>
        </div>
      </div>
      {"\n"}
    </main>
    </PageShell>
  );
}
