"use client";

import SearchBar from '@/components/search/SearchBar';
import {
  TypographyP,
  TypographyH1,
  TypographyH4,
  TypographyMuted,
} from '../../custom/Typography';
import { Dice6 } from '@/components/icons/Dice6';
import { User } from '@/components/icons/User';
import { Grip } from '@/components/icons/Grip';
import { Blocks } from '@/components/icons/Blocks';
import { motion } from 'framer-motion';

const backgroundImage =
  'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg';

const Hero = () => {
  return (
    <div
      className="relative h-screen flex items-center bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      {/* Preload Background Image */}
      <img
        src={backgroundImage}
        alt="preload background"
        className="hidden"
        loading="eager"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/40" />

      {/* Foreground Content */}
      <div className="relative z-10 w-full sm:mt-0 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-20 sm:py-40 flex flex-col items-start justify-center">
         <div className="w-full lg:max-w-2xl space-y-6 sm:space-y-8 mt-10 sm:mt-16">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
             <TypographyH1 className="text-white text-xl sm:text-4xl font-bold leading-tight">
          <span className="block sm:inline">Find Your Perfect Home with</span>{" "}
           <span className="text-primary block sm:inline">spaceswala</span>
           </TypographyH1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            >
              <TypographyP className="text-white text-base sm:text-lg">
                Discover properties for buying, renting, or selling across India. Your dream home is just a search away.
              </TypographyP>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
              <SearchBar className="mt-4 w-full" />
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
                  className="bg-white/10 backdrop-blur-sm px-6 py-6 sm:px-5 sm:py-3 space-y-1 rounded-xl text-white text-center min-w-[120px] sm:min-w-[140px] group hover:shadow-xl transition-all duration-300"
                >
                  {item.icon}
                  <TypographyH4 className="text-xl sm:text-2xl">{item.value}</TypographyH4>
                  <TypographyMuted className="text-accent">{item.label}</TypographyMuted>
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
