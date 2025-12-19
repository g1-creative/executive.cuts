import './About.css'
import logoImage from '../images/logo and favicon.png'

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero section">
        <div className="container">
          <div className="about-hero-logo">
            <img src={logoImage} alt="Executive Cuts Barber Shop Logo" className="about-hero-logo-image" />
          </div>
          <span className="accent-badge">Our Story</span>
          <h1 className="section-title">About Executive Cuts Barber Shop</h1>
          <p className="section-subtitle">
            A family-friendly, professional barbershop dedicated to providing exceptional grooming services 
            to the Naples community.
          </p>
        </div>
      </section>

      <section className="about-content section">
        <div className="container">
          <div className="about-grid">
            <div className="about-text">
              <h2>Your Trusted Barbershop in Naples</h2>
              <p>
                Executive Cuts Barber Shop is a family-friendly, professional barbershop dedicated to providing 
                exceptional grooming services to the Naples community. We pride ourselves on creating 
                a welcoming atmosphere where clients of all ages feel comfortable and valued.
              </p>
              <p>
                Our friendly, professional barbers are committed to quality cuts and customer satisfaction, 
                ensuring that each cut is executed with precision and attention to detail. Whether you're looking for 
                a classic haircut, a modern fade, beard shaping, or a complete grooming service, we have the skills 
                and dedication to deliver results that exceed your expectations.
              </p>
              <p>
                At Executive Cuts, customer satisfaction is our top priority. We take the time to understand your 
                style preferences and work with you to achieve the look you want. From kids' cuts to all ages, 
                we welcome everyone and treat every client with the respect and professionalism they 
                deserve.
              </p>
              <p>
                Located at 2650 Airport-Pulling Rd, Suite E in Naples, we're conveniently accessible with parking 
                available and wheelchair accessible. Easy to book through our online booking platform. Experience 
                the Executive Cuts difference – where quality, professionalism, and customer care come together.
              </p>
            </div>
            
            <div className="about-image">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop&auto=format&q=80"
                alt="Professional barber at Executive Cuts"
                className="about-img"
              />
            </div>
          </div>

          <div className="about-values">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-item">
                <div className="value-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <h3>Quality</h3>
                <p>We never compromise on the quality of our work. Every cut is executed with precision and care.</p>
              </div>
              <div className="value-item">
                <div className="value-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <h3>Experience</h3>
                <p>Our barbers bring years of experience and stay current with the latest trends and techniques.</p>
              </div>
              <div className="value-item">
                <div className="value-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </div>
                <h3>Customer Focus</h3>
                <p>Your satisfaction is our priority. We listen to your needs and deliver results you'll love.</p>
              </div>
              <div className="value-item">
                <div className="value-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <h3>Community</h3>
                <p>We're proud to serve the Naples community and build lasting relationships with our clients.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

