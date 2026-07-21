// Fails if the em-dash character (U+2014) appears anywhere in src/.
// Marco does not want it used. Run by `npm run check:dashes`.
import { readdir, readFile } from 'node:fs/promises'
import { join } from 'node:path'

const CHAR = String.fromCharCode(0x2014)
const EXTS = ['.md', '.astro', '.ts', '.js', '.mjs', '.json']

async function walk(dir, acc = []) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    if (e.name.startsWith('.') || e.name === 'node_modules') continue
    const p = join(dir, e.name)
    if (e.isDirectory()) await walk(p, acc)
    else if (EXTS.some(x => e.name.endsWith(x))) acc.push(p)
  }
  return acc
}

const hits = []
for (const p of await walk('src')) {
  const lines = (await readFile(p, 'utf8')).split('\n')
  lines.forEach((l, i) => { if (l.includes(CHAR)) hits.push(`${p}:${i + 1}  ${l.trim().slice(0, 90)}`) })
}

if (hits.length) {
  console.error(`Found ${hits.length} em-dash(es). Use a comma, colon or full stop instead.\n`)
  hits.forEach(h => console.error('  ' + h))
  process.exit(1)
}
console.log('No em-dashes in src/.')
