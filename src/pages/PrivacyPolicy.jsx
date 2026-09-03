import LegalLinks from '../components/LegalLinks'
import { SUPPORT_EMAIL, SUPPORT_MAILTO, WEBSITE_URL } from '../constants/links'

export default function PrivacyPolicy() {
  return (
    <div className="legal-scroll">
      <article className="privacy-content">
        <p className="privacy-kicker">Rush Hour</p>
        <h1>Privacy Policy</h1>
        <p className="privacy-updated">Last updated: September 3, 2026</p>
        <p>
          This Privacy Policy describes how Rush Hour (“the App,” “we,” “us,” or
          “our”) handles information when you use our iOS application. Rush Hour
          is a focus and screen-time management app that uses Apple’s Screen Time
          (Family Controls) framework to help you limit or block distracting apps
          and categories.
        </p>
        <p>
          If you have questions about this policy, contact us at:{' '}
          <a href={SUPPORT_MAILTO}>{SUPPORT_EMAIL}</a>
        </p>
        <p>
          Website:{' '}
          <a href={WEBSITE_URL} target="_blank" rel="noopener noreferrer">
            {WEBSITE_URL}
          </a>
        </p>

        <h2>1. Summary</h2>
        <p>
          Rush Hour is designed to work primarily <strong>on your device</strong>,
          using Apple’s built-in Screen Time APIs (Family Controls, Managed
          Settings, and Device Activity). We do not require an account, and we do
          not operate a backend server that stores your personal data. Your
          app-selection choices, usage schedules, and screen-time activity are
          processed locally by Apple’s frameworks and are not transmitted to us.
        </p>

        <h2>2. Information We Do Not Collect</h2>
        <p>
          We do not collect, and Rush Hour does not transmit off your device:
        </p>
        <ul>
          <li>Your name, email address, or other contact information</li>
          <li>
            The specific list of apps or app categories you choose to restrict or
            block, or your usage schedules (this selection is handled by Apple’s
            Family Activity Picker and stored using Apple’s encrypted, on-device
            tokens, which are opaque even to us as developers)
          </li>
          <li>
            Your actual screen time, app usage statistics, or activity reports
          </li>
          <li>Photos, contacts, location, health, or financial data</li>
          <li>
            Any data via a jailbreak or device-integrity check beyond a local
            yes/no determination used to protect the app’s core functionality
            (see Section 4)
          </li>
        </ul>

        <h2>3. How the Screen Time / Family Controls Feature Works</h2>
        <p>
          Rush Hour uses Apple’s Family Controls, Managed Settings, and Device
          Activity frameworks to let you:
        </p>
        <ul>
          <li>
            Select apps, websites, or categories you want to restrict (via
            Apple’s system picker — Rush Hour never sees which specific apps you
            selected, only anonymized tokens provided by Apple)
          </li>
          <li>
            Apply a “shield” screen (via a Shield Action / Shield Configuration
            extension) when you try to open a restricted app
          </li>
          <li>Display a widget summarizing your restriction status</li>
        </ul>
        <p>
          All of this processing happens <strong>on-device</strong>, within
          Apple’s sandboxed frameworks. Apple’s system, not Rush Hour or its
          developer, enforces the privacy boundary that keeps your specific app
          selections opaque to the app itself. We do not have access to, and do
          not collect, which individual apps you have chosen to restrict.
        </p>

        <h2>4. Jailbreak / Device Integrity Detection</h2>
        <p>
          Rush Hour includes a jailbreak-detection component
          (RushHourJailBreakMonitor) that checks for signs of device tampering
          (jailbreaking) that could allow restrictions to be bypassed. This
          check:
        </p>
        <ul>
          <li>Runs locally on your device</li>
          <li>
            Produces only a local pass/fail result used to enforce app
            functionality (for example, warning you or disabling bypass routes)
          </li>
          <li>
            Does not collect or transmit any device-identifying information to us
          </li>
        </ul>

        <h2>5. Data Stored Locally</h2>
        <p>
          Preferences such as your restriction schedules, streaks, or app
          settings may be stored locally on your device (for example, using
          UserDefaults, a local database, or Apple’s Managed Settings Store) so
          the app functions correctly and your widget stays up to date. This data
          stays on your device and in your iCloud backup (if you have iCloud
          device backups enabled) — we do not have a server that receives it.
        </p>

        <h2>6. Third-Party Services</h2>
        <p>
          Rush Hour does not integrate any third-party analytics, advertising,
          crash-reporting, or backend/cloud services. We do not share your data
          with any third party, because Rush Hour does not collect data to share.
          All functionality is provided using Apple’s own system frameworks
          (Family Controls, Screen Time, Device Activity, WidgetKit), which are
          governed by Apple’s own privacy practices (see Section 7).
        </p>
        <p>
          If this changes in a future update (for example, if analytics or a
          backend service is added), this Privacy Policy will be updated
          accordingly before that update is released, and the App Store Privacy
          Nutrition Label will be revised to match.
        </p>

        <h2>7. Apple Frameworks</h2>
        <p>
          Rush Hour relies on Apple’s Family Controls, Screen Time, Device
          Activity, and WidgetKit APIs. Apple’s own data handling for these
          frameworks is governed by Apple’s Privacy Policy, not this document. We
          are not responsible for, and do not have visibility into, Apple’s
          internal handling of Screen Time data.
        </p>

        <h2>8. Children’s Privacy</h2>
        <p>
          Rush Hour does not knowingly collect personal information from
          children. Because the app processes Screen Time data entirely on-device
          without transmitting it to us, no personal data is collected from users
          of any age. If you believe a child has provided us with personal
          information (for example, via a support email), contact us at the
          address above and we will delete it.
        </p>

        <h2>9. Data Retention and Deletion</h2>
        <p>
          Since we do not collect or store your data on any server, there is no
          remote data for us to retain or delete. Uninstalling the app removes
          all locally stored app data from your device (subject to standard iOS
          behavior and any iCloud backups you control).
        </p>

        <h2>10. Your Rights</h2>
        <p>
          Because Rush Hour does not collect personal data on our servers, most
          data-subject rights (access, correction, deletion, portability) are
          automatically satisfied — your data lives only on your device, under
          your control. If you have questions or requests regarding this policy,
          contact us at <a href={SUPPORT_MAILTO}>{SUPPORT_EMAIL}</a>.
        </p>

        <h2>11. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will be
          posted on this page with a revised “Last updated” date. Continued use
          of the app after changes constitutes acceptance of the updated policy.
        </p>

        <h2>12. Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy or Rush Hour’s data
          practices, contact:
        </p>
        <p>
          Rush Hour
          <br />
          Email: <a href={SUPPORT_MAILTO}>{SUPPORT_EMAIL}</a>
          <br />
          Website:{' '}
          <a href={WEBSITE_URL} target="_blank" rel="noopener noreferrer">
            {WEBSITE_URL}
          </a>
        </p>

        <LegalLinks />
      </article>
    </div>
  )
}
