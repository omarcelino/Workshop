import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd'
import { facilitators } from '../data/eventData.js'
import SectionHeading from './SectionHeading.jsx'

function initials(name) {
  return name
    .replace(/[[\]]/g, '')
    .split(' ')
    .map((part) => part[0])
    .filter(Boolean)
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

export default function Facilitators() {
  return (
    <Box id="facilitators" component="section" sx={{ py: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <SectionHeading eyebrow="Meet the Team" title="Speakers & Facilitators" />
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 3,
          }}
        >
          {facilitators.map((person, index) => (
            <Card
              key={index}
              elevation={2}
              sx={{
                height: '100%',
                textAlign: 'center',
                p: 3,
                transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                '&:hover': { transform: 'translateY(-6px)', boxShadow: 6 },
              }}
            >
              <CardContent>
                <Avatar
                  src={person.photo || undefined}
                  alt={person.photo ? person.name : undefined}
                  sx={{
                    width: 88,
                    height: 88,
                    mx: 'auto',
                    mb: 2,
                    bgcolor: 'primary.main',
                    fontSize: '1.5rem',
                    fontWeight: 700,
                  }}
                >
                  {!person.photo && initials(person.name)}
                </Avatar>
                <Typography variant="h6" component="h3" sx={{ fontWeight: 700 }}>
                  {person.name}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  {person.role}
                </Typography>
                <Chip size="small" label={person.organisation} sx={{ mb: 2 }} />
                <Typography variant="body2" color="text.secondary">
                  {person.bio}
                </Typography>
                {person.responsibility && (
                  <>
                    <Divider sx={{ my: 2 }} />
                    <Stack direction="row" spacing={1} alignItems="center" justifyContent="center">
                      <AssignmentIndIcon color="primary" fontSize="small" />
                      <Typography variant="caption" color="text.secondary">
                        {person.responsibility}
                      </Typography>
                    </Stack>
                  </>
                )}
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  )
}
