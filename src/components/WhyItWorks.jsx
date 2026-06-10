import homeSet from '../assets/home-set.png'
import homeSet2 from '../assets/home-set-2.png'
import homeSet3 from '../assets/home-set-3.png'

const reasons = [
  {
    icon: '👀',
    title: 'Accountability',
    description:
      "Research suggests people often perform better when they know they're being observed.",
  },
  {
    icon: '🚫',
    title: 'Fewer Distractions',
    description:
      'Studies have found that interruptions can disrupt concentration and break momentum.',
  },
  {
    icon: '⏩',
    title: 'Visual Reflection',
    description:
      'Research suggests that reflection helps people better understand their habits and reinforce positive behaviors.',
  },
]

export default function WhyItWorks() {
  return (
    <section className="why-it-works section-animate section-why" id="why-it-works">
      <div className="snap-section-inner why-content">
        <div className="why-phones">
          <div className="why-phones-stack" aria-hidden="true">
            <img
              src={homeSet}
              alt=""
              className="why-phone why-phone-left"
            />
            <img
              src={homeSet2}
              alt="Rush Hour app focus timer and recording session"
              className="why-phone why-phone-center"
            />
            <img
              src={homeSet3}
              alt=""
              className="why-phone why-phone-right"
            />
          </div>
        </div>

        <div className="why-right">
          <h2 className="why-title anim-item">Why It Works?</h2>

          <div className="why-cards">
            {reasons.map((reason) => (
              <article key={reason.title} className="why-card">
                <span className="why-card-icon" aria-hidden="true">
                  {reason.icon}
                </span>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
