from playwright.sync_api import sync_playwright
import os
B=os.environ.get('BASE','http://127.0.0.1:8099')
res=[]
def ok(name,cond,extra=''):
    res.append((name,bool(cond))); print(('PASS ' if cond else 'FAIL ')+name+(' — '+str(extra) if extra and not cond else ''))
with sync_playwright() as p:
    b=p.chromium.launch()
    ctx=b.new_context(viewport={'width':1280,'height':900}); pg=ctx.new_page()
    errs=[]; pg.on('console',lambda m: errs.append(m.text) if m.type in('error','warning') else None); pg.on('pageerror',lambda e: errs.append(str(e)))
    # 1 smoke: many pages, no console errors, no 404 assets
    bad404=[]; pg.on('response',lambda r: bad404.append(r.url) if r.status>=400 else None)
    for path in ['/','/en/','/ja/','/en/who-we-are/','/en/what-we-offer/','/en/what-we-offer-objective-1/','/en/what-we-offer-all-services/','/en/our-experience/','/en/our-experience-e01/','/ja/our-experience-h01/','/en/our-people-mak/','/en/contact/','/ja/contact/','/en/privacy/','/en/our-focus-water-solutions/']:
        pg.goto(B+path); pg.wait_for_load_state('networkidle')
        ok('loads '+path, pg.locator('main#main, main').count()==1 and pg.locator('h1').count()>=1)
    ok('no console errors/warnings across pages', not errs, errs[:5])
    ok('no 4xx/5xx asset responses', not [u for u in bad404 if 'favicon' not in u], bad404[:5])
    # html lang / body class / js class
    pg.goto(B+'/ja/'); ok('ja html lang + js class', pg.evaluate("document.documentElement.lang")=='ja' and pg.evaluate("document.documentElement.classList.contains('js')") and pg.evaluate("document.body.className")=='b-ja')
    # 2 mobile menu
    m=b.new_context(viewport={'width':390,'height':800}); mp=m.new_page(); mp.goto(B+'/en/what-we-offer/'); mp.wait_for_load_state('networkidle')
    btn=mp.locator('.menu-btn'); ok('menu closed initially', btn.get_attribute('aria-expanded')=='false')
    btn.click(); ok('menu opens', btn.get_attribute('aria-expanded')=='true' and 'open' in (mp.locator('#secbar').get_attribute('class') or ''))
    mp.keyboard.press('Escape'); ok('Escape closes menu + focus returns', btn.get_attribute('aria-expanded')=='false' and mp.evaluate("document.activeElement.classList.contains('menu-btn')"))
    ok('local menu closed on narrow', mp.evaluate("[...document.querySelectorAll('.local-d')].every(d=>!d.open)"))
    # header measure vars
    ok('header height CSS vars set', mp.evaluate("getComputedStyle(document.documentElement).getPropertyValue('--hdrh')").strip().endswith('px'))
    m.close()
    # 3 intro dialog
    pg.goto(B+'/en/'); pg.wait_for_load_state('networkidle')
    ok('intro link becomes button', pg.evaluate("document.getElementById('intro-open').tagName")=='BUTTON')
    pg.click('#intro-open'); pg.wait_for_timeout(300)
    ok('intro dialog open + page scroll locked', pg.evaluate("document.getElementById('intro-dlg').open") and pg.evaluate("document.documentElement.style.overflow")=='hidden')
    pg.click('.vid-close'); pg.wait_for_timeout(200)
    ok('intro closes, scroll lock released, focus back', not pg.evaluate("document.getElementById('intro-dlg').open") and pg.evaluate("document.documentElement.style.overflow")=='' and pg.evaluate("document.activeElement.id")=='intro-open')
    pg.click('#intro-open'); pg.wait_for_timeout(200); pg.keyboard.press('Escape'); pg.wait_for_timeout(200)
    ok('intro Escape closes; reopen works', not pg.evaluate("document.getElementById('intro-dlg').open"))
    ok('caption track is a file URL', pg.evaluate("document.querySelector('#intro-dlg track').getAttribute('src')").startswith('/assets/media/'))
    # 4 offer cards
    pg.goto(B+'/en/what-we-offer-objective-1/'); pg.wait_for_load_state('networkidle')
    fc=pg.locator('details.fc'); n=fc.count(); ok('offering cards present', n>0, n)
    fc.first.locator('summary').click(); pg.wait_for_timeout(300)
    o=fc.first.get_attribute('data-o'); ok('opening card puts #o-… in address', pg.evaluate("location.hash")=='#'+o, pg.evaluate("location.hash"))
    ok('history.state keeps fc', pg.evaluate("history.state && history.state.fc && history.state.fc.length")==1)
    pg.reload(); pg.wait_for_load_state('networkidle'); pg.wait_for_timeout(300)
    ok('reload restores open offering', pg.locator(f'details.fc[data-o="{o}"]').evaluate('d=>d.open'))
    # 5 compat page redirect
    pg.goto(B+'/en/what-we-offer-offering-1-1-1/?from=all'); pg.wait_for_url('**/what-we-offer-objective-1/**', timeout=5000)
    ok('compat page replaces itself with objective page (query+anchor kept)', '/what-we-offer-objective-1/' in pg.url and 'from=all' in pg.url and '#o-1-1-1' in pg.url, pg.url)
    # 6 experience filters
    pg.goto(B+'/en/our-experience/'); pg.wait_for_load_state('networkidle')
    chips=pg.locator('.fchip'); ok('filters shown', pg.locator('.filters').evaluate('e=>!e.hidden') and chips.count()>1, chips.count())
    total=pg.locator('.st-card:not([hidden])').count()
    chips.nth(1).click(); k=chips.nth(1).get_attribute('data-f'); shown=pg.locator('.st-card:not([hidden])').count()
    ok('filter narrows cards, #f= in address, count updates', shown<total and pg.evaluate('location.hash')=='#f='+k and str(shown) in pg.locator('.fcount').inner_text(), (total,shown,pg.evaluate('location.hash')))
    pg.goto(B+'/en/our-experience/#f='+k); pg.wait_for_load_state('networkidle')
    ok('filter restored from address', pg.locator('.st-card:not([hidden])').count()==shown)
    # lang switch keeps hash
    pg.click('a[data-lang]'); pg.wait_for_url('**/ja/our-experience/**'); ok('language switch keeps #f=', pg.evaluate('location.hash')=='#f='+k, pg.url)
    # 7 contact
    pg.goto(B+'/en/what-we-offer-objective-1/'); 
    href=pg.locator('a[href*="/en/contact/?topic="]').first.get_attribute('href') if pg.locator('a[href*="/en/contact/?topic="]').count() else None
    ok('topic links to contact exist', href, href)
    pg.goto(B+(href or '/en/contact/')); pg.wait_for_load_state('networkidle')
    ok('topic preselected + context shown', pg.evaluate("document.getElementById('f-topic').value")!='' and pg.evaluate("!document.getElementById('topic-ctx').hidden"))
    pg.click('#topic-clear'); ok('Remove topic clears select + address', pg.evaluate("document.getElementById('f-topic').value")=='' and pg.evaluate('location.search')=='')
    pg.click('button.send'); pg.wait_for_timeout(200)
    ok('empty submit shows error summary (3 errors) and no navigation', pg.evaluate("!document.getElementById('form-error').hidden") and pg.locator('#form-error-list li').count()==3 and pg.url.endswith('/en/contact/'))
    pg.fill('#f-name','A B'); pg.fill('#f-email','a@b.co'); pg.fill('#f-msg','hello'); pg.click('button.send'); pg.wait_for_timeout(200)
    ok('valid form shows inactive-example status; nothing sent', pg.evaluate("document.getElementById('form-error').hidden") and pg.locator('#fstatus').inner_text().strip()!='')
    # 8 soft navigation via header Link, behaviours re-init
    pg.goto(B+'/en/'); pg.wait_for_load_state('networkidle')
    nav_reqs=[]; pg.on('request',lambda r: nav_reqs.append(r.url) if r.resource_type=='document' else None)
    pg.click('#secbar a[href="/en/what-we-offer/"]'); pg.wait_for_url('**/en/what-we-offer/'); pg.wait_for_load_state('networkidle')
    ok('header nav is a soft navigation (no document request)', not [u for u in nav_reqs if 'what-we-offer' in u], nav_reqs)
    ok('aria-current set on section link', pg.locator('#secbar a[href="/en/what-we-offer/"]').get_attribute('aria-current')=='page')
    pg.click('a[href="/en/what-we-offer-objective-1/"]'); pg.wait_for_url('**/what-we-offer-objective-1/**'); pg.wait_for_load_state('networkidle')
    pg.locator('details.fc').first.locator('summary').click(); pg.wait_for_timeout(300)
    ok('behaviours work after navigating in the app', pg.evaluate('location.hash').startswith('#o-'), pg.evaluate('location.hash'))
    pg.go_back(); pg.wait_for_load_state('networkidle'); pg.wait_for_timeout(300)
    ok('browser Back works after in-content navigation', pg.url.endswith('/en/what-we-offer/') , pg.url)
    # 9 404
    pg.goto(B+'/404.html'); ok('404.html is the bilingual not-found page', 'Page not found' in pg.content() and 'ページが見つかりません' in pg.content())
    ok('final: no console errors', not [e for e in errs if 'favicon' not in e and '404' not in e], errs[:5])
    b.close()
print('\n%d/%d passed'%(sum(1 for _,c in res if c),len(res)))
