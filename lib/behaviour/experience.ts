// @ts-nocheck
/* Approved v4.10.2 behaviour, ported from assets/js/experience.js with its code unchanged.
   It runs once per page load from components/SiteBehaviour.tsx. Addresses go through the SH layer (lib/behaviour/sh.ts).
   Type-checking is off for this file because the original is plain JavaScript; behaviour is covered by the QA checks. */
/* eslint-disable */
export function initExperience(): void {
/* SetuHashi local review build v4.6 · Our experience · INTERNAL.
   Filters on the collection pages (buttons with aria-pressed); the chosen filter is kept in the address (#f=key)
   with replaceState so Back, refresh and a language switch restore it. Without JavaScript every card is shown.
   On a story, "Back to the collection" returns to the collection in its previous state when that was the previous page.
   Uses the SH location layer from site.js. */
(function () {
  var SH = window.SH;
  var box = document.querySelector(".filters");
  var cards = Array.prototype.slice.call(document.querySelectorAll(".st-card"));
  if (box && cards.length) {
    box.hidden = false;
    var chips = Array.prototype.slice.call(box.querySelectorAll(".fchip")), count = box.querySelector(".fcount");
    function apply(k) {
      var n = 0;
      cards.forEach(function (c) { var show = !k || (" " + c.getAttribute("data-tags") + " ").indexOf(" " + k + " ") >= 0; c.hidden = !show; if (show) n++; });
      chips.forEach(function (b) { b.setAttribute("aria-pressed", String(b.getAttribute("data-f") === k)); });
      // a group heading (featured / more) is hidden when none of its cards match the filter
      document.querySelectorAll(".st-group").forEach(function (g) { g.hidden = !g.querySelector(".st-card:not([hidden])"); });
      count.textContent = count.getAttribute("data-t").replace("{n}", n);
      SH.replace(SH.here().search, k ? "#f=" + k : "");
    }
    chips.forEach(function (b) { b.addEventListener("click", function () { apply(b.getAttribute("data-f")); }); });
    function restore() { var m = /#f=([a-z]+)/.exec(SH.here().hash); var k = m ? m[1] : ""; if (!chips.some(function (b) { return b.getAttribute("data-f") === k; })) k = ""; apply(k); }
    restore(); SH.on(window, "pageshow", restore);
  }
  var back = document.querySelector("a[data-back-coll]");
  if (back) back.addEventListener("click", function (ev) {
    if (SH.prevPage() === SH.getHref(back).split("#")[0].split("?")[0] && history.length > 1) { ev.preventDefault(); history.back(); }
  });
  // v4.4/v4.6: a story reached from an offering card (?from=o-…) shows "← Back to <offering>". The card may be on an
  // objective page or, with &via=all, on View all services; the link returns to that route with the offering open.
  // If the previous history entry is that page, Back is used, which also restores the open offerings and the exact
  // reading position; otherwise the link opens the page with that offering expanded and brought into view.
  var H = SH.here(), fm = /[?&]from=(o-\d-\d-\d)\b/.exec(H.search), bk = fm && document.querySelector('.back-off[data-from="' + fm[1] + '"]');
  if (bk) {
    bk.hidden = false;
    var ba = bk.querySelector("a");
    if (/[?&]via=all\b/.test(H.search)) SH.setHref(ba, "what-we-offer-all-services.html#" + fm[1]);
    ba.addEventListener("click", function (ev) {
      if (SH.prevPage() === SH.getHref(ba).split("#")[0] && history.length > 1) { ev.preventDefault(); history.back(); }
    });
  }
})();

}
