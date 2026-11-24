import './Services.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Services() {

  const [expandedService, setExpandedService] = useState(null)

  const [expandedFaq, setExpandedFaq] = useState(null)

  return (
    <main className="services-page">

        {/* PAGE INTRODUCTION */}
        <section className="services-intro">

            <p className="services-eyebrow">
                OUR DENTAL SERVICES
            </p>

            <h1>Dental Care Designed Around You</h1>

            <p className="services-intro-description">
                Explore our comprehensive dental services, thoughtfully
                designed to support your oral health, comfort, and
                confidence at every stage of life.
            </p>

        </section>

        {/* SERVICE CATEGORIES */}
        <section className="services-list">
            {/* SERVICE 01 — PREVENTIVE DENTISTRY */}
            <article
                className={`service-item ${
                    expandedService === 'preventive' ? 'service-expanded' : ''
                }`}
            >

                <p className="service-number">01</p>

                <h2>Preventive Dentistry</h2>

                <p className="service-description">
                    Maintain a healthy smile through routine dental
                    examinations, professional cleanings, and
                    preventive treatments tailored to your needs.
                </p>

                <button
                    className="service-toggle"
                    onClick={() =>
                        setExpandedService(
                        expandedService === 'preventive' ? null : 'preventive'
                        )
                    }
                    >
                    {expandedService === 'preventive'
                        ? 'Show Less'
                        : 'Explore Treatments'}
                </button>

                {expandedService === 'preventive' && (
                    <div className="service-details">
                        <h3>Preventive Treatments</h3>
                        <ul>
                        <li>Comprehensive dental examinations</li>
                        <li>Professional teeth cleanings</li>
                        <li>Digital dental X-rays</li>
                        <li>Fluoride treatments</li>
                        </ul>
                    </div>
                )}

            </article>

            {/* SERVICE 02 — COSMETIC DENTISTRY */}
            <article
            className={`service-item ${
                expandedService === 'cosmetic' ? 'service-expanded' : ''
            }`}
            >
            <p className="service-number">02</p>
            <h2>Cosmetic Dentistry</h2>
            <p className="service-description">
                Enhance the appearance of your smile with treatments
                designed to improve tooth color, shape, and alignment.
            </p>

            <button
                className="service-toggle"
                onClick={() =>
                setExpandedService(
                    expandedService === 'cosmetic' ? null : 'cosmetic'
                )
                }
            >
                {expandedService === 'cosmetic'
                ? 'Show Less'
                : 'Explore Treatments'}
            </button>

            {expandedService === 'cosmetic' && (
                <div className="service-details">
                <h3>Cosmetic Treatments</h3>
                <ul>
                    <li>Professional teeth whitening</li>
                    <li>Porcelain veneers</li>
                    <li>Cosmetic bonding</li>
                    <li>Smile enhancement consultations</li>
                </ul>
                </div>
            )}
            </article>

            {/* SERVICE 03 — RESTORATIVE DENTISTRY */}
            <article
            className={`service-item ${
                expandedService === 'restorative' ? 'service-expanded' : ''
            }`}
            >
            <p className="service-number">03</p>
            <h2>Restorative Dentistry</h2>
            <p className="service-description">
                Restore damaged or missing teeth with treatments that
                support function, comfort, and long-term oral health.
            </p>

            <button
                className="service-toggle"
                onClick={() =>
                setExpandedService(
                    expandedService === 'restorative' ? null : 'restorative'
                )
                }
            >
                {expandedService === 'restorative'
                ? 'Show Less'
                : 'Explore Treatments'}
            </button>

            {expandedService === 'restorative' && (
                <div className="service-details">
                <h3>Restorative Treatments</h3>
                <ul>
                    <li>Dental fillings</li>
                    <li>Dental crowns</li>
                    <li>Dental bridges</li>
                    <li>Dental implants</li>
                </ul>
                </div>
            )}
            </article>

            {/* SERVICE 04 — PERIODONTAL CARE */}
            <article
            className={`service-item ${
                expandedService === 'periodontal' ? 'service-expanded' : ''
            }`}
            >
            <p className="service-number">04</p>
            <h2>Periodontal Care</h2>
            <p className="service-description">
                Support healthy gums through preventive care and
                treatments focused on periodontal health.
            </p>

            <button
                className="service-toggle"
                onClick={() =>
                setExpandedService(
                    expandedService === 'periodontal' ? null : 'periodontal'
                )
                }
            >
                {expandedService === 'periodontal'
                ? 'Show Less'
                : 'Explore Treatments'}
            </button>

            {expandedService === 'periodontal' && (
                <div className="service-details">
                <h3>Periodontal Treatments</h3>
                <ul>
                    <li>Gum health evaluations</li>
                    <li>Scaling and root planing</li>
                    <li>Periodontal maintenance</li>
                    <li>Gum disease management</li>
                </ul>
                </div>
            )}
            </article>

            {/* SERVICE 05 — ORTHODONTICS */}
            <article
            className={`service-item ${
                expandedService === 'orthodontics' ? 'service-expanded' : ''
            }`}
            >
            <p className="service-number">05</p>
            <h2>Orthodontics</h2>
            <p className="service-description">
                Explore treatment options designed to improve
                tooth alignment, bite function, and smile balance.
            </p>

            <button
                className="service-toggle"
                onClick={() =>
                setExpandedService(
                    expandedService === 'orthodontics' ? null : 'orthodontics'
                )
                }
            >
                {expandedService === 'orthodontics'
                ? 'Show Less'
                : 'Explore Treatments'}
            </button>

            {expandedService === 'orthodontics' && (
                <div className="service-details">
                <h3>Orthodontic Treatments</h3>
                <ul>
                    <li>Traditional braces</li>
                    <li>Clear aligners</li>
                    <li>Bite assessments</li>
                    <li>Orthodontic consultations</li>
                </ul>
                </div>
            )}
            </article>

            {/* SERVICE 06 — ORAL SURGERY */}
            <article
            className={`service-item ${
                expandedService === 'oral-surgery' ? 'service-expanded' : ''
            }`}
            >
            <p className="service-number">06</p>
            <h2>Oral Surgery</h2>
            <p className="service-description">
                Learn about surgical treatment options that address
                specific dental and oral health needs.
            </p>

            <button
                className="service-toggle"
                onClick={() =>
                setExpandedService(
                    expandedService === 'oral-surgery' ? null : 'oral-surgery'
                )
                }
            >
                {expandedService === 'oral-surgery'
                ? 'Show Less'
                : 'Explore Treatments'}
            </button>

            {expandedService === 'oral-surgery' && (
                <div className="service-details">
                <h3>Oral Surgery Services</h3>
                <ul>
                    <li>Tooth extractions</li>
                    <li>Wisdom tooth evaluations</li>
                    <li>Bone grafting consultations</li>
                    <li>Surgical treatment planning</li>
                </ul>
                </div>
            )}
            </article>

        </section>

        {/* PATIENT GUIDANCE */}
<section className="services-guidance">

  <p className="services-eyebrow">
    YOUR DENTAL CARE
  </p>

  <h2>
    The Right Care Starts With Understanding Your Needs
  </h2>

  <p>
    Every smile is different. Our approach begins with
    understanding your dental concerns, discussing
    available treatment options, and helping you make
    informed decisions about your oral health.
  </p>

</section>

{/* FREQUENTLY ASKED QUESTIONS */}
<section className="services-faq">

  <p className="services-eyebrow">
    PATIENT RESOURCES
  </p>

  <h2>Frequently Asked Questions</h2>

  <p className="services-faq-description">
    Find answers to common questions about dental
    treatments, consultations, and caring for your smile.
  </p>

  <div className="faq-list">

  <article className="faq-item">

    <button
      className="faq-question"
      onClick={() =>
        setExpandedFaq(
          expandedFaq === 'first-visit' ? null : 'first-visit'
        )
      }
    >
      What should I expect during my first dental visit?
    </button>

    {expandedFaq === 'first-visit' && (
      <div className="faq-answer">
        <p>
          Your first visit typically includes a review of your
          dental history, an examination, and a discussion of
          your oral health goals and potential treatment options.
        </p>
      </div>
    )}

  </article>

  {/* FAQ 02 — ROUTINE CLEANINGS */}
<article className="faq-item">

  <button
    className="faq-question"
    onClick={() =>
      setExpandedFaq(
        expandedFaq === 'cleanings' ? null : 'cleanings'
      )
    }
  >
    How often should I schedule a dental cleaning?
  </button>

  {expandedFaq === 'cleanings' && (
    <div className="faq-answer">
      <p>
        Many patients schedule routine dental cleanings
        every six months. However, your recommended
        schedule may vary depending on your individual
        oral health needs and your dentist's guidance.
      </p>
    </div>
  )}
</article>

  {/* FAQ 03 — DENTAL INSURANCE */}
<article className="faq-item">
  <button
    className="faq-question"
    onClick={() =>
      setExpandedFaq(
        expandedFaq === 'insurance' ? null : 'insurance'
      )
    }
  >
    Do you accept dental insurance?
  </button>

  {expandedFaq === 'insurance' && (
    <div className="faq-answer">
      <p>
        Dental insurance coverage varies by provider and
        individual plan. Contact our office to discuss
        your coverage and available payment options before
        scheduling treatment.
      </p>
    </div>
  )}
</article>

{/* FAQ 04 — DENTAL ANXIETY */}
<article className="faq-item">
  <button
    className="faq-question"
    onClick={() =>
      setExpandedFaq(
        expandedFaq === 'comfort' ? null : 'comfort'
      )
    }
  >
    What if I feel nervous about visiting the dentist?
  </button>

  {expandedFaq === 'comfort' && (
    <div className="faq-answer">
      <p>
        We believe dental visits should feel welcoming
        and supportive. Discuss any concerns with your
        dental team so they can explain the process and
        help you understand your treatment options.
      </p>
    </div>
  )}
</article>

{/* FAQ 05 — COSMETIC TREATMENTS */}
<article className="faq-item">
  <button
    className="faq-question"
    onClick={() =>
      setExpandedFaq(
        expandedFaq === 'cosmetic' ? null : 'cosmetic'
      )
    }
  >
    How do I know which cosmetic treatment is right for me?
  </button>

  {expandedFaq === 'cosmetic' && (
    <div className="faq-answer">
      <p>
        A dental consultation can help determine which
        treatments may be appropriate for your goals,
        oral health, and individual circumstances.
      </p>
    </div>
  )}
</article>

{/* FAQ 06 — APPOINTMENT PREPARATION */}
<article className="faq-item">
  <button
    className="faq-question"
    onClick={() =>
      setExpandedFaq(
        expandedFaq === 'preparation' ? null : 'preparation'
      )
    }
  >
    What should I bring to my first appointment?
  </button>

  {expandedFaq === 'preparation' && (
    <div className="faq-answer">
      <p>
        Consider bringing your identification, insurance
        information if applicable, a list of current
        medications, and any relevant dental records.
      </p>
    </div>
  )}
</article>

{/* FAQ 07 — EMERGENCY CARE */}
<article className="faq-item">
  <button
    className="faq-question"
    onClick={() =>
      setExpandedFaq(
        expandedFaq === 'emergency' ? null : 'emergency'
      )
    }
  >
    What should I do in a dental emergency?
  </button>

  {expandedFaq === 'emergency' && (
    <div className="faq-answer">
      <p>
        In case of a dental emergency, contact our office immediately. We will provide guidance on how to manage the situation and schedule urgent care if necessary.
      </p>
    </div>
  )}
</article>

</div>

</section>

{/* APPOINTMENT CALL TO ACTION */}
<section className="services-cta">

    <p className="services-cta-eyebrow">
        YOUR NEXT STEP
    </p>

  <h2>
    Ready to Take the Next Step Toward a Healthier Smile?
  </h2>

  <p className="services-cta-description">
    Whether you're exploring treatment options or ready to schedule
    a visit, we're here to help you take the next step with confidence.
  </p>

  <Link to="/appointment" className="services-cta-button">
    Request an Appointment
  </Link>

</section>

    </main>
  )
}

export default Services