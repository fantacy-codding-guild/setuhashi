import { getTranslations, setRequestLocale } from "next-intl/server";
import PageShell from "@/components/PageShell";
import { pageMetadata, type PageProps } from "@/lib/metadata";

const PAGE = "who-we-are";

export const generateMetadata = pageMetadata(PAGE);

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.who-we-are");
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
                {s("ourFoundingStory")}
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
                    <a href={`/${locale}/who-we-are/`} aria-current="page">
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
          <article className="view view-wide" aria-labelledby="vh">
            {"\n"}
            <p className="v-k">
              {s("ourFoundingStory")}
            </p>
            <h1 id="vh" className="v-h v-h-one">
              {t("h1_1")}
            </h1>
            {"\n"}
            <div className="v-grid v-grid-1">
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
                <p>
                  {t("p_5")}
                </p>
                <ul className="founders">
                  <li>
                    <a className="fd" href={`/${locale}/our-people-raju/`}>
                      <img className="ptr ptr-sm" src={"/assets/img/raju.jpg"} alt={s("portraitOfRajuLalwani")} width="640" height="800" loading="lazy" />
                      <span className="fd-n">
                        {t("span_7")}
                      </span>
                    </a>
                    <p>
                      {t("p_6")}
                    </p>
                  </li>
                  <li>
                    <a className="fd" href={`/${locale}/our-people-shyam/`}>
                      <img className="ptr ptr-sm" src={"/assets/img/shyam.jpg"} alt={s("portraitOfShyamSundarPani")} width="640" height="800" loading="lazy" />
                      <span className="fd-n">
                        {t("span_8")}
                      </span>
                    </a>
                    <p>
                      {t("p_7")}
                    </p>
                  </li>
                  <li>
                    <a className="fd" href={`/${locale}/our-people-mak/`}>
                      <img className="ptr ptr-sm" src={"/assets/img/mak.jpg"} alt={s("portraitOfMakarandDatar")} width="640" height="800" loading="lazy" />
                      <span className="fd-n">
                        {t("span_9")}
                      </span>
                    </a>
                    <p>
                      {t("p_8")}
                    </p>
                  </li>
                </ul>
                <figure className="v-quote">
                  <blockquote>
                    <p>
                      {t("p_9")}
                    </p>
                  </blockquote>
                  <figcaption>
                    {t("figcaption_1")}
                  </figcaption>
                </figure>
              </div>
            </div>
            {"\n"}
            <nav className="pager" aria-label={s("previousAndNext")}>
              <a className="pg pg-next" href={`/${locale}/who-we-are-mission/`}>
                <span className="pg-k">
                  {s("next")}
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
