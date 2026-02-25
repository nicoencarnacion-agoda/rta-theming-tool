import BookingSummaryCard from '../components/BookingSummaryCard'

export default function PaymentPage() {
  return (
    <div id="payment-page" className="section">
      <div className="container py-4" style={{ paddingLeft: 24, paddingRight: 24 }}>
        <div className="row g-4">
          {/* Left Column: Payment Form */}
          <div className="col-lg-7">
            {/* Miles Redemption Section */}
            <div className="miles-redemption-card">
              <div className="miles-header mb-2">
                <span className="optional-badge">Optional</span>
                <h5 className="mb-0">How many miles would you like to redeem?</h5>
              </div>
              <p className="text-muted mb-4">You have 64,400 miles (USD 512.31 value)</p>

              <div className="form-check miles-option-row">
                <input className="form-check-input" type="radio" name="milesOption" id="fullTripCost" />
                <label className="form-check-label" htmlFor="fullTripCost">
                  <div className="miles-option-label">Full trip cost</div>
                  <div className="miles-option-desc">Use miles to cover the entire cost of my trip</div>
                </label>
              </div>

              <div className="form-check miles-option-row">
                <input className="form-check-input" type="radio" name="milesOption" id="customAmount" />
                <label className="form-check-label" htmlFor="customAmount">
                  <div className="miles-option-label">Custom amount</div>
                  <div className="miles-option-desc">Choose a mix of miles and cash</div>
                </label>
              </div>

              <div className="form-check miles-option-row">
                <input className="form-check-input" type="radio" name="milesOption" id="noMiles" />
                <label className="form-check-label" htmlFor="noMiles">
                  <div className="miles-option-label">Pay without using miles</div>
                  <div className="miles-option-desc">Save my miles and pay cash</div>
                </label>
              </div>
            </div>

            {/* Mobile Hotel Card (shown only on mobile) */}
            <div className="mobile-hotel-card d-lg-none">
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
                  <div className="d-flex align-items-start gap-2 mb-2">
                    <img src="assets/agoda-icons/calendar.svg" width={16} height={16} alt="" />
                    <span>September 01, 2025 - September 03, 2025 | 2 night</span>
                  </div>
                  <div className="d-flex align-items-start gap-2 mb-2">
                    <img src="assets/agoda-icons/bed.svg" width={16} height={16} alt="" />
                    <span>1 x Small Double Room (19 m²)</span>
                  </div>
                  <div className="d-flex align-items-start gap-2 mb-2">
                    <img src="assets/agoda-icons/user.svg" width={16} height={16} alt="" />
                    <span>1 room, 2 adults</span>
                  </div>
                  <div className="d-flex justify-content-end mt-2">
                    <a href="#" className="text-link d-flex align-items-center gap-1 text-md" onClick={(e) => { e.preventDefault() }}>
                      <img src="assets/agoda-icons/thin-dropdown.svg" alt="" width={16} height={16} /> Show more
                    </a>
                  </div>
                </div>

                <hr style={{ margin: '16px 0', borderColor: 'var(--border-neutral-3)' }} />

                <a href="#" className="text-link text-md" onClick={(e) => { e.preventDefault() }}>Booking conditions</a>
              </div>
            </div>

            {/* Secure Payment Section */}
            <div className="secure-payment-section">
              <div className="secure-payment-header">
                <img src="assets/agoda-icons/shield-locker.svg" width={24} height={24} alt="Secure" />
                <h5 className="mb-0">Secure Payment</h5>
              </div>
              <p className="mb-3">All card information is fully encrypted, secure and protected.</p>

              <div className="card-payment-wrapper">
                <div className="card-type-header">
                  <span className="fs-5 fw-semibold">Credit or debit card</span>
                  <div className="card-logos" style={{ background: '#fff', borderRadius: 2, padding: 2, display: 'flex', gap: 2 }}>
                    <img src="assets/visa.png" alt="Visa" width={40} height={26} style={{ objectFit: 'contain' }} />
                    <img src="assets/amex.png" alt="American Express" width={40} height={26} style={{ objectFit: 'contain' }} />
                    <img src="assets/mastercard.png" alt="Mastercard" width={40} height={26} style={{ objectFit: 'contain' }} />
                  </div>
                </div>

                <div className="card-form-container">
                  <p className="text-muted mb-4 text-md">Only the cards associated with this account can be used to book</p>

                  <form>
                    <div className="row g-4">
                      <div className="col-12">
                        <div className="floating-field no-icon">
                          <label className="floating-label">Cardholder name*</label>
                          <input type="text" className="form-control form-control-lg" placeholder="Enter card holder name" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="floating-field no-icon">
                          <label className="floating-label">Credit/debit card number*</label>
                          <input type="text" className="form-control form-control-lg" placeholder="Enter card number" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="floating-field no-icon">
                          <label className="floating-label">Expiry date</label>
                          <select className="form-select form-select-lg" defaultValue="">
                            <option value="">Enter expiry date</option>
                            <option>01/25</option>
                            <option>02/25</option>
                            <option>03/25</option>
                            <option>04/25</option>
                            <option>05/25</option>
                            <option>06/25</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6 d-flex align-items-center gap-2">
                        <div className="floating-field no-icon flex-grow-1">
                          <label className="floating-label">CVC / CVV</label>
                          <input type="text" className="form-control form-control-lg" placeholder="Enter CVC / CVV" />
                        </div>
                        <img src="assets/agoda-icons/payment.png" alt="Secure payment" width={48} height={48} />
                      </div>
                      <div className="col-12">
                        <div className="floating-field no-icon">
                          <label className="floating-label">Zip code</label>
                          <input type="text" className="form-control form-control-lg" placeholder="Enter card billing zip code" />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* Cancellation Policy Section */}
            <div className="cancellation-section">
              <h5>Cancellation policy</h5>
              <p className="text-muted mb-0 text-md">
                [cancellation overview text goes here]
                <a href="#" className="text-link" onClick={(e) => { e.preventDefault() }}>Review full policy</a>
              </p>

              <div className="cancellation-checkbox">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="agreeCancellation" />
                  <label className="form-check-label" htmlFor="agreeCancellation">
                    I agree to the cancellation policy.
                  </label>
                </div>
              </div>
            </div>

            {/* Mobile Terms and Pay Section */}
            <div className="mobile-pay-section d-lg-none mt-4">
              <p className="text-muted mb-3 text-md">
                By proceeding with this booking, I agree to <a href="#" className="text-link" onClick={(e) => { e.preventDefault() }}>terms of use</a> and <a href="#" className="text-link" onClick={(e) => { e.preventDefault() }}>privacy policy</a>
              </p>
              <button type="button" className="btn btn-primary btn-lg w-100 d-flex align-items-center justify-content-center">
                PAY NOW <i className="bi bi-lock-fill ms-2" />
              </button>
            </div>

            {/* Mobile Price Details (shown only on mobile) */}
            <div className="mobile-price-details d-lg-none">
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

            {/* Desktop Footer with Terms and Pay Button */}
            <div className="desktop-pay-section d-none d-lg-flex justify-content-between align-items-center mt-4">
              <p className="text-muted mb-0 text-md">
                Placeholder text including <a href="#" className="text-link" onClick={(e) => { e.preventDefault() }}>{'<terms of use>'}</a> and <a href="#" className="text-link" onClick={(e) => { e.preventDefault() }}>{'<privacy policy>'}</a>
              </p>
              <button type="button" className="btn btn-primary btn-lg">
                PAY NOW <img src="assets/agoda-icons/lock.svg" alt="Secure" width={20} height={20} className="ms-2" />
              </button>
            </div>
          </div>

          {/* Right Column: Booking Summary (hidden on mobile) */}
          <div className="col-lg-5 d-none d-lg-block">
            <BookingSummaryCard />
          </div>
        </div>
      </div>
    </div>
  )
}
