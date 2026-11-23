import { here, listeners, replace, setHref, type Disposer } from './sh'
import type { Lang } from '../site'

/**
 * Contact us (contact.js v4.6): ?topic=<id> preselects and shows the topic, with "Back to this topic" and "Remove topic";
 * &via=all returns to View all services. The topic (non-sensitive catalogue data) is kept in the address with replaceState;
 * nothing the visitor types ever is. The form is an inactive example: no action, no network, local checks only.
 * (Connecting an approved enquiry path is a separate release task — see README.)
 */
export function initContact(lang: Lang): Disposer {
  const sel = document.getElementById('f-topic') as HTMLSelectElement | null
  if (!sel) return () => {}
  const L = listeners()
  const ctx = document.getElementById('topic-ctx')!
  const lab = document.getElementById('topic-ctx-label')!
  const back = document.getElementById('topic-back')!
  const via = /[?&]via=all\b/.test(here().search)

  const setUrl = (v: string) => {
    const q = v ? '?topic=' + encodeURIComponent(v) + (via ? '&via=all' : '') : ''
    replace(q, here().hash)
  }
  const show = () => {
    const o = sel.options[sel.selectedIndex]
    if (!sel.value) {
      ctx.hidden = true
      return
    }
    const b = via && /^[so]-\d/.test(sel.value) ? `/${lang}/what-we-offer-all-services/#` + sel.value : o.getAttribute('data-back') || ''
    lab.textContent = (o.textContent || '').replace(/^—\s*/, '')
    setHref(back, b)
    ctx.hidden = false
  }

  const m = /[?&]topic=([^&#]+)/.exec(here().search)
  const t = m ? decodeURIComponent(m[1]) : ''
  if (t && sel.querySelector('option[value="' + t.replace(/"/g, '') + '"]')) sel.value = t
  else {
    sel.value = ''
    if (t) setUrl('')
  }
  show()
  L.on(sel, 'change', () => {
    setUrl(sel.value)
    show()
  })
  L.on(document.getElementById('topic-clear')!, 'click', () => {
    sel.value = ''
    setUrl('')
    show()
    sel.focus()
  })

  const form = document.querySelector<HTMLFormElement>('form.enq')!
  const status = document.getElementById('fstatus')!
  const summary = document.getElementById('form-error')!
  const list = document.getElementById('form-error-list')!
  const fields = ['f-name', 'f-email', 'f-msg'].map((id) => document.getElementById(id) as HTMLInputElement)

  const invalid = (f: HTMLInputElement) => !f.value.trim() || (f.type === 'email' && !f.checkValidity())
  const mark = (f: HTMLInputElement, bad: boolean) => {
    const err = document.getElementById(f.id + '-err')!
    const desc = (f.getAttribute('aria-describedby') || '').split(' ').filter((x) => x && x !== err.id)
    if (bad) {
      f.setAttribute('aria-invalid', 'true')
      err.textContent = f.getAttribute('data-err')
      err.hidden = false
      desc.push(err.id)
    } else {
      f.removeAttribute('aria-invalid')
      err.textContent = ''
      err.hidden = true
    }
    if (desc.length) f.setAttribute('aria-describedby', desc.join(' '))
    else f.removeAttribute('aria-describedby')
  }
  const refreshSummary = () => {
    const bad = fields.filter((f) => f.getAttribute('aria-invalid') === 'true')
    list.innerHTML = ''
    bad.forEach((f) => {
      const li = document.createElement('li')
      const a = document.createElement('a')
      a.href = '#' + f.id
      a.textContent = f.getAttribute('data-err')
      a.addEventListener('click', (ev) => {
        ev.preventDefault()
        f.focus()
      })
      li.appendChild(a)
      list.appendChild(li)
    })
    summary.hidden = bad.length === 0
    return bad
  }
  const check = () => {
    status.textContent = ''
    fields.forEach((f) => mark(f, invalid(f)))
    const bad = refreshSummary()
    if (bad.length) {
      summary.focus()
      return
    }
    status.textContent = status.getAttribute('data-ok')
  }
  fields.forEach((f) =>
    L.on(f, 'input', () => {
      if (f.getAttribute('aria-invalid') === 'true' && !invalid(f)) {
        mark(f, false)
        refreshSummary()
      }
    }),
  )
  L.on(form, 'submit', (ev) => {
    ev.preventDefault()
    check()
  })
  L.on(form.querySelector('button.send')!, 'click', check)
  L.on(form, 'keydown', (ev) => {
    const e = ev as KeyboardEvent
    if (e.key === 'Enter' && (e.target as HTMLElement).tagName === 'INPUT') {
      e.preventDefault()
      check()
    }
  })
  return () => L.dispose()
}
