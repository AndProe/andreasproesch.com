// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://andreasproesch.com',
  output: 'static',
  // Recover equity from pre-redesign URLs that are still indexed.
  redirects: {
    '/aboutme': '/about/',
    '/advisory': '/about/',
  },
  integrations: [
    sitemap({
      // Stamp a lastmod so crawlers (and AI search bots, which favour fresh
      // content) see when the site was last built/updated.
      serialize(item) {
        item.lastmod = new Date().toISOString();
        return item;
      },
    }),
  ],
  build: {
    assets: 'assets'
  }
});
