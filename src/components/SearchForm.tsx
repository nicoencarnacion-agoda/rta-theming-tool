interface SearchFormProps {
  onSearch?: () => void
}

export default function SearchForm({ onSearch }: SearchFormProps) {
  return (
    <form className="row g-2 align-items-end" onSubmit={(e) => { e.preventDefault(); onSearch?.() }}>
      <div className="col-md-3">
        <label htmlFor="searchDestination" className="form-label">Destination</label>
        <div className="position-relative">
          <img src="assets/icon-search.svg" alt="" className="field-icon" />
          <div className="destination-display" id="searchDestination">
            <div className="destination-name">Paradise Cove</div>
            <div className="destination-choices">4,030 choices</div>
          </div>
        </div>
      </div>
      <div className="col-md-2">
        <label htmlFor="searchCheckin" className="form-label">Check-in</label>
        <div className="position-relative">
          <img src="assets/icon-checkin.svg" alt="" className="field-icon clickable" />
          <div className="date-display" id="searchCheckin">
            <div className="date-primary">1 Sep 2025</div>
            <div className="date-secondary">Thursday</div>
          </div>
        </div>
      </div>
      <div className="col-md-2">
        <label htmlFor="searchCheckout" className="form-label">Check-out</label>
        <div className="position-relative">
          <img src="assets/icon-checkin.svg" alt="" className="field-icon clickable" />
          <div className="date-display" id="searchCheckout">
            <div className="date-primary">3 Sep 2025</div>
            <div className="date-secondary">Friday</div>
          </div>
        </div>
      </div>
      <div className="col-md-3">
        <label htmlFor="searchGuests" className="form-label">Guests and rooms</label>
        <div className="position-relative">
          <img src="assets/icon-guests.svg" alt="" className="field-icon" />
          <div className="guests-display" id="searchGuests">
            <div className="guests-primary">2 guests</div>
            <div className="guests-secondary">1 room</div>
            <i className="bi bi-chevron-down guests-dropdown-arrow" />
          </div>
        </div>
      </div>
      <div className="col-md-2 d-grid">
        <button type="submit" className="btn btn-primary btn-lg">Search</button>
      </div>
    </form>
  )
}
