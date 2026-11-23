#!/usr/bin/env python3
"""Extract the v4.10.2 review site (static HTML) into Next.js content data.

Usage: python3 scripts/extract_content.py <path-to>/01_WEBSITE_REVIEW_REFERENCE/site

For every page in en/ and ja/ this writes content/<lang>/<slug>.json containing the page's
<title>, description, <main> class, the <main> inner HTML (internal links rewritten to clean
Next.js routes) and which behaviour scripts the original page loaded.
The shared shell (header, footer, review banner) is rendered by React components instead.
"""
import base64, glob, json, os, re, sys

site = sys.argv[1]
out = os.path.join(os.path.dirname(__file__), '..', 'content')

LINK = re.compile(r'^(?P<slug>[a-z0-9-]+)\.html(?P<rest>[?#].*)?$')

def route(lang, slug):
    return f'/{lang}/' if slug == 'index' else f'/{lang}/{slug}/'

def rewrite_url(lang, u):
    if u.startswith(('http:', 'https:', 'mailto:', 'tel:', 'data:', '#', '?')):
        return u
    m = LINK.match(u)
    if m:
        return route(lang, m['slug']) + (m['rest'] or '')
    m = re.match(r'^\.\./(en|ja)/([a-z0-9-]+)\.html(?P<rest>[?#].*)?$', u)
    if m:
        return route(m[1], m[2]) + (m['rest'] or '')
    if u.startswith('../assets/'):
        return '/assets/' + u[len('../assets/'):]
    if u in ('../index.html',):
        return '/'
    return u

def rewrite_attrs(lang, html):
    def sub(m):
        return f'{m["attr"]}="{rewrite_url(lang, m["val"])}"'
    return re.sub(r'(?P<attr>\b(?:href|src|poster|data-back|data-from-href))="(?P<val>[^"]*)"', sub, html)

def inline_captions(html):
    # data:text/vtt;base64 caption tracks -> the shipped .vtt files (verified byte-identical)
    def sub(m):
        txt = base64.b64decode(m['b64']).decode('utf8')
        for p in glob.glob(os.path.join(site, 'assets/media/*.vtt')):
            if open(p, encoding='utf8').read().strip() == txt.strip():
                return f'src="/assets/media/{os.path.basename(p)}"'
        raise SystemExit('caption track without matching VTT file')
    return re.sub(r'src="data:text/vtt;base64,(?P<b64>[A-Za-z0-9+/=]+)"', sub, html)

pages = {}
for lang in ('en', 'ja'):
    os.makedirs(os.path.join(out, lang), exist_ok=True)
    for f in sorted(glob.glob(os.path.join(site, lang, '*.html'))):
        slug = os.path.basename(f)[:-5]
        t = open(f, encoding='utf8').read()
        head = re.search(r'<head>(.*?)</head>', t, re.S).group(1)
        title = re.search(r'<title>(.*?)</title>', head, re.S).group(1)
        desc = re.search(r'<meta name="description" content="(.*?)">', head, re.S).group(1)
        scripts = [s for s in re.findall(r'<script src="\.\./assets/js/(\w+)\.js"', head) if s not in ('site',)]
        mm = re.search(r'<main id="main" class="([^"]*)">(.*?)</main>', t, re.S)
        body = inline_captions(rewrite_attrs(lang, mm.group(2).strip()))
        # the language switch normally points at the same slug, but compatibility pages for former service/offering
        # addresses point at the objective page (+ #anchor) — keep the exact target
        hdr = re.search(r'<header.*?</header>', t, re.S).group(0)
        lang_href = rewrite_url(lang, re.search(r'<a href="([^"]*)"[^>]*data-lang', hdr).group(1))
        data = dict(slug=slug, title=title, description=desc, mainClass=mm.group(1), scripts=scripts, langHref=lang_href, html=body)
        json.dump(data, open(os.path.join(out, lang, slug + '.json'), 'w', encoding='utf8'), ensure_ascii=False)
        pages.setdefault(lang, []).append(slug)

assert pages['en'] == pages['ja'], 'EN/JA page sets differ'
json.dump(pages['en'], open(os.path.join(out, 'slugs.json'), 'w'), indent=0)
print({k: len(v) for k, v in pages.items()})
