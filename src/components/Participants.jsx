import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import PeopleIcon from '@mui/icons-material/People'
import { participants } from '../data/eventData.js'
import SectionHeading from './SectionHeading.jsx'

export default function Participants() {
  return (
    <Box
      id="participants"
      component="section"
      sx={{ py: { xs: 8, md: 10 }, backgroundColor: 'background.default' }}
    >
      <Container maxWidth="lg">
        <SectionHeading eyebrow="Who's Attending" title="Participants" />
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card elevation={2} sx={{ height: '100%', p: 1 }}>
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
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card elevation={2} sx={{ height: '100%', p: 1 }}>
              <CardContent>
                <Typography variant="h6" component="h3" sx={{ fontWeight: 700, mb: 1 }}>
                  Preparation Required
                </Typography>
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
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
