import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import Chip from '@mui/material/Chip'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ChecklistIcon from '@mui/icons-material/Checklist'
import TopicIcon from '@mui/icons-material/Topic'
import ScheduleIcon from '@mui/icons-material/Schedule'
import Inventory2Icon from '@mui/icons-material/Inventory2'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { participants } from '../data/eventData.js'
import SectionHeading from './SectionHeading.jsx'

export default function Preparation() {
  return (
    <Box id="preparation" component="section" sx={{ py: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg">
        <SectionHeading
          eyebrow="Get Ready"
          title="Before the Workshop"
          subtitle="A few things to prepare so the day is as productive as possible."
        />
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
            gap: 3,
          }}
        >
          <Card elevation={2} sx={{ height: '100%' }}>
            <CardContent>
              <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 1 }}>
                <Avatar sx={{ bgcolor: 'primary.main' }}>
                  <ChecklistIcon fontSize="small" />
                </Avatar>
                <Typography variant="h6" component="h3" sx={{ fontWeight: 700 }}>
                  Preparation Tasks
                </Typography>
              </Stack>
              <List dense>
                {participants.preparation.map((item, index) => (
                  <ListItem key={index} disableGutters>
                    <ListItemIcon sx={{ minWidth: 32 }}>
                      <CheckCircleIcon color="secondary" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>

          <Card elevation={2} sx={{ height: '100%' }}>
            <CardContent>
              <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 1 }}>
                <Avatar sx={{ bgcolor: 'secondary.main' }}>
                  <TopicIcon fontSize="small" />
                </Avatar>
                <Typography variant="h6" component="h3" sx={{ fontWeight: 700 }}>
                  What Data to Bring
                </Typography>
              </Stack>
              <Typography variant="body2" color="text.secondary">
                {participants.dataToBring}
              </Typography>
            </CardContent>
          </Card>

          <Card elevation={2} sx={{ height: '100%' }}>
            <CardContent>
              <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 1 }}>
                <Avatar sx={{ bgcolor: 'info.main' }}>
                  <ScheduleIcon fontSize="small" />
                </Avatar>
                <Typography variant="h6" component="h3" sx={{ fontWeight: 700 }}>
                  Expected Effort
                </Typography>
              </Stack>
              <Typography variant="body2" color="text.secondary">
                {participants.effort}
              </Typography>
            </CardContent>
          </Card>

          <Card elevation={2} sx={{ height: '100%' }}>
            <CardContent>
              <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 1 }}>
                <Avatar sx={{ bgcolor: 'warning.main' }}>
                  <Inventory2Icon fontSize="small" />
                </Avatar>
                <Typography variant="h6" component="h3" sx={{ fontWeight: 700 }}>
                  Materials Needed
                </Typography>
              </Stack>
              <Stack direction="row" flexWrap="wrap" gap={1}>
                {participants.materials.map((item, index) => (
                  <Chip key={index} size="small" label={item} variant="outlined" />
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  )
}
