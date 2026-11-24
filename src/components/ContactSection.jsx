
import './ContactSection.css'

function ContactSection() {
  return (
    <section className="contact-section">

      <div className="contact-section-heading">
        <h2>Visit Aurelia Dental</h2>
      </div>

      <div className="contact-section-layout">

        <div className="contact-information">
          <h3>Contact Information</h3>

          <div className="contact-item">
            <h4>Address</h4>
            <p>850 Madison Ave, Suite 402</p>
            <p>New York, NY 10021</p>
          </div>

          <div className="contact-item">
            <h4>Phone</h4>
            <p>Phone number coming soon</p>
          </div>

          <div className="contact-item">
            <h4>Office Hours</h4>
            <p>Monday – Friday: Hours coming soon</p>
            <p>Saturday – Sunday: Hours coming soon</p>
          </div>
        </div>

        <a
            className="contact-directions"
            href="https://www.google.com/maps/dir/?api=1&destination=850+Madison+Ave,+New+York,+NY+10021"
            target="_blank"
            rel="noopener noreferrer"
            >
            Get Directions →
        </a>
        
        <div className="contact-map">
        <iframe
            src="https://www.google.com/maps?q=850+Madison+Ave,+New+York,+NY+10021&output=embed"
            title="Map showing 850 Madison Avenue, New York"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
        />
        </div>

      </div>

    </section>
  )
}

export default ContactSection
