import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Box from '@mui/material/Box'
import MenuIcon from '@mui/icons-material/Menu'
import EventIcon from '@mui/icons-material/Event'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import { event } from '../data/eventData.js'

const navItems = [
  { label: 'Overview', id: 'overview' },
  { label: 'Objectives', id: 'objectives' },
  { label: 'Agenda', id: 'agenda' },
  { label: 'Facilitators', id: 'facilitators' },
  { label: 'Participants', id: 'participants' },
  { label: 'Logistics', id: 'logistics' },
  { label: 'Contact', id: 'contact' },
]

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))

  const handleNavClick = (id) => {
    setDrawerOpen(false)
    scrollTo(id)
  }

  return (
    <>
      <Box
        component="a"
        href="#main-content"
        className="no-print"
        sx={{
          position: 'absolute',
          left: 8,
          top: -48,
          zIndex: (t) => t.zIndex.appBar + 1,
          px: 2,
          py: 1,
          backgroundColor: 'primary.main',
          color: 'common.white',
          borderRadius: 1,
          transition: 'top 0.15s ease',
          '&:focus-visible': {
            top: 8,
            outline: '2px solid',
            outlineColor: 'common.white',
            outlineOffset: 2,
          },
        }}
      >
        Skip to main content
      </Box>
      <AppBar
        position="sticky"
        color="inherit"
        elevation={1}
        className="no-print"
        sx={{ backgroundColor: 'rgba(255,255,255,0.9)' }}
      >
        <Toolbar sx={{ maxWidth: 1200, width: '100%', mx: 'auto' }}>
          <EventIcon color="primary" sx={{ mr: 1 }} aria-hidden="true" />
          <Typography
            variant="h6"
            component="a"
            href="#hero"
            aria-label={`${event.title} — back to top`}
            sx={{
              flexGrow: 1,
              fontWeight: 700,
              color: 'text.primary',
              textDecoration: 'none',
              '&:focus-visible': {
                outline: (t) => `2px solid ${t.palette.primary.main}`,
                outlineOffset: 2,
              },
            }}
            onClick={(e) => {
              e.preventDefault()
              scrollTo('hero')
            }}
          >
            {event.title}
          </Typography>

          {isDesktop ? (
            <Box component="nav" aria-label="Main navigation" sx={{ display: 'flex', gap: 1 }}>
              {navItems.map((item) => (
                <Button key={item.id} color="inherit" onClick={() => handleNavClick(item.id)}>
                  {item.label}
                </Button>
              ))}
            </Box>
          ) : (
            <IconButton edge="end" onClick={() => setDrawerOpen(true)} aria-label="Open navigation menu">
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        className="no-print"
        ModalProps={{ keepMounted: true }}
      >
        <Box sx={{ width: 260 }} role="presentation">
          <List component="nav" aria-label="Main navigation">
            {navItems.map((item) => (
              <ListItem key={item.id} disablePadding>
                <ListItemButton onClick={() => handleNavClick(item.id)}>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  )
}
