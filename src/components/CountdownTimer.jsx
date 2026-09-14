import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { event } from '../data/eventData.js'

// Build an unambiguous ISO-8601 datetime with an explicit UTC offset so the
// countdown target represents the same instant for every viewer, regardless
// of their browser's local timezone. Without the offset, `new Date(...)`
// parses the string as browser-local time, which is wrong for anyone not in
// East Africa Time (EAT, UTC+3).
const target = new Date(`${event.date}T${event.startTime}:00${event.utcOffset}`)

function getRemaining() {
  const diff = target.getTime() - Date.now()
  if (diff <= 0) return null
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)
  return { days, hours, minutes, seconds }
}

const units = [
  { key: 'days', label: 'Days' },
  { key: 'hours', label: 'Hours' },
  { key: 'minutes', label: 'Minutes' },
  { key: 'seconds', label: 'Seconds' },
]

export default function CountdownTimer() {
  const [remaining, setRemaining] = useState(getRemaining)

  useEffect(() => {
    const interval = setInterval(() => setRemaining(getRemaining()), 1000)
    return () => clearInterval(interval)
  }, [])

  if (!remaining) {
    return (
      <Typography variant="h6" sx={{ color: 'common.white', fontWeight: 600 }}>
        The workshop has begun — see you there!
      </Typography>
    )
  }

  return (
    <Box>
      <Stack
        direction="row"
        spacing={{ xs: 1.5, sm: 2.5 }}
        justifyContent="center"
        aria-label={`Countdown to workshop start: ${remaining.days} days, ${remaining.hours} hours, ${remaining.minutes} minutes, ${remaining.seconds} seconds`}
      >
        {units.map((unit) => (
          <Paper
            key={unit.key}
            elevation={0}
            sx={{
              px: { xs: 1.5, sm: 2.5 },
              py: 1.5,
              minWidth: { xs: 64, sm: 84 },
              textAlign: 'center',
              backgroundColor: 'rgba(255,255,255,0.14)',
              backdropFilter: 'blur(6px)',
              border: '1px solid rgba(255,255,255,0.25)',
            }}
          >
            <Typography
              variant="h4"
              sx={{ color: 'common.white', fontWeight: 700, lineHeight: 1 }}
              aria-hidden="true"
            >
              {String(remaining[unit.key]).padStart(2, '0')}
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: 'rgba(255,255,255,0.85)', letterSpacing: 1 }}
              aria-hidden="true"
            >
              {unit.label.toUpperCase()}
            </Typography>
          </Paper>
        ))}
      </Stack>
      <Typography
        variant="caption"
        sx={{ display: 'block', mt: 1.5, color: 'rgba(255,255,255,0.8)' }}
      >
        All times shown in East Africa Time ({event.tzAbbr}, UTC{event.utcOffset})
      </Typography>
    </Box>
  )
}
