import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { motion } from 'framer-motion'; // Import motion from framer-motion

const Footer = () => {
  const [activeTab, setActiveTab] = useState('REAL ESTATE');
  const footerRef = useRef(null);

  useEffect(() => {
    if (footerRef.current) {
      // You can add logic here if needed, for example, to scroll to top
      // or perform animations related to tab change.
    }
  }, [activeTab]);

  const menuTabs = [
    'REAL ESTATE',
    'RENTALS',
    'PROJECTS',
    'CITY DATA',
    'POPULAR SEARCHES'
  ];

  const tabContents = {
    'REAL ESTATE': [
      { label: 'Flats in Mumbai', to: '/buy/mumbai' },
      { label: 'Flats in Bengaluru', to: '/buy/bengaluru' },
      { label: 'Flats in Hyderabad', to: '/buy/hyderabad' },
      { label: 'Flats in Pune', to: '/buy/pune' },
      { label: 'Flats in Chennai', to: '/buy/chennai' },
      { label: 'Flats in Delhi', to: '/buy/delhi' },
      { label: 'Flats in Gurgaon', to: '/buy/gurgaon' },
      { label: 'Flats in Noida', to: '/buy/noida' },
      { label: 'Flats in Kolkata', to: '/buy/kolkata' },
      { label: 'Flats in Ahmedabad', to: '/buy/ahmedabad' },
      { label: 'Flats in Thane', to: '/buy/thane' },
      { label: 'Flats in Navi Mumbai', to: '/buy/navi-mumbai' },
      { label: 'Flats in Faridabad', to: '/buy/faridabad' },
      { label: 'Flats in Ghaziabad', to: '/buy/ghaziabad' },
      { label: 'Flats in Coimbatore', to: '/buy/coimbatore' },
      { label: 'Flats in India', to: '/buy/india' },
      { label: 'Properties in India', to: '/buy/india' },
      { label: 'Agricultural Lands in India', to: '/search?type=agricultural' },
      { label: 'Plots in India', to: '/search?type=plot' },
      { label: 'Find Properties for Sale', to: '/buy' },
    ],

    'RENTALS': [
      { label: 'Find Properties for Rent', to: '/rent' },
      { label: 'Plots for rent in Mumbai', to: '/rent/mumbai' },
      { label: 'Plots for rent in Delhi', to: '/rent/delhi' },
      { label: 'Plots for rent in Thane', to: '/rent/thane' },
      { label: 'Plots for rent in Bengaluru', to: '/rent/bengaluru' },
      { label: 'Plots for rent in Gurgaon', to: '/rent/gurgaon' },
      { label: 'Plots for rent in New Mumbai', to: '/rent/new-mumbai' },
      { label: 'Plots for rent in Hyderabad', to: '/rent/hyderabad' },
      { label: 'Plots for rent in Noida', to: '/rent/noida' },
      { label: 'Plots for rent in Faridabad', to: '/rent/faridabad' },
      { label: 'Plots for rent in Pune', to: '/rent/pune' },
      { label: 'Plots for rent in Kolkata', to: '/rent/kolkata' },
      { label: 'Plots for rent in Ghaziabad', to: '/rent/ghaziabad' },
      { label: 'Plots for rent in Chennai', to: '/rent/chennai' },
      { label: 'Plots for rent in Ahmedabad', to: '/rent/ahmedabad' },
      { label: 'Plots for rent in Coimbatore', to: '/rent/coimbatore' },
    ],
    'PROJECTS': [
      { label: 'Find Residential Projects', to: '/projects' },
      { label: 'Projects in Mumbai', to: '/projects/mumbai' },
      { label: 'Projects in Delhi', to: '/projects/delhi' },
      { label: 'Projects in Thane', to: '/projects/thane' },
      { label: 'Projects in Bengaluru', to: '/projects/bengaluru' },
      { label: 'Projects in Gurgaon', to: '/projects/gurgaon' },
      { label: 'Projects in New Mumbai', to: '/projects/new-mumbai' },
      { label: 'Projects in Hyderabad', to: '/projects/hyderabad' },
      { label: 'Projects in Noida', to: '/projects/noida' },
      { label: 'Projects in Faridabad', to: '/projects/faridabad' },
      { label: 'Projects in Pune', to: '/projects/pune' },
      { label: 'Projects in Kolkata', to: '/projects/kolkata' },
      { label: 'Projects in Ghaziabad', to: '/projects/ghaziabad' },
      { label: 'Projects in Chennai', to: '/projects/chennai' },
      { label: 'Projects in Ahmedabad', to: '/projects/ahmedabad' },
      { label: 'Projects in Coimbatore', to: '/projects/coimbatore' },
    ],
    'CITY DATA': [
      { label: 'Insights about Popular Cities', to: '/city-data' },
      { label: 'Research Mumbai', to: '/city-data/mumbai' },
      { label: 'Research Delhi', to: '/city-data/delhi' },
      { label: 'Research Thane', to: '/city-data/thane' },
      { label: 'Research Bengaluru', to: '/city-data/bengaluru' },
      { label: 'Research Gurgaon', to: '/city-data/gurgaon' },
      { label: 'Research New Mumbai', to: '/city-data/new-mumbai' },
      { label: 'Research Hyderabad', to: '/city-data/hyderabad' },
      { label: 'Research Noida', to: '/city-data/noida' },
      { label: 'Research Faridabad', to: '/city-data/faridabad' },
      { label: 'Research Pune', to: '/city-data/pune' },
      { label: 'Research Kolkata', to: '/city-data/kolkata' },
      { label: 'Research Ghaziabad', to: '/city-data/ghaziabad' },
      { label: 'Research Chennai', to: '/city-data/chennai' },
      { label: 'Research Ahmedabad', to: '/city-data/ahmedabad' },
      { label: 'Research Coimbatore', to: '/city-data/coimbatore' },
    ],

    'POPULAR SEARCHES': [
      // Flats
      { label: 'Flats in India', to: '/buy/india' },
      { label: 'Properties in India', to: '/buy/india' },
      { label: 'Flats in Mumbai', to: '/buy/mumbai' },
      { label: 'Flats in Delhi', to: '/buy/delhi' },
      { label: 'Flats in Bengaluru', to: '/buy/bengaluru' },
      { label: 'Flats in Hyderabad', to: '/buy/hyderabad' },
      { label: 'Flats in Pune', to: '/buy/pune' },
      { label: 'Flats in Chennai', to: '/buy/chennai' },
      { label: 'Flats in Kolkata', to: '/buy/kolkata' },
      { label: 'Flats in Ahmedabad', to: '/buy/ahmedabad' },
      { label: 'Flats in Noida', to: '/buy/noida' },
      { label: 'Flats in Gurgaon', to: '/buy/gurgaon' },
      { label: 'Flats in Ghaziabad', to: '/buy/ghaziabad' },
      { label: 'Flats in Faridabad', to: '/buy/faridabad' },
      { label: 'Flats in Thane', to: '/buy/thane' },
      { label: 'Flats in Navi Mumbai', to: '/buy/navi-mumbai' },

      // Conversion Tools
      { label: 'Convert square meter to square feet', to: '/tools/convert/sqm-to-sqft' },
      { label: 'Convert square feet to square meter', to: '/tools/convert/sqft-to-sqm' },
      { label: 'Convert acre to square feet', to: '/tools/convert/acre-to-sqft' },
      { label: 'Convert square feet to acre', to: '/tools/convert/sqft-to-acre' },
      { label: 'Convert hectare to acre feet', to: '/tools/convert/hectare-to-acrefeet' },
      { label: 'Convert hectare to square meter', to: '/tools/convert/hectare-to-sqm' },
      { label: 'Convert acre to hectare', to: '/tools/convert/acre-to-hectare' },

      // Pin Codes
      { label: 'Mumbai pin code', to: '/pin-code/mumbai' },
      { label: 'Bengaluru pin code', to: '/pin-code/bengaluru' },
      { label: 'Hyderabad pin code', to: '/pin-code/hyderabad' },
      { label: 'Pune pin code', to: '/pin-code/pune' },
      { label: 'Chennai pin code', to: '/pin-code/chennai' },
      { label: 'Delhi pin code', to: '/pin-code/delhi' },
      { label: 'Gurgaon pin code', to: '/pin-code/gurgaon' },
      { label: 'Noida pin code', to: '/pin-code/noida' },
      { label: 'Kolkata pin code', to: '/pin-code/kolkata' },
      { label: 'Ahmedabad pin code', to: '/pin-code/ahmedabad' },
      { label: 'Thane pin code', to: '/pin-code/thane' },
      { label: 'Navi Mumbai pin code', to: '/pin-code/navi-mumbai' },
      { label: 'Faridabad pin code', to: '/pin-code/faridabad' },
      { label: 'Ghaziabad pin code', to: '/pin-code/ghaziabad' },

      // Discovery & Listings
      { label: 'List of all residential cities', to: '/residential-cities' },
      { label: 'List of all cities for rentals', to: '/rental-cities' },
      { label: 'Explore localities by city', to: '/explore/localities' },
      { label: 'Explore rental localities by city', to: '/explore/rentals' },
      { label: 'Find projects by city', to: '/projects/cities' },
      { label: 'Find rental societies by city', to: '/rentals/societies' },
    ],
  };

  const companyLinks = [
    { label: 'Careers', to: '/careers' },
    { label: 'About Us', to: '/about' },
    { label: 'For Partners', to: '/partners' },
    { label: 'Terms', to: '/terms' },
    { label: 'Privacy Policy', to: '/privacy' },
  ];

  const partnerSites = [
    { label: 'Propiger', href: 'https://propiger.com' },
    { label: 'realestate.com.au', href: 'https://realestate.com.au' },
    { label: 'realter.com', href: 'https://realter.com' },
    { label: '99.co', href: 'https://99.co' },
    { label: 'calmadedictionary.com', href: 'https://calmadedictionary.com' },
  ];

  const exploreLinks = [
    { label: 'News', to: '/news' },
    { label: 'Home Loans', to: '/loans' },
    { label: 'Sitemap', to: '/sitemap' },
    { label: 'International', to: '/international' },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://facebook.com' },
    { icon: Twitter, href: 'https://twitter.com' },
    { icon: Instagram, href: 'https://instagram.com' },
    { icon: Linkedin, href: 'https://linkedin.com' },
    { icon: Youtube, href: 'https://youtube.com' },
  ];
return (
    <footer ref={footerRef} className="bg-black text-gray-300 px-4 md:px-16 py-10 mt-20">
      <div className="flex flex-wrap justify-center gap-x-14 gap-y-4 border-b border-gray-700 pb-6 mb-8">
        {menuTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 text-sm font-medium transition-colors ${activeTab === tab ? 'text-white border-b-2 border-white' : 'text-gray-400 hover:text-white'
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-4 gap-y-2 text-xs min-h-[150px] mb-12">
        {tabContents[activeTab]?.map((item) => (
          <Link key={item.label} to={item.to} className="hover:text-white py-1">
            {item.label}
          </Link>
        ))}
      </div>
       <div
          className="border-t border-gray-700 pt-8 mt-8" // Removed duplicate border-t div and adjusted mt
        ></div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Partner Sites */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white uppercase tracking-wider">Partner Sites</h3>
            <ul className="space-y-3">
              {partnerSites.map((site, index) => (
                <li key={index}>
                  <a
                    href={site.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200"
                  >
                    {site.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Explore Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white uppercase tracking-wider">Explore</h3>
            <ul className="space-y-3">
              {exploreLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect With Us and Logo */}
          <div className="lg:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
            {/* Logo - Adjusted placement */}
            <Link to="/" className="mb-6"> {/* Added margin-bottom for spacing */}
              <img
                src="/logo.png"
                alt="logo"
                className="sm:h-24 h-20"
              />
            </Link>

            {/* Connect With Us */}
            <div className="w-full"> {/* Ensures it takes full width within its grid column */}
              <h3 className="text-lg font-semibold mb-6 text-white uppercase tracking-wider">Connect With Us</h3>
              <div className="flex justify-center md:justify-start space-x-5"> {/* Center on small screens, left on md+ */}
                {socialLinks.map(({ icon: Icon, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    <Icon size={24} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div
          className="border-t border-gray-700 pt-8 mt-8" // Removed duplicate border-t div and adjusted mt
        >
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <div className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Locom Solutions Pvt. Ltd. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center md:justify-end space-x-4 sm:space-x-6"> {/* Adjusted spacing and wrapping */}
              <a
                href="#"
                className="text-gray-500 hover:text-blue-400 text-sm py-1"
              >
                Terms of Use
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-blue-400 text-sm py-1"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-blue-400 text-sm py-1"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



