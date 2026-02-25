interface PromoBannerProps {
  title?: string
  subtitle?: string
  className?: string
}

export default function PromoBanner({
  title = 'Title for a promotional banner',
  subtitle = 'Subtitle for a promotional banner to give more details',
  className = '',
}: PromoBannerProps) {
  return (
    <div className={`promo-banner ${className}`.trim()}>
      <div className="promo-icon">
        <i className="bi bi-tag-fill" style={{ fontSize: 28 }} />
      </div>
      <div>
        <h6 className="banner-title" style={{ fontWeight: 600 }}>{title}</h6>
        <p className="banner-subtitle">{subtitle}</p>
        <a href="#" className="text-white text-decoration-underline mt-1 d-block text-md" onClick={(e) => e.preventDefault()}>See details</a>
      </div>
    </div>
  )
}
