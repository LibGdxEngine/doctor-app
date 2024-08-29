/** @type {import('next').NextConfig} */
import nextI18NextConfig from './next-i18next.config.mjs';

const nextConfig = {
  reactStrictMode: true,
  ...nextI18NextConfig, // Spread the i18n configuration into the Next.js config
};

export default nextConfig;
