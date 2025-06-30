



import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart.tsx";
import logo from '../assets/images/logo.png';
import cartIcon from '../assets/images/cart-icon.png';
import { FaFacebook, FaGoogle } from 'react-icons/fa';





const Header: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (
    <div className="relative">
      {/* Notification Bar */}
      <div className="bg-[#84cc16] text-[#020617] text-sm py-2 text-center">
      <span>📍 Address: Boudha-6, Opp. to Bouddhanath Stupa (Opp. to Siddhartha)</span>
      </div>

      <header className="bg-[#042f2e] shadow-md sticky top-0 z-50">
        {/* Top Header */}
        <div className="flex items-center justify-between px-4 py-3 md:px-6 md:gap-6">
          {/* Hamburger Menu */}
          <button
            className="hamburger flex flex-col justify-center items-center space-y-2 w-8 h-8 transition-all duration-300 ml-4 md:mr-6" aria-label="Toggle menu"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen ? "true" : "false"}
            aria-controls="mobile-menu"
          >
            <div className="w-6 h-1 bg-[#fafafa] transition-all duration-300"></div>
            <div className="w-6 h-1 bg-[#fafafa] transition-all duration-300"></div>
            <div className="w-6 h-1 bg-[#fafafa] transition-all duration-300"></div>
          </button>
          
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-gray-800 flex-shrink-0">
            <img src={logo} alt="Brand Logo" className="h-10 md:h-15" />

          </Link>

          {/* Search Bar */}
          <div className="flex-1 mx-6 justify-center hidden md:flex">
            <form className="w-full flex">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-2/3 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-600 transition-all duration-300 ease-in-out focus:w-[80%] focus:border-green-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[#84cc16] text-white rounded-r-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 transition-all duration-300 ease-in-out"
              >
                Search
              </button>
            </form>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-8">
            {/* Sign In */}
            <button
              onClick={() => setIsSignInOpen(true)}
              className="bg-transparent border border-green-500 text-[#fafafa] font-semibold rounded-full px-6 py-2 shadow-md transition-all duration-300 transform hover:bg-green-500 hover:text-white hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
            >
              Sign In
            </button>


            {/* Cart */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative text-gray-800 hover:text-green-500"
              aria-label="View Cart"
            >
              <img src={cartIcon} alt="Cart" className="h-6 w-6" />
              <span className="absolute -top-3 -right-4 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
                {cartCount}
              </span>
            </button>

            {/* Cart Drawer */}
            <Cart 
              isOpen={isCartOpen}
              closeCart={() => setIsCartOpen(false)} 
              setCartCount={setCartCount}
              />
          </div>
        </div>


        {/* Mobile Search Bar */}
        <div className="md:hidden px-4 py-3">
          <form className="w-full flex">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-[#84cc16] text-white rounded-r-md hover:bg-green-600 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 transition-all duration-300"
            >
              Search
            </button>
          </form>
        </div>
      </header>

      {/* Hamburger Menu Drawer */}
      {isMenuOpen && (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex justify-start z-[60]"
        onClick={() => setIsMenuOpen(false)}
      >
        {/* Drawer */}
        <div
          className="w-72 h-full bg-white shadow-xl overflow-y-auto transform transition-transform duration-300 ease-in-out"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Connected Section */}
          <div>
            {/* Notification Bar Color */}
            <div className="h-9 bg-[#84cc16]"></div>
            
            {/* Header Color */}
            <div className="h-16 bg-[#042f2e] flex items-center justify-between px-4 text-white">
              <h2 className="text-lg font-semibold">Menu</h2>
              <button
              className="text-2xl text-white hover:text-gray-300 focus:outline-none"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
             ✗
            </button>
            </div>
          </div>

          {/* Menu Items */}
          <nav className="mt-4">
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="flex items-center gap-4 px-4 py-3 text-[#042f2e] hover:text-[#84cc16] hover:bg-[#f5f5f5] rounded-md transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="font-medium">Home</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="flex items-center gap-4 px-4 py-3 text-[#042f2e] hover:text-[#84cc16] hover:bg-[#f5f5f5] rounded-md transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="font-medium">Products</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/tipsandresources"
                  className="flex items-center gap-4 px-4 py-3 text-[#042f2e] hover:text-[#84cc16] hover:bg-[#f5f5f5] rounded-md transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="font-medium">Tips & Resources</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="flex items-center gap-4 px-4 py-3 text-[#042f2e] hover:text-[#84cc16] hover:bg-[#f5f5f5] rounded-md transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="font-medium">About</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="flex items-center gap-4 px-4 py-3 text-[#042f2e] hover:text-[#84cc16] hover:bg-[#f5f5f5] rounded-md transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="font-medium">Contact</span>
                </Link>
              </li>
            </ul>
          </nav>

          {/* Footer */}
          <div className="mt-auto p-4 border-t border-gray-200">
            <p className="text-sm text-gray-500">© 2024 Herba Wanders. All rights reserved.</p>
          </div>
        </div>
      </div>
    )}


      {/* Sign-In Drawer */}
      {isSignInOpen && (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-[60]"
        onClick={() => setIsSignInOpen(false)}
      >
        <div
          className="w-96 h-full bg-white shadow-xl overflow-y-auto transform transition-transform duration-300 ease-in-out"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Connected Section */}
          <div>
            {/* Notification Bar Color */}
            <div className="h-9 bg-[#84cc16]"></div>
            {/* Header Color */}
            <div className="h-16 bg-[#042f2e] flex items-center justify-between px-4 text-white">
              <h2 className="text-lg font-semibold">Sign In</h2>
              <button
                className="text-2xl text-white hover:text-gray-300 focus:outline-none"
                onClick={() => setIsSignInOpen(false)}
                aria-label="Close Sign-In"
              >
                ✗
              </button>
            </div>
          </div>

          {/* Sign-In Form */}
          <div className="p-6">
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#84cc16] focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#84cc16] focus:outline-none"
                />
              </div>
              <div className="flex items-center justify-between">
                <label className="flex items-center text-sm text-gray-700">
                  <input type="checkbox" className="mr-2 rounded" />
                  Remember me
                </label>
                <button
                  type="button"
                  onClick={(e) => e.preventDefault()}
                  className="text-sm text-[#84cc16] hover:underline"
                >
                  Forgot Password?
                </button>
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-[#84cc16] text-white font-semibold rounded-md hover:bg-green-600 transition-all duration-300"
              >
                Sign In
              </button>
            </form>
          </div>

          {/* Social Login Options */}
          <div className="p-6 border-t border-gray-200">
            <p className="text-sm text-center text-gray-500 mb-4">Or sign in with</p>
            <div className="flex gap-4 justify-center">
              <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300">
                <FaFacebook className="h-5 w-5" />
                Facebook
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-all duration-300">
                <FaGoogle className="h-5 w-5" />
                Google
              </button>
            </div>
          </div>


          {/* Sign-Up Redirect */}
          <div className="p-6 text-center">
            <p className="text-sm text-gray-500">
              Don't have an account?{" "}
              <Link
                onClick={(e) => e.preventDefault()}
                className="text-[#84cc16] hover:underline font-medium"
              >
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>
    )}


      <style jsx>{`
        .hamburger div {
          transition: all 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default Header;
