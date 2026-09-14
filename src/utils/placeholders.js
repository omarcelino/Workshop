import * as eventData from '../data/eventData.js'

const { isPlaceholder } = eventData

// Every exported dataset that may contain production content. Adding a new
// export to eventData.js? Add it here too so the scanner covers it.
const DATASETS = {
  event: eventData.event,
  rsvp: eventData.rsvp,
  objectives: eventData.objectives,
  outcomes: eventData.outcomes,
  workingPrinciples: eventData.workingPrinciples,
  agenda: eventData.agenda,
  facilitators: eventData.facilitators,
  participants: eventData.participants,
  logistics: eventData.logistics,
  importantInformation: eventData.importantInformation,
  contact: eventData.contact,
}

// Fields that are genuinely optional — an empty string is a valid final
// state (e.g. no photo yet, no social links yet), not incomplete content.
const OPTIONAL_PATH_PATTERNS = [/\.photo$/, /^contact\.social\./]

function isOptionalPath(path) {
  return OPTIONAL_PATH_PATTERNS.some((pattern) => pattern.test(path))
}

function walk(path, value, results) {
  if (typeof value === 'string') {
    if (isPlaceholder(value) && !isOptionalPath(path)) results.push({ path, value })
    return
  }
  if (Array.isArray(value)) {
    value.forEach((item, index) => walk(`${path}[${index}]`, item, results))
    return
  }
  if (value && typeof value === 'object') {
    Object.entries(value).forEach(([key, v]) => walk(`${path}.${key}`, v, results))
  }
}

// Every remaining [TO CONFIRM]-style placeholder across the central event
// data, with a path so it's obvious exactly which field is incomplete.
export function getPlaceholderReport() {
  const results = []
  Object.entries(DATASETS).forEach(([name, value]) => walk(name, value, results))
  return results
}

export function isProductionReady() {
  return getPlaceholderReport().length === 0
}
