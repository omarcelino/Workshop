import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
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
        <Grid container spacing={3}>
          {objectives.map((obj, index) => {
            const Icon = iconMap[obj.icon] || TrackChangesIcon
            return (
              <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
                <Card
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
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </Box>
  )
}
