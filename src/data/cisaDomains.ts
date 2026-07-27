// Single source of truth for the CISA course structure, shared by the Courses
// catalogue (/training), the per-domain pages (/training/domain-N) and the
// per-domain exams. `planned` is the full lesson count allocated by exam weight;
// a domain lights up as soon as it has lessons and shows "X of Y" until complete.
import type { CollectionEntry } from 'astro:content'

export interface DomainMeta {
  n: number
  title: string
  weight: number
  planned: number
  blurb: string
  topics: string[]
}

export const DOMAIN_META: DomainMeta[] = [
  {
    n: 1,
    title: 'Information Systems Auditing Process',
    weight: 18, planned: 12,
    blurb: 'Standards, planning, evidence, sampling and reporting. The domain that decides how you approach every other one.',
    topics: [],
  },
  {
    n: 2,
    title: 'Governance and Management of IT',
    weight: 18, planned: 11,
    blurb: 'How the organisation directs and controls IT, and what an auditor looks for when it does not.',
    topics: [
      'IT governance frameworks and the board’s role',
      'IT strategy and business alignment',
      'Policies, standards, procedures and organisational structure',
      'Enterprise architecture',
      'IT risk management, appetite and response',
      'Third party management, SLAs and right to audit',
      'Performance measurement and the IT balanced scorecard',
      'Laws, regulations and compliance management',
    ],
  },
  {
    n: 3,
    title: 'IS Acquisition, Development and Implementation',
    weight: 12, planned: 7,
    blurb: 'Project governance and the controls that decide whether a new system arrives trustworthy. The smallest domain.',
    topics: [
      'Project governance, business case and feasibility',
      'SDLC models and development controls',
      'Testing levels, from unit to user acceptance',
      'Data conversion and migration controls',
      'Implementation strategies and post-implementation review',
      'Application controls: input, processing, output',
    ],
  },
  {
    n: 4,
    title: 'IS Operations and Business Resilience',
    weight: 26, planned: 15,
    blurb: 'Running IT day to day and surviving when it breaks. Joint largest domain on the exam.',
    topics: [
      'Service management, incident and problem management',
      'Change, release, configuration and patch management',
      'Capacity, performance and database management',
      'Backup, restoration and media handling',
      'Business impact analysis, RPO and RTO',
      'Continuity and disaster recovery, including test types',
    ],
  },
  {
    n: 5,
    title: 'Protection of Information Assets',
    weight: 26, planned: 16,
    blurb: 'Security controls and the evidence that shows they work. Joint largest domain on the exam.',
    topics: [
      'Security governance, classification and asset ownership',
      'Identity and access management, including privileged access',
      'Network architecture, segmentation and monitoring',
      'Cryptography, PKI and key management',
      'Endpoint, mobile and cloud security',
      'Testing, monitoring, forensics and evidence handling',
    ],
  },
]

// Certifications beyond CISA, shown on the catalogue as the next courses. Kept
// here so adding CRISC lessons later is a data change, not a page rewrite.
export interface CertMeta {
  code: string
  name: string
  blurb: string
}
export const OTHER_CERTS: CertMeta[] = [
  { code: 'CRISC', name: 'Risk and Information Systems Control', blurb: 'IT risk identification, assessment, response and monitoring.' },
  { code: 'CISM', name: 'Information Security Manager', blurb: 'Governing and running an information security programme.' },
  { code: 'CGEIT', name: 'Governance of Enterprise IT', blurb: 'Enterprise governance of IT at board and executive level.' },
]

type Lesson = CollectionEntry<'lessons'>

export interface Domain extends DomainMeta {
  lessons: Lesson[]
  built: number
  ready: boolean
  complete: boolean
  quizCount: number
  minutes: number
}

// Fold the built lessons into each domain, so `ready` and the counts are always
// derived from the content, never hand-maintained.
export function buildDomains(all: Lesson[]): Domain[] {
  return DOMAIN_META.map(meta => {
    const lessons = all
      .filter(l => l.data.course === `cisa-domain-${meta.n}`)
      .sort((a, b) => a.data.order - b.data.order)
    return {
      ...meta,
      lessons,
      built: lessons.length,
      ready: lessons.length > 0,
      complete: lessons.length >= meta.planned,
      quizCount: lessons.reduce((s, l) => s + (l.data.quiz?.length || 0), 0),
      minutes: lessons.reduce((s, l) => s + l.data.minutes, 0),
    }
  })
}

// The practice exam currently only covers Domain 1.
export const EXAM_DOMAIN = 1
export const examHref = (n: number) => (n === 1 ? '/training/exam/' : `/training/exam/domain-${n}/`)
// A subfolder route (/training/domain/N) rather than /training/domain-N, so it
// can never collide with the /training/<lesson-slug> catch-all.
export const domainHref = (n: number) => `/training/domain/${n}/`
