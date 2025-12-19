import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef } from 'react'
import './ZoomParallax.css'

const ZoomParallax = ({ images = [] }) => {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  })

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4])
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5])
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6])
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8])
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9])

  const scales = [scale4, scale5, scale6, scale5, scale6, scale8, scale9]

  if (!images || images.length === 0) {
    return null
  }

  return (
    <div ref={container} className="zoom-parallax-container">
      <div className="zoom-parallax-sticky">
        {images.map(({ src, alt }, index) => {
          const scale = scales[index % scales.length]
          const imagePositionClass = `zoom-parallax-image-${index}`

          return (
            <motion.div
              key={index}
              style={{ scale }}
              className="zoom-parallax-item"
            >
              <div className={`zoom-parallax-image ${imagePositionClass}`}>
                <img
                  src={src || '/placeholder.svg'}
                  alt={alt || `Parallax image ${index + 1}`}
                  className="zoom-parallax-img"
                />
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default ZoomParallax

