'use client'

import { useEffect } from 'react'
import { initLocalMenus } from '@/lib/behaviors/header'
import { initOffer } from '@/lib/behaviors/offer'
import { initExperience } from '@/lib/behaviors/experience'
import { initContact } from '@/lib/behaviors/contact'
import { initIntro } from '@/lib/behaviors/intro'
import type { Lang } from '@/lib/site'
import type { PageData } from '@/lib/content'

/**
 * Attaches the per-page progressive-enhancement behaviour that the original site loaded as separate <script> files
 * (offer.js, experience.js, contact.js, intro.js). Renders nothing. Re-runs when the page changes and cleans up after itself.
 */
export default function PageEffects({ lang, scripts }: { lang: Lang; scripts: PageData['scripts'] }) {
  const key = scripts.join(',')
  useEffect(() => {
    const undo = [initLocalMenus()]
    if (key.includes('offer')) undo.push(initOffer())
    if (key.includes('experience')) undo.push(initExperience(lang))
    if (key.includes('contact')) undo.push(initContact(lang))
    if (key.includes('intro')) undo.push(initIntro())
    return () => undo.forEach((u) => u())
  }, [lang, key])
  return null
}
