import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
    TypographyH4,
    TypographyMuted,
    TypographySmall,
} from "@/custom/Typography";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import profileImage from "@/assets/navbar/profileimage.webp";
import { menuItems } from "@/data/Navlinks";
import {
    ChevronDown, Menu, Heart, FileText,
} from "lucide-react";
import { FadeInWhenVisible } from "@/custom/FadeInWhenVisible";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import UserSidebar from "@/custom/UserSidebar";
import { ModeToggle } from '@/components/mode-toggle';

const NavbarDesktop = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [scrolled, setScrolled] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isPackagesDropdownOpen, setIsPackagesDropdownOpen] = useState(false);
    const ref = useRef();
    const location = useLocation();
    const { user } = useSelector((state) => state.auth);
    const isHomePage = location.pathname === "/";

    const packagesDropdownRef = useRef(null);

    const chunkArray = (arr, size) => {
        const result = [];
        for (let i = 0; i < arr.length; i += size) {
            result.push(arr.slice(i, i + size));
        }
        return result;
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (packagesDropdownRef.current && !packagesDropdownRef.current.contains(event.target)) {
                setIsPackagesDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const togglePackagesDropdown = () => {
        setIsPackagesDropdownOpen(!isPackagesDropdownOpen);
    };

    const packagesDropdownVariants = {
        hidden: { opacity: 0, y: -10, transition: { duration: 0.2 } },
        visible: { opacity: 1, y: 0, transition: { duration: 0.2 } },
    };

    return (
        <>
            <motion.div
                ref={ref}
                className={`w-full fixed top-0 z-40 h-26 transition-colors duration-300 ${isHomePage && !scrolled ? "bg-transparent" : "bg-white/10 backdrop-blur-lg shadow-md"}`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
                <div className="px-4 sm:px-6 flex justify-between mx-5 items-center h-26">
                    {/* Logo */}
                    <Link to="/">
                        <motion.img
                            src="/logo.png"
                            alt="logo"
                            className="sm:h-24 h-20"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        />
                    </Link>

                    {/* Right Nav Items */}
                    <div className="flex items-center gap-4 text-white text-sm">
                        <Link to="/payrent">
                            <Button
                                variant="ghost"
                                className="bg-white/10 hover:bg-white/40 px-5 rounded-xl backdrop-blur-lg transition text-white"
                            >
                                Pay Rent
                            </Button>
                        </Link>

                        <div className="flex items-center gap-1 cursor-pointer hover:text-white/80">
                            <Heart className="w-4 h-4" />
                            <Link to="/dashboard/saved"><span className="text-sm">Saved</span></Link>
                        </div>

                        <div className="relative" ref={packagesDropdownRef}>
                            <div
                                onClick={togglePackagesDropdown}
                                className="flex items-center gap-1 cursor-pointer hover:text-white/80"
                            >
                                <FileText className="w-4 h-4" />
                                <span className="text-sm">Packages</span>
                                <ChevronDown className={`w-4 h-4 transition-transform ${isPackagesDropdownOpen ? 'rotate-180' : ''}`} />
                            </div>
                            <AnimatePresence>
                                {isPackagesDropdownOpen && (
                                    <motion.div
                                        className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                        initial="hidden"
                                        animate="visible"
                                        exit="hidden"
                                        variants={packagesDropdownVariants}
                                    >
                                        <div className="py-1">
                                            <Link
                                                to="/packages/Developers"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                onClick={() => setIsPackagesDropdownOpen(false)}
                                            >
                                                For Developers
                                            </Link>
                                            <Link
                                                to="/packages/brokers"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                onClick={() => setIsPackagesDropdownOpen(false)}
                                            >
                                                For Brokers
                                            </Link>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <div className="flex items-center gap-1.5 cursor-pointer hover:text-white/80">
                            <span className="text-sm">Post Property</span>
                            <Badge className="bg-pink-500 text-white text-[10px] px-2">FREE</Badge>
                        </div>

                        {/* 👇 ADD DARK/LIGHT TOGGLE BUTTON HERE */}
{/*                         <ModeToggle /> */}
                        {/* Sidebar Avatar */}
                        <div
                            onClick={toggleSidebar}
                            className="p-1 px-1 cursor-pointer rounded-l-2xl rounded-r-2xl gap-1 bg-white flex justify-center items-center"
                        >
                            <Menu strokeWidth={1.5} className="w-5 h-5 text-black" />
                            <img
                                src={profileImage}
                                alt="Profile"
                                className="w-5 h-5 rounded-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Dropdown Panel - (existing code for other dropdowns, if any) */}
                <AnimatePresence>
                    {hoveredIndex !== null && menuItems[hoveredIndex].links && (
                        <motion.div
                            className="absolute left-0 top-100 w-full bg-card/95 backdrop-blur-md shadow-lg z-30 border-t"
                            onMouseEnter={() => setHoveredIndex(hoveredIndex)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                            <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 py-6">
                                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
                                    {chunkArray(menuItems[hoveredIndex].links, Math.ceil(menuItems[hoveredIndex].links.length / 4)).map((col, colIdx) => (
                                        <div key={colIdx} className="flex flex-col gap-2">
                                            {col.map((option, idx) => (
                                                <FadeInWhenVisible key={idx} delay={idx * 0.04}>
                                                    <motion.div whileHover={{ y: -5 }}>
                                                        <Link
                                                            to={option.to}
                                                            onClick={() => setHoveredIndex(null)}
                                                            className="grid gap-4 rounded-md hover:bg-accent/50 p-3 transition group"
                                                        >
                                                            <div className="flex flex-col gap-2">
                                                                <div className="flex items-center gap-3">
                                                                    <motion.div
                                                                        className="p-2 bg-primary/10 rounded-full"
                                                                        whileHover={{ rotate: 10 }}
                                                                    >
                                                                        <option.icon className="w-5 h-5 text-primary" />
                                                                    </motion.div>
                                                                    <TypographyH4 className="group-hover:text-primary transition-colors">
                                                                        {option.label}
                                                                    </TypographyH4>
                                                                </div>
                                                                <TypographyMuted className="line-clamp-2 text-sm">
                                                                    {option?.description}
                                                                </TypographyMuted>
                                                            </div>
                                                            <motion.div
                                                                className="overflow-hidden rounded-md"
                                                                whileHover={{ scale: 1.02 }}
                                                                transition={{ type: "spring", stiffness: 400 }}
                                                            >
                                                                <img
                                                                    src={option.image}
                                                                    alt={option.label}
                                                                    className="w-full h-32 object-cover"
                                                                />
                                                            </motion.div>
                                                        </Link>
                                                    </motion.div>
                                                </FadeInWhenVisible>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            <UserSidebar
                isSidebarOpen={isSidebarOpen}
                toggleSidebar={toggleSidebar}
            />
        </>
    );
};

export default NavbarDesktop;