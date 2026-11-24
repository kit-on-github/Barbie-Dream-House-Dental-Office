
import './Footer.css'

function Footer() {
  return (
    <footer className="site-footer">

      <div className="footer-content">

        {/* PRACTICE INFORMATION */}
        <div className="footer-brand">
          <h2>Aurelia Dental</h2>
          <p>
            Thoughtful dental care focused on comfort,
            precision, and long-term oral health.
          </p>
        </div>

        {/* NAVIGATION */}
        <div className="footer-column">
          <h3>Explore</h3>
          <a href="/">Home</a>
          <a href="/providers">Providers</a>
          <a href="/services">Services</a>
          <a href="/appointment">Appointment</a>
        </div>

        {/* PATIENT RESOURCES */}
        <div className="footer-column">
          <h3>Patient Resources</h3>
          <a href="/insurance">Insurance</a>
          <a href="/messages">Messages</a>
          <a href="/shop">Shop</a>
        </div>

        {/* CONTACT */}
        <div className="footer-column">
          <h3>Contact</h3>
          <p>850 Madison Ave, Suite 402</p>
          <p>New York, NY 10021</p>
          <p>Phone number coming soon</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Aurelia Dental. All rights reserved.</p>

        <div className="footer-legal">
          <a href="/privacy">Privacy Policy</a>
          <a href="/accessibility">Accessibility</a>
          <a href="/terms">Terms of Use</a>
        </div>
      </div>

    </footer>
  )
}

export default Footer
