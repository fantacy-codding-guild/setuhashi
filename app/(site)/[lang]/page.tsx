import { notFound } from 'next/navigation'
import SitePage from '@/components/SitePage'
import { getPage } from '@/lib/content'
import { pageMetadata } from '@/lib/metadata'
import { isLang } from '@/lib/site'

type P = { params: Promise<{ lang: string }> }

export async function generateMetadata({ params }: P) {
  const { lang } = await params
  const page = isLang(lang) ? getPage(lang, 'index') : null
  return page && isLang(lang) ? pageMetadata(lang, page) : {}
}

export default async function Welcome({ params }: P) {
  const { lang } = await params
  const page = isLang(lang) ? getPage(lang, 'index') : null
  if (!page || !isLang(lang)) notFound()
  return <SitePage lang={lang} page={page} />
}
