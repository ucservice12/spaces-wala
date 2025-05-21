import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, User } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHomePage 
          ? 'bg-white shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="text-2xl font-bold">
              <span className="text-blue-600">SpacesWala</span>
              <span className="text-gray-700">.com</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-blue-600 font-medium">
                Buy <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md p-4 w-48 mt-1">
                <Link to="/search?type=buy&category=apartment" className="block py-2 hover:text-blue-600">Apartments</Link>
                <Link to="/search?type=buy&category=house" className="block py-2 hover:text-blue-600">Houses</Link>
                <Link to="/search?type=buy&category=plot" className="block py-2 hover:text-blue-600">Plots</Link>
              </div>
            </div>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-blue-600 font-medium">
                Rent <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md p-4 w-48 mt-1">
                <Link to="/search?type=rent&category=apartment" className="block py-2 hover:text-blue-600">Apartments</Link>
                <Link to="/search?type=rent&category=house" className="block py-2 hover:text-blue-600">Houses</Link>
                <Link to="/search?type=rent&category=pg" className="block py-2 hover:text-blue-600">PG/Co-living</Link>
              </div>
            </div>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-blue-600 font-medium">
                Sell <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md p-4 w-48 mt-1">
                <Link to="/sell/property" className="block py-2 hover:text-blue-600">Post Property</Link>
                <Link to="/sell/pricing" className="block py-2 hover:text-blue-600">Pricing</Link>
                <Link to="/sell/services" className="block py-2 hover:text-blue-600">Services</Link>
              </div>
            </div>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-blue-600 font-medium">
                Resources <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md p-4 w-48 mt-1">
                <Link to="/resources/home-loans" className="block py-2 hover:text-blue-600">Home Loans</Link>
                <Link to="/resources/property-news" className="block py-2 hover:text-blue-600">Property News</Link>
                <Link to="/resources/guides" className="block py-2 hover:text-blue-600">Buyer's Guide</Link>
              </div>
            </div>
          </nav>

          {/* Login/Register Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login" className="text-gray-700 hover:text-blue-600 font-medium px-3 py-2">Login</Link>
            <Link to="/signup" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-300 font-medium">
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg p-4">
          <div className="flex flex-col space-y-4">
            <div className="border-b pb-2">
              <button className="flex justify-between items-center w-full py-2">
                <span className="font-medium">Buy</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="pl-4 mt-1 space-y-2">
                <Link to="/search?type=buy&category=apartment" className="block py-1 text-gray-600">Apartments</Link>
                <Link to="/search?type=buy&category=house" className="block py-1 text-gray-600">Houses</Link>
                <Link to="/search?type=buy&category=plot" className="block py-1 text-gray-600">Plots</Link>
              </div>
            </div>
            <div className="border-b pb-2">
              <button className="flex justify-between items-center w-full py-2">
                <span className="font-medium">Rent</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="pl-4 mt-1 space-y-2">
                <Link to="/search?type=rent&category=apartment" className="block py-1 text-gray-600">Apartments</Link>
                <Link to="/search?type=rent&category=house" className="block py-1 text-gray-600">Houses</Link>
                <Link to="/search?type=rent&category=pg" className="block py-1 text-gray-600">PG/Co-living</Link>
              </div>
            </div>
            <div className="border-b pb-2">
              <button className="flex justify-between items-center w-full py-2">
                <span className="font-medium">Sell</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="pl-4 mt-1 space-y-2">
                <Link to="/sell/property" className="block py-1 text-gray-600">Post Property</Link>
                <Link to="/sell/pricing" className="block py-1 text-gray-600">Pricing</Link>
                <Link to="/sell/services" className="block py-1 text-gray-600">Services</Link>
              </div>
            </div>
            <div className="pb-4">
              <button className="flex justify-between items-center w-full py-2">
                <span className="font-medium">Resources</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="pl-4 mt-1 space-y-2">
                <Link to="/resources/home-loans" className="block py-1 text-gray-600">Home Loans</Link>
                <Link to="/resources/property-news" className="block py-1 text-gray-600">Property News</Link>
                <Link to="/resources/guides" className="block py-1 text-gray-600">Buyer's Guide</Link>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <Link to="/login" className="text-center py-2 border border-gray-300 rounded-md">
                Login
              </Link>
              <Link to="/signup" className="text-center bg-blue-600 text-white py-2 rounded-md">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;