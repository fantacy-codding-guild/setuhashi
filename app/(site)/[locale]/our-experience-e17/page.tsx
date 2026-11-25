import { getTranslations, setRequestLocale } from "next-intl/server";
import PageShell from "@/components/PageShell";
import { pageMetadata, type PageProps } from "@/lib/metadata";

const PAGE = "our-experience-e17";

export const generateMetadata = pageMetadata(PAGE);

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.our-experience-e17");
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
                {s("recruitingAdultStudentsInJapanAnd")}
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
            <p className="back-coll">
              <a href={`/${locale}/our-experience/`} data-back-coll="">
                {s("backToTheCollectionExperienceWe")}
              </a>
            </p>
            {"\n"}
            <div className="attr-bar">
              <span className="tg">
                {s("individualProfessionalExperience")}
              </span>
              {s("rajuLalwaniSIndividualProfessionalExperience")}
            </div>
            {"\n"}
            <h1 id="vh" className="v-h">
              {s("recruitingAdultStudentsInJapanAnd")}
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
                    {s("rajuSContribution")}
                  </h2>
                  <p>
                    {t("p_4")}
                  </p>
                </section>
                <section className="st-sec">
                  <h2>
                    {s("theOutcome")}
                  </h2>
                  <p>
                    {t("p_5")}
                  </p>
                  <p className="st-note">
                    {s("sourceRajuLalwaniSAccount")}
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
                    <a href={`/${locale}/what-we-offer-objective-2/#s-2-1`}>
                      {s("reachCustomersInJapan")}
                    </a>
                  </li>
                  <li>
                    <a href={`/${locale}/what-we-offer-objective-4/#s-4-3`}>
                      {s("prepareTeamsToWorkTogether")}
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
                <a className="st-person" href={`/${locale}/our-people-raju/`}>
                  <img className="ptr ptr-xs" src={"/assets/img/raju.jpg"} alt={s("portraitOfRajuLalwani")} width="640" height="800" loading="lazy" />
                  <span>
                    {s("aboutRajuLalwani")}
                  </span>
                </a>
                {"\n"}
                <p className="acts">
                  <a className="btn btn-p" href={`/${locale}/contact/?topic=e-e17`}>
                    {s("discussASimilarSituation")}
                  </a>
                </p>
              </aside>
            </div>
            {"\n"}
            <nav className="pager" aria-label={s("previousAndNext")}>
              <a className="pg pg-prev" href={`/${locale}/our-experience-e16/`}>
                <span className="pg-k">
                  {s("previous")}
                </span>
                {s("checkingQualityBeforeDeliveryInBespoke")}
              </a>
              <a className="pg pg-next" href={`/${locale}/our-experience-e18/`}>
                <span className="pg-k">
                  {s("next")}
                </span>
                {s("developingAPlatformEvolutionRoadmap")}
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
