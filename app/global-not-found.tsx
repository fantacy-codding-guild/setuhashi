import './styles/fonts.css'
import './styles/v4.css'

export const metadata = { title: 'Page not found · ページが見つかりません', robots: { index: false, follow: false } }

/** Static-hosting 404 (becomes out/404.html). Bilingual because the language of a missing address is unknown. */
export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body className="b-en entry entry-45">
        <main id="main" className="entry-main">
          <div className="wrap e-grid">
            <h1 className="e-statements">
              <span className="e-pair"><span className="e-s e-s1">Page not found</span><span className="e-s-ja" lang="ja">ページが見つかりません</span></span>
            </h1>
            <nav className="e-langs" aria-label="Choose a language / 言語を選択">
              <a className="e-lang" href="/en/" hrefLang="en">English</a>
              <a className="e-lang" href="/ja/" lang="ja" hrefLang="ja">日本語</a>
            </nav>
          </div>
        </main>
      </body>
    </html>
  )
}
