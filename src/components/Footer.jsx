import { Link } from 'react-router-dom'
import logoImage from '../images/logo and favicon.png'
import './Footer.css'

const Footer = () => {
  const socialLinks = [
    { name: 'Facebook', icon: 'facebook', url: '#' },
    { name: 'Instagram', icon: 'instagram', url: '#' },
    { name: 'Twitter', icon: 'twitter', url: '#' },
    { name: 'Yelp', icon: 'yelp', url: '#' },
  ]

  const businessHours = [
    { days: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
    { days: 'Saturday', hours: '8:00 AM - 5:00 PM' },
    { days: 'Sunday', hours: 'Closed' },
  ]

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section footer-brand">
              <div className="footer-logo">
                <img src={logoImage} alt="LDB Cuts Barbershop" />
                <div>
                  <h3 className="footer-title">LDB Cuts</h3>
                  <span className="footer-subtitle">Barbershop</span>
                </div>
              </div>
              <p className="footer-description">
                Your trusted barbershop in Bonita Springs. Delivering precision cuts, clean fades, 
                and exceptional grooming services since day one.
              </p>
              <div className="footer-social">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url}
                    className={`social-link social-${social.icon}`}
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="social-icon">{social.name.charAt(0)}</span>
                  </a>
                ))}
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
                  <span className="contact-icon">📞</span>
                  <a href="tel:+12394657270">(239) 465-7270</a>
                </li>
                <li className="contact-item">
                  <span className="contact-icon">✉️</span>
                  <a href="mailto:ldbcutsbarbershop@gmail.com">ldbcutsbarbershop@gmail.com</a>
                </li>
                <li className="contact-item">
                  <span className="contact-icon">📍</span>
                  <span>
                    8951 Bonita Beach Rd SE<br />
                    Suite 580, Unit 8<br />
                    Bonita Springs, FL 34135
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
              &copy; {new Date().getFullYear()} LDB Cuts Barbershop. All rights reserved.
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

