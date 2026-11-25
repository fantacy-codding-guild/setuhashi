import { getTranslations, setRequestLocale } from "next-intl/server";
import PageShell from "@/components/PageShell";
import { pageMetadata, type PageProps } from "@/lib/metadata";

const PAGE = "who-we-are-mission";

export const generateMetadata = pageMetadata(PAGE);

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.who-we-are-mission");
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
                {s("ourMission")}
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
                    <a href={`/${locale}/who-we-are-mission/`} aria-current="page">
                      <span className="ln-l">
                        {s("ourMission")}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href={`/${locale}/who-we-are-why-setuhashi/`}>
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
          <article className="view view-mission" aria-labelledby="vh">
            {"\n"}
            <h1 id="vh" className="v-h">
              {s("ourMission")}
            </h1>
            {"\n"}
            <div className="v-grid v-grid-1">
              <div className="v-body">
                <p className="m-open">
                  {t("p_1")}
                </p>
                <p>
                  {t("p_2")}
                </p>
                <p>
                  {t("p_3")}
                </p>
                <p className="m-close">
                  {t("p_4")}
                </p>
              </div>
            </div>
            {"\n"}
            <nav className="pager" aria-label={s("previousAndNext")}>
              <a className="pg pg-prev" href={`/${locale}/who-we-are/`}>
                <span className="pg-k">
                  {s("previous")}
                </span>
                {s("ourFoundingStory")}
              </a>
              <a className="pg pg-next" href={`/${locale}/who-we-are-why-setuhashi/`}>
                <span className="pg-k">
                  {s("next")}
                </span>
                {s("whySetuhashi")}
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
