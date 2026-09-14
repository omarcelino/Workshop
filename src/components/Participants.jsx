import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import PeopleIcon from '@mui/icons-material/People'
import { alpha } from '@mui/material/styles'
import { participants } from '../data/eventData.js'
import SectionHeading from './SectionHeading.jsx'

export default function Participants() {
  return (
    <Box
      id="participants"
      component="section"
      sx={{ py: { xs: 8, md: 10 }, backgroundColor: (t) => alpha(t.palette.info.main, 0.06) }}
    >
      <Container maxWidth="md">
        <SectionHeading eyebrow="Who's Attending" title="Participants" />
        <Card elevation={2} sx={{ p: 1 }}>
          <CardContent>
            <Typography variant="h6" component="h3" sx={{ fontWeight: 700, mb: 1 }}>
              Who Should Attend
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              {participants.whoShouldAttend}
            </Typography>
            <Typography
              variant="body2"
              sx={{ display: 'flex', alignItems: 'center', gap: 1, fontWeight: 600 }}
            >
              <PeopleIcon color="primary" fontSize="small" />
              Expected participants: {participants.expectedNumber}
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </Box>
  )
}
