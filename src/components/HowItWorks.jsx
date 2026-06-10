import dorivdo from '../assets/dorivdo.mp4'
import doriTrafficLight from '../assets/doritrafficlight.png'
import focusCard from '../assets/how-frame-focus.png'
import reviewCard from '../assets/how-frame-review.png'

function RecordCard() {
  return (
    <article className="feature-card feature-card-record">
      <div className="record-card">
        <div className="record-checkered" aria-hidden="true" />

        <div className="record-media">
          <div className="record-video-stack">
            <div className="record-video-frame">
              <video
                src={dorivdo}
                autoPlay
                muted
                loop
                playsInline
                className="record-video"
              />
              <div className="record-overlay">
                <p className="record-session">Morning Session Rush!</p>
                <p className="record-time">3h 20m</p>
                <p className="record-date">26 MAY 2026</p>
              </div>
            </div>
            <img
              src={doriTrafficLight}
              alt=""
              className="record-traffic"
            />
          </div>
        </div>

        <div className="record-footer">
          <span className="record-footer-icon" aria-hidden="true">
            🎥
          </span>
          <h3>Record</h3>
          <p>Stay accountable by recording your focus sessions.</p>
        </div>
      </div>
    </article>
  )
}

export default function HowItWorks() {
  return (
    <section className="how-it-works section-animate section-how" id="how-it-works">
      <div className="snap-section-inner">
      <h2 className="section-title anim-item">How Rush Hour Works</h2>
      <p className="section-subtitle anim-item">
        Rush Hour combines accountability, focus, and reflection to help you
        build better study and work habits.
      </p>

      <div className="feature-cards">
        <RecordCard />

        <article className="feature-card">
          <img
            src={focusCard}
            alt="Focus — how Rush Hour works"
            className="feature-card-img"
          />
        </article>

        <article className="feature-card">
          <img
            src={reviewCard}
            alt="Review — how Rush Hour works"
            className="feature-card-img"
          />
        </article>
      </div>
      </div>
    </section>
  )
}
