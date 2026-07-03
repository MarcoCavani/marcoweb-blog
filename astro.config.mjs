import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

export default defineConfig({
  site: 'https://marcoweb-blog.netlify.app',
  integrations: [
    tailwind(),
  ],
})
