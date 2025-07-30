// import React, { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import {
//     TypographyH4,
//     TypographyMuted,
//     TypographySmall,
// } from "@/custom/Typography";
// import { Button } from "@/components/ui/button";
// import { menuItems } from "@/data/Navlinks";
// import { ChevronDown, CircleUserRound } from "lucide-react";
// import { FadeInWhenVisible } from "@/custom/FadeInWhenVisible";
// import { motion, AnimatePresence } from "framer-motion";
// import { useSelector } from "react-redux";

// const chunkArray = (arr, size) => {
//     const result = [];
//     for (let i = 0; i < arr.length; i += size) {
//         result.push(arr.slice(i, i + size));
//     }
//     return result;
// };

// const NavbarDesktop = () => {
//     const [hoveredIndex, setHoveredIndex] = useState(null);
//     const [scrolled, setScrolled] = useState(false);
//     const location = useLocation();
//     const { user } = useSelector((state) => state.auth)
//     const isHomePage = location.pathname === "/";

//     useEffect(() => {
//         const handleScroll = () => {
//             setScrolled(window.scrollY > 20);
//         };
//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     const getTextColorClass = (index) => {
//         if (hoveredIndex === index) return "border-b-2 border-primary text-primary";
//         if (isHomePage && !scrolled) return "text-white";
//         return "text-black";
//     };

//     return (
//         <motion.div
//             className={`w-full fixed top-0 z-40 h-26  transition-colors duration-300 ${isHomePage && !scrolled ? "bg-transparent" : "bg-white rounded-b-2xl"
//                 }`}
//             initial={{ y: -100 }}
//             animate={{ y: 0 }}
//             transition={{ type: "spring", stiffness: 200, damping: 20 }}
//         >
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center h-26 backdrop-blur-md transition-all duration-300">
//                 {/* Logo */}
//                 <Link to="/">
//                     <motion.img
//                         src="/logo.png"
//                         alt="logo"
//                         className="sm:h-24 h-20"
//                         whileHover={{ scale: 1.05 }}
//                         whileTap={{ scale: 0.95 }}
//                     />
//                 </Link>

//                 {/* Nav Menu */}
//                 <nav className="flex items-center  gap-4 sm:gap-8 relative " >
//                     {menuItems.map((item, index) => (
//                         <motion.div
//                             key={index}
//                             className="group relative"
//                             onMouseEnter={() => setHoveredIndex(index)}
//                             onMouseLeave={() => setHoveredIndex(null)}
//                             whileHover={{ scale: 1.05 }}
//                         >
//                             <TypographySmall
//                                 className={`cursor-pointer pb-1  uppercase text-md-50 font-bold flex items-center gap-2 transition-all duration-200 ${getTextColorClass(index)}`}
//                             >
//                                 {item.label}
//                                 <motion.span
//                                     animate={{
//                                         rotate: hoveredIndex === index ? 180 : 0,
//                                         color: hoveredIndex === index ? "hsl(var(--primary))" : "currentColor",
//                                     }}
//                                     transition={{ duration: 0.2 }}
//                                 >
//                                     <ChevronDown className="h-5 w-5" />
//                                 </motion.span>
//                             </TypographySmall>
//                         </motion.div>
//                     ))}
//                 </nav>
//                 {user ? (
//                     <Link to="/dashboard/profile">
//                         <Button className="w-full flex items-center gap-2">
//                             <CircleUserRound className="h-4 w-4" />
//                             Profile
//                         </Button>
//                     </Link>
//                 ) : (
//                     <Link to="/login" className="flex items-center gap-2 sm:gap-3">
//                         <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                             <Button size="xs" className="py-1 px-2">
//                                 <span className="hidden sm:inline">Login</span>
//                             </Button>
//                         </motion.div>
//                     </Link>
//                 )}

//             </div>

