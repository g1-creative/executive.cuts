import ZoomParallax from '../components/ZoomParallax'
import './Gallery.css'

const Gallery = () => {
  // Barbershop-related images from Unsplash
  const parallaxImages = [
    {
      src: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=1280&h=720&fit=crop&auto=format&q=80',
      alt: 'Professional barber cutting hair',
    },
    {
      src: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1280&h=720&fit=crop&auto=format&q=80',
      alt: 'Barbershop interior with vintage style',
    },
    {
      src: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=800&fit=crop&auto=format&q=80',
      alt: 'Precision fade haircut',
    },
    {
      src: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1280&h=720&fit=crop&auto=format&q=80',
      alt: 'Barber tools and equipment',
    },
    {
      src: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&h=800&fit=crop&auto=format&q=80',
      alt: 'Modern barbershop styling',
    },
    {
      src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1280&h=720&fit=crop&auto=format&q=80',
      alt: 'Beard grooming and trimming',
    },
    {
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1280&h=720&fit=crop&auto=format&q=80',
      alt: 'Professional haircut service',
    },
  ]

  // Placeholder for additional gallery images
  const imageCount = 12

  return (
    <div className="gallery-page">
      <section className="gallery-hero section">
        <div className="container">
          <h1 className="section-title">Gallery</h1>
          <p className="gallery-intro">
            Take a look at our work. Each cut is crafted with precision and attention to detail.
          </p>
        </div>
      </section>

      {/* Zoom Parallax Section - Desktop Only */}
      <section className="gallery-parallax-section">
        <div className="gallery-parallax-intro">
          <h2 className="section-title">Our Work in Motion</h2>
          <p className="section-subtitle">
            Scroll to experience our craftsmanship through an immersive gallery
          </p>
        </div>
        <ZoomParallax images={parallaxImages} />
      </section>

      {/* Enhanced Gallery Grid */}
      <section className="gallery-content section">
        <div className="container">
          <h2 className="section-title">Our Work</h2>
          <p className="section-subtitle">
            Each cut is crafted with precision and attention to detail
          </p>
          <div className="gallery-grid">
            {/* Show parallax images on mobile, mix with placeholders on desktop */}
            {parallaxImages.map((image, index) => (
              <div key={`parallax-${index}`} className="gallery-item gallery-item-image">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="gallery-img"
                  loading="lazy"
                />
                <div className="gallery-item-overlay">
                  <span className="gallery-item-label">{image.alt}</span>
                </div>
              </div>
            ))}
            {/* Additional placeholder images */}
            {Array.from({ length: imageCount }, (_, index) => (
              <div key={`placeholder-${index}`} className="gallery-item">
                <div className="image-placeholder">
                  <span>Image {index + 1}</span>
                  <p>Add haircut photo here</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Gallery

