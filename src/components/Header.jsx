import logo from '../assets/logo.png'
import { INSTAGRAM_URL } from '../constants/links'
import AppStoreBadge from './AppStoreBadge'

function isHome() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'
  return path === '/'
}

function scrollToSection(event, selector) {
  if (!isHome()) return
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
          <a href="/#about" onClick={(e) => scrollToSection(e, '#about')}>
            ABOUT
          </a>
          <button type="button" className="header-link" onClick={onOpenTeam}>
            OUR TEAM
          </button>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            INSTAGRAM
          </a>
          <a href="/privacy">PRIVACY</a>
          <a href="/support">SUPPORT</a>
        </nav>

        <a
          href="/"
          className="header-logo"
          aria-label="Rush Hour home"
          onClick={(e) => scrollToSection(e, '#about')}
        >
          <img src={logo} alt="Rush Hour" />
        </a>

        <AppStoreBadge className="header-cta" />
      </div>
    </header>
  )
}
