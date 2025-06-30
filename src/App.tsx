



import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header.tsx';
import Footer from './components/footer.tsx';
import ProductDetails from './components/ProductDetails.tsx';
import { CartProvider } from "./contexts/CartContext.tsx"
import './styles/global.css';

// Lazy load pages for better performance
const Home = React.lazy(() => import('./components/home.tsx'));
const Banner = React.lazy(() => import('./components/banner.tsx'));
const Products = React.lazy(() => import('./pages/products.tsx'));
const Checkout = React.lazy(() => import('./pages/checkout.tsx'));
const TipsAndResources = React.lazy(() => import('./pages/tipsandresources.tsx'));
const About = React.lazy(() => import ('./pages/about.tsx'));
const Contact = React.lazy(() => import('./pages/contact.tsx'));

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <CartProvider>
      <div className="App">
        <Header /> {/* Display the Header component */}
        <Suspense fallback={<div className="loading">Loading...</div>}> {/* Fallback UI during lazy loading */}
          <Routes>
            <Route path="/" element={
              <>
                <Banner /> {/* Banner component */}
                <Home />   {/* Home component below the Banner */}
              </>
            } />
            <Route path="/products" element={<Products />} /> {/* Products page */}
            <Route path="/product/:id" element={<ProductDetails />} /> {/* Product Details page */}
            <Route path="/checkout" element={<Checkout />} /> {/* Checkout page */}
            <Route path="/tipsandresources" element={<TipsAndResources />} /> {/* Tips and Resources page */}
            <Route path="/about" element={<About />} /> {/* Tips and Resources page */}
            <Route path="/contact" element={<Contact />} /> {/* Contact page */}
            <Route path="*" element={<h1 className="text-center mt-4">404 - Page Not Found</h1>} /> {/* Handle unknown routes */}
          </Routes>
        </Suspense>
        <Footer /> {/* Display the Footer component */}
      </div>
      </CartProvider>
    </BrowserRouter>
  );
};

export default App;
