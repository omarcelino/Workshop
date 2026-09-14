import { useEffect, useRef, useState } from 'react'
import Box from '@mui/material/Box'
import { easing, duration } from '../utils/motion.js'

// Fades + slides a section up the first time it scrolls into view, using
// Material Design 3's standard easing/duration tokens. `prefers-reduced-motion`
// is already handled globally (theme.js forces all transition/animation
// durations to ~0), so no extra branching is needed here.
export default function Reveal({ children, ...boxProps }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(node)
        }
      },
      { threshold: 0.15 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return (
    <Box
      ref={ref}
      {...boxProps}
      sx={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity ${duration.medium}ms ${easing.standard}, transform ${duration.medium}ms ${easing.standard}`,
        // Printing doesn't necessarily scroll every section into view first
        // (e.g. "Print / Save as PDF" from the top of the page), so force
        // full visibility on the printed/PDF output regardless of state.
        '@media print': {
          opacity: '1 !important',
          transform: 'none !important',
        },
        ...boxProps.sx,
      }}
    >
      {children}
    </Box>
  )
}
