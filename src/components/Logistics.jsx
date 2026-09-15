import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import PlaceIcon from '@mui/icons-material/Place'
import LoginIcon from '@mui/icons-material/Login'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar'
import RestaurantIcon from '@mui/icons-material/Restaurant'
import BackpackIcon from '@mui/icons-material/Backpack'
import ContactPhoneIcon from '@mui/icons-material/ContactPhone'
import { event, logistics } from '../data/eventData.js'
import { directionsUrl } from '../utils/location.js'
import SectionHeading from './SectionHeading.jsx'

const items = [
  { icon: CalendarMonthIcon, title: 'Date', value: event.displayDate },
  { icon: AccessTimeIcon, title: 'Time', value: `${event.startTime} – ${event.endTime} ${event.tzAbbr}` },
  {
    icon: PlaceIcon,
    title: 'Venue',
    value: logistics.venue,
    action: { label: 'Get Directions', href: directionsUrl(logistics.venue) },
  },
  { icon: LoginIcon, title: 'Arrival / Check-in', value: logistics.arrival },
  { icon: DirectionsCarIcon, title: 'Parking & Transport', value: logistics.parking },
  { icon: RestaurantIcon, title: 'Catering', value: logistics.catering },
  { icon: ContactPhoneIcon, title: 'Contact Person', value: logistics.contactPerson },
]

export default function Logistics() {
  return (
    <Box
      id="logistics"
      component="section"
      sx={{ py: { xs: 8, md: 10 } }}
    >
      <Container maxWidth="lg">
        <SectionHeading eyebrow="Practical Details" title="Logistics" />
        <Box
          sx={{
            display: 'grid',
            // Fixed breakpoints (not auto-fit): 8 cards total, so this is
            // always a clean 2x4 (sm) or 4x2 (md+) — never a partial row.
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
            gap: 3,
          }}
        >
          {items.map((item) => (
            <Card key={item.title} elevation={2} sx={{ height: '100%' }}>
              <CardContent>
                <Stack direction="row" spacing={2} alignItems="flex-start">
                  <Avatar
                    sx={{
                      // Date gets the amber accent, matching Event Overview —
                      // keeps the workshop date visually consistent wherever
                      // it's repeated across the page.
                      bgcolor: item.title === 'Date' ? 'warning.main' : 'primary.main',
                      color: item.title === 'Date' ? 'warning.contrastText' : undefined,
                    }}
                  >
                    <item.icon fontSize="small" />
                  </Avatar>
                  <Box>
                    <Typography variant="subtitle1" component="h3" sx={{ fontWeight: 700 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.value}
                    </Typography>
                    {item.action && (
                      <Button
                        size="small"
                        href={item.action.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="no-print"
                        sx={{ mt: 0.5, px: 0 }}
                      >
                        {item.action.label}
                      </Button>
                    )}
                  </Box>
                </Stack>
              </CardContent>
            </Card>
          ))}

          <Card elevation={2} sx={{ height: '100%' }}>
            <CardContent>
              <Stack direction="row" spacing={2} alignItems="flex-start">
                <Avatar sx={{ bgcolor: 'secondary.main' }}>
                  <BackpackIcon fontSize="small" />
                </Avatar>
                <Box>
                  <Typography variant="subtitle1" component="h3" sx={{ fontWeight: 700, mb: 1 }}>
                    What to Bring
                  </Typography>
                  <Stack direction="row" flexWrap="wrap" gap={1}>
                    {logistics.whatToBring.map((thing, index) => (
                      <Chip key={index} size="small" label={thing} variant="outlined" />
                    ))}
                  </Stack>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  )
}
