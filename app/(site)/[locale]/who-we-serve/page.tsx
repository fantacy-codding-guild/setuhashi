import { getTranslations, setRequestLocale } from "next-intl/server";
import PageShell from "@/components/PageShell";
import { pageMetadata, type PageProps } from "@/lib/metadata";

const PAGE = "who-we-serve";

export const generateMetadata = pageMetadata(PAGE);

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.who-we-serve");
  const s = await getTranslations("shared");
  return (
    <PageShell locale={locale} page={PAGE}>
    <main id="main" className="main-serve">
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
              <a href={`/${locale}/who-we-serve/`}>
                {s("whoWeServe")}
              </a>
            </li>
            <li>
              <span aria-current="page">
                {s("japaneseBusinesses")}
              </span>
            </li>
          </ol>
        </nav>
        <div className="layout">
          <aside className="local" aria-label={s("whoWeServe")}>
            {"\n"}
            <p className="local-k">
              <a href={`/${locale}/who-we-serve/`}>
                {s("whoWeServe")}
              </a>
            </p>
            {"\n"}
            <p className="local-lead">
              {s("differentStartingPointsPossibilitiesInBoth")}
            </p>
            <p className="local-intro">
              {s("weWorkWithJapaneseAndIndian")}
            </p>
            {"\n"}
            <details className="local-d" open>
              <summary>
                <span>
                  {t("span_2")}
                </span>
                <span className="ln-count">
                  {t("span_3")}
                </span>
              </summary>
              {"\n"}
              <nav aria-label={s("inThisSection")}>
                <ul className="ln">
                  <li>
                    <a href={`/${locale}/who-we-serve/`} aria-current="page">
                      <span className="ln-l">
                        {s("japaneseBusinesses")}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href={`/${locale}/who-we-serve-indian-businesses/`}>
                      <span className="ln-l">
                        {s("indianBusinesses")}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href={`/${locale}/who-we-serve-building-together/`}>
                      <span className="ln-l">
                        {s("buildingTogetherForOtherMarkets")}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href={`/${locale}/who-we-serve-providers-and-institutions/`}>
                      <span className="ln-l">
                        {s("providersAndInstitutions")}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href={`/${locale}/who-we-serve-government/`}>
                      <span className="ln-l">
                        {s("government")}
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
              {s("japaneseBusinesses")}
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
                <div className="v-q">
                  <p className="lab">
                    {s("yourStartingPointMightBe")}
                  </p>
                  <p>
                    {t("p_7")}
                  </p>
                </div>
              </div>
              <div className="v-fig">
                <figure className="fig fig-cor fig-cor5 fig-nav hi-jp">
                  <svg viewBox="0 0 400 300" role="group" aria-label={s("whoWeServeJapaneseBusinessesIndian")} focusable="false">
                    {"\n"}
                    <a className="box b-jp on" href={`/${locale}/who-we-serve/`} aria-label={s("japaneseBusinesses2")} aria-current="page">
                      <rect className="hit" x="12" y="16" width="164" height="64" rx="2"></rect>
                      <text textAnchor="middle">{t.rich("richtext_1", { tspan: (c) => <tspan x="94" y="43.5">{c}</tspan>, tspan2: (c) => <tspan x="94" y="64.5">{c}</tspan>, tspan3: (c) => <tspan x="94" y="54">{c}</tspan> })}</text>
                    </a>
                    {"\n"}
                    <a className="box b-in" href={`/${locale}/who-we-serve-indian-businesses/`} aria-label={s("indianBusinesses2")}>
                      <rect className="hit" x="224" y="16" width="164" height="64" rx="2"></rect>
                      <text textAnchor="middle">{t.rich("richtext_2", { tspan: (c) => <tspan x="306" y="43.5">{c}</tspan>, tspan2: (c) => <tspan x="306" y="64.5">{c}</tspan>, tspan3: (c) => <tspan x="306" y="54">{c}</tspan> })}</text>
                    </a>
                    {"\n"}
                    <g aria-hidden="true">
                      <g className="ar a-jp">
                        <path d="M180 38 H218"></path>
                        <path d="M210 32 L219 38 L210 44"></path>
                      </g>
                      {"\n"}
                      <g className="ar a-in">
                        <path d="M220 58 H182"></path>
                        <path d="M190 52 L181 58 L190 64"></path>
                      </g>
                      {"\n"}
                      <g className="ar a-joint">
                        <path d="M94 80 V100 H306 V80"></path>
                        <path d="M200 100 V116"></path>
                        <path d="M194 109 L200 118 L206 109"></path>
                      </g>
                      {"\n"}
                      <g className="ar a-sup">
                        <path d="M94 216 V198 H306 V216"></path>
                        <path d="M200 198 V184"></path>
                      </g>
                    </g>
                    {"\n"}
                    <a className="box b-joint" href={`/${locale}/who-we-serve-building-together/`} aria-label={s("buildingTogetherForOtherMarkets")}>
                      <rect className="hit" x="92" y="120" width="216" height="64" rx="2"></rect>
                      <text textAnchor="middle">{t.rich("richtext_3", { tspan: (c) => <tspan x="200" y="147.5">{c}</tspan>, tspan2: (c) => <tspan x="200" y="168.5">{c}</tspan> })}</text>
                    </a>
                    {"\n"}
                    <a className="box b-prov" href={`/${locale}/who-we-serve-providers-and-institutions/`} aria-label={s("providersAndInstitutions2")}>
                      <rect className="hit" x="12" y="220" width="164" height="64" rx="2"></rect>
                      <text textAnchor="middle">{t.rich("richtext_4", { tspan: (c) => <tspan x="94" y="247.5">{c}</tspan>, tspan2: (c) => <tspan x="94" y="268.5">{c}</tspan> })}</text>
                    </a>
                    {"\n"}
                    <a className="box b-gov" href={`/${locale}/who-we-serve-government/`} aria-label={s("government3")}>
                      <rect className="hit" x="224" y="220" width="164" height="64" rx="2"></rect>
                      <text textAnchor="middle">
                        <tspan x="306" y="258">
                          {s("government2")}
                        </tspan>
                      </text>
                    </a>
                    {"\n"}
                  </svg>
                  <figcaption>
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
                {s("exploreRelevantServices")}
              </h2>
              <ul className="go">
                <li>
                  <a href={`/${locale}/what-we-offer-objective-2/#s-2-2`}>
                    {s("reachCustomersInIndia")}
                  </a>
                </li>
                <li>
                  <a href={`/${locale}/what-we-offer-objective-1/#s-1-1`}>
                    {s("assessOpportunities")}
                  </a>
                </li>
                <li>
                  <a href={`/${locale}/what-we-offer-objective-4/#s-4-1`}>
                    {s("establishCrossBorderOperations")}
                  </a>
                </li>
                <li>
                  <a href={`/${locale}/what-we-offer-objective-4/#s-4-2`}>
                    {s("improveExistingCollaborations")}
                  </a>
                </li>
                <li>
                  <a href={`/${locale}/what-we-offer-objective-5/#s-5-3`}>
                    {s("planForSuccessionAndRenewal")}
                  </a>
                </li>
              </ul>
              {"\n"}
              <p className="acts">
                <a className="btn btn-p" href={`/${locale}/contact/?topic=a-jp`}>
                  {s("discussYourSituation")}
                </a>
              </p>
            </div>
            {"\n"}
            <nav className="pager" aria-label={s("previousAndNext")}>
              <a className="pg pg-next" href={`/${locale}/who-we-serve-indian-businesses/`}>
                <span className="pg-k">
                  {s("next")}
                </span>
                {s("indianBusinesses")}
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
