import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import CheckoutLayout from './layouts/CheckoutLayout'
import SearchPage from './pages/SearchPage'
import SearchResultsPage from './pages/SearchResultsPage'
import PropertyPage from './pages/PropertyPage'
import GuestDetailsPage from './pages/GuestDetailsPage'
import PaymentPage from './pages/PaymentPage'
import EditBookingPage from './pages/EditBookingPage'

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<SearchPage />} />
        <Route path="/results" element={<SearchResultsPage />} />
        <Route path="/property" element={<PropertyPage />} />
        <Route path="/edit-booking" element={<EditBookingPage />} />
      </Route>
      <Route element={<CheckoutLayout />}>
        <Route path="/guest-details" element={<GuestDetailsPage />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Route>
    </Routes>
  )
}
