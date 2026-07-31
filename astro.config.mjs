import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import remarkControlLinks from './src/lib/remark-control-links.mjs'

// Pages that set `noindex` in Layout.astro. Add a path here when you add one.
// /training now hosts the free Foundations module, so it is indexable.
const NOINDEX_PATHS = ['/threat-report-2026']

export default defineConfig({
  site: 'https://marcoweb.org',
  integrations: [
    // Tailwind is applied via PostCSS (postcss.config.mjs) since @astrojs/tailwind
    // does not support Astro 6+. Directives live in src/styles/global.css.
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
