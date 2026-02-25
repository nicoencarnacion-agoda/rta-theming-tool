import { useNavigate } from 'react-router-dom'
import SearchForm from '../components/SearchForm'
import PromoBanner from '../components/PromoBanner'
import HotelCard from '../components/HotelCard'

export default function SearchResultsPage() {
  const navigate = useNavigate()

  const hotelCards = [
    { image: 'assets/hotels/170840277.jpg', amenities: ['Free cancellation', 'Free WiFi', '+ 3'] },
    { image: 'assets/hotels/455446705.jpg', amenities: ['Free WiFi'] },
    { image: 'assets/hotels/622991116.jpg', amenities: ['Free cancellation'] },
    { image: 'assets/hotels/b852301a3002a1f5080a2de895fe9ce9.webp', amenities: ['Free WiFi'] },
    { image: 'assets/hotels/6221c64e152071b90b68d603e184af59.webp', amenities: ['Free cancellation'] },
  ]

  return (
    <>
      <div className="container" style={{ paddingLeft: 24, paddingRight: 24 }}>
        {/* Search Header */}
        <div className="search-header">
          {/* Mobile Search Header */}
          <div className="mobile-search-header">
            <div className="mobile-search-row">
              <div className="mobile-search-box">
                <div className="mobile-search-content">
                  <div className="mobile-search-destination">Paradise Cove</div>
                  <div className="mobile-search-dates">Sep 01 - Sep 03</div>
                </div>
                <i className="bi bi-search mobile-search-icon-btn" />
              </div>
              <div className="mobile-map-btn">
                <i className="bi bi-geo-alt-fill" />
                <span>Map</span>
              </div>
            </div>
            <div className="mobile-filter-row">
              <button type="button" className="mobile-filter-btn">
                <img src="assets/agoda-icons/filter.svg" alt="Filter" />
                <span>Filter</span>
              </button>
              <button type="button" className="mobile-filter-btn">
                <span>Sort</span>
                <i className="bi bi-chevron-down" />
              </button>
              <button type="button" className="mobile-filter-chip">Breakfast</button>
            </div>
          </div>

          {/* Mobile Search Summary (legacy - hidden) */}
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

        {/* Main Content Area */}
        <div className="row">
          {/* Left Column - Filters */}
          <div className="col-lg-3">
            <div className="map-section mb-4">
              <button type="button" className="map-button">Show on map</button>
            </div>

            <div className="search-input-wrapper">
              <i className="bi bi-search search-icon" />
              <input type="text" className="form-control" placeholder="Text search" />
            </div>

            {/* Property type */}
            <div className="filter-section">
              <div className="filter-title">
                <span>Property type</span>
                <a href="#" className="filter-clear" onClick={(e) => e.preventDefault()}>Clear</a>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="hotel" />
                <label className="form-check-label" htmlFor="hotel">Hotel (370)</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="resort" />
                <label className="form-check-label" htmlFor="resort">Resort (27)</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="guesthouse" />
                <label className="form-check-label" htmlFor="guesthouse">Guesthouse / bed and breakfast (15)</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="motel" />
                <label className="form-check-label" htmlFor="motel">Motel (6)</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="hostel" />
                <label className="form-check-label" htmlFor="hostel">Hostel (10)</label>
              </div>
              <button type="button" className="btn btn-link p-0 mt-2" style={{ color: 'var(--background-primary-brand)' }}>
                <span>Show all</span>
                <i className="bi bi-chevron-down ms-1" />
              </button>
            </div>

            {/* Star rating */}
            <div className="filter-section">
              <div className="filter-title">
                <span>Star rating</span>
                <a href="#" className="filter-clear" onClick={(e) => e.preventDefault()}>Clear</a>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="star5" />
                <label className="form-check-label" htmlFor="star5">★★★★★ (10)</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="star4" />
                <label className="form-check-label" htmlFor="star4">★★★★ (102)</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="star3" />
                <label className="form-check-label" htmlFor="star3">★★★ (152)</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="star2" />
                <label className="form-check-label" htmlFor="star2">★★ (96)</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="star1" />
                <label className="form-check-label" htmlFor="star1">★ (17)</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="no-rating" />
                <label className="form-check-label" htmlFor="no-rating">No rating (36)</label>
              </div>
            </div>

            {/* Neighborhood */}
            <div className="filter-section">
              <div className="filter-title">
                <span>Neighborhood</span>
                <a href="#" className="filter-clear" onClick={(e) => e.preventDefault()}>Clear</a>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="city-center" />
                <label className="form-check-label" htmlFor="city-center">City Center (53)</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="river-north" />
                <label className="form-check-label" htmlFor="river-north">River North (47)</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="lake-view" />
                <label className="form-check-label" htmlFor="lake-view">Lake View (30)</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="west-town" />
                <label className="form-check-label" htmlFor="west-town">West Town (22)</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="south-district" />
                <label className="form-check-label" htmlFor="south-district">South District (18)</label>
              </div>
              <button type="button" className="btn btn-link p-0 mt-2" style={{ color: 'var(--background-primary-brand)' }}>
                <span>Show all</span>
                <i className="bi bi-chevron-down ms-1" />
              </button>
            </div>

            {/* Room offers */}
            <div className="filter-section">
              <div className="filter-title">
                <span>Room offers</span>
                <a href="#" className="filter-clear" onClick={(e) => e.preventDefault()}>Clear</a>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="breakfast" />
                <label className="form-check-label" htmlFor="breakfast">Breakfast included (186)</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="late-checkout" />
                <label className="form-check-label" htmlFor="late-checkout">Late check-out (4)</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="early-checkin" />
                <label className="form-check-label" htmlFor="early-checkin">Early check-in (3)</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="lunch" />
                <label className="form-check-label" htmlFor="lunch">Lunch included (1)</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="treadmill" />
                <label className="form-check-label" htmlFor="treadmill">Treadmill (1)</label>
              </div>
              <button type="button" className="btn btn-link p-0 mt-2" style={{ color: 'var(--background-primary-brand)' }}>
                <span>Show all</span>
                <i className="bi bi-chevron-down ms-1" />
              </button>
            </div>

            {/* Payment options */}
            <div className="filter-section">
              <div className="filter-title">
                <span>Payment options</span>
                <a href="#" className="filter-clear" onClick={(e) => e.preventDefault()}>Clear</a>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="free-cancel" />
                <label className="form-check-label" htmlFor="free-cancel">Free cancellation (299)</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="book-later" />
                <label className="form-check-label" htmlFor="book-later">Book now, pay later (201)</label>
              </div>
            </div>
          </div>

          {/* Right Column - Hotel Results */}
          <div className="col-lg-9">
            <PromoBanner className="results-promo-banner" />

            {/* Sorting Bar */}
            <div className="sorting-bar">
              <div className="sorting-options">
                <button type="button" className="sort-label">Sort by</button>
                <button type="button" className="sort-option active">Best match</button>
                <button type="button" className="sort-option">Lowest price</button>
                <button type="button" className="sort-option">Distance <i className="bi bi-chevron-down ms-1" /></button>
                <button type="button" className="sort-option">Top reviewed <i className="bi bi-chevron-down ms-1" /></button>
              </div>
            </div>

            {hotelCards.map((card, i) => (
              <HotelCard
                key={i}
                image={card.image}
                amenities={card.amenities}
                onClick={() => navigate('/property')}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
