import React from 'react'
import Marquee from './Marquee'
import { Card, CardContent } from './Card'
import { Avatar, AvatarImage, AvatarFallback } from './Avatar'
import './Testimonials3D.css'

const TestimonialCard = ({ img, name, username, body, country }) => {
  return (
    <Card className="testimonial-3d-card">
      <CardContent>
        <div className="testimonial-3d-header">
          <Avatar className="testimonial-3d-avatar">
            <AvatarImage src={img} alt={name} />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          <div className="testimonial-3d-info">
            <div className="testimonial-3d-name">
              {name} <span className="testimonial-3d-country">{country}</span>
            </div>
            <p className="testimonial-3d-username">{username}</p>
          </div>
        </div>
        <blockquote className="testimonial-3d-body">{body}</blockquote>
      </CardContent>
    </Card>
  )
}

const Testimonials3D = ({ testimonials = [] }) => {
  const defaultTestimonials = [
    {
      name: 'Michael Rodriguez',
      username: '@mrodriguez',
      body: 'Best barbershop in Bonita Springs! The attention to detail is unmatched. Every cut is perfect.',
      img: 'https://randomuser.me/api/portraits/men/32.jpg',
      country: '🇺🇸',
    },
    {
      name: 'James Thompson',
      username: '@jthompson',
      body: 'Professional, clean, and always on time. My go-to spot for the past 3 years.',
      img: 'https://randomuser.me/api/portraits/men/68.jpg',
      country: '🇺🇸',
    },
    {
      name: 'David Chen',
      username: '@dchen',
      body: 'The barbers really know their craft. Great atmosphere and excellent service every time.',
      img: 'https://randomuser.me/api/portraits/men/51.jpg',
      country: '🇺🇸',
    },
    {
      name: 'Robert Martinez',
      username: '@rmartinez',
      body: 'Outstanding service! The fade I got was exactly what I wanted. Highly recommend!',
      img: 'https://randomuser.me/api/portraits/men/53.jpg',
      country: '🇺🇸',
    },
    {
      name: 'Chris Johnson',
      username: '@cjohnson',
      body: 'Best haircut I\'ve had in years. The barbers are true professionals.',
      img: 'https://randomuser.me/api/portraits/men/33.jpg',
      country: '🇺🇸',
    },
    {
      name: 'Lucas Stone',
      username: '@lstone',
      body: 'Very customizable and smooth. Great experience every time!',
      img: 'https://randomuser.me/api/portraits/men/22.jpg',
      country: '🇺🇸',
    },
    {
      name: 'Haruto Sato',
      username: '@hsato',
      body: 'Impressive attention to detail. The best barbershop experience!',
      img: 'https://randomuser.me/api/portraits/men/85.jpg',
      country: '🇺🇸',
    },
    {
      name: 'Emma Lee',
      username: '@elee',
      body: 'Love the professional service and clean environment!',
      img: 'https://randomuser.me/api/portraits/women/45.jpg',
      country: '🇺🇸',
    },
    {
      name: 'Carlos Ray',
      username: '@cray',
      body: 'Great for all ages. My son loves coming here too!',
      img: 'https://randomuser.me/api/portraits/men/61.jpg',
      country: '🇺🇸',
    },
  ]

  const displayTestimonials = testimonials.length > 0 ? testimonials : defaultTestimonials

  return (
    <div className="testimonials-3d-container" style={{ touchAction: 'pan-y' }}>
      <div className="testimonials-3d-wrapper">
        {/* Vertical Marquee (downwards) */}
        <Marquee vertical pauseOnHover repeat={3} className="testimonials-3d-marquee">
          {displayTestimonials.map((review, index) => (
            <TestimonialCard key={`${review.username}-1-${index}`} {...review} />
          ))}
        </Marquee>
        {/* Vertical Marquee (upwards) */}
        <Marquee vertical pauseOnHover reverse repeat={3} className="testimonials-3d-marquee">
          {displayTestimonials.map((review, index) => (
            <TestimonialCard key={`${review.username}-2-${index}`} {...review} />
          ))}
        </Marquee>
        {/* Vertical Marquee (downwards) */}
        <Marquee vertical pauseOnHover repeat={3} className="testimonials-3d-marquee">
          {displayTestimonials.map((review, index) => (
            <TestimonialCard key={`${review.username}-3-${index}`} {...review} />
          ))}
        </Marquee>
        {/* Vertical Marquee (upwards) */}
        <Marquee vertical pauseOnHover reverse repeat={3} className="testimonials-3d-marquee">
          {displayTestimonials.map((review, index) => (
            <TestimonialCard key={`${review.username}-4-${index}`} {...review} />
          ))}
        </Marquee>
        {/* Gradient overlays */}
        <div className="testimonials-3d-gradient testimonials-3d-gradient-top" />
        <div className="testimonials-3d-gradient testimonials-3d-gradient-bottom" />
        <div className="testimonials-3d-gradient testimonials-3d-gradient-left" />
        <div className="testimonials-3d-gradient testimonials-3d-gradient-right" />
      </div>
    </div>
  )
}

export default Testimonials3D

