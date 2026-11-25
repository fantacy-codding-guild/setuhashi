// @ts-nocheck
/* Approved v4.10.2 behaviour, ported from assets/js/intro.js with its code unchanged.
   It runs once per page load from components/SiteBehaviour.tsx. Addresses go through the SH layer (lib/behaviour/sh.ts).
   Type-checking is off for this file because the original is plain JavaScript; behaviour is covered by the QA checks. */
/* eslint-disable */
export function initIntro(): void {
/* SetuHashi v4.10.1 · introduction video player (welcome page) · INTERNAL.
   Progressive enhancement: without JavaScript, "Watch our introduction" is a plain link to the video file.
   With JavaScript it becomes a button that opens a modal <dialog> with the browser's own video controls (play/pause,
   captions, full screen). Nothing plays or downloads on page arrival (preload="none"); playback starts only when the
   visitor opens the player. Closing (Close button or Escape) stops playback, returns to the start, and restores the
   page's scroll position and keyboard focus to the button. At the end, Replay and Explore the website are offered;
   there is no automatic redirect. v4.10.1: Replay and Explore sit in a bar below the video, and the browser's controls are
   hidden at the end, so the closing logo and address stay fully visible; they return on Replay.
   Works in the normal site and in the single-file edition (via SH, see site.js).
   No network requests other than the local media file, no storage, no tracking. */
(function () {
  "use strict";
  var link = document.getElementById("intro-open"), d = document.getElementById("intro-dlg");
  if (!link || !d || typeof d.showModal !== "function") return;   // no <dialog> support: the plain link stays
  var v = d.querySelector("video"), src = v.querySelector("source"), end = d.querySelector(".vid-end"),
      err = d.querySelector(".vid-err"), x = d.querySelector(".vid-close"), rp = d.querySelector(".vid-replay"),
      ex = d.querySelector(".vid-end a"), root = document.documentElement, saved = null;
  // the link becomes a real button (same look), so it is announced and operated as one
  var b = document.createElement("button");
  b.type = "button"; b.className = link.className; b.id = link.id; b.innerHTML = link.innerHTML; b.setAttribute("aria-haspopup", "dialog");
  link.parentNode.replaceChild(b, link);
  // Leaving while the player is open (browser Back, or the page being hidden/cached) closes it and releases the scroll lock;
  // in the single-file edition the page content is replaced on Back, so this also runs when the dialog is already gone.
  function away() { window.removeEventListener("popstate", away); window.removeEventListener("pagehide", away); if (d.isConnected) close(true); else restore(true); }
  function open() {
    window.addEventListener("popstate", away); window.addEventListener("pagehide", away);
    saved = { x: window.pageXOffset, y: window.pageYOffset, ov: root.style.overflow };
    root.style.overflow = "hidden";   // the page underneath does not scroll while the player is open
    end.hidden = true;
    d.showModal();
    v.focus({ preventScroll: true });
    var p = v.play(); if (p && p.catch) p.catch(function () {});   // started by the visitor's own click
  }
  function stop() { v.pause(); try { v.currentTime = 0; } catch (e) {} end.hidden = true; v.controls = true; }
  function restore(leaving) {
    if (!saved) return;
    var s = saved; saved = null;
    root.style.overflow = s.ov;
    if (!leaving) { window.scrollTo(s.x, s.y); var nb = document.getElementById("intro-open"); if (nb) nb.focus({ preventScroll: true }); }
  }
  function close(leaving) { window.removeEventListener("popstate", away); window.removeEventListener("pagehide", away); stop(); if (d.open) d.close(); restore(leaving); }
  b.addEventListener("click", open);
  x.addEventListener("click", function () { close(false); });
  d.addEventListener("cancel", function (ev) { ev.preventDefault(); close(false); });   // Escape
  d.addEventListener("close", function () { stop(); restore(false); });                   // any other way of closing
  v.addEventListener("ended", function () {
    // leave full screen first, so the end bar can be seen and reached; then show the closing frame without the control overlay
    var fe = document.fullscreenElement || document.webkitFullscreenElement;
    if (fe) { var ex_ = document.exitFullscreen || document.webkitExitFullscreen; if (ex_) { var q = ex_.call(document); if (q && q.catch) q.catch(function () {}); } }
    else if (v.webkitDisplayingFullscreen && v.webkitExitFullscreen) { try { v.webkitExitFullscreen(); } catch (e) {} }   // Safari on iPhone
    v.controls = false; end.hidden = false; rp.focus();
  });
  v.addEventListener("play", function () { end.hidden = true; v.controls = true; });
  rp.addEventListener("click", function () { end.hidden = true; v.controls = true; try { v.currentTime = 0; } catch (e) {} v.focus({ preventScroll: true }); var p = v.play(); if (p && p.catch) p.catch(function () {}); });
  ex.addEventListener("click", function () { close(true); });   // leaving the page: no scroll or focus restore needed
  function failed() { err.hidden = false; }
  src.addEventListener("error", failed); v.addEventListener("error", failed);
})();

}
