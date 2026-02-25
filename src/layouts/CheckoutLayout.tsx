import { Outlet, useLocation } from 'react-router-dom'
import CheckoutNavbar from '../components/CheckoutNavbar'
import Footer from '../components/Footer'

export default function CheckoutLayout() {
  const location = useLocation()
  const currentStep = location.pathname === '/guest-details' ? 'guest-details' : 'payment'

  return (
    <>
      <CheckoutNavbar currentStep={currentStep} />
      <Outlet />
      <Footer />
    </>
  )
}