//             {/* Dropdown Panel */}
//             <AnimatePresence>
//                 {hoveredIndex !== null && menuItems[hoveredIndex].links && (
//                     <motion.div
//                         className="absolute left-0 top-26 w-full bg-card/95 backdrop-blur-md shadow-lg z-30 border-t"
//                         onMouseEnter={() => setHoveredIndex(hoveredIndex)}
//                         onMouseLeave={() => setHoveredIndex(null)}
//                         initial={{ opacity: 0, y: -20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: -10 }}
//                         transition={{ duration: 0.3, ease: "easeOut" }}
//                     >
//                         <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 py-6">
//                             <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center ">
//                                 {chunkArray(
//                                     menuItems[hoveredIndex].links,
//                                     Math.ceil(menuItems[hoveredIndex].links.length / 4)
//                                 ).map((col, colIdx) => (
//                                     <div key={colIdx} className="flex flex-col gap-2">
//                                         {col.map((option, idx) => (
//                                             <FadeInWhenVisible key={idx} delay={idx * 0.04}>
//                                                 <motion.div whileHover={{ y: -5 }}>
//                                                     <Link
//                                                         to={option.to}
//                                                         onClick={() => setHoveredIndex(null)}
//                                                         className="grid gap-4 rounded-md hover:bg-accent/50 p-3 transition group"
//                                                     >
//                                                         <div className="flex flex-col gap-2">
//                                                             <div className="flex items-center gap-3">
//                                                                 <motion.div
//                                                                     className="p-2 bg-primary/10 rounded-full"
//                                                                     whileHover={{ rotate: 10 }}
//                                                                 >
//                                                                     <option.icon className="w-5 h-5 text-primary" />
//                                                                 </motion.div>
//                                                                 <TypographyH4 className="group-hover:text-primary transition-colors">
//                                                                     {option.label}
//                                                                 </TypographyH4>
//                                                             </div>
//                                                             <TypographyMuted className="line-clamp-2 text-sm">
//                                                                 {option?.description}
//                                                             </TypographyMuted>
//                                                         </div>

//                                                         <motion.div
//                                                             className="overflow-hidden rounded-md"
//                                                             whileHover={{ scale: 1.02 }}
//                                                             transition={{ type: "spring", stiffness: 400 }}
//                                                         >
//                                                             <img
//                                                                 src={option.image}
//                                                                 alt={option.label}
//                                                                 className="w-full h-32 object-cover"
//                                                             />
//                                                         </motion.div>
//                                                     </Link>
//                                                 </motion.div>
//                                             </FadeInWhenVisible>
//                                         ))}
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </motion.div>
//     );
// };

// export default NavbarDesktop;

