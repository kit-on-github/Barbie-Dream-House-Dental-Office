import './Insurance.css'
import { Link } from 'react-router-dom'

function Insurance() {
  return (
    <main className="insurance-page">

        {/* PAGE INTRODUCTION */}
        <section className="insurance-intro">

            <h1>
                Dental Insurance & Payment Information
            </h1>

            <p>
                Understanding your dental insurance can help you make informed
                decisions about your care. Explore the information below to learn
                about insurance plans, dental benefits, and how to verify your
                coverage before your visit.
            </p>

        </section>

        {/* INSURANCE PROVIDERS */}
        <section className="insurance-providers">

            <h2>Insurance Plans to Verify</h2>

            <p className="insurance-providers-description">
                Dental insurance plans and provider participation can vary.
                Contact our office to confirm whether your specific plan is
                accepted and to discuss your available benefits before
                scheduling treatment.
            </p>

            <div className="insurance-provider-grid">


                <div className="insurance-provider-card">
                    <h3>Delta Dental</h3>
                    <p>
                        Review your plan details and confirm provider
                        participation with our office.
                    </p>

                    <span className="insurance-verification-label">
                        Coverage verification required
                    </span>
                </div>

                <div className="insurance-provider-card">
                <h3>Aetna</h3>
                <p>
                    Review your plan details and confirm provider
                    participation with our office.
                </p>
                <span className="insurance-verification-label">
                    Coverage verification required
                </span>
                </div>

                <div className="insurance-provider-card">
                <h3>Cigna</h3>
                <p>
                    Review your plan details and confirm provider
                    participation with our office.
                </p>
                <span className="insurance-verification-label">
                    Coverage verification required
                </span>
                </div>

                <div className="insurance-provider-card">
                <h3>MetLife</h3>
                <p>
                    Review your plan details and confirm provider
                    participation with our office.
                </p>
                <span className="insurance-verification-label">
                    Coverage verification required
                </span>
                </div>

                <div className="insurance-provider-card">
                <h3>Guardian</h3>
                <p>
                    Review your plan details and confirm provider
                    participation with our office.
                </p>
                <span className="insurance-verification-label">
                    Coverage verification required
                </span>
                </div>

                <div className="insurance-provider-card">
                <h3>UnitedHealthcare</h3>
                <p>
                    Review your plan details and confirm provider
                    participation with our office.
                </p>
                <span className="insurance-verification-label">
                    Coverage verification required
                </span>
                </div>

            </div>

        </section>

        {/* UNDERSTANDING DENTAL BENEFITS */}
        <section className="insurance-benefits">

            <h2>Understanding Your Dental Benefits</h2>

                <p className="insurance-benefits-description">
                Understanding the details of your dental insurance can help you
                plan for treatment costs and make informed decisions about your
                oral health. Here are some common terms to know when reviewing
                your dental benefits.
                </p>

            <div className="insurance-benefits-grid">

                <div className="insurance-benefit-item">

                    <h3>Annual Deductibles</h3>

                        <p>
                            A deductible is the amount you may need to pay out of pocket
                            for covered dental services before your insurance begins
                            contributing toward eligible treatment costs.
                        </p>

                </div>

                <div className="insurance-benefit-item">

                    <h3>Annual Maximums</h3>

                        <p>
                            An annual maximum is the total amount your dental insurance
                            plan may contribute toward eligible dental services during
                            a benefit year. Any costs beyond that limit may be your
                            responsibility.
                        </p>

                </div>

                <div className="insurance-benefit-item">

                    <h3>Copayments & Coinsurance</h3>

                        <p>
                            Depending on your dental insurance plan, you may be responsible
                            for a fixed copayment or a percentage of the cost of certain
                            covered dental procedures.
                        </p>

                </div>

                <div className="insurance-benefit-item">

                    <h3>Preventive Care Coverage</h3>

                        <p>
                            Some dental insurance plans provide benefits for preventive
                            services such as routine examinations, professional cleanings,
                            and dental X-rays. Coverage frequency and limitations vary
                            by plan.
                        </p>

                </div>
            </div>

        </section>

        {/* INSURANCE VERIFICATION CTA */}
        <section className="insurance-cta">

            <p className="insurance-cta-eyebrow">
                NEED HELP WITH YOUR COVERAGE?
            </p>

            <h2>
                Let's Review Your Dental Insurance
            </h2>

            <p className="insurance-cta-description">
                Have questions about your dental benefits? Contact our office to
                discuss your insurance plan, review coverage details, and understand
                potential costs before scheduling treatment.
            </p>

            <Link to="/appointment" className="insurance-cta-button">
            Request an Appointment
            </Link>

        </section>

    </main>
  )
}

export default Insurance