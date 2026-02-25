interface HotelCardProps {
  image: string
  name?: string
  location?: string
  score?: string
  scoreLabel?: string
  reviews?: string
  amenities?: string[]
  pricePoints?: string
  priceCurrency?: string
  onClick?: () => void
}

export default function HotelCard({
  image,
  name = 'Hotel name',
  location = 'Paradise Cove',
  score = '8.9',
  scoreLabel = 'Excellent',
  reviews = '2,506 reviews',
  amenities = [],
  pricePoints = '4,222 Points',
  priceCurrency = '42.22',
  onClick,
}: HotelCardProps) {
  return (
    <div className="hotel-card" role="button" tabIndex={0} onClick={onClick} onKeyDown={(e) => e.key === 'Enter' && onClick?.()}>
      <div className="hotel-images">
        <img src={image} alt="Hotel" className="hotel-main-image" />
        <div className="hotel-thumbnails">
          <img src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=60&h=45&q=80" alt="Hotel thumbnail" className="hotel-thumbnail" />
          <img src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=60&h=45&q=80" alt="Hotel thumbnail" className="hotel-thumbnail" />
          <img src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=60&h=45&q=80" alt="Hotel thumbnail" className="hotel-thumbnail" />
          <div className="hotel-thumbnail-see-all">See all</div>
        </div>
      </div>
      <div className="hotel-info">
        <div className="hotel-name">{name}</div>
        <div className="hotel-stars text-warning">★★★★★</div>
        <div className="hotel-score-mobile">
          <span className="score-number">{score}</span>
          <span className="score-label">{scoreLabel}</span>
          <span className="score-reviews">{reviews}</span>
        </div>
        <div className="hotel-location-mobile">
          <i className="bi bi-geo-alt-fill" />
          <span>{location}</span>
        </div>
        <div className="hotel-rating-location">
          <div className="d-flex align-items-center">
            <div className="text-warning">★★★★★</div>
            <div className="hotel-location">
              <i className="bi bi-geo-alt-fill background-primary-brand" />
              <span>{location}</span>
            </div>
          </div>
        </div>
        <div className="hotel-offers">
          <p className="mb-2 small fw-medium offers-label">This property offers:</p>
          <div className="hotel-amenities">
            {amenities.map((amenity, i) => (
              <span key={i} className="hotel-amenity">{amenity}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="hotel-pricing">
        <div className="hotel-score">
          <span className="score-number">{score}</span>
          <span className="score-label">{scoreLabel}</span>
          <div className="score-reviews">{reviews}</div>
        </div>
        <div className="price-section">
          <div className="price-label">
            <span>Per night</span>
            <span className="price-points">{pricePoints}</span>
          </div>
          <div className="price-currency">or <span>USD</span> {priceCurrency}</div>
          <div className="price-note">Inclusive of taxes and fees</div>
        </div>
      </div>
    </div>
  )
}
