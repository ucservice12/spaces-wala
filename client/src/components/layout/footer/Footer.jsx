import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Facebook,
    Twitter,
    Instagram,
    Linkedin,
    Youtube,
    Home,
    Key,
    Building2,
    MapPin,
    Search,
    Mail,
    Star,
    Newspaper,
    Wallet,
    Banknote,
    ArrowUp,
} from 'lucide-react';

// Enhanced 3D Dynamic Background with a subtle monochromatic theme
const Enhanced3DBackground = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth) * 100,
                y: (e.clientY / window.innerHeight) * 100,
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden">
            {/* Base gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-gray-900" />

            {/* Animated radial gradient overlay based on mouse position */}
            <motion.div
                className="absolute inset-0"
                style={{
                    background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)`,
                }}
                animate={{
                    background: [
                        `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)`,
                        `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255, 255, 255, 0.08) 0%, transparent 50%)`,
                        `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(255, 255, 255, 0.05) 0%, transparent 50%)`,
                    ],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Floating geometric shapes */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full opacity-5"
                    style={{
                        width: `${Math.random() * 100 + 50}px`,
                        height: `${Math.random() * 100 + 50}px`,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        background: `linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.15))`,
                    }}
                    animate={{
                        y: [-20, 20, -20],
                        x: [-10, 10, -10],
                        rotate: [0, 360],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: Math.random() * 10 + 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: Math.random() * 2,
                    }}
                />
            ))}

            {/* Grid pattern overlay */}
            <div
                className="absolute inset-0 opacity-5"
                style={{
                    backgroundImage: `
                        linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '50px 50px',
                }}
            />
        </div>
    );
};

// 3D Card component for sections with a dark theme
const Card3D = ({ children, className = "" }) => (
    <motion.div
        className={`relative bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-2xl ${className}`}
        style={{
            background: 'linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
        }}
        // Toned down hover effect
        whileHover={{
            scale: 1.01,
            transition: { duration: 0.2 }
        }}
        initial={{ rotateX: 0, rotateY: 0 }}
    >
        {children}
    </motion.div>
);

