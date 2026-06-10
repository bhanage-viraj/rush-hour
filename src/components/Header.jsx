import logo from '../assets/logo.png'
import { TESTFLIGHT_URL } from '../constants/links'

function scrollToSection(event, selector) {
  event.preventDefault()
  const site = document.querySelector('.site')
  const target = document.querySelector(selector)
  if (site && target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export default function Header({ onOpenTeam }) {
  return (
    <header className="header">
      <div className="header-inner">
        <nav className="header-nav">
          <a href="#about" onClick={(e) => scrollToSection(e, '#about')}>
            ABOUT
          </a>
          <button type="button" className="header-link" onClick={onOpenTeam}>
            OUR TEAM
          </button>
        </nav>

        <a
          href="#about"
          className="header-logo"
          aria-label="Rush Hour home"
          onClick={(e) => scrollToSection(e, '#about')}
        >
          <img src={logo} alt="Rush Hour" />
        </a>

        <a
          href={TESTFLIGHT_URL}
          className="header-cta"
          target="_blank"
          rel="noopener noreferrer"
        >
          JOIN TESTFLIGHT
        </a>
      </div>
    </header>
  )
}
