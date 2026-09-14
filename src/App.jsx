import { useEffect } from 'react'
import Box from '@mui/material/Box'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import EventOverview from './components/EventOverview.jsx'
import Objectives from './components/Objectives.jsx'
import Outcomes from './components/Outcomes.jsx'
import CrossFunctional from './components/CrossFunctional.jsx'
import Agenda from './components/Agenda.jsx'
import Facilitators from './components/Facilitators.jsx'
import WorkingPrinciples from './components/WorkingPrinciples.jsx'
import Participants from './components/Participants.jsx'
import Preparation from './components/Preparation.jsx'
import Logistics from './components/Logistics.jsx'
import ImportantInformation from './components/ImportantInformation.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Reveal from './components/Reveal.jsx'
import { event } from './data/eventData.js'

export default function App() {
  // Keep the browser tab title and search-result snippet in sync with the
  // single source of truth in eventData.js, since index.html is static and
  // can't reference it directly.
  useEffect(() => {
    document.title = `${event.title} — ${event.displayDate}`
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', event.description)
  }, [])

  return (
    <Box>
      <Header />
      <Box component="main" id="main-content">
        <Hero />
        <Reveal><EventOverview /></Reveal>
        <Reveal><Objectives /></Reveal>
        <Reveal><Outcomes /></Reveal>
        <Reveal><CrossFunctional /></Reveal>
        <Reveal><Agenda /></Reveal>
        <Reveal><Facilitators /></Reveal>
        <Reveal><WorkingPrinciples /></Reveal>
        <Reveal><Participants /></Reveal>
        <Reveal><Preparation /></Reveal>
        <Reveal><Logistics /></Reveal>
        <Reveal><ImportantInformation /></Reveal>
        <Reveal><Contact /></Reveal>
      </Box>
      <Footer />
    </Box>
  )
}
