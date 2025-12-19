import { 
  FaCalendarAlt, 
  FaCut, 
  FaClock, 
  FaCheckCircle, 
  FaSyncAlt, 
  FaCreditCard 
} from 'react-icons/fa'
import './Booking.css'

const Booking = () => {
  const booksyUrl = 'https://booksy.com/en-us/811014_executive-cuts_barber-shop_15685_naples'

  const openBooksy = () => {
    // Open Booksy in a new window with specific dimensions
    const width = 1200
    const height = 800
    const left = (window.screen.width - width) / 2
    const top = (window.screen.height - height) / 2
    
    window.open(
      booksyUrl,
      'BooksyBooking',
      `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes`
    )
  }

  return (
    <div className="booking-page">
      <section className="booking-hero section">
        <div className="container">
          <h1 className="section-title">Book Your Appointment</h1>
          <p className="booking-intro">
            Select a service, choose your preferred date and time, and book your appointment online. 
            All bookings are confirmed instantly.
          </p>
        </div>
      </section>

      <section className="booking-widget-section section">
        <div className="container">
          <div className="booksy-widget-container">
            <div className="booksy-widget-preview">
              <div className="booksy-preview-header">
                <h2>Ready to Book?</h2>
                <p>Click the button below to open our booking system in a new window</p>
              </div>
              <div className="booksy-preview-content">
                <div className="booksy-features">
                  <div className="booksy-feature">
                    <FaCalendarAlt className="feature-icon" />
                    <span>View Real-Time Availability</span>
                  </div>
                  <div className="booksy-feature">
                    <FaCut className="feature-icon" />
                    <span>Choose Your Service</span>
                  </div>
                  <div className="booksy-feature">
                    <FaClock className="feature-icon" />
                    <span>Select Date & Time</span>
                  </div>
                  <div className="booksy-feature">
                    <FaCheckCircle className="feature-icon" />
                    <span>Instant Confirmation</span>
                  </div>
                </div>
                <button 
                  className="booksy-open-button"
                  onClick={openBooksy}
                >
                  Open Booking System
                </button>
                <p className="booksy-note">
                  The booking system will open in a new window for your convenience
                </p>
                <div className="booksy-alternative">
                  <p>Or book directly on Booksy:</p>
                  <a 
                    href={booksyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="booksy-direct-link"
                  >
                    Visit Booksy Booking Page
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="booking-info">
            <h2>Booking Information</h2>
            <div className="info-grid">
              <div className="info-item">
                <FaCalendarAlt className="info-icon" />
                <h3>Easy Scheduling</h3>
                <p>View real-time availability and book at your convenience, 24/7.</p>
              </div>
              <div className="info-item">
                <FaCheckCircle className="info-icon" />
                <h3>Instant Confirmation</h3>
                <p>Receive immediate confirmation of your appointment via email and SMS.</p>
              </div>
              <div className="info-item">
                <FaSyncAlt className="info-icon" />
                <h3>Easy Rescheduling</h3>
                <p>Modify or cancel your appointment directly from your confirmation email.</p>
              </div>
              <div className="info-item">
                <FaCreditCard className="info-icon" />
                <h3>Secure Payment</h3>
                <p>Pay online or in-person. We accept all major credit cards.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Booking

