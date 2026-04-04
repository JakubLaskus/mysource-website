// @ts-check
import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';

const isProd = process.env.NODE_ENV === 'production' || process.argv.includes('build');

export default defineConfig({
  site: 'https://www.mysource.pl',
  ...(isProd
    ? {
        adapter: cloudflare({
          platformProxy: { enabled: true },
        }),
      }
    : {
        output: 'server',
      }),
  integrations: [
    react(),
    ...(!isProd ? [keystatic()] : []),
    sitemap({
      i18n: { defaultLocale: 'pl', locales: { pl: 'pl-PL' } },
    }),
  ],
  i18n: {
    defaultLocale: 'pl',
    locales: ['pl'],
  },
});
