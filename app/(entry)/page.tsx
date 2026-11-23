import Link from 'next/link'
import { REVIEW_BUILD, T } from '@/lib/site'

/** Bilingual language-selection opening (root index.html in the original). */
export default function Entry() {
  return (
    <>
      {REVIEW_BUILD && (
        <aside className="proto-bar" aria-label={T.en.protoLabel}>
          <div className="wrap">{T.en.proto}</div>
        </aside>
      )}
      <main id="main" className="entry-main">
        <div className="wrap e-grid">
          <h1 className="e-statements">
            <span className="e-pair"><span className="e-s e-s1">Building Bridges</span><span className="e-s-ja" lang="ja">架け橋を築く</span></span>
            <span className="e-pair"><span className="e-s e-s2">Connecting Opportunities</span><span className="e-s-ja" lang="ja">機会をつなぐ</span></span>
            <span className="e-pair"><span className="e-s e-s3">Creating Value</span><span className="e-s-ja" lang="ja">価値を創る</span></span>
          </h1>
          <div className="w-mark w-mark-en">
            <img src="/assets/logo/SetuHashi_Logo_English_Stacked_White.svg" alt="SetuHashi" width={260} height={186} />
            <p className="w-def">
              <span className="w-d"><span>Setu</span> — bridge in Sanskrit.</span>{' '}
              <span className="w-d"><span>Hashi</span> — bridge in Japanese.</span>
            </p>
            <p className="w-shared">One Shared Connection</p>
          </div>
          <nav className="e-langs" aria-label="Choose a language / 言語を選択">
            <Link className="e-lang" href="/en/" hrefLang="en">English</Link>
            <Link className="e-lang" href="/ja/" lang="ja" hrefLang="ja">日本語</Link>
          </nav>
        </div>
      </main>
    </>
  )
}
