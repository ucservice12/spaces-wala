"use client";

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, CircleUserRound } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TypographyP, TypographySmall } from '@/custom/Typography';
import { useSelector } from 'react-redux';
import {
    Home,
    Building2,
    MapPin,
    Bed,
    DollarSign,
    Newspaper,
    BookOpen,
    Tag
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const menuItems = [
    {
        label: 'Buy',
        links: [
            { to: '/search?type=buy&category=apartment', label: 'Apartments', icon: Building2 },
            { to: '/search?type=buy&category=house', label: 'Houses', icon: Home },
            { to: '/search?type=buy&category=plot', label: 'Plots', icon: MapPin },
        ],
    },
    {
        label: 'Rent',
        links: [
            { to: '/search?type=rent&category=apartment', label: 'Apartments', icon: Building2 },
            { to: '/search?type=rent&category=house', label: 'Houses', icon: Home },
            { to: '/search?type=rent&category=pg', label: 'PG/Co-living', icon: Bed },
        ],
    },
    {
        label: 'Sell',
        links: [
            { to: '/seller/post-property', label: 'Post Property', icon: Tag },
            { to: '/sell/pricing', label: 'Pricing', icon: DollarSign },
            { to: '/sell/services', label: 'Services', icon: Bed },
        ],
    },
    {
        label: 'Resources',
        links: [
            { to: '/resources/home-loans', label: 'Home Loans', icon: DollarSign },
            { to: '/resources/property-news', label: 'Property News', icon: Newspaper },
            { to: '/resources/guides', label: "Buyer's Guide", icon: BookOpen },
        ],
    },
];

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const [hoveredMenu, setHoveredMenu] = useState(null);
    const location = useLocation();
    const isHomePage = location.pathname === '/';


    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const { user } = useSelector((state) => state.auth);
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
        setActiveMobileDropdown(null);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        setActiveMobileDropdown(null);
    };

    const toggleDropdown = (label) => {
        setActiveMobileDropdown((prev) => (prev === label ? null : label));
    };

    return (
        <>
            {/* Black backdrop when mobile menu is open */}
            {isMobileMenuOpen && (
                <div
                    onClick={closeMobileMenu}
                    className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
                />
            )}

            <div
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || !isHomePage
                    ? 'bg-white/90 backdrop-blur-md shadow-md'
                    : 'bg-transparent sm:py-4'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-center">
                        {/* Logo */}
                        <Link to="/" className="relative top-0" onClick={closeMobileMenu}>
                            <img src="/logo.png" alt="logo" className="sm:h-24 h-20" />
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-6">
                            {menuItems.map((menu, index) => (
                                <div
                                    key={menu?.label}
                                    className="relative"
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                >
                                    <button
                                        className={`flex items-center ${isScrolled || !isHomePage ? 'text-black' : 'text-white'
                                            } font-medium group`}
                                    >
                                        <TypographySmall className="flex items-center font-semibold tracking-wide gap-1 mb-0 transition-colors duration-200 group-hover:text-white">
                                            {menu?.label}
                                            <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${hoveredMenu === menu.label ? 'rotate-180' : ''}`} />
                                        </TypographySmall>
                                    </button>


                                </div>
                            ))}
                        </nav>

                        {/* Desktop Auth */}
                        <div className="hidden md:flex items-center space-x-4">
                            {user ?
                                <Link to="/dashboard/profile">
                                    <Button size="sm" className="flex items-center gap-1">
                                        User
                                        <CircleUserRound className='text-white' strokeWidth={1} />
                                    </Button>
                                </Link>
                                :
                                <Link to="/login">
                                    <Button size="sm">Login</Button>
                                </Link>
                            }
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button className="md:hidden bg-primary rounded-md p-1 text-white z-50" onClick={toggleMobileMenu}>
                            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                <AnimatePresence>
                    {hoveredIndex !== null &&
                        (menuItems[hoveredIndex].links) && (

                            <motion.div
                                key="dropdown"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.2, ease: 'easeOut' }}
                                onMouseEnter={() => setHoveredIndex(hoveredIndex)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className="hidden md:block fixed top-[90px] left-0 w-full z-40 bg-white border-t shadow-lg"

                            >
                                <div className="flex flex-wrap justify-evenly max-w-[1440px] mx-auto px-8 py-8 gap-8">
                                    {menuItems[hoveredIndex].links.map((link) => (
                                        <Link
                                            key={link.to}
                                            to={link.to}
                                            className="flex items-center gap-3 py-2 px-2 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md transition-all duration-200"
                                        >
                                            <link.icon className="w-5 h-5 text-gray-500" />
                                            <TypographyP className="mb-0">{link.label}</TypographyP>
                                        </Link>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                </AnimatePresence>
                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-20 left-0 right-0 z-50 md:hidden bg-white shadow-lg p-4"
                    >
                        <div className="flex flex-col space-y-4">
                            {menuItems.map((menu) => (
                                <div key={menu.label}>
                                    <button
                                        onClick={() => toggleDropdown(menu.label)}
                                        className="flex justify-between w-full py-2 font-medium text-gray-800 items-center"
                                    >
                                        <TypographyP className="mb-0">{menu.label}</TypographyP>
                                        <ChevronDown
                                            className={`h-4 w-4 transition-transform duration-300 ${activeMobileDropdown === menu.label ? 'rotate-180' : ''
                                                }`}
                                        />
                                    </button>
                                    <AnimatePresence>
                                        {activeMobileDropdown === menu.label && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="pl-4 mt-1 space-y-2 border-l-2 border-primary/20">
                                                    {menu.links.map((link) => (
                                                        <Link
                                                            key={link.to}
                                                            to={link.to}
                                                            onClick={closeMobileMenu}
                                                            className="block py-1.5 hover:bg-gray-50 rounded px-2 transition-colors"
                                                        >
                                                            <TypographyP className="mb-0 text-gray-700 flex items-center gap-2">
                                                                <link.icon className="w-4 h-4 text-gray-500" />
                                                                {link.label}
                                                            </TypographyP>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}

                            {/* Mobile Auth Buttons */}
                            <div className="flex flex-col space-y-2 pt-2">
                                {user ? (
                                    <Link to="/dashboard/profile" onClick={closeMobileMenu}>
                                        <Button size="sm" className="w-full flex justify-between items-center">
                                            User <CircleUserRound className="ml-2 text-white" strokeWidth={2} />
                                        </Button>
                                    </Link>
                                ) : (
                                    <Link to="/login" onClick={closeMobileMenu}>
                                        <Button size="sm" className="w-full">Login</Button>
                                    </Link>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}
            </div>
        </>
    );
};

export default Navbar;