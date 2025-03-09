import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import path from 'path';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://softylus.com',
  integrations: [
    tailwind(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      customPages: [
        'https://softylus.com/',
        'https://softylus.com/about',
        'https://softylus.com/services',
        'https://softylus.com/projects',
        'https://softylus.com/contact',
      ],
    })
  ],
  vite: {
    resolve: {
      alias: {
        '@lib': path.resolve('./src/lib')
      }
    }
  }
});


