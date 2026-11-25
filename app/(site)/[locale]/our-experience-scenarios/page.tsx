import { getTranslations, setRequestLocale } from "next-intl/server";
import PageShell from "@/components/PageShell";
import { pageMetadata, type PageProps } from "@/lib/metadata";

const PAGE = "our-experience-scenarios";

export const generateMetadata = pageMetadata(PAGE);

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.our-experience-scenarios");
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
                {s("illustrativeScenarios")}
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
          <article className="view view-wide" aria-labelledby="vh">
            <h1 id="vh" className="v-h">
              {s("illustrativeScenarios")}
            </h1>
            {"\n"}
            <div className="attr-bar">
              <span className="tg">
                {s("illustrativeScenario")}
              </span>
              {s("aHypotheticalExampleNotAnActual")}
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
                <button type="button" className="fchip" data-f="ops" aria-pressed="false">
                  {t("button_4")}
                </button>
                <button type="button" className="fchip" data-f="change" aria-pressed="false">
                  {t("button_5")}
                </button>
                <button type="button" className="fchip" data-f="assess" aria-pressed="false">
                  {t("button_6")}
                </button>
                <button type="button" className="fchip" data-f="succession" aria-pressed="false">
                  {t("button_7")}
                </button>
                <button type="button" className="fchip" data-f="partners" aria-pressed="false">
                  {t("button_8")}
                </button>
              </div>
              <p className="fcount" role="status" data-t={t("t_1")}></p>
            </div>
            {"\n"}
            <ul className="st-grid">
              <li className="st-card st-hyp" data-tags="markets assess">
                <a href={`/${locale}/our-experience-h01/`}>
                  {"\n"}
                  <span className="st-t">
                    {s("aJapaneseManufacturerExploringIndia")}
                  </span>
                  <span className="st-g">
                    {t("span_8")}
                  </span>
                  <span className="st-a">
                    {t("span_9")}
                  </span>
                </a>
              </li>
              <li className="st-card st-hyp" data-tags="markets">
                <a href={`/${locale}/our-experience-h02/`}>
                  {"\n"}
                  <span className="st-t">
                    {s("anIndianSoftwareBusinessSeekingJapanese")}
                  </span>
                  <span className="st-g">
                    {t("span_11")}
                  </span>
                  <span className="st-a">
                    {t("span_12")}
                  </span>
                </a>
              </li>
              <li className="st-card st-hyp" data-tags="ops">
                <a href={`/${locale}/our-experience-h03/`}>
                  {"\n"}
                  <span className="st-t">
                    {s("aJapaneseBusinessSeekingEngineeringCapability")}
                  </span>
                  <span className="st-g">
                    {t("span_14")}
                  </span>
                  <span className="st-a">
                    {t("span_15")}
                  </span>
                </a>
              </li>
              <li className="st-card st-hyp" data-tags="ops">
                <a href={`/${locale}/our-experience-h04/`}>
                  {"\n"}
                  <span className="st-t">
                    {s("anExistingCollaborationDeliveringLessThan")}
                  </span>
                  <span className="st-g">
                    {t("span_17")}
                  </span>
                  <span className="st-a">
                    {t("span_18")}
                  </span>
                </a>
              </li>
              <li className="st-card st-hyp" data-tags="new change">
                <a href={`/${locale}/our-experience-h05/`}>
                  {"\n"}
                  <span className="st-t">
                    {s("japaneseAndIndianFirmsPursuingA")}
                  </span>
                  <span className="st-g">
                    {t("span_20")}
                  </span>
                  <span className="st-a">
                    {t("span_21")}
                  </span>
                </a>
              </li>
              <li className="st-card st-hyp" data-tags="succession">
                <a href={`/${locale}/our-experience-h06/`}>
                  {"\n"}
                  <span className="st-t">
                    {s("aSpecialistBusinessConsideringSuccession")}
                  </span>
                  <span className="st-g">
                    {t("span_23")}
                  </span>
                  <span className="st-a">
                    {t("span_24")}
                  </span>
                </a>
              </li>
              <li className="st-card st-hyp" data-tags="partners">
                <a href={`/${locale}/our-experience-h07/`}>
                  {"\n"}
                  <span className="st-t">
                    {s("anIndianManufacturerLookingForA")}
                  </span>
                  <span className="st-g">
                    {t("span_26")}
                  </span>
                  <span className="st-a">
                    {t("span_27")}
                  </span>
                </a>
              </li>
              <li className="st-card st-hyp" data-tags="partners">
                <a href={`/${locale}/our-experience-h08/`}>
                  {"\n"}
                  <span className="st-t">
                    {s("aJapanIndiaVenturePreparingTo")}
                  </span>
                  <span className="st-g">
                    {t("span_29")}
                  </span>
                  <span className="st-a">
                    {t("span_30")}
                  </span>
                </a>
              </li>
              <li className="st-card st-hyp" data-tags="ops">
                <a href={`/${locale}/our-experience-h09/`}>
                  {"\n"}
                  <span className="st-t">
                    {s("preparingJapaneseAndIndianTeamsTo")}
                  </span>
                  <span className="st-g">
                    {t("span_32")}
                  </span>
                  <span className="st-a">
                    {t("span_33")}
                  </span>
                </a>
              </li>
              <li className="st-card st-hyp" data-tags="new partners">
                <a href={`/${locale}/our-experience-h10/`}>
                  {"\n"}
                  <span className="st-t">
                    {s("japaneseAndIndianFirmsDesigningA")}
                  </span>
                  <span className="st-g">
                    {t("span_35")}
                  </span>
                  <span className="st-a">
                    {t("span_36")}
                  </span>
                </a>
              </li>
            </ul>
            {"\n"}
            <nav className="pager" aria-label={s("previousAndNext")}>
              <a className="pg pg-prev" href={`/${locale}/our-experience/`}>
                <span className="pg-k">
                  {s("previous")}
                </span>
                {s("experienceWeBring")}
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
