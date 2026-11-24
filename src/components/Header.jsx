
import './Header.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="site-header">

      {/* BRAND LOGO */}
      <Link to="/" className="site-brand">

        <svg
          className="brand-icon"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M16 4
               C11 4 7.5 7 7.5 12
               C7.5 16 9.5 19 10.5 23
               C11 25 12 28 13.5 28
               C15 28 14.5 20 16 20
               C17.5 20 17 28 18.5 28
               C20 28 21 25 21.5 23
               C22.5 19 24.5 16 24.5 12
               C24.5 7 21 4 16 4Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        </svg>

        <span>Aurelia Dental</span>

      </Link>

      {/* MOBILE MENU BUTTON */}
      <button
        className="mobile-menu-toggle"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label={
          isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
        }
        aria-expanded={isMenuOpen}
      >
        {isMenuOpen ? '×' : '☰'}
      </button>

      {/* MAIN NAVIGATION */}
      <nav
        className={`main-navigation ${isMenuOpen ? 'is-open' : ''}`}
      >
        <Link to="/messages" onClick={() => setIsMenuOpen(false)}>
          Messages
        </Link>

        <Link to="/providers" onClick={() => setIsMenuOpen(false)}>
          Providers
        </Link>

        <Link to="/services" onClick={() => setIsMenuOpen(false)}>
          Services
        </Link>

        <Link to="/appointment" onClick={() => setIsMenuOpen(false)}>
          Appointment
        </Link>

        <Link to="/insurance" onClick={() => setIsMenuOpen(false)}>
          Insurance
        </Link>

        <Link to="/shop" onClick={() => setIsMenuOpen(false)}>
          Shop
        </Link>
      </nav>

    </header>
  )
}

export default Header
