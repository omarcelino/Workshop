import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Chip from '@mui/material/Chip'
import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import PrintIcon from '@mui/icons-material/Print'
import HowToRegIcon from '@mui/icons-material/HowToReg'
import CampaignIcon from '@mui/icons-material/Campaign'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import FreeBreakfastIcon from '@mui/icons-material/FreeBreakfast'
import RestaurantIcon from '@mui/icons-material/Restaurant'
import GroupsIcon from '@mui/icons-material/Groups'
import FlagCircleIcon from '@mui/icons-material/FlagCircle'
import { agenda, event } from '../data/eventData.js'
import SectionHeading from './SectionHeading.jsx'

// Visual language for each session type: chip colour, timeline colour token,
// and a representative Material icon. Keeps colour coding + iconography
// consistent between the desktop table and the mobile card timeline.
const typeMeta = {
  session: { label: 'Session', chipColor: 'primary', colorToken: 'primary.main', icon: MenuBookIcon },
  break: { label: 'Break', chipColor: 'default', colorToken: 'grey.500', icon: FreeBreakfastIcon },
  lunch: { label: 'Lunch', chipColor: 'warning', colorToken: 'warning.main', icon: RestaurantIcon },
  networking: { label: 'Networking', chipColor: 'info', colorToken: 'info.main', icon: GroupsIcon },
  keynote: { label: 'Keynote', chipColor: 'secondary', colorToken: 'secondary.main', icon: CampaignIcon },
  closing: { label: 'Closing', chipColor: 'success', colorToken: 'success.main', icon: FlagCircleIcon },
}

const fallbackMeta = { label: 'Session', chipColor: 'default', colorToken: 'grey.500', icon: HowToRegIcon }

function getMeta(type) {
  return typeMeta[type] || fallbackMeta
}

export default function Agenda() {
  return (
    <Box
      id="agenda"
      component="section"
      sx={{ py: { xs: 8, md: 10 }, backgroundColor: 'background.default' }}
    >
      <Container maxWidth="lg">
        <SectionHeading
          eyebrow="Programme"
          title="Event Agenda"
          subtitle="The full workshop schedule from registration to closing."
        />

        <Stack direction="row" justifyContent="center" sx={{ mb: 4 }} className="no-print">
          <Button variant="outlined" startIcon={<PrintIcon />} onClick={() => window.print()}>
            Print / Download Programme
          </Button>
        </Stack>

        {/* Desktop: timeline-style table with a colour-coded connecting rail */}
        <TableContainer
          component={Paper}
          elevation={2}
          className="agenda-table"
          sx={{ display: { xs: 'none', md: 'block' } }}
        >
          <Table aria-label="Workshop agenda timeline">
            <caption style={{ captionSide: 'top', textAlign: 'left', padding: '8px 16px', fontWeight: 600 }}>
              Full-day schedule — {event.displayDate}, {event.venue}
            </caption>
            <TableHead>
              <TableRow sx={{ backgroundColor: 'primary.main' }}>
                <TableCell component="th" scope="col" sx={{ p: 0, width: 64 }} aria-hidden="true" />
                <TableCell component="th" scope="col" sx={{ color: 'common.white', fontWeight: 700 }}>Time</TableCell>
                <TableCell component="th" scope="col" sx={{ color: 'common.white', fontWeight: 700 }}>Session</TableCell>
                <TableCell component="th" scope="col" sx={{ color: 'common.white', fontWeight: 700 }}>Description</TableCell>
                <TableCell component="th" scope="col" sx={{ color: 'common.white', fontWeight: 700 }}>Facilitator</TableCell>
                <TableCell component="th" scope="col" sx={{ color: 'common.white', fontWeight: 700 }}>Type</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {agenda.map((item, index) => {
                const meta = getMeta(item.type)
                const Icon = meta.icon
                const isFirst = index === 0
                const isLast = index === agenda.length - 1
                return (
                  <TableRow
                    key={index}
                    hover
                    sx={{ '&:nth-of-type(odd)': { backgroundColor: 'action.hover' } }}
                  >
                    <TableCell sx={{ position: 'relative', p: 0, width: 64, textAlign: 'center' }}>
                      <Box
                        aria-hidden="true"
                        sx={{
                          position: 'absolute',
                          left: '50%',
                          top: isFirst ? '50%' : 0,
                          bottom: isLast ? '50%' : 0,
                          width: 3,
                          transform: 'translateX(-50%)',
                          backgroundColor: meta.colorToken,
                          opacity: 0.35,
                        }}
                      />
                      <Avatar
                        sx={{
                          width: 32,
                          height: 32,
                          mx: 'auto',
                          my: 1.75,
                          bgcolor: meta.colorToken,
                          position: 'relative',
                          border: '2px solid',
                          borderColor: 'background.paper',
                        }}
                      >
                        <Icon sx={{ fontSize: 18, color: 'common.white' }} aria-hidden="true" />
                      </Avatar>
                    </TableCell>
                    <TableCell sx={{ fontWeight: 600, whiteSpace: 'nowrap' }}>{item.time}</TableCell>
                    <TableCell sx={{ fontWeight: 600 }}>{item.session}</TableCell>
                    <TableCell>{item.description}</TableCell>
                    <TableCell>{item.facilitator}</TableCell>
                    <TableCell>
                      <Chip size="small" label={meta.label} color={meta.chipColor} />
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Mobile: cards with a matching timeline rail down the left edge */}
        <Stack spacing={0} className="agenda-cards" sx={{ display: { xs: 'flex', md: 'none' } }}>
          {agenda.map((item, index) => {
            const meta = getMeta(item.type)
            const Icon = meta.icon
            const isFirst = index === 0
            const isLast = index === agenda.length - 1
            return (
              <Box key={index} sx={{ display: 'flex', gap: 2 }}>
                <Box
                  aria-hidden="true"
                  sx={{ width: 40, display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}
                >
                  <Box
                    sx={{
                      width: 3,
                      flexGrow: 1,
                      backgroundColor: meta.colorToken,
                      opacity: isFirst ? 0 : 0.35,
                    }}
                  />
                  <Avatar sx={{ width: 36, height: 36, bgcolor: meta.colorToken, my: 0.5, flexShrink: 0 }}>
                    <Icon sx={{ fontSize: 20, color: 'common.white' }} />
                  </Avatar>
                  <Box
                    sx={{
                      width: 3,
                      flexGrow: 1,
                      backgroundColor: meta.colorToken,
                      opacity: isLast ? 0 : 0.35,
                    }}
                  />
                </Box>
                <Card
                  elevation={2}
                  sx={{
                    flex: 1,
                    mb: 2,
                    mt: 0.5,
                    borderLeft: 4,
                    borderColor: meta.colorToken,
                  }}
                >
                  <CardContent>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                      sx={{ mb: 1 }}
                    >
                      <Typography variant="subtitle2" color="primary.main" sx={{ fontWeight: 700 }}>
                        {item.time}
                      </Typography>
                      <Chip size="small" label={meta.label} color={meta.chipColor} />
                    </Stack>
                    <Typography variant="h6" component="h3" sx={{ fontWeight: 700, mb: 0.5 }}>
                      {item.session}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                      {item.description}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Facilitator: {item.facilitator}
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            )
          })}
        </Stack>
      </Container>
    </Box>
  )
}
