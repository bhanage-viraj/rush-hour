import logo from '../assets/logo.png'
import { TESTFLIGHT_URL } from '../constants/links'
import LazyVideo from './LazyVideo'
import reflectionFive from '../assets/reflection/five.mp4'
import reflectionTwo from '../assets/reflection/two.mp4'
import reflectionThree from '../assets/reflection/three.mp4'
import reflectionFour from '../assets/reflection/four.mp4'
import reflectionSix from '../assets/reflection/six.mp4'
import reflectionSeven from '../assets/reflection/seven.mp4'

const ctaTeam = [
  {
    name: 'Viraj Bhanage',
    links: [
      {
        label: 'Viraj Bhanage on LinkedIn',
        href: 'https://www.linkedin.com/in/viraj-bhanage-40b34a321/',
        type: 'linkedin',
      },
      {
        label: 'Viraj Bhanage on X',
        href: 'https://x.com/viraj_Bhanage_',
        type: 'x',
      },
      {
        label: 'Viraj Bhanage on Instagram',
        href: 'https://www.instagram.com/bhanage_viraj/',
        type: 'instagram',
      },
    ],
  },
  {
    name: 'Belva',
    links: [
      {
        label: 'Belva on LinkedIn',
        href: 'https://www.linkedin.com/in/belvanatha-gargita/',
        type: 'linkedin',
      },
      {
        label: 'Belva on Instagram',
        href: 'https://www.instagram.com/belvasatwikananda',
        type: 'instagram',
      },
    ],
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
        <linearGradient id="cta-ig" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#feda75" />
          <stop offset="25%" stopColor="#fa7e1e" />
          <stop offset="50%" stopColor="#d62976" />
          <stop offset="75%" stopColor="#962fbf" />
          <stop offset="100%" stopColor="#4f5bd5" />
        </linearGradient>
      </defs>
      <rect width="24" height="24" rx="6" fill="url(#cta-ig)" />
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

function SocialIcon({ type }) {
  if (type === 'linkedin') return <LinkedInIcon />
  if (type === 'instagram') return <InstagramIcon />
  return <XIcon />
}

const videos = [
  { src: reflectionFive, label: 'Reflection clip 1' },
  { src: reflectionThree, label: 'Reflection clip 2' },
  { src: reflectionTwo, label: 'Reflection clip 3' },
  { src: reflectionFour, label: 'Reflection clip 4' },
  { src: reflectionSix, label: 'Reflection clip 5' },
  { src: reflectionSeven, label: 'Reflection clip 6' },
]

export default function Reflection() {
  return (
    <section className="reflection section-animate section-reflection" id="reflection">
      <div className="snap-section-inner">
        <h2 className="section-title anim-item">Reflection, Not Perfection</h2>
        <p className="section-subtitle anim-item">
          Every session is a chance to learn — not to be perfect, but to show up
          and grow.
        </p>

        <div className="reflection-frames">
          {videos.map((video) => (
            <div key={video.label} className="reflection-frame">
              <LazyVideo
                src={video.src}
                className="reflection-video"
                aria-label={video.label}
              />
            </div>
          ))}
        </div>

        <div className="reflection-cta anim-item">
          <img src={logo} alt="Rush Hour" className="cta-logo" />
          <h2 className="cta-title">Ready to Show Up?</h2>
          <p className="reflection-tagline">
            Record your focus. Stay accountable. Reflect on your effort.
          </p>
          <a
            href={TESTFLIGHT_URL}
            className="btn-primary btn-large"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join TestFlight
          </a>
          <div className="cta-team">
            <p className="cta-team-label">Our Team</p>
            {ctaTeam.map((member) => (
              <div key={member.name} className="cta-team-member">
                <span className="cta-team-name">{member.name}</span>
                <div className="cta-team-social">
                  {member.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                      className={`cta-team-link cta-team-link--${link.type}`}
                    >
                      <SocialIcon type={link.type} />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
