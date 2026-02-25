import { useNavigate } from 'react-router-dom'
import SearchForm from '../components/SearchForm'
import PromoBanner from '../components/PromoBanner'

export default function PropertyPage() {
  const navigate = useNavigate()

  return (
    <div id="property-page">
      <div className="container" style={{ paddingLeft: '24px', paddingRight: '24px' }}>
        {/* Search Header */}
        <div className="search-header">
          {/* Mobile Search Summary */}
          <div className="mobile-search-summary">
            <div className="mobile-search-item">
              <i className="bi bi-calendar3 mobile-search-icon" />
              <span>Sep 1 - Sep 3</span>
            </div>
            <div className="mobile-search-item">
              <i className="bi bi-people mobile-search-icon" />
              <span>2</span>
            </div>
            <div className="mobile-search-item">
              <i className="bi bi-door-open mobile-search-icon" />
              <span>2</span>
            </div>
          </div>

          <SearchForm />
        </div>

        {/* Mobile Hotel Header */}
        <div className="mobile-hotel-header">
          <div className="mobile-booking-info">
            <div className="booking-info-item">
              <i className="bi bi-calendar3" />
              <span>Sep 1 - Sep 3</span>
            </div>
            <div className="booking-info-item">
              <i className="bi bi-people-fill" />
              <span>2</span>
            </div>
            <div className="booking-info-item">
              <i className="bi bi-door-closed-fill" />
              <span>2</span>
            </div>
          </div>

          <div className="mobile-carousel">
            <img src="assets/hotels/170840277.jpg" alt="Hotel Image" className="carousel-image" />
            <button type="button" className="carousel-arrow carousel-arrow-left">
              <i className="bi bi-chevron-left" />
            </button>
            <button type="button" className="carousel-arrow carousel-arrow-right">
              <i className="bi bi-chevron-right" />
            </button>
            <div className="carousel-dots">
              <span className="carousel-dot active" />
              <span className="carousel-dot" />
              <span className="carousel-dot" />
              <span className="carousel-dot" />
              <span className="carousel-dot" />
            </div>
            <div className="carousel-counter">1/5</div>
          </div>
        </div>

        {/* Mobile Property Content */}
        <div className="mobile-property-content">
          <div className="mobile-section">
            <span className="top-rated-badge">Top rated</span>
            <h1 className="mobile-hotel-name">Oceanview Grand Hotel</h1>
            <div className="mobile-rating-row">
              <div className="rating-left">
                <div className="stars text-warning">★★★★★</div>
                <div className="mobile-location">
                  <i className="bi bi-geo-alt-fill" />
                  <span>Paradise Cove</span>
                </div>
              </div>
              <div className="rating-right">
                <div className="score-text">8.9 Excellent</div>
                <div className="reviews-count">3,165 reviews</div>
              </div>
            </div>
          </div>

          <div className="mobile-section">
            <div className="section-header">
              <h2 className="section-title">Reviews</h2>
              <a href="#" className="section-link" onClick={(e) => e.preventDefault()}>See all reviews</a>
            </div>
            <div className="review-tags">
              <span className="review-tag"><i className="bi bi-hand-thumbs-up-fill" /> Housekeeping</span>
              <span className="review-tag"><i className="bi bi-hand-thumbs-up-fill" /> Breakfast</span>
              <span className="review-tag"><i className="bi bi-hand-thumbs-up-fill" /> View</span>
              <span className="review-tag"><i className="bi bi-hand-thumbs-up-fill" /> Pool</span>
            </div>
            <div className="review-cards">
              <div className="review-card">
                <p className="review-quote">&quot;Neat, clean and nice.&quot;</p>
                <div className="review-author">
                  <span className="flag">🇸🇬</span>
                  <span>Ethel</span>
                </div>
              </div>
              <div className="review-card">
                <p className="review-quote">&quot;Excellent hotel with wonderful breakfast.&quot;</p>
                <div className="review-author">
                  <span className="flag">🇬🇧</span>
                  <span>Thomas</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mobile-highlights-section">
            <div className="popular-badge-row">
              <span className="popular-badge">Popular!</span>
              <span className="booked-today">Booked 11 times today</span>
            </div>
            <h3 className="mobile-highlights-title">Property highlights</h3>
            <div className="mobile-highlights-grid">
              <div className="mobile-highlight-item">
                <img src="assets/highlight/hygiene.svg" alt="Hygiene plus" className="mobile-highlight-icon" />
                <span className="mobile-highlight-text">Hygiene plus</span>
              </div>
              <div className="mobile-highlight-item">
                <img src="assets/highlight/pin-star.svg" alt="Sparkling clean" className="mobile-highlight-icon" />
                <span className="mobile-highlight-text">Sparkling clean</span>
              </div>
              <div className="mobile-highlight-item">
                <img src="assets/highlight/easycancel.svg" alt="Free cancellation" className="mobile-highlight-icon" />
                <span className="mobile-highlight-text">Free cancellation available</span>
              </div>
            </div>
            <hr className="mobile-highlights-divider" />
            <h3 className="mobile-offerings-title">Other key offerings</h3>
            <div className="mobile-offerings-grid">
              <div className="mobile-offering-item">
                <i className="bi bi-check-lg" />
                <span>Front desk [24-hour]</span>
              </div>
              <div className="mobile-offering-item">
                <i className="bi bi-check-lg" />
                <span>Transport to airport</span>
              </div>
              <div className="mobile-offering-item">
                <i className="bi bi-check-lg" />
                <span>Valet parking</span>
              </div>
            </div>
          </div>

          <div className="mobile-location-section">
            <div className="mobile-location-header">
              <span className="mobile-location-score">9.2</span>
              <span className="mobile-location-title">Location</span>
            </div>
            <div className="mobile-location-content">
              <div className="mobile-location-info">
                <p className="mobile-location-address">
                  1001 Main Ave, City Center,<br />
                  State (ST), &lt;Country&gt;,<br />
                  55403-2440
                </p>
                <ul className="mobile-location-list">
                  <li className="mobile-location-item">
                    <img src="assets/agoda-icons/pin-map.svg" alt="City center" />
                    <span>Inside city center</span>
                  </li>
                  <li className="mobile-location-item">
                    <img src="assets/agoda-icons/hotel.svg" alt="Popular neighborhood" />
                    <span>Popular neighborhood</span>
                  </li>
                  <li className="mobile-location-item">
                    <img src="assets/agoda-icons/museum.svg" alt="Museum" />
                    <span>&lt;location&gt;</span>
                    <span className="distance">1.1 km</span>
                  </li>
                  <li className="mobile-location-item">
                    <img src="assets/agoda-icons/metro.svg" alt="Metro" />
                    <span>&lt;location&gt;</span>
                    <span className="distance">1.1 km</span>
                  </li>
                </ul>
                <a href="#" className="mobile-see-nearby" onClick={(e) => e.preventDefault()}>See nearby</a>
              </div>
              <div className="mobile-location-map">
                <button type="button" className="btn-primary-sm">View map</button>
              </div>
            </div>
          </div>

          <div className="mobile-banner-section">
            <div className="promo-icon">
              <i className="bi bi-tag-fill" style={{ fontSize: 24 }} />
            </div>
            <div className="banner-content">
              <div className="banner-title">Title for a promotional banner</div>
              <div className="banner-subtitle">Subtitle for a promotional banner to give more details</div>
              <a href="#" className="banner-link" onClick={(e) => e.preventDefault()}>See details</a>
            </div>
          </div>

          <div className="mobile-filter-section">
            <div className="mobile-filter-header">
              <span className="mobile-filter-title">Filter room options by:</span>
              <a href="#" className="mobile-filter-clear" onClick={(e) => e.preventDefault()}>Clear</a>
            </div>
            <div className="mobile-filter-chips">
              <button type="button" className="mobile-filter-chip active">Non-smoking (9)</button>
              <button type="button" className="mobile-filter-chip">Free breakfast (3)</button>
              <button type="button" className="mobile-filter-chip">Free cancellation (1)</button>
              <button type="button" className="mobile-filter-chip">King bed (1)</button>
              <button type="button" className="mobile-filter-chip">City view (1)</button>
            </div>
          </div>
        </div>

        {/* Back Navigation */}
        <div className="back-navigation mb-3">
          <a href="#" className="text-link" onClick={(e) => { e.preventDefault(); navigate('/results') }}>
            View all 4,491 properties in <span>Paradise Cove</span>
          </a>
        </div>

        {/* Property Image Grid */}
        <div className="property-image-grid">
          <div className="property-main-image">
            <img src="assets/hotels/170840277.jpg" alt="Hotel Main Image" />
            <button type="button" className="see-all-photos-btn">
              <i className="bi bi-camera-fill" style={{ fontSize: '0.75rem' }} />
              See all photos
            </button>
          </div>
          <div className="property-thumbnail-grid">
            <div className="property-thumbnail-column">
              <img src="assets/hotels/455446705.jpg" alt="Hotel Lobby" />
              <img src="assets/hotels/622991116.jpg" alt="Hotel Amenities" />
            </div>
            <div className="property-thumbnail-column">
              <img src="assets/hotels/b852301a3002a1f5080a2de895fe9ce9.webp" alt="Hotel Pool" />
              <img src="assets/hotels/6221c64e152071b90b68d603e184af59.webp" alt="Hotel Suite" />
            </div>
            <div className="property-thumbnail-column">
              <img src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=300&h=200&q=80" alt="Hotel Exterior" />
              <img src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=300&h=200&q=80" alt="Hotel Restaurant" />
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="row">
          {/* Property Tabs with Price */}
          <div className="col-12 property-tabs-container">
            <div className="d-flex justify-content-between align-items-center mb-0">
              <ul className="nav nav-tabs property-tabs mb-0" id="propertyTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button type="button" className="nav-link active" id="overview-tab" data-bs-toggle="tab" data-bs-target="#overview" role="tab">Overview</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button type="button" className="nav-link" id="rooms-tab" data-bs-toggle="tab" data-bs-target="#rooms" role="tab">Rooms</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button type="button" className="nav-link" id="facilities-tab" data-bs-toggle="tab" data-bs-target="#facilities" role="tab">Facilities</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button type="button" className="nav-link" id="reviews-tab" data-bs-toggle="tab" data-bs-target="#reviews" role="tab">Reviews</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button type="button" className="nav-link" id="location-tab" data-bs-toggle="tab" data-bs-target="#location" role="tab">Location</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button type="button" className="nav-link" id="policies-tab" data-bs-toggle="tab" data-bs-target="#policies" role="tab">Policies</button>
                </li>
              </ul>
              <div className="d-none d-md-block">
                <span className="text-sm" style={{ color: 'var(--text-neutral-2)' }}>from</span> <span className="text-sm fw-semibold" style={{ color: 'var(--text-neutral-1)' }}>USD</span> <span className="fs-5 fw-semibold" style={{ color: 'var(--text-neutral-1)' }}>3,200</span>
              </div>
            </div>
            <hr className="mt-0 mb-4" style={{ borderColor: 'var(--text-neutral-2)' }} />
          </div>

          {/* Property Overview */}
          <div className="col-12">
            <div className="property-content mb-4">
              <div className="property-left-column">
                <div className="property-card">
                  <div className="top-rated-badge">Top rated</div>
                  <h1 className="property-title">
                    <span>Oceanview Grand Hotel</span>
                    <span className="text-warning ms-2">★★★★</span>
                  </h1>
                  <div className="property-address">
                    123 Ocean Breeze Blvd, <span>Paradise Cove</span> 32963
                    <a href="#" className="btn btn-tertiary view-map-link" onClick={(e) => e.preventDefault()}>View map <i className="bi bi-geo-alt-fill" /></a>
                  </div>
                </div>

                <div className="property-card">
                  <h3 className="h5 mb-3">Highlights</h3>
                  <div className="highlights-grid">
                    <div className="highlight-item">
                      <div className="highlight-icon">
                        <img src="assets/highlight/hand-safe.png" alt="Free cancellation" />
                      </div>
                      <div className="highlight-text">Free cancellation <i className="bi bi-info-circle-fill" /></div>
                    </div>
                    <div className="highlight-item">
                      <div className="highlight-icon">
                        <img src="assets/highlight/spray.png" alt="Sparkling clean" />
                      </div>
                      <div className="highlight-text">Sparkling clean <i className="bi bi-info-circle-fill" /></div>
                    </div>
                    <div className="highlight-item">
                      <div className="highlight-icon">
                        <img src="assets/highlight/location.png" alt="Heart of city" />
                      </div>
                      <div className="highlight-text">Heart of city <i className="bi bi-info-circle-fill" /></div>
                    </div>
                    <div className="highlight-item">
                      <div className="highlight-icon">
                        <img src="assets/highlight/medal.png" alt="Top value" />
                      </div>
                      <div className="highlight-text">Top value <i className="bi bi-info-circle-fill" /></div>
                    </div>
                    <div className="highlight-item">
                      <div className="highlight-icon">
                        <img src="assets/highlight/like.png" alt="Great food & dining" />
                      </div>
                      <div className="highlight-text">Great food &amp; dining <i className="bi bi-info-circle-fill" /></div>
                    </div>
                  </div>
                </div>

                <div className="property-card">
                  <h3 className="h5 mb-3">Facilities</h3>
                  <div className="facilities-grid">
                    {['Front desk [24-hour]', 'Airport transfer', 'Valet parking', 'Free Wi-Fi in all rooms!', 'Fitness center', 'Swimming pool [outdoor]', 'Check-in/out [express]', 'Luggage storage'].map((facility) => (
                      <div key={facility} className="facility-item">
                        <img className="facility-check" src="assets/agoda-icons/check.svg" alt="check" width={14} height={14} />
                        <span>{facility}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="property-right-column">
                <div className="property-card">
                  <h3 className="rating-heading">9.3 Exceptional</h3>
                  <a href="#" className="text-link rating-reviews" onClick={(e) => e.preventDefault()}>3,165 reviews</a>
                  <div className="rating-breakdown">
                    <span className="icon-badge">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_badge1" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="1" y="1" width="18" height="16"><path fillRule="evenodd" clipRule="evenodd" d="M5.83159 7.91667V15.8333H3.33317C2.4127 15.8333 1.6665 15.0871 1.6665 14.1667V9.58334C1.6665 8.66286 2.4127 7.91667 3.33317 7.91667H5.83159ZM10.2459 1.66667C10.8106 1.66667 11.2751 2.08738 11.3309 2.62659L11.3366 2.73592V6.96117H16.9486C17.6519 6.89521 18.2653 7.40538 18.3279 8.08095L18.3332 8.195V9.79876C18.3332 11.4142 18.0187 13.0149 17.4067 14.5148C16.9004 15.7557 15.6892 16.7252 14.3487 16.6639L14.1872 16.6516L6.6665 15.8509V7.8662L6.9436 7.42438C7.49359 6.52193 8.71094 4.39096 9.18602 2.48429C9.30557 2.0047 9.7423 1.66667 10.2459 1.66667Z" fill="currentColor" /></mask><g mask="url(#mask0_badge1)"><rect width="20" height="20" fill="currentColor" /></g></svg>
                      Housekeeping 80
                    </span>
                    <span className="icon-badge">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_badge2" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="1" y="1" width="18" height="16"><path fillRule="evenodd" clipRule="evenodd" d="M5.83159 7.91667V15.8333H3.33317C2.4127 15.8333 1.6665 15.0871 1.6665 14.1667V9.58334C1.6665 8.66286 2.4127 7.91667 3.33317 7.91667H5.83159ZM10.2459 1.66667C10.8106 1.66667 11.2751 2.08738 11.3309 2.62659L11.3366 2.73592V6.96117H16.9486C17.6519 6.89521 18.2653 7.40538 18.3279 8.08095L18.3332 8.195V9.79876C18.3332 11.4142 18.0187 13.0149 17.4067 14.5148C16.9004 15.7557 15.6892 16.7252 14.3487 16.6639L14.1872 16.6516L6.6665 15.8509V7.8662L6.9436 7.42438C7.49359 6.52193 8.71094 4.39096 9.18602 2.48429C9.30557 2.0047 9.7423 1.66667 10.2459 1.66667Z" fill="currentColor" /></mask><g mask="url(#mask0_badge2)"><rect width="20" height="20" fill="currentColor" /></g></svg>
                      Shops 9
                    </span>
                    <span className="icon-badge">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="mask0_badge3" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="1" y="1" width="18" height="16"><path fillRule="evenodd" clipRule="evenodd" d="M5.83159 7.91667V15.8333H3.33317C2.4127 15.8333 1.6665 15.0871 1.6665 14.1667V9.58334C1.6665 8.66286 2.4127 7.91667 3.33317 7.91667H5.83159ZM10.2459 1.66667C10.8106 1.66667 11.2751 2.08738 11.3309 2.62659L11.3366 2.73592V6.96117H16.9486C17.6519 6.89521 18.2653 7.40538 18.3279 8.08095L18.3332 8.195V9.79876C18.3332 11.4142 18.0187 13.0149 17.4067 14.5148C16.9004 15.7557 15.6892 16.7252 14.3487 16.6639L14.1872 16.6516L6.6665 15.8509V7.8662L6.9436 7.42438C7.49359 6.52193 8.71094 4.39096 9.18602 2.48429C9.30557 2.0047 9.7423 1.66667 10.2459 1.66667Z" fill="currentColor" /></mask><g mask="url(#mask0_badge3)"><rect width="20" height="20" fill="currentColor" /></g></svg>
                      Breakfast 8
                    </span>
                  </div>
                </div>

                <div className="property-card">
                  <div className="map-section mb-2">
                    <button type="button" className="map-button">View map</button>
                  </div>
                  <div className="rating-label mb-1">9.8 Exceptional</div>
                  <div className="location-label">Location rating score</div>
                  <ul className="location-list">
                    <li className="location-details">
                      <img src="assets/agoda-icons/medal-check.svg" alt="" className="location-icon me-2" />
                      Exceptional location
                    </li>
                    <li className="location-details">
                      <img src="assets/agoda-icons/hotel.svg" alt="" className="location-icon me-2" />
                      Popular neighborhood
                    </li>
                  </ul>
                  <div className="text-end">
                    <a href="#" className="btn btn-tertiary" onClick={(e) => e.preventDefault()}>View nearby places</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Promotional Banner */}
          <div className="col-12">
            <PromoBanner />
          </div>

          {/* Select Your Room Section */}
          <div className="col-12">
            <h2 className="h4 mb-3">Select your room</h2>

            <div className="room-filter-section">
              <div className="filter-header">
                <div className="filter-title">
                  <img src="assets/agoda-icons/filter.svg" alt="Filter" className="me-2" style={{ width: 16, height: 16 }} />
                  Filter room options by:
                </div>
                <a href="#" className="clear-all-link" onClick={(e) => e.preventDefault()}>Clear all</a>
              </div>

              <div className="filter-tip">
                <strong>Tip:</strong> Your travel dates are a while from now. Try a deal with <strong>Free cancellation</strong> to stay flexible in case plans change.
              </div>

              <div className="filter-chips">
                {[
                  { icon: 'coffee.svg', label: 'Free breakfast (36)' },
                  { icon: 'wifi.svg', label: 'Free wi-fi (10)' },
                  { icon: 'bed-king.svg', label: 'King bed (14)' },
                  { icon: 'wheelchair.svg', label: 'Wheelchair access (4)' },
                  { icon: 'lounge.svg', label: 'Non-smoking (9)' },
                  { icon: 'thumbs-up.svg', label: 'Recommended (14)' },
                  { icon: 'bed-twin.svg', label: 'Twin Bed (11)' },
                  { icon: 'city.svg', label: 'City view (14)' },
                ].map((chip) => (
                  <div key={chip.label} className="filter-chip">
                    <img src={`assets/agoda-icons/${chip.icon}`} alt="" className="filter-chip-icon" />
                    <span>{chip.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
