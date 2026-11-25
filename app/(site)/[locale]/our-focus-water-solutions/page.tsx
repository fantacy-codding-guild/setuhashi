import { getTranslations, setRequestLocale } from "next-intl/server";
import PageShell from "@/components/PageShell";
import { pageMetadata, type PageProps } from "@/lib/metadata";

const PAGE = "our-focus-water-solutions";

export const generateMetadata = pageMetadata(PAGE);

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.our-focus-water-solutions");
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
              <a href={`/${locale}/our-focus/`}>
                {s("ourFocus")}
              </a>
            </li>
            <li>
              <span aria-current="page">
                {s("waterSolutions")}
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
                  {s("t3Of4")}
                </span>
              </summary>
              {"\n"}
              <nav aria-label={s("inThisSection")}>
                <ul className="ln">
                  <li>
                    <a href={`/${locale}/our-focus/`}>
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
                    <a href={`/${locale}/our-focus-water-solutions/`} aria-current="page">
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
            <p className="v-k">
              {s("waterSolutions")}
            </p>
            <h1 id="vh" className="v-h">
              {t("h1_1")}
            </h1>
            {"\n"}
            <div className="v-body f-intro">
              <p>
                {t("p_3")}
              </p>
              <p>
                {t("p_4")}
              </p>
              <p>
                {t("p_5")}
              </p>
            </div>
            {"\n"}
            <h2 className="v-sub">
              {s("questionsWorthExploring")}
            </h2>
            <ul className="f-qs">
              <li>
                {t("li_1")}
              </li>
              <li>
                {t("li_2")}
              </li>
              <li>
                {t("li_3")}
              </li>
              <li>
                {t("li_4")}
              </li>
            </ul>
            {"\n"}
            <h2 className="v-sub">
              {s("whereSetuhashiCouldContribute")}
            </h2>
            <ul className="pairs pairs-3">
              <li>
                <h3 className="li-h">
                  {t("h3_1")}
                </h3>
                <p>
                  {t("p_6")}
                </p>
              </li>
              <li>
                <h3 className="li-h">
                  {t("h3_2")}
                </h3>
                <p>
                  {t("p_7")}
                </p>
              </li>
              <li>
                <h3 className="li-h">
                  {t("h3_3")}
                </h3>
                <p>
                  {t("p_8")}
                </p>
              </li>
            </ul>
            {"\n"}
            <div className="v-q">
              <p className="lab">
                {s("aPracticalStartingPoint")}
              </p>
              <p>
                {t("p_10")}
              </p>
            </div>
            <p className="v-emph">
              {t("p_11")}
            </p>
            {"\n"}
            <div className="onward">
              <h2 className="lab">
                {s("exploreRelevantServices")}
              </h2>
              <ul className="go">
                <li>
                  <a href={`/${locale}/what-we-offer-objective-1/#s-1-1`}>
                    {s("assessOpportunities")}
                  </a>
                </li>
                <li>
                  <a href={`/${locale}/what-we-offer-objective-1/#s-1-2`}>
                    {s("adaptYourOfferForTheMarket")}
                  </a>
                </li>
                <li>
                  <a href={`/${locale}/what-we-offer-objective-1/#s-1-3`}>
                    {s("findAndDevelopSuitablePartnerships")}
                  </a>
                </li>
                <li>
                  <a href={`/${locale}/what-we-offer-objective-3/#s-3-1`}>
                    {s("developWorkableAgreements")}
                  </a>
                </li>
                <li>
                  <a href={`/${locale}/what-we-offer-objective-5/#s-5-1`}>
                    {s("developNewOffersTogether")}
                  </a>
                </li>
              </ul>
              {"\n"}
              <p className="acts">
                <a className="btn btn-p" href={`/${locale}/contact/?topic=f-water`}>
                  {t("a_9")}
                </a>
              </p>
            </div>
            {"\n"}
            <nav className="pager" aria-label={s("previousAndNext")}>
              <a className="pg pg-prev" href={`/${locale}/our-focus-global-capability-centres/`}>
                <span className="pg-k">
                  {s("previous")}
                </span>
                {s("globalCapabilityCentres")}
              </a>
              <a className="pg pg-next" href={`/${locale}/our-focus-recycling-and-waste-management/`}>
                <span className="pg-k">
                  {s("next")}
                </span>
                {s("recyclingAndWasteManagement")}
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
