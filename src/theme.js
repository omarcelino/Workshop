import { createTheme } from '@mui/material/styles'
import { theme as eventTheme } from './data/eventData.js'

// Builds the MUI theme for a given mode ('light' | 'dark'). Brand colours
// (primary/secondary/warning/etc.) keep the same identity hex in both modes
// wherever they're used as a self-contained fill+contrastText pair (buttons,
// avatars, chips); only the handful of slots that get read directly as text
// or icon colour against the page/card background — primary's bare
// `color="primary"` usages, and secondary's "safe accent text" `.dark` slot —
// are swapped for a lighter shade in dark mode so they stay legible against
// a dark surface instead of the light-mode-tuned shade.
export default function getTheme(mode) {
  const isDark = mode === 'dark'

  const theme = createTheme({
    palette: {
      mode,
      primary: {
        main: isDark ? eventTheme.primaryLight : eventTheme.primaryColor,
        dark: isDark ? eventTheme.primaryColor : eventTheme.primaryDark,
        light: isDark ? '#A5B4FC' : eventTheme.primaryLight,
        // Indigo is light enough in dark mode that white text/icons on it
        // fail WCAG AA — navy reads correctly there instead.
        contrastText: isDark ? eventTheme.navyDark : '#FFFFFF',
      },
      // Teal: used sparingly for workshop/journey highlights. `main` stays
      // the exact brand hex in both modes (avatars/chips/buttons); `dark` is
      // a distinct "safe to use as text on the page background" shade that's
      // deliberately darker in light mode and lighter in dark mode.
      secondary: {
        main: eventTheme.accentColor,
        dark: isDark ? '#5EEAD4' : eventTheme.accentDark,
        contrastText: eventTheme.navyDark,
      },
      // Amber: reserved for dates and attention/important-information
      // elements. Deliberately identical in both modes — it's meant to pop
      // the same way regardless of light/dark background.
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
        main: isDark ? '#161F3D' : eventTheme.lavenderColor,
        dark: isDark ? '#1D2A4D' : eventTheme.lavenderDark,
        contrastText: isDark ? eventTheme.backgroundColor : eventTheme.navyColor,
      },
      background: {
        default: isDark ? eventTheme.navyDark : eventTheme.backgroundColor,
        paper: isDark ? '#141B2E' : '#FFFFFF',
      },
      text: {
        primary: isDark ? '#F1F5F9' : eventTheme.textColor,
        secondary: isDark ? '#94A3B8' : eventTheme.mutedTextColor,
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
              outline: `2px solid ${isDark ? eventTheme.primaryLight : eventTheme.primaryColor}`,
              outlineOffset: 2,
            },
          },
        },
      },
      MuiCssBaseline: {
        styleOverrides: {
          // Design tokens as real CSS custom properties, mirroring the MUI
          // palette above 1:1 for the active mode. Lets any future plain-CSS/
          // non-MUI markup pull from the same colour system instead of
          // re-declaring hex values.
          ':root': {
            '--color-primary': isDark ? eventTheme.primaryLight : eventTheme.primaryColor,
            '--color-primary-dark': isDark ? eventTheme.primaryColor : eventTheme.primaryDark,
            '--color-navy': eventTheme.navyColor,
            '--color-teal': eventTheme.accentColor,
            '--color-amber': eventTheme.amberColor,
            '--color-lavender': isDark ? '#161F3D' : eventTheme.lavenderColor,
            '--color-background': isDark ? eventTheme.navyDark : eventTheme.backgroundColor,
            '--color-text': isDark ? '#F1F5F9' : eventTheme.textColor,
            '--color-text-muted': isDark ? '#94A3B8' : eventTheme.mutedTextColor,
          },
          html: {
            scrollBehavior: 'smooth',
            // Compensates for the sticky AppBar so anchor-scrolled sections
            // (nav clicks, "View Event Plan" CTA) land fully below it instead
            // of being partially hidden underneath.
            scrollPaddingTop: 88,
          },
          // Safety net against accidental horizontal page scroll (e.g.
          // sub-pixel rounding at narrow widths) — no content on this page
          // intentionally overflows the viewport horizontally.
          'html, body': {
            overflowX: 'hidden',
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
          // Always prints as the light theme regardless of the on-screen
          // mode: dark-mode card/paper surfaces would otherwise print as
          // heavy dark ink blocks.
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
            // Force every surface back to a plain light/dark-ink print
            // regardless of the on-screen theme mode.
            '.MuiPaper-root': {
              backgroundColor: '#fff !important',
              color: '#000 !important',
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

  return theme
}
