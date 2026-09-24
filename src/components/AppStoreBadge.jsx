import badge from '../assets/app-store-badge.png'
import { APP_STORE_URL } from '../constants/links'

export default function AppStoreBadge({ className = '' }) {
  return (
    <a
      href={APP_STORE_URL}
      className={`app-store-badge ${className}`.trim()}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={badge} alt="Download on the App Store" />
    </a>
  )
}
