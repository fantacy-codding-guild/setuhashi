import { getTranslations, setRequestLocale } from "next-intl/server";
import PageShell from "@/components/PageShell";
import { pageMetadata, type PageProps } from "@/lib/metadata";

const PAGE = "what-we-do-develop-business";

export const generateMetadata = pageMetadata(PAGE);

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.what-we-do-develop-business");
  const s = await getTranslations("shared");
  return (
    <PageShell locale={locale} page={PAGE}>
    <main id="main" className="main-do">
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
              <a href={`/${locale}/what-we-do/`}>
                {s("whatWeDo2")}
              </a>
            </li>
            <li>
              <span aria-current="page">
                {s("developBusiness")}
              </span>
            </li>
          </ol>
        </nav>
        <div className="layout">
          <aside className="local" aria-label={s("whatWeDo2")}>
            {"\n"}
            <p className="local-k">
              <a href={`/${locale}/what-we-do/`}>
                {s("whatWeDo2")}
              </a>
            </p>
            {"\n"}
            <p className="local-lead">
              {s("ourWorkSpansFourConnectedActivities")}
            </p>
            {"\n"}
            <details className="local-d" open>
              <summary>
                <span>
                  {t("span_2")}
                </span>
                <span className="ln-count">
                  {s("t2Of4")}
                </span>
              </summary>
              {"\n"}
              <nav aria-label={s("inThisSection")}>
                <ul className="ln">
                  <li>
                    <a href={`/${locale}/what-we-do/`}>
                      <span className="ln-l">
                        {s("findOpportunities")}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href={`/${locale}/what-we-do-develop-business/`} aria-current="page">
                      <span className="ln-l">
                        {s("developBusiness")}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href={`/${locale}/what-we-do-put-plans-into-action/`}>
                      <span className="ln-l">
                        {s("putPlansIntoAction")}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href={`/${locale}/what-we-do-strengthen-and-renew/`}>
                      <span className="ln-l">
                        {s("strengthenAndRenew")}
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
              {s("developBusiness")}
            </h1>
            <p className="v-tag">
              {t("p_2")}
            </p>
            {"\n"}
            <div className="v-grid">
              <div className="v-body">
                <p>
                  {t("p_3")}
                </p>
                <div className="v-q">
                  <p className="lab">
                    {s("thePracticalQuestion")}
                  </p>
                  <p className="v-q-t">
                    {t("p_5")}
                  </p>
                </div>
              </div>
              <div className="v-fig">
                <figure className="fig fig-act fig-nav">
                  <svg viewBox="0 0 400 260" role="group" aria-label={s("connectedActivities")} focusable="false">
                    <g className="lk" aria-hidden="true">
                      <line x1="95" y1="60" x2="305" y2="60"></line>
                      <line x1="305" y1="60" x2="305" y2="200"></line>
                      <line x1="305" y1="200" x2="95" y2="200"></line>
                      <line x1="95" y1="200" x2="95" y2="60"></line>
                      <line x1="95" y1="60" x2="305" y2="200"></line>
                      <line x1="305" y1="60" x2="95" y2="200"></line>
                    </g>
                    <a className="nd" href={`/${locale}/what-we-do/`}>
                      <rect className="hit" x="7" y="34" width="176" height="52" rx="2"></rect>
                      <text x="95" y="65" textAnchor="middle">
                        {s("findOpportunities")}
                      </text>
                    </a>
                    <a className="nd on" href={`/${locale}/what-we-do-develop-business/`} aria-current="page">
                      <rect className="hit" x="217" y="34" width="176" height="52" rx="2"></rect>
                      <text x="305" y="65" textAnchor="middle">
                        {s("developBusiness")}
                      </text>
                    </a>
                    <a className="nd" href={`/${locale}/what-we-do-put-plans-into-action/`}>
                      <rect className="hit" x="217" y="174" width="176" height="52" rx="2"></rect>
                      <text x="305" y="205" textAnchor="middle">
                        {s("putPlansIntoAction")}
                      </text>
                    </a>
                    <a className="nd" href={`/${locale}/what-we-do-strengthen-and-renew/`}>
                      <rect className="hit" x="7" y="174" width="176" height="52" rx="2"></rect>
                      <text x="95" y="205" textAnchor="middle">
                        {s("strengthenAndRenew")}
                      </text>
                    </a>
                  </svg>
                  <figcaption>
                    {s("connectedActivitiesNotStagesAnAssignment")}
                    <span className="fig-hint">
                      {s("selectABoxToOpenThat")}
                    </span>
                  </figcaption>
                </figure>
              </div>
            </div>
            {"\n"}
            <div className="onward">
              <h2 className="lab">
                {s("servicesThatPutThisIntoPractice")}
              </h2>
              <ul className="go">
                <li>
                  <a href={`/${locale}/what-we-offer-objective-2/#s-2-1`}>
                    {s("reachCustomersInJapan")}
                  </a>
                </li>
                <li>
                  <a href={`/${locale}/what-we-offer-objective-2/#s-2-2`}>
                    {s("reachCustomersInIndia")}
                  </a>
                </li>
                <li>
                  <a href={`/${locale}/what-we-offer-objective-3/#s-3-1`}>
                    {s("developWorkableAgreements")}
                  </a>
                </li>
              </ul>
              {"\n"}
              <p className="go-more">
                <a className="arrow" href={`/${locale}/what-we-offer/`}>
                  {s("seeAllServicesInWhatWe")}
                </a>
              </p>
              {"\n"}
              <p className="acts">
                <a className="btn btn-p" href={`/${locale}/contact/`}>
                  {s("discussYourSituation")}
                </a>
              </p>
            </div>
            {"\n"}
            <nav className="pager" aria-label={s("previousAndNext")}>
              <a className="pg pg-prev" href={`/${locale}/what-we-do/`}>
                <span className="pg-k">
                  {s("previous")}
                </span>
                {s("findOpportunities")}
              </a>
              <a className="pg pg-next" href={`/${locale}/what-we-do-put-plans-into-action/`}>
                <span className="pg-k">
                  {s("next")}
                </span>
                {s("putPlansIntoAction")}
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
