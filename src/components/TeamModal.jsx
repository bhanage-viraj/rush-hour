import { useEffect } from 'react'
import marleen from '../assets/team/marleen.png'
import dori from '../assets/team/dori.png'
import viraj from '../assets/team/viraj.png'
import belvanatha from '../assets/team/belvanatha.png'
import andrian from '../assets/team/andrian.png'
import gustu from '../assets/team/gustu.png'

const team = [
  { name: 'Marleen Phangestu', role: 'Product Designer', photo: marleen },
  { name: 'Dori (Michelle)', role: 'Product Designer', photo: dori },
  { name: 'Viraj Bhanage', role: 'iOS Developer', photo: viraj },
  { name: 'Belvanatha Gargita', role: 'iOS Developer', photo: belvanatha },
  { name: 'Andrian', role: 'iOS Developer', photo: andrian },
  { name: 'Gustu Ryan', role: 'iOS Developer', photo: gustu },
]

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="#0A66C2" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
      <defs>
        <linearGradient id="ig" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#feda75" />
          <stop offset="25%" stopColor="#fa7e1e" />
          <stop offset="50%" stopColor="#d62976" />
          <stop offset="75%" stopColor="#962fbf" />
          <stop offset="100%" stopColor="#4f5bd5" />
        </linearGradient>
      </defs>
      <rect width="24" height="24" rx="6" fill="url(#ig)" />
      <circle cx="12" cy="12" r="4.5" fill="none" stroke="white" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.2" fill="white" />
    </svg>
  )
}

export default function TeamModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="team-modal-overlay" onClick={onClose} role="presentation">
      <div
        className="team-modal"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="team-modal-title"
      >
        <button
          type="button"
          className="team-modal-close"
          onClick={onClose}
          aria-label="Close team modal"
        >
          ×
        </button>

        <h2 id="team-modal-title" className="team-modal-title">
          Meet the Team
        </h2>
        <p className="team-modal-subtitle">
          The people behind <strong>Rush Hour</strong>, working together to make
          focus more visible and meaningful.
        </p>

        <div className="team-grid">
          {team.map((member) => (
            <article key={member.name} className="team-card">
              <div className="team-card-inner">
                <div className="team-card-perforated" aria-hidden="true" />
                <div className="team-card-body">
                  <div className="team-photo-wrap">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="team-photo"
                    />
                  </div>
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <div className="team-social">
                    <a href="#" aria-label={`${member.name} on LinkedIn`}>
                      <LinkedInIcon />
                    </a>
                    <a href="#" aria-label={`${member.name} on Instagram`}>
                      <InstagramIcon />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
