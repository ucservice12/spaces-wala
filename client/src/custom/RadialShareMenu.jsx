import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
    FaInstagram,
    FaWhatsapp,
    FaTelegram,
    FaLinkedin,
    FaShareAlt,
    FaFacebook,
} from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
import { tv } from "tailwind-variants";
import { twMerge } from "tailwind-merge";

const button = tv({
    base: "z-10 w-9 h-9 bg-white/30 backdrop-blur-md text-white border border-white/20 rounded-full shadow-2xl flex items-center justify-center hover:bg-white/20 transition-colors duration-300",
});

const positionMap = {
    "bottom-right": "bottom-6 right-1",
    "bottom-left": "bottom-6 left-4",
    "top-right": "top-6 right-4",
    "top-left": "top-6 left-4",
    "center": "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
};

const RadialShareMenu = ({ visible = true, position = "bottom-right", className = "", loacation }) => {
    const [open, setOpen] = useState(false);
    const radius = 70;
    const menuRef = useRef(null);
    // const location = useLocation();
    console.log(loacation)

    // Normalize route path
    // const path = location.pathname.replace(/^\/|\/$/g, "") || "home";
    // const pageId = path.toLowerCase();

    // Backend meta route for social previews
    const backendShareUrl = `https://api.spaceswala.com/api/share/${loacation}`;
    const shareText = encodeURIComponent("Check this out on Spaceswala!");
    const encodedUrl = encodeURIComponent(backendShareUrl);

    const socialIcons = [

        {
            label: "Facebook",
            icon: <FaFacebook />,
            link: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
            color: "bg-blue-700",
        },
        {
            label: "WhatsApp",
            icon: <FaWhatsapp />,
            link: `https://wa.me/?text=${shareText}%20${encodedUrl}`,
            color: "bg-green-500",
        },

        {
            label: "LinkedIn",
            icon: <FaLinkedin />,
            link: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
            color: "bg-blue-600",
        },

    ];

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Don't render anything if not visible
    if (!visible) return null;

    const getIconPosition = (index) => {
        let x = 0;
        let y = 0;
        switch (index) {
            case 0: // Facebook (Top-left)
                // Angle is 135 degrees (3π/4 radians)
                x = radius * Math.cos(3 * Math.PI / 4);
                y = radius * Math.sin(3 * Math.PI / 4);
                break;
            case 1: // WhatsApp (Center-left)
                // Angle is 180 degrees (π radians)
                x = radius * Math.cos(Math.PI);
                y = radius * Math.sin(Math.PI);
                break;
            case 2: // LinkedIn (Bottom-left)
                // Angle is 225 degrees (5π/4 radians)
                x = radius * Math.cos(5 * Math.PI / 4);
                y = radius * Math.sin(5 * Math.PI / 4);
                break;
            default:
                break;
        }
        return { x, y };
    };

    return (
        <div
            ref={menuRef}
            // Adjust container size for the new left-side layout
            className={`absolute z-10 w-[100px] h-[180px] flex items-center justify-center ${positionMap[position] || positionMap["bottom-right"]
                }`}
        >
            {socialIcons.map((item, index) => {
                const { x, y } = getIconPosition(index);
                return (
                    <motion.a
                        key={item.label}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ x: 0, y: 0, opacity: 0 }}
                        animate={{
                            x: open ? x : 0,
                            y: open ? y : 0,
                            opacity: open ? 1 : 0,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 20,
                            delay: index * 0.04,
                        }}
                        className={`absolute text-white w-11 h-11 flex items-center justify-center rounded-full shadow-xl hover:scale-110 transition-transform duration-200 ${item.color}`}
                        title={`Share on ${item.label}`}
                        aria-label={`Share on ${item.label}`}
                    >
                        {item.icon}
                    </motion.a>
                );
            })}



            <button
                onClick={() => setOpen((prev) => !prev)}
                className={twMerge(button(), className)}
                aria-label="Toggle Share Menu"
            >
                <FaShareAlt size={22} />
            </button>
        </div>
    );
};

export default RadialShareMenu;
