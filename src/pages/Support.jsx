import { useEffect } from 'react'
import { SUPPORT_EMAIL, SUPPORT_MAILTO } from '../constants/links'

export default function Support() {
  useEffect(() => {
    window.location.href = SUPPORT_MAILTO
  }, [])

  return (
    <div className="legal-scroll">
      <div className="support-card">
        <p className="support-kicker">Rush Hour Support</p>
        <h1>Need help?</h1>
        <p>
          Opening your email app to reach us at{' '}
          <a href={SUPPORT_MAILTO}>{SUPPORT_EMAIL}</a>.
        </p>
        <a href={SUPPORT_MAILTO} className="btn-primary btn-large">
          Email Support
        </a>
      </div>
    </div>
  )
}
