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
import Tooltip from '@mui/material/Tooltip'
import MenuIcon from '@mui/icons-material/Menu'
import EventIcon from '@mui/icons-material/Event'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import useMediaQuery from '@mui/material/useMediaQuery'
import { alpha, useTheme } from '@mui/material/styles'
import { event } from '../data/eventData.js'
import { track } from '../utils/analytics.js'
import { useThemeMode } from '../context/ThemeModeContext.jsx'
import FadeThroughTransition from './FadeThroughTransition.jsx'

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
  // 'lg' (not 'md'): at 900-1199px there isn't room for the long event
  // title plus all 7 nav labels plus the theme toggle in one row — that
  // combination previously wrapped the title to 4 lines and pushed the
  // toggle button off-screen. The compact Drawer nav covers that range.
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'))
  const { mode, toggleMode } = useThemeMode()

  const handleNavClick = (id) => {
    track('nav_cta_click', { label: id })
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
          color: 'primary.contrastText',
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
        sx={{ backgroundColor: (t) => alpha(t.palette.background.paper, 0.9) }}
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
              minWidth: 0,
              fontWeight: 700,
              color: 'text.primary',
              textDecoration: 'none',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
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

          {isDesktop && (
            <Box component="nav" aria-label="Main navigation" sx={{ display: 'flex', gap: 1, flexShrink: 0 }}>
              {navItems.map((item) => (
                <Button key={item.id} color="inherit" onClick={() => handleNavClick(item.id)}>
                  {item.label}
                </Button>
              ))}
            </Box>
          )}

          <Tooltip title={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}>
            <IconButton
              color="inherit"
              onClick={toggleMode}
              aria-label={mode === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              sx={{ ml: 1 }}
            >
              {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Tooltip>

          {!isDesktop && (
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
        TransitionComponent={FadeThroughTransition}
        transitionDuration={{ enter: 250, exit: 200 }}
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
