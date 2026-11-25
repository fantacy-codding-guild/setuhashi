// @ts-nocheck
/* Approved v4.10.2 behaviour, ported from assets/js/contact.js with its code unchanged (plus the optional live-enquiry hook).
   It runs once per page load from components/SiteBehaviour.tsx. Addresses go through the SH layer (lib/behaviour/sh.ts).
   Type-checking is off for this file because the original is plain JavaScript; behaviour is covered by the QA checks. */
/* eslint-disable */
export type ContactOptions = { enabled: boolean; sent: string; failed: string; locale: string };

export function initContact(opts?: ContactOptions): void {
/* SetuHashi local review build v4.6 · Contact us · INTERNAL.
   Topic: contact.html?topic=<id> preselects the topic and shows it, with "Back to this topic" and "Remove topic".
   v4.6: &via=all (from View all services) makes "Back to this topic" return there, with the service or offering open.
   The topic (non-sensitive catalogue data) is kept in the address with replaceState; nothing the visitor types ever is.
   Unknown topics are ignored. The form is an inactive example: no action, a non-submitting button, submit and Enter
   intercepted; local checks only. Nothing is sent or stored (no cookies, storage or network). */
(function () {
  var sel = document.getElementById("f-topic"); if (!sel) return;
  var ctx = document.getElementById("topic-ctx"), lab = document.getElementById("topic-ctx-label"), back = document.getElementById("topic-back");
  var SH = window.SH, H = SH.here(), via = /[?&]via=all\b/.test(H.search);
  function setUrl(v) { var q = v ? "?topic=" + encodeURIComponent(v) + (via ? "&via=all" : "") : ""; SH.replace(q, SH.here().hash); }
  function show() {
    var o = sel.options[sel.selectedIndex];
    if (!sel.value) { ctx.hidden = true; return; }
    var b = via && /^[so]-\d/.test(sel.value) ? "what-we-offer-all-services.html#" + sel.value : o.getAttribute("data-back");
    lab.textContent = o.textContent.replace(/^—\s*/, ""); SH.setHref(back, b); ctx.hidden = false;
  }
  var m = /[?&]topic=([^&#]+)/.exec(H.search), t = m ? decodeURIComponent(m[1]) : "";
  if (t && sel.querySelector('option[value="' + t.replace(/"/g, "") + '"]')) sel.value = t; else { sel.value = ""; if (t) setUrl(""); }
  show();
  sel.addEventListener("change", function () { setUrl(sel.value); show(); });
  document.getElementById("topic-clear").addEventListener("click", function () { sel.value = ""; setUrl(""); show(); sel.focus(); });

  var form = document.querySelector("form.enq"), status = document.getElementById("fstatus");
  var summary = document.getElementById("form-error"), list = document.getElementById("form-error-list");
  var fields = ["f-name", "f-email", "f-msg"].map(function (id) { return document.getElementById(id); });
  function invalid(f) { return !f.value.trim() || (f.type === "email" && !f.checkValidity()); }
  function mark(f, bad) {
    var err = document.getElementById(f.id + "-err"), desc = (f.getAttribute("aria-describedby") || "").split(" ").filter(function (x) { return x && x !== err.id; });
    if (bad) { f.setAttribute("aria-invalid", "true"); err.textContent = f.getAttribute("data-err"); err.hidden = false; desc.push(err.id); }
    else { f.removeAttribute("aria-invalid"); err.textContent = ""; err.hidden = true; }
    if (desc.length) f.setAttribute("aria-describedby", desc.join(" ")); else f.removeAttribute("aria-describedby");
  }
  function refreshSummary() {
    var bad = fields.filter(function (f) { return f.getAttribute("aria-invalid") === "true"; });
    list.innerHTML = "";
    bad.forEach(function (f) { var li = document.createElement("li"), a = document.createElement("a"); a.href = "#" + f.id; a.textContent = f.getAttribute("data-err");
      a.addEventListener("click", function (ev) { ev.preventDefault(); f.focus(); }); li.appendChild(a); list.appendChild(li); });
    summary.hidden = bad.length === 0; return bad;
  }
  function check() {
    status.textContent = "";
    fields.forEach(function (f) { mark(f, invalid(f)); });
    var bad = refreshSummary();
    if (bad.length) { summary.focus(); return; }
    if (opts && opts.enabled) { send(); return; }   // live enquiries (only when enabled)
    status.textContent = status.getAttribute("data-ok");
  }
  function send() {   // posts the enquiry to /api/contact/ (lib/contact.ts validates it again on the server)
    var btn = form.querySelector("button.send"); btn.disabled = true; status.textContent = "";
    var data = { name: fields[0].value, email: fields[1].value, organization: (document.getElementById("f-org") || {}).value || "",
      topic: sel.value, message: fields[2].value, locale: opts.locale, website: (form.querySelector('[name="website"]') || {}).value || "" };
    fetch("/api/contact/", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) })
      .then(function (r) { if (!r.ok) throw new Error(String(r.status)); status.textContent = opts.sent; form.reset(); sel.value = ""; setUrl(""); show(); })
      .catch(function () { status.textContent = opts.failed; })
      .then(function () { btn.disabled = false; });
  }
  fields.forEach(function (f) { f.addEventListener("input", function () { if (f.getAttribute("aria-invalid") === "true" && !invalid(f)) { mark(f, false); refreshSummary(); } }); });
  form.addEventListener("submit", function (ev) { ev.preventDefault(); check(); });
  form.querySelector("button.send").addEventListener("click", check);
  form.addEventListener("keydown", function (ev) { if (ev.key === "Enter" && ev.target.tagName === "INPUT") { ev.preventDefault(); check(); } });
})();

}
