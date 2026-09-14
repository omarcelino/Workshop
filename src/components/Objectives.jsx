import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import TrackChangesIcon from '@mui/icons-material/TrackChanges'
import GroupsIcon from '@mui/icons-material/Groups'
import InsightsIcon from '@mui/icons-material/Insights'
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects'
import { objectives } from '../data/eventData.js'
import SectionHeading from './SectionHeading.jsx'

const iconMap = {
  TrackChanges: TrackChangesIcon,
  Groups: GroupsIcon,
  Insights: InsightsIcon,
  EmojiObjects: EmojiObjectsIcon,
}

export default function Objectives() {
  return (
    <Box id="objectives" component="section" sx={{ py: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <SectionHeading
          eyebrow="Goals"
          title="Workshop Objectives"
          subtitle="What participants should achieve by the end of the workshop."
        />
        <Box
          sx={{
            display: 'grid',
            // Fixed breakpoints (not auto-fit) so 4 cards always land as a
            // clean 2x2 or 4x1 — auto-fit's column count depends on exact
            // pixel width and can leave the 4th card orphaned on a 3+1 split.
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
            gap: 3,
          }}
        >
          {objectives.map((obj, index) => {
            const Icon = iconMap[obj.icon] || TrackChangesIcon
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
                  <Avatar sx={{ bgcolor: 'secondary.main', width: 52, height: 52, mb: 2 }}>
                    <Icon />
                  </Avatar>
                  <Typography variant="h6" component="h3" sx={{ fontWeight: 700, mb: 1 }}>
                    {obj.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {obj.description}
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
