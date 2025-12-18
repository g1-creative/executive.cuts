import { Link } from 'react-router-dom'
import { 
  FaScissors, 
  FaCrown, 
  FaCut, 
  FaBarberShop, 
  FaBolt, 
  FaChild, 
  FaUser, 
  FaRazor,
  FaClock,
  FaStar
} from 'react-icons/fa'
import BooksyWidget from '../components/BooksyWidget'
import './Services.css'

const Services = () => {
  const featuredServices = [
    { 
      name: 'Full Service', 
      duration: '60 min', 
      price: '$50',
      description: 'Complete grooming experience including haircut, beard trim, hot towel, and styling',
      featured: true,
      Icon: FaScissors
    },
    { 
      name: 'Royal Service', 
      duration: '75 min', 
      price: '$65',
      description: 'Our premium package with everything you need for the ultimate grooming experience',
      featured: true,
      Icon: FaCrown
    },
  ]

  const hairServices = [
    { name: 'Regular Haircut', duration: '30 min', price: '$25', Icon: FaScissors },
    { name: 'Skin Fade', duration: '35 min', price: '$30', Icon: FaBarberShop },
    { name: 'Taper', duration: '30 min', price: '$25', Icon: FaCut },
    { name: 'Buzz Cut', duration: '20 min', price: '$18', Icon: FaBolt },
  ]

  const comboServices = [
    { name: 'Haircut + Beard', duration: '45 min', price: '$35', Icon: FaScissors },
    { name: 'Skin Fade + Beard', duration: '50 min', price: '$40', Icon: FaBarberShop },
    { name: 'Haircut & Eyebrows', duration: '35 min', price: '$30', Icon: FaScissors },
  ]

  const specialServices = [
    { name: 'Kids Haircut', duration: '25 min', price: '$20', Icon: FaChild },
    { name: 'Senior Haircut', duration: '30 min', price: '$22', Icon: FaUser },
    { name: 'Beard Lineup', duration: '20 min', price: '$15', Icon: FaRazor },
  ]

  return (
    <div className="services-page">
      <section className="services-hero section pattern-bg">
        <div className="container">
          <span className="accent-badge">Premium Services</span>
          <h1 className="section-title">Expert Grooming Services</h1>
          <p className="section-subtitle">
            From classic cuts to modern fades, our master barbers deliver precision, style, and exceptional service every time
          </p>
        </div>
      </section>

      <section className="featured-services section">
        <div className="container">
          <h2 className="section-title">Signature Packages</h2>
          <div className="featured-services-grid">
            {featuredServices.map((service, index) => {
              const IconComponent = service.Icon
              return (
                <div key={index} className="featured-service-card card card-premium">
                  <div className="featured-service-icon">
                    <IconComponent />
                  </div>
                  <h3>{service.name}</h3>
                  <p className="featured-service-description">{service.description}</p>
                  <div className="featured-service-details">
                    <span className="service-duration">
                      <FaClock className="icon" /> {service.duration}
                    </span>
                    <span className="service-price-large">{service.price}</span>
                  </div>
                  <Link to="/booking" className="btn btn-accent">
                    Book This Service
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="services-list section">
        <div className="container">
          <div className="service-category">
            <h2 className="category-title">
              <FaScissors className="category-icon" />
              Haircuts
            </h2>
            <div className="decorative-line"></div>
            <div className="services-grid">
              {hairServices.map((service, index) => {
                const IconComponent = service.Icon
                return (
                  <div key={index} className="service-card card">
                    <div className="service-icon-small">
                      <IconComponent />
                    </div>
                    <div className="service-info">
                      <h3 className="service-name">{service.name}</h3>
                      <span className="service-duration">{service.duration}</span>
                    </div>
                    <div className="service-price">{service.price}</div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="service-category">
            <h2 className="category-title">
              <FaBarberShop className="category-icon" />
              Combo Services
            </h2>
            <div className="decorative-line"></div>
            <div className="services-grid">
              {comboServices.map((service, index) => {
                const IconComponent = service.Icon
                return (
                  <div key={index} className="service-card card">
                    <div className="service-icon-small">
                      <IconComponent />
                    </div>
                    <div className="service-info">
                      <h3 className="service-name">{service.name}</h3>
                      <span className="service-duration">{service.duration}</span>
                    </div>
                    <div className="service-price">{service.price}</div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="service-category">
            <h2 className="category-title">
              <FaStar className="category-icon" />
              Special Services
            </h2>
            <div className="decorative-line"></div>
            <div className="services-grid">
              {specialServices.map((service, index) => {
                const IconComponent = service.Icon
                return (
                  <div key={index} className="service-card card">
                    <div className="service-icon-small">
                      <IconComponent />
                    </div>
                    <div className="service-info">
                      <h3 className="service-name">{service.name}</h3>
                      <span className="service-duration">{service.duration}</span>
                    </div>
                    <div className="service-price">{service.price}</div>
                  </div>
                )
              })}
            </div>
          </div>
          
          <div className="services-cta">
            <div className="cta-box">
              <h3>Ready to Get Started?</h3>
              <p>Book your appointment today and experience the LDB Cuts difference</p>
              <Link 
                to="/booking"
                className="btn btn-accent"
              >
                Book Your Service Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="services-booking section pattern-bg">
        <div className="container">
          <h2 className="section-title">Book Your Appointment</h2>
          <p className="section-subtitle">
            Select your preferred service, choose an available time slot, and book instantly
          </p>
          <div className="services-booking-widget">
            <BooksyWidget variant="inline" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services

