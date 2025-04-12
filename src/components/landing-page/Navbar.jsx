import { useEffect, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { useLocation } from "react-router-dom";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetDescription,
} from "@/components/ui/sheet";
import { Small } from "@/custom/Typography";
import ThemeToggle from "../theme-toggle";

export const navLinks = [
    { name: "Home", path: "#home" },
    { name: "Property", path: "#property" },
    { name: "News", path: "#our-news" },
    { name: "Partner", path: "#our-partner" },
    { name: "Commitment", path: "#commitment" },
    { name: "Benefits", path: "#our-benefits" },
    { name: "Contact", path: "#contact" },
];

export default function Navbar() {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [scrollY, setScrollY] = useState(0);
    const location = useLocation();

    const handleNavigation = (path) => {
        const element = document.querySelector(path);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 100,
                behavior: "smooth",
            });
        }
    };

    // Scroll effect
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setScrollY(currentScrollY);

            if (currentScrollY < 50) {
                setShowNavbar(true); // Always show at top
            } else if (currentScrollY > lastScrollY && currentScrollY > 600) {
                setShowNavbar(false); // scrolling down
            } else if (currentScrollY < lastScrollY) {
                setShowNavbar(true); // scrolling up
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <div
            className={`fixed left-0 z-50 w-full transition-all duration-300
        ${showNavbar ? "translate-y-0" : "-translate-y-full"}
        ${scrollY > 10 ? "top-0" : "sm:top-8 top-18"}
        bg-white/10 backdrop-blur-xl shadow-md`}
        >
            <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${scrollY > 10 ? "h-18" : "h-22 sm:h-28"} flex items-center justify-between`}>
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img src="/logo.png" alt="Logo" className={`${scrollY > 10 ? "h-22 w-22" : "sm:h-38 h-28 w-28 sm:w-38"} mt-8 object-contain`} />
                </div>

                {/* Desktop Nav */}
                <div className="hidden sm:flex items-center gap-6">
                    {navLinks.map((item, index) => (
                        <div
                            key={item.name}
                            className="relative flex flex-col items-center cursor-pointer group"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            onClick={() => handleNavigation(item.path)}
                        >
                            <Small className={`${lastScrollY > 700 ? "text-black" : "text-white"}`}>
                                {item?.name}
                            </Small>

                            {/* Hover effect */}
                            < div
                                className={`absolute -top-2 w-12 h-12 -z-10 rounded-full transition-all ${hoveredIndex === index
                                    ? "scale-110 opacity-50"
                                    : "opacity-0 scale-75"
                                    }`}
                                style={{ backgroundColor: "#E8505B" }}
                            />
                        </div>
                    ))}
                    <ThemeToggle lastScrollY={lastScrollY} />
                </div>

                {/* Mobile Nav */}
                <div className="sm:hidden flex items-center gap-4">
                    <ThemeToggle />
                    <Sheet>
                        <SheetTrigger asChild>
                            <button className="cursor-pointer sm:border sm:border-gray-50 sm:bg-transparent bg-blue-400 rounded-sm flex justify-center items-center p-2 text-white">
                                <HiMenuAlt3 size={16} />
                            </button>
                        </SheetTrigger>
                        <SheetContent className="w-[70%] sm:w-[300px]">
                            <SheetHeader>
                                <SheetTitle className="flex items-center gap-2">
                                    <img src="/logo.png" alt="Logo" className="w-10 h-10" />
                                </SheetTitle>
                                <SheetDescription />
                            </SheetHeader>
                            <div className="flex flex-col gap-6 mt-6 ml-6">
                                {navLinks.map((item) => (
                                    <SheetClose key={item.name} asChild>
                                        <button
                                            onClick={() => handleNavigation(item.path)}
                                            className={`text-left text-lg font-medium transition-all ${location.pathname === item.path
                                                ? "underline underline-offset-4 text-[#E8505B]"
                                                : ""
                                                }`}
                                        >
                                            <Small>{item.name}</Small>
                                        </button>
                                    </SheetClose>
                                ))}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </div >
    );
}
