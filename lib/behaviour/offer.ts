// @ts-nocheck
/* Approved v4.10.2 behaviour, ported from assets/js/offer.js with its code unchanged.
   It runs once per page load from components/SiteBehaviour.tsx. Addresses go through the SH layer (lib/behaviour/sh.ts).
   Type-checking is off for this file because the original is plain JavaScript; behaviour is covered by the QA checks. */
/* eslint-disable */
export function initOffer(): void {
/* SetuHashi local review build v4.6 · What we offer · INTERNAL.
   Objective pages and View all services show the same offering cards (native <details name>: one open offering per
   service, and the cards work without JavaScript). JavaScript adds: no jump when a sibling above closes; the open
   offering in the address (#o-…) for the language switch and sharing; and history state {fc, y} so Back from a story
   or from Contact us restores the open offerings and the reading position. Compatibility pages for former service and
   offering addresses replace themselves with the objective page. Uses the SH location layer from site.js. No storage. */
(function () {
  var SH = window.SH;
  // objective pages reached from the former View all services links (?from=all) offer "Back to all services"
  var H0 = SH.here();
  if (/[?&]from=all\b/.test(H0.search)) {
    document.querySelectorAll(".back-all").forEach(function (p) { p.hidden = false; });
    document.querySelectorAll("a[data-back-all]").forEach(function (a) {
      a.addEventListener("click", function (ev) {
        if (SH.prevPage() === "what-we-offer-all-services.html" && history.length > 1) { ev.preventDefault(); history.back(); }
      });
    });
  }
  var fcs = Array.prototype.slice.call(document.querySelectorAll("details.fc"));
  if (fcs.length) {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    var hasName = "name" in HTMLDetailsElement.prototype, recent = null, pending = null, restoring = false;
    function save() {
      var here = SH.here();
      var open = fcs.filter(function (d) { return d.open; }).map(function (d) { return d.getAttribute("data-o"); });
      var h = recent && recent.open ? recent.getAttribute("data-o") : (open.length ? open[open.length - 1] : "");
      if (!h && /^#s-[\d-]+$/.test(here.hash)) h = here.hash.slice(1);   // keep a service-card address (#s-…)
      SH.replace(here.search, h ? "#" + h : "", { fc: open, y: Math.round(window.pageYOffset) });
    }
    fcs.forEach(function (d) {
      var s = d.querySelector("summary");
      s.addEventListener("click", function () { pending = { d: d, top: s.getBoundingClientRect().top }; });
      d.addEventListener("toggle", function () {
        if (d.open) {
          if (!restoring) recent = d;
          if (!hasName) fcs.forEach(function (x) { if (x !== d && x.open && x.getAttribute("name") === d.getAttribute("name")) x.open = false; });
        }
        if (pending && pending.d === d && !restoring) {   // keep the selected offering where the visitor clicked it
          var dy = s.getBoundingClientRect().top - pending.top; if (Math.abs(dy) > 1) window.scrollBy(0, dy); pending = null;
        }
        if (!restoring) save();
      });
    });
    SH.on(document, "click", function (ev) { var a = ev.target.closest && ev.target.closest("a[href]"); if (a) save(); }, true);
    SH.on(window, "pagehide", save);
    // v4.6: also keep the reading position as the visitor scrolls (a state change made during pagehide is not kept
    // across a reload in Chromium, so refresh could return to the position of the last card toggle)
    var st_ = null; SH.on(window, "scroll", function () { clearTimeout(st_); st_ = setTimeout(function () { if (!restoring) save(); }, 150); }, { passive: true });
    function restore() {
      var st = history.state, here = SH.here(); restoring = true;
      if (SH.settle && ((st && st.fc) || here.hash)) SH.settle(700);   // only when something is restored or arrived at
      // the toggle events caused by restoring fire later; keep ignoring them until they have run, then re-apply
      // the saved position and record the state once (the address keeps the offering the visitor last opened)
      function finish(y) { setTimeout(function () { if (y != null) window.scrollTo(0, y); restoring = false; save(); }, 80); }
      if (st && st.fc) {
        recent = here.hash ? document.querySelector('details.fc[data-o="' + here.hash.slice(1) + '"]') : null;
        fcs.forEach(function (d) { d.open = st.fc.indexOf(d.getAttribute("data-o")) >= 0; });
        requestAnimationFrame(function () { window.scrollTo(0, st.y || 0); finish(st.y || 0); });
        return;
      }
      var t = here.hash ? document.getElementById(here.hash.slice(1)) : null;
      var fd = t && t.closest("details.fc");
      if (fd) { fd.open = true; recent = fd; t = fd; }
      requestAnimationFrame(function () { if (t) { t.scrollIntoView({ block: "start" }); if (SH.unclip) SH.unclip(t); } finish(null); });
      // v4.7: a late layout change (web fonts) can move controls after the arrival; check once more when fonts are
      // ready, unless the visitor has already scrolled, typed or tapped
      if (t && SH.unclip && document.fonts && document.fonts.ready) {
        var acted = false, mark = function () { acted = true; };
        ["wheel", "keydown", "touchstart", "pointerdown"].forEach(function (e) { SH.on(window, e, mark, { passive: true, once: true }); });
        document.fonts.ready.then(function () { requestAnimationFrame(function () { if (!acted) SH.unclip(t); }); });
      }
    }
    restore();
  }
  // compatibility pages for former service/offering addresses: replace themselves with the objective page
  var mv = document.querySelector("a[data-moved]");
  if (mv) SH.replacePage(SH.getHref(mv).replace("#", (H0.search || "") + "#").replace(/\?[^#]*\?/, "?"));
})();

}
