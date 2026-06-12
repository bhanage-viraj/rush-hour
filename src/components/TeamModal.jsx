import { useEffect } from 'react'
import teamCardFrame from '../assets/team-card-frame.png'
import marleen from '../assets/team/marleen.png'
import dori from '../assets/team/dori.png'
import viraj from '../assets/team/viraj.png'
import belvanatha from '../assets/team/belvanatha.png'
import andrian from '../assets/team/andrian.png'
import gustu from '../assets/team/gustu.png'

const team = [
  {
    name: 'Marleen Phangestu',
    role: 'Product Designer',
    photo: marleen,
    linkedin: 'https://www.linkedin.com/in/marleen-phangestu',
    instagram: 'https://www.instagram.com/marleenyen',
  },
  { name: 'Dori (Michelle)', role: 'Product Designer', photo: dori },
  {
    name: 'Viraj Bhanage',
    role: 'iOS Developer',
    photo: viraj,
    linkedin: 'https://www.linkedin.com/in/viraj-bhanage-40b34a321/',
    x: 'https://x.com/viraj_Bhanage_',
    instagram: 'https://www.instagram.com/bhanage_viraj/',
  },
  {
    name: 'Belvanatha Gargita',
    role: 'iOS Developer',
    photo: belvanatha,
    linkedin: 'https://www.linkedin.com/in/belvanatha-gargita/',
    instagram: 'https://www.instagram.com/belvasatwikananda',
  },
  {
    name: 'Andrian',
    role: 'iOS Developer',
    photo: andrian,
    linkedin: 'https://www.linkedin.com/in/andrian-ang/',
    instagram: 'https://www.instagram.com/anddriann',
  },
  {
    name: 'Gustu Ryan',
    role: 'iOS Developer',
    photo: gustu,
    linkedin:
      'https://www.linkedin.com/in/ida-bagus-putu-ryan-paramasatya-putra-414913250',
    instagram: 'https://www.instagram.com/ryannparama',
  },
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

function XIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
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
                <img
                  src={teamCardFrame}
                  alt=""
                  className="team-card-frame"
                  aria-hidden="true"
                />
                <div className="team-card-body">
                  <div className="team-photo-slot">
                    <div className="team-photo-wrap">
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="team-photo"
                      />
                    </div>
                  </div>
                  <div className="team-card-info">
                    <h3>{member.name}</h3>
                    <p className="team-role">{member.role}</p>
                    <div className="team-social">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} on LinkedIn`}
                        >
                          <LinkedInIcon />
                        </a>
                      )}
                      {member.x && (
                        <a
                          href={member.x}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} on X`}
                          className="team-social-x"
                        >
                          <XIcon />
                        </a>
                      )}
                      {member.instagram && (
                        <a
                          href={member.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} on Instagram`}
                        >
                          <InstagramIcon />
                        </a>
                      )}
                    </div>
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
