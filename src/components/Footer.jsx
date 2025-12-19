import { Link } from 'react-router-dom'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaYelp } from 'react-icons/fa'
import logoImage from '../images/logo and favicon.png'
import './Footer.css'

const Footer = () => {
  const socialLinks = [
    { name: 'Facebook', Icon: FaFacebook, url: '#' },
    { name: 'Instagram', Icon: FaInstagram, url: 'https://www.instagram.com/executivecutsbarbershop/' },
    { name: 'Twitter', Icon: FaTwitter, url: '#' },
    { name: 'Yelp', Icon: FaYelp, url: '#' },
  ]

  const businessHours = [
    { days: 'Monday - Friday', hours: '9:00 AM - 7:00 PM' },
    { days: 'Saturday', hours: '9:00 AM - 8:00 PM' },
    { days: 'Sunday', hours: '10:00 AM - 3:00 PM' },
  ]

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section footer-brand">
              <div className="footer-logo">
                <img src={logoImage} alt="Executive Cuts Barber Shop" />
                <div>
                  <h3 className="footer-title">Executive Cuts</h3>
                  <span className="footer-subtitle">Barber Shop</span>
                </div>
              </div>
              <p className="footer-description">
                Your trusted barbershop in Naples. Friendly, professional barbers committed to quality cuts 
                and customer satisfaction. Wheelchair accessible with parking available.
              </p>
              <div className="footer-social">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.Icon
                  return (
                    <a 
                      key={index}
                      href={social.url}
                      className="social-link"
                      aria-label={social.name}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconComponent className="social-icon" />
                    </a>
                  )
                })}
              </div>
            </div>

            <div className="footer-section">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/booking">Book Appointment</Link></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4 className="footer-heading">Business Hours</h4>
              <ul className="footer-hours">
                {businessHours.map((schedule, index) => (
                  <li key={index}>
                    <span className="hours-days">{schedule.days}</span>
                    <span className="hours-time">{schedule.hours}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-section">
              <h4 className="footer-heading">Get in Touch</h4>
              <ul className="footer-contact">
                <li className="contact-item">
                  <FaPhone className="contact-icon" />
                  <a href="tel:+12392346204">(239) 234-6204</a>
                </li>
                <li className="contact-item">
                  <FaEnvelope className="contact-icon" />
                  <a href="mailto:info@executivecuts.com">info@executivecuts.com</a>
                </li>
                <li className="contact-item">
                  <FaMapMarkerAlt className="contact-icon" />
                  <span>
                    2650 Airport-Pulling Rd<br />
                    Suite E<br />
                    Naples, FL 34112
                  </span>
                </li>
              </ul>
              <Link to="/booking" className="btn btn-accent footer-btn">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              &copy; {new Date().getFullYear()} Executive Cuts Barber Shop. All rights reserved.
            </p>
            <div className="footer-legal">
              <Link to="/privacy">Privacy Policy</Link>
              <span className="separator">•</span>
              <Link to="/terms">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

