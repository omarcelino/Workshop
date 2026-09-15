import { createTheme } from '@mui/material/styles'
import { theme as eventTheme } from './data/eventData.js'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: eventTheme.primaryColor,
      dark: eventTheme.primaryDark,
      light: eventTheme.primaryLight,
      contrastText: '#FFFFFF',
    },
    // Teal: used sparingly for workshop/journey highlights. Its contrastText
    // is a near-black navy rather than white — white-on-teal falls short of
    // WCAG AA for small text (e.g. filled Chips), navy-on-teal clears it.
    secondary: {
      main: eventTheme.accentColor,
      dark: eventTheme.accentDark,
      contrastText: eventTheme.navyDark,
    },
    // Amber: reserved for dates and attention/important-information elements.
    // Its contrastText is navy (not black) so amber surfaces still read as
    // part of the brand system rather than a generic warning colour.
    warning: {
      main: eventTheme.amberColor,
      dark: eventTheme.amberDark,
      contrastText: eventTheme.navyColor,
    },
    info: {
      main: eventTheme.infoColor,
      dark: eventTheme.infoDark,
      contrastText: '#FFFFFF',
    },
    success: {
      main: eventTheme.successColor,
      dark: eventTheme.successDark,
      contrastText: '#FFFFFF',
    },
    error: {
      main: eventTheme.errorColor,
      dark: eventTheme.errorDark,
      contrastText: '#FFFFFF',
    },
    // Custom palette slots (not part of MUI's default intent set) so navy
    // and lavender are first-class design tokens usable anywhere a standard
    // colour is, e.g. `bgcolor: 'navy.main'` or `color: 'lavender.contrastText'`.
    navy: {
      main: eventTheme.navyColor,
      dark: eventTheme.navyDark,
      light: '#1E3A8A',
      contrastText: '#FFFFFF',
    },
    lavender: {
      main: eventTheme.lavenderColor,
      dark: eventTheme.lavenderDark,
      contrastText: eventTheme.navyColor,
    },
    background: {
      default: eventTheme.backgroundColor,
      paper: '#FFFFFF',
    },
    text: {
      primary: eventTheme.textColor,
      secondary: eventTheme.mutedTextColor,
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
        // Design tokens as real CSS custom properties, mirroring the MUI
        // palette above 1:1. Lets any future plain-CSS/non-MUI markup pull
        // from the same colour system instead of re-declaring hex values.
        ':root': {
          '--color-primary': eventTheme.primaryColor,
          '--color-primary-dark': eventTheme.primaryDark,
          '--color-navy': eventTheme.navyColor,
          '--color-teal': eventTheme.accentColor,
          '--color-amber': eventTheme.amberColor,
          '--color-lavender': eventTheme.lavenderColor,
          '--color-background': eventTheme.backgroundColor,
          '--color-text': eventTheme.textColor,
          '--color-text-muted': eventTheme.mutedTextColor,
        },
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
