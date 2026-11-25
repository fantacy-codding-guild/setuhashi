import createMiddleware from "next-intl/middleware";
import { NextResponse, type NextRequest } from "next/server";
import { routing } from "./i18n/routing";

const intl = createMiddleware(routing);

export default function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  // "/" is the language-choice start page: always shown, never redirected (as in v4.10.2).
  if (pathname === "/") return NextResponse.next();

  // Old static addresses (…/page.html) keep working: /en/how-we-work.html → /en/how-we-work/
  const legacy = pathname.match(/^\/(?:(en|ja)\/)?([A-Za-z0-9_-]+)\.html$/);
  if (legacy) {
    const [, loc, file] = legacy;
    const target = !loc ? "/" : file === "index" ? `/${loc}/` : `/${loc}/${file}/`;
    return NextResponse.redirect(new URL(target + search, request.url), 308);
  }

  // Static files are served directly.
  if (/\.[A-Za-z0-9]+$/.test(pathname)) return NextResponse.next();

  // Everything else: next-intl adds a missing /en or /ja prefix and validates the locale.
  return intl(request);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|assets|fonts).*)"],
};
