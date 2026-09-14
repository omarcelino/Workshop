import { useEffect } from 'react'
import Box from '@mui/material/Box'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import EventOverview from './components/EventOverview.jsx'
import Objectives from './components/Objectives.jsx'
import Agenda from './components/Agenda.jsx'
import Facilitators from './components/Facilitators.jsx'
import Participants from './components/Participants.jsx'
import Logistics from './components/Logistics.jsx'
import ImportantInformation from './components/ImportantInformation.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { event } from './data/eventData.js'

export default function App() {
  // Keep the browser tab title and search-result snippet in sync with the
  // single source of truth in eventData.js, since index.html is static and
  // can't reference it directly.
  useEffect(() => {
    document.title = `${event.title} — Workshop Event Plan`
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', event.description)
  }, [])

  return (
    <Box>
      <Header />
      <Box component="main" id="main-content">
        <Hero />
        <EventOverview />
        <Objectives />
        <Agenda />
        <Facilitators />
        <Participants />
        <Logistics />
        <ImportantInformation />
        <Contact />
      </Box>
      <Footer />
    </Box>
  )
}
