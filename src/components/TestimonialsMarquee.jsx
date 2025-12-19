import { useEffect, useRef } from 'react'
import { FaStar } from 'react-icons/fa'
import './TestimonialsMarquee.css'

const TestimonialsMarquee = ({ testimonials = [] }) => {
  const marqueeRef = useRef(null)

  useEffect(() => {
    // Duplicate testimonials for seamless loop
    if (marqueeRef.current) {
      const marquee = marqueeRef.current
      const content = marquee.querySelector('.marquee-content')
      if (content) {
        // Clone content for seamless loop
        const clone = content.cloneNode(true)
        marquee.appendChild(clone)
      }
    }
  }, [testimonials])

  const defaultTestimonials = [
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
    {
      name: 'Robert Martinez',
      review: 'Outstanding service! The fade I got was exactly what I wanted. Highly recommend!',
      rating: 5,
    },
    {
      name: 'Chris Johnson',
      review: 'Best haircut I\'ve had in years. The barbers are true professionals.',
      rating: 5,
    },
  ]

  const displayTestimonials = testimonials.length > 0 ? testimonials : defaultTestimonials

  return (
    <section className="testimonials-marquee-section">
      <div className="container">
        <h2 className="section-title">What Our Clients Say</h2>
        <p className="section-subtitle">
          Don't just take our word for it – hear from our satisfied customers
        </p>
        
        <div className="marquee-wrapper" ref={marqueeRef}>
          <div className="marquee-content">
            {displayTestimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-marquee-card">
                <div className="testimonial-marquee-stars">
                  {[...Array(testimonial.rating || 5)].map((_, i) => (
                    <FaStar key={i} className="star-icon" />
                  ))}
                </div>
                <p className="testimonial-marquee-text">"{testimonial.review}"</p>
                <div className="testimonial-marquee-author">
                  <div className="testimonial-marquee-avatar">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="testimonial-marquee-info">
                    <h4>{testimonial.name}</h4>
                    <span>Verified Customer</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsMarquee

