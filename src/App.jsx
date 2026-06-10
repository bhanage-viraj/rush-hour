import { useRef, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import WhyItWorks from './components/WhyItWorks'
import Reflection from './components/Reflection'
import TeamModal from './components/TeamModal'
import { useScrollSections } from './hooks/useScrollSections'
import './App.css'
import './animations.css'

function App() {
  const [teamOpen, setTeamOpen] = useState(false)
  const siteRef = useRef(null)
  const wipeRef = useRef(null)
  useScrollSections(siteRef, wipeRef)

  return (
    <div className="app">
      <Header onOpenTeam={() => setTeamOpen(true)} />
      <div ref={siteRef} className="site site-section-0">
        <div ref={wipeRef} className="page-wipe" aria-hidden="true" />
        <main>
          <Hero />
          <HowItWorks />
          <WhyItWorks />
          <Reflection />
        </main>
      </div>
      <TeamModal open={teamOpen} onClose={() => setTeamOpen(false)} />
    </div>
  )
}

export default App
