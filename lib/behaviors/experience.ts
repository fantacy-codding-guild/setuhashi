import { getHref, here, listeners, prevPage, qsa, replace, setHref, slugOf, type Disposer } from './sh'
import type { Lang } from '../site'

/**
 * Our experience (experience.js v4.6): collection filters (buttons with aria-pressed, kept in the address as #f=key),
 * "Back to the collection" and "Back to <offering>" links that use history.back() when the previous page is the target.
 */
export function initExperience(lang: Lang): Disposer {
  const L = listeners()
  const box = document.querySelector<HTMLElement>('.filters')
  const cards = qsa('.st-card')
  if (box && cards.length) {
    box.hidden = false
    const chips = qsa('.fchip', box)
    const count = box.querySelector<HTMLElement>('.fcount')!
    const apply = (k: string) => {
      let n = 0
      cards.forEach((c) => {
        const show = !k || (' ' + c.getAttribute('data-tags') + ' ').indexOf(' ' + k + ' ') >= 0
        c.hidden = !show
        if (show) n++
      })
      chips.forEach((b) => b.setAttribute('aria-pressed', String(b.getAttribute('data-f') === k)))
      // a group heading (featured / more) is hidden when none of its cards match the filter
      qsa('.st-group').forEach((g) => { g.hidden = !g.querySelector('.st-card:not([hidden])') })
      count.textContent = (count.getAttribute('data-t') || '').replace('{n}', String(n))
      replace(here().search, k ? '#f=' + k : '')
    }
    chips.forEach((b) => L.on(b, 'click', () => apply(b.getAttribute('data-f') || '')))
    const restore = () => {
      const m = /#f=([a-z]+)/.exec(here().hash)
      let k = m ? m[1] : ''
      if (!chips.some((b) => b.getAttribute('data-f') === k)) k = ''
      apply(k)
    }
    restore()
    L.on(window, 'pageshow', restore)
  }

  const back = document.querySelector<HTMLAnchorElement>('a[data-back-coll]')
  if (back)
    L.on(back, 'click', (ev) => {
      if (prevPage() === slugOf(getHref(back)) && history.length > 1) {
        ev.preventDefault()
        history.back()
      }
    })

  // a story reached from an offering card (?from=o-…) shows "← Back to <offering>". The card may be on an objective page or,
  // with &via=all, on View all services; the link returns to that route with the offering open. If the previous history
  // entry is that page, Back is used (restoring open offerings and reading position); otherwise the link opens the page
  // with that offering expanded and brought into view.
  const H = here()
  const fm = /[?&]from=(o-\d-\d-\d)\b/.exec(H.search)
  const bk = fm && document.querySelector<HTMLElement>('.back-off[data-from="' + fm[1] + '"]')
  if (bk && fm) {
    bk.hidden = false
    const ba = bk.querySelector<HTMLAnchorElement>('a')!
    if (/[?&]via=all\b/.test(H.search)) setHref(ba, `/${lang}/what-we-offer-all-services/#` + fm[1])
    L.on(ba, 'click', (ev) => {
      if (prevPage() === slugOf(getHref(ba)) && history.length > 1) {
        ev.preventDefault()
        history.back()
      }
    })
  }
  return () => L.dispose()
}
