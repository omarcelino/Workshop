import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { workingPrinciples } from '../data/eventData.js'
import SectionHeading from './SectionHeading.jsx'

export default function WorkingPrinciples() {
  return (
    <Box id="working-principles" component="section" sx={{ py: { xs: 8, md: 10 }, backgroundColor: 'lavender.main' }}>
      <Container maxWidth="md">
        <SectionHeading
          eyebrow="Ground Rules"
          title="How We'll Work"
          subtitle="The principles that keep the room productive and honest."
        />
        <Stack spacing={1.5}>
          {workingPrinciples.map((principle, index) => (
            <Paper
              key={index}
              elevation={0}
              sx={{
                p: 2,
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                border: '1px solid',
                borderColor: 'divider',
              }}
            >
              <CheckCircleIcon color="success" fontSize="small" />
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                {principle}
              </Typography>
            </Paper>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}
