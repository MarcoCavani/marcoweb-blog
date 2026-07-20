import { defineCollection, z } from 'astro:content'

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    category: z.string().default('Digital Report'),
    author: z.string().default('Marco Cavani'),
    tags: z.array(z.string()).optional(),
    readTime: z.string().optional(),
    gated: z.boolean().optional(),
    youtubeId: z.string().optional(),
    draft: z.boolean().default(false),
    // Sector a report analyses — drives the industry filter on /reports.
    industry: z.string().optional(),
    // ITGC control reference, e.g. "B.3" or "D.1 · E.1 · F.1" — drives /itgc-series.
    control: z.string().optional(),
  }),
})

export const collections = { blog }
