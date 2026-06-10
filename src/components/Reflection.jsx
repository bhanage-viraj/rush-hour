import logo from '../assets/logo.png'
import { TESTFLIGHT_URL } from '../constants/links'
import LazyVideo from './LazyVideo'
import reflectionFive from '../assets/reflection/five.mp4'
import reflectionTwo from '../assets/reflection/two.mp4'
import reflectionThree from '../assets/reflection/three.mp4'
import reflectionFour from '../assets/reflection/four.mp4'
import reflectionSix from '../assets/reflection/six.mp4'
import reflectionSeven from '../assets/reflection/seven.mp4'

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
          <a
            href={TESTFLIGHT_URL}
            className="btn-primary btn-large"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join TestFlight
          </a>
        </div>
      </div>
    </section>
  )
}
