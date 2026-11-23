import type { Metadata } from 'next'
import '../../styles/fonts.css'
import '../../styles/v4.css'
import { notFound } from 'next/navigation'
import { LANGS, SITE_URL, isLang } from '@/lib/site'

export const dynamicParams = false
export const generateStaticParams = () => LANGS.map((lang) => ({ lang }))

export const metadata: Metadata = SITE_URL ? { metadataBase: new URL(SITE_URL) } : {}

export default async function LangLayout({ children, params }: { children: React.ReactNode; params: Promise<{ lang: string }> }) {
  const { lang } = await params
  if (!isLang(lang)) notFound()
  return (
    // the "js" class is added before first paint exactly as the original pages did, so no-JavaScript visitors get the plain layout
    <html lang={lang} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: 'document.documentElement.classList.add("js")' }} />
      </head>
      <body className={`b-${lang}`}>{children}</body>
    </html>
  )
}
