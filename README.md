# RTA Platform Template

A frontend-only React application showcasing a hotel booking flow — from search to payment. Built as a design reference template with static data and no backend or API calls.

## Features

- **Search Page** (`/`) - Hero section with search form, destination/dates/guests inputs, and promotional banner
- **Search Results** (`/results`) - Filter sidebar (property type, star rating, neighborhood, room offers, payment options), sorting bar, and hotel listing cards
- **Property Page** (`/property`) - Image gallery, property overview with highlights and facilities, rating breakdown, location card, room filters
- **Guest Details** (`/guest-details`) - Contact details form with booking summary sidebar
- **Payment** (`/payment`) - Miles redemption options, secure credit card form, cancellation policy, and booking summary
- **Edit Booking** (`/edit-booking`) - Booking details view with room info, guest info, cancellation timeline, and payment breakdown

## Tech Stack

- React 18
- React Router v6
- Bootstrap 5.3 + Bootstrap Icons
- TypeScript
- Vite (build tool)

## Prerequisites (macOS)

Before you begin, make sure you have the following installed on your machine:

### 1. Homebrew

Homebrew is a package manager for macOS that makes it easy to install software.

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

After installation, follow the instructions in the terminal to add Homebrew to your PATH.

### 2. Node.js (v18 or higher recommended)

Node.js is a JavaScript runtime that includes **npm** (Node Package Manager), which is used to install project dependencies.

```bash
brew install node
```

### 3. Git (optional, for cloning the repository)

```bash
brew install git
```

### Verify Installation

After installing, verify everything is set up correctly:

```bash
node --version    # Should show v18.x.x or higher
npm --version     # Should show 9.x.x or higher
git --version     # Should show git version 2.x.x
```

---

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or the port Vite assigns).

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
  ├── main.tsx                          # Entry: imports CSS, renders App
  ├── App.tsx                           # BrowserRouter + Routes
  ├── styles/
  │   └── global.css                    # Global styles and CSS custom properties
  ├── layouts/
  │   ├── MainLayout.tsx                # MainNavbar + Outlet + Footer
  │   └── CheckoutLayout.tsx            # CheckoutNavbar (stepper) + Outlet + Footer
  ├── components/
  │   ├── MainNavbar.tsx                # Main site navigation with user dropdown
  │   ├── CheckoutNavbar.tsx            # Checkout flow stepper navbar
  │   ├── Footer.tsx                    # Shared footer
  │   ├── SearchForm.tsx                # Reusable search bar
  │   ├── HotelCard.tsx                 # Hotel listing card
  │   ├── BookingSummaryCard.tsx        # Price summary sidebar
  │   └── PromoBanner.tsx              # Promotional banner
  └── pages/
      ├── SearchPage.tsx                # Hero + promo + search form with tabs
      ├── SearchResultsPage.tsx         # Filters sidebar + hotel cards
      ├── PropertyPage.tsx              # Image gallery, highlights, facilities
      ├── GuestDetailsPage.tsx          # Contact form + booking summary
      ├── PaymentPage.tsx               # Miles + payment form + booking summary
      └── EditBookingPage.tsx           # Booking details with cancellation timeline
public/
  ├── assets/                           # Hotel images, icons, logos
  └── demo-assets/                      # Demo-specific assets
```

## Routing

The app uses two layout groups:

| Layout             | Routes                                                    |
| ------------------ | --------------------------------------------------------- |
| **MainLayout**     | `/` (Search), `/results`, `/property`, `/edit-booking`    |
| **CheckoutLayout** | `/guest-details`, `/payment`                              |

## Notes

- This is a design reference template with no backend integration
- All data is static — there are no API calls or persistent state
- Navigation between pages uses React Router (`useNavigate`)
- Bootstrap JS is imported for dropdown and collapse interactions
- CSS custom properties on `:root` drive theming throughout the design
