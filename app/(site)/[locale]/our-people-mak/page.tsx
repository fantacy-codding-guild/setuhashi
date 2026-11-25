import { getTranslations, setRequestLocale } from "next-intl/server";
import PageShell from "@/components/PageShell";
import { pageMetadata, type PageProps } from "@/lib/metadata";

const PAGE = "our-people-mak";

export const generateMetadata = pageMetadata(PAGE);

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.our-people-mak");
  const s = await getTranslations("shared");
  return (
    <PageShell locale={locale} page={PAGE}>
    <main id="main" className="main-people">
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
              <a href={`/${locale}/our-people/`}>
                {s("ourPeople")}
              </a>
            </li>
            <li>
              <span aria-current="page">
                {s("makarandDatar")}
              </span>
            </li>
          </ol>
        </nav>
        <div className="layout">
          <aside className="local" aria-label={s("ourPeople")}>
            {"\n"}
            <p className="local-k">
              <a href={`/${locale}/our-people/`}>
                {s("ourPeople")}
              </a>
            </p>
            {"\n"}
            <p className="local-lead">
              {s("diversePerspectivesOneSharedCommitment")}
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
                    <a href={`/${locale}/our-people/`}>
                      <span className="ln-l">
                        {s("overview")}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href={`/${locale}/our-people-raju/`}>
                      <span className="ln-l">
                        {s("rajuLalwani")}
                      </span>
                      <span className="ln-sub">
                        {s("managingPartner")}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href={`/${locale}/our-people-shyam/`}>
                      <span className="ln-l">
                        {s("shyamSundarPani")}
                      </span>
                      <span className="ln-sub">
                        {s("managingPartner")}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href={`/${locale}/our-people-mak/`} aria-current="page">
                      <span className="ln-l">
                        {s("makarandDatar")}
                      </span>
                      <span className="ln-sub">
                        {s("managingPartner")}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href={`/${locale}/our-people-isha/`}>
                      <span className="ln-l">
                        {s("ishaLagu")}
                      </span>
                      <span className="ln-sub">
                        {s("analystBusinessLegal")}
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </details>
            {"\n"}
          </aside>
          <article className="view view-wide view-profile" aria-labelledby="vh">
            {"\n"}
            <div className="pf-head">
              <div className="pf-img">
                <img className="ptr" src={"/assets/img/mak.jpg"} alt={s("portraitOfMakarandDatar")} width="640" height="800" loading="lazy" />
              </div>
              <div className="pf-id">
                {"\n"}
                <p className="v-k">
                  {s("managingPartner")}
                </p>
                <h1 id="vh" className="v-h">
                  {s("makarandDatar")}
                </h1>
                <p className="pf-fam">
                  {t("p_3")}
                </p>
                <p className="v-tag">
                  {t("p_4")}
                </p>
                {"\n"}
                <p className="pf-intro">
                  {t("p_5")}
                </p>
                <p className="em">
                  <span className="lab">
                    {s("email")}
                  </span>
                  <a href={"mailto:mak@setuhashi.com"}>
                    {t("a_4")}
                  </a>
                </p>
                <p className="em em-li">
                  <a href={"https://www.linkedin.com/in/mak-datar/"} target="_blank" rel="noopener noreferrer">
                    {s("linkedinProfile")}
                    <span aria-hidden="true">
                      {s("text")}
                    </span>
                    <span className="visually-hidden">
                      {s("opensInANewTab")}
                    </span>
                  </a>
                </p>
              </div>
            </div>
            {"\n"}
            <section className="pf-sec pf-x" aria-labelledby="pf-xh">
              <h2 id="pf-xh">
                {s("experienceHeBrings")}
              </h2>
              <div className="pf-x3">
                <p>
                  {t("p_6")}
                </p>
                <p>
                  {t("p_7")}
                </p>
                <p>
                  {t("p_8")}
                </p>
              </div>
            </section>
            <div className="pf-two">
              <section className="pf-sec">
                <h2>
                  {t("h2_2")}
                </h2>
                <p>
                  {t("p_9")}
                </p>
                <p>
                  {t("p_10")}
                </p>
              </section>
              <section className="pf-sec">
                <h2>
                  {s("hisCommitmentToSetuhashi")}
                </h2>
                <p>
                  {t("p_11")}
                </p>
              </section>
            </div>
            <section className="pf-cases" aria-labelledby="pf-ch">
              <h2 id="pf-ch">
                {s("selectedExperience")}
              </h2>
              <p className="pf-cst">
                {t("p_12")}
              </p>
              <ul className="pf-cg">
                <li className="pf-c">
                  <h3 className="pf-ct">
                    <a href={`/${locale}/our-experience-e09/`}>
                      {s("supportingAJapaneseInstitutionSGlobal")}
                    </a>
                  </h3>
                  <p className="pf-cr">
                    {t("p_13")}
                  </p>
                </li>
                <li className="pf-c">
                  <h3 className="pf-ct">
                    <a href={`/${locale}/our-experience-e01/`}>
                      {s("openingMarketsForIndustrialManufacturers")}
                    </a>
                  </h3>
                  <p className="pf-cr">
                    {t("p_14")}
                  </p>
                </li>
                <li className="pf-c">
                  <h3 className="pf-ct">
                    <a href={`/${locale}/our-experience-e02/`}>
                      {s("helpingIndianManufacturersReachUsCustomers")}
                    </a>
                  </h3>
                  <p className="pf-cr">
                    {t("p_15")}
                  </p>
                </li>
                <li className="pf-c">
                  <h3 className="pf-ct">
                    <a href={`/${locale}/our-experience-e20/`}>
                      {s("shapingATenMarketGrowthStrategy")}
                    </a>
                  </h3>
                  <p className="pf-cr">
                    {t("p_16")}
                  </p>
                  <p className="pf-cw">
                    {s("shyamSundarPaniAndMakarandDatar")}
                  </p>
                </li>
                <li className="pf-c">
                  <h3 className="pf-ct">
                    <a href={`/${locale}/our-experience-e03/`}>
                      {s("creatingANewBusinessPossibilityFrom")}
                    </a>
                  </h3>
                  <p className="pf-cr">
                    {t("p_18")}
                  </p>
                </li>
                <li className="pf-c">
                  <h3 className="pf-ct">
                    <a href={`/${locale}/our-experience-e10/`}>
                      {s("transformingSalesAndServiceAtScale")}
                    </a>
                  </h3>
                  <p className="pf-cr">
                    {t("p_19")}
                  </p>
                </li>
              </ul>
              <p className="pf-all">
                <a className="arrow" href={`/${locale}/our-experience/#f=mak`}>
                  {t("a_12")}
                </a>
              </p>
            </section>
            {"\n"}
            <nav className="pager" aria-label={s("previousAndNext")}>
              <a className="pg pg-prev" href={`/${locale}/our-people-shyam/`}>
                <span className="pg-k">
                  {s("previous")}
                </span>
                {s("shyamSundarPani")}
              </a>
              <a className="pg pg-next" href={`/${locale}/our-people-isha/`}>
                <span className="pg-k">
                  {s("next")}
                </span>
                {s("ishaLagu")}
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
