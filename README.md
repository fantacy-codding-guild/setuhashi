# SetuHashi website: Next.js project (v4.10.2 conversion)

This is the approved v4.10.2 SetuHashi site converted to the requested project format:

- Next.js 16 (App Router)
- TypeScript (`.tsx`)
- Tailwind CSS v4
- `next-intl` for English and Japanese
- Ready for Vercel through GitHub

The design, page addresses, English and Japanese text, films and page behaviour are unchanged. Every page has been checked against the approved build (see **Verification**).

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (also type-checks)
npm start          # serve the production build
```

Node 20 or later is required.

## Structure

```
setuhashi-app/
├── public/
│   ├── assets/{logo,img,media,icons}/   # logos, portraits, both films + posters + captions, favicon
│   └── fonts/                           # bundled font subsets and licences
├── app/
│   ├── api/contact/route.ts             # POST /api/contact/ → sends the enquiry with Resend (off by default)
│   ├── (entry)/                         # "/" — language choice
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── (site)/[locale]/                 # every page, written once, served as /en/... and /ja/...
│   │   ├── layout.tsx                   # <html lang="en|ja">
│   │   ├── page.tsx                     # welcome page /en/ /ja/
│   │   └── <page>/page.tsx              # 159 more pages, e.g. how-we-work-our-role/page.tsx
│   ├── globals.css                      # Tailwind theme + utilities, design tokens (@theme), approved site styles
│   ├── fonts.css                        # @font-face rules
│   └── global-not-found.tsx             # 404 page
├── components/
│   ├── PageShell.tsx                    # skip link + review bar + header + page + footer + behaviour
│   ├── SiteHeader.tsx                   # logo, language switch, phone menu, section bar
│   ├── SiteFooter.tsx
│   ├── ReviewBar.tsx                    # "internal review build" bar (review mode only)
│   └── SiteBehaviour.tsx                # runs the page behaviour (client component)
├── lib/
│   ├── pages.ts                         # page register: section, page scripts, language-switch target
│   ├── nav.ts                           # sections, footer links, page addresses
│   ├── metadata.ts                      # titles, descriptions, language alternates, robots
│   ├── site.ts                          # site switches (review/production, form on/off)
│   ├── contact.ts                       # enquiry validation + email text
│   ├── contact-topics.json              # the 128 enquiry topics, EN + JA
│   ├── cn.ts                            # class-name helper
│   └── behaviour/                       # approved page behaviour (menus, back links, filters, film, form)
├── i18n/{routing,navigation,request}.ts # next-intl set-up (locales en, ja)
├── messages/{en,ja}.json                # ALL TEXT, one file per language
├── proxy.ts                             # "/" stays the language choice; old .html addresses redirect
├── next.config.ts · postcss.config.mjs · tsconfig.json · package.json
└── .env.example                         # variable names (no secrets)
```

## Text: `messages/en.json` and `messages/ja.json`

No page contains visible text. Both files have the same layout:

| Namespace | Contains |
|---|---|
| `common` | Header, footer, review bar and form status messages |
| `shared` | Text repeated on three or more pages: breadcrumbs, section names, local navigation, service names. One edit changes every page that uses it. |
| `pages.<page>` | Text used by that page only. Keys are named after the element (`h2_1`, `p_4`, `li_7`), in page order. `metaTitle` and `metaDescription` give the browser title and description. |
| `entry` | The language-choice page, which shows both languages at once. |

**Finding a string.** Search the JSON for the text you see on the page.

**Editing text.** Change it in both files where both languages need it. Keep the keys unchanged.

**Rich messages.** About 20 strings need different markup in English and Japanese, for example the Japanese line-break groups `<ph>…</ph>`. They are rich messages: the tags are rendered by the page (`t.rich`). Keep the tags when editing.

## Pages

Each `app/(site)/[locale]/<page>/page.tsx` is an ordinary server component:

1. It reads its text with `getTranslations("pages.<page>")`.
2. It wraps its `<main>` in `<PageShell>`.

The generated JSX keeps the approved markup and class names exactly. Simplify or split pages into components as you work on them.

**New page:**
1. Add the folder and `page.tsx`.
2. Add its text to both message files.
3. Add an entry to `lib/pages.ts`.

Links are plain `<a href="/en/...">` elements, so each click loads a full page, as in v4.10.2. The approved behaviour in `lib/behaviour/` runs once per page load. If you change to client-side navigation (`Link` from `i18n/navigation.ts`), port that behaviour to React effects first.

## Styling

`app/globals.css` loads Tailwind's theme and utilities **without Tailwind's preflight reset**, so the approved design renders pixel for pixel. The approved stylesheet sits in the `components` layer, which means:

- any Tailwind class you add overrides it;
- the brand tokens are available as classes (`bg-rich`, `text-ink`, `border-line`, `font-serif`).

New work can use Tailwind classes only. The existing pages keep their approved class names; moving them to utilities can happen page by page, and each page should be compared against the screenshots after the change.

## Behaviour

`lib/behaviour/*.ts` contains the approved v4.10.2 scripts:

- `site`: phone menu, header on scroll, language switch keeping the topic and anchor;
- `offer`: service views and back links;
- `experience`: back links;
- `contact`: topic, form checks;
- `intro`: film dialog.

Their code is unchanged and only type-checking is switched off. The v4.10.2 scripts used file addresses (`how-we-work.html`). `lib/behaviour/sh.ts` translates those to and from the clean addresses (`/en/how-we-work/`), so the scripts keep working without changes.

## Switches (environment variables)

Copy `.env.example` to `.env.local`. On Vercel, set the same names in **Settings → Environment Variables**.

| Variable | Default | Effect |
|---|---|---|
| `NEXT_PUBLIC_SITE_MODE` | `review` | `review` keeps the review bar, the footer review note and *noindex*. `production` removes all three. **Switch only with the Sponsor's written launch approval.** |
| `NEXT_PUBLIC_SITE_URL` | `https://www.setuhashi.com` | Address used in canonical and language links. |
| `NEXT_PUBLIC_CONTACT_FORM_ENABLED` | `false` | `true` makes the form send through `/api/contact/` (needs the three variables below). |
| `RESEND_API_KEY`, `CONTACT_TO`, `CONTACT_FROM` | — | Resend key, recipient(s), and a sender on a verified domain. Never commit these. |

## Contact form: before enabling

While `NEXT_PUBLIC_CONTACT_FORM_ENABLED` is off, the form stays the approved inactive example. It checks the fields and sends nothing, and the API answers 503.

Before turning it on, all of these need the Sponsor's approval:

1. **Service and account.** The Resend account, plan, cost and region. A sender address on a verified domain, added *without* changing the existing Hostinger mail records.
2. **Recipient.** Who receives enquiries (`CONTACT_TO`).
3. **Contact page wording.** Replace the "inactive example" sentences in both message files:
   - the note above the form (`pages.contact` → the paragraph beginning "This form is an inactive example");
   - the button label "Send enquiry (inactive example)";
   - the `data-ok` status.

   Check the draft "sent / could not be sent" wording in `common.contactSent` and `common.contactFailed`.
4. **Privacy notice.** Update the EN and JA privacy notices for form data, Resend as a processor, retention and hosting logs.
5. **Testing.** Send a real test enquiry in each language, coordinated with the mailbox owner.

## Deploying (Vercel)

1. Push to GitHub and import the repository in Vercel. The framework preset is Next.js and no build settings are needed.
2. Set the environment variables, then deploy to a **preview URL** first and send it to the Sponsor.
3. **Domain.** Add `www.setuhashi.com` and `setuhashi.com` in Vercel, then change **only** the website DNS records at Hostinger: the `A`/`CNAME` records for `@` and `www`.
   - **Do not change** the mail records: `MX`, the `TXT` SPF/DKIM/DMARC records, or the mail `CNAME`s.
   - Note the current records before changing anything.
4. The live site is replaced only after the Sponsor's written approval.

## Verification (done on this conversion)

**Page by page.** All 321 pages (160 English, 160 Japanese and the start page) were compared node by node with the approved v4.10.2 HTML: every element, attribute and text string, plus the title, description and robots tag. **321 of 321 are identical.**

**Screenshots.** 64 screenshots of 16 representative pages were compared pixel by pixel against v4.10.2, in both languages at desktop (1440 px) and phone (390 px) widths. **64 of 64 are identical.**

**Behaviour checks.** All of these were confirmed:
- phone menu and Escape;
- local menus;
- language switch keeping the topic;
- contact topic preselect and form checks, with nothing sent;
- moved offering pages;
- back links;
- English and Japanese films and captions;
- old `.html` addresses redirecting;
- 404 for unknown pages;
- no cookies;
- no script errors.

**Not tested.**
- Real email sending, because it needs the Resend account.
- Safari and Firefox.
- A Vercel deployment.

Test these on the preview URL.
