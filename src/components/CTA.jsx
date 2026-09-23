import logo from '../assets/logo.png'
import { APP_STORE_URL } from '../constants/links'

export default function CTA() {
  return (
    <section className="cta">
      <img src={logo} alt="Rush Hour" className="cta-logo" />
      <h2 className="cta-title">Ready to Show Up?</h2>
      <a
        href={APP_STORE_URL}
        className="btn-primary btn-large"
        target="_blank"
        rel="noopener noreferrer"
      >
        Get the App
      </a>
    </section>
  )
}
