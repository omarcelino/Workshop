import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import PlaceIcon from '@mui/icons-material/Place'
import DownloadIcon from '@mui/icons-material/Download'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import HowToRegIcon from '@mui/icons-material/HowToReg'
import EventAvailableIcon from '@mui/icons-material/EventAvailable'
import CountdownTimer from './CountdownTimer.jsx'
import { event, rsvp, isPlaceholder, theme as eventTheme } from '../data/eventData.js'
import { googleCalendarUrl, isCalendarDataValid } from '../utils/calendar.js'
import { track } from '../utils/analytics.js'

function rsvpHref() {
  if (!isPlaceholder(rsvp.url)) return rsvp.url
  if (!isPlaceholder(rsvp.fallbackEmail)) return `mailto:${rsvp.fallbackEmail}`
  return null
}

export default function Hero() {
  return (
    <Box
      id="hero"
      component="section"
      aria-label="Workshop introduction"
      className="print-hero"
      sx={{
        position: 'relative',
        background: `linear-gradient(135deg, ${eventTheme.primaryColor} 0%, ${eventTheme.accentColor} 100%)`,
        color: 'common.white',
        pt: { xs: 12, md: 16 },
        pb: { xs: 8, md: 10 },
        px: 2,
        '&::before': {
          content: '""',
          position: 'absolute',
          inset: 0,
          // Subtle scrim to keep white text legible where the gradient
          // shifts toward the lighter accent colour.
          background: 'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.32) 100%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: 'center', position: 'relative' }}>
        <Chip
          label="WORKSHOP"
          sx={{
            mb: 3,
            backgroundColor: 'rgba(255,255,255,0.18)',
            color: 'common.white',
            fontWeight: 700,
            letterSpacing: 1.5,
          }}
        />
        <Typography
          variant="h2"
          component="h1"
          sx={{ fontWeight: 700, mb: 2, fontSize: { xs: '2.1rem', md: '3rem' } }}
        >
          {event.title}
        </Typography>
        <Typography variant="h6" component="p" sx={{ mb: 3, opacity: 0.95, fontWeight: 400 }}>
          {event.tagline}
        </Typography>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          useFlexGap
          sx={{ mb: 1.5 }}
        >
          <Chip
            icon={<CalendarMonthIcon sx={{ color: 'common.white !important' }} />}
            label={event.displayDate}
            sx={{ backgroundColor: 'rgba(255,255,255,0.18)', color: 'common.white', px: 1 }}
          />
          <Chip
            icon={<PlaceIcon sx={{ color: 'common.white !important' }} />}
            label={event.venue}
            sx={{ backgroundColor: 'rgba(255,255,255,0.18)', color: 'common.white', px: 1 }}
          />
        </Stack>

        <Typography
          variant="caption"
          sx={{ display: 'block', mb: 3, opacity: 0.85, letterSpacing: 0.5 }}
        >
          All times are East Africa Time (UTC{event.utcOffset})
        </Typography>

        <Typography variant="body1" sx={{ maxWidth: 640, mx: 'auto', mb: 5, opacity: 0.95 }}>
          {event.description}
        </Typography>

        <Box sx={{ mb: 5 }} className="no-print">
          <CountdownTimer />
        </Box>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent="center"
          className="no-print"
          sx={{ mb: 2 }}
        >
          <Button
            variant="contained"
            size="large"
            startIcon={<HowToRegIcon />}
            component="a"
            href={rsvpHref() ?? undefined}
            disabled={!rsvpHref()}
            target={rsvpHref()?.startsWith('mailto:') ? undefined : '_blank'}
            rel={rsvpHref()?.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
            onClick={() => track('rsvp_click', { source: 'hero' })}
            sx={{
              backgroundColor: 'secondary.main',
              // Dark text on the amber accent for sufficient contrast (white
              // text on secondary.main falls well short of WCAG AA).
              color: 'rgba(0, 0, 0, 0.87)',
              fontWeight: 600,
              '&:hover': { backgroundColor: 'secondary.dark' },
            }}
          >
            {rsvp.label}
          </Button>
          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowDownwardIcon />}
            onClick={() => {
              track('nav_cta_click', { label: 'view_event_plan' })
              document.getElementById('agenda')?.scrollIntoView({ behavior: 'smooth' })
            }}
            sx={{
              backgroundColor: 'common.white',
              color: 'primary.main',
              fontWeight: 600,
              '&:hover': { backgroundColor: 'rgba(255,255,255,0.9)' },
            }}
          >
            View Event Plan
          </Button>
        </Stack>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          justifyContent="center"
          className="no-print"
        >
          {isCalendarDataValid() && (
            <Button
              variant="outlined"
              startIcon={<EventAvailableIcon />}
              onClick={() => {
                track('add_to_calendar_click', { source: 'hero', type: 'google' })
                window.open(googleCalendarUrl(), '_blank', 'noopener,noreferrer')
              }}
              sx={{
                borderColor: 'rgba(255,255,255,0.6)',
                color: 'common.white',
                fontWeight: 600,
                '&:hover': { borderColor: 'common.white', backgroundColor: 'rgba(255,255,255,0.1)' },
              }}
            >
              Add to Calendar
            </Button>
          )}
          <Button
            variant="outlined"
            startIcon={<DownloadIcon />}
            onClick={() => window.print()}
            sx={{
              borderColor: 'rgba(255,255,255,0.6)',
              color: 'common.white',
              fontWeight: 600,
              '&:hover': { borderColor: 'common.white', backgroundColor: 'rgba(255,255,255,0.1)' },
            }}
          >
            Print / Save as PDF
          </Button>
        </Stack>
      </Container>
    </Box>
  )
}