const Footer = () => {
    const [activeTab, setActiveTab] = useState('REAL ESTATE');
    const [email, setEmail] = useState('');

    const menuTabs = [
        { name: 'REAL ESTATE', icon: Home },
        { name: 'RENTALS', icon: Key },
        { name: 'PROJECTS', icon: Building2 },
        { name: 'CITY DATA', icon: MapPin },
        { name: 'POPULAR SEARCHES', icon: Search },
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
            { label: 'Convert square meter to square feet', to: '/tools/convert/sqm-to-sqft' },
            { label: 'Convert square feet to square meter', to: '/tools/convert/sqft-to-sqm' },
            { label: 'Mumbai pin code', to: '/pin-code/mumbai' },
            { label: 'Bengaluru pin code', to: '/pin-code/bengaluru' },
            { label: 'List of all residential cities', to: '/residential-cities' },
            { label: 'Explore localities by city', to: '/explore/localities' },
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
        { icon: Facebook, href: 'https://facebook.com', color: '#3b5998' }, // Facebook blue
        { icon: Twitter, href: 'https://twitter.com', color: '#00acee' }, // Twitter blue
        { icon: Instagram, href: 'https://instagram.com', color: '#C13584' }, // Instagram purple
        { icon: Linkedin, href: 'https://linkedin.com', color: '#0e76a8' }, // LinkedIn blue
        { icon: Youtube, href: 'https://youtube.com', color: '#c4302b' }, // YouTube red
    ];

    const trustBadges = [
        { name: 'Financial Times', icon: Newspaper },
        { name: 'Forbes India', icon: Wallet },
        { name: 'The Economic Times', icon: Banknote },
    ];

    const handleSubmitNewsletter = (e) => {
        e.preventDefault();
        console.log('Newsletter signup with email:', email);
        setEmail('');
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative overflow-hidden text-gray-300 px-4 md:px-16 py-16 min-h-screen">
            <Enhanced3DBackground />
            <div className="relative z-20 max-w-7xl mx-auto">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-4">
                        Find Your Dream Property
                    </h2>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Discover the perfect home with our comprehensive SpacesWala platform
                    </p>
                </motion.div>

                {/* Menu Tabs Section */}
                <Card3D className="mb-12">
                    <div className="flex flex-wrap justify-center gap-x-6 sm:gap-x-10 md:gap-x-16 lg:gap-x-20 gap-y-4 pb-6 mb-8">
                        {menuTabs.map((tab, index) => (
                            <motion.button
                                key={tab.name}
                                onClick={() => setActiveTab(tab.name)}
                                className={`relative flex items-center gap-2 pb-2 text-sm font-medium transition-all cursor-pointer ${activeTab === tab.name
                                    ? 'text-white drop-shadow-md'
                                    : 'text-gray-500 hover:text-white '
                                    }`}
                                whileHover={{
                                    scale: activeTab === tab.name ? 1.05 : 1,
                                    rotateY: 0,
                                }}
                                whileTap={{ scale: 0.98 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <motion.div
                                    animate={activeTab === tab.name ? { rotate: 360 } : { rotate: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <tab.icon size={18} className="transition-colors" />
                                </motion.div>
                                {tab.name}
                                {activeTab === tab.name && (
                                    <motion.span
                                        layoutId="footer-tab-indicator"
                                        className="absolute bottom-0 left-0 right-0 h-1 bg-white rounded-full"
                                        initial={{ opacity: 0, scaleX: 0 }}
                                        animate={{ opacity: 1, scaleX: 1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                )}
                            </motion.button>
                        ))}
                    </div>
                    {/* Dynamic Links Section */}
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-4 gap-y-3 text-sm min-h-[200px]"
                    >
                        {tabContents[activeTab]?.map((item, index) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                                whileHover={{
                                    color: '#fff',
                                    x: 3,
                                    transition: { duration: 0.2 }
                                }}
                                className="cursor-pointer hover:bg-white/5 p-2 rounded transition-all"
                            >
                                <Link to={item.to} className="block text-gray-400">
                                    {item.label}
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </Card3D>
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                    {/* Newsletter Section */}
                    <Card3D className="lg:col-span-2">
                        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                            Join Our Newsletter
                        </h3>
                        <p className="text-gray-400 mb-6">Get the latest property news and market insights directly to your inbox.</p>
                        <form onSubmit={handleSubmitNewsletter} className="flex flex-col sm:flex-row gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="flex-grow bg-white/10 text-white border border-white/20 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent backdrop-blur-sm"
                            />
                            <motion.button
                                type="submit"
                                className="bg-white text-gray-900 font-medium w-12 h-12 rounded-lg hover:bg-gray-200 transition-all flex items-center justify-center text-sm md:text-base" // Updated classes
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Mail size={20} /> {/* Increased icon size for better visibility */}
                            </motion.button>
                        </form>
                        {/* Trust Section */}
                        <div className="mt-8">
                            <h4 className="text-lg font-bold mb-4 text-white">Trusted by Our Customers</h4>
                            <div className="flex items-center space-x-2 mb-4 text-yellow-400">
                                {[...Array(5)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <Star size={20} fill="currentColor" strokeWidth={i < 4.8 ? 0 : 1} />
                                    </motion.div>
                                ))}
                                <span className="text-gray-400 font-medium ml-2">4.8 / 5.0</span>
                            </div>
                            <div className="flex flex-wrap items-center gap-6 mt-4">
                                {trustBadges.map((badge, index) => {
                                    const Icon = badge.icon;
                                    return (
                                        <motion.div
                                            key={badge.name}
                                            className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors cursor-pointer"
                                            whileHover={{ scale: 1.05 }}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.2 }}
                                        >
                                            <Icon size={24} />
                                            <span className="text-sm font-medium">{badge.name}</span>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </Card3D>
                    {/* Company Links */}
                    <Card3D>
                        <h4 className="text-lg font-bold mb-4 text-white">Company</h4>
                        <ul className="space-y-3">
                            {companyLinks.map((link, index) => (
                                <motion.li
                                    key={link.label}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ x: 3, color: '#fff' }}
                                >
                                    <Link to={link.to} className="text-gray-400 hover:text-white transition-colors">
                                        {link.label}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </Card3D>
                    {/* Partner Sites */}
                    <Card3D>
                        <h4 className="text-lg font-bold mb-4 text-white">Partner Sites</h4>
                        <ul className="space-y-3">
                            {partnerSites.map((site, index) => (
                                <motion.li
                                    key={site.label}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ x: 3, color: '#fff' }}
                                >
                                    <a href={site.href} className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                                        {site.label}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </Card3D>
                    {/* Explore Links */}
                    <Card3D>
                        <h4 className="text-lg font-bold mb-4 text-white">Explore</h4>
                        <ul className="space-y-3">
                            {exploreLinks.map((link, index) => (
                                <motion.li
                                    key={link.label}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ x: 3, color: '#fff' }}
                                >
                                    <Link to={link.to} className="text-gray-400 hover:text-white transition-colors">
                                        {link.label}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </Card3D>
                </div>
                {/* Social Media & Copyright */}
                <Card3D>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex items-center gap-4">
                            <div className="flex gap-4">
                                {socialLinks.map((social, index) => {
                                    const Icon = social.icon;
                                    return (
                                        <motion.a
                                            key={social.href}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:text-white transition-all backdrop-blur-sm"
                                            whileHover={{
                                                scale: 1.1,
                                                rotateY: 0,
                                                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                            }}
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: index * 0.1 }}
                                        >
                                            <Icon size={18} />
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </div>

                        <div className="text-center md:text-right">
                            <p className="text-gray-500 text-sm">
                                © 2025 Utech india pvt ltd. All rights reserved.
                            </p>
                        </div>
                        {/* Scroll to top button */}
                        <motion.button
                            onClick={scrollToTop}
                            className="w-12 h-12 rounded-full bg-white text-gray-900 flex items-center justify-center hover:bg-gray-200 transition-all"
                            whileHover={{ scale: 1.05, rotate: 0 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <ArrowUp size={20} />
                        </motion.button>
                    </div>
                </Card3D>
            </div>
        </footer>
    );
};

export default Footer;