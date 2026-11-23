import { notFound } from 'next/navigation'
import SitePage from '@/components/SitePage'
import { allSlugs, getPage } from '@/lib/content'
import { pageMetadata } from '@/lib/metadata'
import { LANGS, isLang } from '@/lib/site'

type P = { params: Promise<{ lang: string; slug: string }> }

export const dynamicParams = false
export const generateStaticParams = () =>
  LANGS.flatMap((lang) => allSlugs().filter((slug) => slug !== 'index').map((slug) => ({ lang, slug })))

export async function generateMetadata({ params }: P) {
  const { lang, slug } = await params
  const page = isLang(lang) ? getPage(lang, slug) : null
  return page && isLang(lang) ? pageMetadata(lang, page) : {}
}

export default async function Page({ params }: P) {
  const { lang, slug } = await params
  const page = isLang(lang) ? getPage(lang, slug) : null
  if (!page || !isLang(lang)) notFound()
  return <SitePage lang={lang} page={page} />
}
