import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import PlaceIcon from '@mui/icons-material/Place'
import GroupsIcon from '@mui/icons-material/Groups'
import TrackChangesIcon from '@mui/icons-material/TrackChanges'
import { event } from '../data/eventData.js'
import SectionHeading from './SectionHeading.jsx'

const cards = [
  { icon: CalendarMonthIcon, label: 'Date', value: event.displayDate },
  { icon: AccessTimeIcon, label: 'Start & End Time', value: `${event.startTime} – ${event.endTime}` },
  { icon: PlaceIcon, label: 'Venue', value: event.venue },
  { icon: GroupsIcon, label: 'Expected Participants', value: event.expectedParticipants },
  { icon: TrackChangesIcon, label: 'Workshop Objective', value: event.objective },
]

export default function EventOverview() {
  return (
    <Box
      id="overview"
      component="section"
      sx={{ py: { xs: 8, md: 10 }, backgroundColor: 'background.default' }}
    >
      <Container maxWidth="lg">
        <SectionHeading eyebrow="At a Glance" title="Event Overview" />
        <Grid container spacing={3} justifyContent="center">
          {cards.map((card) => (
            <Grid key={card.label} size={{ xs: 12, sm: 6, md: 4, lg: 2.4 }}>
              <Card
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
                  <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 0.5 }}>
                    {card.label}
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    {card.value}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
