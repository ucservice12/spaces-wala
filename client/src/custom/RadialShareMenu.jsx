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
import { FaXTwitter } from "react-icons/fa6";

const RadialShareMenu = () => {
    const [open, setOpen] = useState(false);
    const radius = 80;
    const menuRef = useRef(null);
    const location = useLocation();

    const path = location.pathname.replace(/^\/|\/$/g, "") || "home";
    const pageId = path.toLowerCase();
    const backendShareUrl = `https://api.spaceswala.com/api/share/${pageId}`;

    const shareText = encodeURIComponent("Check this out on Spaceswala!");
    const encodedUrl = encodeURIComponent(backendShareUrl);

    const socialIcons = [
        {
            label: "Instagram",
            icon: <FaInstagram />,
            link: "https://www.instagram.com/spaceswala",
            color: "bg-pink-500",
        },
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
            label: "Telegram",
            icon: <FaTelegram />,
            link: `https://t.me/share/url?url=${encodedUrl}&text=${shareText}`,
            color: "bg-blue-500",
        },
        {
            label: "LinkedIn",
            icon: <FaLinkedin />,
            link: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
            color: "bg-blue-600",
        },
        // {
        //     label: "Twitter (X)",
        //     icon: <FaXTwitter />,
        //     link: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${shareText}`,
        //     color: "bg-black",
        // },
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

    return (
        <div
            ref={menuRef}
            className="fixed bottom-6 right-4 z-50 w-[120px] h-[180px] flex items-center justify-center"
        >
            {socialIcons.map((item, index) => {
                const angle = -Math.PI / 2 - (index / (socialIcons.length - 1)) * Math.PI;
                const x = radius * Math.cos(angle);
                const y = radius * Math.sin(angle);

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
                className="z-10 w-10 h-10 bg-white/30 backdrop-blur-md text-white border border-white/20 rounded-full shadow-2xl flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                aria-label="Toggle Share Menu"
            >
                <FaShareAlt size={22} />
            </button>
        </div>
    );
};

export default RadialShareMenu;
