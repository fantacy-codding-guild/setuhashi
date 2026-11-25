import { getTranslations, setRequestLocale } from "next-intl/server";
import PageShell from "@/components/PageShell";
import { pageMetadata, type PageProps } from "@/lib/metadata";

const PAGE = "our-experience-h09";

export const generateMetadata = pageMetadata(PAGE);

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.our-experience-h09");
  const s = await getTranslations("shared");
  return (
    <PageShell locale={locale} page={PAGE}>
    <main id="main" className="main-exp">
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
              <a href={`/${locale}/our-experience/`}>
                {s("ourExperience")}
              </a>
            </li>
            <li>
              <a href={`/${locale}/our-experience-scenarios/`}>
                {s("illustrativeScenarios")}
              </a>
            </li>
            <li>
              <span aria-current="page">
                {s("preparingJapaneseAndIndianTeamsTo")}
              </span>
            </li>
          </ol>
        </nav>
        <div className="layout">
          <aside className="local" aria-label={s("ourExperience")}>
            {"\n"}
            <p className="local-k">
              <a href={`/${locale}/our-experience/`}>
                {s("ourExperience")}
              </a>
            </p>
            {"\n"}
            <p className="local-lead">
              {s("experienceWeBringAndTheObjectives")}
            </p>
            {"\n"}
            <details className="local-d" open>
              <summary>
                <span>
                  {s("inThisSectionIllustrativeScenarios")}
                </span>
                <span className="ln-count">
                  {s("t2Of2")}
                </span>
              </summary>
              {"\n"}
              <nav aria-label={s("inThisSection")}>
                <ul className="ln">
                  <li>
                    <a href={`/${locale}/our-experience/`}>
                      <span className="ln-l">
                        {s("experienceWeBring")}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href={`/${locale}/our-experience-scenarios/`} aria-current="page">
                      <span className="ln-l">
                        {s("illustrativeScenarios")}
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </details>
            {"\n"}
          </aside>
          <article className="view view-wide view-story" aria-labelledby="vh">
            {"\n"}
            <p className="back-off" data-from="o-4-3-1" hidden>
              <a href={`/${locale}/what-we-offer-objective-4/#o-4-3-1`} data-back-off="">
                {t("a_5")}
              </a>
            </p>
            <p className="back-off" data-from="o-4-3-2" hidden>
              <a href={`/${locale}/what-we-offer-objective-4/#o-4-3-2`} data-back-off="">
                {t("a_6")}
              </a>
            </p>
            <p className="back-off" data-from="o-4-3-3" hidden>
              <a href={`/${locale}/what-we-offer-objective-4/#o-4-3-3`} data-back-off="">
                {t("a_7")}
              </a>
            </p>
            {"\n"}
            <p className="back-coll">
              <a href={`/${locale}/our-experience-scenarios/`} data-back-coll="">
                {s("backToTheCollectionIllustrativeScenarios")}
              </a>
            </p>
            {"\n"}
            <div className="attr-bar">
              <span className="tg">
                {s("illustrativeScenario")}
              </span>
              {s("aHypotheticalExampleNotAnActual")}
            </div>
            {"\n"}
            <h1 id="vh" className="v-h">
              {s("preparingJapaneseAndIndianTeamsTo")}
            </h1>
            <p className="v-tag">
              {t("p_2")}
            </p>
            {"\n"}
            <div className="st-layout">
              <div className="st-body">
                <section className="st-sec">
                  <h2>
                    {s("theSituation")}
                  </h2>
                  <p>
                    {t("p_3")}
                  </p>
                </section>
                <section className="st-sec">
                  <h2>
                    {s("howSetuhashiCouldHelp")}
                  </h2>
                  <p>
                    {t("p_4")}
                  </p>
                </section>
                <section className="st-sec">
                  <h2>
                    {s("whatTheAssignmentCouldProduce")}
                  </h2>
                  <p>
                    {t("p_5")}
                  </p>
                </section>
                <section className="st-sec">
                  <h2>
                    {s("theIntendedValue")}
                  </h2>
                  <p>
                    {t("p_6")}
                  </p>
                </section>
              </div>
              <aside className="st-side">
                <h2 className="lab">
                  {s("relatedServices")}
                </h2>
                <ul className="go">
                  <li>
                    <a href={`/${locale}/what-we-offer-objective-4/#s-4-3`}>
                      {s("prepareTeamsToWorkTogether")}
                    </a>
                  </li>
                  <li>
                    <a href={`/${locale}/what-we-offer-objective-4/#s-4-2`}>
                      {s("improveExistingCollaborations")}
                    </a>
                  </li>
                </ul>
                {"\n"}
                <p className="acts">
                  <a className="btn btn-p" href={`/${locale}/contact/?topic=h-h09`}>
                    {s("discussASimilarSituation")}
                  </a>
                </p>
              </aside>
            </div>
            {"\n"}
            <nav className="pager" aria-label={s("previousAndNext")}>
              <a className="pg pg-prev" href={`/${locale}/our-experience-h08/`}>
                <span className="pg-k">
                  {s("previous")}
                </span>
                {s("aJapanIndiaVenturePreparingTo")}
              </a>
              <a className="pg pg-next" href={`/${locale}/our-experience-h10/`}>
                <span className="pg-k">
                  {s("next")}
                </span>
                {s("japaneseAndIndianFirmsDesigningA")}
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
