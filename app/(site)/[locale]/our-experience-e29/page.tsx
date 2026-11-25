import { getTranslations, setRequestLocale } from "next-intl/server";
import PageShell from "@/components/PageShell";
import { pageMetadata, type PageProps } from "@/lib/metadata";

const PAGE = "our-experience-e29";

export const generateMetadata = pageMetadata(PAGE);

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.our-experience-e29");
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
              <a href={`/${locale}/our-experience/`}>
                {s("experienceWeBring")}
              </a>
            </li>
            <li>
              <span aria-current="page">
                {s("negotiatingAnOwnershipTransitionForA")}
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
                  {s("inThisSectionExperienceWeBring")}
                </span>
                <span className="ln-count">
                  {s("t1Of2")}
                </span>
              </summary>
              {"\n"}
              <nav aria-label={s("inThisSection")}>
                <ul className="ln">
                  <li>
                    <a href={`/${locale}/our-experience/`} aria-current="page">
                      <span className="ln-l">
                        {s("experienceWeBring")}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href={`/${locale}/our-experience-scenarios/`}>
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
            <p className="back-off" data-from="o-3-1-3" hidden>
              <a href={`/${locale}/what-we-offer-objective-3/#o-3-1-3`} data-back-off="">
                {s("backToNegotiationSupport")}
              </a>
            </p>
            <p className="back-off" data-from="o-5-3-2" hidden>
              <a href={`/${locale}/what-we-offer-objective-5/#o-5-3-2`} data-back-off="">
                {t("a_6")}
              </a>
            </p>
            {"\n"}
            <p className="back-coll">
              <a href={`/${locale}/our-experience/`} data-back-coll="">
                {s("backToTheCollectionExperienceWe")}
              </a>
            </p>
            {"\n"}
            <div className="attr-bar">
              <span className="tg">
                {s("teamExperienceBeforeSetuhashi")}
              </span>
              {s("shyamSundarPaniSWorkBefore")}
            </div>
            {"\n"}
            <h1 id="vh" className="v-h">
              {s("negotiatingAnOwnershipTransitionForA")}
            </h1>
            <p className="v-tag">
              {t("p_2")}
            </p>
            {"\n"}
            <div className="st-layout">
              <div className="st-body">
                <section className="st-sec">
                  <h2>
                    {s("theObjective")}
                  </h2>
                  <p>
                    {t("p_3")}
                  </p>
                </section>
                <section className="st-sec">
                  <h2>
                    {s("shyamSContribution")}
                  </h2>
                  <p>
                    {t("p_4")}
                  </p>
                </section>
                <section className="st-sec">
                  <h2>
                    {t("h2_3")}
                  </h2>
                  <p>
                    {t("p_5")}
                  </p>
                  <p className="st-note">
                    {s("sourceShyamSundarPaniSAccount")}
                  </p>
                </section>
                <section className="st-sec">
                  <h2>
                    {s("theExperienceThisBrings")}
                  </h2>
                  <p>
                    {t("p_7")}
                  </p>
                </section>
              </div>
              <aside className="st-side">
                <h2 className="lab">
                  {s("relatedServices")}
                </h2>
                <ul className="go">
                  <li>
                    <a href={`/${locale}/what-we-offer-objective-5/#s-5-3`}>
                      {s("planForSuccessionAndRenewal")}
                    </a>
                  </li>
                  <li>
                    <a href={`/${locale}/what-we-offer-objective-3/#s-3-1`}>
                      {s("developWorkableAgreements")}
                    </a>
                  </li>
                </ul>
                <p className="st-note">
                  {s("linkedAsTransferableExperienceNotAs")}
                </p>
                {"\n"}
                <h2 className="lab">
                  {s("person")}
                </h2>
                <a className="st-person" href={`/${locale}/our-people-shyam/`}>
                  <img className="ptr ptr-xs" src={"/assets/img/shyam.jpg"} alt={s("portraitOfShyamSundarPani")} width="640" height="800" loading="lazy" />
                  <span>
                    {s("aboutShyamSundarPani")}
                  </span>
                </a>
                {"\n"}
                <p className="acts">
                  <a className="btn btn-p" href={`/${locale}/contact/?topic=e-e29`}>
                    {s("discussASimilarSituation")}
                  </a>
                </p>
              </aside>
            </div>
            {"\n"}
            <nav className="pager" aria-label={s("previousAndNext")}>
              <a className="pg pg-prev" href={`/${locale}/our-experience-e28/`}>
                <span className="pg-k">
                  {s("previous")}
                </span>
                {s("concludingTechnologyPartnershipsWithIsraeliAnd")}
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
