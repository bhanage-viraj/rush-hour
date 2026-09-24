import logo from '../assets/logo.png'
import AppStoreBadge from './AppStoreBadge'

export default function CTA() {
  return (
    <section className="cta">
      <img src={logo} alt="Rush Hour" className="cta-logo" />
      <h2 className="cta-title">Ready to Show Up?</h2>
      <AppStoreBadge />
    </section>
  )
}
