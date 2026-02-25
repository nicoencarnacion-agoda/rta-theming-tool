export default function BookingSummaryCard() {
  return (
    <div className="booking-summary-card">
      <div className="hotel-details-section">
        <div className="d-flex gap-3 mb-3">
          <img src="assets/hotels/170840277.jpg" alt="Hotel" className="hotel-thumb" />
          <div>
            <h5 className="mb-1">Oceanview Grand Hotel</h5>
            <div className="text-warning mb-1">
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
              <i className="bi bi-star-fill" />
            </div>
            <div style={{ color: 'var(--text-primary-interactive)', fontWeight: 600 }}>8.9 Excellent</div>
            <div className="text-muted text-sm">2,506 reviews</div>
          </div>
        </div>

        <div className="pt-3">
          <div className="d-flex align-items-center gap-2 mb-2">
            <img src="assets/agoda-icons/calendar.svg" width={16} height={16} alt="" />
            <span>September 01, 2025 - September 03, 2025 | 2 night</span>
          </div>
          <div className="d-flex align-items-center gap-2 mb-2">
            <img src="assets/agoda-icons/bed.svg" width={16} height={16} alt="" />
            <span>1 x Small Double Room (19 m²)</span>
          </div>
          <div className="d-flex align-items-center gap-2 mb-2">
            <img src="assets/agoda-icons/user.svg" width={16} height={16} alt="" />
            <span>1 room, 2 adults</span>
          </div>
          <div className="d-flex justify-content-end mt-2">
            <a href="#" className="text-link d-flex align-items-center gap-1 text-md" onClick={(e) => { e.preventDefault() }}>
              <img src="assets/agoda-icons/thin-dropdown.svg" alt="" width={12} height={12} /> Show more
            </a>
          </div>
        </div>

        <hr style={{ margin: '16px 0', borderColor: 'var(--border-neutral-3)' }} />

        <a href="#" className="text-link text-md" onClick={(e) => { e.preventDefault() }}>Booking conditions</a>
      </div>

      <h5 className="mb-3">Price Details</h5>
      <div className="price-details-list">
        <div className="price-row row-primary">
          <span>Oceanview Grand Hotel, Paradise Cove</span>
          <span>USD 170.00</span>
        </div>
        <div className="price-row row-secondary">1 x room, 2 x nights</div>
        <div className="price-row row-tertiary">
          <span>Taxes &amp; fees</span>
          <span>+ USD 10.00</span>
        </div>
        <div className="price-row row-tertiary">
          <span>Pay at check-in</span>
          <span>+ USD 20.00</span>
        </div>
      </div>
      <div className="price-row total">
        <span>Total</span>
        <span>USD 200.00</span>
      </div>
    </div>
  )
}
