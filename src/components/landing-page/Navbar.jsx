import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { useNavigate, useLocation } from "react-router-dom";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetDescription
} from "@/components/ui/sheet";
import { Small } from "@/custom/Typography";
import ThemeToggle from '../theme-toggle'

export const navLinks = [
    { name: "Home", path: "/" },
    { name: "Property", path: "/property" },
    { name: "News", path: "/our-news" },
    { name: "Partner", path: "/our-partner" },
    { name: "Commitment", path: "/commitment" },
    { name: "Benefits", path: "/our-benefits" },
    { name: "Contact", path: "/contact" },
];

export default function Navbar() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div className="w-full h-20 sm:mt-11 sm:h-16 z-30 flex justify-center items-center p-4">
            <div className='flex justify-between items-center w-full sm:max-w-7xl mx-auto sm:px-4'>
                {/* Logo */}
                <div>
                    <img src="/logo.png" className="sm:h-45 sm:w-45 w-22 h-22 mt-4" alt="logo" />
                </div>
                {/* Mobile Menu */}
                <div className="flex items-center gap-6 sm:hidden">
                    <ThemeToggle />
                    <Sheet>
                        <SheetTrigger asChild>
                            <HiMenuAlt3 className="cursor-pointer" color="white" size={22} />
                        </SheetTrigger>
                        <SheetContent className="w-[70%]">
                            <SheetHeader>
                                <SheetTitle>
                                    <div className='flex gap-2 items-center'>
                                        <img src="/logo.png" className="w-22 h-22" alt="" />
                                    </div>
                                </SheetTitle>
                                <SheetDescription></SheetDescription>
                            </SheetHeader>

                            {/* Mobile Nav Links */}
                            <div className="flex flex-col gap-6 items-start ml-12">
                                {navLinks.map(item => (
                                    <SheetClose key={item.name} asChild>
                                        <button
                                            onClick={() => handleNavigation(item.path)}
                                            className={`cursor-pointer font-medium transition-all ${location.pathname === item.path ? "underline underline-offset-8" : ""
                                                }`}
                                            style={{ color: location.pathname === item.path ? "#E8505B" : "inherit" }}
                                        >
                                            <Small>{item.name}</Small>
                                        </button>
                                    </SheetClose>
                                ))}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>

                {/* Desktop Nav Links */}
                <div className="hidden sm:flex gap-8 items-center">
                    {navLinks.map((item, index) => (
                        <div
                            key={item.name}
                            className="relative flex flex-col items-center cursor-pointer group"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            onClick={() => handleNavigation(item.path)}
                        >
                            <button
                                className={`transition-all cursor-pointer ${location.pathname === item.path ? "underline underline-offset-8 font-medium" : ""
                                    }`}
                                style={{ color: location.pathname === item.path ? "orange" : "white" }}
                            >
                                {item.name}
                            </button>

                            {/* Hover Effect */}
                            <div
                                className={`absolute -top-2 w-12 h-12 -z-50 rounded-full transition-all ${hoveredIndex === index ? "bg-gray-400 scale-110 opacity-50" : "opacity-0 scale-75"
                                    }`}
                                style={{ backgroundColor: "#E8505B" }}
                            ></div>
                        </div>
                    ))}
                    <ThemeToggle />
                </div>
            </div>
        </div>
    );
}