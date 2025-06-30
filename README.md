# Herba Wanders E-Commerce Website Frontend Only

## Overview

This project is an E-commerce website developed for Herba Wanders Private Limited to showcase and sell natural products such as Shilajit, Moringa, Ashwagandha, Chyavanprash, Oils, Honey, and other nutritional supplements. The website allows customers to browse products and enjoy a seamless shopping experience.

## Key Features

- Responsive and interactive UI built with React and TypeScript.
- Easy-to-use shopping cart for managing products.
- Modern and flexible design using Tailwind CSS.
- Product listing with detailed product pages.
- State management using React Context API.
- Fully responsive across desktop and mobile devices.

## Tech Stack

- **React**: For building dynamic user interfaces.
- **TypeScript**: For type safety and better code maintainability.
- **Tailwind CSS**: Utility-first CSS framework for rapid styling.
- **React Router DOM**: Client-side routing to handle page navigation.

## Project Structure

frontend/                        # React app root folder
├── node_modules/                # Node.js dependencies (auto-generated)
├── public/                      # Public assets (served as-is, no bundling)
│   ├── index.html               # Main HTML file (uses %PUBLIC_URL%)
│   ├── logo.png                 # Logo used for favicon or other static access
│   ├── favicon.ico              # Optional: default favicon (can replace with logo.png)
│   ├── logo192.png              # Optional for PWA
│   ├── logo512.png              # Optional for PWA
│   ├── manifest.json            # Web app manifest
│   └── robots.txt               # SEO instructions for crawlers
│
├── src/                         # React source code
│   ├── assets/                  # Static media assets used inside React
│   │   └── images/              # All image files for components/pages
│   │       ├── banner1.jpg
│   │       ├── banner2.jpg
│   │       ├── banner3.jpg
│   │       ├── bee_pollen.jpg
│   │       ├── chamomile.jpg
│   │       ├── chia_seeds.jpg
│   │       ├── chyavanprash.jpg
│   │       ├── coconut-oil.png
│   │       ├── hand-soap.png
│   │       ├── moringa_leaves_tea.jpg
│   │       ├── moringa_powder.jpg
│   │       ├── multigrain_satu.jpg
│   │       ├── native_chiuri_honey.jpg
│   │       ├── shilajit.jpg
│   │       ├── cart-icon.png
│   │       └── logo.png             # Logo used inside React components
│
│   ├── components/              # Reusable React components
│   │   ├── Banner.tsx
│   │   ├── Cart.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Home.tsx
│   │   └── ProductDetails.tsx
│
│   ├── contexts/                # Global state management
│   │   └── CartContext.tsx
│
│   ├── pages/                   # Main page routes
│   │   ├── About.tsx
│   │   ├── Checkout.tsx
│   │   ├── Contact.tsx
│   │   ├── Products.tsx
│   │   └── TipsAndResources.tsx
│
│   ├── styles/                  # Global & custom Tailwind styles
│   │   └── globals.css
│
│   ├── App.css                  # Optional component styles
│   ├── App.test.tsx            # Tests (optional)
│   ├── App.tsx                 # Root App component
│   ├── index.css               # Tailwind base (imported in index.tsx)
│   ├── index.tsx               # Main React entry point
│   ├── reportWebVitals.ts      # Performance logging
│   ├── setupTests.ts           # Testing setup
│   └── tsconfig.json           # TypeScript config
│
├── tailwind.config.js          # Tailwind theme config
├── postcss.config.js           # PostCSS for Tailwind
├── package.json                # Project scripts & dependencies
├── package-lock.json           # Exact dependency versions
└── README.md                   # Project description & usage



## Installation

To set up the project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/LagnadLinus/herba_wanders_frontend.git
   cd herba_wanders_frontend


2. Install Dependencies:
    npm install

3. Start the development server:
    npm start

The application will be available locally at http://localhost:3000.


Development Setup
React & TypeScript: For building scalable and maintainable UI.
Tailwind CSS: For quick and responsive styling.
React Context: To manage global state like the shopping cart.
React Router DOM: For client-side routing and navigation.


Features
Home Page: Curated product listings and featured banners.
Product Details Page: Detailed view of individual products.
Shopping Cart: Add, remove, and update product quantities.
Checkout Page: Placeholder page for future payment integration.
Responsive Design: Works smoothly on both desktop and mobile devices.


How to Contribute:

1. Fork the repository and create a new branch:
git checkout -b feature-branch

2. Make your changes and commit them:
git commit -m "Add new feature"

3. Push the changes to your fork:
git push origin feature-branch

4. Open a pull request to merge your changes into the main repository.


Acknowledgements
Special thanks to 
- Flaticon for the icons used in the project. 
- Redempticon for the maintenance logo and the cart icon. 
- Nataliya Vaitkevich for the banner pic. (https://www.pexels.com/photo/flat-lay-photo-of-alternative-medicines-7615470/)
- Kaboom Pics for banner2. (https://www.pexels.com/photo/edible-flowers-and-spices-on-wooden-board-4871216/)
- Kaboom Pics for banner3. (https://www.pexels.com/photo/composition-of-spoonfuls-with-various-spices-4199098/)

Description: 
The repository "herba_wanders_frontend" is a React-based frontend project for the Herba Wanders E-commerce platform, dedicated to selling natural wellness products like Shilajit, Moringa, Ashwagandha, and others. It utilizes TypeScript and Tailwind CSS for a responsive and scalable design. The app allows users to browse and purchase products.