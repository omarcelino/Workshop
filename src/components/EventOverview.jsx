import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import PlaceIcon from '@mui/icons-material/Place'
import GroupsIcon from '@mui/icons-material/Groups'
import TrackChangesIcon from '@mui/icons-material/TrackChanges'
import EventAvailableIcon from '@mui/icons-material/EventAvailable'
import { alpha } from '@mui/material/styles'
import { event } from '../data/eventData.js'
import { downloadIcs, isCalendarDataValid } from '../utils/calendar.js'
import { directionsUrl } from '../utils/location.js'
import { track } from '../utils/analytics.js'
import SectionHeading from './SectionHeading.jsx'

const cards = [
  {
    icon: CalendarMonthIcon,
    label: 'Date',
    value: event.displayDate,
    action: isCalendarDataValid()
      ? {
          label: 'Add to Calendar',
          icon: EventAvailableIcon,
          onClick: () => {
            track('add_to_calendar_click', { source: 'event_overview', type: 'ics' })
            downloadIcs()
          },
        }
      : null,
  },
  { icon: AccessTimeIcon, label: 'Start & End Time', value: `${event.startTime} – ${event.endTime} ${event.tzAbbr}` },
  {
    icon: PlaceIcon,
    label: 'Venue',
    value: event.venue,
    action: {
      label: 'Get Directions',
      icon: PlaceIcon,
      href: directionsUrl(event.venue),
      onClick: () => track('directions_click', { source: 'event_overview' }),
    },
  },
  { icon: GroupsIcon, label: 'Expected Participants', value: event.expectedParticipants },
  { icon: TrackChangesIcon, label: 'Workshop Objective', value: event.objective },
]

export default function EventOverview() {
  return (
    <Box
      id="overview"
      component="section"
      sx={{ py: { xs: 8, md: 10 }, backgroundColor: (t) => alpha(t.palette.primary.main, 0.06) }}
    >
      <Container maxWidth="lg">
        <SectionHeading eyebrow="At a Glance" title="Event Overview" />
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
            gap: 3,
          }}
        >
          {cards.map((card) => (
            <Card
              key={card.label}
              elevation={2}
              sx={{
                height: '100%',
                textAlign: 'center',
                p: 2,
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                '&:hover': { transform: 'translateY(-6px)', boxShadow: 6 },
              }}
            >
              <CardContent>
                <Avatar
                  sx={{
                    bgcolor: 'primary.main',
                    width: 56,
                    height: 56,
                    mx: 'auto',
                    mb: 2,
                  }}
                >
                  <card.icon />
                </Avatar>
                <Typography variant="subtitle2" component="p" color="text.secondary" sx={{ mb: 0.5 }}>
                  {card.label}
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 600 }}>
                  {card.value}
                </Typography>
                {card.action && (
                  <Button
                    size="small"
                    startIcon={<card.action.icon fontSize="small" />}
                    href={card.action.href}
                    onClick={card.action.onClick}
                    target={card.action.href ? '_blank' : undefined}
                    rel={card.action.href ? 'noopener noreferrer' : undefined}
                    sx={{ mt: 1 }}
                    className="no-print"
                  >
                    {card.action.label}
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  )
}
