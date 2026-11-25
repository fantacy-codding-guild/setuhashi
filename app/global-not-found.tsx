import type { Metadata } from "next";
import "./fonts.css";
import "./globals.css";

// 404 for unmatched addresses. It reuses the approved start-page wording and language links; no new copy.
export const metadata: Metadata = { title: "SetuHashi", robots: { index: false, follow: false } };

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body className="b-en entry entry-45">
        <main id="main" className="entry-main">
          <div className="wrap e-grid">
            <nav className="e-langs" aria-label="Choose a language / 言語を選択">
              <a className="e-lang" href="/en/" hrefLang="en">English</a>
              <a className="e-lang" href="/ja/" lang="ja" hrefLang="ja">日本語</a>
            </nav>
          </div>
        </main>
      </body>
    </html>
  );
}
