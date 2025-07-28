import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
    TypographyH4,
    TypographyMuted,
    TypographySmall,
} from "@/custom/Typography";
import { Button } from "@/components/ui/button";
import { menuItems } from "@/data/Navlinks";
import { ChevronDown } from "lucide-react";
import { FadeInWhenVisible } from "@/custom/FadeInWhenVisible";
import { motion, AnimatePresence } from "framer-motion";

const chunkArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
};

const NavbarDesktop = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const isHomePage = location.pathname === "/";

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const getTextColorClass = (index) => {
        if (hoveredIndex === index) return "border-b-2 border-primary text-primary";
        if (isHomePage && !scrolled) return "text-white";
        return "text-black";
    };

    return (
        <motion.div
            className={`w-full fixed top-0 z-40 h-26 shadow transition-colors duration-300 ${
                isHomePage && !scrolled ? "bg-transparent" : "bg-white"
            }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center h-26 backdrop-blur-md transition-all duration-300">
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

                {/* Nav Menu */}
                <nav className="flex items-center gap-4 sm:gap-8 relative">
                    {menuItems.map((item, index) => (
                        <motion.div
                            key={index}
                            className="group relative"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            whileHover={{ scale: 1.05 }}
                        >
                            <TypographySmall
                                className={`cursor-pointer pb-1 uppercase text-md font-bold flex items-center gap-1 transition-all duration-200 ${getTextColorClass(index)}`}
                            >
                                {item.label}
                                <motion.span
                                    animate={{
                                        rotate: hoveredIndex === index ? 180 : 0,
                                        color: hoveredIndex === index ? "hsl(var(--primary))" : "currentColor",
                                    }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <ChevronDown className="h-4 w-4" />
                                </motion.span>
                            </TypographySmall>
                        </motion.div>
                    ))}
                </nav>

                {/* Right Panel */}
                <Link to="/login" className="flex items-center gap-2 sm:gap-3">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button size="xs" className="py-1 px-2">
                            <span className="hidden sm:inline">Login</span>
                        </Button>
                    </motion.div>
                </Link>
            </div>

            {/* Dropdown Panel */}
            <AnimatePresence>
                {hoveredIndex !== null && menuItems[hoveredIndex].links && (
                    <motion.div
                        className="absolute left-0 top-26 w-full bg-card/95 backdrop-blur-md shadow-lg z-30 border-t"
                        onMouseEnter={() => setHoveredIndex(hoveredIndex)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 py-6">
                            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                {chunkArray(
                                    menuItems[hoveredIndex].links,
                                    Math.ceil(menuItems[hoveredIndex].links.length / 4)
                                ).map((col, colIdx) => (
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
    );
};

export default NavbarDesktop;
