// https://docs.astro.build/de/reference/configuration-reference/

import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mkcert from 'vite-plugin-mkcert';



export default defineConfig({

  adapter: netlify({
    imageCDN: false,
  }),

  i18n: {
    locales: ["no", "en", "de"],
    defaultLocale: "no",
    routing: {
        prefixDefaultLocale: true
    }},


  output: 'static',
  compressHTML: true,
  trailingSlash: 'always',
  base: (process.env.npm_lifecycle_event === 'stage') ? 'astro-starter/' : '/',
  vite: {
    plugins: [
      mkcert(),
    ],
  },
  server: {
    host: true,
    https: true
  },
  build: {
    sourcemap: (process.env.npm_lifecycle_event === 'dev') ? true : false,
  },
  integrations: [sitemap()],
});
