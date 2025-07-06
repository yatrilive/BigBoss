import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black bg-opacity-95 fixed w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-white">
              <span className="text-amber-500">Big</span> Boss Comandos
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className="text-white hover:text-amber-500 px-3 py-2 text-sm font-medium transition duration-300">
                Home
              </Link>
              <Link to="/services" className="text-white hover:text-amber-500 px-3 py-2 text-sm font-medium transition duration-300">
                Services
              </Link>
              <Link to="/career" className="text-white hover:text-amber-500 px-3 py-2 text-sm font-medium transition duration-300">
                Career
              </Link>
              <Link to="/gallery" className="text-white hover:text-amber-500 px-3 py-2 text-sm font-medium transition duration-300">
                Gallery
              </Link>
              <Link to="/about" className="text-white hover:text-amber-500 px-3 py-2 text-sm font-medium transition duration-300">
                About
              </Link>
              <Link to="/contact" className="text-white hover:text-amber-500 px-3 py-2 text-sm font-medium transition duration-300">
                Contact
              </Link>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/contact">
              <button className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-2 px-6 rounded transition duration-300">
                Get Quote
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-amber-500 focus:outline-none focus:text-amber-500"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black bg-opacity-95">
              <Link to="/" className="text-white hover:text-amber-500 block px-3 py-2 text-base font-medium">
                Home
              </Link>
              <Link to="/services" className="text-white hover:text-amber-500 block px-3 py-2 text-base font-medium">
                Services
              </Link>
              <Link to="/career" className="text-white hover:text-amber-500 block px-3 py-2 text-base font-medium">
                Career
              </Link>
              <Link to="/gallery" className="text-white hover:text-amber-500 block px-3 py-2 text-base font-medium">
                Gallery
              </Link>
              <Link to="/about" className="text-white hover:text-amber-500 block px-3 py-2 text-base font-medium">
                About
              </Link>
              <Link to="/contact" className="text-white hover:text-amber-500 block px-3 py-2 text-base font-medium">
                Contact
              </Link>
              <Link to="/contact">
                <button className="w-full mt-4 bg-amber-500 hover:bg-amber-600 text-black font-bold py-2 px-6 rounded transition duration-300">
                  Get Quote
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 