import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { FaCut, FaStar, FaUsers, FaMapMarkerAlt, FaPhone, FaStar as FaStarIcon } from 'react-icons/fa'
import BooksyWidget from '../components/BooksyWidget'
import Testimonials3D from '../components/Testimonials3D'
import ImageAutoSlider from '../components/ImageAutoSlider'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import logoImage from '../images/logo and favicon.png'
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
      review: 'Best barbershop in Naples! The attention to detail is unmatched. Every cut is perfect.',
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

  // Scroll animations for testimonials, features, and services
  const testimonialRefs = useRef([])
  const featureRefs = useRef([])
  const serviceRefs = useRef([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible')
            }, index * 150)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    testimonialRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    featureRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    serviceRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => {
      testimonialRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
      featureRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
      serviceRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref)
      })
    }
  }, [])

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-bg-pattern"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-logo animate-fadeIn">
              <img src={logoImage} alt="Executive Cuts Barber Shop Logo" className="hero-logo-image" />
            </div>
            <span className="accent-badge animate-fadeIn">Premium Barbershop</span>
            <h1 className="hero-title animate-fadeInUp">
              Precision Cuts.{' '}
              <span className="accent-text">Clean Fades.</span>{' '}
              Professional Service.
            </h1>
            <p className="hero-subtitle animate-fadeInUp animate-delay-1">
              Experience the finest in barbershop services at Executive Cuts. Our friendly, professional barbers are committed 
              to quality cuts and customer satisfaction, ensuring you leave looking sharp and feeling confident.
            </p>
            <div className="hero-cta animate-fadeInUp animate-delay-2">
              <Link 
                to="/booking"
                className="btn btn-accent"
              >
                Book Appointment
              </Link>
              <a 
                href="tel:+12392346204" 
                className="btn btn-secondary"
              >
                <FaPhone /> Call Now
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
            <img 
              src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=1200&h=800&fit=crop&auto=format&q=80"
              alt="Professional barbershop - Executive Cuts"
              className="hero-img"
            />
          </div>
        </div>
      </section>

      <section className="features section pattern-bg">
        <div className="container">
          <h2 className="section-title">Why Choose Executive Cuts?</h2>
          <p className="section-subtitle">
            Experience the perfect blend of traditional barbering excellence and modern style
          </p>
          <div className="features-grid">
            {[
              { icon: FaCut, title: 'Master Barbers', text: 'Skilled professionals with over a decade of experience in precision cuts, modern fades, and classic styles.', premium: false },
              { icon: FaStar, title: 'Premium Service', text: 'We take pride in every detail, ensuring exceptional quality and customer satisfaction with every visit.', premium: true },
              { icon: FaUsers, title: 'All Ages Welcome', text: 'Family-friendly atmosphere serving men, kids, and seniors with personalized care and attention.', premium: false },
              { icon: FaMapMarkerAlt, title: 'Prime Location', text: 'Conveniently located in Naples with easy online booking and flexible scheduling. Wheelchair accessible with parking available.', premium: false },
            ].map((feature, index) => {
              const Icon = feature.icon
              return (
                <div 
                  key={index}
                  ref={(el) => (featureRefs.current[index] = el)}
                  className={`feature-card card ${feature.premium ? 'card-premium' : ''}`}
                >
                  <div className="feature-icon-wrapper">
                    <div className="feature-icon">
                      <Icon />
                    </div>
                  </div>
                  <h3>{feature.title}</h3>
                  <div className="decorative-line"></div>
                  <p>{feature.text}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="services-preview section">
        <div className="container">
          <h2 className="section-title">Signature Services</h2>
          <p className="section-subtitle">
            From classic cuts to modern fades, we offer premium grooming services tailored to your style
          </p>
          
          {/* Image Auto Slider */}
          <div className="services-preview-slider">
            <ImageAutoSlider />
          </div>

          <div className="services-preview-grid">
            {[
              { 
                image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=700&h=500&fit=crop&auto=format&q=80',
                title: 'Haircuts', 
                desc: 'Fades, tapers, classic cuts', 
                price: '$35' 
              },
              { 
                image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=700&h=500&fit=crop&auto=format&q=80',
                title: 'Beard Trims', 
                desc: 'Shaping and trimming', 
                price: '$15' 
              },
              { 
                image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=700&h=500&fit=crop&auto=format&q=80',
                title: 'Full Haircut + Beard', 
                desc: 'Complete grooming package', 
                price: '$45' 
              },
            ].map((service, index) => (
              <div 
                key={index}
                ref={(el) => {
                  if (!serviceRefs.current) serviceRefs.current = []
                  serviceRefs.current[index] = el
                }}
                className="service-preview-card card"
              >
                <div className="service-preview-image">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="service-preview-img"
                  />
                  <div className="service-preview-image-overlay"></div>
                </div>
                <div className="service-preview-content">
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <span className="service-price">{service.price}</span>
                </div>
              </div>
            ))}
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
          <div className="testimonials-3d-wrapper-section">
            <Testimonials3D />
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
            <p>Join thousands of satisfied customers who trust Executive Cuts for their grooming needs</p>
            <div className="cta-buttons">
              <Link 
                to="/booking"
                className="btn btn-accent"
              >
                Book Appointment Now
              </Link>
              <a 
                href="tel:+12392346204" 
                className="btn btn-secondary"
              >
                Call (239) 234-6204
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

