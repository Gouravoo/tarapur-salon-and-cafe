import './Marquee.css'

const items = [
  'Haircut & Styling', 'Beard Shaping', 'Hair Color', 'Skin Facial',
  'Keratin Treatment', 'Head Massage', 'D-tan Cleanup', 'Fade & Taper',
  'Hair Spa', 'Waxing', 'Eyebrow Threading', 'Straight Razor Shave',
]

export default function MarqueeStrip() {
  const doubled = [...items, ...items]
  return (
    <div className="marquee-section" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
            <span className="marquee-dot">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