import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import {
    TypographyH4,
    TypographyMuted,
    TypographySmall,
} from "@/custom/Typography";
import { Button } from "@/components/ui/button";
import { menuItems } from "@/data/Navlinks";
import { ChevronDown, ChevronRight, CircleUserRound, Menu, X, User, CreditCard, Star, Home, Lightbulb, Shield, Search, Bell, HelpCircle, Download } from "lucide-react";
import { FadeInWhenVisible } from "@/custom/FadeInWhenVisible";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useSelector } from "react-redux";

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
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [expandedMenus, setExpandedMenus] = useState({});
    const location = useLocation();
    const { user } = useSelector((state) => state.auth);
    const isHomePage = location.pathname === "/";
    const ref = useRef();
    const { scrollY } = useScroll();
    const borderWidth = useTransform(scrollY, [0, 100], [8, 2]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const toggleMenu = (menuId) => {
        setExpandedMenus(prev => ({
            ...prev,
            [menuId]: !prev[menuId]
        }));
    };

    const getTextColorClass = (index) => {
        if (hoveredIndex === index) return "text-white border-b-2 border-white";
        return "text-white/90 hover:text-white";
    };

    const sidebarMenuItems = [
        {
            id: 'zero-brokerage',
            icon: <Home className="w-5 h-5" />,
            label: 'Zero Brokerage Properties',
            hasSubmenu: false
        },
        {
            id: 'transactions',
            icon: <CreditCard className="w-5 h-5" />,
            label: 'My Transactions',
            hasSubmenu: false
        },
        {
            id: 'reviews',
            icon: <Star className="w-5 h-5" />,
            label: 'My Reviews',
            badge: 'NEW',
            hasSubmenu: false
        },
        {
            id: 'quick-links',
            icon: <Search className="w-5 h-5" />,
            label: 'Quick Links',
            hasSubmenu: true
        },
        {
            id: 'residential',
            icon: <Home className="w-5 h-5" />,
            label: 'Residential Packages',
            hasSubmenu: true
        },
        {
            id: 'housing-edge',
            icon: <Lightbulb className="w-5 h-5" />,
            label: 'Housing Edge',
            hasSubmenu: true
        },
        {
            id: 'services',
            icon: <Shield className="w-5 h-5" />,
            label: 'Services',
            hasSubmenu: true
        },
        {
            id: 'alerts',
            icon: <Bell className="w-5 h-5" />,
            label: 'Unsubscribe Alerts',
            hasSubmenu: false
        },
        {
            id: 'fraud',
            icon: <Shield className="w-5 h-5" />,
            label: 'Report a Fraud',
            hasSubmenu: false
        }
    ];

    return (
        <>
            <motion.div
                ref={ref}
                className={`w-full fixed top-0 z-40 h-20 transition-colors duration-300 bg-gradient-to-r from-purple-700 to-purple-900 shadow-lg`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                style={{
                    borderLeft: `${borderWidth}px solid white`,
                    borderRight: `${borderWidth}px solid white`,
                }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center h-full">
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
                                    className={`cursor-pointer uppercase text-sm font-semibold flex items-center gap-1 transition-all duration-200 ${getTextColorClass(index)}`}
                                >
                                    {item.label}
                                    <motion.span
                                        animate={{
                                            rotate: hoveredIndex === index ? 180 : 0,
                                            color: hoveredIndex === index ? "white" : "currentColor",
                                        }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <ChevronDown className="h-4 w-4" />
                                    </motion.span>
                                </TypographySmall>
                            </motion.div>
                        ))}
                    </nav>

                    {/* Right Side Buttons */}
                    <div className="flex items-center gap-3">
                        <Button variant="ghost" className="text-white/90 hover:text-white hover:bg-purple-600 font-medium">
                            Pay Rent
                        </Button>



                        {user ? (
                            <Link to="/dashboard/profile">
                                <Button className="flex items-center gap-2 bg-white text-purple-800 hover:bg-gray-100 shadow-md">
                                    <CircleUserRound className="h-4 w-4" />
                                    Profile
                                </Button>
                            </Link>
                        ) : (
                            <Link to="/login">
                                <Button className="bg-white text-purple-800 hover:bg-gray-100 shadow-md">
                                    Login
                                </Button>
                            </Link>
                        )}

                        {/* Sidebar Toggle Button */}
                        <Button
                            variant="ghost"
                            size="lg"
                            onClick={toggleSidebar}
                            className="text-white/100 hover:text-white hover:bg-purple-600 p-2 rounded-full"
                        >
                            <Menu className="w-6 h-6" />
                        </Button>

                    </div>
                </div>

                {/* Dropdown Panel */}
                <AnimatePresence>
                    {hoveredIndex !== null && menuItems[hoveredIndex].links && (
                        <motion.div
                            className="absolute left-0 top-20 w-full bg-white backdrop-blur-md shadow-lg z-30 border-t border-gray-200"
                            onMouseEnter={() => setHoveredIndex(hoveredIndex)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                            <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 py-6">
                                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center ">
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
                                                            className="grid gap-4 rounded-md hover:bg-gray-50 p-3 transition group"
                                                        >
                                                            <div className="flex flex-col gap-2">
                                                                <div className="flex items-center gap-3">
                                                                    <motion.div
                                                                        className="p-2 bg-purple-100 rounded-full"
                                                                        whileHover={{ rotate: 10 }}
                                                                    >
                                                                        <option.icon className="w-5 h-5 text-purple-600" />
                                                                    </motion.div>
                                                                    <TypographyH4 className="group-hover:text-purple-600 transition-colors">
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

            {/* Sidebar Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-50"
                    onClick={toggleSidebar}
                />
            )}

            {/* Sidebar */}
            <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                <div className="flex flex-col h-full">
                    {/* Sidebar Header */}
                    <div className="p-4 border-b bg-gradient-to-r from-purple-700 to-purple-900">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                                    <User className="w-6 h-6 text-purple-500" />
                                </div>
                                <div>
                                    <p className="text-white font-medium">Hello 👋</p>
                                    <div className="flex items-center space-x-1 text-sm text-white/90">
                                        <span>✓ Easy Contact with sellers</span>
                                    </div>
                                    <div className="flex items-center space-x-1 text-sm text-white/90">
                                        <span>✓ Personalized experience</span>
                                    </div>
                                </div>
                            </div>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={toggleSidebar}
                                className="text-white hover:bg-white/20 p-1"
                            >
                                <X className="w-5 h-5" />
                            </Button>
                        </div>
                    </div>

                    {/* My Activity Section */}
                    <div className="p-4 border-b">
                        <h3 className="font-semibold text-gray-800 mb-3">My Activity</h3>
                        <div className="grid grid-cols-4 gap-2">
                            <div className="text-center">
                                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-1">
                                    <Home className="w-5 h-5 text-gray-600" />
                                </div>
                                <p className="text-xs text-gray-600">Contacted</p>
                                <p className="text-xs text-gray-600">Properties</p>
                                <p className="text-sm font-semibold">00</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-1">
                                    <Search className="w-5 h-5 text-purple-600" />
                                </div>
                                <p className="text-xs text-gray-600">Seen</p>
                                <p className="text-xs text-gray-600">Properties</p>
                                <p className="text-sm font-semibold text-purple-600">00</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-1">
                                    <Star className="w-5 h-5 text-gray-600" />
                                </div>
                                <p className="text-xs text-gray-600">Saved</p>
                                <p className="text-xs text-gray-600">Properties</p>
                                <p className="text-sm font-semibold">00</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-1">
                                    <Search className="w-5 h-5 text-gray-600" />
                                </div>
                                <p className="text-xs text-gray-600">Recent</p>
                                <p className="text-xs text-gray-600">Searches</p>
                                <p className="text-sm font-semibold">02</p>
                            </div>
                        </div>
                    </div>

                    {/* Menu Items */}
                    <div className="flex-1 overflow-y-auto">
                        <div className="p-4">
                            {sidebarMenuItems.map((item) => (
                                <div key={item.id} className="mb-1">
                                    <div
                                        className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer group"
                                        onClick={() => item.hasSubmenu ? toggleMenu(item.id) : null}
                                    >
                                        <div className="flex items-center space-x-3">
                                            {item.icon}
                                            <span className="text-gray-700 group-hover:text-gray-900">{item.label}</span>
                                            {item.badge && (
                                                <span className="bg-pink-500 text-white text-xs px-2 py-1 rounded-full">
                                                    {item.badge}
                                                </span>
                                            )}
                                        </div>
                                        {item.hasSubmenu && (
                                            expandedMenus[item.id] ?
                                                <ChevronDown className="w-4 h-4 text-gray-400" /> :
                                                <ChevronRight className="w-4 h-4 text-gray-400" />
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Help Center */}
                        <div className="p-4 border-t">
                            <div className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer">
                                <div className="flex items-center space-x-3">
                                    <HelpCircle className="w-5 h-5 text-gray-600" />
                                    <span className="text-gray-700">Visit Help Center</span>
                                </div>
                                <ChevronRight className="w-4 h-4 text-gray-400" />
                            </div>
                        </div>

                        {/* Download App */}
                        <div className="p-4 border-t">
                            <h4 className="font-medium text-gray-800 mb-3">Download Our App</h4>
                            <div className="flex space-x-2 mb-3">
                                <div className="bg-black text-white px-3 py-2 rounded text-xs flex items-center space-x-1">
                                    <Download className="w-4 h-4" />
                                    <span>App Store</span>
                                </div>
                                <div className="bg-black text-white px-3 py-2 rounded text-xs flex items-center space-x-1">
                                    <Download className="w-4 h-4" />
                                    <span>Google Play</span>
                                </div>
                            </div>
                            <div className="w-16 h-16 bg-gray-200 rounded border-2 border-dashed border-gray-300 flex items-center justify-center">
                                <span className="text-xs text-gray-500">QR</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavbarDesktop;
