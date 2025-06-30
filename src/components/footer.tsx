

import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/images/logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#042f2e] text-white py-10">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-8">
        <div className="flex flex-wrap justify-between gap-6">
          {/* Logo Section */}
          <div className="flex flex-col items-center sm:items-start">
            <Link to="/" className="mb-4">
              <img src={logo} alt="Brand Logo" className="h-15 md:h-25" />

            </Link>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4 uppercase">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-white text-sm hover:text-green-500">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-white text-sm hover:text-green-500">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white text-sm hover:text-green-500">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-white text-sm hover:text-green-500">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4 uppercase">Contact Us</h3>
            <p className="text-sm">Email: Everestregionenterprises@gmail.com </p>
            <p className="text-sm">Phone: 01-5918290, Mobile: +977-9820234879 </p>
          </div>

          {/* Social Media Section */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-4 uppercase">Follow Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://www.facebook.com/p/Herba-Wanders-61565838864007" target="_blank" rel="noopener noreferrer" className="text-white text-sm hover:text-green-500">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/herba_wanders" target="_blank" rel="noopener noreferrer" className="text-white text-sm hover:text-green-500">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@herba_wanders" target="_blank" rel="noopener noreferrer" className="text-white text-sm hover:text-green-500">
                  TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright & Credits Section */}
        <div className="bg-[#1a1a1a] py-4 mt-8 text-center space-y-1">
          <p className="text-sm">&copy; 2024 Herba Wanders. All Rights Reserved.</p>
          <p className="text-sm">
            Website created by{" "}
            <a
              href="https://groundstackservices.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:underline"
            >
              Ground Stack Services
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
