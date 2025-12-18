import { Link } from 'react-router-dom'
import BooksyWidget from '../components/BooksyWidget'
import './Home.css'

const Home = () => {
  const stats = [
    { number: '10+', label: 'Years Experience' },
    { number: '5000+', label: 'Happy Clients' },
    { number: '4.9', label: 'Star Rating' },
    { number: '100%', label: 'Satisfaction' },
  ]

  const testimonials = [
    {
      name: 'Michael Rodriguez',
      review: 'Best barbershop in Bonita Springs! The attention to detail is unmatched. Every cut is perfect.',
      rating: 5,
    },
    {
      name: 'James Thompson',
      review: 'Professional, clean, and always on time. My go-to spot for the past 3 years.',
      rating: 5,
    },
    {
      name: 'David Chen',
      review: 'The barbers really know their craft. Great atmosphere and excellent service every time.',
      rating: 5,
    },
  ]

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-bg-pattern"></div>
        <div className="container">
          <div className="hero-content">
            <span className="accent-badge animate-fadeIn">Premium Barbershop</span>
            <h1 className="hero-title animate-fadeInUp">
              Precision Cuts.{' '}
              <span className="accent-text">Clean Fades.</span>{' '}
              Professional Service.
            </h1>
            <p className="hero-subtitle animate-fadeInUp animate-delay-1">
              Experience the finest in barbershop services at LDB Cuts. Our master barbers bring years of expertise 
              to every cut, ensuring you leave looking sharp and feeling confident.
            </p>
            <div className="hero-cta animate-fadeInUp animate-delay-2">
              <Link 
                to="/booking"
                className="btn btn-accent"
              >
                Book Appointment
              </Link>
              <a 
                href="tel:+12394657270" 
                className="btn btn-secondary"
              >
                <span>📞</span> Call Now
              </a>
            </div>
            <div className="hero-stats">
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-image">
            <div className="image-placeholder">
              <div className="image-placeholder-overlay"></div>
              <div className="placeholder-content">
                <div className="placeholder-icon">✂️</div>
                <span>Professional Barbershop</span>
                <p>Add your hero image here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features section pattern-bg">
        <div className="container">
          <h2 className="section-title">Why Choose LDB Cuts?</h2>
          <p className="section-subtitle">
            Experience the perfect blend of traditional barbering excellence and modern style
          </p>
          <div className="features-grid">
            <div className="feature-card card">
              <div className="feature-icon-wrapper">
                <div className="feature-icon">✂️</div>
              </div>
              <h3>Master Barbers</h3>
              <div className="decorative-line"></div>
              <p>Skilled professionals with over a decade of experience in precision cuts, modern fades, and classic styles.</p>
            </div>
            <div className="feature-card card card-premium">
              <div className="feature-icon-wrapper">
                <div className="feature-icon">⭐</div>
              </div>
              <h3>Premium Service</h3>
              <div className="decorative-line"></div>
              <p>We take pride in every detail, ensuring exceptional quality and customer satisfaction with every visit.</p>
            </div>
            <div className="feature-card card">
              <div className="feature-icon-wrapper">
                <div className="feature-icon">👨‍👩‍👧‍👦</div>
              </div>
              <h3>All Ages Welcome</h3>
              <div className="decorative-line"></div>
              <p>Family-friendly atmosphere serving men, kids, and seniors with personalized care and attention.</p>
            </div>
            <div className="feature-card card">
              <div className="feature-icon-wrapper">
                <div className="feature-icon">📍</div>
              </div>
              <h3>Prime Location</h3>
              <div className="decorative-line"></div>
              <p>Conveniently located in Bonita Springs with easy online booking and flexible scheduling.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="services-preview section">
        <div className="container">
          <h2 className="section-title">Signature Services</h2>
          <p className="section-subtitle">
            From classic cuts to modern fades, we offer premium grooming services tailored to your style
          </p>
          <div className="services-preview-grid">
            <div className="service-preview-card card">
              <div className="service-preview-image image-placeholder">
                <div className="image-placeholder-overlay"></div>
                <div className="placeholder-content">
                  <span>Haircut</span>
                </div>
              </div>
              <div className="service-preview-content">
                <h3>Classic Haircut</h3>
                <p>Precision cutting and styling</p>
                <span className="service-price">Starting at $25</span>
              </div>
            </div>
            <div className="service-preview-card card">
              <div className="service-preview-image image-placeholder">
                <div className="image-placeholder-overlay"></div>
                <div className="placeholder-content">
                  <span>Fade</span>
                </div>
              </div>
              <div className="service-preview-content">
                <h3>Skin Fade</h3>
                <p>Clean, modern fade cuts</p>
                <span className="service-price">Starting at $30</span>
              </div>
            </div>
            <div className="service-preview-card card">
              <div className="service-preview-image image-placeholder">
                <div className="image-placeholder-overlay"></div>
                <div className="placeholder-content">
                  <span>Beard</span>
                </div>
              </div>
              <div className="service-preview-content">
                <h3>Beard Grooming</h3>
                <p>Shaping, trimming & styling</p>
                <span className="service-price">Starting at $15</span>
              </div>
            </div>
          </div>
          <div className="services-preview-cta">
            <Link to="/services" className="btn btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="testimonials section">
        <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it – hear from our satisfied customers
          </p>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card card">
                <div className="testimonial-stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">⭐</span>
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.review}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="author-info">
                    <h4>{testimonial.name}</h4>
                    <span>Verified Customer</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="booking-preview section pattern-bg">
        <div className="container">
          <h2 className="section-title">Book Your Appointment</h2>
          <p className="section-subtitle">
            Convenient online booking – Select your service, choose your date & time, and get instant confirmation
          </p>
          <div className="booking-preview-widget">
            <BooksyWidget variant="inline" />
          </div>
          <div className="booking-preview-cta">
            <Link to="/booking" className="btn btn-secondary">
              View Full Booking Options
            </Link>
          </div>
        </div>
      </section>

      <section className="cta-section section">
        <div className="cta-bg-pattern"></div>
        <div className="container">
          <div className="cta-content">
            <span className="accent-badge">Limited Availability</span>
            <h2>Ready for Your Best Cut?</h2>
            <p>Join thousands of satisfied customers who trust LDB Cuts for their grooming needs</p>
            <div className="cta-buttons">
              <Link 
                to="/booking"
                className="btn btn-accent"
              >
                Book Appointment Now
              </Link>
              <a 
                href="tel:+12394657270" 
                className="btn btn-secondary"
              >
                Call (239) 465-7270
              </a>
            </div>
            <div className="cta-features">
              <span>✓ Same-Day Appointments</span>
              <span>✓ Walk-Ins Welcome</span>
              <span>✓ All Ages Served</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

