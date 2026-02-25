import { useNavigate } from 'react-router-dom'

interface CheckoutNavbarProps {
  currentStep: 'guest-details' | 'payment' | 'confirmation'
}

export default function CheckoutNavbar({ currentStep }: CheckoutNavbarProps) {
  const navigate = useNavigate()

  const steps = ['guest-details', 'payment', 'confirmation'] as const
  const currentIndex = steps.indexOf(currentStep)
  const progressPercents = [25, 75, 100]

  function getStepClass(step: string, index: number) {
    if (index < currentIndex) return 'checkout-step completed'
    if (index === currentIndex) return 'checkout-step active'
    return 'checkout-step'
  }

  return (
    <nav id="checkout-navbar" className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3" style={{ display: 'flex', borderBottom: '4px solid var(--border-primary-interactive)' }}>
      <div className="container-fluid checkout-navbar-container" style={{ paddingLeft: '24px', paddingRight: '24px' }}>
        <a className="navbar-brand d-flex align-items-center" href="#" onClick={(e) => { e.preventDefault(); navigate('/') }}>
          <img src="assets/generic-logo.png" alt="Generic Logo" style={{ height: '32px', width: 'auto' }} />
        </a>

        <div className="checkout-stepper">
          <div className="stepper-progress-line">
            <div className="progress" style={{ width: `${progressPercents[currentIndex]}%` }} />
          </div>

          <div className={getStepClass('guest-details', 0)} id="step-guest-details">
            <span className="step-number">1</span>
            <span className="step-label">Guest details</span>
          </div>
          <div className={getStepClass('payment', 1)} id="step-payment">
            <span className="step-number">2</span>
            <span className="step-label">Payment</span>
          </div>
          <div className={getStepClass('confirmation', 2)} id="step-confirmation">
            <span className="step-number">3</span>
            <span className="step-label">Confirmation</span>
          </div>
        </div>

        <div className="d-none">
          <span className="step-label" id="mobile-step-label">Step {currentIndex + 1} of 3</span>
        </div>

        <button className="btn btn-outline-primary" onClick={() => navigate('/')}>Sign out</button>
      </div>
    </nav>
  )
}
