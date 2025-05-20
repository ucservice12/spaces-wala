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

const variants = {
    enter: (direction) => ({
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
    }),
    center: {
        x: 0,
        opacity: 1,
    },
    exit: (direction) => ({
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
    }),
};

export default function Home() {
    const [[index, direction], setIndex] = useState([0, 0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(([prevIndex]) => {
                const newIndex = (prevIndex + 1) % slides.length;
                return [newIndex, 1];
            });
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const currentSlide = slides[index];

    return (
        <div className="w-full overflow-hidden">
            <div className="relative h-[80vh] sm:h-screen w-full overflow-hidden">
                {/* Background Image Slider */}
                <AnimatePresence custom={direction} mode="wait">
                    <motion.div
                        key={currentSlide.image}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.8 }}
                        className="absolute inset-0 w-full h-full z-0"
                    >
                        <div
                            className="w-full h-full bg-center bg-cover"
                            style={{ backgroundImage: `url(${currentSlide.image})` }}
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 z-10" />

                {/* Foreground Content */}
                <div className="relative z-20 flex flex-col h-full">
                    <Navbar />

                    <div className="flex-1 flex flex-col justify-center items-center px-4 text-center text-white">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.6 }}
                            >
                                <TypographyH1 className="text-3xl sm:text-5xl max-w-3xl mx-auto">
                                    {currentSlide.title}
                                </TypographyH1>
                            </motion.div>
                        </AnimatePresence>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide.description}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <TypographyP className="mt-4 max-w-2xl text-sm sm:text-base mx-auto">
                                    {currentSlide.description}
                                </TypographyP>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </div>
    );
}