// Turns in-text "Control B.1" references into links to that control's article.
//
// The ITGC posts cross-reference each other constantly but only in prose, so the
// series had almost no internal linking. This rewrites those mentions at build
// time. It deliberately skips references whose target post has not published yet
// (the series is scheduled into 2027) so we never emit a link to a 404, as more
// posts go live, more of these mentions light up on their own.

import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

const BLOG_DIR = join(process.cwd(), 'src', 'content', 'blog')

// Groups D, E and F are the same control themes applied to Finance, Payroll/HR
// and Key Business apps, so one article covers up to three refs.
const DEF_REFS = {
  'itgc-def-app-authentication': ['D.1', 'E.1', 'F.1'],
  'itgc-def-new-user-access': ['D.2', 'E.2', 'F.2'],
  'itgc-def-segregation-of-duties': ['D.3', 'E.3', 'F.3'],
  'itgc-def-termination': ['D.4', 'E.4', 'F.4'],
  'itgc-def-generic-accounts': ['D.5', 'E.6', 'F.5'],
  'itgc-def-privileged-access': ['D.6', 'E.7', 'F.6'],
  'itgc-def-database-access': ['D.7', 'E.8', 'F.7'],
  'itgc-def-batch-processing': ['D.8'],
  'itgc-def-access-reviews': ['D.9', 'E.5', 'F.8'],
}

function buildIndex() {
  const index = new Map() // "B.1" -> slug
  const today = new Date()
  today.setHours(23, 59, 59, 999)

  for (const file of readdirSync(BLOG_DIR)) {
    if (!file.startsWith('itgc-') || !file.endsWith('.md')) continue
    const slug = file.replace(/\.md$/, '')

    const src = readFileSync(join(BLOG_DIR, file), 'utf8')
    const pub = src.match(/^pubDate:\s*(\S+)/m)
    if (!pub) continue
    if (new Date(pub[1]) > today) continue // not published yet, do not link
    if (/^draft:\s*true/m.test(src)) continue

    const refs = DEF_REFS[slug] || (() => {
      const m = slug.match(/^itgc-([a-i])(\d+)-/)
      return m ? [`${m[1].toUpperCase()}.${m[2]}`] : []
    })()

    for (const ref of refs) index.set(ref, slug)
  }
  return index
}

const PATTERN = /\bControl\s+([A-I]\.\d+)\b/g

export default function remarkControlLinks() {
  const index = buildIndex()

  return (tree, file) => {
    const currentSlug = String(file.history?.[0] || file.path || '')
      .split(/[\\/]/).pop()?.replace(/\.md$/, '') || ''

    const walk = (node, parent) => {
      if (!node || typeof node !== 'object') return

      if (node.type === 'text' && parent && parent.type !== 'link' && Array.isArray(parent.children)) {
        const value = node.value
        PATTERN.lastIndex = 0
        if (!PATTERN.test(value)) return
        PATTERN.lastIndex = 0

        const out = []
        let last = 0
        let m
        while ((m = PATTERN.exec(value)) !== null) {
          const slug = index.get(m[1])
          // Skip unpublished targets and self-references, leave the text as-is.
          if (!slug || slug === currentSlug) continue
          if (m.index > last) out.push({ type: 'text', value: value.slice(last, m.index) })
          out.push({
            type: 'link',
            url: `/blog/${slug}/`,
            children: [{ type: 'text', value: m[0] }],
          })
          last = m.index + m[0].length
        }
        if (!out.length) return
        if (last < value.length) out.push({ type: 'text', value: value.slice(last) })

        const i = parent.children.indexOf(node)
        parent.children.splice(i, 1, ...out)
        return
      }

      if (Array.isArray(node.children)) {
        // Iterate over a copy: splicing above mutates the live array.
        for (const child of [...node.children]) walk(child, node)
      }
    }

    walk(tree, null)
  }
}
