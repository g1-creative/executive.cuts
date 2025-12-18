import { useState } from 'react'
import { FaCalendarAlt, FaScissors, FaCheckCircle } from 'react-icons/fa'
import './BooksyWidget.css'

const BooksyWidget = ({ variant = 'inline', className = '' }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const booksyUrl = 'https://booksy.com/en-us/1073297_ldbcuts-barbershop_barber-shop_15815_bonita-springs'

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

  if (variant === 'button') {
    return (
      <div className={`booksy-button-wrapper ${className}`}>
        <button
          className="booksy-button"
          onClick={openBooksy}
        >
          Book Appointment
        </button>
      </div>
    )
  }

  if (variant === 'inline') {
    return (
      <div className={`booksy-widget-container ${className}`}>
        <div className="booksy-widget-preview">
          <div className="booksy-preview-header">
            <h3>Book Your Appointment</h3>
            <p>Click below to open our booking system</p>
          </div>
          <div className="booksy-preview-content">
            <div className="booksy-features">
              <div className="booksy-feature">
                <FaCalendarAlt className="feature-icon" />
                <span>View Available Times</span>
              </div>
              <div className="booksy-feature">
                <FaScissors className="feature-icon" />
                <span>Select Your Service</span>
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
              Booking opens in a new window for your convenience
            </p>
          </div>
        </div>
      </div>
    )
  }

  return null
}

export default BooksyWidget

