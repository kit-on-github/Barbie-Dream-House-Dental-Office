
import './ServicesSection.css'
import { useState } from 'react'

function ServicesSection() {
    const [expandedService, setExpandedService] = useState(null)
  return (
    <section className="services-section">
      <div className="services-heading">
        <h2>Our Dental Services</h2>
      </div>

      <div className="services-grid">

        <article className="service-card">
          <div className="service-icon">🦷</div>
          <h3>Preventive Dentistry</h3>
          <p>
            Routine examinations, professional cleanings,
            and preventive dental care.
          </p>

        <button
          className="service-button"
          onClick={() =>
            setExpandedService(
                expandedService === 'preventive' ? null : 'preventive'
            )
          }
            aria-expanded={expandedService === 'preventive'}
        >
            {expandedService === 'preventive' ? 'Show Less' : 'Read More'}
        </button>

        {expandedService === 'preventive' && (
            <div className="service-details">
            <p>
                Preventive care helps maintain healthy teeth and gums
                through routine examinations, cleanings, and early detection.
            </p>
            </div>
        )}


        </article>

        <article className="service-card">
          <div className="service-icon">🦷</div>
          <h3>Cosmetic Dentistry</h3>
          <p>
            Personalized treatments designed to enhance
            the appearance of your smile.
          </p>

        
            <button
            className="service-button"
            onClick={() =>
                setExpandedService(
                expandedService === 'cosmetic' ? null : 'cosmetic'
                )
            }
            aria-expanded={expandedService === 'cosmetic'}
            >
            {expandedService === 'cosmetic' ? 'Show Less' : 'Read More'}
            </button>

            {expandedService === 'cosmetic' && (
            <div className="service-details">
                <p>
                Cosmetic dentistry focuses on improving the appearance
                of teeth through treatments such as whitening,
                veneers, and smile enhancements.
                </p>
            </div>
            )}


        </article>

        <article className="service-card">
          <div className="service-icon">🦷</div>
          <h3>Restorative Dentistry</h3>
          <p>
            Dental treatments designed to restore
            oral health and function.
          </p>

        
            <button
            className="service-button"
            onClick={() =>
                setExpandedService(
                expandedService === 'restorative' ? null : 'restorative'
                )
            }
            aria-expanded={expandedService === 'restorative'}
            >
            {expandedService === 'restorative' ? 'Show Less' : 'Read More'}
            </button>

            {expandedService === 'restorative' && (
            <div className="service-details">
                <p>
                Restorative dentistry helps repair damaged teeth
                and restore dental function through treatments
                such as fillings, crowns, and bridges.
                </p>
            </div>
            )}

        </article>

      </div>
    </section>
  )
}

export default ServicesSection
