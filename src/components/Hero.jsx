import { useEffect, useRef } from 'react'
import videoframe from '../assets/videoframe.png'
import { TESTFLIGHT_URL } from '../constants/links'

const CAMPAIGN_VIDEO = '/campaign-video.mp4'
const CAMPAIGN_POSTER = '/campaign-poster.jpg'

function configureForMobile(video) {
  video.muted = true
  video.defaultMuted = true
  video.playsInline = true
  video.setAttribute('muted', '')
  video.setAttribute('playsinline', '')
  video.setAttribute('webkit-playsinline', '')
  video.setAttribute('x-webkit-airplay', 'allow')
}

async function tryPlay(video) {
  if (!video) return
  configureForMobile(video)
  try {
    await video.play()
    video.removeAttribute('poster')
  } catch {
    /* iOS may block until first touch — handled below */
  }
}

export default function Hero() {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return undefined

    configureForMobile(video)

    const handleReady = () => {
      void tryPlay(video)
    }

    const unlockOnTouch = () => {
      void tryPlay(video)
    }

    video.addEventListener('loadeddata', handleReady)
    video.addEventListener('canplay', handleReady)
    video.addEventListener('canplaythrough', handleReady)
    document.addEventListener('touchstart', unlockOnTouch, { passive: true })
    document.addEventListener('visibilitychange', handleReady)

    if (video.readyState >= 2) handleReady()

    return () => {
      video.removeEventListener('loadeddata', handleReady)
      video.removeEventListener('canplay', handleReady)
      video.removeEventListener('canplaythrough', handleReady)
      document.removeEventListener('touchstart', unlockOnTouch)
      document.removeEventListener('visibilitychange', handleReady)
    }
  }, [])

  return (
    <section className="hero section-animate section-hero section-active" id="about">
      <div className="snap-section-inner hero-layout">
        <div className="hero-copy">
          <h1 className="hero-title anim-item">Make Your Effort Visible.</h1>
          <p className="hero-subtitle anim-item">
            Turn your focus sessions into a timelapse that helps you stay
            accountable and reflect on your work.
          </p>
          <a
            href={TESTFLIGHT_URL}
            className="btn-primary hero-cta anim-item"
            target="_blank"
            rel="noopener noreferrer"
          >
            JOIN TESTFLIGHT
          </a>
        </div>

        <div className="hero-media">
          <div className="hero-video">
            <img src={videoframe} alt="" className="hero-video-frame" aria-hidden="true" />
            <div className="hero-video-inner">
              <video
                ref={videoRef}
                src={CAMPAIGN_VIDEO}
                poster={CAMPAIGN_POSTER}
                preload="auto"
                autoPlay
                muted
                loop
                playsInline
                className="hero-campaign-video"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
