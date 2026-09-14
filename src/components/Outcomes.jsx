import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import { alpha } from '@mui/material/styles'
import MapIcon from '@mui/icons-material/Map'
import ReportProblemIcon from '@mui/icons-material/ReportProblem'
import GroupsIcon from '@mui/icons-material/Groups'
import LowPriorityIcon from '@mui/icons-material/LowPriority'
import HandshakeIcon from '@mui/icons-material/Handshake'
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd'
import { outcomes } from '../data/eventData.js'
import SectionHeading from './SectionHeading.jsx'

const iconMap = {
  Map: MapIcon,
  ReportProblem: ReportProblemIcon,
  Groups: GroupsIcon,
  LowPriority: LowPriorityIcon,
  Handshake: HandshakeIcon,
  AssignmentInd: AssignmentIndIcon,
}

// Cycle through the theme's existing palette slots so each outcome reads as
// distinct at a glance, without introducing any colours outside the design
// system already configured in theme.js.
const accentColors = ['primary.main', 'secondary.main', 'success.main', 'info.main', 'warning.main', 'error.main']

export default function Outcomes() {
  return (
    <Box
      id="outcomes"
      component="section"
      sx={{ py: { xs: 8, md: 10 }, backgroundColor: (t) => alpha(t.palette.success.main, 0.06) }}
    >
      <Container maxWidth="lg">
        <SectionHeading
          eyebrow="The Payoff"
          title="What You'll Leave With"
          subtitle="Concrete outputs from the day — not just a good conversation."
        />
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: 3,
          }}
        >
          {outcomes.map((outcome, index) => {
            const Icon = iconMap[outcome.icon] || MapIcon
            return (
              <Card
                key={index}
                elevation={2}
                sx={{
                  height: '100%',
                  p: 2,
                  transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                  '&:hover': { transform: 'translateY(-6px)', boxShadow: 6 },
                }}
              >
                <CardContent>
                  <Avatar sx={{ bgcolor: accentColors[index % accentColors.length], width: 52, height: 52, mb: 2 }}>
                    <Icon />
                  </Avatar>
                  <Typography variant="h6" component="h3" sx={{ fontWeight: 700, mb: 1 }}>
                    {outcome.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {outcome.description}
                  </Typography>
                </CardContent>
              </Card>
            )
          })}
        </Box>
      </Container>
    </Box>
  )
}
