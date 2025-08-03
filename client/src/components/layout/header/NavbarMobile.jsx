import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { TypographyMuted } from "@/custom/Typography";
import { menuItems } from "@/data/Navlinks";
import { IconRenderer } from "@/custom/IconRenderer";
import { FadeInWhenVisible } from "@/custom/FadeInWhenVisible";
import { Link, useLocation } from "react-router-dom";
import userIcon from '@/assets/navbar/usericon.svg';
import UserSidebar from "../../../custom/UserSidebar";


const NavbarMobile = () => {
    const location = useLocation();
    // const [open, setOpen] = useState(false);
    // const [openMenuIndex, setOpenMenuIndex] = useState(0);
    // const [selectedLink, setSelectedLink] = useState("");
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const [searchTerm, setSearchTerm] = useState("");
    const [scrolled, setScrolled] = useState(false);
    const isHomePage = location.pathname === "/";

    useEffect(() => {
        document.body.style.overflow = isSidebarOpen ? 'hidden' : 'auto';
        return () => {
            document.body.style.overflow = 'auto'; // reset on unmount
        };
    }, [isSidebarOpen]);
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    const filterItems = (section) => {
        const term = searchTerm.toLowerCase();
        return (
            section.label.toLowerCase().includes(term) ||
            section.links?.some(
                (item) =>
                    item.label.toLowerCase().includes(term) ||
                    item.description?.toLowerCase().includes(term)
            )
        );
    };

    return (
        <>
            <div className={`md:hidden fixed top-0 left-0 z-50 w-full overflow-hidden ${isHomePage && !scrolled ? "bg-transparent" : "bg-white/10 backdrop-blur-lg shadow-md"}`}>
                {/* Top Bar */}
                <div className="flex items-center justify-between px-4 py-4">
                    <Link to="/">
                        <img src="/logo.png" alt="logo" className="sm:h-24 h-20" />
                    </Link>

                    {/* <div className="flex items-center space-x-6">
                    <Link to="/login" className="flex items-center gap-2 sm:gap-3">
                        <Button size="sm">Login</Button>
                    </Link>
                    <Link to="/rent" className="flex items-center gap-2 sm:gap-3">
                        <Button size="sm">Pay Rent</Button>
                    </Link>
                    <Button size="sm" onClick={() => setOpen((prev) => !prev)}>
                        <IconRenderer name={open ? "X" : "AlignJustify"} size={22} />
                    </Button>
                </div> */}
                    <div className="flex items-center gap-3">
                        {/* Post Property Button with Glassmorphism */}
                        <button className="relative flex items-center bg-white/10 backdrop-blur-md border border-white/30 text-white font-medium px-2 py-1 rounded-full transition shadow-md hover:bg-white/20">
                            Post Property

                            {/* FREE Badge */}
                            <span className="absolute -top-3 right-1 bg-pink-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm shadow-sm">
                                FREE
                            </span>
                        </button>

                        {/* User Icon */}
                        <div className="cursor-pointer" onClick={toggleSidebar}>
                            <img
                                src={userIcon}
                                alt="User"
                                className="w-10  h-10"
                            />
                        </div>
                    </div>

                </div>

                {/* Dropdown Panel */}
                {/* {open && (
                <div className="fixed top-[90px] left-0 w-full h-[calc(100vh-60px)] px-2 bg-card flex flex-col z-40">
                    <div className="flex-1 overflow-y-auto px-3 pt-3 pb-24">
                        <Input
                            className="border-none bg-muted mb-3 text-sm outline-none px-2"
                            placeholder="Search menu"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />

                        {menuItems.filter(filterItems).length === 0 && (
                            <p className="text-muted-foreground px-3 py-2 text-sm">
                                No results found.
                            </p>
                        )}

                        {menuItems.filter(filterItems).map((section, idx) => {
                            const isOpen = openMenuIndex === idx || searchTerm;
                            const sectionMatch = section.label
                                .toLowerCase()
                                .includes(searchTerm.toLowerCase());

                            const filteredLinks = section.links?.filter(
                                (link) =>
                                    link.label
                                        .toLowerCase()
                                        .includes(searchTerm.toLowerCase()) ||
                                    link.description
                                        ?.toLowerCase()
                                        .includes(searchTerm.toLowerCase())
                            );

                            return (
                                <div key={idx} className="mb-2">
                                    <button
                                        onClick={() =>
                                            setOpenMenuIndex((prev) =>
                                                prev === idx ? null : idx
                                            )
                                        }
                                        className={`flex w-full items-center justify-between px-3 py-2 text-sm font-medium rounded-md ${sectionMatch || isOpen
                                            ? "bg-blue-100 text-blue-800"
                                            : "text-muted-foreground"
                                            }`}
                                    >
                                        <span>{section.label}</span>
                                        <IconRenderer
                                            name={isOpen ? "ChevronDown" : "ChevronRight"}
                                            size={16}
                                        />
                                    </button>

                                    {isOpen && filteredLinks?.length > 0 && (
                                        <div className="transition-all duration-300 mt-4 space-y-4">
                                            {filteredLinks.map((item, i) => (
                                                <FadeInWhenVisible key={i}>
                                                    <Link
                                                        to={item.to}
                                                        onClick={() => {
                                                            setOpen(false);
                                                            setSelectedLink(item.to);
                                                        }}
                                                        className={`px-3 py-3 flex flex-col rounded-md gap-2 ${selectedLink === item.to
                                                            ? "bg-blue-100 text-blue-800 font-medium"
                                                            : "text-muted-foreground hover:text-primary hover:bg-accent"
                                                            }`}
                                                    >
                                                        <div className="flex items-center gap-2">
                                                            {item.icon && (
                                                                <item.icon className="h-4 w-4" />
                                                            )}
                                                            <span className="text-sm font-medium">
                                                                {item.label}
                                                            </span>
                                                        </div>

                                                        {item.description && (
                                                            <TypographyMuted className="text-xs pl-6 pr-2 leading-snug">
                                                                {item.description}
                                                            </TypographyMuted>
                                                        )}

                                                        {item.image && (
                                                            <img
                                                                src={item.image}
                                                                alt={item.label}
                                                                className="w-full h-32 object-cover rounded-md"
                                                            />
                                                        )}
                                                    </Link>
                                                </FadeInWhenVisible>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            )} */}
            </div>
            <UserSidebar
                isSidebarOpen={isSidebarOpen}
                toggleSidebar={toggleSidebar}

            />
        </>
    );
};

export default NavbarMobile;
