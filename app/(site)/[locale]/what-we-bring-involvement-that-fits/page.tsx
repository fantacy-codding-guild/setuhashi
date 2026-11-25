import { getTranslations, setRequestLocale } from "next-intl/server";
import PageShell from "@/components/PageShell";
import { pageMetadata, type PageProps } from "@/lib/metadata";

const PAGE = "what-we-bring-involvement-that-fits";

export const generateMetadata = pageMetadata(PAGE);

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.what-we-bring-involvement-that-fits");
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
                {s("involvementThatFits")}
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
                  {s("t4Of4")}
                </span>
              </summary>
              {"\n"}
              <nav aria-label={s("inThisSection")}>
                <ul className="ln">
                  <li>
                    <a href={`/${locale}/what-we-bring/`}>
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
                    <a href={`/${locale}/what-we-bring-involvement-that-fits/`} aria-current="page">
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
              {s("involvementThatFits")}
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
                <p>
                  {t("p_5")}
                </p>
                <div className="v-mean">
                  <p className="lab">
                    {s("whatThisMeansForYou")}
                  </p>
                  <p>
                    {t("p_7")}
                  </p>
                </div>
              </div>
              <div className="v-fig">
                <figure className="fig fig-bring">
                  <svg viewBox="0 0 360 230" role="img" aria-label={t("label_4")} focusable="false">
                    <path className="ln thick" d="M36 60 H324"></path>
                    <rect className="f" x="6" y="80" width="60" height="60"></rect>
                    <text x="36" y="170" textAnchor="middle" className="sm">
                      {t("text_1")}
                    </text>
                    <rect className="solid" x="78" y="80" width="60" height="60"></rect>
                    <text x="108" y="170" textAnchor="middle" className="sm">
                      {t("text_2")}
                    </text>
                    <rect className="solid" x="150" y="80" width="60" height="60"></rect>
                    <text x="180" y="170" textAnchor="middle" className="sm">
                      {t("text_3")}
                    </text>
                    <rect className="f" x="222" y="80" width="60" height="60"></rect>
                    <text x="252" y="170" textAnchor="middle" className="sm">
                      {t("text_4")}
                    </text>
                    <rect className="f" x="294" y="80" width="60" height="60"></rect>
                    <text x="324" y="170" textAnchor="middle" className="sm">
                      {t("text_5")}
                    </text>
                    <path className="br" d="M36 196 V206 H180 V196"></path>
                    <path className="br" d="M108 214 V224 H324 V214"></path>
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
                <a className="arrow" href={`/${locale}/how-we-work-our-role/`}>
                  {s("ourRole")}
                </a>
              </p>
            </div>
            {"\n"}
            <nav className="pager" aria-label={s("previousAndNext")}>
              <a className="pg pg-prev" href={`/${locale}/what-we-bring-capabilities-brought-together/`}>
                <span className="pg-k">
                  {s("previous")}
                </span>
                {s("capabilitiesBroughtTogether")}
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
