import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import ApartmentIcon from '@mui/icons-material/Apartment'
import { businessFunctions, theme as eventTheme } from '../data/eventData.js'

export default function CrossFunctional() {
  return (
    <Box id="cross-functional" component="section" sx={{ py: { xs: 8, md: 10 } }}>
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Box
          sx={{
            position: 'relative',
            display: 'inline-block',
            px: { xs: 3, md: 5 },
            py: { xs: 3, md: 4 },
            mb: 4,
            borderRadius: 4,
            overflow: 'hidden',
            background: `linear-gradient(135deg, ${eventTheme.navyColor} 0%, ${eventTheme.primaryColor} 55%, ${eventTheme.accentColor} 100%)`,
            color: 'common.white',
            '&::before': {
              content: '""',
              position: 'absolute',
              inset: 0,
              // Scrim so white text stays legible where the gradient
              // shifts toward the lighter accent colour (same technique
              // as the Hero section).
              background: 'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.32) 100%)',
              pointerEvents: 'none',
            },
            '& > *': { position: 'relative' },
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            sx={{ fontWeight: 700, fontSize: { xs: '1.6rem', md: '2.2rem' } }}
          >
            15 Functions. 15 Perspectives.
            <br />
            One Customer Journey.
          </Typography>
        </Box>
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 640, mx: 'auto', mb: 4 }}>
          This is a genuinely cross-functional workshop — every participating business function is represented in
          the room.
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, justifyContent: 'center' }}>
          {businessFunctions.map((fn) => (
            <Chip key={fn} icon={<ApartmentIcon />} label={fn} color="primary" variant="outlined" sx={{ px: 0.5 }} />
          ))}
        </Box>
      </Container>
    </Box>
  )
}
