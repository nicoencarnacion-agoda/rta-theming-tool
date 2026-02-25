import { useNavigate } from 'react-router-dom'
import PromoBanner from '../components/PromoBanner'

export default function SearchPage() {
  const navigate = useNavigate()

  return (
    <>
      {/* Hero Section */}
      <div className="hero-section py-4">
        <div className="container">
          <h2 className="text-white mb-3" style={{ fontWeight: 600 }}>Headline</h2>
          <h5 className="text-white mb-4">Subheadline</h5>
        </div>

        <div className="container">
          <PromoBanner
            title="Title for banner"
            subtitle="Subtitle for a promotional banner to give more details"
          />
        </div>

        {/* Search Tabs & Form */}
        <div className="container position-relative">
          <div className="search-form">
            <ul className="nav nav-tabs search-tabs mb-3" id="searchTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active d-flex align-items-center" id="hotels-tab" data-bs-toggle="tab" data-bs-target="#hotels" type="button" role="tab" aria-controls="hotels" aria-selected="true">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: 8 }}>
                    <mask id="mask0_109_27826" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x={1} y={2} width={14} height={13}>
                      <path fillRule="evenodd" clipRule="evenodd" d="M12.6666 2.66666C13.403 2.66666 13.9999 3.26361 13.9999 3.99999L14.0006 8.17878C14.3988 8.40942 14.6666 8.8401 14.6666 9.33332V14.3333C14.6666 14.5174 14.5173 14.6667 14.3333 14.6667H13.6666C13.4825 14.6667 13.3333 14.5174 13.3333 14.3333V13.3333H2.66659V14.3333C2.66659 14.5174 2.51735 14.6667 2.33325 14.6667H1.66659C1.48249 14.6667 1.33325 14.5174 1.33325 14.3333V9.33332C1.33325 8.83982 1.60136 8.40894 1.99987 8.17839L1.99992 3.99999C1.99992 3.26361 2.59687 2.66666 3.33325 2.66666H12.6666ZM12.6666 9.33332H3.33325C2.99136 9.33332 2.70958 9.59068 2.67107 9.92224L2.66659 9.99999V11.3333H13.3333V9.99999C13.3333 9.6318 13.0348 9.33332 12.6666 9.33332ZM11.3333 5.99999H8.66659V7.99999H11.9999V6.66666C11.9999 6.32477 11.7426 6.04298 11.411 6.00447L11.3333 5.99999ZM7.33325 5.99999H4.66659C4.32469 5.99999 4.04291 6.25735 4.0044 6.58891L3.99992 6.66666V7.99999H7.33325V5.99999Z" fill="var(--background-primary-brand)" />
                    </mask>
                    <g mask="url(#mask0_109_27826)">
                      <path d="M-87.7937 88C-101.127 88 -112.86 83.7333 -122.994 75.2C-132.594 66.1333 -137.394 52 -137.394 32.8C-137.394 13.6 -132.594 -0.53334 -122.994 -9.60002C-112.86 -18.6667 -101.127 -23.2 -87.7937 -23.2H126.606C139.94 -23.2 151.406 -18.6667 161.006 -9.60002C171.14 -1.06668 176.206 12.8 176.206 32C176.206 51.2 171.14 65.3333 161.006 74.4C151.406 83.4667 139.94 88 126.606 88H-87.7937Z" fill="var(--background-primary-brand)" />
                    </g>
                  </svg>
                  <span>Hotels</span>
                </button>
              </li>
            </ul>
            <div className="tab-content" id="searchTabContent">
              <div className="tab-pane fade show active" id="hotels" role="tabpanel" aria-labelledby="hotels-tab">
                <form className="row g-2 align-items-end" onSubmit={(e) => { e.preventDefault(); navigate('/results'); }}>
                  <div className="col-12 d-flex align-items-center mb-3">
                    <div className="form-check me-3">
                      <input className="form-check-input" type="radio" name="pointsOption" id="earnPoints" defaultChecked />
                      <label className="form-check-label" htmlFor="earnPoints">Earn points</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="pointsOption" id="usePoints" />
                      <label className="form-check-label" htmlFor="usePoints">Use points</label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-2">
                    <div className="floating-field">
                      <label className="floating-label">Destination</label>
                      <img src="assets/icon-search.svg" alt="" className="field-icon" />
                      <input type="text" className="form-control form-control-lg" id="destination" placeholder="Search by landmark or city" />
                    </div>
                  </div>
                  <div className="col-md-3 mb-2">
                    <div className="floating-field">
                      <label className="floating-label">Check-in</label>
                      <img src="assets/icon-checkin.svg" alt="" className="field-icon clickable" onClick={() => {}} />
                      <div className="date-input-wrapper">
                        <input type="text" className="form-control form-control-lg" id="checkin" placeholder="Select date" readOnly onClick={() => {}} />
                        <div className="custom-datepicker" id="checkin-picker">
                          <div className="datepicker-header">
                            <button type="button" className="datepicker-nav" onClick={() => {}}>‹</button>
                            <div className="datepicker-title">
                              <button type="button" className="datepicker-dropdown" onClick={() => {}}>
                                <span id="checkin-month">January</span>
                                <i className="bi bi-chevron-down" />
                              </button>
                              <button type="button" className="datepicker-dropdown" onClick={() => {}}>
                                <span id="checkin-year">2024</span>
                                <i className="bi bi-chevron-down" />
                              </button>
                            </div>
                            <button type="button" className="datepicker-nav" onClick={() => {}}>›</button>
                          </div>
                          <div className="datepicker-days-header">
                            <div className="datepicker-day-header">Su</div>
                            <div className="datepicker-day-header">Mo</div>
                            <div className="datepicker-day-header">Tu</div>
                            <div className="datepicker-day-header">We</div>
                            <div className="datepicker-day-header">Th</div>
                            <div className="datepicker-day-header">Fr</div>
                            <div className="datepicker-day-header">Sa</div>
                          </div>
                          <div className="datepicker-grid" id="checkin-calendar" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 mb-2">
                    <div className="floating-field">
                      <label className="floating-label">Check-out</label>
                      <img src="assets/icon-checkin.svg" alt="" className="field-icon clickable" onClick={() => {}} />
                      <div className="date-input-wrapper">
                        <input type="text" className="form-control form-control-lg" id="checkout" placeholder="Select date" readOnly onClick={() => {}} />
                        <div className="custom-datepicker" id="checkout-picker">
                          <div className="datepicker-header">
                            <button type="button" className="datepicker-nav" onClick={() => {}}>‹</button>
                            <div className="datepicker-title">
                              <button type="button" className="datepicker-dropdown" onClick={() => {}}>
                                <span id="checkout-month">January</span>
                                <i className="bi bi-chevron-down" />
                              </button>
                              <button type="button" className="datepicker-dropdown" onClick={() => {}}>
                                <span id="checkout-year">2024</span>
                                <i className="bi bi-chevron-down" />
                              </button>
                            </div>
                            <button type="button" className="datepicker-nav" onClick={() => {}}>›</button>
                          </div>
                          <div className="datepicker-days-header">
                            <div className="datepicker-day-header">Su</div>
                            <div className="datepicker-day-header">Mo</div>
                            <div className="datepicker-day-header">Tu</div>
                            <div className="datepicker-day-header">We</div>
                            <div className="datepicker-day-header">Th</div>
                            <div className="datepicker-day-header">Fr</div>
                            <div className="datepicker-day-header">Sa</div>
                          </div>
                          <div className="datepicker-grid" id="checkout-calendar" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="floating-field">
                      <label className="floating-label">Guests</label>
                      <img src="assets/icon-guests.svg" alt="" className="field-icon" />
                      <select className="form-select form-select-lg" id="guests" defaultValue="2 adults, 1 room">
                        <option>2 adults, 1 room</option>
                        <option>1 adult, 1 room</option>
                        <option>2 adults, 2 rooms</option>
                        <option>Family, 1 room</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-6 d-grid">
                    <button type="submit" className="btn btn-primary btn-lg">Search hotels</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
