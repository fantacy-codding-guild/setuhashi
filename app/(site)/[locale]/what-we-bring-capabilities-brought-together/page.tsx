import { getTranslations, setRequestLocale } from "next-intl/server";
import PageShell from "@/components/PageShell";
import { pageMetadata, type PageProps } from "@/lib/metadata";

const PAGE = "what-we-bring-capabilities-brought-together";

export const generateMetadata = pageMetadata(PAGE);

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.what-we-bring-capabilities-brought-together");
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
                {s("capabilitiesBroughtTogether")}
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
                  {s("t3Of4")}
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
                    <a href={`/${locale}/what-we-bring-capabilities-brought-together/`} aria-current="page">
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
              {s("capabilitiesBroughtTogether")}
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
                    <line className="ln" x1="180" y1="110" x2="180" y2="28"></line>
                    <line className="ln" x1="180" y1="110" x2="310" y2="110"></line>
                    <line className="ln" x1="180" y1="110" x2="180" y2="192"></line>
                    <line className="ln" x1="180" y1="110" x2="50" y2="110"></line>
                    <circle className="hub" cx="180" cy="110" r="53"></circle>
                    <text x="180" y="115" textAnchor="middle" className="em inv hub-t">
                      {t("text_1")}
                    </text>
                    <rect className="f" x="132" y="11" width="96" height="34"></rect>
                    <text x="180" y="33" textAnchor="middle" className="sm">
                      {t("text_2")}
                    </text>
                    <rect className="f" x="262" y="93" width="96" height="34"></rect>
                    <text x="310" y="115" textAnchor="middle" className="sm">
                      {t("text_3")}
                    </text>
                    <rect className="f" x="132" y="175" width="96" height="34"></rect>
                    <text x="180" y="197" textAnchor="middle" className="sm">
                      {t("text_4")}
                    </text>
                    <rect className="f" x="2" y="93" width="96" height="34"></rect>
                    <text x="50" y="115" textAnchor="middle" className="sm">
                      {t("text_5")}
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
                <a className="arrow" href={`/${locale}/how-we-work-working-together/`}>
                  {s("workingTogether")}
                </a>
              </p>
            </div>
            {"\n"}
            <nav className="pager" aria-label={s("previousAndNext")}>
              <a className="pg pg-prev" href={`/${locale}/what-we-bring-development-connected-to-delivery/`}>
                <span className="pg-k">
                  {s("previous")}
                </span>
                {s("developmentConnectedToDelivery")}
              </a>
              <a className="pg pg-next" href={`/${locale}/what-we-bring-involvement-that-fits/`}>
                <span className="pg-k">
                  {s("next")}
                </span>
                {s("involvementThatFits")}
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
