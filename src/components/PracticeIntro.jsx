
import './PracticeIntro.css'

import practiceInterior from '../assets/Aurelia-Interior.png'

function PracticeIntro() {
  return (
    <section className="practice-intro">

      <div className="practice-intro-heading">
        <h2>Our Approach to Dental Care</h2>
      </div>

      <div className="practice-intro-layout">

        <div className="practice-intro-image">

        <img
                src={practiceInterior}
                alt="Aurelia Dental reception and waiting area"
            />
        </div>

        <div className="practice-intro-content">
          <p className="practice-eyebrow">
            About Aurelia Dental
          </p>

          <h2>
            A Thoughtful Approach to Dental Care
          </h2>

          <p>
            At Aurelia Dental, we believe that exceptional dental
            care begins with understanding each patient's needs.
            Our approach emphasizes comfort, thoughtful treatment
            planning, and long-term oral health.
          </p>

          <button className="practice-intro-button">
            Learn More
          </button>
        </div>

      </div>

    </section>
  )
}

export default PracticeIntro
