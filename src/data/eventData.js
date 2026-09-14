// ---------------------------------------------------------------------------
// SINGLE SOURCE OF TRUTH for all workshop content.
// Replace the [PLACEHOLDER] values below with real event details.
// Every component reads from this file — nothing is hard-coded in the UI.
// ---------------------------------------------------------------------------

export const theme = {
  primaryColor: '#1A73E8', // [PRIMARY COLOUR]
  accentColor: '#F9AB00', // [ACCENT COLOUR]
}

// True for any field still holding a bracketed placeholder (e.g. '[TO CONFIRM]').
export function isPlaceholder(value) {
  return !value || /^\[.*\]$/.test(value)
}

export const event = {
  title: 'Customer Journey Mapping (CJM) Workshop',
  tagline: 'Mapping the end-to-end customer journey, together.',
  description:
    'A full-day, cross-functional workshop bringing together 15 participants from 15 business functions to map the end-to-end customer journey, surface pain points, and align on improvement priorities.',
  date: '2026-09-18', // Friday, 18 September 2026 (ISO format used by the countdown timer)
  displayDate: 'Friday, 18 September 2026',
  startTime: '09:00',
  endTime: '16:30',
  // Workshop times are fixed to East Africa Time regardless of viewer's local timezone.
  // utcOffset is used to build an unambiguous ISO datetime (date + startTime + utcOffset)
  // so the countdown timer target is correct for every visitor, everywhere.
  timezone: 'Africa/Nairobi',
  tzAbbr: 'EAT',
  utcOffset: '+03:00',
  venue: 'Dusit Princess',
  address: '[TO CONFIRM — full venue address]',
  expectedParticipants: '15 (cross-functional)',
  objective:
    'To collaboratively map the end-to-end customer journey and agree shared improvement priorities across all customer-facing functions.', // [DRAFT — please confirm wording]
}

// The 15 business functions represented in the workshop.
export const businessFunctions = [
  'Customer Experience',
  'Customer Care / Call Centre',
  'Operations',
  'Battery Operations',
  'Swap Station Operations',
  'Technology / Product',
  'Payments / Finance',
  'Commercial / Sales',
  'Marketing',
  'Field Operations',
  'Data / Analytics',
  'Supply Chain',
  'People / HR',
  'Country Operations',
  'Leadership',
]

// Simplest RSVP option for a static, backend-free site: link out to a form
// rather than embedding one, so the hero layout stays clean on mobile.
export const rsvp = {
  label: 'RSVP Now',
  url: '[TO CONFIRM — Google Form / Tally link]',
  fallbackEmail: '[TO CONFIRM — e.g. ruth.oluoch@company.com]',
}

// [DRAFT — 4 objectives inferred from the CJM workshop brief; please confirm]
export const objectives = [
  {
    icon: 'TrackChanges',
    title: 'Map the Current Journey',
    description: 'Build a shared, end-to-end view of the customer journey as it exists today, across every touchpoint.',
  },
  {
    icon: 'Groups',
    title: 'Align Across Functions',
    description: 'Bring 15 business functions into one room to build a common understanding of the customer experience.',
  },
  {
    icon: 'Insights',
    title: 'Surface Pain Points',
    description: 'Identify friction, gaps, and breakdowns from the customer\'s perspective at each stage of the journey.',
  },
  {
    icon: 'EmojiObjects',
    title: 'Define Next Steps',
    description: 'Agree concrete, owned improvement actions to carry forward after the workshop.',
  },
]

// type controls the Chip colour in the Agenda section:
// 'session' | 'break' | 'lunch' | 'networking' | 'keynote' | 'closing'
export const agenda = [
  {
    time: '[09:00 – 09:30]',
    session: 'Registration & Welcome',
    description: '[Participants arrive, sign in, and receive workshop materials.]',
    facilitator: '[NAME]',
    type: 'session',
  },
  {
    time: '[09:30 – 09:45]',
    session: 'Opening Session',
    description: '[Welcome remarks and overview of the day.]',
    facilitator: '[NAME]',
    type: 'keynote',
  },
  {
    time: '[09:45 – 10:45]',
    session: 'Session 1: [Topic]',
    description: '[Description of session 1 content.]',
    facilitator: '[NAME]',
    type: 'session',
  },
  {
    time: '[10:45 – 11:00]',
    session: 'Break',
    description: 'Refreshments',
    facilitator: '—',
    type: 'break',
  },
  {
    time: '[11:00 – 12:30]',
    session: 'Session 2: [Topic]',
    description: '[Description of session 2 content.]',
    facilitator: '[NAME]',
    type: 'session',
  },
  {
    time: '[12:30 – 13:30]',
    session: 'Lunch',
    description: 'Lunch break',
    facilitator: '—',
    type: 'lunch',
  },
  {
    time: '[13:30 – 15:00]',
    session: 'Session 3: [Topic]',
    description: '[Description of session 3 content.]',
    facilitator: '[NAME]',
    type: 'session',
  },
  {
    time: '[15:00 – 15:15]',
    session: 'Networking Break',
    description: 'Refreshments and informal networking',
    facilitator: '—',
    type: 'networking',
  },
  {
    time: '[15:15 – 16:30]',
    session: 'Closing Session',
    description: 'Key takeaways and next steps',
    facilitator: '[NAME]',
    type: 'closing',
  },
]

export const facilitators = [
  {
    name: 'Rosebella Abok',
    role: 'Workshop Lead',
    organisation: '[TO CONFIRM]',
    bio: 'Leads the design and facilitation of the CJM workshop.', // [DRAFT — please confirm wording]
    photo: '',
  },
  {
    name: 'Ruth Oluoch',
    role: 'Stakeholder Coordination',
    organisation: '[TO CONFIRM]',
    bio: 'Coordinates stakeholder engagement across the 15 participating business functions.', // [DRAFT — please confirm wording]
    photo: '',
  },
]

export const participants = {
  whoShouldAttend: `One representative from each of the 15 business functions: ${businessFunctions.join(', ')}.`,
  expectedNumber: '15',
  preparation: [
    '[TO CONFIRM — any pre-reading or materials to review beforehand]',
    '[TO CONFIRM — any accounts, tools, or software to install]',
    '[TO CONFIRM — anything else participants should prepare]',
  ],
}

export const logistics = {
  venue: 'Dusit Princess',
  arrival: '[TO CONFIRM — arrival / check-in instructions]',
  parking: '[TO CONFIRM — parking or transport information]',
  catering: '[TO CONFIRM — catering details]',
  whatToBring: ['[TO CONFIRM]', '[TO CONFIRM]', '[TO CONFIRM]'],
  contactPerson: 'Ruth Oluoch',
}

export const importantInformation = [
  '[TO CONFIRM — e.g. confirm attendance by a specific date.]',
  '[TO CONFIRM — e.g. dress code or venue access instructions.]',
  '[TO CONFIRM — e.g. cancellation policy.]',
]

export const contact = {
  organiser: 'Rosebella Abok',
  organisation: 'Workshop Lead — Customer Journey Mapping (CJM) Workshop', // [TO CONFIRM — department/company]
  secondaryContact: 'Ruth Oluoch (Stakeholder Coordination)',
  email: '[TO CONFIRM]',
  phone: '[TO CONFIRM]',
  social: {
    linkedin: '',
    twitter: '',
    website: '',
  },
}
