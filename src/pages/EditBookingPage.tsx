import { useNavigate } from 'react-router-dom'

export default function EditBookingPage() {
  const navigate = useNavigate()

  return (
    <div id="edit-booking-page">
      {/* Mobile Header for Edit Booking */}
      <div className="edit-booking-mobile-header">
        <div className="edit-booking-mobile-navbar">
          <button type="button" className="edit-booking-back-btn" onClick={(e) => { e.preventDefault(); navigate('/results') }}>
            <i className="bi bi-chevron-left" />
          </button>
          <span className="edit-booking-title">Booking details</span>
        </div>
        <div className="edit-booking-mobile-tabs">
          <button type="button" className="edit-booking-tab active">Property info</button>
          <button type="button" className="edit-booking-tab">Room info</button>
          <button type="button" className="edit-booking-tab">Guest info</button>
          <button type="button" className="edit-booking-tab-arrow">
            <i className="bi bi-chevron-right" />
          </button>
        </div>
      </div>

      <div className="container-fluid py-4" style={{ maxWidth: '1200px' }}>
        <div className="row">
          {/* Sidebar */}
          <div className="col-lg-2 mb-4 mb-lg-0">
            <div className="edit-booking-sidebar">
              <div className="sidebar-item">
                <img src="assets/agoda-icons/calendar-check.svg" alt="" width={24} height={24} className="me-2" />
                <span style={{ fontWeight: 600 }}>My bookings</span>
              </div>
              <div className="sidebar-item active">
                <img src="assets/agoda-icons/hotel.svg" alt="" width={24} height={24} className="me-2" />
                <span style={{ color: 'var(--text-primary-interactive)', fontWeight: 600 }}>Hotels</span>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="col-lg-10">
            {/* Back Link */}
            <a href="#" className="back-to-bookings mb-3 d-inline-flex align-items-center text-md" style={{ color: 'var(--text-primary-interactive)', textDecoration: 'none' }} onClick={(e) => { e.preventDefault(); navigate('/results') }}>
              <i className="bi bi-chevron-left me-1" /> Back to bookings
            </a>

            {/* Manage Booking Section - Mobile Only */}
            <div className="manage-booking-mobile">
              <div className="manage-booking-card">
                <h3 className="manage-booking-title">Manage this booking</h3>
                <div className="manage-booking-row">
                  <span className="manage-booking-row-label">Check in</span>
                  <span className="manage-booking-row-dot">·</span>
                  <span className="manage-booking-row-value">22 Jan 2026 before 14:00</span>
                </div>
                <div className="manage-booking-row">
                  <span className="manage-booking-row-label">Free cancellation</span>
                  <span className="manage-booking-row-dot">·</span>
                  <span className="manage-booking-row-value">Before 17 Jan, 2026 at 23:00</span>
                </div>
                <button type="button" className="btn-cancel-booking">Cancel booking</button>
              </div>
            </div>

            {/* Check-in Notification Banner + Booking ID Card */}
            <div className="mb-4">
              <div className="checkin-notification">
                <span>Your check-in on Jan 22, 2026</span>
              </div>
              <div className="booking-id-card">
                <div className="text-center">
                  <div className="text-md" style={{ color: 'var(--text-neutral-2)' }}>Booking ID: 88736263</div>
                  <div className="fw-semibold mt-1">Your booking is paid and confirmed</div>
                </div>
              </div>
            </div>

            {/* Hotel Banner & Details Card */}
            <div className="mb-3">
              <img src="assets/hotels/170840277.jpg" alt="Hotel Room" className="hotel-banner-img" />
              <div className="hotel-details-card">
                {/* Left Column: Hotel Info & Check-in/Check-out */}
                <div className="card-left">
                  {/* Row 1: Hotel name and rating */}
                  <div className="card-left-row card-left-row-1">
                    <div className="hotel-name">Oceanview Grand Hotel</div>
                    <div className="hotel-stars">
                      <i className="bi bi-star-fill" style={{ color: '#B54C01' }} />
                      <i className="bi bi-star-fill" style={{ color: '#B54C01' }} />
                      <i className="bi bi-star-fill" style={{ color: '#B54C01' }} />
                      <i className="bi bi-star-fill" style={{ color: '#B54C01' }} />
                      <i className="bi bi-star-fill" style={{ color: '#B54C01' }} />
                    </div>
                  </div>
                  {/* Row 2: Check-in/Check-out */}
                  <div className="card-left-row card-left-row-2">
                    <div className="checkin-section">
                      <div className="checkin-info">
                        <div className="checkin-label text-muted mb-1 text-sm fw-bold">Check in</div>
                        <div className="checkin-day fw-semibold">Thu,</div>
                        <div className="checkin-date fw-semibold">Jan 22, 26</div>
                        <div className="checkin-time text-muted text-sm fw-bold">2:00 PM - 12:00 AM</div>
                      </div>
                      <div className="nights-badge">5 Nights</div>
                      <div className="checkout-info">
                        <div className="checkin-label text-muted mb-1 text-sm fw-bold">Check out</div>
                        <div className="checkin-day fw-semibold">Wed,</div>
                        <div className="checkin-date fw-semibold">Jan 26, 26</div>
                        <div className="checkin-time text-muted text-sm fw-bold">2:00 PM - 12:00 AM</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Right Column: Action Links */}
                <div className="card-right">
                  <a href="#" className="booking-action-link d-flex align-items-center" onClick={(e) => e.preventDefault()}>
                    <img src="assets/agoda-icons/document.svg" alt="" className="me-2" style={{ width: 16, height: 16 }} />View property policies
                  </a>
                </div>
              </div>
            </div>

            {/* Room Information Card */}
            <div className="edit-booking-card mb-3">
              <div className="card-left">
                {/* Row 1: Room information */}
                <div className="card-left-row card-left-row-1">
                  <h6 className="fw-semibold mb-3">Room information</h6>
                  <div className="d-flex gap-3">
                    <div className="room-thumb-wrapper">
                      <img src="assets/hotels/170840277.jpg" alt="Room" className="room-thumb" />
                    </div>
                    <div>
                      <div className="text-muted mb-2 text-sm">Room(s)</div>
                      <div className="fw-semibold mb-2">1 X Deluxe room</div>
                      <div className="text-muted text-sm">20 m²/215 ft² &nbsp;|&nbsp; Non-smoking &nbsp;|&nbsp; 1 double bed</div>
                    </div>
                  </div>
                </div>
                {/* Row 2: Benefits */}
                <div className="card-left-row card-left-row-2">
                  <div className="text-muted mb-1 text-sm">Benefits</div>
                  <div className="fw-semibold">Free WiFi, Parking, Free breakfast</div>
                </div>
              </div>
              <div className="card-right" />
            </div>

            {/* Guest Information Card */}
            <div className="edit-booking-card mb-3">
              <div className="card-left">
                {/* Row 1: Guest information */}
                <div className="card-left-row card-left-row-1">
                  <h6 className="fw-semibold mb-3">Guest information</h6>
                  <div className="text-muted mb-1 text-sm">Lead guest</div>
                  <div className="fw-semibold">John Doe</div>
                </div>
                {/* Row 2: Booked capacity */}
                <div className="card-left-row card-left-row-2">
                  <div className="text-muted mb-1 text-sm">Booked capacity <i className="bi bi-info-circle text-sm" /></div>
                  <div className="fw-semibold">2 Adults, 1 Child (aged 8)</div>
                </div>
              </div>
              <div className="card-right" />
            </div>

            {/* Cancellation Policy Card */}
            <div className="edit-booking-card mb-3">
              <div className="card-left">
                {/* Row 1: Cancellation policy */}
                <div className="card-left-row">
                  <h6 className="fw-semibold mb-3">Cancellation policy</h6>
                  <div className="cancellation-timeline">
                    <div className="cancellation-item free">
                      <div className="cancellation-bar" />
                      <div className="cancellation-content">
                        <div className="fw-semibold" style={{ color: 'var(--text-primary-positive)' }}>Now, cancellation is FREE</div>
                        <div className="text-muted text-sm">Untill 17 Feb 11:59 PM Paradise Cove time</div>
                      </div>
                    </div>
                    <div className="cancellation-item partial">
                      <div className="cancellation-bar" />
                      <div className="cancellation-content">
                        <div className="fw-semibold">Partially refundable</div>
                        <div className="text-muted text-sm">From 18 Feb 12:00 AM Paradise Cove time</div>
                      </div>
                    </div>
                    <div className="cancellation-item non-refundable">
                      <div className="cancellation-bar" />
                      <div className="cancellation-content">
                        <div className="fw-semibold">Non-refundable</div>
                        <div className="text-muted text-sm">From 20 Feb 12:00 AM Paradise Cove time</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 text-muted text-sm">
                    <p className="mb-2">Risk-free booking! You can cancel until Feb 17, 2025 and pay nothing!</p>
                    <p className="mb-2">Any cancellation received within 1 day prior to the arrival date will incure the first night&apos;s charge.</p>
                    <p className="mb-0">Failure to arrive at your hotel or property will be treated as a No-Show and will incur the first night&apos;s charge.</p>
                  </div>
                </div>
              </div>
              <div className="card-right">
                <a href="#" className="cancel-booking-link d-flex align-items-center" onClick={(e) => e.preventDefault()}>
                  <img src="assets/agoda-icons/doc-close.svg" alt="" className="me-2" style={{ width: 16, height: 16 }} /> Cancel booking
                </a>
              </div>
            </div>

            {/* Payment Information Card */}
            <div className="edit-booking-card payment-card">
              <div className="card-left">
                {/* Banner Row: Booking Status */}
                <div className="card-left-row card-left-row-1 booking-paid-banner-row">
                  <div className="booking-paid-banner">
                    <i className="bi bi-check-circle-fill me-2" /> Booking was paid
                  </div>
                </div>
                {/* Row 1: Payment information */}
                <div className="card-left-row card-left-row-1">
                  <h6 className="fw-semibold mb-3">Payment information</h6>
                  <div className="payment-row">
                    <span>1 room(s) x 1 night(s)</span>
                    <span>USD 284.05</span>
                  </div>
                  <div className="payment-row">
                    <span>Taxes and fees</span>
                    <span>USD 42.69</span>
                  </div>
                  <div className="payment-row">
                    <span>Paid today</span>
                    <span>USD 326.74</span>
                  </div>
                  <div className="payment-row total">
                    <span className="fw-semibold">Total charge</span>
                    <span className="fw-bold">USD 326.74</span>
                  </div>
                </div>
                {/* Row 2: Payment method */}
                <div className="card-left-row card-left-row-2">
                  <div className="text-muted mb-2 text-sm">Payment method</div>
                  <div className="payment-row">
                    <span>Card type</span>
                    <span>MasterCard</span>
                  </div>
                  <div className="payment-row">
                    <span>Card number</span>
                    <span className="d-flex align-items-center">
                      •••• 1677
                      <img src="assets/mastercard.png" alt="Mastercard" width={38} height={25} className="ms-2" style={{ objectFit: 'contain' }} />
                    </span>
                  </div>
                </div>
              </div>
              <div className="card-right" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
