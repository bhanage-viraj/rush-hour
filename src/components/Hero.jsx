import { useEffect, useRef } from 'react'
import videoframe from '../assets/videoframe.png'
import heroPoster from '../assets/hero-poster.jpg'
import campaignVideo from '../assets/RushHour-CampaignVideo.mp4'
import { TESTFLIGHT_URL } from '../constants/links'

export default function Hero() {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return undefined

    const play = () => {
      const attempt = video.play()
      if (attempt?.catch) attempt.catch(() => {})
    }

    video.addEventListener('loadeddata', play)
    if (video.readyState >= 2) play()

    return () => video.removeEventListener('loadeddata', play)
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
          <div className="hero-video anim-item">
            <img src={videoframe} alt="" className="hero-video-frame" />
            <div className="hero-video-inner">
              <video
                ref={videoRef}
                src={campaignVideo}
                poster={heroPoster}
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
