#!/usr/bin/env python3
"""Compare the Next.js export (out/) with the original v4.10.2 review site, page by page.

Usage: python3 scripts/verify_fidelity.py <path-to>/01_WEBSITE_REVIEW_REFERENCE/site

For every page it canonicalises <body> (original vs exported), after applying the known, intentional
address rewrites (x.html -> /lang/x/, ../assets -> /assets, data: caption tracks -> .vtt files), ignoring
<script> tags and Next.js' own hidden helper nodes, and reports any difference in elements, attributes or text.
"""
import base64, glob, os, re, sys
from bs4 import BeautifulSoup, Comment

site = sys.argv[1]
out = os.path.join(os.path.dirname(__file__), '..', 'out')

def route(lang, slug): return f'/{lang}/' if slug == 'index' else f'/{lang}/{slug}/'

def rw(lang, u):
    if u.startswith(('http:', 'https:', 'mailto:', 'tel:', 'data:', '#', '?')): return u
    m = re.match(r'^([a-z0-9-]+)\.html([?#].*)?$', u)
    if m: return route(lang, m[1]) + (m[2] or '')
    m = re.match(r'^\.\./(en|ja)/([a-z0-9-]+)\.html([?#].*)?$', u)
    if m: return route(m[1], m[2]) + (m[3] or '')
    if u.startswith('../assets/'): return '/assets/' + u[10:]
    if u == '../index.html': return '/'
    if u.startswith('assets/'): return '/' + u
    if re.match(r'^(en|ja)/index\.html$', u): return '/' + u[:2] + '/'
    return u

vtts = {open(p, encoding='utf8').read().strip(): os.path.basename(p) for p in glob.glob(os.path.join(site, 'assets/media/*.vtt'))}

def canon(html, lang=None, original=False):
    s = BeautifulSoup(html, 'lxml')
    for t in s.find_all(['script', 'style']): t.decompose()
    for c in s.find_all(string=lambda x: isinstance(x, Comment)): c.extract()
    body = s.body
    for h in body.find_all('div', attrs={'hidden': True, 'class': None}):
        if not h.get_text(strip=True) and not h.find(True): h.decompose()   # Next.js helper node
    if original:
        for el in body.find_all(True):
            for a in ('href', 'src', 'poster', 'data-back'):
                if el.has_attr(a):
                    v = el[a]
                    if v.startswith('data:text/vtt;base64,'):
                        v = '/assets/media/' + vtts[base64.b64decode(v.split(',', 1)[1]).decode('utf8').strip()]
                    el[a] = rw(lang, v)
    lines = []
    def walk(n, d=0):
        for c in n.children:
            if isinstance(c, str):
                t = re.sub(r'\s+', ' ', str(c)).strip()
                if t: lines.append(' ' * d + 'T:' + t)
            else:
                at = ' '.join(f'{k}={" ".join(v) if isinstance(v, list) else v}' for k, v in sorted(c.attrs.items()))
                lines.append(' ' * d + f'<{c.name} {at}>')
                walk(c, d + 1)
    walk(body)
    return lines

bad = 0; n = 0
pages = [('en', os.path.basename(f)[:-5]) for f in sorted(glob.glob(os.path.join(site, 'en/*.html')))]
pages += [('ja', s) for _, s in pages]
for lang, slug in pages:
    orig = open(os.path.join(site, lang, slug + '.html'), encoding='utf8').read()
    f = os.path.join(out, lang, 'index.html') if slug == 'index' else os.path.join(out, lang, slug, 'index.html')
    a, b = canon(orig, lang, True), canon(open(f, encoding='utf8').read())
    n += 1
    if a != b:
        bad += 1
        if bad <= 5:
            print('DIFF', lang, slug)
            import difflib
            for l in list(difflib.unified_diff(a, b, 'original', 'next', lineterm='', n=0))[:14]: print('   ', l[:200])
# root entry page
a = canon(open(os.path.join(site, 'index.html'), encoding='utf8').read(), 'en', True)
b = canon(open(os.path.join(out, 'index.html'), encoding='utf8').read())
n += 1
if a != b:
    bad += 1; print('DIFF root')
    import difflib
    for l in list(difflib.unified_diff(a, b, 'original', 'next', lineterm='', n=0))[:14]: print('   ', l[:200])
print(f'{n} pages compared, {bad} differ')
sys.exit(1 if bad else 0)
