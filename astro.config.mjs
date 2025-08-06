import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mkcert from 'vite-plugin-mkcert';

export default defineConfig({
  output: 'server', // ✅ needed for middleware

  i18n: {
    locales: ["no", "en", "de"],
    defaultLocale: "no",
    routing: {
      prefixDefaultLocale: true,
    },
  },

  compressHTML: true,
  trailingSlash: 'always',
  base: '/',
  vite: {
    plugins: [mkcert()],
  },
  server: {
    host: true,
    https: true,
  },
  build: {
    sourcemap: process.env.npm_lifecycle_event === 'dev',
  },
  integrations: [sitemap()],
});
