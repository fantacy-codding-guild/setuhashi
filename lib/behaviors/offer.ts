import { getHref, here, listeners, prevPage, qsa, replace, replacePage, sh, type Disposer } from './sh'

/**
 * What we offer (offer.js v4.6/4.7): native <details name> offering cards plus
 * - no jump when a sibling above closes, the open offering kept in the address (#o-…),
 * - history state {fc, y} so Back from a story or Contact restores open offerings and reading position,
 * - "Back to all services" when reached from View all services,
 * - compatibility pages for former service/offering addresses replace themselves with the objective page.
 */
export function initOffer(): Disposer {
  const L = listeners()
  const H0 = here()

  if (/[?&]from=all\b/.test(H0.search)) {
    qsa('.back-all').forEach((p) => (p.hidden = false))
    qsa('a[data-back-all]').forEach((a) =>
      L.on(a, 'click', (ev) => {
        if (prevPage() === 'what-we-offer-all-services' && history.length > 1) {
          ev.preventDefault()
          history.back()
        }
      }),
    )
  }

  const fcs = qsa<HTMLDetailsElement>('details.fc')
  if (fcs.length) {
    const prevRestoration = history.scrollRestoration
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
    L.add(() => {
      history.scrollRestoration = prevRestoration
    })
    const hasName = 'name' in HTMLDetailsElement.prototype
    let recent: HTMLDetailsElement | null = null
    let pending: { d: HTMLDetailsElement; top: number } | null = null
    let restoring = false

    const save = () => {
      const h0 = here()
      const open = fcs.filter((d) => d.open).map((d) => d.getAttribute('data-o'))
      let h = recent && recent.open ? recent.getAttribute('data-o') : open.length ? open[open.length - 1] : ''
      if (!h && /^#s-[\d-]+$/.test(h0.hash)) h = h0.hash.slice(1) // keep a service-card address (#s-…)
      replace(h0.search, h ? '#' + h : '', { fc: open, y: Math.round(window.pageYOffset) })
    }

    fcs.forEach((d) => {
      const s = d.querySelector('summary')!
      L.on(s, 'click', () => {
        pending = { d, top: s.getBoundingClientRect().top }
      })
      L.on(d, 'toggle', () => {
        if (d.open) {
          if (!restoring) recent = d
          if (!hasName) fcs.forEach((x) => { if (x !== d && x.open && x.getAttribute('name') === d.getAttribute('name')) x.open = false })
        }
        if (pending && pending.d === d && !restoring) {
          // keep the selected offering where the visitor clicked it
          const dy = s.getBoundingClientRect().top - pending.top
          if (Math.abs(dy) > 1) window.scrollBy(0, dy)
          pending = null
        }
        if (!restoring) save()
      })
    })

    L.on(
      document,
      'click',
      (ev) => {
        const t = ev.target as Element
        const a = t.closest && t.closest('a[href]')
        if (a) save()
      },
      true,
    )
    L.on(window, 'pagehide', save)

    // keep the reading position as the visitor scrolls (a state change made during pagehide is not kept across a reload in Chromium)
    let st_: ReturnType<typeof setTimeout> | null = null
    L.on(
      window,
      'scroll',
      () => {
        if (st_) clearTimeout(st_)
        st_ = setTimeout(() => { if (!restoring) save() }, 150)
      },
      { passive: true },
    )
    L.add(() => { if (st_) clearTimeout(st_) })

    const restore = () => {
      const st = history.state
      const h0 = here()
      restoring = true
      if (sh.settle && ((st && st.fc) || h0.hash)) sh.settle(700) // only when something is restored or arrived at
      // the toggle events caused by restoring fire later; keep ignoring them until they have run, then re-apply the saved
      // position and record the state once (the address keeps the offering the visitor last opened)
      const finish = (y: number | null) => {
        const id = setTimeout(() => {
          if (y != null) window.scrollTo(0, y)
          restoring = false
          save()
        }, 80)
        L.add(() => clearTimeout(id))
      }
      if (st && st.fc) {
        recent = h0.hash ? document.querySelector<HTMLDetailsElement>('details.fc[data-o="' + h0.hash.slice(1) + '"]') : null
        fcs.forEach((d) => { d.open = (st.fc as string[]).indexOf(d.getAttribute('data-o') || '') >= 0 })
        requestAnimationFrame(() => {
          window.scrollTo(0, st.y || 0)
          finish(st.y || 0)
        })
        return
      }
      let t: HTMLElement | null = h0.hash ? document.getElementById(h0.hash.slice(1)) : null
      const fd = t && (t.closest('details.fc') as HTMLDetailsElement | null)
      if (fd) {
        fd.open = true
        recent = fd
        t = fd
      }
      requestAnimationFrame(() => {
        if (t) {
          t.scrollIntoView({ block: 'start' })
          sh.unclip(t)
        }
        finish(null)
      })
      // a late layout change (web fonts) can move controls after the arrival; check once more when fonts are ready,
      // unless the visitor has already scrolled, typed or tapped
      if (t && document.fonts && document.fonts.ready) {
        let acted = false
        const mark = () => { acted = true }
        ;['wheel', 'keydown', 'touchstart', 'pointerdown'].forEach((e) => L.on(window, e, mark, { passive: true, once: true }))
        const target = t
        document.fonts.ready.then(() => requestAnimationFrame(() => { if (!acted) sh.unclip(target) }))
      }
    }
    restore()
  }

  // compatibility pages for former service/offering addresses: replace themselves with the objective page
  const mv = document.querySelector('a[data-moved]')
  if (mv) replacePage(getHref(mv).replace('#', (H0.search || '') + '#').replace(/\?[^#]*\?/, '?'))

  return () => L.dispose()
}
