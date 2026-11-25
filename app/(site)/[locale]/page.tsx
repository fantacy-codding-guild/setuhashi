import { getTranslations, setRequestLocale } from "next-intl/server";
import PageShell from "@/components/PageShell";
import { pageMetadata, type PageProps } from "@/lib/metadata";

const PAGE = "";

export const generateMetadata = pageMetadata(PAGE);

export default async function Page({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.home");
  return (
    <PageShell locale={locale} page={PAGE}>
      <main id="main" className="main-home">
        {"\n"}
        <div className="wrap">
          {"\n"}
          <section className="welcome welcome-45" aria-labelledby="vh">
            {"\n"}
            <div className="w-text">
              <h1 id="vh" className="w-h">
                {t("h1_1")}
              </h1>
              <p className="w-intro">{t("p_1")}</p>
              <div className="w-actions">
                <a className="btn btn-p" href={`/${locale}/who-we-are/`}>
                  {t("a_1")}
                </a>
                <a
                  className="btn btn-g vid-open"
                  id="intro-open"
                  href={
                    locale === "en"
                      ? "/assets/media/SetuHashi_Introduction_EN.mp4"
                      : "/assets/media/SetuHashi_Introduction_JA.mp4"
                  }
                  data-dlg="intro-dlg"
                >
                  <span className="vid-ic" aria-hidden="true"></span>
                  {t("a_2")}
                  <span className="vid-dur">{t("span_1")}</span>
                </a>
              </div>
            </div>
            {"\n"}
            <div className={`w-mark w-mark-${locale}`}>
              <img
                src={
                  locale === "en"
                    ? "/assets/logo/SetuHashi_Logo_English_Stacked_White.svg"
                    : "/assets/logo/SetuHashi_Logo_Japanese_Stacked_White.svg"
                }
                alt={t("alt_1")}
                width="260"
                height={locale === "en" ? "186" : "182"}
              />
              <p className="w-def">
                <span className="w-d">
                  <span>{t("span_2")}</span>
                  {t("span_3")}
                </span>{" "}
                <span className="w-d">
                  <span>{t("span_4")}</span>
                  {t("span_5")}
                </span>
              </p>
              <p className="w-shared">{t("p_2")}</p>
            </div>
            {"\n"}
          </section>
          {"\n"}
        </div>
        <dialog
          className="vid-dlg"
          id="intro-dlg"
          aria-labelledby="intro-h"
          aria-describedby="intro-note"
        >
          {"\n"}
          <div className="vid-bar">
            <h2 id="intro-h" className="vid-h">
              {t("h2_1")}
              <span className="vid-dur">{t("span_6")}</span>
            </h2>
            <button type="button" className="vid-close">
              {t("button_1")}
              <span className="vid-x" aria-hidden="true"></span>
            </button>
          </div>
          {"\n"}
          <div className="vid-stage">
            <video
              className="vid-v"
              controls
              preload="none"
              playsInline
              poster={
                locale === "en"
                  ? "/assets/media/SetuHashi_Introduction_EN_poster.jpg"
                  : "/assets/media/SetuHashi_Introduction_JA_poster.jpg"
              }
            >
              <source
                src={
                  locale === "en"
                    ? "/assets/media/SetuHashi_Introduction_EN.mp4"
                    : "/assets/media/SetuHashi_Introduction_JA.mp4"
                }
                type="video/mp4"
              />
              <track
                kind="captions"
                srcLang={locale === "en" ? "en" : "ja"}
                label={t("label_1")}
                src={
                  locale === "en"
                    ? "data:text/vtt;base64,V0VCVlRUCktpbmQ6IGNhcHRpb25zCkxhbmd1YWdlOiBlbgoKMQowMDowMDowMS4wMDAgLS0+IDAwOjAwOjAzLjU3MApIZWxsbywgYW5kIHdlbGNvbWUgdG8gU2V0dUhhc2hpIQoKMgowMDowMDowMy42MTAgLS0+IDAwOjAwOjA1LjEzOQpXZSdyZSBzbyBnbGFkIHlvdSdyZSBoZXJlLgoKMwowMDowMDowNS40NzAgLS0+IDAwOjAwOjA5LjQ5MApPdXIgbmFtZSBqb2lucyB0d28gd29yZHMKZm9yIGJyaWRnZSwgc2V0dSBpbiBTYW5za3JpdAoKNAowMDowMDowOS41MzAgLS0+IDAwOjAwOjExLjQ0MAphbmQgaGFzaGkgaW4gSmFwYW5lc2UuCgo1CjAwOjAwOjExLjY1MCAtLT4gMDA6MDA6MTUuNTMwClRoYXQgaXMgd2hhdCB3ZSBzZXQgb3V0IHRvIGJlCmZvciBKYXBhbmVzZSBhbmQgSW5kaWFuIGJ1c2luZXNzZXMuCgo2CjAwOjAwOjE1LjgxMCAtLT4gMDA6MDA6MTcuODYwClNldHVIYXNoaSBiZWdhbiB3aXRoIHRocmVlIHBlb3BsZQoKNwowMDowMDoxNy45MDAgLS0+IDAwOjAwOjIwLjQ4OAphbmQgdHdvIGNvdW50cmllcyB0aGF0Cm1hdHRlciBkZWVwbHkgdG8gdGhlbS4KCjgKMDA6MDA6MjAuNzcwIC0tPiAwMDowMDoyMy40NzAKUmFqdSwgU2h5YW0gYW5kIE1hayBjYW1lCmJ5IGRpZmZlcmVudCBwYXRocywKCjkKMDA6MDA6MjMuNTEwIC0tPiAwMDowMDoyNS4yMjAKYnV0IHRoZXkgc2hhcmVkIGEgY29udmljdGlvbjoKCjEwCjAwOjAwOjI1LjM3MCAtLT4gMDA6MDA6MjguNjEwCkphcGFuZXNlIGFuZCBJbmRpYW4gYnVzaW5lc3NlcwpoYXZlIHN0cmVuZ3RocyB0aGF0IGZpdCwKCjExCjAwOjAwOjI4LjcwMCAtLT4gMDA6MDA6MzEuNTI0CmFuZCBhIHByb21pc2luZyBjb25uZWN0aW9uCmlzIG9ubHkgdGhlIGJlZ2lubmluZy4KCjEyCjAwOjAwOjMxLjU4MCAtLT4gMDA6MDA6MzQuMzgwClNvIHdlIGhlbHAgdHVybiBjb25uZWN0aW9ucwppbnRvIGJ1c2luZXNzOgoKMTMKMDA6MDA6MzQuNDMwIC0tPiAwMDowMDozOC41ODAKZmluZGluZyB3b3J0aHdoaWxlIG9wcG9ydHVuaXRpZXMsCmRldmVsb3Bpbmcgd29ya2FibGUgcGxhbnMsIGhlbHBpbmcKCjE0CjAwOjAwOjM4LjYyMCAtLT4gMDA6MDA6NDIuMjQwCnB1dCB0aGVtIGludG8gYWN0aW9uLCBhbmQKc3RyZW5ndGhlbmluZyB3aGF0IGFscmVhZHkgZXhpc3RzLAoKMTUKMDA6MDA6NDIuMjgwIC0tPiAwMDowMDo0NC4yOTAKaW4gYm90aCBjb3VudHJpZXMgYW5kIGJleW9uZC4KCjE2CjAwOjAwOjQ0LjQzMCAtLT4gMDA6MDA6NDcuOTEwCldlIHdvcmsgd2l0aCBKYXBhbmVzZSBhbmQgSW5kaWFuCmJ1c2luZXNzZXMsIHBhcnRuZXJzIGJ1aWxkaW5nCgoxNwowMDowMDo0Ny45NTAgLS0+IDAwOjAwOjUwLjI4MAp0b2dldGhlciBmb3Igb3RoZXIgbWFya2V0cywKdGhlIHByb3ZpZGVycwoKMTgKMDA6MDA6NTAuMzIwIC0tPiAwMDowMDo1Mi4yMTAKYW5kIGluc3RpdHV0aW9ucyB0aGF0IHN1cHBvcnQgdGhlbSwKCjE5CjAwOjAwOjUyLjI1MCAtLT4gMDA6MDA6NTUuNDgwCmFuZCBnb3Zlcm5tZW50IGJvZGllcyBjb25uZWN0aW5nCnRoZWlyIHJlZ2lvbnMgd2l0aCBidXNpbmVzcy4KCjIwCjAwOjAwOjU1LjUyMCAtLT4gMDA6MDA6NTkuMjEwCk91ciBhcHByb2FjaCBpcyB0byB1bmRlcnN0YW5kCmVhY2ggb3Bwb3J0dW5pdHkgZnJvbSBib3RoIHNpZGVzLAoKMjEKMDA6MDA6NTkuMjUwIC0tPiAwMDowMTowMi4wNDAKYW5kIHRvIGtlZXAgaXRzIGRldmVsb3BtZW50CmNvbm5lY3RlZCB0byBkZWxpdmVyeSwKCjIyCjAwOjAxOjAyLjA4MCAtLT4gMDA6MDE6MDUuMDEwCmJyaW5naW5nIGluIHRoZSBtYXJrZXQga25vd2xlZGdlLApvcGVyYXRpbmcgY2FwYWJpbGl0eQoKMjMKMDA6MDE6MDUuMDUwIC0tPiAwMDowMTowNy44NTAKb3IgcXVhbGlmaWVkIHNwZWNpYWxpc3RzCnRoZSB3b3JrIHJlcXVpcmVzLgoKMjQKMDA6MDE6MDcuOTEwIC0tPiAwMDowMToxMC45OTAKRXZlcnl0aGluZyB3ZSBvZmZlciBzdGFydHMKd2l0aCB3aGF0IHlvdSB3YW50IHRvIGFjaGlldmU6CgoyNQowMDowMToxMS4wMzAgLS0+IDAwOjAxOjE1LjI4MApwZXJoYXBzIGZpbmRpbmcgdGhlIHJpZ2h0IHBhcnRuZXIsCnJlYWNoaW5nIGN1c3RvbWVycyBpbiBKYXBhbiBvciBJbmRpYSwKCjI2CjAwOjAxOjE1LjM1MCAtLT4gMDA6MDE6MTguMTIwCm9yIHR1cm5pbmcgaW50ZXJlc3QgaW50bwphIHdvcmthYmxlIGFncmVlbWVudC4KCjI3CjAwOjAxOjE4LjE2MCAtLT4gMDA6MDE6MTkuOTgwCkVhY2ggb2JqZWN0aXZlIGxlYWRzIHRvIHNlcnZpY2VzCgoyOAowMDowMToyMC4wMjAgLS0+IDAwOjAxOjIzLjQyMAphbmQgc3BlY2lmaWMgb2ZmZXJpbmdzIHlvdSBjYW4KZXhwbG9yZSwgYW5kIGRpc2N1c3Mgd2l0aCB1cy4KCjI5CjAwOjAxOjIzLjQ2MCAtLT4gMDA6MDE6MjUuMTkwCllvdSBkb24ndCBuZWVkIGEgZmluaXNoZWQgYnJpZWYuCgozMAowMDowMToyNS4yMzAgLS0+IDAwOjAxOjI3LjE3MApXZSB3b3JrIHdpdGggeW91CnRvIHVuZGVyc3RhbmQgdGhlIG5lZWQKCjMxCjAwOjAxOjI3LjIxMCAtLT4gMDA6MDE6MjkuMjkwCmFuZCBzaGFwZSBhbiBhc3NpZ25tZW50IHRoYXQgZml0cy4KCjMyCjAwOjAxOjI5LjMzMCAtLT4gMDA6MDE6MzAuNjIwCldlIGFncmVlIHRoZSBzY29wZSwKCjMzCjAwOjAxOjMwLjY2MCAtLT4gMDA6MDE6MzUuMjgwCm91ciByb2xlIGFuZCBmZWVzIGJlZm9yZSB3b3JrIGJlZ2lucywKYW5kIG1ha2UgcmVsZXZhbnQgaW50ZXJlc3RzIGNsZWFyLgoKMzQKMDA6MDE6MzUuNDEwIC0tPiAwMDowMTozOC43MTAKV2UgY2FuIHJlbWFpbiBpbnZvbHZlZCBhcwp0aGUgYWdyZWVkIGFzc2lnbm1lbnQgcmVxdWlyZXMuCgozNQowMDowMTozOC44MjAgLS0+IDAwOjAxOjQyLjQzMApXZSBhcmUgc3RhcnRpbmcgd2l0aCB0aHJlZSBhcmVhczoKZ2xvYmFsIGNhcGFiaWxpdHkgY2VudHJlcywKCjM2CjAwOjAxOjQyLjQ3MCAtLT4gMDA6MDE6NDUuNjcwCndhdGVyIHNvbHV0aW9ucywgYW5kIHJlY3ljbGluZwphbmQgd2FzdGUgbWFuYWdlbWVudC4KCjM3CjAwOjAxOjQ1LjczMCAtLT4gMDA6MDE6NDkuMTcwCkFzIHdlIGxlYXJuLCBidWlsZCByZWxhdGlvbnNoaXBzCmFuZCBkaXNjb3ZlciBvcHBvcnR1bml0aWVzLAoKMzgKMDA6MDE6NDkuMjEwIC0tPiAwMDowMTo1MC42NjAKb3VyIGZvY3VzIHdpbGwgZXZvbHZlLgoKMzkKMDA6MDE6NTAuODIwIC0tPiAwMDowMTo1NC4zNjAKT3VyIGV4cGVyaWVuY2UgcGFnZXMgYnJpbmcgdGhlc2UKaWRlYXMgdG8gbGlmZSB0aHJvdWdoIGNhc2Ugc3R1ZGllcwoKNDAKMDA6MDE6NTQuNDAwIC0tPiAwMDowMTo1Ny41MDAKZnJvbSBvdXIgcGVvcGxlJ3MgaW5kaXZpZHVhbApjYXJlZXJzIGFuZCBhZHZpc29yeSB3b3JrLAoKNDEKMDA6MDE6NTcuNTQwIC0tPiAwMDowMjowMC44MTAKYWxvbmdzaWRlIGlsbHVzdHJhdGl2ZSBzY2VuYXJpb3MKc2hvd2luZyBob3cgd2UgY291bGQgaGVscC4KCjQyCjAwOjAyOjAwLjg1MCAtLT4gMDA6MDI6MDIuNTYwCkVhY2ggaXMgY2xlYXJseSBsYWJlbGxlZC4KCjQzCjAwOjAyOjAyLjcyMCAtLT4gMDA6MDI6MDUuMzQwCkF0IHRoZSBoZWFydCBvZiBTZXR1SGFzaGkKYXJlIGl0cyBwZW9wbGUuCgo0NAowMDowMjowNS40ODAgLS0+IDAwOjAyOjA5LjQ5MApSYWp1IExhbHdhbmksIGJvcm4gYW5kIHJhaXNlZCBpbgpKYXBhbiB3aXRoIEluZGlhbiByb290cywgdW5kZXJzdGFuZHMKCjQ1CjAwOjAyOjA5LjUzMCAtLT4gMDA6MDI6MTIuNjkwCkphcGFuZXNlIGN1c3RvbWVycyBhbmQgd2hhdAppdCB0YWtlcyB0byBlYXJuIHRoZWlyIHRydXN0LgoKNDYKMDA6MDI6MTIuNzMwIC0tPiAwMDowMjoxNS41NTAKU2h5YW0gU3VuZGFyIFBhbmkgYnJpbmdzCmVudHJlcHJlbmV1cmlhbCBlbmVyZ3kKCjQ3CjAwOjAyOjE1LjU5MCAtLT4gMDA6MDI6MTcuMDAwCmFuZCByZWxhdGlvbnNoaXBzIGFjcm9zcwoKNDgKMDA6MDI6MTcuMDQwIC0tPiAwMDowMjoyMS4zMTAKSW5kaWEncyBidXNpbmVzcyBlY29zeXN0ZW1zLCBoZWxwaW5nCnRoZSByaWdodCBwYXJ0bmVycyBmaW5kIG9uZSBhbm90aGVyLgoKNDkKMDA6MDI6MjEuMzgwIC0tPiAwMDowMjoyNS42MDAKTWFrYXJhbmQgRGF0YXIsIGtub3duIGFzIE1haywgYnJpbmdzCm1vcmUgdGhhbiB0aGlydHkgeWVhcnMgb2YgZ3Jvd3RoCgo1MAowMDowMjoyNS42NDAgLS0+IDAwOjAyOjI3LjQ0MAphbmQgdHJhbnNmb3JtYXRpb24gZXhwZXJpZW5jZSwKCjUxCjAwOjAyOjI3LjUyMCAtLT4gMDA6MDI6MzAuNjAwCmFsb25nc2lkZSBhIHBlcnNwZWN0aXZlCnNoYXBlZCBieSB0cmF2ZWwgYWNyb3NzCgo1MgowMDowMjozMC42NDAgLS0+IDAwOjAyOjMyLjMxMAptb3JlIHRoYW4gZWlnaHR5IGNvdW50cmllcy4KCjUzCjAwOjAyOjMyLjQ1MCAtLT4gMDA6MDI6MzUuMTgwClRvZ2V0aGVyLCB0aGV5CmFyZSBvdXIgTWFuYWdpbmcgUGFydG5lcnMuCgo1NAowMDowMjozNS4yNzAgLS0+IDAwOjAyOjM3LjgxMApBbmQgSXNoYSBMYWd1LApvdXIgQW5hbHlzdCBmb3IgQnVzaW5lc3MKCjU1CjAwOjAyOjM3Ljg1MCAtLT4gMDA6MDI6MzkuMjQwCmFuZCBMZWdhbCwgaXMgc3R1ZHlpbmcKCjU2CjAwOjAyOjM5LjI4MCAtLT4gMDA6MDI6NDMuMjAwCmxhdyBhbmQgaGVscHMgdGhlIHRlYW0gdHVybiByZXNlYXJjaAppbnRvIGNsZWFyIHJlY29tbWVuZGF0aW9ucy4KCjU3CjAwOjAyOjQzLjM2MCAtLT4gMDA6MDI6NDcuNTMwCldoZXRoZXIgeW91IGhhdmUgYW4gb3Bwb3J0dW5pdHksCmEgY2hhbGxlbmdlIG9yIHNpbXBseSBhbiBlYXJseSBpZGVhLAoKNTgKMDA6MDI6NDcuNjkwIC0tPiAwMDowMjo1MS4xODAKd2Ugd291bGQgbG92ZSB0byBoZWFyIGZyb20geW91LAppbiBFbmdsaXNoIG9yIEphcGFuZXNlLgoKNTkKMDA6MDI6NTEuMzAwIC0tPiAwMDowMjo1NC4zNDAKV3JpdGUgdG8gdXMKYXQgY29udGFjdCBhdCBzZXR1aGFzaGkgZG90IGNvbS4KCjYwCjAwOjAyOjU0LjU0MCAtLT4gMDA6MDI6NTYuNjU4CldlIGxvb2sgZm9yd2FyZCB0byB0aGUgY29udmVyc2F0aW9uLgoK"
                    : "data:text/vtt;base64,V0VCVlRUCktpbmQ6IGNhcHRpb25zCkxhbmd1YWdlOiBqYQoKMQowMDowMDowMS4wMDAgLS0+IDAwOjAwOjAxLjk3MArjgZPjgpPjgavjgaHjga/jgIIKCjIKMDA6MDA6MDIuMDEwIC0tPiAwMDowMDowMy41NTAK44K744OI44Kl44OP44K344G444KI44GG44GT44Gd44CCCgozCjAwOjAwOjAzLjkyMCAtLT4gMDA6MDA6MDYuMTUwCuOBiui2iuOBl+OBhOOBn+OBoOOBjeOAgeOBhuOCjOOBl+OBj+aAneOBhOOBvuOBmeOAggoKNAowMDowMDowNi41NzAgLS0+IDAwOjAwOjExLjI1MArnp4HjgZ/jgaHjga7lkI3liY3jga/jgIHjgIzmqYvjgI3jgpIK5oSP5ZGz44GZ44KL5LqM44Gk44Gu6KiA6JGJ44KS5ZCI44KP44Gb44Gf44KC44Gu44Gn44GZ44CCCgo1CjAwOjAwOjExLjU5MCAtLT4gMDA6MDA6MTQuOTIwCuOCteODs+OCueOCr+ODquODg+ODiOiqnuOBruOAjOOCu+ODiOOCpeOAjeOBqOOAgQrml6XmnKzoqp7jga7jgIzjg4/jgrfjgI3jgIIKCjYKMDA6MDA6MTUuNDEwIC0tPiAwMDowMDoxOC44MzAK5pel5pys44Go44Kk44Oz44OJ44Gu5LyB5qWt44Gr44Go44Gj44Gm44CBCuOBneOCk+OBquapi+OBq+OBquOCi+OBk+OBqOOAggoKNwowMDowMDoxOS4xNTAgLS0+IDAwOjAwOjIxLjY1MArjgZ3jgozjgYzjgIHnp4HjgZ/jgaHjga7nm67mjIfjgZnlp7/jgafjgZnjgIIKCjgKMDA6MDA6MjIuMDYwIC0tPiAwMDowMDoyMy44OTAK44K744OI44Kl44OP44K344Gv44CB5LiJ5Lq644Go44CBCgo5CjAwOjAwOjIzLjkzMCAtLT4gMDA6MDA6MjcuMjYwCuS4ieS6uuOBq+OBqOOBo+OBpuWkp+WIh+OBquS6jOOBpOOBrgrlm73jgYvjgonlp4vjgb7jgorjgb7jgZfjgZ/jgIIKCjEwCjAwOjAwOjI3LjY4MCAtLT4gMDA6MDA6MzAuMDMwCuODqeODvOOCuOODpeOAgeOCt+ODo+ODvOODoOOAgeOBneOBl+OBpuODnuODg+OCr+OAggoKMTEKMDA6MDA6MzAuNDkwIC0tPiAwMDowMDozNC41ODAK5q2p44KT44Gn44GN44Gf6YGT44Gv6YGV44Gj44Gm44KC44CBCuS4ieS6uuOBq+OBr+WQjOOBmOeiuuS/oeOBjOOBguOCiuOBvuOBl+OBn+OAggoKMTIKMDA6MDA6MzUuMTMwIC0tPiAwMDowMDozOC43NTAK5pel5pys44Go44Kk44Oz44OJ44Gu5LyB5qWt44Gr44Gv44CBCuS6kuOBhOOBq+OBi+OBv+WQiOOBhuW8t+OBv+OBjOOBguOCi+OAggoKMTMKMDA6MDA6MzkuMDcwIC0tPiAwMDowMDo0Mi44MDAK44Gd44GX44Gm44CB5pyJ5pyb44Gq44Gk44Gq44GM44KK44Gv44CBCuWni+OBvuOCiuOBq+OBmeOBjuOBquOBhOOAgeOBqOOAggoKMTQKMDA6MDA6NDMuMzUwIC0tPiAwMDowMDo0Ny45OTAK44Gg44GL44KJ44GT44Gd56eB44Gf44Gh44Gv44CB44Gk44Gq44GM44KK44KSCuS6i+alreOBuOOBqOiCsuOBpuOCi+OBiuaJi+S8neOBhOOCkuOBl+OBpuOBhOOBvuOBmeOAggoKMTUKMDA6MDA6NDguNDUwIC0tPiAwMDowMDo1My41OTAK5L6h5YCk44GC44KL5qmf5Lya44KS6KaL44Gk44GR44CBCuWun+ihjOWPr+iDveOBquioiOeUu+OCkue3tOOCiuOAgeOBneOBruWun+ihjOOCkuaUr+OBiOOAgQoKMTYKMDA6MDA6NTMuNjMwIC0tPiAwMDowMDo1Ni4wNjAK44GZ44Gn44Gr44GC44KL5Y+W44KK57WE44G/44KS44GV44KJ44Gr5by344GP44GZ44KL44CCCgoxNwowMDowMDo1Ni40NzAgLS0+IDAwOjAwOjU5Ljc0MAroiJ7lj7Djga/kuKHlm73jgIHjgZ3jgZfjgabjgZ3jga7lhYjjga7luILloLTjgafjgZnjgIIKCjE4CjAwOjAxOjAwLjE1MCAtLT4gMDA6MDE6MDMuNDMwCuengeOBn+OBoeOBjOOBlOS4gOe3kuOBmeOCi+OBruOBr+OAgQrml6XmnKzjgajjgqTjg7Pjg4njga7kvIHmpa3jgIEKCjE5CjAwOjAxOjAzLjY3MCAtLT4gMDA6MDE6MDcuMzQwCuOBu+OBi+OBruW4guWgtOOBq+WQkeOBkeOBpuOBqOOCguOBqwrkuovmpa3jgpLnr4njgY/jg5Hjg7zjg4jjg4rjg7zjga7nmobjgZXjgb7jgIEKCjIwCjAwOjAxOjA3LjY2MCAtLT4gMDA6MDE6MTAuMjAwCuOBneOCjOOCkuaUr+OBiOOCi+OCteODvOODk+OCueaPkOS+m+iAheOChOapn+mWouOAgQoKMjEKMDA6MDE6MTAuMzcwIC0tPiAwMDowMToxNC4wMDAK44Gd44GX44Gm5Zyw5Z+f44GoCuODk+OCuOODjeOCueOCkuOBpOOBquOBkOihjOaUv+apn+mWouOBrueahuOBleOBvuOBp+OBmeOAggoKMjIKMDA6MDE6MTQuNDUwIC0tPiAwMDowMToyMC4xMjAK56eB44Gf44Gh44GM5aSn5YiH44Gr44GX44Gm44GE44KL44Gu44Gv44CB5LiA44Gk44Gy44Go44Gk44GuCuapn+S8muOCkuS4oeaWueOBruWBtOOBi+OCieeQhuino+OBmeOCi+OBk+OBqOOBp+OBmeOAggoKMjMKMDA6MDE6MjAuNDEwIC0tPiAwMDowMToyNS4wNDAK44Gd44GX44Gm44CB5qeL5oOz44GL44KJ5a6f6KGM44G+44Gn44KSCuS4gOe2muOBjeOBq+OBpOOBquOBjuOAgeW/heimgeOBq+W/nOOBmOOBpuOAgQoKMjQKMDA6MDE6MjUuMDgwIC0tPiAwMDowMTozMC4yODAK5biC5aC044Gu55+l6KaL44CB5LqL5qWt6YGL5Za244Gu5Yqb44CBCuizh+agvOOCkuaMgeOBpOWwgumWgOWutuOCkuWKoOOBiOOBpuOBhOOBjeOBvuOBmeOAggoKMjUKMDA6MDE6MzAuNzAwIC0tPiAwMDowMTozNS4zMzAK56eB44Gf44Gh44Gu44K144O844OT44K544Gv44GZ44G544Gm44CBCuOBiuWuouanmOOBjOWun+ePvuOBl+OBn+OBhOOBk+OBqOOBi+OCieWni+OBvuOCiuOBvuOBmeOAggoKMjYKMDA6MDE6MzUuNTgwIC0tPiAwMDowMTozOC40NDAK44Gf44Go44GI44Gw44CBCuOBteOBleOCj+OBl+OBhOODkeODvOODiOODiuODvOOCkuimi+OBpOOBkeOCi+OBk+OBqOOAggoKMjcKMDA6MDE6MzguODMwIC0tPiAwMDowMTo0MS4wODAK5pel5pys44KE44Kk44Oz44OJ44Gn6aGn5a6i44Gr5bGK44GP44GT44Go44CCCgoyOAowMDowMTo0MS4zOTAgLS0+IDAwOjAxOjQ0Ljg3MArjgYLjgovjgYTjga/jgIEK6Zai5b+D44KS5a6f6KGM5Y+v6IO944Gq5ZCI5oSP44G444Go6YCy44KB44KL44GT44Go44CCCgoyOQowMDowMTo0NS4zMzAgLS0+IDAwOjAxOjQ4Ljg5MArnm67nmoTjgZTjgajjgavjgIEK44K144O844OT44K544Go5YW35L2T55qE44Gq5qWt5YuZ44KS44GU6Kan44Gr44Gq44KK44CBCgozMAowMDowMTo0OC45MzAgLS0+IDAwOjAxOjUwLjkxMArnp4HjgZ/jgaHjgavjgZTnm7joq4fjgYTjgZ/jgaDjgZHjgb7jgZnjgIIKCjMxCjAwOjAxOjUxLjI3MCAtLT4gMDA6MDE6NTQuNjEwCuWujOaIkOOBl+OBn+S+nemgvOWGheWuueOCkuOBlOeUqOaEjwrjgYTjgZ/jgaDjgY/lv4XopoHjga/jgYLjgorjgb7jgZvjgpPjgIIKCjMyCjAwOjAxOjU1LjAxMCAtLT4gMDA6MDI6MDAuMTEwCuOBiuWuouanmOOBqOOBqOOCguOBq+ODi+ODvOOCuuOCkueQhuino+OBl+OAgQrjgZ3jgozjgavlkIjjgaPjgZ/mpa3li5njga7lvaLjgpLkuIDnt5LjgavogIPjgYjjgb7jgZnjgIIKCjMzCjAwOjAyOjAwLjQ0MCAtLT4gMDA6MDI6MDUuMjkwCuWni+OCgeOCi+WJjeOBq+OAgeevhOWbsuOAgeengeOBn+OBoeOBruW9ueWJsuOAgQrloLHphazjgavjgaTjgYTjgablkIjmhI/jgZfjgIEKCjM0CjAwOjAyOjA1LjM0MCAtLT4gMDA6MDI6MDcuNTgwCumWouS/guOBmeOCi+WIqeWus+OCguaYjuOCieOBi+OBq+OBl+OBvuOBmeOAggoKMzUKMDA6MDI6MDcuODkwIC0tPiAwMDowMjoxMS44MTAK5ZCI5oSP44GX44Gf5qWt5YuZ44Gr5b+c44GY44Gm44CBCuOBneOBruW+jOOCgumWouOCj+OCiue2muOBkeOCi+OBk+OBqOOBjOOBp+OBjeOBvuOBmeOAggoKMzYKMDA6MDI6MTIuMjEwIC0tPiAwMDowMjoxNC45NTAK56eB44Gf44Gh44Gv44CB5LiJ44Gk44Gu5YiG6YeO44GL44KJ5aeL44KB44Gm44GE44G+44GZ44CCCgozNwowMDowMjoxNS4yNzAgLS0+IDAwOjAyOjE4LjI4MArjgrDjg63jg7zjg5Djg6vjg7vjgrHjgqTjg5Hjg5Pjg6rjg4bjgqPjg7vjgrvjg7Pjgr/jg7zjgIEK5rC044K944Oq44Ol44O844K344On44Oz44CBCgozOAowMDowMjoxOC4zNzAgLS0+IDAwOjAyOjIwLjg2MArjgZ3jgZfjgabjg6rjgrXjgqTjgq/jg6vjgajlu4Pmo4TniannrqHnkIbjgafjgZnjgIIKCjM5CjAwOjAyOjIxLjIzMCAtLT4gMDA6MDI6MjQuNzEwCuWtpuOBs+OAgemWouS/guOCkuevieOBjeOAgQrmqZ/kvJrjgpLopovjgYTjgaDjgZfjgabjgYTjgY/jgarjgYvjgafjgIEKCjQwCjAwOjAyOjI0Ljc1MCAtLT4gMDA6MDI6MjYuODcwCuazqOWKm+WIhumHjuOCgumAsuWMluOBl+OBpuOBhOOBjeOBvuOBmeOAggoKNDEKMDA6MDI6MjcuMjcwIC0tPiAwMDowMjoyOC45NTAK44CM57WM6aiT44O75LqL5L6L44CN44Gu44Oa44O844K444Gn44Gv44CBCgo0MgowMDowMjoyOC45OTAgLS0+IDAwOjAyOjMyLjYzMArjg6Hjg7Pjg5Djg7zlgIvkurrjga7jgq3jg6Pjg6rjgqLjgoQK5Yqp6KiA44Gu5LuV5LqL44GL44KJ55Sf44G+44KM44Gf5LqL5L6L44Go44CBCgo0MwowMDowMjozMi42OTAgLS0+IDAwOjAyOjM1LjYxMArnp4HjgZ/jgaHjgavjgafjgY3jgovjgZPjgajjgpLnpLrjgZnmg7Plrprjgrfjg4rjg6rjgqrjgafjgIEKCjQ0CjAwOjAyOjM1LjY5MCAtLT4gMDA6MDI6MzguNzAwCuOBk+OBhuOBl+OBn+iAg+OBiOaWueOCkgrlhbfkvZPnmoTjgavjgZTntLnku4vjgZfjgabjgYTjgb7jgZnjgIIKCjQ1CjAwOjAyOjM5LjAyMCAtLT4gMDA6MDI6NDEuMzkwCuOBqeOBoeOCieOBquOBruOBi+OBr+OAgeOBr+OBo+OBjeOCiuekuuOBl+OBpuOBhOOBvuOBmeOAggoKNDYKMDA6MDI6NDEuNzYwIC0tPiAwMDowMjo0NC40MjAK44K744OI44Kl44OP44K344Gu5Lit5b+D44Gr44GE44KL44Gu44Gv44CB5Lq644Gn44GZ44CCCgo0NwowMDowMjo0NC43MTAgLS0+IDAwOjAyOjQ4LjgxMArjg6njg7zjgrjjg6Xjg7vjg6njg6vjg6/jg4vjga/jgIHjgqTjg7Pjg4njgasK44Or44O844OE44KS5oyB44Gh44CB5pel5pys44Gn55Sf44G+44KM6IKy44Gh44G+44GX44Gf44CCCgo0OAowMDowMjo0OS4xODAgLS0+IDAwOjAyOjU0LjIyMArml6XmnKzjga7jgYrlrqLmp5jjgpLnkIbop6PjgZfjgIHjgZ3jga7kv6HpoLzjgpIK5b6X44KL44Gf44KB44Gr5L2V44GM5b+F6KaB44GL44KS55+l44Gj44Gm44GE44G+44GZ44CCCgo0OQowMDowMjo1NC41NjAgLS0+IDAwOjAyOjU3LjgyMArjgrfjg6Pjg7zjg6Djg7vjgrnjg7Pjg4Djg6vjg7vjg5Hjg4vjga/jgIEK6LW35qWt5a6244Go44GX44Gm44Gu5rS75Yqb44Go44CBCgo1MAowMDowMjo1Ny44NjAgLS0+IDAwOjAzOjAxLjU5MArjgqTjg7Pjg4njga7jgZXjgb7jgZbjgb7jgarjg5Pjgrjjg43jgrnjga4K5LiW55WM44Gr5bqD44GM44KL5Lq66ISI44KS55Sf44GL44GX44CBCgo1MQowMDowMzowMS42OTAgLS0+IDAwOjAzOjA0LjY5MArjgbXjgZXjgo/jgZfjgYTjg5Hjg7zjg4jjg4rjg7zlkIzlo6vjga4K5Ye65Lya44GE44KS5b6M5oq844GX44GX44G+44GZ44CCCgo1MgowMDowMzowNS4wODAgLS0+IDAwOjAzOjA3LjU3MArjg57jgqvjg6njg7Pjg4njg7vjg4Djgr/jg7zjg6vjgIHpgJrnp7Djg57jg4Pjgq/jga/jgIEKCjUzCjAwOjAzOjA3LjYyMCAtLT4gMDA6MDM6MTEuNTMwCuaIkOmVt+OBqOWkiemdqeOBq+aQuuOCj+OBo+OBpuOBjeOBn+S4ieWNgeW5tOOCkgrotoXjgYjjgovntYzpqJPjgajjgIEKCjU0CjAwOjAzOjExLjYzMCAtLT4gMDA6MDM6MTUuNDMwCuWFq+WNgeOCkui2heOBiOOCi+WbveOAheOCkgroqKrjgozjgabln7njgaPjgZ/oppbph47jgpLmjIHjgaPjgabjgYTjgb7jgZnjgIIKCjU1CjAwOjAzOjE1Ljc3MCAtLT4gMDA6MDM6MTguODYwCuOBk+OBruS4ieS6uuOBjOOAgQrnp4HjgZ/jgaHjga7jg57jg43jg7zjgrjjg7PjgrDjg7vjg5Hjg7zjg4jjg4rjg7zjgafjgZnjgIIKCjU2CjAwOjAzOjE5LjE1MCAtLT4gMDA6MDM6MjIuOTAwCuOBneOBl+OBpuOAgeODk+OCuOODjeOCueOBqOazleWLmeOCkgrmi4XlvZPjgZnjgovjgqLjg4rjg6rjgrnjg4jjga7jgqTjgrfjg6Pjg7vjg6njgrDjga/jgIEKCjU3CjAwOjAzOjIzLjAzMCAtLT4gMDA6MDM6MjQuNDEwCuazleW+i+OCkuWtpuOBs+OBquOBjOOCieOAgQoKNTgKMDA6MDM6MjQuNDUwIC0tPiAwMDowMzoyOC43ODAK6Kq/5p+744Gu57WQ5p6c44KS5piO56K644Gq5o+Q6KiA44Gr44G+44Go44KB44KL44OB44O844Og44GuCuS7leS6i+OCkuaUr+OBiOOBpuOBhOOBvuOBmeOAggoKNTkKMDA6MDM6MjkuMTYwIC0tPiAwMDowMzozNC42NDAK5paw44GX44GE5qmf5Lya44Gu44GK6Kmx44Gn44KC44CB6Kqy6aGM44Gu44GU55u46KuH44Gn44KC44CBCuOBvuOBoOani+aDs+OBruautemajuOBruOCouOCpOODh+OCouOBp+OCguOAgQoKNjAKMDA6MDM6MzQuNjgwIC0tPiAwMDowMzozNi4wNTAK44Gc44Gy44GK6IGe44GL44Gb44GP44Gg44GV44GE44CCCgo2MQowMDowMzozNi4zODAgLS0+IDAwOjAzOjM4LjY2MAroi7Hoqp7jgafjgoLml6XmnKzoqp7jgafjgoLmib/jgorjgb7jgZnjgIIKCjYyCjAwOjAzOjM4LjkyMCAtLT4gMDA6MDM6NDIuNDUwCuOBlOmAo+e1oeOBr+OAgWNvbnRhY3RAc2V0dWhhc2hpLmNvbSDjgb7jgafjgIIKCjYzCjAwOjAzOjQyLjc2MCAtLT4gMDA6MDM6NDUuNTIwCueahuOBleOBvuOBqOOBiuipseOBl+OBp+OBjeOCi+OBruOCkgrmpb3jgZfjgb/jgavjgZfjgabjgYTjgb7jgZnjgIIKCg=="
                }
                default
              />
            </video>
          </div>
          {"\n"}
          <div
            className="vid-end"
            role="group"
            aria-labelledby="intro-end-h"
            hidden
          >
            <p className="vid-end-h" id="intro-end-h">
              {t("p_3")}
            </p>
            <div className="vid-end-a">
              <button type="button" className="btn btn-w vid-replay">
                {t("button_2")}
              </button>
              <a className="btn btn-wg" href={`/${locale}/who-we-are/`}>
                {t("a_3")}
              </a>
            </div>
          </div>
          {"\n"}
          <p className="vid-note" id="intro-note">
            {t("p_4")}
          </p>
          <p className="vid-err" role="alert" hidden>
            {t("p_5")}
          </p>
          {"\n"}
        </dialog>
        {"\n"}
      </main>
    </PageShell>
  );
}
