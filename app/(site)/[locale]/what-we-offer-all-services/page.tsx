import { getTranslations, setRequestLocale } from "next-intl/server";
import PageShell from "@/components/PageShell";
import { pageMetadata, type PageProps } from "@/lib/metadata";

const PAGE = "what-we-offer-all-services";

export const generateMetadata = pageMetadata(PAGE);

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.what-we-offer-all-services");
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
                {t("span_1")}
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
                  {t("span_2")}
                </span>
              </summary>
              {"\n"}
              <nav aria-label={s("objectivesAndServices")}>
                <p className="ln-h">
                  {s("yourObjectives")}
                </p>
                <ul className="ln ln-obj ln-tree">
                  <li>
                    <a href={`/${locale}/what-we-offer-objective-1/`}>
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
                  <a href={`/${locale}/what-we-offer-all-services/`} aria-current="page">
                    {s("viewAllServices")}
                  </a>
                </p>
              </nav>
            </details>
            {"\n"}
          </aside>
          {"\n"}
          <article className="view view-offer view-p1 view-all" aria-labelledby="vh">
            <h1 id="vh" className="v-h">
              {t("h1_1")}
            </h1>
            <p className="v-tag v-tag-plain">
              {t("p_2")}
            </p>
            {"\n"}
            <p className="p1-hint">
              {s("selectAnOfferingToSeeWhat")}
            </p>
            {"\n"}
            <div className="as-groups">
              <section className="as-grp" aria-labelledby="asg-1">
                <h2 id="asg-1">
                  <a href={`/${locale}/what-we-offer-objective-1/`}>
                    {s("findTheRightOpportunities")}
                  </a>
                </h2>
                <ul className="svc-cards p1-cards as-cards">
                  <li className="svc-card p1-card" id="s-1-1">
                    <h3 className="svc-n">
                      {s("assessOpportunities")}
                    </h3>
                    <p>
                      {t("p_4")}
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
                              {t("p_6")}
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
                              {t("p_7")}
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
                                  <a href={`/${locale}/our-experience-e18/?from=o-1-1-1&via=all`}>
                                    <span className="fc-st">
                                      {s("developingAPlatformEvolutionRoadmap")}
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <p className="fc-act">
                              <a className="arrow" href={`/${locale}/contact/?topic=o-1-1-1&via=all`}>
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
                              <a className="arrow" href={`/${locale}/contact/?topic=o-1-1-2&via=all`}>
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
                                  <a href={`/${locale}/our-experience-e03/?from=o-1-1-3&via=all`}>
                                    <span className="fc-st">
                                      {s("creatingANewBusinessPossibilityFrom")}
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <p className="fc-act">
                              <a className="arrow" href={`/${locale}/contact/?topic=o-1-1-3&via=all`}>
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
                                  <a href={`/${locale}/our-experience-e20/?from=o-1-1-4&via=all`}>
                                    <span className="fc-st">
                                      {s("shapingATenMarketGrowthStrategy")}
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <p className="fc-act">
                              <a className="arrow" href={`/${locale}/contact/?topic=o-1-1-4&via=all`}>
                                {s("discussThisOffering")}
                              </a>
                            </p>
                          </div>
                        </details>
                      </li>
                    </ul>
                    {"\n"}
                    <p className="svc-act">
                      <a className="arrow" href={`/${locale}/contact/?topic=s-1-1&via=all`}>
                        {s("discussThisService")}
                      </a>
                    </p>
                  </li>
                  <li className="svc-card p1-card" id="s-1-2">
                    <h3 className="svc-n">
                      {s("adaptYourOfferForTheMarket")}
                    </h3>
                    <p>
                      {t("p_14")}
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
                                  <a href={`/${locale}/our-experience-e02/?from=o-1-2-1&via=all`}>
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
                                  <a href={`/${locale}/our-experience-h01/?from=o-1-2-1&via=all`}>
                                    <span className="fc-st">
                                      {s("aJapaneseManufacturerExploringIndia")}
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <p className="fc-act">
                              <a className="arrow" href={`/${locale}/contact/?topic=o-1-2-1&via=all`}>
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
                                  <a href={`/${locale}/our-experience-e02/?from=o-1-2-2&via=all`}>
                                    <span className="fc-st">
                                      {s("helpingIndianManufacturersReachUsCustomers")}
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href={`/${locale}/our-experience-e15/?from=o-1-2-2&via=all`}>
                                    <span className="fc-st">
                                      {s("developingAUsMarketForProducts")}
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href={`/${locale}/our-experience-e18/?from=o-1-2-2&via=all`}>
                                    <span className="fc-st">
                                      {s("developingAPlatformEvolutionRoadmap")}
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <p className="fc-act">
                              <a className="arrow" href={`/${locale}/contact/?topic=o-1-2-2&via=all`}>
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
                              <a className="arrow" href={`/${locale}/contact/?topic=o-1-2-3&via=all`}>
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
                              <a className="arrow" href={`/${locale}/contact/?topic=o-1-2-4&via=all`}>
                                {s("discussThisOffering")}
                              </a>
                            </p>
                          </div>
                        </details>
                      </li>
                    </ul>
                    {"\n"}
                    <p className="svc-act">
                      <a className="arrow" href={`/${locale}/contact/?topic=s-1-2&via=all`}>
                        {s("discussThisService")}
                      </a>
                    </p>
                  </li>
                  <li className="svc-card p1-card" id="s-1-3">
                    <h3 className="svc-n">
                      {s("findAndDevelopSuitablePartnerships")}
                    </h3>
                    <p>
                      {t("p_21")}
                    </p>
                    {"\n"}
                    <p className="lab">
                      {t("p_22")}
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
                                  <a href={`/${locale}/our-experience-e28/?from=o-1-3-1&via=all`}>
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
                                  <a href={`/${locale}/our-experience-h07/?from=o-1-3-1&via=all`}>
                                    <span className="fc-st">
                                      {s("anIndianManufacturerLookingForA")}
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <p className="fc-act">
                              <a className="arrow" href={`/${locale}/contact/?topic=o-1-3-1&via=all`}>
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
                                  <a href={`/${locale}/our-experience-h07/?from=o-1-3-2&via=all`}>
                                    <span className="fc-st">
                                      {s("anIndianManufacturerLookingForA")}
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <p className="fc-act">
                              <a className="arrow" href={`/${locale}/contact/?topic=o-1-3-2&via=all`}>
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
                                  <a href={`/${locale}/our-experience-e19/?from=o-1-3-3&via=all`}>
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
                                  <a href={`/${locale}/our-experience-h07/?from=o-1-3-3&via=all`}>
                                    <span className="fc-st">
                                      {s("anIndianManufacturerLookingForA")}
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <p className="fc-act">
                              <a className="arrow" href={`/${locale}/contact/?topic=o-1-3-3&via=all`}>
                                {s("discussThisOffering")}
                              </a>
                            </p>
                          </div>
                        </details>
                      </li>
                    </ul>
                    {"\n"}
                    <p className="svc-act">
                      <a className="arrow" href={`/${locale}/contact/?topic=s-1-3&via=all`}>
                        {s("discussThisService")}
                      </a>
                    </p>
                  </li>
                </ul>
              </section>
              <section className="as-grp" aria-labelledby="asg-2">
                <h2 id="asg-2">
                  <a href={`/${locale}/what-we-offer-objective-2/`}>
                    {s("enterAndGrowInJapanOr")}
                  </a>
                </h2>
                <ul className="svc-cards p1-cards as-cards">
                  <li className="svc-card p1-card" id="s-2-1">
                    <h3 className="svc-n">
                      {s("reachCustomersInJapan")}
                    </h3>
                    <p>
                      {t("p_31")}
                    </p>
                    {"\n"}
                    <p className="lab">
                      {s("t4Offerings")}
                    </p>
                    <ul className="fcs">
                      <li>
                        <details className="fc" data-o="o-2-1-1" name="s-2-1">
                          <summary className="fc-s">
                            <span className="fc-n">
                              {s("japanEntryAssessment")}
                            </span>
                            <span className="fc-i" aria-hidden="true"></span>
                          </summary>
                          {"\n"}
                          <div className="fc-b" id="o-2-1-1">
                            <dl className="fc-dl">
                              <div>
                                <dt>
                                  {s("whatWeDo")}
                                </dt>
                                <dd>
                                  {t("dd_34")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whatYouReceive")}
                                </dt>
                                <dd>
                                  {t("dd_35")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whyThisMatters")}
                                </dt>
                                <dd>
                                  {t("dd_36")}
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
                                  <a href={`/${locale}/our-experience-h02/?from=o-2-1-1&via=all`}>
                                    <span className="fc-st">
                                      {s("anIndianSoftwareBusinessSeekingJapanese")}
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <p className="fc-act">
                              <a className="arrow" href={`/${locale}/contact/?topic=o-2-1-1&via=all`}>
                                {s("discussThisOffering")}
                              </a>
                            </p>
                          </div>
                        </details>
                      </li>
                      <li>
                        <details className="fc" data-o="o-2-1-2" name="s-2-1">
                          <summary className="fc-s">
                            <span className="fc-n">
                              {s("japanReadyOffer")}
                            </span>
                            <span className="fc-i" aria-hidden="true"></span>
                          </summary>
                          {"\n"}
                          <div className="fc-b" id="o-2-1-2">
                            <dl className="fc-dl">
                              <div>
                                <dt>
                                  {s("whatWeDo")}
                                </dt>
                                <dd>
                                  {t("dd_37")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whatYouReceive")}
                                </dt>
                                <dd>
                                  {t("dd_38")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whyThisMatters")}
                                </dt>
                                <dd>
                                  {t("dd_39")}
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
                                  <a href={`/${locale}/our-experience-h02/?from=o-2-1-2&via=all`}>
                                    <span className="fc-st">
                                      {s("anIndianSoftwareBusinessSeekingJapanese")}
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <p className="fc-act">
                              <a className="arrow" href={`/${locale}/contact/?topic=o-2-1-2&via=all`}>
                                {s("discussThisOffering")}
                              </a>
                            </p>
                          </div>
                        </details>
                      </li>
                      <li>
                        <details className="fc" data-o="o-2-1-3" name="s-2-1">
                          <summary className="fc-s">
                            <span className="fc-n">
                              {s("channelAndPartnerDevelopment")}
                            </span>
                            <span className="fc-i" aria-hidden="true"></span>
                          </summary>
                          {"\n"}
                          <div className="fc-b" id="o-2-1-3">
                            <dl className="fc-dl">
                              <div>
                                <dt>
                                  {s("whatWeDo")}
                                </dt>
                                <dd>
                                  {t("dd_40")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whatYouReceive")}
                                </dt>
                                <dd>
                                  {t("dd_41")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whyThisMatters")}
                                </dt>
                                <dd>
                                  {t("dd_42")}
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
                                  <a href={`/${locale}/our-experience-h02/?from=o-2-1-3&via=all`}>
                                    <span className="fc-st">
                                      {s("anIndianSoftwareBusinessSeekingJapanese")}
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <p className="fc-act">
                              <a className="arrow" href={`/${locale}/contact/?topic=o-2-1-3&via=all`}>
                                {s("discussThisOffering")}
                              </a>
                            </p>
                          </div>
                        </details>
                      </li>
                      <li>
                        <details className="fc" data-o="o-2-1-4" name="s-2-1">
                          <summary className="fc-s">
                            <span className="fc-n">
                              {s("firstCustomerDevelopment")}
                            </span>
                            <span className="fc-i" aria-hidden="true"></span>
                          </summary>
                          {"\n"}
                          <div className="fc-b" id="o-2-1-4">
                            <dl className="fc-dl">
                              <div>
                                <dt>
                                  {s("whatWeDo")}
                                </dt>
                                <dd>
                                  {t("dd_43")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whatYouReceive")}
                                </dt>
                                <dd>
                                  {t("dd_44")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whyThisMatters")}
                                </dt>
                                <dd>
                                  {t("dd_45")}
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
                                  <a href={`/${locale}/our-experience-h02/?from=o-2-1-4&via=all`}>
                                    <span className="fc-st">
                                      {s("anIndianSoftwareBusinessSeekingJapanese")}
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <p className="fc-act">
                              <a className="arrow" href={`/${locale}/contact/?topic=o-2-1-4&via=all`}>
                                {s("discussThisOffering")}
                              </a>
                            </p>
                          </div>
                        </details>
                      </li>
                    </ul>
                    {"\n"}
                    <p className="svc-act">
                      <a className="arrow" href={`/${locale}/contact/?topic=s-2-1&via=all`}>
                        {s("discussThisService")}
                      </a>
                    </p>
                  </li>
                  <li className="svc-card p1-card" id="s-2-2">
                    <h3 className="svc-n">
                      {s("reachCustomersInIndia")}
                    </h3>
                    <p>
                      {t("p_41")}
                    </p>
                    {"\n"}
                    <p className="lab">
                      {s("t4Offerings")}
                    </p>
                    <ul className="fcs">
                      <li>
                        <details className="fc" data-o="o-2-2-1" name="s-2-2">
                          <summary className="fc-s">
                            <span className="fc-n">
                              {s("indiaEntryOptionAssessment")}
                            </span>
                            <span className="fc-i" aria-hidden="true"></span>
                          </summary>
                          {"\n"}
                          <div className="fc-b" id="o-2-2-1">
                            <dl className="fc-dl">
                              <div>
                                <dt>
                                  {s("whatWeDo")}
                                </dt>
                                <dd>
                                  {t("dd_46")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whatYouReceive")}
                                </dt>
                                <dd>
                                  {t("dd_47")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whyThisMatters")}
                                </dt>
                                <dd>
                                  {t("dd_48")}
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
                                  <a href={`/${locale}/our-experience-e01/?from=o-2-2-1&via=all`}>
                                    <span className="fc-st">
                                      {s("openingMarketsForIndustrialManufacturers")}
                                    </span>
                                  </a>
                                </li>
                              </ul>
                              <p className="fc-g">
                                {s("illustrativeScenariosHypothetical")}
                              </p>
                              <ul>
                                <li>
                                  <a href={`/${locale}/our-experience-h01/?from=o-2-2-1&via=all`}>
                                    <span className="fc-st">
                                      {s("aJapaneseManufacturerExploringIndia")}
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <p className="fc-act">
                              <a className="arrow" href={`/${locale}/contact/?topic=o-2-2-1&via=all`}>
                                {s("discussThisOffering")}
                              </a>
                            </p>
                          </div>
                        </details>
                      </li>
                      <li>
                        <details className="fc" data-o="o-2-2-2" name="s-2-2">
                          <summary className="fc-s">
                            <span className="fc-n">
                              {s("offerAdaptationForIndianBuyers")}
                            </span>
                            <span className="fc-i" aria-hidden="true"></span>
                          </summary>
                          {"\n"}
                          <div className="fc-b" id="o-2-2-2">
                            <dl className="fc-dl">
                              <div>
                                <dt>
                                  {s("whatWeDo")}
                                </dt>
                                <dd>
                                  {t("dd_49")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whatYouReceive")}
                                </dt>
                                <dd>
                                  {t("dd_50")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whyThisMatters")}
                                </dt>
                                <dd>
                                  {t("dd_51")}
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
                                  <a href={`/${locale}/our-experience-e01/?from=o-2-2-2&via=all`}>
                                    <span className="fc-st">
                                      {s("openingMarketsForIndustrialManufacturers")}
                                    </span>
                                  </a>
                                </li>
                              </ul>
                              <p className="fc-g">
                                {s("illustrativeScenariosHypothetical")}
                              </p>
                              <ul>
                                <li>
                                  <a href={`/${locale}/our-experience-h01/?from=o-2-2-2&via=all`}>
                                    <span className="fc-st">
                                      {s("aJapaneseManufacturerExploringIndia")}
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <p className="fc-act">
                              <a className="arrow" href={`/${locale}/contact/?topic=o-2-2-2&via=all`}>
                                {s("discussThisOffering")}
                              </a>
                            </p>
                          </div>
                        </details>
                      </li>
                      <li>
                        <details className="fc" data-o="o-2-2-3" name="s-2-2">
                          <summary className="fc-s">
                            <span className="fc-n">
                              {s("operatingAndChannelPartnerIdentification")}
                            </span>
                            <span className="fc-i" aria-hidden="true"></span>
                          </summary>
                          {"\n"}
                          <div className="fc-b" id="o-2-2-3">
                            <dl className="fc-dl">
                              <div>
                                <dt>
                                  {s("whatWeDo")}
                                </dt>
                                <dd>
                                  {t("dd_52")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whatYouReceive")}
                                </dt>
                                <dd>
                                  {t("dd_53")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whyThisMatters")}
                                </dt>
                                <dd>
                                  {t("dd_54")}
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
                                  <a href={`/${locale}/our-experience-e01/?from=o-2-2-3&via=all`}>
                                    <span className="fc-st">
                                      {s("openingMarketsForIndustrialManufacturers")}
                                    </span>
                                  </a>
                                </li>
                              </ul>
                              <p className="fc-g">
                                {s("illustrativeScenariosHypothetical")}
                              </p>
                              <ul>
                                <li>
                                  <a href={`/${locale}/our-experience-h01/?from=o-2-2-3&via=all`}>
                                    <span className="fc-st">
                                      {s("aJapaneseManufacturerExploringIndia")}
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <p className="fc-act">
                              <a className="arrow" href={`/${locale}/contact/?topic=o-2-2-3&via=all`}>
                                {s("discussThisOffering")}
                              </a>
                            </p>
                          </div>
                        </details>
                      </li>
                      <li>
                        <details className="fc" data-o="o-2-2-4" name="s-2-2">
                          <summary className="fc-s">
                            <span className="fc-n">
                              {s("localCommercialSetUp")}
                            </span>
                            <span className="fc-i" aria-hidden="true"></span>
                          </summary>
                          {"\n"}
                          <div className="fc-b" id="o-2-2-4">
                            <dl className="fc-dl">
                              <div>
                                <dt>
                                  {s("whatWeDo")}
                                </dt>
                                <dd>
                                  {t("dd_55")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whatYouReceive")}
                                </dt>
                                <dd>
                                  {t("dd_56")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whyThisMatters")}
                                </dt>
                                <dd>
                                  {t("dd_57")}
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
                                  <a href={`/${locale}/our-experience-e01/?from=o-2-2-4&via=all`}>
                                    <span className="fc-st">
                                      {s("openingMarketsForIndustrialManufacturers")}
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <p className="fc-act">
                              <a className="arrow" href={`/${locale}/contact/?topic=o-2-2-4&via=all`}>
                                {s("discussThisOffering")}
                              </a>
                            </p>
                          </div>
                        </details>
                      </li>
                    </ul>
                    {"\n"}
                    <p className="svc-act">
                      <a className="arrow" href={`/${locale}/contact/?topic=s-2-2&via=all`}>
                        {s("discussThisService")}
                      </a>
                    </p>
                  </li>
                  <li className="svc-card p1-card" id="s-2-3">
                    <h3 className="svc-n">
                      {s("growYourMarketPresence")}
                    </h3>
                    <p>
                      {t("p_54")}
                    </p>
                    {"\n"}
                    <p className="lab">
                      {s("t4Offerings")}
                    </p>
                    <ul className="fcs">
                      <li>
                        <details className="fc" data-o="o-2-3-1" name="s-2-3">
                          <summary className="fc-s">
                            <span className="fc-n">
                              {s("growthAndChannelReview")}
                            </span>
                            <span className="fc-i" aria-hidden="true"></span>
                          </summary>
                          {"\n"}
                          <div className="fc-b" id="o-2-3-1">
                            <dl className="fc-dl">
                              <div>
                                <dt>
                                  {s("whatWeDo")}
                                </dt>
                                <dd>
                                  {t("dd_58")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whatYouReceive")}
                                </dt>
                                <dd>
                                  {t("dd_59")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whyThisMatters")}
                                </dt>
                                <dd>
                                  {t("dd_60")}
                                </dd>
                              </div>
                            </dl>
                            {"\n"}
                            <p className="fc-act">
                              <a className="arrow" href={`/${locale}/contact/?topic=o-2-3-1&via=all`}>
                                {s("discussThisOffering")}
                              </a>
                            </p>
                          </div>
                        </details>
                      </li>
                      <li>
                        <details className="fc" data-o="o-2-3-2" name="s-2-3">
                          <summary className="fc-s">
                            <span className="fc-n">
                              {s("channelAndPartnerNetworkDevelopment")}
                            </span>
                            <span className="fc-i" aria-hidden="true"></span>
                          </summary>
                          {"\n"}
                          <div className="fc-b" id="o-2-3-2">
                            <dl className="fc-dl">
                              <div>
                                <dt>
                                  {s("whatWeDo")}
                                </dt>
                                <dd>
                                  {t("dd_61")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whatYouReceive")}
                                </dt>
                                <dd>
                                  {t("dd_62")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whyThisMatters")}
                                </dt>
                                <dd>
                                  {t("dd_63")}
                                </dd>
                              </div>
                            </dl>
                            {"\n"}
                            <p className="fc-act">
                              <a className="arrow" href={`/${locale}/contact/?topic=o-2-3-2&via=all`}>
                                {s("discussThisOffering")}
                              </a>
                            </p>
                          </div>
                        </details>
                      </li>
                      <li>
                        <details className="fc" data-o="o-2-3-3" name="s-2-3">
                          <summary className="fc-s">
                            <span className="fc-n">
                              {s("customerAccessProgramme")}
                            </span>
                            <span className="fc-i" aria-hidden="true"></span>
                          </summary>
                          {"\n"}
                          <div className="fc-b" id="o-2-3-3">
                            <dl className="fc-dl">
                              <div>
                                <dt>
                                  {s("whatWeDo")}
                                </dt>
                                <dd>
                                  {t("dd_64")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whatYouReceive")}
                                </dt>
                                <dd>
                                  {t("dd_65")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whyThisMatters")}
                                </dt>
                                <dd>
                                  {t("dd_66")}
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
                                  <a href={`/${locale}/our-experience-e02/?from=o-2-3-3&via=all`}>
                                    <span className="fc-st">
                                      {s("helpingIndianManufacturersReachUsCustomers")}
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href={`/${locale}/our-experience-e15/?from=o-2-3-3&via=all`}>
                                    <span className="fc-st">
                                      {s("developingAUsMarketForProducts")}
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href={`/${locale}/our-experience-e21/?from=o-2-3-3&via=all`}>
                                    <span className="fc-st">
                                      {s("positioningARegionForTechnologyInvestment")}
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <p className="fc-act">
                              <a className="arrow" href={`/${locale}/contact/?topic=o-2-3-3&via=all`}>
                                {s("discussThisOffering")}
                              </a>
                            </p>
                          </div>
                        </details>
                      </li>
                      <li>
                        <details className="fc" data-o="o-2-3-4" name="s-2-3">
                          <summary className="fc-s">
                            <span className="fc-n">
                              {s("expansionPlan")}
                            </span>
                            <span className="fc-i" aria-hidden="true"></span>
                          </summary>
                          {"\n"}
                          <div className="fc-b" id="o-2-3-4">
                            <dl className="fc-dl">
                              <div>
                                <dt>
                                  {s("whatWeDo")}
                                </dt>
                                <dd>
                                  {t("dd_67")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whatYouReceive")}
                                </dt>
                                <dd>
                                  {t("dd_68")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whyThisMatters")}
                                </dt>
                                <dd>
                                  {t("dd_69")}
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
                                  <a href={`/${locale}/our-experience-e20/?from=o-2-3-4&via=all`}>
                                    <span className="fc-st">
                                      {s("shapingATenMarketGrowthStrategy")}
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <p className="fc-act">
                              <a className="arrow" href={`/${locale}/contact/?topic=o-2-3-4&via=all`}>
                                {s("discussThisOffering")}
                              </a>
                            </p>
                          </div>
                        </details>
                      </li>
                    </ul>
                    {"\n"}
                    <p className="svc-act">
                      <a className="arrow" href={`/${locale}/contact/?topic=s-2-3&via=all`}>
                        {s("discussThisService")}
                      </a>
                    </p>
                  </li>
                </ul>
              </section>
              <section className="as-grp" aria-labelledby="asg-3">
                <h2 id="asg-3">
                  <a href={`/${locale}/what-we-offer-objective-3/`}>
                    {s("turnInterestIntoCommitments")}
                  </a>
                </h2>
                <ul className="svc-cards p1-cards as-cards">
                  <li className="svc-card p1-card" id="s-3-1">
                    <h3 className="svc-n">
                      {s("developWorkableAgreements")}
                    </h3>
                    <p>
                      {t("p_60")}
                    </p>
                    {"\n"}
                    <p className="lab">
                      {s("t4Offerings")}
                    </p>
                    <ul className="fcs">
                      <li>
                        <details className="fc" data-o="o-3-1-1" name="s-3-1">
                          <summary className="fc-s">
                            <span className="fc-n">
                              {s("collaborationDesign")}
                            </span>
                            <span className="fc-i" aria-hidden="true"></span>
                          </summary>
                          {"\n"}
                          <div className="fc-b" id="o-3-1-1">
                            <dl className="fc-dl">
                              <div>
                                <dt>
                                  {s("whatWeDo")}
                                </dt>
                                <dd>
                                  {t("dd_70")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whatYouReceive")}
                                </dt>
                                <dd>
                                  {t("dd_71")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whyThisMatters")}
                                </dt>
                                <dd>
                                  {t("dd_72")}
                                </dd>
                              </div>
                            </dl>
                            {"\n"}
                            <p className="fc-act">
                              <a className="arrow" href={`/${locale}/contact/?topic=o-3-1-1&via=all`}>
                                {s("discussThisOffering")}
                              </a>
                            </p>
                          </div>
                        </details>
                      </li>
                      <li>
                        <details className="fc" data-o="o-3-1-2" name="s-3-1">
                          <summary className="fc-s">
                            <span className="fc-n">
                              {s("pilotToDecisionPlanning")}
                            </span>
                            <span className="fc-i" aria-hidden="true"></span>
                          </summary>
                          {"\n"}
                          <div className="fc-b" id="o-3-1-2">
                            <p className="fc-pur">
                              {t("p_62")}
                            </p>
                            <dl className="fc-dl">
                              <div>
                                <dt>
                                  {s("whatWeDo")}
                                </dt>
                                <dd>
                                  {t("dd_73")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whatYouReceive")}
                                </dt>
                                <dd>
                                  {t("dd_74")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whyThisMatters")}
                                </dt>
                                <dd>
                                  {t("dd_75")}
                                </dd>
                              </div>
                            </dl>
                            <p className="fc-note">
                              {t("p_63")}
                            </p>
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
                                  <a href={`/${locale}/our-experience-h03/?from=o-3-1-2&via=all`}>
                                    <span className="fc-st">
                                      {s("aJapaneseBusinessSeekingEngineeringCapability")}
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <p className="fc-act">
                              <a className="arrow" href={`/${locale}/contact/?topic=o-3-1-2&via=all`}>
                                {s("discussThisOffering")}
                              </a>
                            </p>
                          </div>
                        </details>
                      </li>
                      <li>
                        <details className="fc" data-o="o-3-1-3" name="s-3-1">
                          <summary className="fc-s">
                            <span className="fc-n">
                              {s("negotiationSupport")}
                            </span>
                            <span className="fc-i" aria-hidden="true"></span>
                          </summary>
                          {"\n"}
                          <div className="fc-b" id="o-3-1-3">
                            <dl className="fc-dl">
                              <div>
                                <dt>
                                  {s("whatWeDo")}
                                </dt>
                                <dd>
                                  {t("dd_76")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whatYouReceive")}
                                </dt>
                                <dd>
                                  {t("dd_77")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whyThisMatters")}
                                </dt>
                                <dd>
                                  {t("dd_78")}
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
                                  <a href={`/${locale}/our-experience-e14/?from=o-3-1-3&via=all`}>
                                    <span className="fc-st">
                                      {s("concludingInternationalLicensingAndManufacturingAgreements")}
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href={`/${locale}/our-experience-e28/?from=o-3-1-3&via=all`}>
                                    <span className="fc-st">
                                      {s("concludingTechnologyPartnershipsWithIsraeliAnd")}
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href={`/${locale}/our-experience-e29/?from=o-3-1-3&via=all`}>
                                    <span className="fc-st">
                                      {s("negotiatingAnOwnershipTransitionForA")}
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <p className="fc-act">
                              <a className="arrow" href={`/${locale}/contact/?topic=o-3-1-3&via=all`}>
                                {s("discussThisOffering")}
                              </a>
                            </p>
                          </div>
                        </details>
                      </li>
                      <li>
                        <details className="fc" data-o="o-3-1-4" name="s-3-1">
                          <summary className="fc-s">
                            <span className="fc-n">
                              {s("agreementPreparation")}
                            </span>
                            <span className="fc-i" aria-hidden="true"></span>
                          </summary>
                          {"\n"}
                          <div className="fc-b" id="o-3-1-4">
                            <dl className="fc-dl">
                              <div>
                                <dt>
                                  {s("whatWeDo")}
                                </dt>
                                <dd>
                                  {t("dd_79")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whatYouReceive")}
                                </dt>
                                <dd>
                                  {t("dd_80")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whyThisMatters")}
                                </dt>
                                <dd>
                                  {t("dd_81")}
                                </dd>
                              </div>
                            </dl>
                            {"\n"}
                            <p className="fc-act">
                              <a className="arrow" href={`/${locale}/contact/?topic=o-3-1-4&via=all`}>
                                {s("discussThisOffering")}
                              </a>
                            </p>
                          </div>
                        </details>
                      </li>
                    </ul>
                    {"\n"}
                    <p className="svc-act">
                      <a className="arrow" href={`/${locale}/contact/?topic=s-3-1&via=all`}>
                        {s("discussThisService")}
                      </a>
                    </p>
                  </li>
                  <li className="svc-card p1-card" id="s-3-2">
                    <h3 className="svc-n">
                      {s("qualifyAndDevelopSuppliers")}
                    </h3>
                    <p>
                      {t("p_68")}
                    </p>
                    {"\n"}
                    <p className="lab">
                      {s("t4Offerings")}
                    </p>
                    <ul className="fcs">
                      <li>
                        <details className="fc" data-o="o-3-2-1" name="s-3-2">
                          <summary className="fc-s">
                            <span className="fc-n">
                              {s("supplierRequirementsBrief")}
                            </span>
                            <span className="fc-i" aria-hidden="true"></span>
                          </summary>
                          {"\n"}
                          <div className="fc-b" id="o-3-2-1">
                            <dl className="fc-dl">
                              <div>
                                <dt>
                                  {s("whatWeDo")}
                                </dt>
                                <dd>
                                  {t("dd_82")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whatYouReceive")}
                                </dt>
                                <dd>
                                  {t("dd_83")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whyThisMatters")}
                                </dt>
                                <dd>
                                  {t("dd_84")}
                                </dd>
                              </div>
                            </dl>
                            {"\n"}
                            <p className="fc-act">
                              <a className="arrow" href={`/${locale}/contact/?topic=o-3-2-1&via=all`}>
                                {s("discussThisOffering")}
                              </a>
                            </p>
                          </div>
                        </details>
                      </li>
                      <li>
                        <details className="fc" data-o="o-3-2-2" name="s-3-2">
                          <summary className="fc-s">
                            <span className="fc-n">
                              {s("supplierSearchAndReadinessAssessment")}
                            </span>
                            <span className="fc-i" aria-hidden="true"></span>
                          </summary>
                          {"\n"}
                          <div className="fc-b" id="o-3-2-2">
                            <dl className="fc-dl">
                              <div>
                                <dt>
                                  {s("whatWeDo")}
                                </dt>
                                <dd>
                                  {t("dd_85")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whatYouReceive")}
                                </dt>
                                <dd>
                                  {t("dd_86")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whyThisMatters")}
                                </dt>
                                <dd>
                                  {t("dd_87")}
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
                                  <a href={`/${locale}/our-experience-e01/?from=o-3-2-2&via=all`}>
                                    <span className="fc-st">
                                      {s("openingMarketsForIndustrialManufacturers")}
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <p className="fc-act">
                              <a className="arrow" href={`/${locale}/contact/?topic=o-3-2-2&via=all`}>
                                {s("discussThisOffering")}
                              </a>
                            </p>
                          </div>
                        </details>
                      </li>
                      <li>
                        <details className="fc" data-o="o-3-2-3" name="s-3-2">
                          <summary className="fc-s">
                            <span className="fc-n">
                              {s("qualificationAndTrialCoordination")}
                            </span>
                            <span className="fc-i" aria-hidden="true"></span>
                          </summary>
                          {"\n"}
                          <div className="fc-b" id="o-3-2-3">
                            <dl className="fc-dl">
                              <div>
                                <dt>
                                  {s("whatWeDo")}
                                </dt>
                                <dd>
                                  {t("dd_88")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whatYouReceive")}
                                </dt>
                                <dd>
                                  {t("dd_89")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whyThisMatters")}
                                </dt>
                                <dd>
                                  {t("dd_90")}
                                </dd>
                              </div>
                            </dl>
                            {"\n"}
                            <p className="fc-act">
                              <a className="arrow" href={`/${locale}/contact/?topic=o-3-2-3&via=all`}>
                                {s("discussThisOffering")}
                              </a>
                            </p>
                          </div>
                        </details>
                      </li>
                      <li>
                        <details className="fc" data-o="o-3-2-4" name="s-3-2">
                          <summary className="fc-s">
                            <span className="fc-n">
                              {s("supplierDevelopmentPlan")}
                            </span>
                            <span className="fc-i" aria-hidden="true"></span>
                          </summary>
                          {"\n"}
                          <div className="fc-b" id="o-3-2-4">
                            <dl className="fc-dl">
                              <div>
                                <dt>
                                  {s("whatWeDo")}
                                </dt>
                                <dd>
                                  {t("dd_91")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whatYouReceive")}
                                </dt>
                                <dd>
                                  {t("dd_92")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whyThisMatters")}
                                </dt>
                                <dd>
                                  {t("dd_93")}
                                </dd>
                              </div>
                            </dl>
                            {"\n"}
                            <p className="fc-act">
                              <a className="arrow" href={`/${locale}/contact/?topic=o-3-2-4&via=all`}>
                                {s("discussThisOffering")}
                              </a>
                            </p>
                          </div>
                        </details>
                      </li>
                    </ul>
                    {"\n"}
                    <p className="svc-act">
                      <a className="arrow" href={`/${locale}/contact/?topic=s-3-2&via=all`}>
                        {s("discussThisService")}
                      </a>
                    </p>
                  </li>
                  <li className="svc-card p1-card" id="s-3-3">
                    <h3 className="svc-n">
                      {s("prepareOpportunitiesForFinancing")}
                    </h3>
                    <p>
                      {t("p_72")}
                    </p>
                    {"\n"}
                    <p className="lab">
                      {s("t4Offerings")}
                    </p>
                    <ul className="fcs">
                      <li>
                        <details className="fc" data-o="o-3-3-1" name="s-3-3">
                          <summary className="fc-s">
                            <span className="fc-n">
                              {s("fundingNeedsAndStaging")}
                            </span>
                            <span className="fc-i" aria-hidden="true"></span>
                          </summary>
                          {"\n"}
                          <div className="fc-b" id="o-3-3-1">
                            <dl className="fc-dl">
                              <div>
                                <dt>
                                  {s("whatWeDo")}
                                </dt>
                                <dd>
                                  {t("dd_94")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whatYouReceive")}
                                </dt>
                                <dd>
                                  {t("dd_95")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whyThisMatters")}
                                </dt>
                                <dd>
                                  {t("dd_96")}
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
                                  <a href={`/${locale}/our-experience-h08/?from=o-3-3-1&via=all`}>
                                    <span className="fc-st">
                                      {s("aJapanIndiaVenturePreparingTo")}
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <p className="fc-act">
                              <a className="arrow" href={`/${locale}/contact/?topic=o-3-3-1&via=all`}>
                                {s("discussThisOffering")}
                              </a>
                            </p>
                          </div>
                        </details>
                      </li>
                      <li>
                        <details className="fc" data-o="o-3-3-2" name="s-3-3">
                          <summary className="fc-s">
                            <span className="fc-n">
                              {s("riskSharingOptions")}
                            </span>
                            <span className="fc-i" aria-hidden="true"></span>
                          </summary>
                          {"\n"}
                          <div className="fc-b" id="o-3-3-2">
                            <dl className="fc-dl">
                              <div>
                                <dt>
                                  {s("whatWeDo")}
                                </dt>
                                <dd>
                                  {t("dd_97")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whatYouReceive")}
                                </dt>
                                <dd>
                                  {t("dd_98")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whyThisMatters")}
                                </dt>
                                <dd>
                                  {t("dd_99")}
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
                                  <a href={`/${locale}/our-experience-h08/?from=o-3-3-2&via=all`}>
                                    <span className="fc-st">
                                      {s("aJapanIndiaVenturePreparingTo")}
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <p className="fc-act">
                              <a className="arrow" href={`/${locale}/contact/?topic=o-3-3-2&via=all`}>
                                {s("discussThisOffering")}
                              </a>
                            </p>
                          </div>
                        </details>
                      </li>
                      <li>
                        <details className="fc" data-o="o-3-3-3" name="s-3-3">
                          <summary className="fc-s">
                            <span className="fc-n">
                              {s("investmentCasePreparation")}
                            </span>
                            <span className="fc-i" aria-hidden="true"></span>
                          </summary>
                          {"\n"}
                          <div className="fc-b" id="o-3-3-3">
                            <dl className="fc-dl">
                              <div>
                                <dt>
                                  {s("whatWeDo")}
                                </dt>
                                <dd>
                                  {t("dd_100")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whatYouReceive")}
                                </dt>
                                <dd>
                                  {t("dd_101")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whyThisMatters")}
                                </dt>
                                <dd>
                                  {t("dd_102")}
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
                                  <a href={`/${locale}/our-experience-h08/?from=o-3-3-3&via=all`}>
                                    <span className="fc-st">
                                      {s("aJapanIndiaVenturePreparingTo")}
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <p className="fc-act">
                              <a className="arrow" href={`/${locale}/contact/?topic=o-3-3-3&via=all`}>
                                {s("discussThisOffering")}
                              </a>
                            </p>
                          </div>
                        </details>
                      </li>
                      <li>
                        <details className="fc" data-o="o-3-3-4" name="s-3-3">
                          <summary className="fc-s">
                            <span className="fc-n">
                              {s("financingPartnerIntroductions")}
                            </span>
                            <span className="fc-i" aria-hidden="true"></span>
                          </summary>
                          {"\n"}
                          <div className="fc-b" id="o-3-3-4">
                            <dl className="fc-dl">
                              <div>
                                <dt>
                                  {s("whatWeDo")}
                                </dt>
                                <dd>
                                  {t("dd_103")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whatYouReceive")}
                                </dt>
                                <dd>
                                  {t("dd_104")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whyThisMatters")}
                                </dt>
                                <dd>
                                  {t("dd_105")}
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
                                  <a href={`/${locale}/our-experience-h08/?from=o-3-3-4&via=all`}>
                                    <span className="fc-st">
                                      {s("aJapanIndiaVenturePreparingTo")}
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <p className="fc-act">
                              <a className="arrow" href={`/${locale}/contact/?topic=o-3-3-4&via=all`}>
                                {s("discussThisOffering")}
                              </a>
                            </p>
                          </div>
                        </details>
                      </li>
                    </ul>
                    {"\n"}
                    <p className="svc-act">
                      <a className="arrow" href={`/${locale}/contact/?topic=s-3-3&via=all`}>
                        {s("discussThisService")}
                      </a>
                    </p>
                  </li>
                </ul>
              </section>
              <section className="as-grp" aria-labelledby="asg-4">
                <h2 id="asg-4">
                  <a href={`/${locale}/what-we-offer-objective-4/`}>
                    {s("setUpAndImproveOperations")}
                  </a>
                </h2>
                <ul className="svc-cards p1-cards as-cards">
                  <li className="svc-card p1-card" id="s-4-1">
                    <h3 className="svc-n">
                      {s("establishCrossBorderOperations")}
                    </h3>
                    <p>
                      {t("p_82")}
                    </p>
                    {"\n"}
                    <p className="lab">
                      {s("t4Offerings")}
                    </p>
                    <ul className="fcs">
                      <li>
                        <details className="fc" data-o="o-4-1-1" name="s-4-1">
                          <summary className="fc-s">
                            <span className="fc-n">
                              {s("operatingOptionComparison")}
                            </span>
                            <span className="fc-i" aria-hidden="true"></span>
                          </summary>
                          {"\n"}
                          <div className="fc-b" id="o-4-1-1">
                            <dl className="fc-dl">
                              <div>
                                <dt>
                                  {s("whatWeDo")}
                                </dt>
                                <dd>
                                  {t("dd_106")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whatYouReceive")}
                                </dt>
                                <dd>
                                  {t("dd_107")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whyThisMatters")}
                                </dt>
                                <dd>
                                  {t("dd_108")}
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
                                  <a href={`/${locale}/our-experience-h03/?from=o-4-1-1&via=all`}>
                                    <span className="fc-st">
                                      {s("aJapaneseBusinessSeekingEngineeringCapability")}
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <p className="fc-act">
                              <a className="arrow" href={`/${locale}/contact/?topic=o-4-1-1&via=all`}>
                                {s("discussThisOffering")}
                              </a>
                            </p>
                          </div>
                        </details>
                      </li>
                      <li>
                        <details className="fc" data-o="o-4-1-2" name="s-4-1">
                          <summary className="fc-s">
                            <span className="fc-n">
                              {s("setUpPlanningAndProviderSelection")}
                            </span>
                            <span className="fc-i" aria-hidden="true"></span>
                          </summary>
                          {"\n"}
                          <div className="fc-b" id="o-4-1-2">
                            <dl className="fc-dl">
                              <div>
                                <dt>
                                  {s("whatWeDo")}
                                </dt>
                                <dd>
                                  {t("dd_109")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whatYouReceive")}
                                </dt>
                                <dd>
                                  {t("dd_110")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whyThisMatters")}
                                </dt>
                                <dd>
                                  {t("dd_111")}
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
                                  <a href={`/${locale}/our-experience-h03/?from=o-4-1-2&via=all`}>
                                    <span className="fc-st">
                                      {s("aJapaneseBusinessSeekingEngineeringCapability")}
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <p className="fc-act">
                              <a className="arrow" href={`/${locale}/contact/?topic=o-4-1-2&via=all`}>
                                {s("discussThisOffering")}
                              </a>
                            </p>
                          </div>
                        </details>
                      </li>
                      <li>
                        <details className="fc" data-o="o-4-1-3" name="s-4-1">
                          <summary className="fc-s">
                            <span className="fc-n">
                              {s("transitionAndRampUpCoordination")}
                            </span>
                            <span className="fc-i" aria-hidden="true"></span>
                          </summary>
                          {"\n"}
                          <div className="fc-b" id="o-4-1-3">
                            <dl className="fc-dl">
                              <div>
                                <dt>
                                  {s("whatWeDo")}
                                </dt>
                                <dd>
                                  {t("dd_112")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whatYouReceive")}
                                </dt>
                                <dd>
                                  {t("dd_113")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whyThisMatters")}
                                </dt>
                                <dd>
                                  {t("dd_114")}
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
                                  <a href={`/${locale}/our-experience-h03/?from=o-4-1-3&via=all`}>
                                    <span className="fc-st">
                                      {s("aJapaneseBusinessSeekingEngineeringCapability")}
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <p className="fc-act">
                              <a className="arrow" href={`/${locale}/contact/?topic=o-4-1-3&via=all`}>
                                {s("discussThisOffering")}
                              </a>
                            </p>
                          </div>
                        </details>
                      </li>
                      <li>
                        <details className="fc" data-o="o-4-1-4" name="s-4-1">
                          <summary className="fc-s">
                            <span className="fc-n">
                              {s("earlyOperationsReview")}
                            </span>
                            <span className="fc-i" aria-hidden="true"></span>
                          </summary>
                          {"\n"}
                          <div className="fc-b" id="o-4-1-4">
                            <dl className="fc-dl">
                              <div>
                                <dt>
                                  {s("whatWeDo")}
                                </dt>
                                <dd>
                                  {t("dd_115")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whatYouReceive")}
                                </dt>
                                <dd>
                                  {t("dd_116")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whyThisMatters")}
                                </dt>
                                <dd>
                                  {t("dd_117")}
                                </dd>
                              </div>
                            </dl>
                            {"\n"}
                            <p className="fc-act">
                              <a className="arrow" href={`/${locale}/contact/?topic=o-4-1-4&via=all`}>
                                {s("discussThisOffering")}
                              </a>
                            </p>
                          </div>
                        </details>
                      </li>
                    </ul>
                    {"\n"}
                    <p className="svc-act">
                      <a className="arrow" href={`/${locale}/contact/?topic=s-4-1&via=all`}>
                        {s("discussThisService")}
                      </a>
                    </p>
                  </li>
                  <li className="svc-card p1-card" id="s-4-2">
                    <h3 className="svc-n">
                      {s("improveExistingCollaborations")}
                    </h3>
                    <p>
                      {t("p_90")}
                    </p>
                    {"\n"}
                    <p className="lab">
                      {s("t4Offerings")}
                    </p>
                    <ul className="fcs">
                      <li>
                        <details className="fc" data-o="o-4-2-1" name="s-4-2">
                          <summary className="fc-s">
                            <span className="fc-n">
                              {s("collaborationPerformanceReview")}
                            </span>
                            <span className="fc-i" aria-hidden="true"></span>
                          </summary>
                          {"\n"}
                          <div className="fc-b" id="o-4-2-1">
                            <dl className="fc-dl">
                              <div>
                                <dt>
                                  {s("whatWeDo")}
                                </dt>
                                <dd>
                                  {t("dd_118")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whatYouReceive")}
                                </dt>
                                <dd>
                                  {t("dd_119")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whyThisMatters")}
                                </dt>
                                <dd>
                                  {t("dd_120")}
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
                                  <a href={`/${locale}/our-experience-h04/?from=o-4-2-1&via=all`}>
                                    <span className="fc-st">
                                      {s("anExistingCollaborationDeliveringLessThan")}
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <p className="fc-act">
                              <a className="arrow" href={`/${locale}/contact/?topic=o-4-2-1&via=all`}>
                                {s("discussThisOffering")}
                              </a>
                            </p>
                          </div>
                        </details>
                      </li>
                      <li>
                        <details className="fc" data-o="o-4-2-2" name="s-4-2">
                          <summary className="fc-s">
                            <span className="fc-n">
                              {s("decisionMakingAndGovernanceRedesign")}
                            </span>
                            <span className="fc-i" aria-hidden="true"></span>
                          </summary>
                          {"\n"}
                          <div className="fc-b" id="o-4-2-2">
                            <dl className="fc-dl">
                              <div>
                                <dt>
                                  {s("whatWeDo")}
                                </dt>
                                <dd>
                                  {t("dd_121")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whatYouReceive")}
                                </dt>
                                <dd>
                                  {t("dd_122")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whyThisMatters")}
                                </dt>
                                <dd>
                                  {t("dd_123")}
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
                                  <a href={`/${locale}/our-experience-e11/?from=o-4-2-2&via=all`}>
                                    <span className="fc-st">
                                      {s("changingPricingPracticesAcrossAGlobal")}
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href={`/${locale}/our-experience-e12/?from=o-4-2-2&via=all`}>
                                    <span className="fc-st">
                                      {s("improvingHowATechnologyOrganizationDelivers")}
                                    </span>
                                  </a>
                                </li>
                              </ul>
                              <p className="fc-g">
                                {s("illustrativeScenariosHypothetical")}
                              </p>
                              <ul>
                                <li>
                                  <a href={`/${locale}/our-experience-h04/?from=o-4-2-2&via=all`}>
                                    <span className="fc-st">
                                      {s("anExistingCollaborationDeliveringLessThan")}
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <p className="fc-act">
                              <a className="arrow" href={`/${locale}/contact/?topic=o-4-2-2&via=all`}>
                                {s("discussThisOffering")}
                              </a>
                            </p>
                          </div>
                        </details>
                      </li>
                      <li>
                        <details className="fc" data-o="o-4-2-3" name="s-4-2">
                          <summary className="fc-s">
                            <span className="fc-n">
                              {s("workingPracticeImprovement")}
                            </span>
                            <span className="fc-i" aria-hidden="true"></span>
                          </summary>
                          {"\n"}
                          <div className="fc-b" id="o-4-2-3">
                            <dl className="fc-dl">
                              <div>
                                <dt>
                                  {s("whatWeDo")}
                                </dt>
                                <dd>
                                  {t("dd_124")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whatYouReceive")}
                                </dt>
                                <dd>
                                  {t("dd_125")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whyThisMatters")}
                                </dt>
                                <dd>
                                  {t("dd_126")}
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
                                  <a href={`/${locale}/our-experience-h04/?from=o-4-2-3&via=all`}>
                                    <span className="fc-st">
                                      {s("anExistingCollaborationDeliveringLessThan")}
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <p className="fc-act">
                              <a className="arrow" href={`/${locale}/contact/?topic=o-4-2-3&via=all`}>
                                {s("discussThisOffering")}
                              </a>
                            </p>
                          </div>
                        </details>
                      </li>
                      <li>
                        <details className="fc" data-o="o-4-2-4" name="s-4-2">
                          <summary className="fc-s">
                            <span className="fc-n">
                              {s("improvementProgramme")}
                            </span>
                            <span className="fc-i" aria-hidden="true"></span>
                          </summary>
                          {"\n"}
                          <div className="fc-b" id="o-4-2-4">
                            <dl className="fc-dl">
                              <div>
                                <dt>
                                  {s("whatWeDo")}
                                </dt>
                                <dd>
                                  {t("dd_127")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whatYouReceive")}
                                </dt>
                                <dd>
                                  {t("dd_128")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whyThisMatters")}
                                </dt>
                                <dd>
                                  {t("dd_129")}
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
                                  <a href={`/${locale}/our-experience-e11/?from=o-4-2-4&via=all`}>
                                    <span className="fc-st">
                                      {s("changingPricingPracticesAcrossAGlobal")}
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a href={`/${locale}/our-experience-e12/?from=o-4-2-4&via=all`}>
                                    <span className="fc-st">
                                      {s("improvingHowATechnologyOrganizationDelivers")}
                                    </span>
                                  </a>
                                </li>
                              </ul>
                              <p className="fc-g">
                                {s("illustrativeScenariosHypothetical")}
                              </p>
                              <ul>
                                <li>
                                  <a href={`/${locale}/our-experience-h04/?from=o-4-2-4&via=all`}>
                                    <span className="fc-st">
                                      {s("anExistingCollaborationDeliveringLessThan")}
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <p className="fc-act">
                              <a className="arrow" href={`/${locale}/contact/?topic=o-4-2-4&via=all`}>
                                {s("discussThisOffering")}
                              </a>
                            </p>
                          </div>
                        </details>
                      </li>
                    </ul>
                    {"\n"}
                    <p className="svc-act">
                      <a className="arrow" href={`/${locale}/contact/?topic=s-4-2&via=all`}>
                        {s("discussThisService")}
                      </a>
                    </p>
                  </li>
                  <li className="svc-card p1-card" id="s-4-3">
                    <h3 className="svc-n">
                      {s("prepareTeamsToWorkTogether")}
                    </h3>
                    <p>
                      {t("p_102")}
                    </p>
                    {"\n"}
                    <p className="lab">
                      {s("t4Offerings")}
                    </p>
                    <ul className="fcs">
                      <li>
                        <details className="fc" data-o="o-4-3-1" name="s-4-3">
                          <summary className="fc-s">
                            <span className="fc-n">
                              {s("receivingTeamReadiness")}
                            </span>
                            <span className="fc-i" aria-hidden="true"></span>
                          </summary>
                          {"\n"}
                          <div className="fc-b" id="o-4-3-1">
                            <dl className="fc-dl">
                              <div>
                                <dt>
                                  {s("whatWeDo")}
                                </dt>
                                <dd>
                                  {t("dd_130")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whatYouReceive")}
                                </dt>
                                <dd>
                                  {t("dd_131")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whyThisMatters")}
                                </dt>
                                <dd>
                                  {t("dd_132")}
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
                                  <a href={`/${locale}/our-experience-h09/?from=o-4-3-1&via=all`}>
                                    <span className="fc-st">
                                      {s("preparingJapaneseAndIndianTeamsTo")}
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <p className="fc-act">
                              <a className="arrow" href={`/${locale}/contact/?topic=o-4-3-1&via=all`}>
                                {s("discussThisOffering")}
                              </a>
                            </p>
                          </div>
                        </details>
                      </li>
                      <li>
                        <details className="fc" data-o="o-4-3-2" name="s-4-3">
                          <summary className="fc-s">
                            <span className="fc-n">
                              {s("professionalAndLanguagePreparation")}
                            </span>
                            <span className="fc-i" aria-hidden="true"></span>
                          </summary>
                          {"\n"}
                          <div className="fc-b" id="o-4-3-2">
                            <dl className="fc-dl">
                              <div>
                                <dt>
                                  {s("whatWeDo")}
                                </dt>
                                <dd>
                                  {t("dd_133")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whatYouReceive")}
                                </dt>
                                <dd>
                                  {t("dd_134")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whyThisMatters")}
                                </dt>
                                <dd>
                                  {t("dd_135")}
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
                                  <a href={`/${locale}/our-experience-h09/?from=o-4-3-2&via=all`}>
                                    <span className="fc-st">
                                      {s("preparingJapaneseAndIndianTeamsTo")}
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <p className="fc-act">
                              <a className="arrow" href={`/${locale}/contact/?topic=o-4-3-2&via=all`}>
                                {s("discussThisOffering")}
                              </a>
                            </p>
                          </div>
                        </details>
                      </li>
                      <li>
                        <details className="fc" data-o="o-4-3-3" name="s-4-3">
                          <summary className="fc-s">
                            <span className="fc-n">
                              {s("talentIntegrationAndRetentionReview")}
                            </span>
                            <span className="fc-i" aria-hidden="true"></span>
                          </summary>
                          {"\n"}
                          <div className="fc-b" id="o-4-3-3">
                            <dl className="fc-dl">
                              <div>
                                <dt>
                                  {s("whatWeDo")}
                                </dt>
                                <dd>
                                  {t("dd_136")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whatYouReceive")}
                                </dt>
                                <dd>
                                  {t("dd_137")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whyThisMatters")}
                                </dt>
                                <dd>
                                  {t("dd_138")}
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
                                  <a href={`/${locale}/our-experience-h09/?from=o-4-3-3&via=all`}>
                                    <span className="fc-st">
                                      {s("preparingJapaneseAndIndianTeamsTo")}
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <p className="fc-act">
                              <a className="arrow" href={`/${locale}/contact/?topic=o-4-3-3&via=all`}>
                                {s("discussThisOffering")}
                              </a>
                            </p>
                          </div>
                        </details>
                      </li>
                      <li>
                        <details className="fc" data-o="o-4-3-4" name="s-4-3">
                          <summary className="fc-s">
                            <span className="fc-n">
                              {s("recruitmentPartnerCoordination")}
                            </span>
                            <span className="fc-i" aria-hidden="true"></span>
                          </summary>
                          {"\n"}
                          <div className="fc-b" id="o-4-3-4">
                            <dl className="fc-dl">
                              <div>
                                <dt>
                                  {s("whatWeDo")}
                                </dt>
                                <dd>
                                  {t("dd_139")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whatYouReceive")}
                                </dt>
                                <dd>
                                  {t("dd_140")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whyThisMatters")}
                                </dt>
                                <dd>
                                  {t("dd_141")}
                                </dd>
                              </div>
                            </dl>
                            {"\n"}
                            <p className="fc-act">
                              <a className="arrow" href={`/${locale}/contact/?topic=o-4-3-4&via=all`}>
                                {s("discussThisOffering")}
                              </a>
                            </p>
                          </div>
                        </details>
                      </li>
                    </ul>
                    {"\n"}
                    <p className="svc-act">
                      <a className="arrow" href={`/${locale}/contact/?topic=s-4-3&via=all`}>
                        {s("discussThisService")}
                      </a>
                    </p>
                  </li>
                </ul>
              </section>
              <section className="as-grp" aria-labelledby="asg-5">
                <h2 id="asg-5">
                  <a href={`/${locale}/what-we-offer-objective-5/`}>
                    {s("createNewBusinessAndSustainValue")}
                  </a>
                </h2>
                <ul className="svc-cards p1-cards as-cards">
                  <li className="svc-card p1-card" id="s-5-1">
                    <h3 className="svc-n">
                      {s("developNewOffersTogether")}
                    </h3>
                    <p>
                      {t("p_110")}
                    </p>
                    {"\n"}
                    <p className="lab">
                      {s("t4Offerings")}
                    </p>
                    <ul className="fcs">
                      <li>
                        <details className="fc" data-o="o-5-1-1" name="s-5-1">
                          <summary className="fc-s">
                            <span className="fc-n">
                              {s("searchForComplementaryPartners")}
                            </span>
                            <span className="fc-i" aria-hidden="true"></span>
                          </summary>
                          {"\n"}
                          <div className="fc-b" id="o-5-1-1">
                            <dl className="fc-dl">
                              <div>
                                <dt>
                                  {s("whatWeDo")}
                                </dt>
                                <dd>
                                  {t("dd_142")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whatYouReceive")}
                                </dt>
                                <dd>
                                  {t("dd_143")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whyThisMatters")}
                                </dt>
                                <dd>
                                  {t("dd_144")}
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
                                  <a href={`/${locale}/our-experience-h10/?from=o-5-1-1&via=all`}>
                                    <span className="fc-st">
                                      {s("japaneseAndIndianFirmsDesigningA")}
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <p className="fc-act">
                              <a className="arrow" href={`/${locale}/contact/?topic=o-5-1-1&via=all`}>
                                {s("discussThisOffering")}
                              </a>
                            </p>
                          </div>
                        </details>
                      </li>
                      <li>
                        <details className="fc" data-o="o-5-1-2" name="s-5-1">
                          <summary className="fc-s">
                            <span className="fc-n">
                              {s("assessAProposedCombination")}
                            </span>
                            <span className="fc-i" aria-hidden="true"></span>
                          </summary>
                          {"\n"}
                          <div className="fc-b" id="o-5-1-2">
                            <dl className="fc-dl">
                              <div>
                                <dt>
                                  {s("whatWeDo")}
                                </dt>
                                <dd>
                                  {t("dd_145")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whatYouReceive")}
                                </dt>
                                <dd>
                                  {t("dd_146")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whyThisMatters")}
                                </dt>
                                <dd>
                                  {t("dd_147")}
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
                                  <a href={`/${locale}/our-experience-h10/?from=o-5-1-2&via=all`}>
                                    <span className="fc-st">
                                      {s("japaneseAndIndianFirmsDesigningA")}
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <p className="fc-act">
                              <a className="arrow" href={`/${locale}/contact/?topic=o-5-1-2&via=all`}>
                                {s("discussThisOffering")}
                              </a>
                            </p>
                          </div>
                        </details>
                      </li>
                      <li>
                        <details className="fc" data-o="o-5-1-3" name="s-5-1">
                          <summary className="fc-s">
                            <span className="fc-n">
                              {s("jointOfferDesignAndValidation")}
                            </span>
                            <span className="fc-i" aria-hidden="true"></span>
                          </summary>
                          {"\n"}
                          <div className="fc-b" id="o-5-1-3">
                            <dl className="fc-dl">
                              <div>
                                <dt>
                                  {s("whatWeDo")}
                                </dt>
                                <dd>
                                  {t("dd_148")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whatYouReceive")}
                                </dt>
                                <dd>
                                  {t("dd_149")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whyThisMatters")}
                                </dt>
                                <dd>
                                  {t("dd_150")}
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
                                  <a href={`/${locale}/our-experience-h10/?from=o-5-1-3&via=all`}>
                                    <span className="fc-st">
                                      {s("japaneseAndIndianFirmsDesigningA")}
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <p className="fc-act">
                              <a className="arrow" href={`/${locale}/contact/?topic=o-5-1-3&via=all`}>
                                {s("discussThisOffering")}
                              </a>
                            </p>
                          </div>
                        </details>
                      </li>
                      <li>
                        <details className="fc" data-o="o-5-1-4" name="s-5-1">
                          <summary className="fc-s">
                            <span className="fc-n">
                              {s("jointDevelopmentArrangements")}
                            </span>
                            <span className="fc-i" aria-hidden="true"></span>
                          </summary>
                          {"\n"}
                          <div className="fc-b" id="o-5-1-4">
                            <dl className="fc-dl">
                              <div>
                                <dt>
                                  {s("whatWeDo")}
                                </dt>
                                <dd>
                                  {t("dd_151")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whatYouReceive")}
                                </dt>
                                <dd>
                                  {t("dd_152")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whyThisMatters")}
                                </dt>
                                <dd>
                                  {t("dd_153")}
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
                                  <a href={`/${locale}/our-experience-h10/?from=o-5-1-4&via=all`}>
                                    <span className="fc-st">
                                      {s("japaneseAndIndianFirmsDesigningA")}
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <p className="fc-act">
                              <a className="arrow" href={`/${locale}/contact/?topic=o-5-1-4&via=all`}>
                                {s("discussThisOffering")}
                              </a>
                            </p>
                          </div>
                        </details>
                      </li>
                    </ul>
                    {"\n"}
                    <p className="svc-act">
                      <a className="arrow" href={`/${locale}/contact/?topic=s-5-1&via=all`}>
                        {s("discussThisService")}
                      </a>
                    </p>
                  </li>
                  <li className="svc-card p1-card" id="s-5-2">
                    <h3 className="svc-n">
                      {s("pursueCustomersInOtherMarketsTogether")}
                    </h3>
                    <p>
                      {t("p_120")}
                    </p>
                    {"\n"}
                    <p className="lab">
                      {s("t4Offerings")}
                    </p>
                    <ul className="fcs">
                      <li>
                        <details className="fc" data-o="o-5-2-1" name="s-5-2">
                          <summary className="fc-s">
                            <span className="fc-n">
                              {s("thirdMarketOpportunityAssessment")}
                            </span>
                            <span className="fc-i" aria-hidden="true"></span>
                          </summary>
                          {"\n"}
                          <div className="fc-b" id="o-5-2-1">
                            <dl className="fc-dl">
                              <div>
                                <dt>
                                  {s("whatWeDo")}
                                </dt>
                                <dd>
                                  {t("dd_154")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whatYouReceive")}
                                </dt>
                                <dd>
                                  {t("dd_155")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whyThisMatters")}
                                </dt>
                                <dd>
                                  {t("dd_156")}
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
                                  <a href={`/${locale}/our-experience-e19/?from=o-5-2-1&via=all`}>
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
                                  <a href={`/${locale}/our-experience-h05/?from=o-5-2-1&via=all`}>
                                    <span className="fc-st">
                                      {s("japaneseAndIndianFirmsPursuingA")}
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <p className="fc-act">
                              <a className="arrow" href={`/${locale}/contact/?topic=o-5-2-1&via=all`}>
                                {s("discussThisOffering")}
                              </a>
                            </p>
                          </div>
                        </details>
                      </li>
                      <li>
                        <details className="fc" data-o="o-5-2-2" name="s-5-2">
                          <summary className="fc-s">
                            <span className="fc-n">
                              {s("assembleThePartnerTeam")}
                            </span>
                            <span className="fc-i" aria-hidden="true"></span>
                          </summary>
                          {"\n"}
                          <div className="fc-b" id="o-5-2-2">
                            <dl className="fc-dl">
                              <div>
                                <dt>
                                  {s("whatWeDo")}
                                </dt>
                                <dd>
                                  {t("dd_157")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whatYouReceive")}
                                </dt>
                                <dd>
                                  {t("dd_158")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whyThisMatters")}
                                </dt>
                                <dd>
                                  {t("dd_159")}
                                </dd>
                              </div>
                            </dl>
                            {"\n"}
                            <p className="fc-act">
                              <a className="arrow" href={`/${locale}/contact/?topic=o-5-2-2&via=all`}>
                                {s("discussThisOffering")}
                              </a>
                            </p>
                          </div>
                        </details>
                      </li>
                      <li>
                        <details className="fc" data-o="o-5-2-3" name="s-5-2">
                          <summary className="fc-s">
                            <span className="fc-n">
                              {s("combinedOfferDevelopment")}
                            </span>
                            <span className="fc-i" aria-hidden="true"></span>
                          </summary>
                          {"\n"}
                          <div className="fc-b" id="o-5-2-3">
                            <dl className="fc-dl">
                              <div>
                                <dt>
                                  {s("whatWeDo")}
                                </dt>
                                <dd>
                                  {t("dd_160")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whatYouReceive")}
                                </dt>
                                <dd>
                                  {t("dd_161")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whyThisMatters")}
                                </dt>
                                <dd>
                                  {t("dd_162")}
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
                                  <a href={`/${locale}/our-experience-h05/?from=o-5-2-3&via=all`}>
                                    <span className="fc-st">
                                      {s("japaneseAndIndianFirmsPursuingA")}
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <p className="fc-act">
                              <a className="arrow" href={`/${locale}/contact/?topic=o-5-2-3&via=all`}>
                                {s("discussThisOffering")}
                              </a>
                            </p>
                          </div>
                        </details>
                      </li>
                      <li>
                        <details className="fc" data-o="o-5-2-4" name="s-5-2">
                          <summary className="fc-s">
                            <span className="fc-n">
                              {s("alignPartnerTerms")}
                            </span>
                            <span className="fc-i" aria-hidden="true"></span>
                          </summary>
                          {"\n"}
                          <div className="fc-b" id="o-5-2-4">
                            <dl className="fc-dl">
                              <div>
                                <dt>
                                  {s("whatWeDo")}
                                </dt>
                                <dd>
                                  {t("dd_163")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whatYouReceive")}
                                </dt>
                                <dd>
                                  {t("dd_164")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whyThisMatters")}
                                </dt>
                                <dd>
                                  {t("dd_165")}
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
                                  <a href={`/${locale}/our-experience-h05/?from=o-5-2-4&via=all`}>
                                    <span className="fc-st">
                                      {s("japaneseAndIndianFirmsPursuingA")}
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <p className="fc-act">
                              <a className="arrow" href={`/${locale}/contact/?topic=o-5-2-4&via=all`}>
                                {s("discussThisOffering")}
                              </a>
                            </p>
                          </div>
                        </details>
                      </li>
                    </ul>
                    {"\n"}
                    <p className="svc-act">
                      <a className="arrow" href={`/${locale}/contact/?topic=s-5-2&via=all`}>
                        {s("discussThisService")}
                      </a>
                    </p>
                  </li>
                  <li className="svc-card p1-card" id="s-5-3">
                    <h3 className="svc-n">
                      {s("planForSuccessionAndRenewal")}
                    </h3>
                    <p>
                      {t("p_129")}
                    </p>
                    {"\n"}
                    <p className="lab">
                      {s("t4Offerings")}
                    </p>
                    <ul className="fcs">
                      <li>
                        <details className="fc" data-o="o-5-3-1" name="s-5-3">
                          <summary className="fc-s">
                            <span className="fc-n">
                              {s("continuityOptionsAssessment")}
                            </span>
                            <span className="fc-i" aria-hidden="true"></span>
                          </summary>
                          {"\n"}
                          <div className="fc-b" id="o-5-3-1">
                            <dl className="fc-dl">
                              <div>
                                <dt>
                                  {s("whatWeDo")}
                                </dt>
                                <dd>
                                  {t("dd_166")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whatYouReceive")}
                                </dt>
                                <dd>
                                  {t("dd_167")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whyThisMatters")}
                                </dt>
                                <dd>
                                  {t("dd_168")}
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
                                  <a href={`/${locale}/our-experience-h06/?from=o-5-3-1&via=all`}>
                                    <span className="fc-st">
                                      {s("aSpecialistBusinessConsideringSuccession")}
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <p className="fc-act">
                              <a className="arrow" href={`/${locale}/contact/?topic=o-5-3-1&via=all`}>
                                {s("discussThisOffering")}
                              </a>
                            </p>
                          </div>
                        </details>
                      </li>
                      <li>
                        <details className="fc" data-o="o-5-3-2" name="s-5-3">
                          <summary className="fc-s">
                            <span className="fc-n">
                              {s("successorAndPartnerSearch")}
                            </span>
                            <span className="fc-i" aria-hidden="true"></span>
                          </summary>
                          {"\n"}
                          <div className="fc-b" id="o-5-3-2">
                            <dl className="fc-dl">
                              <div>
                                <dt>
                                  {s("whatWeDo")}
                                </dt>
                                <dd>
                                  {t("dd_169")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whatYouReceive")}
                                </dt>
                                <dd>
                                  {t("dd_170")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whyThisMatters")}
                                </dt>
                                <dd>
                                  {t("dd_171")}
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
                                  <a href={`/${locale}/our-experience-e29/?from=o-5-3-2&via=all`}>
                                    <span className="fc-st">
                                      {s("negotiatingAnOwnershipTransitionForA")}
                                    </span>
                                  </a>
                                </li>
                              </ul>
                              <p className="fc-g">
                                {s("illustrativeScenariosHypothetical")}
                              </p>
                              <ul>
                                <li>
                                  <a href={`/${locale}/our-experience-h06/?from=o-5-3-2&via=all`}>
                                    <span className="fc-st">
                                      {s("aSpecialistBusinessConsideringSuccession")}
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <p className="fc-act">
                              <a className="arrow" href={`/${locale}/contact/?topic=o-5-3-2&via=all`}>
                                {s("discussThisOffering")}
                              </a>
                            </p>
                          </div>
                        </details>
                      </li>
                      <li>
                        <details className="fc" data-o="o-5-3-3" name="s-5-3">
                          <summary className="fc-s">
                            <span className="fc-n">
                              {s("transitionPlanning")}
                            </span>
                            <span className="fc-i" aria-hidden="true"></span>
                          </summary>
                          {"\n"}
                          <div className="fc-b" id="o-5-3-3">
                            <dl className="fc-dl">
                              <div>
                                <dt>
                                  {s("whatWeDo")}
                                </dt>
                                <dd>
                                  {t("dd_172")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whatYouReceive")}
                                </dt>
                                <dd>
                                  {t("dd_173")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whyThisMatters")}
                                </dt>
                                <dd>
                                  {t("dd_174")}
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
                                  <a href={`/${locale}/our-experience-h06/?from=o-5-3-3&via=all`}>
                                    <span className="fc-st">
                                      {s("aSpecialistBusinessConsideringSuccession")}
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <p className="fc-act">
                              <a className="arrow" href={`/${locale}/contact/?topic=o-5-3-3&via=all`}>
                                {s("discussThisOffering")}
                              </a>
                            </p>
                          </div>
                        </details>
                      </li>
                      <li>
                        <details className="fc" data-o="o-5-3-4" name="s-5-3">
                          <summary className="fc-s">
                            <span className="fc-n">
                              {s("postTransitionIntegrationSupport")}
                            </span>
                            <span className="fc-i" aria-hidden="true"></span>
                          </summary>
                          {"\n"}
                          <div className="fc-b" id="o-5-3-4">
                            <dl className="fc-dl">
                              <div>
                                <dt>
                                  {s("whatWeDo")}
                                </dt>
                                <dd>
                                  {t("dd_175")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whatYouReceive")}
                                </dt>
                                <dd>
                                  {t("dd_176")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whyThisMatters")}
                                </dt>
                                <dd>
                                  {t("dd_177")}
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
                                  <a href={`/${locale}/our-experience-e08/?from=o-5-3-4&via=all`}>
                                    <span className="fc-st">
                                      {s("coordinatingAConsistentCustomerExperienceAfter")}
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <p className="fc-act">
                              <a className="arrow" href={`/${locale}/contact/?topic=o-5-3-4&via=all`}>
                                {s("discussThisOffering")}
                              </a>
                            </p>
                          </div>
                        </details>
                      </li>
                    </ul>
                    {"\n"}
                    <p className="svc-act">
                      <a className="arrow" href={`/${locale}/contact/?topic=s-5-3&via=all`}>
                        {s("discussThisService")}
                      </a>
                    </p>
                  </li>
                </ul>
              </section>
              <section className="as-grp" aria-labelledby="asg-6">
                <h2 id="asg-6">
                  <a href={`/${locale}/what-we-offer-objective-6/`}>
                    {s("coordinateComplexInitiatives")}
                  </a>
                </h2>
                <ul className="svc-cards p1-cards as-cards">
                  <li className="svc-card p1-card" id="s-6-1">
                    <h3 className="svc-n">
                      {s("bringOrganizationsTogetherToDeliver")}
                    </h3>
                    <p>
                      {t("p_140")}
                    </p>
                    {"\n"}
                    <p className="lab">
                      {s("t4Offerings")}
                    </p>
                    <ul className="fcs">
                      <li>
                        <details className="fc" data-o="o-6-1-1" name="s-6-1">
                          <summary className="fc-s">
                            <span className="fc-n">
                              {s("integrationPlanning")}
                            </span>
                            <span className="fc-i" aria-hidden="true"></span>
                          </summary>
                          {"\n"}
                          <div className="fc-b" id="o-6-1-1">
                            <dl className="fc-dl">
                              <div>
                                <dt>
                                  {s("whatWeDo")}
                                </dt>
                                <dd>
                                  {t("dd_178")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whatYouReceive")}
                                </dt>
                                <dd>
                                  {t("dd_179")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whyThisMatters")}
                                </dt>
                                <dd>
                                  {t("dd_180")}
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
                                  <a href={`/${locale}/our-experience-h05/?from=o-6-1-1&via=all`}>
                                    <span className="fc-st">
                                      {s("japaneseAndIndianFirmsPursuingA")}
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <p className="fc-act">
                              <a className="arrow" href={`/${locale}/contact/?topic=o-6-1-1&via=all`}>
                                {s("discussThisOffering")}
                              </a>
                            </p>
                          </div>
                        </details>
                      </li>
                      <li>
                        <details className="fc" data-o="o-6-1-2" name="s-6-1">
                          <summary className="fc-s">
                            <span className="fc-n">
                              {s("participantAlignmentAndGovernance")}
                            </span>
                            <span className="fc-i" aria-hidden="true"></span>
                          </summary>
                          {"\n"}
                          <div className="fc-b" id="o-6-1-2">
                            <dl className="fc-dl">
                              <div>
                                <dt>
                                  {s("whatWeDo")}
                                </dt>
                                <dd>
                                  {t("dd_181")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whatYouReceive")}
                                </dt>
                                <dd>
                                  {t("dd_182")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whyThisMatters")}
                                </dt>
                                <dd>
                                  {t("dd_183")}
                                </dd>
                              </div>
                            </dl>
                            {"\n"}
                            <p className="fc-act">
                              <a className="arrow" href={`/${locale}/contact/?topic=o-6-1-2&via=all`}>
                                {s("discussThisOffering")}
                              </a>
                            </p>
                          </div>
                        </details>
                      </li>
                      <li>
                        <details className="fc" data-o="o-6-1-3" name="s-6-1">
                          <summary className="fc-s">
                            <span className="fc-n">
                              {s("executionCoordination")}
                            </span>
                            <span className="fc-i" aria-hidden="true"></span>
                          </summary>
                          {"\n"}
                          <div className="fc-b" id="o-6-1-3">
                            <p className="fc-pur">
                              {t("p_144")}
                            </p>
                            <dl className="fc-dl">
                              <div>
                                <dt>
                                  {s("whatWeDo")}
                                </dt>
                                <dd>
                                  {t("dd_184")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whatYouReceive")}
                                </dt>
                                <dd>
                                  {t("dd_185")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whyThisMatters")}
                                </dt>
                                <dd>
                                  {t("dd_186")}
                                </dd>
                              </div>
                            </dl>
                            <p className="fc-note">
                              {t("p_145")}
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
                                  <a href={`/${locale}/our-experience-e08/?from=o-6-1-3&via=all`}>
                                    <span className="fc-st">
                                      {s("coordinatingAConsistentCustomerExperienceAfter")}
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <p className="fc-act">
                              <a className="arrow" href={`/${locale}/contact/?topic=o-6-1-3&via=all`}>
                                {s("discussThisOffering")}
                              </a>
                            </p>
                          </div>
                        </details>
                      </li>
                      <li>
                        <details className="fc" data-o="o-6-1-4" name="s-6-1">
                          <summary className="fc-s">
                            <span className="fc-n">
                              {s("outcomeTracking")}
                            </span>
                            <span className="fc-i" aria-hidden="true"></span>
                          </summary>
                          {"\n"}
                          <div className="fc-b" id="o-6-1-4">
                            <dl className="fc-dl">
                              <div>
                                <dt>
                                  {s("whatWeDo")}
                                </dt>
                                <dd>
                                  {t("dd_187")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whatYouReceive")}
                                </dt>
                                <dd>
                                  {t("dd_188")}
                                </dd>
                              </div>
                              {"\n"}
                              <div>
                                <dt>
                                  {s("whyThisMatters")}
                                </dt>
                                <dd>
                                  {t("dd_189")}
                                </dd>
                              </div>
                            </dl>
                            {"\n"}
                            <p className="fc-act">
                              <a className="arrow" href={`/${locale}/contact/?topic=o-6-1-4&via=all`}>
                                {s("discussThisOffering")}
                              </a>
                            </p>
                          </div>
                        </details>
                      </li>
                    </ul>
                    {"\n"}
                    <p className="svc-act">
                      <a className="arrow" href={`/${locale}/contact/?topic=s-6-1&via=all`}>
                        {s("discussThisService")}
                      </a>
                    </p>
                  </li>
                </ul>
              </section>
            </div>
            <p className="p1-start">
              {s("youCanStartWithOneFocused")}
              <a className="arrow" href={`/${locale}/how-we-work/`}>
                {s("gettingStarted")}
              </a>
            </p>
            <p className="d-scope">
              {s("eachAssignmentIncludesTheOfferingsAgreed")}
            </p>
          </article>
        </div>
      </div>
      {"\n"}
    </main>
    </PageShell>
  );
}
