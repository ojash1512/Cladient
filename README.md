# Cladient — Men's Fashion & Accessories Store 👔✨

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.2.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/)
[![CSS3](https://img.shields.io/badge/CSS3-Modern_Design-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

> A modern, responsive, and feature-rich e-commerce web application dedicated to premium men's fashion essentials, leather accessories, footwear, eyewear, timepieces, and signature fragrances.

---

## 🌟 Key Features

### 🛍️ Curated Men's Collection
- **8 Distinct Categories**: Wallets, Belts, Shoes, Shades, Caps, Perfumes, Digital Watches, and Analog Watches.
- **32+ Handcrafted Products**: High-resolution imagery, pricing, descriptions, stock availability badges, and customer ratings.
- **Interactive Category Filter**: Horizontal category selector with active states, smooth scrolling, and hover animations.

### 🔍 Real-Time Live Search
- Integrated directly into the navigation header.
- Instant search filtering as you type across product names, categories, and descriptions.
- Dynamic item counters and clean empty-state feedback with a single-click reset.

### 🛒 Shopping Bag & Cart State
- **Persistent Cart**: Automatically saves cart contents to `localStorage`, preserving your items across refreshes.
- **Dynamic Badge**: Live counter badge on the navbar basket icon reflecting the total quantity of items.
- **Quantity Adjustments**: Increment (`+`) or decrement (`-`) item counts directly from the product card or inside the shopping cart table.
- **Safe Totals Calculation**: Accurately computes subtotal, standard shipping fee (waived if cart is empty), and final totals.

### 🎟️ Promotional Discount Engine
- Working promo code validation system:
  | Promo Code | Discount Offer | Description |
  | :--- | :--- | :--- |
  | `MENS10` | **10% OFF** | 10% discount on order subtotal |
  | `SAVE20` | **$20.00 OFF** | Flat $20 discount on your purchase |
- Real-time success and error validation toasts with automatic recalculation of the final total.

### 📦 Seamless Checkout & Order Confirmation
- **Delivery Information Form**: Controlled form validating name, email, street address, city, state, zip code, and phone number.
- **Multiple Payment Methods**: Select between **Cash on Delivery (COD)**, **Credit / Debit Card**, and **UPI / NetBanking**.
- **Order Confirmed Screen**: Displays a uniquely generated Order ID (`#ORD-XXXXXX`), order summary breakdown, and delivery destination.
- **Automatic Cart Reset**: Clears the shopping cart and promo state upon successful order placement.

### 🔐 User Authentication (Sign In & Sign Up)
- Centered popup modals featuring glassmorphic backdrop blurs and subtle entrance animations.
- Sign Up with username, email, password confirmation, and terms & privacy policy consent.
- Instant profile synchronization: Displays your active username in the navbar with a single-click **Sign Out** button.

### 📱 Responsive & Accessible UI
- Designed with mobile-first principles: Desktop, tablet, and smartphone compatibility.
- Responsive navigation with toggleable mobile menu.
- Styled using a tailored modern palette featuring clean typography via Google Fonts (`Outfit`), subtle shadows, and micro-interactions.

---

## 🛠️ Technology Stack

| Technology | Purpose |
| :--- | :--- |
| **React 18** | UI component architecture and state management |
| **Vite** | Next-generation frontend tooling and rapid HMR development server |
| **React Router v6** | Client-side page navigation (`/`, `/cart`, `/order`) |
| **Context API** | Centralized application store for cart, search, discounts, and auth |
| **LocalStorage API** | Browser-side state persistence for cart items and user sessions |
| **Vanilla CSS3** | Custom design system, CSS Grid, Flexbox, glassmorphism, animations |

---

## 📂 Project Architecture

```text
MEN-S_FASHION-master/
├── public/                 # Static public assets
├── src/
│   ├── assets/             # Images, icons, and product catalog dataset
│   │   ├── assets.js       # Complete product dataset & menu list
│   │   └── *.png           # Product images, icons, and banners
│   ├── components/         # Reusable modular UI components
│   │   ├── ExploreMenu/    # Category selection carousel
│   │   ├── FoodDisplay/    # Dynamic product grid & filter view
│   │   ├── FoodItem/       # Individual product card with qty toggles
│   │   ├── Footer/         # Brand footer with quick links & contact info
│   │   ├── Header/         # Hero banner with call-to-action
│   │   ├── LoginPopup/     # User login modal
│   │   ├── Navbar/         # Main sticky navbar with search & cart counter
│   │   └── Signup/         # User registration modal with terms agreement
│   ├── context/            # React Context state management
│   │   └── StoreContext.jsx# Cart logic, search term, promo engine
│   ├── pages/              # Application views
│   │   ├── Cart/           # Shopping cart overview & promo entry
│   │   ├── Home/           # Landing page with hero, categories, & products
│   │   └── PlaceOrder/     # Checkout form & order confirmation
│   ├── App.jsx             # Root component with routing and modal state
│   ├── index.css           # Global typography, color tokens, and layout
│   └── main.jsx            # Application entry point
├── index.html              # HTML5 entry with SEO meta tags
├── package.json            # Scripts and dependencies
└── vite.config.js          # Vite configuration
```

---

## 🚀 Getting Started

Follow these steps to run the project locally on your machine:

### 1. Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v16.0 or higher) and [npm](https://www.npmjs.com/) installed:
```bash
node -v
npm -v
```

### 2. Clone the Repository
```bash
git clone https://github.com/ojash1512/Cladient.git
cd Cladient
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Start Development Server
```bash
npm run dev
```
Open your browser and navigate to:
```text
http://localhost:5173
```

### 5. Build for Production
To create an optimized production build:
```bash
npm run build
```
To preview the production bundle locally:
```bash
npm run preview
```

---

## 🧪 Testing the Features

1. **Category Filtering**: Click on categories like *Wallets*, *Shoes*, or *Analog Watch* to filter products dynamically.
2. **Live Search**: Click the search icon in the top navigation bar, type `belt` or `watch`, and watch the catalog filter immediately.
3. **Cart & Badges**: Click the `+` button on any product card. Notice the badge counter increment in the navbar.
4. **Promo Codes**: Go to `/cart` by clicking the shopping basket icon, enter `MENS10`, and click **Apply** to see a 10% discount subtracted from your total.
5. **Checkout**: Click **PROCEED TO CHECKOUT**, fill in delivery details, pick a payment method, and confirm your order to receive your Order Confirmation ID.
6. **Authentication**: Click **Sign Up** in the navbar, create an account, and observe your profile state update across the header.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
Feel free to customize, enhance, and build upon it!

