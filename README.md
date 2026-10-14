# 🛍️ Cladient — Men's Fashion E-Commerce Store

> **A Frontend Web Development Project by [Ojash Verma](https://github.com/ojash1512)**

[![React](https://img.shields.io/badge/React-18-blue?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.2-purple?logo=vite)](https://vitejs.dev/)
[![CSS3](https://img.shields.io/badge/CSS3-Vanilla-orange?logo=css3)](https://www.w3.org/Style/CSS/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## 📌 Project Overview

Hi! 👋 Welcome to **Cladient**, an e-commerce web application I built for Men's Fashion and Accessories. 

I developed this project to practice building a real-world, responsive single-page web app (SPA) using **React.js** and **Vite**. The store features a wide range of men's products including wallets, belts, shoes, sunglasses, caps, perfumes, and watches.

Instead of using heavy UI component libraries, I wanted to strengthen my fundamentals by building all the UI components, animations, and responsive layouts using **pure Vanilla CSS** and managing application state using **React Context API**.

---

## 🚀 Live Demo & Repository

- **GitHub Repository**: [https://github.com/ojash1512/Cladient](https://github.com/ojash1512/Cladient)
- **Local Dev Server**: `http://localhost:5173`

---

## ✨ Features Implemented

Here are the key features I built into the application:

### 1. Product Catalog & Category Filter
- **8 Categories**: Wallets, Belts, Shoes, Shades, Caps, Perfumes, Digital Watches, and Analog Watches.
- **32+ Items**: Each item has a photo, title, price, description, in-stock badge, and customer rating.
- **Interactive Category Bar**: Click on any category image to filter products instantly. Clicking it again resets to show all items.

### 2. Live Search Bar
- Expandable search box right inside the navigation bar.
- Filters products in real-time as you type.
- Shows the number of items found and displays a friendly empty state if nothing matches your search.

### 3. Shopping Cart & State Persistence
- **Persistent Cart**: Synced with browser `localStorage`, so your cart doesn't disappear when you refresh or reopen the page.
- **Cart Badge**: A live badge on the basket icon in the navbar shows your total item count.
- **Quantity Controls**: Add items from the product card or change quantities (`+` / `-`) directly inside the cart table.
- **Accurate Calculations**: Calculates Subtotal, Standard Delivery ($2), and Total. If the cart is empty, delivery fee drops to $0.

### 4. Working Promo / Coupon Engine
- Users can apply discount coupon codes:
  - **`MENS10`** → Gives **10% OFF** on the order subtotal.
  - **`SAVE20`** → Gives a flat **$20.00 OFF** discount.
- Gives immediate feedback if the code is valid or invalid.

### 5. Checkout & Order Placement
- **Delivery Form**: Validates user inputs (First Name, Last Name, Email, Address, City, State, Zip, Phone).
- **Payment Method Selection**: Choose between *Cash on Delivery (COD)*, *Credit/Debit Card*, or *UPI*.
- **Order Success Screen**: Generates a random Order ID (e.g. `#ORD-481923`), displays the order summary, and automatically clears the cart.

### 6. User Authentication Modals
- Custom **Sign In** and **Sign Up** popups with a frosted-glass backdrop blur effect.
- Form validation with password matching and terms checkbox.
- Remembers logged-in user in `localStorage` and shows a welcome greeting + Sign Out button in the navbar.

### 7. Responsive Design
- Clean layout on desktop, tablet, and mobile devices.
- Mobile hamburger menu and auto-wrapping product cards.

---

## 🛠️ Tech Stack & Concepts Used

- **React 18** — Functional components, Hooks (`useState`, `useEffect`, `useContext`)
- **React Router DOM v6** — Client-side navigation (`/`, `/cart`, `/order`)
- **React Context API** — Central state management for cart items, promo codes, and search queries
- **Vite** — Fast modern build tool and development server
- **HTML5 & Vanilla CSS3** — Flexbox, CSS Grid, media queries, CSS animations, and Outfit Google Font
- **LocalStorage API** — Client-side data storage for cart items and user session

---

## 💡 What I Learned From Building This Project

1. **State Management with Context API**: Learning how to create a centralized store (`StoreContext.jsx`) so components like `Navbar`, `FoodItem`, `Cart`, and `PlaceOrder` can all share and update cart data without prop drilling.
2. **Handling Edge Cases in E-Commerce Logic**: 
   - Making sure delivery fee isn't charged when the cart is empty.
   - Safeguarding total calculations so undefined product IDs don't crash the application.
   - Creating smooth empty-cart and empty-search states.
3. **Form Handling in React**: Managing controlled form inputs, performing validations (passwords matching, required fields), and switching between sign-in and sign-up modals.
4. **CSS Layouts without Frameworks**: Practicing CSS Grid for responsive product listings and Flexbox for headers, cards, and summaries.

---

## 📂 Project Structure

```text
Cladient/
├── public/                 # Static assets (favicons, etc.)
├── src/
│   ├── assets/             # Product images, icons, and product list data
│   │   ├── assets.js       # Product catalog dataset
│   │   └── *.png
│   ├── components/         # Reusable UI components
│   │   ├── ExploreMenu/    # Category filter slider
│   │   ├── FoodDisplay/    # Product list grid with search filter
│   │   ├── FoodItem/       # Individual product card
│   │   ├── Footer/         # Website footer
│   │   ├── Header/         # Hero banner
│   │   ├── LoginPopup/     # Sign in modal
│   │   ├── Navbar/         # Top navbar (search, cart badge, auth)
│   │   └── Signup/         # Sign up modal
│   ├── context/
│   │   └── StoreContext.jsx# Global context for cart, promo, & search
│   ├── pages/
│   │   ├── Cart/           # Cart page with promo code input
│   │   ├── Home/           # Main homepage
│   │   └── PlaceOrder/     # Checkout form & order confirmed view
│   ├── App.jsx             # Main App layout & routes
│   ├── index.css           # Global CSS styles
│   └── main.jsx            # React root render
├── index.html              # HTML entry point
├── package.json            # Project dependencies & scripts
└── vite.config.js          # Vite config
```

---

## 🏃 How to Run This Project Locally

If you'd like to run this project on your machine, follow these steps:

### 1. Clone the repo
```bash
git clone https://github.com/ojash1512/Cladient.git
cd Cladient
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the dev server
```bash
npm run dev
```

### 4. Open in browser
Open [http://localhost:5173](http://localhost:5173) in your browser to view the application!

---

## 🔮 Future Improvements / What's Next

Since this was built as a frontend project, here are some features I'd like to add in the future:
- [ ] Connect a Node.js + Express backend with MongoDB database.
- [ ] Integrate a real payment gateway like Stripe or Razorpay.
- [ ] Add an "Order History" page for logged-in users.
- [ ] Add a product wishlist feature (Save for Later).

---

## 👨‍💻 Author

**Ojash Verma**  
- GitHub: [@ojash1512](https://github.com/ojash1512)  
- Email: ojash3463verma@gmail.com  

*If you found this project interesting or helpful, please feel free to drop a ⭐ on the repo!*


