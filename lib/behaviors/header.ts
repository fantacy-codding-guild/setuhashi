import { here, listeners, sh, type Disposer } from './sh'

/**
 * Header behaviour from site.js (v4.2–v4.7):
 * - measures header heights into CSS custom properties,
 * - below 80rem hides the header while scrolling down / shows it when scrolling up, when focus enters it,
 *   while the menu is open and near the top; scrolls made by the page itself do not hide it,
 * - keeps keyboard focus from being left under the visible header,
 * - SH.unclip: moves the page the smallest amount that leaves no control as a sliver at the header edge.
 * The phone section menu itself (button + Escape) is React state in components/Header.tsx.
 */
export function initHeader(): Disposer {
  const L = listeners()
  const btn = document.querySelector<HTMLElement>('.menu-btn')
  const hdr = document.querySelector<HTMLElement>('.hdr')
  const top = document.querySelector<HTMLElement>('.hdr-top')
  const root = document.documentElement
  const narrow = window.matchMedia('(max-width: 79.99rem)')

  function measure() {
    if (!hdr || !top) return
    root.style.setProperty('--toph', top.offsetHeight + 'px')
    root.style.setProperty('--navh', Math.max(0, hdr.offsetHeight - top.offsetHeight) + 'px')
    root.style.setProperty('--hdrh', hdr.offsetHeight + 'px')
  }
  const menuOpen = () => !!btn && btn.getAttribute('aria-expanded') === 'true'
  const show = () => hdr && hdr.classList.remove('hdr-hidden')

  const HIDE_AFTER = 24
  const SHOW_AFTER = 12
  let lastY = window.pageYOffset
  let anchor = lastY
  let dir = 0
  let quietUntil = here().hash || (history.state && history.state.y != null) ? Date.now() + 900 : 0
  sh.settle = (ms?: number) => {
    quietUntil = Date.now() + (ms || 500)
  }

  function onScroll() {
    if (!hdr) return
    const y = window.pageYOffset
    if (!narrow.matches || menuOpen() || hdr.contains(document.activeElement) || y <= hdr.offsetHeight || Date.now() < quietUntil) {
      show()
      lastY = anchor = y
      dir = 0
      return
    }
    if (y === lastY) return
    const d = y > lastY ? 1 : -1
    if (d !== dir) {
      dir = d
      anchor = lastY
    }
    if (dir > 0 && y - anchor >= HIDE_AFTER) hdr.classList.add('hdr-hidden')
    if (dir < 0 && anchor - y >= SHOW_AFTER) show()
    lastY = y
  }

  function coveredBy() {
    if (!hdr) return 0
    if (narrow.matches) return hdr.offsetHeight
    return Math.max(0, hdr.getBoundingClientRect().bottom)
  }

  L.on(document, 'focusin', (e) => {
    if (!hdr) return
    const t = e.target as HTMLElement
    if (hdr.contains(t)) {
      show()
      return
    }
    const r = t.getBoundingClientRect()
    const c = coveredBy()
    if (r.top < c + 8 && r.bottom > 0) window.scrollBy(0, r.top - c - 12)
  })

  sh.unclip = (target) => {
    if (!hdr) return
    const hb = hdr.getBoundingClientRect().bottom
    if (hb <= 0) return
    const R: [number, number, number][] = []
    document.querySelectorAll('main a[href], main summary, main button').forEach((el) => {
      const r = el.getBoundingClientRect()
      if (r.width && r.height && r.bottom > hb - 130 && r.top < hb + 130) R.push([r.top, r.bottom, Math.min(24, r.height)])
    })
    const clipped = (d: number) => {
      for (const [rt, rb, min] of R) {
        const t = rt - d
        const b = rb - d
        if (t < hb && b > hb && b - hb < min) return true
      }
      return false
    }
    if (!clipped(0)) return
    const y = window.pageYOffset
    const max = document.documentElement.scrollHeight - window.innerHeight
    const tt = target ? target.getBoundingClientRect().top : null
    const kmax = Math.max(120, Math.round(window.innerHeight / 4))
    for (let k = 1; k <= kmax; k++) {
      for (let s = -1; s <= 1; s += 2) {
        const d = s * k
        if (y + d < 0 || y + d > max) continue
        if (tt != null && (tt - d < hb || tt - d > window.innerHeight * 0.6)) continue
        if (!clipped(d)) {
          sh.settle(500)
          window.scrollBy(0, d)
          return
        }
      }
    }
  }

  if (btn) L.on(btn, 'click', show)
  L.on(window, 'scroll', onScroll, { passive: true })
  L.on(window, 'resize', () => {
    measure()
    onScroll()
  })
  measure()

  L.add(() => {
    sh.settle = () => {}
    sh.unclip = () => {}
  })
  return () => L.dispose()
}

/** Phone local menus start closed (they are open without JavaScript). */
export function initLocalMenus(): Disposer {
  if (window.matchMedia('(max-width: 79.99rem)').matches) {
    document.querySelectorAll<HTMLDetailsElement>('.local-d').forEach((d) => {
      d.open = false
    })
  }
  return () => {}
}
