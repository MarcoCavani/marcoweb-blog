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

// Training lessons. Kept separate from `blog` so course structure (module order,
// quizzes, gating) does not leak into article frontmatter.
const lessons = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    course: z.string(),
    module: z.string(),
    order: z.number(),
    minutes: z.number().default(5),
    // Free lessons render statically. Gated ones require an active subscription —
    // see the entitlement note in src/lib/entitlement.ts before changing this.
    gated: z.boolean().default(false),
    control: z.string().optional(),
    quiz: z.array(z.object({
      question: z.string(),
      options: z.array(z.string()).min(2),
      answer: z.number(),        // index into options
      explanation: z.string(),
    })).optional(),
  }),
})

export const collections = { blog, lessons }
