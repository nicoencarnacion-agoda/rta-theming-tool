import { useNavigate } from 'react-router-dom'

export default function MainNavbar() {
  const navigate = useNavigate()

  return (
    <nav id="main-navbar" className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-4">
      <div className="container-fluid" style={{ paddingLeft: '24px', paddingRight: '24px' }}>
        <a className="navbar-brand d-flex align-items-center" href="#" onClick={(e) => { e.preventDefault(); navigate('/') }}>
          <img src="assets/generic-logo.png" alt="Generic Logo" className="me-2" style={{ height: '32px', width: 'auto' }} />
        </a>

        <div className="d-flex align-items-center gap-3 d-lg-none">
          <a href="#" title="Cart"><img src="assets/agoda-icons/cart-empty.svg" alt="Cart" style={{ width: '22px', height: '22px' }} /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <i className="bi bi-list" style={{ fontSize: '22px', color: 'var(--text-neutral-1)' }} />
          </button>
        </div>

        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="d-flex flex-column flex-lg-row justify-content-lg-between w-100">
            <div className="d-flex flex-column flex-lg-row align-items-start align-items-lg-center gap-4">
              <ul className="navbar-nav mb-2 mb-lg-0 gap-4">
                <li className="nav-item">
                  <a className="nav-link" href="#" onClick={(e) => { e.preventDefault(); navigate('/results') }}>Hotels</a>
                </li>
              </ul>
            </div>
            <div className="d-flex flex-column flex-lg-row align-items-start align-items-lg-center gap-3 gap-lg-5 mt-3 mt-lg-0">
              <div className="d-flex flex-column flex-lg-row align-items-start align-items-lg-center gap-2 gap-lg-4">
                <div className="mr-4" style={{ fontSize: '0.95rem', color: 'var(--text-neutral-2)' }}>English (US)</div>
                <div style={{ color: 'var(--text-neutral-2)' }}>USD</div>
              </div>
              <a href="#" title="Cart" className="d-block d-lg-none"><img src="assets/agoda-icons/cart-empty.svg" alt="Cart" style={{ width: '22px', height: '22px' }} /></a>
              <div className="dropdown">
                <div className="dropdown-toggle d-flex align-items-center" id="userDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ cursor: 'pointer' }}>
                  <div className="text-end me-2">
                    <div className="user-name">Jackson Hayes</div>
                    <div className="user-miles">1,000,000 miles</div>
                  </div>
                </div>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="userDropdown">
                  <li><a className="dropdown-item" href="#">Profile</a></li>
                  <li><a className="dropdown-item" href="#">Logout</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
