import { getTranslations, setRequestLocale } from "next-intl/server";
import PageShell from "@/components/PageShell";
import { pageMetadata, type PageProps } from "@/lib/metadata";

const PAGE = "who-we-are-why-setuhashi";

export const generateMetadata = pageMetadata(PAGE);

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.who-we-are-why-setuhashi");
  const s = await getTranslations("shared");
  return (
    <PageShell locale={locale} page={PAGE}>
    <main id="main" className="main-who">
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
              <a href={`/${locale}/who-we-are/`}>
                {s("whoWeAre")}
              </a>
            </li>
            <li>
              <span aria-current="page">
                {s("whySetuhashi")}
              </span>
            </li>
          </ol>
        </nav>
        <div className="layout">
          <aside className="local" aria-label={s("whoWeAre")}>
            {"\n"}
            <p className="local-k">
              <a href={`/${locale}/who-we-are/`}>
                {s("whoWeAre")}
              </a>
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
                    <a href={`/${locale}/who-we-are/`}>
                      <span className="ln-l">
                        {s("ourFoundingStory")}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href={`/${locale}/who-we-are-mission/`}>
                      <span className="ln-l">
                        {s("ourMission")}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href={`/${locale}/who-we-are-why-setuhashi/`} aria-current="page">
                      <span className="ln-l">
                        {s("whySetuhashi")}
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </details>
            {"\n"}
          </aside>
          <article className="view" aria-labelledby="vh">
            {"\n"}
            <p className="v-k">
              {s("whySetuhashi")}
            </p>
            <h1 id="vh" className="v-h">
              {t("h1_1")}
            </h1>
            {"\n"}
            <div className="v-grid">
              <div className="v-body">
                <p>
                  {t("p_2")}
                </p>
                <p>
                  {t("p_3")}
                </p>
                <p>
                  {t("p_4")}
                </p>
                <p className="v-close">
                  {t("p_5")}
                </p>
              </div>
              <div className="v-fig">
                <figure className="fig fig-why">
                  <svg viewBox="0 0 300 260" role="img" aria-label={t("label_4")} focusable="false">
                    <path className="ln" d="M30 30 V230"></path>
                    <circle className="dot open" cx="30" cy="30" r="8"></circle>
                    <text x="54" y="35">
                      {t("text_1")}
                    </text>
                    <circle className="dot" cx="30" cy="80" r="8"></circle>
                    <text x="54" y="85">
                      {t("text_2")}
                    </text>
                    <circle className="dot" cx="30" cy="130" r="8"></circle>
                    <text x="54" y="135">
                      {t("text_3")}
                    </text>
                    <circle className="dot" cx="30" cy="180" r="8"></circle>
                    <text x="54" y="185">
                      {t("text_4")}
                    </text>
                    <circle className="dot" cx="30" cy="230" r="8"></circle>
                    <text x="54" y="235">
                      {t("text_5")}
                    </text>
                  </svg>
                </figure>
              </div>
            </div>
            {"\n"}
            <nav className="pager" aria-label={s("previousAndNext")}>
              <a className="pg pg-prev" href={`/${locale}/who-we-are-mission/`}>
                <span className="pg-k">
                  {s("previous")}
                </span>
                {s("ourMission")}
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
