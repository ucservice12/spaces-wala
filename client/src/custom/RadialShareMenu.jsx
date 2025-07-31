import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
    FaInstagram,
    FaTwitter,
    FaWhatsapp,
    FaShareAlt,
    FaTelegram,
    FaLinkedin,
} from "react-icons/fa";

const socialIcons = [
    {
        label: "Instagram",
        icon: <FaInstagram />,
        link: "https://instagram.com",
        color: "bg-pink-500",
    },
    // {
    //     label: "Twitter",
    //     icon: <FaTwitter />,
    //     link: "https://twitter.com",
    //     color: "bg-blue-400",
    // },
    {
        label: "WhatsApp",
        icon: <FaWhatsapp />,
        link: "https://wa.me/your-number",
        color: "bg-green-500",
    },
    {
        label: "Telegram",
        icon: <FaTelegram />,
        link: "https://telegram.me/your-id",
        color: "bg-blue-500",
    },
    {
        label: "LinkedIn",
        icon: <FaLinkedin />,
        link: "https://linkedin.com",
        color: "bg-blue-600",
    },
];

const RadialShareMenu = () => {
    const [open, setOpen] = useState(false);
    const radius = 80;
    const menuRef = useRef(null);

    // Close on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div
            className="fixed bottom-6 right-0 z-50 w-[120px] h-[180px] flex items-center justify-center"
            ref={menuRef}
        >
            {socialIcons.map((item, index) => {
                const angle = -Math.PI / 2 - (index / (socialIcons.length - 1)) * Math.PI;
                const x = radius * Math.cos(angle);
                const y = radius * Math.sin(angle);

                return (
                    <motion.a
                        key={index}
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
                        className={`absolute text-white w-12 h-12 flex items-center justify-center rounded-full shadow-xl hover:scale-110 transition-transform duration-200 ${item.color}`}
                        title={item.label}
                    >
                        {item.icon}
                    </motion.a>
                );
            })}

            <button
                onClick={() => setOpen((prev) => !prev)}
                className="z-10 w-12 h-12 md:bg-blue-400 backdrop-blur-2xl bg-white/30 text-white border border-white/20 rounded-full shadow-2xl flex items-center justify-center md:hover:bg-white/20 transition-colors duration-300"
                aria-label="Toggle Share Menu"
            >
                <FaShareAlt size={22} />
            </button>
        </div>
    );
};

export default RadialShareMenu;
