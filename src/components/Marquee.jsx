import React, { useRef, useMemo } from 'react'
import './Marquee.css'

const Marquee = ({
  className = '',
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ariaLabel,
  ariaLive = 'off',
  ariaRole = 'marquee',
  ...props
}) => {
  const marqueeRef = useRef(null)

  const content = useMemo(
    () => (
      <>
        {Array.from({ length: repeat }, (_, i) => (
          <div
            key={i}
            className={`marquee-item ${vertical ? 'marquee-vertical' : 'marquee-horizontal'} ${pauseOnHover ? 'marquee-pause-on-hover' : ''} ${reverse ? 'marquee-reverse' : ''}`}
          >
            {children}
          </div>
        ))}
      </>
    ),
    [repeat, children, vertical, pauseOnHover, reverse]
  )

  return (
    <div
      {...props}
      ref={marqueeRef}
      className={`marquee-container ${vertical ? 'marquee-vertical-container' : 'marquee-horizontal-container'} ${className}`}
      aria-label={ariaLabel}
      aria-live={ariaLive}
      role={ariaRole}
      tabIndex={0}
      style={{ touchAction: 'none' }}
    >
      {content}
    </div>
  )
}

export default Marquee

