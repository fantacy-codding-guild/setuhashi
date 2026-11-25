import { getTranslations, setRequestLocale } from "next-intl/server";
import PageShell from "@/components/PageShell";
import { pageMetadata, type PageProps } from "@/lib/metadata";

const PAGE = "privacy";

export const generateMetadata = pageMetadata(PAGE);

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.privacy");
  const s = await getTranslations("shared");
  return (
    <PageShell locale={locale} page={PAGE}>
    <main id="main" className="main-home">
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
                {t("span_1")}
              </span>
            </li>
          </ol>
        </nav>
        <article className="view view-privacy" aria-labelledby="vh">
          {"\n"}
          <h1 id="vh" className="v-h">
            {t("h1_1")}
          </h1>
          <p className="v-tag v-tag-plain">
            {t("p_1")}
          </p>
          {"\n"}
          <div className="priv-grid">
            <section>
              <h2 className="v-sub">
                {t("h2_1")}
              </h2>
              <ul className="points">
                <li>
                  {t("li_1")}
                </li>
                <li>
                  {t("li_2")}
                </li>
                <li>
                  {t("li_3")}
                </li>
              </ul>
            </section>
            {"\n"}
            <section>
              <h2 className="v-sub">
                {t("h2_2")}
              </h2>
              <ul className="pend-list">
                <li>
                  <h3>
                    {t("h3_1")}
                  </h3>
                  <p>
                    {t("p_2")}
                  </p>
                  <p className="pend-tag">
                    {t("p_3")}
                  </p>
                </li>
                <li>
                  <h3>
                    {t("h3_2")}
                  </h3>
                  <p>
                    {t("p_4")}
                  </p>
                  <p className="pend-tag">
                    {t("p_5")}
                  </p>
                </li>
                <li>
                  <h3>
                    {t("h3_3")}
                  </h3>
                  <p>
                    {t("p_6")}
                  </p>
                  <p className="pend-tag">
                    {t("p_7")}
                  </p>
                </li>
                <li>
                  <h3>
                    {t("h3_4")}
                  </h3>
                  <p>
                    {t("p_8")}
                  </p>
                  <p className="pend-tag">
                    {t("p_9")}
                  </p>
                </li>
                <li>
                  <h3>
                    {t("h3_5")}
                  </h3>
                  <p>
                    {t("p_10")}
                  </p>
                  <p className="pend-tag">
                    {t("p_11")}
                  </p>
                </li>
              </ul>
            </section>
          </div>
        </article>
      </div>
      {"\n"}
    </main>
    </PageShell>
  );
}
