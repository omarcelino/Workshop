import { createTheme } from '@mui/material/styles'
import { theme as eventTheme } from './data/eventData.js'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: eventTheme.primaryColor,
    },
    secondary: {
      main: eventTheme.accentColor,
    },
    background: {
      default: '#F8F9FA',
      paper: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
    button: { textTransform: 'none', fontWeight: 500 },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          // Rounded, but not a full pill — keeps buttons feeling like
          // standard Material controls rather than oversized capsules.
          borderRadius: 10,
          paddingLeft: 20,
          paddingRight: 20,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(8px)',
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          // Visible keyboard focus ring for all button-like controls
          // (buttons, icon buttons, chips, list items, tabs, …).
          '&.Mui-focusVisible': {
            outline: `2px solid ${eventTheme.primaryColor}`,
            outlineOffset: 2,
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: 'smooth',
          // Compensates for the sticky AppBar so anchor-scrolled sections
          // (nav clicks, "View Event Plan" CTA) land fully below it instead
          // of being partially hidden underneath.
          scrollPaddingTop: 88,
        },
        // Respect the OS-level reduced-motion setting: kill smooth scroll
        // and card hover transitions for users who've asked for less motion.
        '@media (prefers-reduced-motion: reduce)': {
          'html': { scrollBehavior: 'auto' },
          '*': {
            animationDuration: '0.001ms !important',
            animationIterationCount: '1 !important',
            transitionDuration: '0.001ms !important',
            scrollBehavior: 'auto !important',
          },
        },
        // ---------------------------------------------------------------
        // Print stylesheet: produce a clean, readable, professional
        // printed event programme — no navigation, no interactive chrome,
        // decorative gradients minimised, agenda and key info fully legible.
        // ---------------------------------------------------------------
        '@media print': {
          '.no-print': { display: 'none !important' },
          '@page': { margin: '14mm' },
          html: { scrollBehavior: 'auto' },
          body: {
            backgroundColor: '#fff',
            WebkitPrintColorAdjust: 'exact',
            printColorAdjust: 'exact',
            colorAdjust: 'exact',
          },
          '*': {
            boxShadow: 'none !important',
            textShadow: 'none !important',
          },
          // Hide interactive/decorative chrome entirely.
          '.MuiAppBar-root, .MuiDrawer-root, footer': {
            display: 'none !important',
          },
          // Hero: drop the gradient + scrim so it prints as plain,
          // high-contrast text on white instead of heavy ink coverage.
          '.print-hero': {
            background: 'none !important',
            color: '#000 !important',
            paddingTop: '8mm !important',
            paddingBottom: '4mm !important',
          },
          '.print-hero::before': { display: 'none !important' },
          '.print-hero .MuiChip-root': {
            backgroundColor: '#fff !important',
            color: '#000 !important',
            border: '1px solid #000',
          },
          '.print-hero .MuiChip-icon': { color: '#000 !important' },
          '.print-hero .MuiTypography-root': { color: '#000 !important' },
          // Force the timeline-table view for the agenda and hide the
          // card view, regardless of the viewport width used for print
          // rendering.
          '.agenda-table': { display: 'block !important' },
          '.agenda-cards': { display: 'none !important' },
          '.MuiTableRow-root': { breakInside: 'avoid' },
          '.MuiCard-root': { breakInside: 'avoid' },
          // Avoid clipped section headings/cards across a page break.
          section: { breakInside: 'avoid-page' },
        },
      },
    },
  },
})

export default theme
