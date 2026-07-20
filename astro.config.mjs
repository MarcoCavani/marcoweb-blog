import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import sitemap from '@astrojs/sitemap'
import remarkControlLinks from './src/lib/remark-control-links.mjs'

// Pages that set `noindex` in Layout.astro. Add a path here when you add one.
const NOINDEX_PATHS = ['/training', '/threat-report-2026']

export default defineConfig({
  site: 'https://marcoweb.org',
  integrations: [
    tailwind(),
    // Pre-launch pages are noindex; listing them in the sitemap too would send
    // Google a contradictory signal. Keep the two sets in sync.
    sitemap({
      filter: (page) => !NOINDEX_PATHS.some((p) => page.endsWith(`${p}/`) || page.endsWith(p)),
    }),
  ],
  markdown: {
    remarkPlugins: [remarkControlLinks],
  },
})
