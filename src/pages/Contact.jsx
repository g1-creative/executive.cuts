import { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const address = "8951 Bonita Beach Rd SE Suite 580, Unit 8, Bonita Springs, FL 34135"
  const phone = "(239) 465-7270"
  const email = "ldbcutsbarbershop@gmail.com"
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  
  const [formStatus, setFormStatus] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Contact from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n\n` +
      `Message:\n${formData.message}`
    )
    
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
    
    setFormStatus('Opening your email client...')
    setTimeout(() => {
      setFormStatus('')
      setFormData({ name: '', email: '', phone: '', message: '' })
    }, 3000)
  }

  return (
    <div className="contact-page">
      <section className="contact-hero section">
        <div className="container">
          <span className="accent-badge">Let's Connect</span>
          <h1 className="section-title">Contact Us</h1>
          <p className="contact-intro">
            We'd love to hear from you. Visit us in Bonita Springs or reach out through any of the channels below.
          </p>
        </div>
      </section>

      <section className="contact-content section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2 className="contact-section-title">Get in Touch</h2>
              <p className="contact-subtitle">Choose your preferred way to reach us</p>
              
              <div className="contact-cards">
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card"
                >
                  <div className="contact-card-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div className="contact-card-content">
                    <h3>Visit Us</h3>
                    <address>{address}</address>
                  </div>
                  <div className="contact-card-arrow">→</div>
                </a>

                <a 
                  href={`tel:+1${phone.replace(/\D/g, '')}`}
                  className="contact-card"
                >
                  <div className="contact-card-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div className="contact-card-content">
                    <h3>Call Us</h3>
                    <p>{phone}</p>
                  </div>
                  <div className="contact-card-arrow">→</div>
                </a>

                <a 
                  href={`mailto:${email}`}
                  className="contact-card"
                >
                  <div className="contact-card-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <div className="contact-card-content">
                    <h3>Email Us</h3>
                    <p>{email}</p>
                  </div>
                  <div className="contact-card-arrow">→</div>
                </a>
              </div>

              <div className="business-hours-card">
                <div className="hours-header">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                  <h3>Business Hours</h3>
                </div>
                <div className="hours-list">
                  <div className="hours-row">
                    <span className="day">Monday - Friday</span>
                    <span className="time">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="hours-row">
                    <span className="day">Saturday</span>
                    <span className="time">8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="hours-row closed">
                    <span className="day">Sunday</span>
                    <span className="time">Closed</span>
                  </div>
                </div>
                <p className="hours-note">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="12" y1="8" x2="12" y2="12"/>
                    <line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                  Hours may vary. Check Booksy for current availability.
                </p>
              </div>

              <div className="social-connect">
                <h3>Follow Us</h3>
                <div className="social-links">
                  <a 
                    href="https://www.instagram.com/ldbcuts/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link instagram"
                    aria-label="Instagram"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="white"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="white" strokeWidth="2"/>
                    </svg>
                  </a>
                  <a 
                    href="https://www.facebook.com/ldbcutsbarbershop" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link facebook"
                    aria-label="Facebook"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                    </svg>
                  </a>
                  <a 
                    href="https://booksy.com/en-us/1073297_ldbcuts-barbershop_barber-shop_15815_bonita-springs" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link booksy"
                    aria-label="Booksy"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="contact-cta">
                <a 
                  href="https://booksy.com/en-us/1073297_ldbcuts-barbershop_barber-shop_15815_bonita-springs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-accent"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                    <line x1="16" y1="2" x2="16" y2="6"/>
                    <line x1="8" y1="2" x2="8" y2="6"/>
                    <line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  Book Your Appointment Now
                </a>
              </div>
            </div>

            <div className="contact-sidebar">
              <div className="contact-map">
                <div className="map-container">
                  <iframe
                    src={`https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="LDB Cuts Barbershop Location"
                  ></iframe>
                </div>
                <a 
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-link"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                  Get Directions
                </a>
              </div>

              <div className="contact-form-card">
                <h3>Send Us a Message</h3>
                <p className="form-subtitle">Have a question? We'll get back to you soon.</p>
                
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(239) 465-7270"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us how we can help you..."
                      rows="4"
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="22" y1="2" x2="11" y2="13"/>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                    Send Message
                  </button>

                  {formStatus && (
                    <p className="form-status">{formStatus}</p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

