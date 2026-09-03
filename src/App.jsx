import { useEffect, useRef, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import WhyItWorks from './components/WhyItWorks'
import Reflection from './components/Reflection'
import TeamModal from './components/TeamModal'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Support from './pages/Support'
import { useScrollSections } from './hooks/useScrollSections'
import './App.css'
import './animations.css'

function getPage() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'
  if (path === '/privacy' || path === '/privacy-policy') return 'privacy'
  if (path === '/support') return 'support'
  return 'home'
}

function Home() {
  const siteRef = useRef(null)
  const wipeRef = useRef(null)
  useScrollSections(siteRef, wipeRef)

  return (
    <div ref={siteRef} className="site site-section-0">
      <div ref={wipeRef} className="page-wipe" aria-hidden="true" />
      <main>
        <Hero />
        <HowItWorks />
        <WhyItWorks />
        <Reflection />
      </main>
    </div>
  )
}

function App() {
  const [teamOpen, setTeamOpen] = useState(false)
  const [page, setPage] = useState(getPage)

  useEffect(() => {
    const sync = () => setPage(getPage())
    window.addEventListener('popstate', sync)
    return () => window.removeEventListener('popstate', sync)
  }, [])

  useEffect(() => {
    if (page === 'privacy') document.title = 'Privacy Policy | Rush Hour'
    else if (page === 'support') document.title = 'Support | Rush Hour'
    else document.title = 'Rush Hour'
  }, [page])

  return (
    <div className="app">
      <Header onOpenTeam={() => setTeamOpen(true)} />
      {page === 'privacy' && <PrivacyPolicy />}
      {page === 'support' && <Support />}
      {page === 'home' && <Home />}
      <TeamModal open={teamOpen} onClose={() => setTeamOpen(false)} />
    </div>
  )
}

export default App
