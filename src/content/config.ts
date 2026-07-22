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
    // Sector a report analyses, drives the industry filter on /reports.
    industry: z.string().optional(),
    // ITGC control reference, e.g. "B.3" or "D.1 · E.1 · F.1", drives /itgc-series.
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
    // Free lessons render statically. Gated ones require an active subscription,
    // see the entitlement note in src/lib/entitlement.ts before changing this.
    gated: z.boolean().default(false),
    control: z.string().optional(),
    // YouTube id for the lesson video. The written lesson doubles as its
    // transcript. Questions live in `quiz` and are asked at the foot of the page.
    videoId: z.string().optional(),

    // ── Certification fields ──────────────────────────────────────────────
    // Present on exam-preparation lessons, absent on the older ITGC lessons.
    // CISA exam domain, 1 to 5. Drives the domain label and study weighting.
    domain: z.number().min(1).max(5).optional(),
    // The professional task the lesson makes you able to perform. Written in
    // the exam's own register, so the lesson has a purpose beyond a topic name.
    taskStatement: z.string().optional(),
    // Measurable objectives, phrased at the cognitive level the exam tests.
    // Mostly apply, analyse and evaluate rather than recall.
    objectives: z.array(z.string()).optional(),
    // The practitioner instinct this topic punishes. Experienced auditors lose
    // marks by answering what they would really do rather than the expected
    // answer, so naming the specific trap is worth more than more coverage.
    trap: z.string().optional(),

    quiz: z.array(z.object({
      question: z.string(),
      options: z.array(z.string()).min(2),
      answer: z.number(),        // index into options
      explanation: z.string(),
      // Why each wrong option is attractive but wrong, parallel to `options`.
      // The entry at the `answer` index is ignored. Distractor reasoning is the
      // highest-value part of certification practice, so it is worth carrying
      // per option rather than folding into one explanation.
      whyWrong: z.array(z.string()).optional(),
    })).optional(),
  }),
})

export const collections = { blog, lessons }
