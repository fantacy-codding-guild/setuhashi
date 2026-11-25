import { getTranslations, setRequestLocale } from "next-intl/server";
import PageShell from "@/components/PageShell";
import { pageMetadata, type PageProps } from "@/lib/metadata";

const PAGE = "our-people";

export const generateMetadata = pageMetadata(PAGE);

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.our-people");
  const s = await getTranslations("shared");
  return (
    <PageShell locale={locale} page={PAGE}>
    <main id="main" className="main-people">
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
                {s("ourPeople")}
              </span>
            </li>
          </ol>
        </nav>
        <div className="layout">
          <aside className="local" aria-label={s("ourPeople")}>
            {"\n"}
            <p className="local-k">
              <a href={`/${locale}/our-people/`}>
                {s("ourPeople")}
              </a>
            </p>
            {"\n"}
            <p className="local-lead">
              {s("diversePerspectivesOneSharedCommitment")}
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
                    <a href={`/${locale}/our-people/`} aria-current="page">
                      <span className="ln-l">
                        {s("overview")}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href={`/${locale}/our-people-raju/`}>
                      <span className="ln-l">
                        {s("rajuLalwani")}
                      </span>
                      <span className="ln-sub">
                        {s("managingPartner")}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href={`/${locale}/our-people-shyam/`}>
                      <span className="ln-l">
                        {s("shyamSundarPani")}
                      </span>
                      <span className="ln-sub">
                        {s("managingPartner")}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href={`/${locale}/our-people-mak/`}>
                      <span className="ln-l">
                        {s("makarandDatar")}
                      </span>
                      <span className="ln-sub">
                        {s("managingPartner")}
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href={`/${locale}/our-people-isha/`}>
                      <span className="ln-l">
                        {s("ishaLagu")}
                      </span>
                      <span className="ln-sub">
                        {s("analystBusinessLegal")}
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </details>
            {"\n"}
          </aside>
          <article className="view view-wide view-people" aria-labelledby="vh">
            <h1 id="vh" className="v-h v-h-one">
              {s("diversePerspectivesOneSharedCommitment")}
            </h1>
            <p className="v-tag v-tag-plain">
              {t("p_2")}
            </p>
            {"\n"}
            <ul className="pcs pcs-f pcs-4">
              <li className="pc pc-f">
                <a className="pc-a" href={`/${locale}/our-people-raju/`} tabIndex={-1} aria-hidden="true">
                  <img className="ptr" src={"/assets/img/raju.jpg"} alt={s("portraitOfRajuLalwani")} width="640" height="800" loading="lazy" />
                </a>
                <div className="pc-b">
                  {"\n"}
                  <h2 className="pc-n">
                    <a href={`/${locale}/our-people-raju/`}>
                      {s("rajuLalwani")}
                    </a>
                    <span className="pc-fam">
                      {t("span_13")}
                    </span>
                  </h2>
                  <p className="pc-r">
                    {s("managingPartner")}
                  </p>
                  <p className="pc-c">
                    {t("p_4")}
                  </p>
                </div>
              </li>
              <li className="pc pc-f">
                <a className="pc-a" href={`/${locale}/our-people-shyam/`} tabIndex={-1} aria-hidden="true">
                  <img className="ptr" src={"/assets/img/shyam.jpg"} alt={s("portraitOfShyamSundarPani")} width="640" height="800" loading="lazy" />
                </a>
                <div className="pc-b">
                  {"\n"}
                  <h2 className="pc-n">
                    <a href={`/${locale}/our-people-shyam/`}>
                      {s("shyamSundarPani")}
                    </a>
                    <span className="pc-fam">
                      {t("span_14")}
                    </span>
                  </h2>
                  <p className="pc-r">
                    {s("managingPartner")}
                  </p>
                  <p className="pc-c">
                    {t("p_6")}
                  </p>
                </div>
              </li>
              <li className="pc pc-f">
                <a className="pc-a" href={`/${locale}/our-people-mak/`} tabIndex={-1} aria-hidden="true">
                  <img className="ptr" src={"/assets/img/mak.jpg"} alt={s("portraitOfMakarandDatar")} width="640" height="800" loading="lazy" />
                </a>
                <div className="pc-b">
                  {"\n"}
                  <h2 className="pc-n">
                    <a href={`/${locale}/our-people-mak/`}>
                      {s("makarandDatar")}
                    </a>
                    <span className="pc-fam">
                      {t("span_15")}
                    </span>
                  </h2>
                  <p className="pc-r">
                    {s("managingPartner")}
                  </p>
                  <p className="pc-c">
                    {t("p_8")}
                  </p>
                </div>
              </li>
              <li className="pc pc-f">
                <a className="pc-a" href={`/${locale}/our-people-isha/`} tabIndex={-1} aria-hidden="true">
                  <img className="ptr" src={"/assets/img/isha.jpg"} alt={t("alt_4")} width="640" height="800" loading="lazy" />
                </a>
                <div className="pc-b">
                  {"\n"}
                  <h2 className="pc-n">
                    <a href={`/${locale}/our-people-isha/`}>
                      {s("ishaLagu")}
                    </a>
                  </h2>
                  <p className="pc-r">
                    {s("analystBusinessLegal")}
                  </p>
                  <p className="pc-c">
                    {t("p_10")}
                  </p>
                </div>
              </li>
            </ul>
            {"\n"}
            <nav className="pager" aria-label={s("previousAndNext")}>
              <a className="pg pg-next" href={`/${locale}/our-people-raju/`}>
                <span className="pg-k">
                  {s("next")}
                </span>
                {s("rajuLalwani")}
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
