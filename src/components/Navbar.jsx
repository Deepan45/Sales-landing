import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from "../assets/logo.png"; // page component


function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md backdrop-blur-md bg-white/98 animate-fade-in-down border-b border-primary-100">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src={logo} 
              alt="Infinity Uniquers" 
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold text-gray-900 hidden sm:block">
              Infinity Sales
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                isActive('/') ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-colors ${
                isActive('/about') ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              About
            </Link>
            <Link
              to="/blog"
              className={`text-sm font-medium transition-colors ${
                isActive('/blog') ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors ${
                isActive('/contact') ? 'text-primary-600' : 'text-gray-700 hover:text-primary-600'
              }`}
            >
              Contact
            </Link>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-2 rounded-lg font-medium hover:from-primary-700 hover:to-accent-600 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Book Demo
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary-600 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className={`text-sm font-medium transition-colors ${
                  isActive('/') ? 'text-primary-600' : 'text-gray-700'
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className={`text-sm font-medium transition-colors ${
                  isActive('/about') ? 'text-primary-600' : 'text-gray-700'
                }`}
              >
                About
              </Link>
              <Link
                to="/blog"
                onClick={() => setIsOpen(false)}
                className={`text-sm font-medium transition-colors ${
                  isActive('/blog') ? 'text-primary-600' : 'text-gray-700'
                }`}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={`text-sm font-medium transition-colors ${
                  isActive('/contact') ? 'text-primary-600' : 'text-gray-700'
                }`}
              >
                Contact
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-2 rounded-lg font-medium hover:from-primary-700 hover:to-accent-600 transition-all duration-300 text-center"
              >
                Book Demo
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar
