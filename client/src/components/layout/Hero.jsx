// "use client";

// import SearchBar from '@/components/search/SearchBar';
// import {
//   TypographyP,
//   TypographyH4,
//   TypographyMuted,
// } from '@/custom/Typography';
// import { Dice6 } from '@/components/icons/Dice6';
// import { User } from '@/components/icons/User';
// import { Grip } from '@/components/icons/Grip';
// import { Blocks } from '@/components/icons/Blocks';
// import { motion } from 'framer-motion';
// import backgroundImag from '@/assets/hero/herobgimage.jpeg';
// import tab2 from '@/assets/hero/tab2image.jpeg'
// import { useState } from 'react';

// const Hero = () => {
//   const [activeTab, setActiveTab] = useState('buy')

//   const backgroundMap = {
//     buy: backgroundImag,
//     rent: tab2,
//     sell: tab2,
//     commercial: tab2,
//     pg: tab2,
//   };
//   return (
//     <div
//       className="relative min-h-screen flex items-center bg-cover bg-center overflow-hidden"
//       style={{ backgroundImage: `url('${backgroundMap[activeTab]}')` }}
//     >
//       {/* Preload Background Image */}
//       <img
//         src={backgroundMap[activeTab]}
//         alt="preload background"
//         className="hidden"
//         loading="eager"
//       />

//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/40" />

//       {/* Foreground Content */}
//       <div className="relative z-10 w-full mt-16 sm:mt-0">
//         <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-12 sm:pt-30 pb-20 flex flex-col items-start justify-center">
//           <div className="w-full lg:max-w-2xl space-y-6 sm:space-y-8 mt-10 sm:mt-16">

//             {/* Heading */}
//             <motion.h1
//               initial={{ opacity: 0, y: 15 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.6, ease: "easeOut" }}
//               className="text-white font-bold leading-tight text-[clamp(1.5rem,6vw,3rem)]"
//             >
//               <span className="block">Find Your Perfect Home with</span>
//               <span className="text-primary block">spaceswala</span>
//             </motion.h1>

//             {/* Description */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
//             >
//               <TypographyP className="text-white text-[clamp(1rem,2.5vw,1.25rem)]">
//                 Discover properties for buying, renting, or selling across India.
//                 Your dream home is just a search away.
//               </TypographyP>
//             </motion.div>

//             {/* Search Bar */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
//             >
//               <SearchBar className="mt-4 w-full" activeTab={activeTab} setActiveTab={setActiveTab} />
//             </motion.div>

//             {/* Statistics */}
//             <motion.div
//               className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-8 sm:mt-10"
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
//             >
//               {[
//                 { icon: <Dice6 />, value: '15K+', label: 'Properties Listed' },
//                 { icon: <User />, value: '10K+', label: 'Happy Customers' },
//                 { icon: <Grip />, value: '500+', label: 'Cities Covered' },
//                 { icon: <Blocks />, value: '250+', label: 'Home Work' },
//               ].map((item, i) => (
//                 <div
//                   key={i}
//                   className="min-w-0 bg-white/10 backdrop-blur-sm px-4 py-5 sm:px-5 sm:py-3 space-y-1 rounded-xl text-white text-center group hover:shadow-xl transition-all duration-300"
//                 >
//                   {item.icon}
//                   <TypographyH4 className="text-[clamp(1.1rem,1.8vw,1.5rem)]">
//                     {item.value}
//                   </TypographyH4>
//                   <TypographyMuted className="text-accent text-[clamp(0.8rem,1.5vw,1rem)]">
//                     {item.label}
//                   </TypographyMuted>
//                 </div>
//               ))}
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

"use client";

import { useState } from 'react';
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
import originalBackgroundImage from '@/assets/hero/herobgimage.jpeg';


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
    pg: pgliving.avif,
};

const Hero = () => {
    // State to hold the current background image URL
    const [backgroundImage, setBackgroundImage] = useState(TAB_IMAGES.buy);

    // This function will be passed to the SearchBar to update the background
    const handleTabChange = (newImageUrl) => {
        setBackgroundImage(newImageUrl);
    };

    return (
        <div className="relative min-h-screen flex items-center overflow-hidden">
            {/* Background Image with a fade animation */}
            <AnimatePresence>
                <motion.div
                    key={backgroundImage} // `key` is essential for AnimatePresence to detect changes
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
                        <motion.h1
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="text-white font-bold leading-tight text-[clamp(1.5rem,6vw,3rem)]"
                        >
                            <p>
                                Find Your Perfect Home with <span className="text-primary">spaceswala</span>
                            </p>
                        </motion.h1>

                        {/* Description */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
                        >
                            <TypographyP className="text-white text-[clamp(1rem,2.5vw,1.25rem)]">
                                Discover properties for buying, renting, or selling across India.
                                Your dream home is just a search away.
                            </TypographyP>
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
