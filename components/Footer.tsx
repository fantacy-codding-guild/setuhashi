import Link from 'next/link'
import { REVIEW_BUILD, SECTIONS, T, routeFor, type Lang } from '@/lib/site'

export default function Footer({ lang, slug }: { lang: Lang; slug: string }) {
  const t = T[lang]
  return (
    <footer className={`ftr ftr-${lang}`}>
      <div className="wrap ftr-grid">
        <div className="ftr-id">
          <Link href={routeFor(lang, 'index')} className="ftr-home">
            <img src="/assets/logo/SetuHashi_Symbol_Bridge_White.svg" alt={t.homeAlt} width={88} height={42} />
          </Link>
          {lang === 'en' ? (
            <p>Bringing Japan–India business opportunities to life.</p>
          ) : (
            <p>
              <span className="ph">日本とインドの</span>
              <span className="ph">ビジネス機会を、</span>
              <span className="ph">形にする。</span>
            </p>
          )}
        </div>
        <nav aria-label={t.footerLabel}>
          <ul className="ftr-nav">
            {SECTIONS.map((s) => (
              <li key={s}>
                <Link href={routeFor(lang, s)}>{t.nav[s]}</Link>
              </li>
            ))}
            <li>
              <Link href={routeFor(lang, 'privacy')} {...(slug === 'privacy' ? { 'aria-current': 'page' as const } : {})}>{t.privacy}</Link>
            </li>
            <li className="ftr-lang">
              <Link href="/">{t.langSelect}</Link>
            </li>
          </ul>
        </nav>
        {REVIEW_BUILD && <p className="ftr-note">{t.footNote}</p>}
      </div>
    </footer>
  )
}
