
import './Providers.css'
import alexandraPortrait from '../assets/alexandra-bennett.png'
import danielPortrait from '../assets/daniel-mitchell.png'
import { Link } from 'react-router-dom'

function Providers() {
  return (
    <main className="providers-page">

      {/* PROVIDERS PAGE CONTENT */}

        {/* PAGE INTRODUCTION */}
        <section className="providers-intro">

        <p className="providers-eyebrow">
            OUR DENTAL PROFESSIONALS
        </p>

        <h1>
            Meet Your Dental Care Team
        </h1>

        <p className="providers-intro-description">
            Our team is committed to providing thoughtful,
            personalized dental care through clinical experience,
            professional dedication, and attention to every patient.
        </p>

        </section>


        {/* PROVIDER PROFILES */}

        <section className="provider-profiles">

        {/* DR. ALEXANDRA BENNETT */}

        <article className="provider-profile">

            {/* PROVIDER PHOTOGRAPH */}
            <div className="provider-image">
            <img
                src={alexandraPortrait}
                alt="Portrait of Dr. Alexandra Bennett"
            />
            </div>

            {/* PROVIDER INFORMATION */}
            <div className="provider-information">

            <p className="provider-specialty">
                COSMETIC & GENERAL DENTISTRY
            </p>

            <h2>Dr. Alexandra Bennett</h2>

            <p className="provider-biography">
                Dr. Bennett is dedicated to providing personalized
                dental care with an emphasis on patient comfort,
                preventive treatment, and attention to detail.
            </p>

            <div className="provider-credentials">
                <h3>Education & Credentials</h3>

                <p>
                Doctor of Dental Surgery (DDS)
                </p>
            </div>

            </div>

        </article>

            {/* DR. DANIEL MITCHELL */}

            <article className="provider-profile provider-profile-reverse">

            {/* PROVIDER INFORMATION */}
            <div className="provider-information">

                <p className="provider-specialty">
                PERIODONTICS
                </p>

                <h2>Dr. Daniel Mitchell, DDS</h2>

                <p className="provider-biography">
                Dr. Mitchell focuses on periodontal health,
                gum disease management, and the maintenance
                of supporting structures around natural teeth
                and dental implants.
                </p>

                <div className="provider-credentials">

                <h3>Education & Credentials</h3>

                <p>
                    Doctor of Dental Medicine (DMD)
                </p>

                <p>
                    Boston University
                </p>

                <p>
                    Specialties: Periodontal therapy, gum health,
                    and dental implants.
                </p>

                </div>

            </div>

            {/* PROVIDER PHOTOGRAPH */}
            <div className="provider-image">

                <img
                src={danielPortrait}
                alt="Portrait of Dr. Daniel Mitchell"
                />

            </div>

            </article>


        </section>


        {/* PRACTICE PHILOSOPHY */}

        <section className="provider-philosophy">

        <p className="philosophy-eyebrow">
            THE AURELIA APPROACH
        </p>

        <h2>
            Smile With Precision & Passion
        </h2>

        <p className="philosophy-description">
            We believe exceptional dental care begins with
            understanding each patient. Our approach combines
            clinical precision, thoughtful treatment planning,
            and a commitment to creating comfortable,
            personalized experiences.
        </p>

        </section>

        {/* APPOINTMENT CALL TO ACTION */}
        <section className="provider-cta">

            <h2>Ready to Meet Your Dental Care Team?</h2>

            <p>
                Discover personalized dental care designed around your needs.
            </p>
            <Link to="/appointment" className="provider-cta-button">
                Schedule an Appointment
            </Link>

        </section>


    </main>
  )
}

export default Providers
