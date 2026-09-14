// ---------------------------------------------------------------------------
// SINGLE SOURCE OF TRUTH for all workshop content.
// Replace the [PLACEHOLDER] values below with real event details.
// Every component reads from this file — nothing is hard-coded in the UI.
// ---------------------------------------------------------------------------

export const theme = {
  primaryColor: '#1A73E8', // [PRIMARY COLOUR]
  accentColor: '#F9AB00', // [ACCENT COLOUR]
}

export const event = {
  title: '[WORKSHOP TITLE]',
  tagline: '[SHORT ONE-LINE TAGLINE ABOUT THE WORKSHOP]',
  description:
    '[A short 2–3 sentence description of the workshop — what it covers, who it is for, and why it matters.]',
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
  venue: '[VENUE / LOCATION NAME]',
  address: '[FULL VENUE ADDRESS]',
  expectedParticipants: '[NUMBER, e.g. 40–50]',
  objective: '[ONE-SENTENCE PRIMARY OBJECTIVE OF THE WORKSHOP]',
}

export const objectives = [
  {
    icon: 'TrackChanges',
    title: '[Objective 1 Title]',
    description: '[Describe what participants will learn or achieve — Objective 1.]',
  },
  {
    icon: 'Groups',
    title: '[Objective 2 Title]',
    description: '[Describe what participants will learn or achieve — Objective 2.]',
  },
  {
    icon: 'Insights',
    title: '[Objective 3 Title]',
    description: '[Describe what participants will learn or achieve — Objective 3.]',
  },
  {
    icon: 'EmojiObjects',
    title: '[Objective 4 Title]',
    description: '[Describe what participants will learn or achieve — Objective 4.]',
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
    name: '[Facilitator Name 1]',
    role: '[Role / Title]',
    organisation: '[Organisation]',
    bio: '[Short biography — 1–2 sentences on background and expertise.]',
    photo: '',
  },
  {
    name: '[Facilitator Name 2]',
    role: '[Role / Title]',
    organisation: '[Organisation]',
    bio: '[Short biography — 1–2 sentences on background and expertise.]',
    photo: '',
  },
  {
    name: '[Facilitator Name 3]',
    role: '[Role / Title]',
    organisation: '[Organisation]',
    bio: '[Short biography — 1–2 sentences on background and expertise.]',
    photo: '',
  },
]

export const participants = {
  whoShouldAttend: '[Describe the target audience — roles, teams, or experience level.]',
  expectedNumber: '[NUMBER]',
  preparation: [
    '[Any pre-reading or materials to review beforehand]',
    '[Any accounts, tools, or software to install]',
    '[Anything else participants should prepare]',
  ],
}

export const logistics = {
  venue: '[VENUE NAME]',
  arrival: '[Arrival / check-in instructions, e.g. arrive 15 minutes early to register.]',
  parking: '[Parking or public transport information.]',
  catering: '[Catering details — meals, dietary accommodations, etc.]',
  whatToBring: ['[Laptop]', '[Notebook and pen]', '[Any required materials]'],
  contactPerson: '[NAME — LOGISTICS CONTACT]',
}

export const importantInformation = [
  '[Important reminder 1 — e.g. confirm attendance by a specific date.]',
  '[Important reminder 2 — e.g. dress code or venue access instructions.]',
  '[Important reminder 3 — e.g. cancellation policy.]',
]

export const contact = {
  organiser: '[ORGANISER NAME]',
  organisation: '[ORGANISATION NAME]',
  email: '[contact@email.com]',
  phone: '[+254 000 000 000]',
  social: {
    linkedin: '',
    twitter: '',
    website: '',
  },
}
