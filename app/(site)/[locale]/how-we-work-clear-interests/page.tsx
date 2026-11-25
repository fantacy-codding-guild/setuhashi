import { getTranslations, setRequestLocale } from "next-intl/server";
import PageShell from "@/components/PageShell";
import { pageMetadata, type PageProps } from "@/lib/metadata";

const PAGE = "how-we-work-clear-interests";

export const generateMetadata = pageMetadata(PAGE);

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.how-we-work-clear-interests");
  const s = await getTranslations("shared");
  return (
    <PageShell locale={locale} page={PAGE}>
    <main id="main" className="main-how">
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
              <a href={`/${locale}/how-we-work/`}>
                {s("howWeWork")}
              </a>
            </li>
            <li>
              <span aria-current="page">
                {s("clearInterestsAndResponsibilities")}
              </span>
            </li>
          </ol>
        </nav>
        <div className="layout">
          <aside className="local" aria-label={s("howWeWork")}>
            {"\n"}
            <p className="local-k">
              <a href={`/${locale}/how-we-work/`}>
                {s("howWeWork")}
              </a>
            </p>
            {"\n"}
            <p className="local-lead">
              {s("aClearPurposeAnAgreedRole")}
            </p>
            <p className="local-intro">
              {s("youCanBeginWithASpecific")}
            </p>
            {"\n"}
            <details className="local-d" open>
              <summary>
                <span>
                  {t("span_2")}
                </span>
                <span className="ln-count">
                  {s("t4Of4")}
                </span>
              </summary>
              {"\n"}
              <nav aria-label={s("inThisSection")}>
                <ul className="ln">
                  <li>
                    <a href={`/${locale}/how-we-work/`}>
                      <span className="ln-l">
                        {s("gettingStarted")}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href={`/${locale}/how-we-work-our-role/`}>
                      <span className="ln-l">
                        {s("ourRole")}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href={`/${locale}/how-we-work-working-together/`}>
                      <span className="ln-l">
                        {s("workingTogether")}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href={`/${locale}/how-we-work-clear-interests/`} aria-current="page">
                      <span className="ln-l">
                        {s("clearInterestsAndResponsibilities")}
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </details>
            {"\n"}
          </aside>
          <article className="view view-wide" aria-labelledby="vh">
            {"\n"}
            <h1 id="vh" className="v-h">
              {s("clearInterestsAndResponsibilities")}
            </h1>
            <p className="v-tag">
              {t("p_3")}
            </p>
            {"\n"}
            <div className="v-grid v-grid-1">
              <div className="v-body">
                <ul className="pairs">
                  <li>
                    <h2 className="li-h">
                      {t("h2_1")}
                    </h2>
                    <p>
                      {t("p_4")}
                    </p>
                  </li>
                  <li>
                    <h2 className="li-h">
                      {t("h2_2")}
                    </h2>
                    <p>
                      {t("p_5")}
                    </p>
                  </li>
                  <li>
                    <h2 className="li-h">
                      {t("h2_3")}
                    </h2>
                    <p>
                      {t("p_6")}
                    </p>
                  </li>
                  <li>
                    <h2 className="li-h">
                      {t("h2_4")}
                    </h2>
                    <p>
                      {t("p_7")}
                    </p>
                  </li>
                  <li>
                    <h2 className="li-h">
                      {t("h2_5")}
                    </h2>
                    <p>
                      {t("p_8")}
                    </p>
                  </li>
                </ul>
                <details className="v-det">
                  <summary>
                    {t("summary_1")}
                  </summary>
                  <p>
                    {t("p_9")}
                  </p>
                </details>
                <p className="v-close">
                  {t("p_10")}
                </p>
              </div>
            </div>
            {"\n"}
            <p className="acts">
              <a className="btn btn-g" href={`/${locale}/contact/`}>
                {s("discussYourSituation")}
              </a>
            </p>
            {"\n"}
            <nav className="pager" aria-label={s("previousAndNext")}>
              <a className="pg pg-prev" href={`/${locale}/how-we-work-working-together/`}>
                <span className="pg-k">
                  {s("previous")}
                </span>
                {s("workingTogether")}
              </a>
            </nav>
            {"\n"}
          </article>
        </div>
      </div>
      {"\n"}
    </main>
    </PageShell>
  );
}
