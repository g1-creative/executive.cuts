import './BackgroundGlow.css'

const BackgroundGlow = () => {
  return (
    <div className="background-glow">
      {/* Soft Gold Glow - matches site accent colors */}
      <div className="glow-layer glow-primary" />
      <div className="glow-layer glow-secondary" />
    </div>
  )
}

export default BackgroundGlow

