import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import PriorityHighIcon from '@mui/icons-material/PriorityHigh'
import WarningAmberIcon from '@mui/icons-material/WarningAmber'
import { importantInformation } from '../data/eventData.js'

export default function ImportantInformation() {
  return (
    <Box id="important" component="section" sx={{ py: { xs: 6, md: 8 } }}>
      <Container maxWidth="md">
        <Paper
          elevation={0}
          sx={{
            p: { xs: 3, md: 4 },
            backgroundColor: 'secondary.main',
            color: 'common.white',
          }}
        >
          <Stack direction="row" spacing={1.5} alignItems="center" sx={{ mb: 2 }}>
            <WarningAmberIcon />
            <Typography variant="h6" component="h2" sx={{ fontWeight: 700 }}>
              Important Information
            </Typography>
          </Stack>
          <List dense>
            {importantInformation.map((note, index) => (
              <ListItem key={index} disableGutters>
                <ListItemIcon sx={{ minWidth: 32, color: 'common.white' }}>
                  <PriorityHighIcon fontSize="small" />
                </ListItemIcon>
                <ListItemText primary={note} />
              </ListItem>
            ))}
          </List>
        </Paper>
      </Container>
    </Box>
  )
}
