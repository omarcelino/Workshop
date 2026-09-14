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

export default function App() {
  return (
    <Box>
      <Header />
      <Hero />
      <EventOverview />
      <Objectives />
      <Agenda />
      <Facilitators />
      <Participants />
      <Logistics />
      <ImportantInformation />
      <Contact />
      <Footer />
    </Box>
  )
}
