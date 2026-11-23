import { listeners, type Disposer } from './sh'

/**
 * Introduction video player on the welcome page (intro.js v4.10.1).
 * Without JavaScript "Watch our introduction" is a plain link to the MP4. With JavaScript it becomes a button opening a
 * modal <dialog> with the browser's own controls. Nothing plays or downloads on arrival (preload="none").
 * Close/Escape stops playback, returns to the start and restores scroll position + focus. At the end Replay and
 * "Explore the website" are offered; there is no automatic redirect.
 *
 * KNOWN, DOCUMENTED DISCREPANCY (handoff 02_Implementation_Runbook, "Confirmed player discrepancy"): like the frozen
 * original, open() adds no history entry, so browser Back while the player is open leaves the welcome page instead of only
 * closing the modal. It is intentionally NOT changed here — it needs a Sponsor disposition or a carefully regression-tested
 * history implementation (Back/Forward, Close/Escape, repeated opening, direct navigation, both languages).
 */
export function initIntro(): Disposer {
  const link = document.getElementById('intro-open')
  const d = document.getElementById('intro-dlg') as HTMLDialogElement | null
  if (!link || !d || typeof d.showModal !== 'function') return () => {} // no <dialog> support: the plain link stays
  const L = listeners()
  const v = d.querySelector('video')!
  const src = v.querySelector('source')!
  const end = d.querySelector<HTMLElement>('.vid-end')!
  const err = d.querySelector<HTMLElement>('.vid-err')!
  const x = d.querySelector<HTMLElement>('.vid-close')!
  const rp = d.querySelector<HTMLElement>('.vid-replay')!
  const ex = d.querySelector<HTMLElement>('.vid-end a')!
  const root = document.documentElement
  let saved: { x: number; y: number; ov: string } | null = null

  // the link becomes a real button (same look), so it is announced and operated as one
  let b: HTMLElement
  if (link.tagName === 'BUTTON') b = link
  else {
    b = document.createElement('button')
    ;(b as HTMLButtonElement).type = 'button'
    b.className = link.className
    b.id = link.id
    b.innerHTML = link.innerHTML
    b.setAttribute('aria-haspopup', 'dialog')
    link.parentNode!.replaceChild(b, link)
  }

  const away = () => {
    window.removeEventListener('popstate', away)
    window.removeEventListener('pagehide', away)
    if (d.isConnected) close(true)
    else restore(true)
  }
  function open() {
    window.addEventListener('popstate', away)
    window.addEventListener('pagehide', away)
    saved = { x: window.pageXOffset, y: window.pageYOffset, ov: root.style.overflow }
    root.style.overflow = 'hidden' // the page underneath does not scroll while the player is open
    end.hidden = true
    d!.showModal()
    v.focus({ preventScroll: true })
    const p = v.play()
    if (p && p.catch) p.catch(() => {}) // started by the visitor's own click
  }
  function stop() {
    v.pause()
    try { v.currentTime = 0 } catch {}
    end.hidden = true
    v.controls = true
  }
  function restore(leaving: boolean) {
    if (!saved) return
    const s = saved
    saved = null
    root.style.overflow = s.ov
    if (!leaving) {
      window.scrollTo(s.x, s.y)
      const nb = document.getElementById('intro-open')
      if (nb) nb.focus({ preventScroll: true })
    }
  }
  function close(leaving: boolean) {
    window.removeEventListener('popstate', away)
    window.removeEventListener('pagehide', away)
    stop()
    if (d!.open) d!.close()
    restore(leaving)
  }

  L.on(b, 'click', open)
  L.on(x, 'click', () => close(false))
  L.on(d, 'cancel', (ev) => {
    ev.preventDefault()
    close(false)
  }) // Escape
  L.on(d, 'close', () => {
    stop()
    restore(false)
  }) // any other way of closing
  L.on(v, 'ended', () => {
    // leave full screen first, so the end bar can be seen and reached; then show the closing frame without the control overlay
    const doc = document as Document & { webkitFullscreenElement?: Element; webkitExitFullscreen?: () => void }
    const fe = document.fullscreenElement || doc.webkitFullscreenElement
    if (fe) {
      const ex_ = document.exitFullscreen || doc.webkitExitFullscreen
      if (ex_) {
        const q = ex_.call(document) as Promise<void> | undefined
        if (q && q.catch) q.catch(() => {})
      }
    } else {
      const vv = v as HTMLVideoElement & { webkitDisplayingFullscreen?: boolean; webkitExitFullscreen?: () => void }
      if (vv.webkitDisplayingFullscreen && vv.webkitExitFullscreen) {
        try { vv.webkitExitFullscreen() } catch {} // Safari on iPhone
      }
    }
    v.controls = false
    end.hidden = false
    rp.focus()
  })
  L.on(v, 'play', () => {
    end.hidden = true
    v.controls = true
  })
  L.on(rp, 'click', () => {
    end.hidden = true
    v.controls = true
    try { v.currentTime = 0 } catch {}
    v.focus({ preventScroll: true })
    const p = v.play()
    if (p && p.catch) p.catch(() => {})
  })
  L.on(ex, 'click', () => close(true)) // leaving the page: no scroll or focus restore needed
  const failed = () => { err.hidden = false }
  L.on(src, 'error', failed)
  L.on(v, 'error', failed)

  L.add(() => {
    window.removeEventListener('popstate', away)
    window.removeEventListener('pagehide', away)
    if (d.open) d.close()
    root.style.overflow = saved ? saved.ov : root.style.overflow
  })
  return () => L.dispose()
}
