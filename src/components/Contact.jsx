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
import { contact } from '../data/eventData.js'
import SectionHeading from './SectionHeading.jsx'

export default function Contact() {
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
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              {contact.organiser}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              {contact.organisation}
            </Typography>

            <Stack spacing={1.5} sx={{ mb: 3 }}>
              <Stack direction="row" spacing={1} justifyContent="center" alignItems="center">
                <EmailIcon color="primary" fontSize="small" />
                <Typography
                  variant="body2"
                  component="a"
                  href={`mailto:${contact.email}`}
                  sx={{ color: 'text.primary', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                >
                  {contact.email}
                </Typography>
              </Stack>
              <Stack direction="row" spacing={1} justifyContent="center" alignItems="center">
                <PhoneIcon color="primary" fontSize="small" />
                <Typography
                  variant="body2"
                  component="a"
                  href={`tel:${contact.phone.replace(/[^+\d]/g, '')}`}
                  sx={{ color: 'text.primary', textDecoration: 'none', '&:hover': { textDecoration: 'underline' } }}
                >
                  {contact.phone}
                </Typography>
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
