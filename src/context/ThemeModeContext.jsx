import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import getTheme from '../theme.js'
import { theme as eventTheme } from '../data/eventData.js'

const STORAGE_KEY = 'cjm-workshop-theme-mode'

const ThemeModeContext = createContext(null)

function getInitialMode() {
  if (typeof window === 'undefined') return 'light'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'light' || stored === 'dark') return stored
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export function ThemeModeProvider({ children }) {
  const [mode, setMode] = useState(getInitialMode)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, mode)
    // Keep the mobile browser chrome (address bar colour) in sync with
    // whichever mode is active.
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', mode === 'dark' ? eventTheme.navyDark : eventTheme.primaryColor)
  }, [mode])

  const theme = useMemo(() => getTheme(mode), [mode])

  const value = useMemo(
    () => ({ mode, toggleMode: () => setMode((current) => (current === 'dark' ? 'light' : 'dark')) }),
    [mode],
  )

  return (
    <ThemeModeContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  )
}

export function useThemeMode() {
  const context = useContext(ThemeModeContext)
  if (!context) throw new Error('useThemeMode must be used within a ThemeModeProvider')
  return context
}
