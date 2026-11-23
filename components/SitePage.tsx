import Footer from './Footer'
import Header from './Header'
import PageEffects from './PageEffects'
import { REVIEW_BUILD, T, type Lang } from '@/lib/site'
import type { PageData } from '@/lib/content'

export default function SitePage({ lang, page }: { lang: Lang; page: PageData }) {
  const t = T[lang]
  return (
    <>
      <a className="skip" href="#main">{t.skip}</a>
      {REVIEW_BUILD && (
        <aside className="proto-bar" aria-label={t.protoLabel}>
          <div className="wrap">{t.proto}</div>
        </aside>
      )}
      <Header lang={lang} slug={page.slug} langHref={page.langHref} />
      {/* v4.10.2 generated page body (see scripts/extract_content.py) */}
      <main id="main" className={page.mainClass} dangerouslySetInnerHTML={{ __html: page.html }} />
      <Footer lang={lang} slug={page.slug} />
      <PageEffects lang={lang} scripts={page.scripts} />
    </>
  )
}
