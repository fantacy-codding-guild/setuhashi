import { getTranslations, setRequestLocale } from "next-intl/server";
import PageShell from "@/components/PageShell";
import { pageMetadata, type PageProps } from "@/lib/metadata";

const PAGE = "our-experience";

export const generateMetadata = pageMetadata(PAGE);

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.our-experience");
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
              <span aria-current="page">
                {s("experienceWeBring")}
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
          <article className="view view-wide" aria-labelledby="vh">
            <h1 id="vh" className="v-h">
              {s("experienceWeBring")}
            </h1>
            {"\n"}
            <div className="attr-bar">
              <span className="tg">
                {s("ourTeamSIndividualExperience")}
              </span>
              {" "}
            </div>
            {"\n"}
            <p className="v-tag v-tag-plain">
              {t("p_2")}
            </p>
            {"\n"}
            <div className="filters" hidden>
              <p className="lab" id="flab">
                {t("p_3")}
              </p>
              <div className="fchips" role="group" aria-labelledby="flab">
                <button type="button" className="fchip" data-f="" aria-pressed="true">
                  {t("button_1")}
                </button>
                <button type="button" className="fchip" data-f="markets" aria-pressed="false">
                  {t("button_2")}
                </button>
                <button type="button" className="fchip" data-f="new" aria-pressed="false">
                  {t("button_3")}
                </button>
                <button type="button" className="fchip" data-f="customer" aria-pressed="false">
                  {t("button_4")}
                </button>
                <button type="button" className="fchip" data-f="ops" aria-pressed="false">
                  {t("button_5")}
                </button>
                <button type="button" className="fchip" data-f="change" aria-pressed="false">
                  {t("button_6")}
                </button>
                <button type="button" className="fchip" data-f="assess" aria-pressed="false">
                  {t("button_7")}
                </button>
                <button type="button" className="fchip" data-f="succession" aria-pressed="false">
                  {t("button_8")}
                </button>
                <button type="button" className="fchip" data-f="partners" aria-pressed="false">
                  {t("button_9")}
                </button>
                <button type="button" className="fchip" data-f="visibility" aria-pressed="false">
                  {t("button_10")}
                </button>
              </div>
              <p className="lab" id="plab">
                {t("p_4")}
              </p>
              <div className="fchips" role="group" aria-labelledby="plab">
                <button type="button" className="fchip" data-f="raju" aria-pressed="false">
                  {s("rajuLalwani")}
                </button>
                <button type="button" className="fchip" data-f="shyam" aria-pressed="false">
                  {s("shyamSundarPani")}
                </button>
                <button type="button" className="fchip" data-f="mak" aria-pressed="false">
                  {s("makarandDatar")}
                </button>
              </div>
              <p className="fcount" role="status" data-t={t("t_1")}></p>
            </div>
            {"\n"}
            <section className="st-group" aria-labelledby="sg-f">
              <h2 className="lab sp" id="sg-f">
                {t("h2_1")}
              </h2>
              <ul className="st-grid">
                <li className="st-card st-prior" data-tags="markets mak">
                  <a href={`/${locale}/our-experience-e01/`}>
                    {"\n"}
                    <span className="st-t">
                      {s("openingMarketsForIndustrialManufacturers")}
                    </span>
                    <span className="st-g">
                      {t("span_8")}
                    </span>
                    <span className="st-a">
                      {t("span_9")}
                    </span>
                  </a>
                </li>
                <li className="st-card st-prior" data-tags="markets mak">
                  <a href={`/${locale}/our-experience-e02/`}>
                    {"\n"}
                    <span className="st-t">
                      {s("helpingIndianManufacturersReachUsCustomers")}
                    </span>
                    <span className="st-g">
                      {t("span_11")}
                    </span>
                    <span className="st-a">
                      {t("span_12")}
                    </span>
                  </a>
                </li>
                <li className="st-card st-prior" data-tags="change mak">
                  <a href={`/${locale}/our-experience-e09/`}>
                    {"\n"}
                    <span className="st-t">
                      {s("supportingAJapaneseInstitutionSGlobal")}
                    </span>
                    <span className="st-g">
                      {t("span_14")}
                    </span>
                    <span className="st-a">
                      {t("span_15")}
                    </span>
                  </a>
                </li>
                <li className="st-card st-prior" data-tags="markets customer visibility shyam">
                  <a href={`/${locale}/our-experience-e22/`}>
                    {"\n"}
                    <span className="st-t">
                      {s("buildingAnIndianManufacturerSInternational")}
                    </span>
                    <span className="st-g">
                      {t("span_17")}
                    </span>
                    <span className="st-a">
                      {t("span_18")}
                    </span>
                  </a>
                </li>
                <li className="st-card st-prior" data-tags="markets partners shyam mak">
                  <a href={`/${locale}/our-experience-e19/`}>
                    {"\n"}
                    <span className="st-t">
                      {s("developingTwoRoutesIntoTurkey")}
                    </span>
                    <span className="st-g">
                      {t("span_20")}
                    </span>
                    <span className="st-a">
                      {s("shyamSundarPaniAndMakarandDatar")}
                    </span>
                  </a>
                </li>
                <li className="st-card st-prior" data-tags="markets shyam mak">
                  <a href={`/${locale}/our-experience-e20/`}>
                    {"\n"}
                    <span className="st-t">
                      {s("shapingATenMarketGrowthStrategy")}
                    </span>
                    <span className="st-g">
                      {t("span_23")}
                    </span>
                    <span className="st-a">
                      {s("shyamSundarPaniAndMakarandDatar")}
                    </span>
                  </a>
                </li>
                <li className="st-card st-prior" data-tags="visibility shyam">
                  <a href={`/${locale}/our-experience-e21/`}>
                    {"\n"}
                    <span className="st-t">
                      {s("positioningARegionForTechnologyInvestment")}
                    </span>
                    <span className="st-g">
                      {t("span_26")}
                    </span>
                    <span className="st-a">
                      {t("span_27")}
                    </span>
                  </a>
                </li>
              </ul>
            </section>
            <section className="st-group" aria-labelledby="sg-m">
              <h2 className="lab sp" id="sg-m">
                {t("h2_2")}
              </h2>
              <ul className="st-grid">
                <li className="st-card st-prior" data-tags="new assess mak">
                  <a href={`/${locale}/our-experience-e03/`}>
                    {"\n"}
                    <span className="st-t">
                      {s("creatingANewBusinessPossibilityFrom")}
                    </span>
                    <span className="st-g">
                      {t("span_29")}
                    </span>
                    <span className="st-a">
                      {t("span_30")}
                    </span>
                  </a>
                </li>
                <li className="st-card st-prior" data-tags="ops mak">
                  <a href={`/${locale}/our-experience-e04/`}>
                    {"\n"}
                    <span className="st-t">
                      {s("bringingAFragmentedGlobalOperationTogether")}
                    </span>
                    <span className="st-g">
                      {t("span_32")}
                    </span>
                    <span className="st-a">
                      {t("span_33")}
                    </span>
                  </a>
                </li>
                <li className="st-card st-prior" data-tags="customer mak">
                  <a href={`/${locale}/our-experience-e05/`}>
                    {"\n"}
                    <span className="st-t">
                      {s("improvingTheCustomerJourneyInInternational")}
                    </span>
                    <span className="st-g">
                      {t("span_35")}
                    </span>
                    <span className="st-a">
                      {t("span_36")}
                    </span>
                  </a>
                </li>
                <li className="st-card st-prior" data-tags="customer mak">
                  <a href={`/${locale}/our-experience-e06/`}>
                    {"\n"}
                    <span className="st-t">
                      {s("connectingCustomerStrategyWithImplementation")}
                    </span>
                    <span className="st-g">
                      {t("span_38")}
                    </span>
                    <span className="st-a">
                      {t("span_39")}
                    </span>
                  </a>
                </li>
                <li className="st-card st-prior" data-tags="ops mak">
                  <a href={`/${locale}/our-experience-e07/`}>
                    {"\n"}
                    <span className="st-t">
                      {s("helpingAnInvestmentBusinessLaunchProducts")}
                    </span>
                    <span className="st-g">
                      {t("span_41")}
                    </span>
                    <span className="st-a">
                      {t("span_42")}
                    </span>
                  </a>
                </li>
                <li className="st-card st-prior" data-tags="change succession mak">
                  <a href={`/${locale}/our-experience-e08/`}>
                    {"\n"}
                    <span className="st-t">
                      {s("coordinatingAConsistentCustomerExperienceAfter")}
                    </span>
                    <span className="st-g">
                      {t("span_44")}
                    </span>
                    <span className="st-a">
                      {t("span_45")}
                    </span>
                  </a>
                </li>
                <li className="st-card st-prior" data-tags="customer mak">
                  <a href={`/${locale}/our-experience-e10/`}>
                    {"\n"}
                    <span className="st-t">
                      {s("transformingSalesAndServiceAtScale")}
                    </span>
                    <span className="st-g">
                      {t("span_47")}
                    </span>
                    <span className="st-a">
                      {t("span_48")}
                    </span>
                  </a>
                </li>
                <li className="st-card st-prior" data-tags="customer mak">
                  <a href={`/${locale}/our-experience-e11/`}>
                    {"\n"}
                    <span className="st-t">
                      {s("changingPricingPracticesAcrossAGlobal")}
                    </span>
                    <span className="st-g">
                      {t("span_50")}
                    </span>
                    <span className="st-a">
                      {t("span_51")}
                    </span>
                  </a>
                </li>
                <li className="st-card st-prior" data-tags="ops mak">
                  <a href={`/${locale}/our-experience-e12/`}>
                    {"\n"}
                    <span className="st-t">
                      {s("improvingHowATechnologyOrganizationDelivers")}
                    </span>
                    <span className="st-g">
                      {t("span_53")}
                    </span>
                    <span className="st-a">
                      {t("span_54")}
                    </span>
                  </a>
                </li>
                <li className="st-card st-prior" data-tags="assess mak">
                  <a href={`/${locale}/our-experience-e13/`}>
                    {"\n"}
                    <span className="st-t">
                      {s("assessingConnectedFinancialRisks")}
                    </span>
                    <span className="st-g">
                      {t("span_56")}
                    </span>
                    <span className="st-a">
                      {t("span_57")}
                    </span>
                  </a>
                </li>
                <li className="st-card st-prior" data-tags="new partners shyam">
                  <a href={`/${locale}/our-experience-e14/`}>
                    {"\n"}
                    <span className="st-t">
                      {s("concludingInternationalLicensingAndManufacturingAgreements")}
                    </span>
                    <span className="st-g">
                      {t("span_59")}
                    </span>
                    <span className="st-a">
                      {t("span_60")}
                    </span>
                  </a>
                </li>
                <li className="st-card st-prior" data-tags="markets raju">
                  <a href={`/${locale}/our-experience-e15/`}>
                    {"\n"}
                    <span className="st-t">
                      {s("developingAUsMarketForProducts")}
                    </span>
                    <span className="st-g">
                      {t("span_62")}
                    </span>
                    <span className="st-a">
                      {t("span_63")}
                    </span>
                  </a>
                </li>
                <li className="st-card st-prior" data-tags="customer raju">
                  <a href={`/${locale}/our-experience-e16/`}>
                    {"\n"}
                    <span className="st-t">
                      {s("checkingQualityBeforeDeliveryInBespoke")}
                    </span>
                    <span className="st-g">
                      {t("span_65")}
                    </span>
                    <span className="st-a">
                      {t("span_66")}
                    </span>
                  </a>
                </li>
                <li className="st-card st-prior" data-tags="customer raju">
                  <a href={`/${locale}/our-experience-e17/`}>
                    {"\n"}
                    <span className="st-t">
                      {s("recruitingAdultStudentsInJapanAnd")}
                    </span>
                    <span className="st-g">
                      {t("span_68")}
                    </span>
                    <span className="st-a">
                      {t("span_69")}
                    </span>
                  </a>
                </li>
                <li className="st-card st-prior" data-tags="assess shyam mak">
                  <a href={`/${locale}/our-experience-e18/`}>
                    {"\n"}
                    <span className="st-t">
                      {s("developingAPlatformEvolutionRoadmap")}
                    </span>
                    <span className="st-g">
                      {t("span_71")}
                    </span>
                    <span className="st-a">
                      {s("shyamSundarPaniAndMakarandDatar")}
                    </span>
                  </a>
                </li>
                <li className="st-card st-prior" data-tags="customer raju">
                  <a href={`/${locale}/our-experience-e23/`}>
                    {"\n"}
                    <span className="st-t">
                      {s("buildingAJapaneseClienteleInUs")}
                    </span>
                    <span className="st-g">
                      {t("span_74")}
                    </span>
                    <span className="st-a">
                      {t("span_75")}
                    </span>
                  </a>
                </li>
                <li className="st-card st-prior" data-tags="ops raju">
                  <a href={`/${locale}/our-experience-e24/`}>
                    {"\n"}
                    <span className="st-t">
                      {s("automatingGuestFollowUpAndArrival")}
                    </span>
                    <span className="st-g">
                      {t("span_77")}
                    </span>
                    <span className="st-a">
                      {t("span_78")}
                    </span>
                  </a>
                </li>
                <li className="st-card st-prior" data-tags="customer raju">
                  <a href={`/${locale}/our-experience-e25/`}>
                    {"\n"}
                    <span className="st-t">
                      {s("turningAGuestRequestIntoA")}
                    </span>
                    <span className="st-g">
                      {t("span_80")}
                    </span>
                    <span className="st-a">
                      {t("span_81")}
                    </span>
                  </a>
                </li>
                <li className="st-card st-prior" data-tags="markets visibility shyam">
                  <a href={`/${locale}/our-experience-e26/`}>
                    {"\n"}
                    <span className="st-t">
                      {s("helpingOverseasBackedTechnologyStartUps")}
                    </span>
                    <span className="st-g">
                      {t("span_83")}
                    </span>
                    <span className="st-a">
                      {t("span_84")}
                    </span>
                  </a>
                </li>
                <li className="st-card st-prior" data-tags="visibility shyam">
                  <a href={`/${locale}/our-experience-e27/`}>
                    {"\n"}
                    <span className="st-t">
                      {s("conveningGovernmentsAndCorporateLocationDecision")}
                    </span>
                    <span className="st-g">
                      {t("span_86")}
                    </span>
                    <span className="st-a">
                      {t("span_87")}
                    </span>
                  </a>
                </li>
                <li className="st-card st-prior" data-tags="partners shyam">
                  <a href={`/${locale}/our-experience-e28/`}>
                    {"\n"}
                    <span className="st-t">
                      {s("concludingTechnologyPartnershipsWithIsraeliAnd")}
                    </span>
                    <span className="st-g">
                      {t("span_89")}
                    </span>
                    <span className="st-a">
                      {t("span_90")}
                    </span>
                  </a>
                </li>
                <li className="st-card st-prior" data-tags="succession shyam">
                  <a href={`/${locale}/our-experience-e29/`}>
                    {"\n"}
                    <span className="st-t">
                      {s("negotiatingAnOwnershipTransitionForA")}
                    </span>
                    <span className="st-g">
                      {t("span_92")}
                    </span>
                    <span className="st-a">
                      {t("span_93")}
                    </span>
                  </a>
                </li>
              </ul>
            </section>
            {"\n"}
            <nav className="pager" aria-label={s("previousAndNext")}>
              <a className="pg pg-next" href={`/${locale}/our-experience-scenarios/`}>
                <span className="pg-k">
                  {s("next")}
                </span>
                {s("illustrativeScenarios")}
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
