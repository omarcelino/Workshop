import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
      {eyebrow && (
        <Typography
          variant="overline"
          // secondary.dark, not .main — teal at full brightness falls short
          // of WCAG AA for small text like this eyebrow label.
          color="secondary.dark"
          sx={{ fontWeight: 700, letterSpacing: 1.5 }}
        >
          {eyebrow}
        </Typography>
      )}
      <Typography variant="h4" component="h2" sx={{ fontWeight: 700, mb: subtitle ? 1.5 : 0 }}>
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 640, mx: 'auto' }}>
          {subtitle}
        </Typography>
      )}
    </Box>
  )
}
