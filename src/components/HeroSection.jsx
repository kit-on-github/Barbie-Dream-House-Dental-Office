import './HeroSection.css'
import storefrontImage from '../assets/Aurelia-Storefront.png'

function HeroSection() {
  return (
    <section className="hero-section">

      {/* Left column: Practice photograph */}
      <div className="hero-image">

        <img src={storefrontImage} alt="Exterior of Aurelia Dental"/>

      </div>

      {/* Right column: Practice information */}
      <div className="hero-information">

        <h1 className="hero-brand">
          Aurelia Dental
        </h1>

        <div className="hero-location">

          <div className="location-icon">
            {
                <svg
                
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    >
                    <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                </svg>
            }
          </div>

          <div className="location-address">
            <p>
              850 Madison Ave, Suite 402
              <br />
              New York, New York, 10021
              <br />
              United States
            </p>
          </div>

        </div>

      </div>

    </section>
  )
}

export default HeroSection