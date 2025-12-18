import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoImage from '../images/logo and favicon.png'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const isActive = (path) => location.pathname === path

  return (
    <>
      {isMenuOpen && (
        <div 
          className="nav-overlay"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <Link to="/" className="logo" onClick={closeMenu}>
              <img src={logoImage} alt="LDB Cuts Barbershop" className="logo-image" />
              <div className="logo-text-container">
                <span className="logo-text">LDB Cuts</span>
                <span className="logo-subtitle">Barbershop</span>
              </div>
            </Link>
            
            <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <Link 
              to="/" 
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={`nav-link ${isActive('/services') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className={`nav-link ${isActive('/about') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              About
            </Link>
            <Link 
              to="/gallery" 
              className={`nav-link ${isActive('/gallery') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Gallery
            </Link>
            <Link 
              to="/contact" 
              className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
              onClick={closeMenu}
            >
              Contact
            </Link>
            <Link 
              to="/booking" 
              className="btn btn-primary nav-cta"
              onClick={closeMenu}
            >
              Book Now
            </Link>
          </nav>

          <button 
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header

