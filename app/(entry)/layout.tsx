import type { Metadata } from 'next'
import '../styles/fonts.css'
import '../styles/v4.css'
import { ALLOW_INDEXING, SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  ...(SITE_URL ? { metadataBase: new URL(SITE_URL) } : {}),
  title: { absolute: 'SetuHashi' },
  description: 'SetuHashi — choose English or Japanese.',
  robots: ALLOW_INDEXING ? undefined : { index: false, follow: false },
  icons: { icon: '/assets/icons/favicon.ico' },
}

export default function EntryLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="b-en entry entry-45">{children}</body>
    </html>
  )
}
