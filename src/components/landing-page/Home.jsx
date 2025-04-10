"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import { TypographyH1, TypographyP } from "@/custom/Typography";

const slides = [
    {
        image: "/assets/living.avif",
        title: "The Real Dream Living",
        description:
            "Where style, comfort, and functionality come together. We design homes that reflect your personality and support your lifestyle. Each room is crafted with purpose and filled with warmth. From luxurious layouts to subtle details, your dream becomes a reality. Comfort is not just a feature — it's a feeling we create. We blend modern elegance with timeless charm. This is not just living — it's living your dream.",
    },
    {
        image: "/assets/room-1.avif",
        title: "Elegant Interiors",
        description:
            "Crafting interiors that speak sophistication and soul. We believe every space should mirror the people who live in it. Thoughtful colors, textures, and lighting tell a story. Functionality meets finesse in every room. We focus on details that bring life to your home. Let your interiors breathe inspiration and beauty. Step into elegance redefined — just for you.",
    },
    {
        image: "/assets/kitchen.avif",
        title: "Cozy & Functional Kitchens",
        description:
            "Where memories simmer with every recipe. We create kitchens that inspire both comfort and creativity. Sleek surfaces, organized storage, and natural light blend perfectly. It’s not just a place to cook — it’s where hearts gather. We design warmth around meals and moments. Every element is built to support your lifestyle. Make your kitchen the true center of your home.",
    },
    {
        image: "/assets/bedroom.avif",
        title: "Restful Bedrooms",
        description:
            "Your personal sanctuary awaits — calm, quiet, and beautiful. We design bedrooms that nurture peace and deep rest. Soft palettes and gentle lighting create a tranquil vibe. Functionality blends seamlessly with elegance and warmth. From bedding to layout, every detail brings harmony. This is your retreat from the world’s chaos. Sleep, dream, and recharge in restful luxury.",
    },
    {
        image: "/assets/luxury-living.avif",
        title: "Luxury Living Spaces",
        description:
            "Live in elegance, where design meets distinction. We sculpt spaces that inspire awe and comfort. Rich materials and flawless finishes define each moment. Every corner is curated to reflect your highest taste. Luxury is not just seen — it's felt in every breath. Your home becomes a timeless masterpiece. Indulge in a life built with love and vision.",
    },
];

export default function Home() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const currentSlide = slides[index];

    return (
        <div className="relative sm:h-screen h-[60vh] w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide.image}
                        className="absolute inset-0 bg-cover bg-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                        style={{ backgroundImage: `url(${currentSlide.image})` }}
                    />
                </AnimatePresence>
            </div>

            {/* Overlay (optional) */}
            <div className="absolute inset-0 bg-black/40 z-10" />

            {/* Content */}
            <div className="relative z-20">
                <Navbar />

                {/* Hero Centered Text */}
                <div className="sm:h-[calc(100vh-5rem)] flex flex-col justify-center items-center text-center text-white px-4 max-w-4xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide.title}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.8 }}
                        >
                            <TypographyH1>{currentSlide.title}</TypographyH1>
                        </motion.div>
                    </AnimatePresence>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide.description}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.8 }}
                        >
                            <TypographyP className="line-clamp-7 mt-4 text-sm max-w-2xl">
                                {currentSlide.description}
                            </TypographyP>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
