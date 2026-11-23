import type { Metadata } from 'next'
import { ALLOW_INDEXING, SITE_URL, otherLang, routeFor, type Lang } from './site'
import type { PageData } from './content'

export function pageMetadata(lang: Lang, page: PageData): Metadata {
  const m: Metadata = {
    title: { absolute: page.title },
    description: page.description,
    robots: ALLOW_INDEXING ? undefined : { index: false, follow: false },
    icons: { icon: '/assets/icons/favicon.ico' },
  }
  if (SITE_URL) {
    // production: canonical URL + bilingual alternates (resolved against metadataBase set in the layout)
    m.alternates = {
      canonical: routeFor(lang, page.slug),
      languages: { [lang]: routeFor(lang, page.slug), [otherLang(lang)]: routeFor(otherLang(lang), page.slug) },
    }
  }
  return m
}
