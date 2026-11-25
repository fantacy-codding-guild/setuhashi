import { getTranslations, setRequestLocale } from "next-intl/server";
import PageShell from "@/components/PageShell";
import { pageMetadata, type PageProps } from "@/lib/metadata";

const PAGE = "what-we-offer-objective-1";

export const generateMetadata = pageMetadata(PAGE);

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.what-we-offer-objective-1");
  const s = await getTranslations("shared");
  return (
    <PageShell locale={locale} page={PAGE}>
    <main id="main" className="main-offer">
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
              <a href={`/${locale}/what-we-offer/`}>
                {s("whatWeOffer")}
              </a>
            </li>
            <li>
              <span aria-current="page">
                {s("findTheRightOpportunities")}
              </span>
            </li>
          </ol>
        </nav>
        <div className="layout layout-offer">
          <aside className="local local-offer local-tree" aria-label={s("whatWeOffer")}>
            {"\n"}
            <p className="local-k">
              <a href={`/${locale}/what-we-offer/`}>
                {s("whatWeOffer")}
              </a>
            </p>
            {"\n"}
            <details className="local-d" open>
              <summary>
                <span>
                  {s("objectiveFindTheRightOpportunities")}
                </span>
              </summary>
              {"\n"}
              <nav aria-label={s("objectivesAndServices")}>
                <p className="ln-h">
                  {s("yourObjectives")}
                </p>
                <ul className="ln ln-obj ln-tree">
                  <li>
                    <a href={`/${locale}/what-we-offer-objective-1/`} aria-current="page">
                      <span className="ln-l">
                        {s("findTheRightOpportunities")}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href={`/${locale}/what-we-offer-objective-2/`}>
                      <span className="ln-l">
                        {s("enterAndGrowInJapanOr")}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href={`/${locale}/what-we-offer-objective-3/`}>
                      <span className="ln-l">
                        {s("turnInterestIntoCommitments")}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href={`/${locale}/what-we-offer-objective-4/`}>
                      <span className="ln-l">
                        {s("setUpAndImproveOperations")}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href={`/${locale}/what-we-offer-objective-5/`}>
                      <span className="ln-l">
                        {s("createNewBusinessAndSustainValue")}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href={`/${locale}/what-we-offer-objective-6/`}>
                      <span className="ln-l">
                        {s("coordinateComplexInitiatives")}
                      </span>
                    </a>
                  </li>
                </ul>
                {"\n"}
                <p className="ln-all">
                  <a href={`/${locale}/what-we-offer-all-services/`}>
                    {s("viewAllServices")}
                  </a>
                </p>
              </nav>
            </details>
            {"\n"}
          </aside>
          {"\n"}
          <article className="view view-offer view-p1" aria-labelledby="vh">
            {"\n"}
            <p className="back-all" hidden>
              <a href={`/${locale}/what-we-offer-all-services/`} data-back-all="">
                {s("backToAllServices")}
              </a>
            </p>
            {"\n"}
            <p className="v-k">
              {s("objective")}
            </p>
            <h1 id="vh" className="v-h">
              {s("findTheRightOpportunities")}
            </h1>
            <p className="v-tag v-tag-plain">
              {t("p_3")}
            </p>
            {"\n"}
            <h2 className="lab sp">
              {s("servicesForThisObjective")}
            </h2>
            <p className="p1-hint">
              {s("selectAnOfferingToSeeWhat")}
            </p>
            <ul className="svc-cards p1-cards">
              <li className="svc-card p1-card" id="s-1-1">
                <h2 className="svc-n">
                  {s("assessOpportunities")}
                </h2>
                <p>
                  {t("p_5")}
                </p>
                {"\n"}
                <p className="lab">
                  {s("t4Offerings")}
                </p>
                <ul className="fcs">
                  <li>
                    <details className="fc" data-o="o-1-1-1" name="s-1-1">
                      <summary className="fc-s">
                        <span className="fc-n">
                          {s("opportunityAssessment")}
                        </span>
                        <span className="fc-i" aria-hidden="true"></span>
                      </summary>
                      {"\n"}
                      <div className="fc-b" id="o-1-1-1">
                        <p className="fc-pur">
                          {t("p_7")}
                        </p>
                        <dl className="fc-dl">
                          <div>
                            <dt>
                              {s("whatWeDo")}
                            </dt>
                            <dd>
                              {t("dd_1")}
                            </dd>
                          </div>
                          {"\n"}
                          <div>
                            <dt>
                              {s("whatYouReceive")}
                            </dt>
                            <dd>
                              {t("dd_2")}
                            </dd>
                          </div>
                          {"\n"}
                          <div>
                            <dt>
                              {s("whyThisMatters")}
                            </dt>
                            <dd>
                              {t("dd_3")}
                            </dd>
                          </div>
                        </dl>
                        <p className="fc-note">
                          {t("p_8")}
                        </p>
                        {"\n"}
                        <div className="fc-rel">
                          <p className="fc-l">
                            {s("directlyRelatedExperience")}
                          </p>
                          <p className="fc-g">
                            {s("ourTeamSIndividualExperience")}
                          </p>
                          <ul>
                            <li>
                              <a href={`/${locale}/our-experience-e18/?from=o-1-1-1`}>
                                <span className="fc-st">
                                  {s("developingAPlatformEvolutionRoadmap")}
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <p className="fc-act">
                          <a className="arrow" href={`/${locale}/contact/?topic=o-1-1-1`}>
                            {s("discussThisOffering")}
                          </a>
                        </p>
                      </div>
                    </details>
                  </li>
                  <li>
                    <details className="fc" data-o="o-1-1-2" name="s-1-1">
                      <summary className="fc-s">
                        <span className="fc-n">
                          {s("customerAndCounterpartScreening")}
                        </span>
                        <span className="fc-i" aria-hidden="true"></span>
                      </summary>
                      {"\n"}
                      <div className="fc-b" id="o-1-1-2">
                        <dl className="fc-dl">
                          <div>
                            <dt>
                              {s("whatWeDo")}
                            </dt>
                            <dd>
                              {t("dd_4")}
                            </dd>
                          </div>
                          {"\n"}
                          <div>
                            <dt>
                              {s("whatYouReceive")}
                            </dt>
                            <dd>
                              {t("dd_5")}
                            </dd>
                          </div>
                          {"\n"}
                          <div>
                            <dt>
                              {s("whyThisMatters")}
                            </dt>
                            <dd>
                              {t("dd_6")}
                            </dd>
                          </div>
                        </dl>
                        {"\n"}
                        <p className="fc-act">
                          <a className="arrow" href={`/${locale}/contact/?topic=o-1-1-2`}>
                            {s("discussThisOffering")}
                          </a>
                        </p>
                      </div>
                    </details>
                  </li>
                  <li>
                    <details className="fc" data-o="o-1-1-3" name="s-1-1">
                      <summary className="fc-s">
                        <span className="fc-n">
                          {s("commercialQualification")}
                        </span>
                        <span className="fc-i" aria-hidden="true"></span>
                      </summary>
                      {"\n"}
                      <div className="fc-b" id="o-1-1-3">
                        <dl className="fc-dl">
                          <div>
                            <dt>
                              {s("whatWeDo")}
                            </dt>
                            <dd>
                              {t("dd_7")}
                            </dd>
                          </div>
                          {"\n"}
                          <div>
                            <dt>
                              {s("whatYouReceive")}
                            </dt>
                            <dd>
                              {t("dd_8")}
                            </dd>
                          </div>
                          {"\n"}
                          <div>
                            <dt>
                              {s("whyThisMatters")}
                            </dt>
                            <dd>
                              {t("dd_9")}
                            </dd>
                          </div>
                        </dl>
                        {"\n"}
                        <div className="fc-rel">
                          <p className="fc-l">
                            {s("directlyRelatedExperience")}
                          </p>
                          <p className="fc-g">
                            {s("ourTeamSIndividualExperience")}
                          </p>
                          <ul>
                            <li>
                              <a href={`/${locale}/our-experience-e03/?from=o-1-1-3`}>
                                <span className="fc-st">
                                  {s("creatingANewBusinessPossibilityFrom")}
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <p className="fc-act">
                          <a className="arrow" href={`/${locale}/contact/?topic=o-1-1-3`}>
                            {s("discussThisOffering")}
                          </a>
                        </p>
                      </div>
                    </details>
                  </li>
                  <li>
                    <details className="fc" data-o="o-1-1-4" name="s-1-1">
                      <summary className="fc-s">
                        <span className="fc-n">
                          {s("prioritizedPursuitAgenda")}
                        </span>
                        <span className="fc-i" aria-hidden="true"></span>
                      </summary>
                      {"\n"}
                      <div className="fc-b" id="o-1-1-4">
                        <dl className="fc-dl">
                          <div>
                            <dt>
                              {s("whatWeDo")}
                            </dt>
                            <dd>
                              {t("dd_10")}
                            </dd>
                          </div>
                          {"\n"}
                          <div>
                            <dt>
                              {s("whatYouReceive")}
                            </dt>
                            <dd>
                              {t("dd_11")}
                            </dd>
                          </div>
                          {"\n"}
                          <div>
                            <dt>
                              {s("whyThisMatters")}
                            </dt>
                            <dd>
                              {t("dd_12")}
                            </dd>
                          </div>
                        </dl>
                        {"\n"}
                        <div className="fc-rel">
                          <p className="fc-l">
                            {s("directlyRelatedExperience")}
                          </p>
                          <p className="fc-g">
                            {s("ourTeamSIndividualExperience")}
                          </p>
                          <ul>
                            <li>
                              <a href={`/${locale}/our-experience-e20/?from=o-1-1-4`}>
                                <span className="fc-st">
                                  {s("shapingATenMarketGrowthStrategy")}
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <p className="fc-act">
                          <a className="arrow" href={`/${locale}/contact/?topic=o-1-1-4`}>
                            {s("discussThisOffering")}
                          </a>
                        </p>
                      </div>
                    </details>
                  </li>
                </ul>
                {"\n"}
                <p className="svc-act">
                  <a className="arrow" href={`/${locale}/contact/?topic=s-1-1`}>
                    {s("discussThisService")}
                  </a>
                </p>
              </li>
              <li className="svc-card p1-card" id="s-1-2">
                <h2 className="svc-n">
                  {s("adaptYourOfferForTheMarket")}
                </h2>
                <p>
                  {t("p_15")}
                </p>
                {"\n"}
                <p className="lab">
                  {s("t4Offerings")}
                </p>
                <ul className="fcs">
                  <li>
                    <details className="fc" data-o="o-1-2-1" name="s-1-2">
                      <summary className="fc-s">
                        <span className="fc-n">
                          {s("buyerRequirementAssessment")}
                        </span>
                        <span className="fc-i" aria-hidden="true"></span>
                      </summary>
                      {"\n"}
                      <div className="fc-b" id="o-1-2-1">
                        <dl className="fc-dl">
                          <div>
                            <dt>
                              {s("whatWeDo")}
                            </dt>
                            <dd>
                              {t("dd_13")}
                            </dd>
                          </div>
                          {"\n"}
                          <div>
                            <dt>
                              {s("whatYouReceive")}
                            </dt>
                            <dd>
                              {t("dd_14")}
                            </dd>
                          </div>
                          {"\n"}
                          <div>
                            <dt>
                              {s("whyThisMatters")}
                            </dt>
                            <dd>
                              {t("dd_15")}
                            </dd>
                          </div>
                        </dl>
                        {"\n"}
                        <div className="fc-rel">
                          <p className="fc-l">
                            {s("directlyRelatedExperience")}
                          </p>
                          <p className="fc-g">
                            {s("ourTeamSIndividualExperience")}
                          </p>
                          <ul>
                            <li>
                              <a href={`/${locale}/our-experience-e02/?from=o-1-2-1`}>
                                <span className="fc-st">
                                  {s("helpingIndianManufacturersReachUsCustomers")}
                                </span>
                              </a>
                            </li>
                          </ul>
                          <p className="fc-g">
                            {s("illustrativeScenariosHypothetical")}
                          </p>
                          <ul>
                            <li>
                              <a href={`/${locale}/our-experience-h01/?from=o-1-2-1`}>
                                <span className="fc-st">
                                  {s("aJapaneseManufacturerExploringIndia")}
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <p className="fc-act">
                          <a className="arrow" href={`/${locale}/contact/?topic=o-1-2-1`}>
                            {s("discussThisOffering")}
                          </a>
                        </p>
                      </div>
                    </details>
                  </li>
                  <li>
                    <details className="fc" data-o="o-1-2-2" name="s-1-2">
                      <summary className="fc-s">
                        <span className="fc-n">
                          {s("offerAdaptationAndLocalization")}
                        </span>
                        <span className="fc-i" aria-hidden="true"></span>
                      </summary>
                      {"\n"}
                      <div className="fc-b" id="o-1-2-2">
                        <dl className="fc-dl">
                          <div>
                            <dt>
                              {s("whatWeDo")}
                            </dt>
                            <dd>
                              {t("dd_16")}
                            </dd>
                          </div>
                          {"\n"}
                          <div>
                            <dt>
                              {s("whatYouReceive")}
                            </dt>
                            <dd>
                              {t("dd_17")}
                            </dd>
                          </div>
                          {"\n"}
                          <div>
                            <dt>
                              {s("whyThisMatters")}
                            </dt>
                            <dd>
                              {t("dd_18")}
                            </dd>
                          </div>
                        </dl>
                        {"\n"}
                        <div className="fc-rel">
                          <p className="fc-l">
                            {s("directlyRelatedExperience")}
                          </p>
                          <p className="fc-g">
                            {s("ourTeamSIndividualExperience")}
                          </p>
                          <ul>
                            <li>
                              <a href={`/${locale}/our-experience-e02/?from=o-1-2-2`}>
                                <span className="fc-st">
                                  {s("helpingIndianManufacturersReachUsCustomers")}
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href={`/${locale}/our-experience-e15/?from=o-1-2-2`}>
                                <span className="fc-st">
                                  {s("developingAUsMarketForProducts")}
                                </span>
                              </a>
                            </li>
                            <li>
                              <a href={`/${locale}/our-experience-e18/?from=o-1-2-2`}>
                                <span className="fc-st">
                                  {s("developingAPlatformEvolutionRoadmap")}
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <p className="fc-act">
                          <a className="arrow" href={`/${locale}/contact/?topic=o-1-2-2`}>
                            {s("discussThisOffering")}
                          </a>
                        </p>
                      </div>
                    </details>
                  </li>
                  <li>
                    <details className="fc" data-o="o-1-2-3" name="s-1-2">
                      <summary className="fc-s">
                        <span className="fc-n">
                          {s("commercialValidation")}
                        </span>
                        <span className="fc-i" aria-hidden="true"></span>
                      </summary>
                      {"\n"}
                      <div className="fc-b" id="o-1-2-3">
                        <dl className="fc-dl">
                          <div>
                            <dt>
                              {s("whatWeDo")}
                            </dt>
                            <dd>
                              {t("dd_19")}
                            </dd>
                          </div>
                          {"\n"}
                          <div>
                            <dt>
                              {s("whatYouReceive")}
                            </dt>
                            <dd>
                              {t("dd_20")}
                            </dd>
                          </div>
                          {"\n"}
                          <div>
                            <dt>
                              {s("whyThisMatters")}
                            </dt>
                            <dd>
                              {t("dd_21")}
                            </dd>
                          </div>
                        </dl>
                        {"\n"}
                        <p className="fc-act">
                          <a className="arrow" href={`/${locale}/contact/?topic=o-1-2-3`}>
                            {s("discussThisOffering")}
                          </a>
                        </p>
                      </div>
                    </details>
                  </li>
                  <li>
                    <details className="fc" data-o="o-1-2-4" name="s-1-2">
                      <summary className="fc-s">
                        <span className="fc-n">
                          {s("marketEntryBusinessCase")}
                        </span>
                        <span className="fc-i" aria-hidden="true"></span>
                      </summary>
                      {"\n"}
                      <div className="fc-b" id="o-1-2-4">
                        <dl className="fc-dl">
                          <div>
                            <dt>
                              {s("whatWeDo")}
                            </dt>
                            <dd>
                              {t("dd_22")}
                            </dd>
                          </div>
                          {"\n"}
                          <div>
                            <dt>
                              {s("whatYouReceive")}
                            </dt>
                            <dd>
                              {t("dd_23")}
                            </dd>
                          </div>
                          {"\n"}
                          <div>
                            <dt>
                              {s("whyThisMatters")}
                            </dt>
                            <dd>
                              {t("dd_24")}
                            </dd>
                          </div>
                        </dl>
                        {"\n"}
                        <p className="fc-act">
                          <a className="arrow" href={`/${locale}/contact/?topic=o-1-2-4`}>
                            {s("discussThisOffering")}
                          </a>
                        </p>
                      </div>
                    </details>
                  </li>
                </ul>
                {"\n"}
                <p className="svc-act">
                  <a className="arrow" href={`/${locale}/contact/?topic=s-1-2`}>
                    {s("discussThisService")}
                  </a>
                </p>
              </li>
              <li className="svc-card p1-card" id="s-1-3">
                <h2 className="svc-n">
                  {s("findAndDevelopSuitablePartnerships")}
                </h2>
                <p>
                  {t("p_22")}
                </p>
                {"\n"}
                <p className="lab">
                  {t("p_23")}
                </p>
                <ul className="fcs">
                  <li>
                    <details className="fc" data-o="o-1-3-1" name="s-1-3">
                      <summary className="fc-s">
                        <span className="fc-n">
                          {s("partnerSearchAndQualification")}
                        </span>
                        <span className="fc-i" aria-hidden="true"></span>
                      </summary>
                      {"\n"}
                      <div className="fc-b" id="o-1-3-1">
                        <dl className="fc-dl">
                          <div>
                            <dt>
                              {s("whatWeDo")}
                            </dt>
                            <dd>
                              {t("dd_25")}
                            </dd>
                          </div>
                          {"\n"}
                          <div>
                            <dt>
                              {s("whatYouReceive")}
                            </dt>
                            <dd>
                              {t("dd_26")}
                            </dd>
                          </div>
                          {"\n"}
                          <div>
                            <dt>
                              {s("whyThisMatters")}
                            </dt>
                            <dd>
                              {t("dd_27")}
                            </dd>
                          </div>
                        </dl>
                        {"\n"}
                        <div className="fc-rel">
                          <p className="fc-l">
                            {s("directlyRelatedExperience")}
                          </p>
                          <p className="fc-g">
                            {s("ourTeamSIndividualExperience")}
                          </p>
                          <ul>
                            <li>
                              <a href={`/${locale}/our-experience-e28/?from=o-1-3-1`}>
                                <span className="fc-st">
                                  {s("concludingTechnologyPartnershipsWithIsraeliAnd")}
                                </span>
                              </a>
                            </li>
                          </ul>
                          <p className="fc-g">
                            {s("illustrativeScenariosHypothetical")}
                          </p>
                          <ul>
                            <li>
                              <a href={`/${locale}/our-experience-h07/?from=o-1-3-1`}>
                                <span className="fc-st">
                                  {s("anIndianManufacturerLookingForA")}
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <p className="fc-act">
                          <a className="arrow" href={`/${locale}/contact/?topic=o-1-3-1`}>
                            {s("discussThisOffering")}
                          </a>
                        </p>
                      </div>
                    </details>
                  </li>
                  <li>
                    <details className="fc" data-o="o-1-3-2" name="s-1-3">
                      <summary className="fc-s">
                        <span className="fc-n">
                          {s("partnerFitAndExpectations")}
                        </span>
                        <span className="fc-i" aria-hidden="true"></span>
                      </summary>
                      {"\n"}
                      <div className="fc-b" id="o-1-3-2">
                        <dl className="fc-dl">
                          <div>
                            <dt>
                              {s("whatWeDo")}
                            </dt>
                            <dd>
                              {t("dd_28")}
                            </dd>
                          </div>
                          {"\n"}
                          <div>
                            <dt>
                              {s("whatYouReceive")}
                            </dt>
                            <dd>
                              {t("dd_29")}
                            </dd>
                          </div>
                          {"\n"}
                          <div>
                            <dt>
                              {s("whyThisMatters")}
                            </dt>
                            <dd>
                              {t("dd_30")}
                            </dd>
                          </div>
                        </dl>
                        {"\n"}
                        <div className="fc-rel">
                          <p className="fc-l">
                            {s("directlyRelatedExperience")}
                          </p>
                          <p className="fc-g">
                            {s("illustrativeScenariosHypothetical")}
                          </p>
                          <ul>
                            <li>
                              <a href={`/${locale}/our-experience-h07/?from=o-1-3-2`}>
                                <span className="fc-st">
                                  {s("anIndianManufacturerLookingForA")}
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <p className="fc-act">
                          <a className="arrow" href={`/${locale}/contact/?topic=o-1-3-2`}>
                            {s("discussThisOffering")}
                          </a>
                        </p>
                      </div>
                    </details>
                  </li>
                  <li>
                    <details className="fc" data-o="o-1-3-3" name="s-1-3">
                      <summary className="fc-s">
                        <span className="fc-n">
                          {s("partnershipDevelopment")}
                        </span>
                        <span className="fc-i" aria-hidden="true"></span>
                      </summary>
                      {"\n"}
                      <div className="fc-b" id="o-1-3-3">
                        <dl className="fc-dl">
                          <div>
                            <dt>
                              {s("whatWeDo")}
                            </dt>
                            <dd>
                              {t("dd_31")}
                            </dd>
                          </div>
                          {"\n"}
                          <div>
                            <dt>
                              {s("whatYouReceive")}
                            </dt>
                            <dd>
                              {t("dd_32")}
                            </dd>
                          </div>
                          {"\n"}
                          <div>
                            <dt>
                              {s("whyThisMatters")}
                            </dt>
                            <dd>
                              {t("dd_33")}
                            </dd>
                          </div>
                        </dl>
                        {"\n"}
                        <div className="fc-rel">
                          <p className="fc-l">
                            {s("directlyRelatedExperience")}
                          </p>
                          <p className="fc-g">
                            {s("ourTeamSIndividualExperience")}
                          </p>
                          <ul>
                            <li>
                              <a href={`/${locale}/our-experience-e19/?from=o-1-3-3`}>
                                <span className="fc-st">
                                  {s("developingTwoRoutesIntoTurkey")}
                                </span>
                              </a>
                            </li>
                          </ul>
                          <p className="fc-g">
                            {s("illustrativeScenariosHypothetical")}
                          </p>
                          <ul>
                            <li>
                              <a href={`/${locale}/our-experience-h07/?from=o-1-3-3`}>
                                <span className="fc-st">
                                  {s("anIndianManufacturerLookingForA")}
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <p className="fc-act">
                          <a className="arrow" href={`/${locale}/contact/?topic=o-1-3-3`}>
                            {s("discussThisOffering")}
                          </a>
                        </p>
                      </div>
                    </details>
                  </li>
                </ul>
                {"\n"}
                <p className="svc-act">
                  <a className="arrow" href={`/${locale}/contact/?topic=s-1-3`}>
                    {s("discussThisService")}
                  </a>
                </p>
              </li>
            </ul>
            {"\n"}
            <p className="p1-start">
              {s("youCanStartWithOneFocused")}
              <a className="arrow" href={`/${locale}/how-we-work/`}>
                {s("gettingStarted")}
              </a>
            </p>
            {"\n"}
            <p className="d-scope">
              {s("eachAssignmentIncludesTheOfferingsAgreed")}
            </p>
            {"\n"}
          </article>
        </div>
      </div>
      {"\n"}
    </main>
    </PageShell>
  );
}
