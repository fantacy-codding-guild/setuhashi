/* Location layer ("SH") used by the approved page scripts.
   The v4.10.2 scripts were written for file addresses (how-we-work.html, ../ja/how-we-work.html). This site uses clean
   addresses (/en/how-we-work/). This layer translates between the two, so the scripts run unchanged:
   scripts read and write links in the file form; the page always shows clean addresses. */

type Here = { page: string; search: string; hash: string };
type SHLayer = {
  spa: boolean;
  here(): Here;
  replace(search: string, hash: string, state?: Record<string, unknown>): void;
  replacePage(href: string): void;
  getHref(a: Element): string;
  setHref(a: Element, h: string): void;
  prevPage(): string | null;
  on(t: EventTarget, type: string, fn: EventListener, o?: AddEventListenerOptions | boolean): void;
  [k: string]: unknown;
};

const PAGE_PATH = /^\/(en|ja)\/(?:([A-Za-z0-9_-]+)\/?)?$/;

function currentLocale(): string {
  const m = location.pathname.match(/^\/(en|ja)\//);
  return m ? m[1] : "en";
}

/** "/en/how-we-work/" → "how-we-work.html"; "/en/" → "index.html" */
export function fileOf(pathname: string): string {
  const m = pathname.match(PAGE_PATH);
  if (m) return (m[2] || "index") + ".html";
  return pathname === "/" ? "index.html" : pathname.split("/").filter(Boolean).pop() || "index.html";
}

/** Clean address → file form, relative to the current page's language. */
export function toFile(href: string | null): string {
  if (!href || !href.startsWith("/")) return href || "";
  const m = href.match(/^([^?#]*)(.*)$/)!;
  const [path, rest] = [m[1], m[2]];
  if (path === "/") return "../index.html" + rest;
  const p = path.match(PAGE_PATH);
  if (!p) return href;
  const file = (p[2] || "index") + ".html";
  return (p[1] === currentLocale() ? file : `../${p[1]}/${file}`) + rest;
}

/** File form → clean address. Anything else (#anchor, mailto:, absolute) is returned unchanged. */
export function toClean(href: string): string {
  if (href === "../index.html" || href.startsWith("../index.html?") || href.startsWith("../index.html#")) {
    return "/" + href.slice("../index.html".length);
  }
  const m = href.match(/^(?:\.\.\/(en|ja)\/)?([A-Za-z0-9_-]+)\.html(.*)$/);
  if (!m) return href;
  const loc = m[1] || currentLocale();
  return (m[2] === "index" ? `/${loc}/` : `/${loc}/${m[2]}/`) + m[3];
}

export function initSH(): void {
  const w = window as unknown as { SH?: SHLayer };
  const SH: SHLayer = {
    spa: true, // tells site.js not to install its own file-address layer
    here: () => ({ page: fileOf(location.pathname), search: location.search, hash: location.hash }),
    replace(search, hash, state) {
      const st = history.state && typeof history.state === "object" ? history.state : {};
      history.replaceState({ ...st, ...(state || {}) }, "", location.pathname + search + hash);
    },
    replacePage: (href) => location.replace(toClean(href)),
    getHref: (a) => toFile(a.getAttribute("href")),
    setHref: (a, h) => a.setAttribute("href", toClean(h)),
    prevPage() {
      const nav = (window as unknown as { navigation?: { currentEntry?: { index: number }; entries(): { url?: string }[] } }).navigation;
      const i = nav && nav.currentEntry ? nav.currentEntry.index : -1;
      const prev = nav && i > 0 ? nav.entries()[i - 1] : null;
      const u = prev && prev.url ? prev.url : document.referrer || "";
      if (!u) return null;
      try { return fileOf(new URL(u).pathname); } catch { return null; }
    },
    on: (t, type, fn, o) => t.addEventListener(type, fn, o),
  };
  w.SH = SH;
}
