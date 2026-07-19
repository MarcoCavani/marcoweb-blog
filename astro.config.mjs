import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import remarkControlLinks from './src/lib/remark-control-links.mjs'

export default defineConfig({
  site: 'https://marcoweb.org',
  integrations: [
    tailwind(),
    sitemap(),
  ],
  markdown: {
    remarkPlugins: [remarkControlLinks],
  },
})
