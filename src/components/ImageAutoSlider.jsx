import React from 'react'
import './ImageAutoSlider.css'

const ImageAutoSlider = ({ images = [] }) => {
  // Default barbershop images if none provided
  const defaultImages = [
    "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&h=800&fit=crop&auto=format&q=80",
    "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&h=800&fit=crop&auto=format&q=80",
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=800&fit=crop&auto=format&q=80",
    "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&h=800&fit=crop&auto=format&q=80",
    "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&h=800&fit=crop&auto=format&q=80",
    "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=800&fit=crop&auto=format&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop&auto=format&q=80",
    "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800&h=800&fit=crop&auto=format&q=80",
  ]

  const imageList = images.length > 0 ? images : defaultImages
  // Duplicate images for seamless loop
  const duplicatedImages = [...imageList, ...imageList]

  return (
    <div className="image-auto-slider">
      <div className="image-auto-slider-container">
        <div className="image-auto-slider-scroll">
          {duplicatedImages.map((image, index) => (
            <div
              key={index}
              className="image-auto-slider-item"
            >
              <img
                src={image}
                alt={`Barbershop gallery ${(index % imageList.length) + 1}`}
                className="image-auto-slider-img"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ImageAutoSlider

