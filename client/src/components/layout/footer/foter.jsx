import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Footer = () => {
  const [activeTab, setActiveTab] = useState('REAL ESTATE');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const menuTabs = [
    'REAL ESTATE',
    'RENTALS',
    'PROJECTS',
    'CITY DATA',
    'POPULAR SEARCHES'
  ];

  const tabContents = {
    'REAL ESTATE': [
      { label: 'Find Properties for Sale', to: '/buy' },
      { label: 'Flats in Mumbai', to: '/buy/mumbai' },
      { label: 'Flats in Delhi', to: '/buy/delhi' },
      { label: 'Flats in Thane', to: '/buy/thane' },
      { label: 'Properties in India', to: '/buy/india' },
      { label: 'Flats in Bengaluru', to: '/buy/bengaluru' },
      { label: 'Flats in Gurgaon', to: '/buy/gurgaon' },
      { label: 'Flats in New Mumbai', to: '/buy/new-mumbai' },
      { label: 'Agricultural Lands in India', to: '/search?type=agricultural' },
      { label: 'Flats in Noida', to: '/buy/noida' },
      { label: 'Flats in Faridabad', to: '/buy/faridabad' },
      { label: 'Flats in Pune', to: '/buy/pune' },
      { label: 'Flats in Kolkata', to: '/buy/kolkata' },
      { label: 'Flats in Ghaziabad', to: '/buy/ghaziabad' },
      { label: 'Flats in Chennai', to: '/buy/chennai' },
      { label: 'Flats in Ahmedabad', to: '/buy/ahmedabad' },
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
      { label: 'Flats in New Mumbai', to: '/buy/new-mumbai' },
    ]
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

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const linkVariants = {
    hover: {
      scale: 1.05,
      color: '#3b82f6', // blue-500
      transition: { duration: 0.2 }
    }
  };

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-900 text-gray-200"
    >
      {/* Menu Bar Section */}
      <div className="border-b border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-start">
            {menuTabs.map((tab) => (
              <motion.button
                key={tab}
                whileHover={{ color: '#3b82f6' }}
                className={`px-4 py-3 font-medium text-sm uppercase ${activeTab === tab ? 'text-blue-400 border-b-2 border-blue-400' : 'text-gray-400 hover:text-blue-300'}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab Content Section */}
      <div className="bg-gray-800 py-8">
        <div className="container mx-auto px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={tabVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6"
            >
              {tabContents[activeTab]?.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover="hover"
                  variants={linkVariants}
                >
                  <Link
                    to={item.to}
                    className="text-gray-300 hover:text-blue-400 text-sm transition-colors duration-200 block"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Links */}
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-white uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                >
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Partner Sites */}
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-white uppercase tracking-wider">Partner Sites</h3>
            <ul className="space-y-3">
              {partnerSites.map((site, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                >
                  <a
                    href={site.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200"
                  >
                    {site.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Explore Links */}
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold mb-6 text-white uppercase tracking-wider">Explore</h3>
            <ul className="space-y-3">
              {exploreLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                >
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Download App */}
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="lg:col-span-2"
          >
            <h3 className="text-lg font-semibold mb-6 text-white uppercase tracking-wider">Download App</h3>
            <div className="space-y-4">
              <motion.div whileHover={{ scale: 1.02 }}>
                <a href="#" className="block">
                  <svg className="w-36 h-12" viewBox="0 0 120 40" role="img" aria-label="App Store">
                    <rect width="120" height="40" rx="5" fill="#1e293b"/>
                    <text x="60" y="25" fontFamily="Arial" fontSize="12" fill="#3b82f6" textAnchor="middle">App Store</text>
                  </svg>
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }}>
                <a href="#" className="block">
                  <svg className="w-36 h-12" viewBox="0 0 120 40" role="img" aria-label="Google Play">
                    <rect width="120" height="40" rx="5" fill="#1e293b"/>
                    <text x="60" y="25" fontFamily="Arial" fontSize="12" fill="#3b82f6" textAnchor="middle">Google Play</text>
                  </svg>
                </a>
              </motion.div>
              
              <div className="pt-4">
                <h4 className="text-sm font-semibold mb-3 text-gray-300 uppercase tracking-wider">Connect With Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map(({ icon: Icon, href }, index) => (
                    <motion.a
                      key={index}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                      whileHover={{ 
                        scale: 1.2,
                        color: '#3b82f6'
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Icon size={24} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Copyright Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="border-t border-gray-700 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Locom Solutions Pvt. Ltd. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <motion.a 
                href="#" 
                className="text-gray-500 hover:text-blue-400 text-sm"
                whileHover={{ scale: 1.05 }}
              >
                Terms of Use
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-500 hover:text-blue-400 text-sm"
                whileHover={{ scale: 1.05 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a 
                href="#" 
                className="text-gray-500 hover:text-blue-400 text-sm"
                whileHover={{ scale: 1.05 }}
              >
                Sitemap
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;