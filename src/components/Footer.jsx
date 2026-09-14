import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { event, contact } from '../data/eventData.js'

export default function Footer() {
  return (
    <Box
      component="footer"
      className="no-print"
      sx={{ py: 4, backgroundColor: 'grey.900', color: 'grey.400', textAlign: 'center' }}
    >
      <Container maxWidth="md">
        <Typography variant="body2" sx={{ color: 'common.white', fontWeight: 600, mb: 0.5 }}>
          {event.title}
        </Typography>
        <Typography variant="caption">
          {contact.organisation} · {event.displayDate} · {event.venue}
        </Typography>
      </Container>
    </Box>
  )
}
