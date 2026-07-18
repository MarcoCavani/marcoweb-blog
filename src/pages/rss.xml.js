import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

export async function GET(context) {
  const now = new Date()
  const entries = (await getCollection('blog'))
    .filter((p) => p.data.pubDate <= now && !p.data.draft)
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())

  return rss({
    title: 'MarcoWeb — Cybersecurity & IT Governance',
    description:
      'Cybersecurity analysis, breach case studies, and IT General Controls insights from Marco Cavani.',
    site: context.site,
    items: entries.map((post) => {
      const base = post.data.category === 'Digital Report' ? 'reports' : 'blog'
      return {
        title: post.data.title,
        description: post.data.description,
        pubDate: post.data.pubDate,
        link: `/${base}/${post.slug}/`,
        categories: post.data.tags,
        author: 'marco@marcoweb.org (Marco Cavani)',
      }
    }),
    customData: `<language>en-au</language>`,
  })
}
