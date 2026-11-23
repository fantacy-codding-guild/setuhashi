'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { initHeader } from '@/lib/behaviors/header'
import { SECTIONS, T, otherLang, routeFor, type Lang } from '@/lib/site'

export default function Header({ lang, slug, langHref }: { lang: Lang; slug: string; langHref: string }) {
  const t = T[lang]
  const other = otherLang(lang)
  const [open, setOpen] = useState(false)

  useEffect(() => initHeader(), [])

  // Escape closes the phone section menu and returns focus to its button
  useEffect(() => {
    if (!open) return
    const onKey = (ev: KeyboardEvent) => {
      if (ev.key === 'Escape') {
        setOpen(false)
        document.querySelector<HTMLElement>('.menu-btn')?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  // exact page -> aria-current="page"; a page inside a section (e.g. what-we-offer-objective-1) marks its section "true"
  const cur = (s: string) =>
    s === slug ? ({ 'aria-current': 'page' } as const) : slug.startsWith(s + '-') ? ({ 'aria-current': 'true' } as const) : {}

  const switcher =
    lang === 'en' ? (
      <>
        <span className="cur" lang="en" aria-current="true">English</span>
        <span className="sep" aria-hidden="true">/</span>
        <LangLink to={other} href={langHref} label="日本語" />
      </>
    ) : (
      <>
        <LangLink to={other} href={langHref} label="English" />
        <span className="sep" aria-hidden="true">/</span>
        <span className="cur" lang="ja" aria-current="true">日本語</span>
      </>
    )

  return (
    <header className={`hdr hdr-dark hdr-${lang}`}>
      <div className="hdr-top">
        <div className="wrap">
          <Link className="logo" href={routeFor(lang, 'index')} {...cur('index')}>
            <img src={`/assets/logo/${t.logoFile}`} alt={t.logoAlt} width={200} height={t.logoH} />
          </Link>
          <div className="lang" role="group" aria-label={t.langLabel}>{switcher}</div>
          <button
            className="menu-btn"
            type="button"
            aria-expanded={open}
            aria-controls="secbar"
            onClick={() => setOpen((o) => !o)}
          >
            <span className="bars" aria-hidden="true" />
            <span className="mb-t">{t.menu}</span>
          </button>
        </div>
      </div>
      <nav className={`secbar${open ? ' open' : ''}`} id="secbar" aria-label={t.sectionsLabel}>
        <div className="wrap">
          <ul>
            {SECTIONS.map((s) => (
              <li key={s}>
                <Link href={routeFor(lang, s)} {...cur(s)}>{t.nav[s]}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}

/** The language switch keeps the current query (?topic, ?from) and fragment, so the same view and state open. */
function LangLink({ to, href, label }: { to: Lang; href: string; label: string }) {
  const base = href.split('#')[0].split('?')[0]
  return (
    <a
      href={href}
      lang={to}
      hrefLang={to}
      data-lang=""
      onClick={(e) => {
        e.currentTarget.setAttribute('href', base + location.search + location.hash)
      }}
    >
      {label}
    </a>
  )
}
