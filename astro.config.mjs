import { defineConfig } from "astro/config";
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://feature-tour.netlify.app',
  integrations: [
    react({
      include: '**/*.jsx',
    }),
    sitemap({
      canonicalURL: 'https://feature-tour.netlify.app',
    }),
  ],
});
