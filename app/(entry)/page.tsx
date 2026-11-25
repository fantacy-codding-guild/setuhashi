import { getTranslations } from "next-intl/server";

export default async function EntryPage() {
  const en = await getTranslations({ locale: "en", namespace: "entry" });
  const ja = await getTranslations({ locale: "ja", namespace: "entry" });
  return (
    <>
      <main id="main" className="entry-main">
        <div className="wrap e-grid">
          <h1 className="e-statements">
            <span className="e-pair">
              <span className="e-s e-s1">{en("span_1")}</span>
              <span className="e-s-ja" lang="ja">
                {ja("span_2")}
              </span>
            </span>
            <span className="e-pair">
              <span className="e-s e-s2">{en("span_3")}</span>
              <span className="e-s-ja" lang="ja">
                {ja("span_4")}
              </span>
            </span>
            <span className="e-pair">
              <span className="e-s e-s3">{en("span_5")}</span>
              <span className="e-s-ja" lang="ja">
                {ja("span_6")}
              </span>
            </span>
          </h1>

          <div className="w-mark w-mark-en">
            <img
              src="/assets/logo/SetuHashi_Logo_English_Stacked_White.svg"
              alt={en("alt_1")}
              width="260"
              height="186"
            />
            <p className="w-def">
              <span className="w-d">
                <span>{en("span_7")}</span>
                {en("span_8")}
              </span>{" "}
              <span className="w-d">
                <span>{en("span_9")}</span>
                {en("span_10")}
              </span>
            </p>
            <p className="w-shared">{en("p_1")}</p>
          </div>

          <nav className="e-langs" aria-label={en("label_1")}>
            <a className="e-lang" href="/en/" hrefLang="en">
              {en("a_1")}
            </a>
            <a className="e-lang" href="/ja/" lang="ja" hrefLang="ja">
              {ja("a_2")}
            </a>
          </nav>
        </div>
      </main>
    </>
  );
}
