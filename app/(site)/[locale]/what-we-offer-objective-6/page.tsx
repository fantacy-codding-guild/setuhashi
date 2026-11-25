import { getTranslations, setRequestLocale } from "next-intl/server";
import PageShell from "@/components/PageShell";
import { pageMetadata, type PageProps } from "@/lib/metadata";

const PAGE = "what-we-offer-objective-6";

export const generateMetadata = pageMetadata(PAGE);

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.what-we-offer-objective-6");
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
                {s("coordinateComplexInitiatives")}
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
                  {s("objectiveCoordinateComplexInitiatives")}
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
                    <a href={`/${locale}/what-we-offer-objective-6/`} aria-current="page">
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
              {s("coordinateComplexInitiatives")}
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
            <ul className="svc-cards p1-cards p1-one">
              <li className="svc-card p1-card" id="s-6-1">
                <h2 className="svc-n">
                  {s("bringOrganizationsTogetherToDeliver")}
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
                              <a href={`/${locale}/our-experience-h05/?from=o-6-1-1`}>
                                <span className="fc-st">
                                  {s("japaneseAndIndianFirmsPursuingA")}
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <p className="fc-act">
                          <a className="arrow" href={`/${locale}/contact/?topic=o-6-1-1`}>
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
                          <a className="arrow" href={`/${locale}/contact/?topic=o-6-1-2`}>
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
                          {t("p_9")}
                        </p>
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
                        <p className="fc-note">
                          {t("p_10")}
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
                              <a href={`/${locale}/our-experience-e08/?from=o-6-1-3`}>
                                <span className="fc-st">
                                  {s("coordinatingAConsistentCustomerExperienceAfter")}
                                </span>
                              </a>
                            </li>
                          </ul>
                        </div>
                        <p className="fc-act">
                          <a className="arrow" href={`/${locale}/contact/?topic=o-6-1-3`}>
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
                        <p className="fc-act">
                          <a className="arrow" href={`/${locale}/contact/?topic=o-6-1-4`}>
                            {s("discussThisOffering")}
                          </a>
                        </p>
                      </div>
                    </details>
                  </li>
                </ul>
                {"\n"}
                <p className="svc-act">
                  <a className="arrow" href={`/${locale}/contact/?topic=s-6-1`}>
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
