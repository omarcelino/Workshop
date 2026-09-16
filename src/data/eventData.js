// ---------------------------------------------------------------------------
// SINGLE SOURCE OF TRUTH for all workshop content.
// Replace the [PLACEHOLDER] values below with real event details.
// Every component reads from this file — nothing is hard-coded in the UI.
// ---------------------------------------------------------------------------

// Design tokens — the single source of truth for the site's colour system.
// theme.js builds the MUI palette from these, and the Hero/CrossFunctional
// gradients reference them directly, so changing a brand colour here updates
// the entire site consistently.
export const theme = {
  primaryColor: '#4F46E5', // Indigo — dominant brand accent: buttons, CTAs, nav
  primaryDark: '#3730A3',
  primaryLight: '#818CF8',
  accentColor: '#0D9488', // Teal — journey/workshop highlight accent
  accentDark: '#0F766E',
  navyColor: '#172554', // Deep Navy — headings, strong visual elements
  navyDark: '#0B1229',
  amberColor: '#F59E0B', // Warm Amber — dates, important highlights, attention elements
  amberDark: '#B45309',
  lavenderColor: '#EEF2FF', // Soft Lavender — subtle section backgrounds
  lavenderDark: '#E0E7FF',
  backgroundColor: '#F8FAFC', // Off-white — main page background
  textColor: '#172554', // Headings/body ink — matches navy for a cohesive, high-contrast hierarchy
  mutedTextColor: '#475569', // Slate — secondary/muted text
  infoColor: '#0369A1',
  infoDark: '#075985',
  successColor: '#15803D',
  successDark: '#166534',
  errorColor: '#DC2626',
  errorDark: '#B91C1C',
}

// True for any field still holding a bracketed placeholder (e.g. '[TO CONFIRM]').
export function isPlaceholder(value) {
  return !value || /^\[.*\]$/.test(value)
}

export const event = {
  title: 'Customer Journey Mapping (CJM) Workshop',
  tagline: 'Turn Customer Interactions Into Memorable Experiences.',
  hashtag: '#WeMove',
  description:
    'A full-day, cross-functional workshop bringing together 15 participants from 15 business functions to map the end-to-end customer journey, surface pain points, and align on improvement priorities.',
  date: '2026-09-18', // Friday, 18 September 2026 (ISO format used by the countdown timer)
  displayDate: 'Friday, 18 September 2026',
  startTime: '08:15', // Confirmed via participant comms: arrival 8:00am, start 8:15am
  endTime: '16:30', // [TO CONFIRM — end time not stated in confirmed comms yet]
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
    'To establish a shared macro view of the customer journey, identify the moments that matter most, expose customer pain points and operational friction, and surface the cross-functional dependencies needed to act on them.',
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
  fallbackEmail: '[TO CONFIRM — e.g. jane.doe@company.com]',
}

// Confirmed via participant communications ahead of the workshop.
export const objectives = [
  {
    icon: 'TrackChanges',
    title: 'Establish a Shared Customer Journey',
    description: 'Establish a version of the macro customer journey, including digital and physical touchpoints.',
  },
  {
    icon: 'Insights',
    title: 'Identify Moments That Matter',
    description: 'Pinpoint the moments that disproportionately influence customer and business value.',
  },
  {
    icon: 'ReportProblem',
    title: 'Expose Pain Points & Friction',
    description: 'Move beyond "customers are unhappy" to understand where, why, and how the experience breaks down.',
  },
  {
    icon: 'Groups',
    title: 'Surface Cross-Functional Dependencies',
    description: 'Connect customer problems to the internal functions responsible for solving them.',
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
    name: 'John Doe', // [TO CONFIRM — name pending]
    role: 'Workshop Lead',
    organisation: '[TO CONFIRM]',
    bio: 'Leads the design and facilitation of the CJM workshop.', // [DRAFT — please confirm wording]
    responsibility: '[TO CONFIRM — e.g. Overall facilitation & agenda delivery]',
    photo: '',
  },
  {
    name: 'Jane Doe', // [TO CONFIRM — name pending]
    role: 'Stakeholder Coordination',
    organisation: '[TO CONFIRM]',
    bio: 'Coordinates stakeholder engagement across the 15 participating business functions.', // [DRAFT — please confirm wording]
    responsibility: '[TO CONFIRM — e.g. Stakeholder liaison & logistics]',
    photo: '',
  },
]

export const participants = {
  whoShouldAttend: `One representative from each of the 15 business functions: ${businessFunctions.join(', ')}.`,
  expectedNumber: '15',
  preparation: [
    'Bring a can-do, curious attitude — this is a full-day, experiential and practical session.',
    'Come loaded with operational datapoints from your function.',
    'Collaboration is the name of the game — be ready to work as a cross-functional team.',
  ],
  // What data/examples to bring, how long preparation should take, and any
  // required materials — displayed in the "Before the Workshop" section.
  dataToBring: 'Operational datapoints from your function — real examples of customer touchpoints, pain points, and friction.',
  effort: '[TO CONFIRM — e.g. approx. 30 minutes]',
  materials: ['[TO CONFIRM]'],
}

// Concrete, tangible outcomes participants leave the workshop with.
export const outcomes = [
  {
    icon: 'Map',
    title: 'A Shared Current-State Journey Map',
    description: 'One agreed, end-to-end view of the customer journey that every function recognises and can point to.',
  },
  {
    icon: 'ReportProblem',
    title: 'Identified Customer Pain Points',
    description: 'A documented list of the friction points customers experience today, in their own words.',
  },
  {
    icon: 'Groups',
    title: 'Identified Cross-Functional Gaps',
    description: 'Clarity on where handoffs between teams break down or duplicate effort.',
  },
  {
    icon: 'LowPriority',
    title: 'Prioritised Improvement Opportunities',
    description: 'A ranked shortlist of the changes that would improve the journey most.',
  },
  {
    icon: 'Handshake',
    title: 'Agreed Next Actions',
    description: 'Concrete next steps the group has committed to, not just ideas on a wall.',
  },
  {
    icon: 'AssignmentInd',
    title: 'Clear Ownership for Priority Actions',
    description: 'A named owner and rough timeline for each priority action.',
  },
]

// Shared working principles for how the room operates on the day.
export const workingPrinciples = [
  'Customer perspective first',
  'Evidence over assumptions',
  'Everyone contributes',
  'Surface problems before jumping to solutions',
  'Focus on actionable improvements',
  'Cross-functional collaboration',
  'Leave with clear ownership',
]

export const logistics = {
  venue: 'Dusit Princess',
  arrival: 'Arrival at 8:00 a.m., with the session starting promptly at 8:15 a.m.',
  parking: '[TO CONFIRM — parking or transport information]',
  catering: '[TO CONFIRM — catering details]',
  whatToBring: ['[TO CONFIRM]', '[TO CONFIRM]', '[TO CONFIRM]'],
  contactPerson: 'Jane Doe', // [TO CONFIRM — name pending]
}

export const importantInformation = [
  '[TO CONFIRM — e.g. confirm attendance by a specific date.]',
  '[TO CONFIRM — e.g. dress code or venue access instructions.]',
  '[TO CONFIRM — e.g. cancellation policy.]',
]

export const contact = {
  organiser: 'John Doe', // [TO CONFIRM — name pending]
  organisation: 'Spiro', // Confirmed via participant comms (workshop cover slide)
  secondaryContact: 'Jane Doe (Stakeholder Coordination)', // [TO CONFIRM — name pending]
  email: '[TO CONFIRM]',
  phone: '[TO CONFIRM]',
  social: {
    linkedin: '',
    twitter: '',
    website: '',
  },
}
