import { useNavigate } from 'react-router-dom'
import BookingSummaryCard from '../components/BookingSummaryCard'

export default function GuestDetailsPage() {
  const navigate = useNavigate()

  return (
    <div id="guest-details-page" className="section">
      <div className="container py-4" style={{ paddingLeft: 24, paddingRight: 24 }}>
        <div className="row g-4">
          {/* Left Column: Contact Form */}
          <div className="col-lg-7">
            <div className="contact-form-card">
              <h4 className="mb-2">Contact details</h4>
              <p className="text-muted mb-3">Where your booking confirmation and updates will be sent</p>
              <p className="required-field mb-4">* Required field</p>

              <form>
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="floating-field no-icon">
                      <label className="floating-label">First name *</label>
                      <input type="text" className="form-control form-control-lg" defaultValue="Jude" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="floating-field no-icon">
                      <label className="floating-label">Last name *</label>
                      <input type="text" className="form-control form-control-lg" defaultValue="Bellingham" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="floating-field no-icon">
                      <label className="floating-label">Email *</label>
                      <input type="email" className="form-control form-control-lg" defaultValue="jude@realmadrid.com" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="floating-field no-icon">
                      <label className="floating-label">Country/region of residence *</label>
                      <select className="form-select form-select-lg" defaultValue="Spain">
                        <option>Spain</option>
                        <option>United States</option>
                        <option>United Kingdom</option>
                        <option>Germany</option>
                        <option>France</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6 d-flex flex-column" style={{ gap: 12 }}>
                    <div className="phone-field-label text-sm" style={{ color: 'var(--text-neutral-2)' }}>Phone number (optional)</div>
                    <div className="row g-2">
                      <div className="col-6">
                        <div className="floating-field no-icon">
                          <label className="floating-label">Country code</label>
                          <select className="form-select form-select-lg" defaultValue="+66">
                            <option>+66</option>
                            <option>+1</option>
                            <option>+44</option>
                            <option>+34</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="floating-field no-icon">
                          <label className="floating-label">Phone number</label>
                          <input type="tel" className="form-control form-control-lg" placeholder="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <hr className="form-divider" />
                  </div>
                  <div className="col-12">
                    <label className="toggle-switch">
                      <input type="checkbox" id="bookingForOther" />
                      <span className="toggle-track">
                        <span className="toggle-thumb">
                          <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 8.5L6.5 12L13 4" />
                          </svg>
                        </span>
                      </span>
                      <span className="toggle-label">Make this booking for someone else</span>
                    </label>
                  </div>
                </div>
              </form>
            </div>

            <div className="d-lg-flex justify-content-between align-items-center mt-4">
              <p className="text-muted mb-0 mb-3 mb-lg-0 text-md">
                Placeholder text including <a href="#" className="text-link" onClick={(e) => { e.preventDefault() }}>terms of use</a> and <a href="#" className="text-link" onClick={(e) => { e.preventDefault() }}>privacy policy</a>
              </p>
              <button type="button" className="btn btn-primary btn-lg w-100 w-lg-auto" onClick={() => navigate('/payment')}>Continue to payment</button>
            </div>
          </div>

          {/* Right Column: Booking Summary */}
          <div className="col-lg-5">
            <BookingSummaryCard />
            <div className="d-flex align-items-center gap-2 mt-3 text-md" style={{ color: 'var(--text-neutral-2)' }}>
              <img src="assets/agoda-icons/circle-card.svg" alt="" width={16} height={16} />
              <span>Select Miles to redeem in the following step</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
