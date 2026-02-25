export default function Footer() {
  return (
    <footer className="footer mt-auto">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-3 mb-3 mb-md-0">
            <div className="footer-section-title">About</div>
            <a href="#" className="footer-link">Frequently asked questions</a>
            <a href="#" className="footer-link">Website terms of use</a>
            <a href="#" className="footer-link">Travel terms and conditions</a>
            <a href="#" className="footer-link">Privacy notice</a>
          </div>
          <div className="col-md-6 mb-3 mb-md-0">
            <div className="footer-section-title">Questions?</div>
            <a href="#" className="footer-link">If you have questions or need assistance from a Travel Rewards Agent, please call</a>
            <a href="#" className="footer-link">Within the US: 1-111-111-1111</a>
            <a href="#" className="footer-link">Outside the US: 1-111-111-1111</a>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between mb-4">
          <img src="assets/generic-logo.png" alt="Generic Logo" style={{ height: '40px', width: 'auto' }} />
          <img src="assets/rocket-travel-logo.png" alt="rocket travel by agoda" style={{ height: '32px' }} />
        </div>
        <div className="row mt-2">
          <div className="footer-powered">
            <div className="mb-3">Powered by Rocket Travel Inc., part of the Booking Holdings Inc. group of companies together with Booking.com</div>
            <div>&copy; 2025 Rocket Travel. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
