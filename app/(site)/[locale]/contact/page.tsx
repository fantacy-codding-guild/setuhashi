import { getTranslations, setRequestLocale } from "next-intl/server";
import PageShell from "@/components/PageShell";
import { pageMetadata, type PageProps } from "@/lib/metadata";

const PAGE = "contact";

export const generateMetadata = pageMetadata(PAGE);

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.contact");
  const s = await getTranslations("shared");
  return (
    <PageShell locale={locale} page={PAGE}>
      <main id="main" className="main-contact">
        <div className="wrap">
          <nav className="crumbs" aria-label={s("youAreHere")}>
            <ol>
              <li>
                <a href={`/${locale}/`}>{s("home")}</a>
              </li>
              <li>
                <span aria-current="page">{t("span_1")}</span>
              </li>
            </ol>
          </nav>
          <div className="contact-grid">
            <div className="c-inv">
              <p className="v-k">{t("p_1")}</p>
              <h1 id="vh" className="v-h">
                {t("h1_1")}
              </h1>
              <p className="c-intro">{t("p_2")}</p>
              <p className="c-lang">{t("p_3")}</p>

              <div className="c-mail">
                <h2 className="lab">{t("h2_1")}</h2>
                <p>
                  <span className="c-ml">{t("span_2")}</span>{" "}
                  <a href={"mailto:contact@setuhashi.com"}>{t("a_2")}</a>
                </p>

                <p className="small">
                  <a href={`/${locale}/our-people/`}>{t("a_3")}</a>
                </p>
              </div>

              <p className="small">
                {t("p_4")}
                <a href={`/${locale}/privacy/`}>{t("a_4")}</a>
              </p>
            </div>
            <div className="c-form">
              <form
                className="enq"
                data-inactive=""
                noValidate
                aria-describedby="inactive-note"
              >
                <div className="topic-ctx" id="topic-ctx" hidden>
                  <p>
                    <span className="lab">{t("span_3")}</span>
                    <strong id="topic-ctx-label"></strong>
                  </p>

                  <p className="topic-acts">
                    <a id="topic-back" href={`/${locale}/what-we-offer/`}>
                      {t("a_5")}
                    </a>
                    <button type="button" className="linkbtn" id="topic-clear">
                      {t("button_1")}
                    </button>
                  </p>
                </div>

                <div
                  className="form-error"
                  id="form-error"
                  role="alert"
                  tabIndex={-1}
                  hidden
                >
                  <p>{t("p_6")}</p>
                  <ul id="form-error-list"></ul>
                </div>

                <div className="field">
                  <label htmlFor="f-name">
                    {t("label_2")}
                    <span className="req">{t("span_4")}</span>
                  </label>
                  <input
                    id="f-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    maxLength={120}
                    required
                    data-err={t("err_1")}
                  />
                  <p className="ferr" id="f-name-err" hidden></p>
                </div>

                <div className="field">
                  <label htmlFor="f-email">
                    {t("label_3")}
                    <span className="req">{t("span_5")}</span>
                  </label>
                  <input
                    id="f-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    maxLength={160}
                    required
                    data-err={t("err_2")}
                  />
                  <p className="ferr" id="f-email-err" hidden></p>
                </div>

                <div className="field">
                  <label htmlFor="f-org">
                    {t("label_4")}
                    <span className="opt">{t("span_6")}</span>
                  </label>
                  <input
                    id="f-org"
                    name="organization"
                    type="text"
                    autoComplete="organization"
                    maxLength={160}
                  />
                </div>

                <div className="field">
                  <label htmlFor="f-topic">
                    {t("label_5")}
                    <span className="opt">{t("span_7")}</span>
                  </label>
                  <p className="hint" id="f-topic-hint">
                    {t("p_7")}
                  </p>
                  <select
                    id="f-topic"
                    name="topic"
                    aria-describedby="f-topic-hint"
                  >
                    <option value="">{t("option_1")}</option>
                    <optgroup label={s("whoWeServe")}>
                      <option value="a-jp" data-back="who-we-serve.html">
                        {s("japaneseBusinesses")}
                      </option>
                      <option
                        value="a-in"
                        data-back="who-we-serve-indian-businesses.html"
                      >
                        {s("indianBusinesses")}
                      </option>
                      <option
                        value="a-joint"
                        data-back="who-we-serve-building-together.html"
                      >
                        {s("buildingTogetherForOtherMarkets")}
                      </option>
                      <option
                        value="a-prov"
                        data-back="who-we-serve-providers-and-institutions.html"
                      >
                        {s("providersAndInstitutions")}
                      </option>
                      <option
                        value="a-gov"
                        data-back="who-we-serve-government.html"
                      >
                        {s("government")}
                      </option>
                    </optgroup>
                    <optgroup label={s("findTheRightOpportunities")}>
                      <option
                        value="s-1-1"
                        data-back="what-we-offer-objective-1.html#s-1-1"
                      >
                        {s("assessOpportunities")}
                      </option>
                      <option
                        value="o-1-1-1"
                        data-back="what-we-offer-objective-1.html#o-1-1-1"
                      >
                        {t("option_8")}
                      </option>
                      <option
                        value="o-1-1-2"
                        data-back="what-we-offer-objective-1.html#o-1-1-2"
                      >
                        {t("option_9")}
                      </option>
                      <option
                        value="o-1-1-3"
                        data-back="what-we-offer-objective-1.html#o-1-1-3"
                      >
                        {t("option_10")}
                      </option>
                      <option
                        value="o-1-1-4"
                        data-back="what-we-offer-objective-1.html#o-1-1-4"
                      >
                        {t("option_11")}
                      </option>
                      <option
                        value="s-1-2"
                        data-back="what-we-offer-objective-1.html#s-1-2"
                      >
                        {s("adaptYourOfferForTheMarket")}
                      </option>
                      <option
                        value="o-1-2-1"
                        data-back="what-we-offer-objective-1.html#o-1-2-1"
                      >
                        {t("option_13")}
                      </option>
                      <option
                        value="o-1-2-2"
                        data-back="what-we-offer-objective-1.html#o-1-2-2"
                      >
                        {t("option_14")}
                      </option>
                      <option
                        value="o-1-2-3"
                        data-back="what-we-offer-objective-1.html#o-1-2-3"
                      >
                        {t("option_15")}
                      </option>
                      <option
                        value="o-1-2-4"
                        data-back="what-we-offer-objective-1.html#o-1-2-4"
                      >
                        {t("option_16")}
                      </option>
                      <option
                        value="s-1-3"
                        data-back="what-we-offer-objective-1.html#s-1-3"
                      >
                        {s("findAndDevelopSuitablePartnerships")}
                      </option>
                      <option
                        value="o-1-3-1"
                        data-back="what-we-offer-objective-1.html#o-1-3-1"
                      >
                        {t("option_18")}
                      </option>
                      <option
                        value="o-1-3-2"
                        data-back="what-we-offer-objective-1.html#o-1-3-2"
                      >
                        {t("option_19")}
                      </option>
                      <option
                        value="o-1-3-3"
                        data-back="what-we-offer-objective-1.html#o-1-3-3"
                      >
                        {t("option_20")}
                      </option>
                    </optgroup>
                    <optgroup label={s("enterAndGrowInJapanOr")}>
                      <option
                        value="s-2-1"
                        data-back="what-we-offer-objective-2.html#s-2-1"
                      >
                        {s("reachCustomersInJapan")}
                      </option>
                      <option
                        value="o-2-1-1"
                        data-back="what-we-offer-objective-2.html#o-2-1-1"
                      >
                        {t("option_22")}
                      </option>
                      <option
                        value="o-2-1-2"
                        data-back="what-we-offer-objective-2.html#o-2-1-2"
                      >
                        {t("option_23")}
                      </option>
                      <option
                        value="o-2-1-3"
                        data-back="what-we-offer-objective-2.html#o-2-1-3"
                      >
                        {t("option_24")}
                      </option>
                      <option
                        value="o-2-1-4"
                        data-back="what-we-offer-objective-2.html#o-2-1-4"
                      >
                        {t("option_25")}
                      </option>
                      <option
                        value="s-2-2"
                        data-back="what-we-offer-objective-2.html#s-2-2"
                      >
                        {s("reachCustomersInIndia")}
                      </option>
                      <option
                        value="o-2-2-1"
                        data-back="what-we-offer-objective-2.html#o-2-2-1"
                      >
                        {t("option_27")}
                      </option>
                      <option
                        value="o-2-2-2"
                        data-back="what-we-offer-objective-2.html#o-2-2-2"
                      >
                        {t("option_28")}
                      </option>
                      <option
                        value="o-2-2-3"
                        data-back="what-we-offer-objective-2.html#o-2-2-3"
                      >
                        {t("option_29")}
                      </option>
                      <option
                        value="o-2-2-4"
                        data-back="what-we-offer-objective-2.html#o-2-2-4"
                      >
                        {t("option_30")}
                      </option>
                      <option
                        value="s-2-3"
                        data-back="what-we-offer-objective-2.html#s-2-3"
                      >
                        {s("growYourMarketPresence")}
                      </option>
                      <option
                        value="o-2-3-1"
                        data-back="what-we-offer-objective-2.html#o-2-3-1"
                      >
                        {t("option_32")}
                      </option>
                      <option
                        value="o-2-3-2"
                        data-back="what-we-offer-objective-2.html#o-2-3-2"
                      >
                        {t("option_33")}
                      </option>
                      <option
                        value="o-2-3-3"
                        data-back="what-we-offer-objective-2.html#o-2-3-3"
                      >
                        {t("option_34")}
                      </option>
                      <option
                        value="o-2-3-4"
                        data-back="what-we-offer-objective-2.html#o-2-3-4"
                      >
                        {t("option_35")}
                      </option>
                    </optgroup>
                    <optgroup label={s("turnInterestIntoCommitments")}>
                      <option
                        value="s-3-1"
                        data-back="what-we-offer-objective-3.html#s-3-1"
                      >
                        {s("developWorkableAgreements")}
                      </option>
                      <option
                        value="o-3-1-1"
                        data-back="what-we-offer-objective-3.html#o-3-1-1"
                      >
                        {t("option_37")}
                      </option>
                      <option
                        value="o-3-1-2"
                        data-back="what-we-offer-objective-3.html#o-3-1-2"
                      >
                        {t("option_38")}
                      </option>
                      <option
                        value="o-3-1-3"
                        data-back="what-we-offer-objective-3.html#o-3-1-3"
                      >
                        {t("option_39")}
                      </option>
                      <option
                        value="o-3-1-4"
                        data-back="what-we-offer-objective-3.html#o-3-1-4"
                      >
                        {t("option_40")}
                      </option>
                      <option
                        value="s-3-2"
                        data-back="what-we-offer-objective-3.html#s-3-2"
                      >
                        {s("qualifyAndDevelopSuppliers")}
                      </option>
                      <option
                        value="o-3-2-1"
                        data-back="what-we-offer-objective-3.html#o-3-2-1"
                      >
                        {t("option_42")}
                      </option>
                      <option
                        value="o-3-2-2"
                        data-back="what-we-offer-objective-3.html#o-3-2-2"
                      >
                        {t("option_43")}
                      </option>
                      <option
                        value="o-3-2-3"
                        data-back="what-we-offer-objective-3.html#o-3-2-3"
                      >
                        {t("option_44")}
                      </option>
                      <option
                        value="o-3-2-4"
                        data-back="what-we-offer-objective-3.html#o-3-2-4"
                      >
                        {t("option_45")}
                      </option>
                      <option
                        value="s-3-3"
                        data-back="what-we-offer-objective-3.html#s-3-3"
                      >
                        {s("prepareOpportunitiesForFinancing")}
                      </option>
                      <option
                        value="o-3-3-1"
                        data-back="what-we-offer-objective-3.html#o-3-3-1"
                      >
                        {t("option_47")}
                      </option>
                      <option
                        value="o-3-3-2"
                        data-back="what-we-offer-objective-3.html#o-3-3-2"
                      >
                        {t("option_48")}
                      </option>
                      <option
                        value="o-3-3-3"
                        data-back="what-we-offer-objective-3.html#o-3-3-3"
                      >
                        {t("option_49")}
                      </option>
                      <option
                        value="o-3-3-4"
                        data-back="what-we-offer-objective-3.html#o-3-3-4"
                      >
                        {t("option_50")}
                      </option>
                    </optgroup>
                    <optgroup label={s("setUpAndImproveOperations")}>
                      <option
                        value="s-4-1"
                        data-back="what-we-offer-objective-4.html#s-4-1"
                      >
                        {s("establishCrossBorderOperations")}
                      </option>
                      <option
                        value="o-4-1-1"
                        data-back="what-we-offer-objective-4.html#o-4-1-1"
                      >
                        {t("option_52")}
                      </option>
                      <option
                        value="o-4-1-2"
                        data-back="what-we-offer-objective-4.html#o-4-1-2"
                      >
                        {t("option_53")}
                      </option>
                      <option
                        value="o-4-1-3"
                        data-back="what-we-offer-objective-4.html#o-4-1-3"
                      >
                        {t("option_54")}
                      </option>
                      <option
                        value="o-4-1-4"
                        data-back="what-we-offer-objective-4.html#o-4-1-4"
                      >
                        {t("option_55")}
                      </option>
                      <option
                        value="s-4-2"
                        data-back="what-we-offer-objective-4.html#s-4-2"
                      >
                        {s("improveExistingCollaborations")}
                      </option>
                      <option
                        value="o-4-2-1"
                        data-back="what-we-offer-objective-4.html#o-4-2-1"
                      >
                        {t("option_57")}
                      </option>
                      <option
                        value="o-4-2-2"
                        data-back="what-we-offer-objective-4.html#o-4-2-2"
                      >
                        {t("option_58")}
                      </option>
                      <option
                        value="o-4-2-3"
                        data-back="what-we-offer-objective-4.html#o-4-2-3"
                      >
                        {t("option_59")}
                      </option>
                      <option
                        value="o-4-2-4"
                        data-back="what-we-offer-objective-4.html#o-4-2-4"
                      >
                        {t("option_60")}
                      </option>
                      <option
                        value="s-4-3"
                        data-back="what-we-offer-objective-4.html#s-4-3"
                      >
                        {s("prepareTeamsToWorkTogether")}
                      </option>
                      <option
                        value="o-4-3-1"
                        data-back="what-we-offer-objective-4.html#o-4-3-1"
                      >
                        {t("option_62")}
                      </option>
                      <option
                        value="o-4-3-2"
                        data-back="what-we-offer-objective-4.html#o-4-3-2"
                      >
                        {t("option_63")}
                      </option>
                      <option
                        value="o-4-3-3"
                        data-back="what-we-offer-objective-4.html#o-4-3-3"
                      >
                        {t("option_64")}
                      </option>
                      <option
                        value="o-4-3-4"
                        data-back="what-we-offer-objective-4.html#o-4-3-4"
                      >
                        {t("option_65")}
                      </option>
                    </optgroup>
                    <optgroup label={s("createNewBusinessAndSustainValue")}>
                      <option
                        value="s-5-1"
                        data-back="what-we-offer-objective-5.html#s-5-1"
                      >
                        {s("developNewOffersTogether")}
                      </option>
                      <option
                        value="o-5-1-1"
                        data-back="what-we-offer-objective-5.html#o-5-1-1"
                      >
                        {t("option_67")}
                      </option>
                      <option
                        value="o-5-1-2"
                        data-back="what-we-offer-objective-5.html#o-5-1-2"
                      >
                        {t("option_68")}
                      </option>
                      <option
                        value="o-5-1-3"
                        data-back="what-we-offer-objective-5.html#o-5-1-3"
                      >
                        {t("option_69")}
                      </option>
                      <option
                        value="o-5-1-4"
                        data-back="what-we-offer-objective-5.html#o-5-1-4"
                      >
                        {t("option_70")}
                      </option>
                      <option
                        value="s-5-2"
                        data-back="what-we-offer-objective-5.html#s-5-2"
                      >
                        {s("pursueCustomersInOtherMarketsTogether")}
                      </option>
                      <option
                        value="o-5-2-1"
                        data-back="what-we-offer-objective-5.html#o-5-2-1"
                      >
                        {t("option_72")}
                      </option>
                      <option
                        value="o-5-2-2"
                        data-back="what-we-offer-objective-5.html#o-5-2-2"
                      >
                        {t("option_73")}
                      </option>
                      <option
                        value="o-5-2-3"
                        data-back="what-we-offer-objective-5.html#o-5-2-3"
                      >
                        {t("option_74")}
                      </option>
                      <option
                        value="o-5-2-4"
                        data-back="what-we-offer-objective-5.html#o-5-2-4"
                      >
                        {t("option_75")}
                      </option>
                      <option
                        value="s-5-3"
                        data-back="what-we-offer-objective-5.html#s-5-3"
                      >
                        {s("planForSuccessionAndRenewal")}
                      </option>
                      <option
                        value="o-5-3-1"
                        data-back="what-we-offer-objective-5.html#o-5-3-1"
                      >
                        {t("option_77")}
                      </option>
                      <option
                        value="o-5-3-2"
                        data-back="what-we-offer-objective-5.html#o-5-3-2"
                      >
                        {t("option_78")}
                      </option>
                      <option
                        value="o-5-3-3"
                        data-back="what-we-offer-objective-5.html#o-5-3-3"
                      >
                        {t("option_79")}
                      </option>
                      <option
                        value="o-5-3-4"
                        data-back="what-we-offer-objective-5.html#o-5-3-4"
                      >
                        {t("option_80")}
                      </option>
                    </optgroup>
                    <optgroup label={s("coordinateComplexInitiatives")}>
                      <option
                        value="s-6-1"
                        data-back="what-we-offer-objective-6.html#s-6-1"
                      >
                        {s("bringOrganizationsTogetherToDeliver")}
                      </option>
                      <option
                        value="o-6-1-1"
                        data-back="what-we-offer-objective-6.html#o-6-1-1"
                      >
                        {t("option_82")}
                      </option>
                      <option
                        value="o-6-1-2"
                        data-back="what-we-offer-objective-6.html#o-6-1-2"
                      >
                        {t("option_83")}
                      </option>
                      <option
                        value="o-6-1-3"
                        data-back="what-we-offer-objective-6.html#o-6-1-3"
                      >
                        {t("option_84")}
                      </option>
                      <option
                        value="o-6-1-4"
                        data-back="what-we-offer-objective-6.html#o-6-1-4"
                      >
                        {t("option_85")}
                      </option>
                    </optgroup>
                    <optgroup label={s("ourFocus")}>
                      <option
                        value="f-gcc"
                        data-back="our-focus-global-capability-centres.html"
                      >
                        {t("option_86")}
                      </option>
                      <option
                        value="f-water"
                        data-back="our-focus-water-solutions.html"
                      >
                        {t("option_87")}
                      </option>
                      <option
                        value="f-recycle"
                        data-back="our-focus-recycling-and-waste-management.html"
                      >
                        {t("option_88")}
                      </option>
                      <option value="f-other" data-back="our-focus.html">
                        {t("option_89")}
                      </option>
                    </optgroup>
                    <optgroup label={s("ourExperience")}>
                      <option value="e-e01" data-back="our-experience-e01.html">
                        {s("openingMarketsForIndustrialManufacturers")}
                      </option>
                      <option value="e-e02" data-back="our-experience-e02.html">
                        {s("helpingIndianManufacturersReachUsCustomers")}
                      </option>
                      <option value="e-e03" data-back="our-experience-e03.html">
                        {s("creatingANewBusinessPossibilityFrom")}
                      </option>
                      <option value="e-e04" data-back="our-experience-e04.html">
                        {s("bringingAFragmentedGlobalOperationTogether")}
                      </option>
                      <option value="e-e05" data-back="our-experience-e05.html">
                        {s("improvingTheCustomerJourneyInInternational")}
                      </option>
                      <option value="e-e06" data-back="our-experience-e06.html">
                        {s("connectingCustomerStrategyWithImplementation")}
                      </option>
                      <option value="e-e07" data-back="our-experience-e07.html">
                        {s("helpingAnInvestmentBusinessLaunchProducts")}
                      </option>
                      <option value="e-e08" data-back="our-experience-e08.html">
                        {s("coordinatingAConsistentCustomerExperienceAfter")}
                      </option>
                      <option value="e-e09" data-back="our-experience-e09.html">
                        {s("supportingAJapaneseInstitutionSGlobal")}
                      </option>
                      <option value="e-e10" data-back="our-experience-e10.html">
                        {s("transformingSalesAndServiceAtScale")}
                      </option>
                      <option value="e-e11" data-back="our-experience-e11.html">
                        {s("changingPricingPracticesAcrossAGlobal")}
                      </option>
                      <option value="e-e12" data-back="our-experience-e12.html">
                        {s("improvingHowATechnologyOrganizationDelivers")}
                      </option>
                      <option value="e-e13" data-back="our-experience-e13.html">
                        {s("assessingConnectedFinancialRisks")}
                      </option>
                      <option value="e-e14" data-back="our-experience-e14.html">
                        {s(
                          "concludingInternationalLicensingAndManufacturingAgreements",
                        )}
                      </option>
                      <option value="e-e15" data-back="our-experience-e15.html">
                        {s("developingAUsMarketForProducts")}
                      </option>
                      <option value="e-e16" data-back="our-experience-e16.html">
                        {s("checkingQualityBeforeDeliveryInBespoke")}
                      </option>
                      <option value="e-e17" data-back="our-experience-e17.html">
                        {s("recruitingAdultStudentsInJapanAnd")}
                      </option>
                      <option value="e-e18" data-back="our-experience-e18.html">
                        {s("developingAPlatformEvolutionRoadmap")}
                      </option>
                      <option value="e-e19" data-back="our-experience-e19.html">
                        {s("developingTwoRoutesIntoTurkey")}
                      </option>
                      <option value="e-e20" data-back="our-experience-e20.html">
                        {s("shapingATenMarketGrowthStrategy")}
                      </option>
                      <option value="e-e21" data-back="our-experience-e21.html">
                        {s("positioningARegionForTechnologyInvestment")}
                      </option>
                      <option value="e-e22" data-back="our-experience-e22.html">
                        {s("buildingAnIndianManufacturerSInternational")}
                      </option>
                      <option value="e-e23" data-back="our-experience-e23.html">
                        {s("buildingAJapaneseClienteleInUs")}
                      </option>
                      <option value="e-e24" data-back="our-experience-e24.html">
                        {s("automatingGuestFollowUpAndArrival")}
                      </option>
                      <option value="e-e25" data-back="our-experience-e25.html">
                        {s("turningAGuestRequestIntoA")}
                      </option>
                      <option value="e-e26" data-back="our-experience-e26.html">
                        {s("helpingOverseasBackedTechnologyStartUps")}
                      </option>
                      <option value="e-e27" data-back="our-experience-e27.html">
                        {s("conveningGovernmentsAndCorporateLocationDecision")}
                      </option>
                      <option value="e-e28" data-back="our-experience-e28.html">
                        {s("concludingTechnologyPartnershipsWithIsraeliAnd")}
                      </option>
                      <option value="e-e29" data-back="our-experience-e29.html">
                        {s("negotiatingAnOwnershipTransitionForA")}
                      </option>
                      <option value="h-h01" data-back="our-experience-h01.html">
                        {s("aJapaneseManufacturerExploringIndia")}
                      </option>
                      <option value="h-h02" data-back="our-experience-h02.html">
                        {s("anIndianSoftwareBusinessSeekingJapanese")}
                      </option>
                      <option value="h-h03" data-back="our-experience-h03.html">
                        {s("aJapaneseBusinessSeekingEngineeringCapability")}
                      </option>
                      <option value="h-h04" data-back="our-experience-h04.html">
                        {s("anExistingCollaborationDeliveringLessThan")}
                      </option>
                      <option value="h-h05" data-back="our-experience-h05.html">
                        {s("japaneseAndIndianFirmsPursuingA")}
                      </option>
                      <option value="h-h06" data-back="our-experience-h06.html">
                        {s("aSpecialistBusinessConsideringSuccession")}
                      </option>
                      <option value="h-h07" data-back="our-experience-h07.html">
                        {s("anIndianManufacturerLookingForA")}
                      </option>
                      <option value="h-h08" data-back="our-experience-h08.html">
                        {s("aJapanIndiaVenturePreparingTo")}
                      </option>
                      <option value="h-h09" data-back="our-experience-h09.html">
                        {s("preparingJapaneseAndIndianTeamsTo")}
                      </option>
                      <option value="h-h10" data-back="our-experience-h10.html">
                        {s("japaneseAndIndianFirmsDesigningA")}
                      </option>
                    </optgroup>
                  </select>
                </div>

                <div className="field">
                  <label htmlFor="f-msg">
                    {t("label_15")}
                    <span className="req">{t("span_8")}</span>
                  </label>
                  <p className="hint" id="f-msg-hint">
                    {t("p_8")}
                  </p>
                  <textarea
                    id="f-msg"
                    name="message"
                    maxLength={4000}
                    required
                    aria-describedby="f-msg-hint"
                    data-err={t("err_3")}
                  ></textarea>
                  <p className="ferr" id="f-msg-err" hidden></p>
                </div>

                <p>
                  <button type="button" className="btn btn-p send">
                    {t("button_2")}
                  </button>
                </p>

                <p
                  className="fstatus"
                  id="fstatus"
                  role="status"
                  data-ok={t("ok_1")}
                ></p>
              </form>
            </div>
          </div>
        </div>
      </main>
    </PageShell>
  );
}
