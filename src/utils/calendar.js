import { event } from '../data/eventData.js'

function compactDateTime(dateStr, timeStr) {
  // event.date: 'YYYY-MM-DD', event.startTime/endTime: 'HH:MM' -> 'YYYYMMDDTHHMM00'
  return `${dateStr.replace(/-/g, '')}T${timeStr.replace(':', '')}00`
}

export function buildIcs() {
  const dtStart = compactDateTime(event.date, event.startTime)
  const dtEnd = compactDateTime(event.date, event.endTime)
  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Workshop Event Plan//EN',
    'BEGIN:VEVENT',
    `UID:workshop-${event.date}@workshop-event-plan`,
    `DTSTART;TZID=${event.timezone}:${dtStart}`,
    `DTEND;TZID=${event.timezone}:${dtEnd}`,
    `SUMMARY:${event.title}`,
    `LOCATION:${event.venue}`,
    `DESCRIPTION:${event.description.replace(/\n/g, '\\n')}`,
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n')
}

export function downloadIcs() {
  const blob = new Blob([buildIcs()], { type: 'text/calendar' })
  const link = document.createElement('a')
  link.href = URL.createObjectURL(blob)
  link.download = 'workshop-event.ics'
  link.click()
  URL.revokeObjectURL(link.href)
}

export function googleCalendarUrl() {
  const dtStart = compactDateTime(event.date, event.startTime)
  const dtEnd = compactDateTime(event.date, event.endTime)
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: event.title,
    dates: `${dtStart}/${dtEnd}`,
    details: event.description,
    location: event.venue,
    ctz: event.timezone,
  })
  return `https://calendar.google.com/calendar/render?${params.toString()}`
}
