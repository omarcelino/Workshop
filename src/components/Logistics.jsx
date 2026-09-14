import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import PlaceIcon from '@mui/icons-material/Place'
import LoginIcon from '@mui/icons-material/Login'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar'
import RestaurantIcon from '@mui/icons-material/Restaurant'
import BackpackIcon from '@mui/icons-material/Backpack'
import ContactPhoneIcon from '@mui/icons-material/ContactPhone'
import { logistics } from '../data/eventData.js'
import SectionHeading from './SectionHeading.jsx'

const items = [
  { icon: PlaceIcon, title: 'Venue', value: logistics.venue },
  { icon: LoginIcon, title: 'Arrival / Check-in', value: logistics.arrival },
  { icon: DirectionsCarIcon, title: 'Parking & Transport', value: logistics.parking },
  { icon: RestaurantIcon, title: 'Catering', value: logistics.catering },
  { icon: ContactPhoneIcon, title: 'Contact Person', value: logistics.contactPerson },
]

export default function Logistics() {
  return (
    <Box id="logistics" component="section" sx={{ py: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <SectionHeading eyebrow="Practical Details" title="Logistics" />
        <Grid container spacing={3}>
          {items.map((item) => (
            <Grid key={item.title} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card elevation={2} sx={{ height: '100%' }}>
                <CardContent>
                  <Stack direction="row" spacing={2} alignItems="flex-start">
                    <Avatar sx={{ bgcolor: 'primary.main' }}>
                      <item.icon fontSize="small" />
                    </Avatar>
                    <Box>
                      <Typography variant="subtitle1" component="h3" sx={{ fontWeight: 700 }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.value}
                      </Typography>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}

          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
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
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
