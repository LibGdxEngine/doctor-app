/** @type {import('next').NextConfig} */
import nextI18NextConfig from './next-i18next.config.mjs';
const sitemap = require('next-sitemap');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,  // Use SWC for minification instead of Terser
  ...nextI18NextConfig,  // Spread the i18n configuration into the Next.js config
  sitemap,
};

export default nextConfig;
