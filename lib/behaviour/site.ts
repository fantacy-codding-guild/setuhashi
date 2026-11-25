// @ts-nocheck
/* Approved v4.10.2 behaviour, ported from assets/js/site.js with its code unchanged.
   It runs once per page load from components/SiteBehaviour.tsx. Addresses go through the SH layer (lib/behaviour/sh.ts).
   Type-checking is off for this file because the original is plain JavaScript; behaviour is covered by the QA checks. */
/* eslint-disable */
export function initSite(): void {
/* SetuHashi local review build v4.6 · shared behaviour · INTERNAL.
   Progressive enhancement only: every view is its own page and works without JavaScript.
   - SH: a small location layer used by all page scripts (v4.6). In the normal site it reads and writes the real page
     address; the single-file review edition supplies its own SH (pages addressed as #/en/page.html?query~anchor).
   - Phone section menu (button toggles the section bar; Escape closes and returns focus).
   - Phone local menus start closed (they are open without JavaScript).
   - Language switch keeps the current query (?topic, ?from) and fragment, so the same view and state open.
   - v4.2 header while scrolling: desktop keeps the sticky section bar (CSS); narrower screens hide the header while
     scrolling down and show it when scrolling up, when focus enters it, while the menu is open and near the top.
     Keyboard focus is never left under a visible header part.
   No network requests, storage or tracking. */
var SH = window.SH || (window.SH = {});
if (!SH.spa) {
  SH.here = function () { return { page: location.pathname.split("/").pop(), search: location.search, hash: location.hash }; };
  SH.replace = function (search, hash, state) {   // replaceState, keeping any other state this entry holds
    var st = history.state && typeof history.state === "object" ? history.state : {}, n = {}, k;
    for (k in st) n[k] = st[k]; if (state) for (k in state) n[k] = state[k];
    history.replaceState(n, "", location.pathname + search + hash);
  };
  SH.replacePage = function (href) { location.replace(href); };
  SH.getHref = function (a) { return a.getAttribute("href"); };
  SH.setHref = function (a, h) { a.setAttribute("href", h); };
  SH.prevPage = function () {   // file name of the previous history entry, when the browser can tell
    var nav = window.navigation, i = nav && nav.currentEntry ? nav.currentEntry.index : -1, prev = i > 0 ? nav.entries()[i - 1] : null;
    var u = prev && prev.url ? prev.url : (document.referrer || "");
    return u ? u.split("#")[0].split("?")[0].split("/").pop() : null;
  };
  SH.on = function (t, type, fn, o) { t.addEventListener(type, fn, o); };
}
(function () {
  var btn = document.querySelector(".menu-btn"), bar = document.getElementById("secbar");
  if (btn && bar) {
    btn.addEventListener("click", function () {
      var open = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!open)); bar.classList.toggle("open", !open);
    });
    SH.on(document, "keydown", function (ev) {
      if (ev.key === "Escape" && btn.getAttribute("aria-expanded") === "true") {
        btn.setAttribute("aria-expanded", "false"); bar.classList.remove("open"); btn.focus();
      }
    });
  }
  var narrow = window.matchMedia("(max-width: 79.99rem)");   // v4.7: ten sections → compact menu below 80rem
  var hdr = document.querySelector(".hdr"), top = document.querySelector(".hdr-top"), root = document.documentElement;
  function measure() {
    if (!hdr || !top) return;
    root.style.setProperty("--toph", top.offsetHeight + "px");
    root.style.setProperty("--navh", Math.max(0, hdr.offsetHeight - top.offsetHeight) + "px");
    root.style.setProperty("--hdrh", hdr.offsetHeight + "px");
  }
  function menuOpen() { return btn && btn.getAttribute("aria-expanded") === "true"; }
  function show() { if (hdr) hdr.classList.remove("hdr-hidden"); }
  // v4.3: movements are accumulated from the point where the scroll direction last changed, so slow scrolling
  // (many 1–3 px events) still hides or reveals the header; small reversals do not make it flicker.
  // v4.6: scrolls made by the page itself (arrival at #s-…/#o-…, restoring a position on Back or refresh) do not hide
  // the header: hiding it there left a sliver of the breadcrumb at the top edge (axe target-size at 820 px, v4.5).
  var HIDE_AFTER = 24, SHOW_AFTER = 12, lastY = window.pageYOffset, anchor = lastY, dir = 0, quietUntil = (SH.here().hash || (history.state && history.state.y != null)) ? Date.now() + 900 : 0;
  SH.settle = function (ms) { quietUntil = Date.now() + (ms || 500); };
  function onScroll() {
    if (!hdr) return;
    var y = window.pageYOffset;
    if (!narrow.matches || menuOpen() || hdr.contains(document.activeElement) || y <= hdr.offsetHeight || Date.now() < quietUntil) { show(); lastY = anchor = y; dir = 0; return; }
    if (y === lastY) return;
    var d = y > lastY ? 1 : -1;
    if (d !== dir) { dir = d; anchor = lastY; }        // reference resets only when the direction changes
    if (dir > 0 && y - anchor >= HIDE_AFTER) hdr.classList.add("hdr-hidden");
    if (dir < 0 && anchor - y >= SHOW_AFTER) show();
    lastY = y;
  }
  function coveredBy() {          // height of the header part that can sit over content at the top of the viewport
    if (!hdr) return 0;
    if (narrow.matches) return hdr.offsetHeight;
    var r = hdr.getBoundingClientRect(); return Math.max(0, r.bottom);
  }
  SH.on(document, "focusin", function (ev) {
    if (!hdr) return;
    if (hdr.contains(ev.target)) { show(); return; }
    var r = ev.target.getBoundingClientRect(), c = coveredBy();
    if (r.top < c + 8 && r.bottom > 0) window.scrollBy(0, r.top - c - 12);
  });
  // v4.6: after a scroll made by the page (arrival at an offering or service address), no link or summary is left as a
  // sliver under the visible header: if one crosses the header's lower edge with less than 24 px showing, the page
  // moves up just enough to show it whole (the arrival target stays in view, slightly lower).
  // v4.7: after an arrival, find the smallest scroll shift (up or down) that leaves no control as a sliver at the
  // header edge, keeping the arrival target itself clear of the header. One shift; positions are computed, not probed.
  SH.unclip = function (target) {
    if (!hdr) return;
    var hb = hdr.getBoundingClientRect().bottom;
    if (hb <= 0) return;
    var R = [];
    document.querySelectorAll("main a[href], main summary, main button").forEach(function (el) {
      var r = el.getBoundingClientRect();
      if (r.width && r.height && r.bottom > hb - 130 && r.top < hb + 130) R.push([r.top, r.bottom, Math.min(24, r.height)]);
    });
    function clipped(d) {
      for (var i = 0; i < R.length; i++) { var t = R[i][0] - d, b = R[i][1] - d; if (t < hb && b > hb && b - hb < R[i][2]) return true; }
      return false;
    }
    if (!clipped(0)) return;
    var y = window.pageYOffset, max = document.documentElement.scrollHeight - window.innerHeight,
        tt = target ? target.getBoundingClientRect().top : null;
    var kmax = Math.max(120, Math.round(window.innerHeight / 4));
    for (var k = 1; k <= kmax; k++) {
      for (var s = -1; s <= 1; s += 2) {
        var d = s * k;
        if (y + d < 0 || y + d > max) continue;
        if (tt != null && (tt - d < hb || tt - d > window.innerHeight * 0.6)) continue;
        if (!clipped(d)) { SH.settle(500); window.scrollBy(0, d); return; }
      }
    }
  };
  if (btn) btn.addEventListener("click", show);
  SH.on(window, "scroll", onScroll, { passive: true });
  SH.on(window, "resize", function () { measure(); onScroll(); });
  measure();
  if (narrow.matches) document.querySelectorAll(".local-d").forEach(function (d) { d.open = false; });
  document.querySelectorAll("a[data-lang]").forEach(function (a) {
    a.addEventListener("click", function () {
      var base = SH.getHref(a).split("#")[0].split("?")[0], h = SH.here();
      SH.setHref(a, base + h.search + h.hash);
    });
  });
})();

}
