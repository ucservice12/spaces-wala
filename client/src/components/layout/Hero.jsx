"use client";

import { useState, useEffect } from 'react';
import SearchBar from '@/components/search/SearchBar';
import {
    TypographyP,
    TypographyH4,
    TypographyMuted,
} from '@/custom/Typography';
import { Dice6 } from '@/components/icons/Dice6';
import { User } from '@/components/icons/User';
import { Grip } from '@/components/icons/Grip';
import { Blocks } from '@/components/icons/Blocks';
import { motion, AnimatePresence } from 'framer-motion';

// Import all images for preloading
import heroBuy from '@/assets/hero/herobuy.jpg';
import hero2 from '@/assets/hero/hero2.jpg';
import hero3 from '@/assets/hero/hero3.jpg';
import commercial from '@/assets/hero/commercial.jpg';
import herobgimage from '@/assets/hero/herobgimage.jpeg';
import pgliving from '@/assets/hero/pgliving.avif';

const TAB_IMAGES = {
    buy: herobgimage,
    rent: hero2,
    sell: hero3,
    commercial: commercial,
    pg: pgliving,
};

const Hero = () => {
    const [backgroundImage, setBackgroundImage] = useState(TAB_IMAGES.buy);
    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
        const imagePromises = Object.values(TAB_IMAGES).map((src) => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = src;
                img.onload = resolve;
                img.onerror = reject;
            });
        });

        Promise.all(imagePromises)
            .then(() => {
                setImagesLoaded(true);
            })
            .catch((error) => {
                console.error("Error preloading images:", error);
                setImagesLoaded(true); // Still show content even if some images fail
            });
    }, []);

    const handleTabChange = (newImageUrl) => {
        setBackgroundImage(newImageUrl);
    };

    if (!imagesLoaded) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <div className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background Image with a fade animation */}
            <AnimatePresence>
                <motion.div
                    key={backgroundImage}
                    className="absolute inset-0 bg-cover bg-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7 }}
                    style={{ backgroundImage: `url('${backgroundImage}')` }}
                />
            </AnimatePresence>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/40" />

            {/* Foreground Content */}
            <div className="relative z-10 w-full mt-16 sm:mt-0">
                <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-12 sm:pt-30 pb-20 flex flex-col items-start justify-center">
                    <div className="w-full lg:max-w-2xl space-y-6 sm:space-y-8 mt-10 sm:mt-16">

                        {/* Heading */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="space-y-4"
                        >
                            <h1 className="text-white font-bold tracking-normal leading-tight text-[clamp(2rem,4vw,2.75rem)]">
                                Find Your Perfect Home with <span className=" text-primary">spaceswala</span>
                            </h1>
                            {/* Description */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
                            >
                                <p className="font-rubik text-white text-[clamp(1rem,1.5vw,1.25rem)] font-normal max-w-2xl">
                                    Discover properties for buying, renting, or selling across India. Your dream home is just a search away.
                                </p>
                            </motion.div>
                        </motion.div>

                        {/* Search Bar - now with the onTabChange prop */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                        >
                            <SearchBar
                                className="mt-4 w-full"
                                onTabChange={handleTabChange}
                            />
                        </motion.div>

                        {/* Statistics */}
                        <motion.div
                            className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-10"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
                        >
                            {[
                                { icon: <Dice6 />, value: '15K+', label: 'Properties Listed' },
                                { icon: <User />, value: '10K+', label: 'Happy Customers' },
                                { icon: <Grip />, value: '500+', label: 'Cities Covered' },
                                { icon: <Blocks />, value: '250+', label: 'Home Work' },
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="min-w-0 bg-white/10 backdrop-blur-sm px-4 py-5 sm:px-5 sm:py-3 space-y-1 rounded-xl text-white text-center group hover:shadow-xl transition-all duration-300"
                                >
                                    {item.icon}
                                    <TypographyH4 className="text-[clamp(1.1rem,1.8vw,1.5rem)]">
                                        {item.value}
                                    </TypographyH4>
                                    <TypographyMuted className="text-accent text-[clamp(0.8rem,1.5vw,1rem)]">
                                        {item.label}
                                    </TypographyMuted>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;