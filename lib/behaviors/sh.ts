/**
 * Port of the original "SH" location layer (assets/js/site.js) to TypeScript.
 * Page addresses are now clean Next.js routes (/en/what-we-offer/) instead of file names, so
 * page identity is compared by slug (see slugOf) rather than by "name.html".
 * Every listener goes through `listeners()` so React effects can remove them on cleanup
 * (needed for client-side navigation and React Strict Mode's double-invoked effects).
 */
export type Disposer = () => void

export const here = () => ({ search: location.search, hash: location.hash })

/** "/en/what-we-offer/?x#y" | "what-we-offer.html#y" -> "what-we-offer" */
export const slugOf = (url: string | null | undefined): string => {
  if (!url) return ''
  const path = url.split('#')[0].split('?')[0].replace(/\/+$/, '')
  return (path.split('/').pop() || '').replace(/\.html$/, '')
}

/** replaceState, keeping any other state this history entry holds (including Next.js internals). */
export function replace(search: string, hash: string, state?: Record<string, unknown>) {
  const st = history.state && typeof history.state === 'object' ? history.state : {}
  const next: Record<string, unknown> = { ...st, ...(state || {}) }
  history.replaceState(next, '', location.pathname + search + hash)
}

export function replacePage(href: string) {
  location.replace(href)
}

export const getHref = (a: Element) => a.getAttribute('href') || ''
export const setHref = (a: Element, h: string) => a.setAttribute('href', h)

/** slug of the previous history entry, when the browser can tell */
export function prevPage(): string | null {
  const nav = (window as unknown as { navigation?: { currentEntry?: { index: number }; entries(): { url?: string }[] } }).navigation
  const i = nav && nav.currentEntry ? nav.currentEntry.index : -1
  const prev = i > 0 && nav ? nav.entries()[i - 1] : null
  const u = prev && prev.url ? prev.url : document.referrer || ''
  return u ? slugOf(u) : null
}

/** Cross-module hooks set by the header behaviour (quiet period after page-made scrolls, un-clipping controls). */
export const sh: { settle: (ms?: number) => void; unclip: (target?: Element | null) => void } = {
  settle: () => {},
  unclip: () => {},
}

export function listeners() {
  const undo: Disposer[] = []
  return {
    on(target: EventTarget, type: string, fn: EventListenerOrEventListenerObject, opts?: boolean | AddEventListenerOptions) {
      target.addEventListener(type, fn, opts)
      undo.push(() => target.removeEventListener(type, fn, opts))
    },
    add(fn: Disposer) {
      undo.push(fn)
    },
    dispose() {
      while (undo.length) undo.pop()!()
    },
  }
}

export const qsa = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) =>
  Array.from(root.querySelectorAll<T>(sel))
