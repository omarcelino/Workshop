import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import LanguageIcon from '@mui/icons-material/Language'
import Button from '@mui/material/Button'
import HowToRegIcon from '@mui/icons-material/HowToReg'
import { contact, rsvp, isPlaceholder } from '../data/eventData.js'
import { track } from '../utils/analytics.js'
import SectionHeading from './SectionHeading.jsx'

function rsvpHref() {
  if (!isPlaceholder(rsvp.url)) return rsvp.url
  if (!isPlaceholder(rsvp.fallbackEmail)) return `mailto:${rsvp.fallbackEmail}`
  return null
}

export default function Contact() {
  const href = rsvpHref()

  return (
    <Box
      id="contact"
      component="section"
      sx={{ py: { xs: 8, md: 10 }, backgroundColor: 'background.default' }}
    >
      <Container maxWidth="sm">
        <SectionHeading eyebrow="Get in Touch" title="Contact" />
        <Card elevation={2}>
          <CardContent sx={{ textAlign: 'center', p: { xs: 3, md: 4 } }}>
            <Typography variant="h6" component="h3" sx={{ fontWeight: 700 }}>
              {contact.organiser}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
              {contact.organisation}
            </Typography>
            {contact.secondaryContact && (
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                {contact.secondaryContact}
              </Typography>
            )}

            <Button
              variant="contained"
              startIcon={<HowToRegIcon />}
              component="a"
              href={href ?? undefined}
              disabled={!href}
              target={href?.startsWith('mailto:') ? undefined : '_blank'}
              rel={href?.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              onClick={() => track('rsvp_click', { source: 'contact' })}
              sx={{ mb: 3 }}
            >
              RSVP for This Workshop
            </Button>

            <Stack spacing={1.5} sx={{ mb: 3 }}>
              <Stack direction="row" spacing={1} justifyContent="center" alignItems="center">
                <EmailIcon color="primary" fontSize="small" />
                {isPlaceholder(contact.email) ? (
                  <Typography variant="body2" color="text.secondary">
                    {contact.email}
                  </Typography>
                ) : (
                  <Typography
                    variant="body2"
                    component="a"
                    href={`mailto:${contact.email}`}
                    onClick={() => track('contact_click', { channel: 'email' })}
                    sx={{ color: 'text.primary', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                  >
                    {contact.email}
                  </Typography>
                )}
              </Stack>
              <Stack direction="row" spacing={1} justifyContent="center" alignItems="center">
                <PhoneIcon color="primary" fontSize="small" />
                {isPlaceholder(contact.phone) ? (
                  <Typography variant="body2" color="text.secondary">
                    {contact.phone}
                  </Typography>
                ) : (
                  <Typography
                    variant="body2"
                    component="a"
                    href={`tel:${contact.phone.replace(/[^+\d]/g, '')}`}
                    onClick={() => track('contact_click', { channel: 'phone' })}
                    sx={{ color: 'text.primary', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                  >
                    {contact.phone}
                  </Typography>
                )}
              </Stack>
            </Stack>

            {(contact.social.linkedin || contact.social.twitter || contact.social.website) && (
              <Stack direction="row" spacing={1} justifyContent="center">
                {contact.social.linkedin && (
                  <IconButton
                    color="primary"
                    component="a"
                    href={contact.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <LinkedInIcon />
                  </IconButton>
                )}
                {contact.social.website && (
                  <IconButton
                    color="primary"
                    component="a"
                    href={contact.social.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Website"
                  >
                    <LanguageIcon />
                  </IconButton>
                )}
              </Stack>
            )}
          </CardContent>
        </Card>
      </Container>
    </Box>
  )
}
