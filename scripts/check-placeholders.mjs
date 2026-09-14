import { getPlaceholderReport } from '../src/utils/placeholders.js'

const report = getPlaceholderReport()

if (report.length === 0) {
  console.log('No placeholders remaining — event data is ready for production.')
  process.exit(0)
}

console.log(`${report.length} placeholder field(s) still need real content:\n`)
report.forEach(({ path, value }) => console.log(`  - ${path}: ${value}`))

if (process.env.STRICT_PLACEHOLDERS === '1') {
  console.log('\nSTRICT_PLACEHOLDERS=1 — failing the build until these are resolved.')
  process.exit(1)
}

console.log('\nRun `npm run build:strict` to fail the build until these are resolved.')
