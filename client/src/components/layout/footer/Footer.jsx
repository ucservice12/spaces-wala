import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { Link } from "react-router-dom";
import React from 'react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white px-4 sm:px-6 py-10">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Payment Methods */}
          <div>
            <h3 className="text-sm font-medium text-gray-300 mb-4 tracking-wider uppercase">Payment Methods</h3>
            <div className="flex flex-wrap gap-3">
              {['VISA', 'MasterCard', 'PayPal', 'SOFORT', 'VORKASSE', 'Apple Pay'].map((method, idx) => (
                <div key={idx} className="bg-white rounded px-3 py-2 flex items-center justify-center min-w-[60px] h-10">
                  <span className={`font-bold text-sm ${
                    method === 'SOFORT' ? 'text-green-600 text-xs'
                    : method === 'VORKASSE' ? 'text-gray-800 text-xs'
                    : 'text-blue-600'
                  }`}>
                    {method}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Logo Section (replacing U + TECHNOLOGY) */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <Link to="/">
              <img
                src="/logo.png"
                alt="logo"
                className="sm:h-24 h-20"
              />
            </Link>
            <div className="text-gray-400 text-sm">
              Unlock a new chapter with the perfect home. <br />
              <span className="text-gray-300 font-semibold">Start Fresh, Live Fully</span>
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Company */}
          <div>
            <h3 className="text-sm font-medium text-gray-300 mb-4 tracking-wider uppercase">Company</h3>
            <ul className="space-y-2">
              {['careers', 'about', 'partners', 'terms', 'privacy-policy'].map((route, idx) => (
                <li key={idx}>
                  <Link
                    to={`/${route}`}
                    className="text-gray-300 hover:text-white underline transition-colors"
                  >
                    {route.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore & Partners */}
          <div>
            <h3 className="text-sm font-medium text-gray-300 mb-4 tracking-wider uppercase">Explore</h3>
            <ul className="space-y-2">
              {[
                { to: '/news', label: 'News' },
                { to: '/home-loans', label: 'Home Loans' },
                { to: '/sitemap', label: 'Sitemap' },
                { to: '/international', label: 'International' }
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-gray-300 hover:text-white underline transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-sm font-medium text-gray-300 mt-8 mb-4 tracking-wider uppercase">Partner Sites</h3>
            <ul className="space-y-2">
              {[
                { to: '/partner/realestate-com-au', label: 'realestate.com.au' },
                { to: '/partner/realter-com', label: 'realter.com' }
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-gray-300 hover:text-white underline transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-sm font-medium text-gray-300 mb-4 tracking-wider uppercase">Social Media</h3>
            <div className="flex gap-4 mb-6">
              <a href="https://www.facebook.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500 text-xl">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-white hover:text-black text-xl">
                <FaXTwitter />
              </a>
              <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-500 text-xl">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 text-xl">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-medium text-gray-300 mb-4 tracking-wider uppercase">Join Our Newsletter</h3>
            <p className="text-gray-300 text-sm mb-4">
              Get the latest property news and market insights directly to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="E-Mail Address"
                className="flex-1 px-4 py-2 bg-transparent border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:border-white"
              />
              <Button
                variant="outline"
                className="px-6 py-2 border-gray-600 text-black hover:bg-white hover:text-gray-800"
              >
                SEND
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          <p className="mb-2">
            SPACESWALA.COM <a href="#" className="underline hover:text-white">India</a>
          </p>
          <p>© 2025 U Technology (India) Pvt. Ltd. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
