import type { NextConfig } from 'next'

/**
 * Static export: the original site is plain static HTML for Hostinger web hosting, so the
 * Next.js build produces the same kind of artefact (`out/`) — no Node runtime required.
 * trailingSlash gives /en/who-we-are/index.html, which any static host serves without rewrites.
 * Legacy *.html addresses are redirected by public/.htaccess.
 */
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  reactStrictMode: true,
  experimental: { globalNotFound: true },
  allowedDevOrigins: ['127.0.0.1'],
}

export default nextConfig
