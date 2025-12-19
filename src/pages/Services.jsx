import { Link } from 'react-router-dom'
import { 
  FaCut, 
  FaCrown, 
  FaStore, 
  FaBolt, 
  FaChild, 
  FaUser, 
  FaCut as FaRazor,
  FaClock,
  FaStar
} from 'react-icons/fa'
import BooksyWidget from '../components/BooksyWidget'
import './Services.css'

const Services = () => {
  const featuredServices = [
    { 
      name: 'Full Haircut + Beard', 
      duration: '45 min', 
      price: '$45',
      description: 'Complete grooming experience including haircut and beard trim',
      featured: true,
      Icon: FaCut
    },
  ]

  const hairServices = [
    { name: 'Haircuts (fades, tapers, classic cuts)', duration: '30 min', price: '$35', Icon: FaCut },
  ]

  const comboServices = [
    { name: 'Full Haircut + Beard', duration: '45 min', price: '$45', Icon: FaCut },
  ]

  const specialServices = [
    { name: 'Kids\' Haircuts', duration: '25 min', price: '$30', Icon: FaChild },
    { name: 'Beard Shaping and Trims', duration: '20 min', price: '$15', Icon: FaRazor },
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
                  <div className="featured-service-content">
                    <div className="featured-service-image">
                      <img 
                        src={index === 0 
                          ? 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=700&h=500&fit=crop&auto=format&q=80'
                          : 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=700&h=500&fit=crop&auto=format&q=80'
                        }
                        alt={service.name}
                        className="featured-service-img"
                      />
                      <div className="featured-service-image-overlay"></div>
                    </div>
                    <div className="featured-service-info">
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
                  </div>
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
              <FaCut className="category-icon" />
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
              <FaStore className="category-icon" />
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
              <p>Book your appointment today and experience the Executive Cuts difference</p>
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

