import { getTranslations, setRequestLocale } from "next-intl/server";
import PageShell from "@/components/PageShell";
import { pageMetadata, type PageProps } from "@/lib/metadata";

const PAGE = "what-we-offer";

export const generateMetadata = pageMetadata(PAGE);

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.what-we-offer");
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
              <span aria-current="page">
                {s("whatWeOffer")}
              </span>
            </li>
          </ol>
        </nav>
        <div className="layout layout-offer">
          <aside className="local local-offer local-tree" aria-label={s("whatWeOffer")}>
            {"\n"}
            <p className="local-k">
              <a href={`/${locale}/what-we-offer/`} aria-current="page">
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
                  <a href={`/${locale}/what-we-offer-all-services/`}>
                    {s("viewAllServices")}
                  </a>
                </p>
              </nav>
            </details>
            {"\n"}
          </aside>
          {"\n"}
          <article className="view view-offer view-ov" aria-labelledby="vh">
            <h1 id="vh" className="v-h">
              {s("whatWeOffer")}
            </h1>
            <p className="v-tag v-tag-plain">
              {t("p_2")}
            </p>
            {"\n"}
            <ul className="obj-cards">
              <li className="obj-card obj-card-c">
                <h2>
                  <a href={`/${locale}/what-we-offer-objective-1/`}>
                    {s("findTheRightOpportunities")}
                  </a>
                </h2>
                <p>
                  {t("p_3")}
                </p>
              </li>
              <li className="obj-card obj-card-c">
                <h2>
                  <a href={`/${locale}/what-we-offer-objective-2/`}>
                    {s("enterAndGrowInJapanOr")}
                  </a>
                </h2>
                <p>
                  {t("p_4")}
                </p>
              </li>
              <li className="obj-card obj-card-c">
                <h2>
                  <a href={`/${locale}/what-we-offer-objective-3/`}>
                    {s("turnInterestIntoCommitments")}
                  </a>
                </h2>
                <p>
                  {t("p_5")}
                </p>
              </li>
              <li className="obj-card obj-card-c">
                <h2>
                  <a href={`/${locale}/what-we-offer-objective-4/`}>
                    {s("setUpAndImproveOperations")}
                  </a>
                </h2>
                <p>
                  {t("p_6")}
                </p>
              </li>
              <li className="obj-card obj-card-c">
                <h2>
                  <a href={`/${locale}/what-we-offer-objective-5/`}>
                    {s("createNewBusinessAndSustainValue")}
                  </a>
                </h2>
                <p>
                  {t("p_7")}
                </p>
              </li>
              <li className="obj-card obj-card-c">
                <h2>
                  <a href={`/${locale}/what-we-offer-objective-6/`}>
                    {s("coordinateComplexInitiatives")}
                  </a>
                </h2>
                <p>
                  {t("p_8")}
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
            <p className="ov-more">
              <a className="arrow" href={`/${locale}/what-we-offer-all-services/`}>
                {t("a_11")}
              </a>
            </p>
            {"\n"}
            <p className="ov-diff">
              {t("p_10")}
              <a href={`/${locale}/what-we-do/`}>
                {s("whatWeDo2")}
              </a>
            </p>
            {"\n"}
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
