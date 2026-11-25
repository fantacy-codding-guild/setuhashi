import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n/request.ts");

const nextConfig: NextConfig = {
  // Pages are addressed /en/<page>/ and /ja/<page>/, matching the live site.
  trailingSlash: true,
  poweredByHeader: false,
  experimental: { globalNotFound: true },
};

export default withNextIntl(nextConfig);
