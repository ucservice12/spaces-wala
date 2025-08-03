import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Input from './input';
import { Star, Download } from 'lucide-react';
import { useState } from 'react';

const HeroSectionMobile = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const scrollingTexts = [
        'Pay Rent',
        'Brokerage',
        'Maintenance',
        'Deposit',
        'Education Fees'
    ];

    return (
        <section className="min-h-screen bg-gray-900 text-white pt-28 pb-10 px-4">
            {/* Scrolling Text */}
            <div className="overflow-hidden mb-6 w-full">
                <motion.div
                    className="flex space-x-6 whitespace-nowrap"
                    animate={{ x: [0, -1000] }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                >
                    {[...scrollingTexts, ...scrollingTexts].map((text, i) => (
                        <span
                            key={i}
                            className="text-xl font-medium text-gray-400 min-w-fit"
                        >
                            {text}
                        </span>
                    ))}
                </motion.div>
            </div>

            {/* Heading */}
            <motion.h1
                className="text-3xl font-bold text-center leading-snug mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Pay{' '}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
                    Brokerage
                </span>{' '}
                on Credit
            </motion.h1>

            {/* Phone Input + Send */}
            <motion.div
                className="w-full max-w-md mx-auto mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <div className="flex flex-col sm:flex-row gap-2">
                    <div className="flex w-full">
                        <span className="bg-gray-800 text-gray-400 px-3 py-2 rounded-l-md border border-r-0 border-gray-700">
                            +91
                        </span>
                        <Input
                            type="tel"
                            placeholder="Phone number"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className="rounded-l-none flex-1 bg-gray-900 text-white border border-gray-700 placeholder-gray-500"
                        />
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white py-1.5 text-sm rounded-md">
                        Send
                    </Button>
                </div>
            </motion.div>

            {/* QR + App Name */}
            <motion.div
                className="flex flex-col items-center gap-4 mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
            >
                <div className="w-20 h-20 bg-white rounded-lg p-2">
                    <div className="w-full h-full bg-black rounded grid grid-cols-3 gap-1 p-1">
                        {Array.from({ length: 9 }).map((_, i) => (
                            <div
                                key={i}
                                className={`bg-white rounded-sm ${Math.random() > 0.5 ? 'opacity-100' : 'opacity-30'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
                <div className="text-center">
                    <p className="text-sm text-gray-400 mb-1">or scan to Download</p>
                    <p className="font-semibold">SpacesWala.com</p>
                </div>
            </motion.div>

            {/* App Store Buttons */}
            <motion.div
                className="flex flex-col gap-3 mb-6 w-full max-w-md mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                <Button
                    variant="outline"
                    className="w-full bg-gray-900 text-white border-gray-700 hover:bg-gray-800"
                >
                    <Download className="w-4 h-4 mr-2" /> App Store
                </Button>
                <Button
                    variant="outline"
                    className="w-full bg-gray-900 text-white border-gray-700 hover:bg-gray-800"
                >
                    <Download className="w-4 h-4 mr-2" /> Google Play
                </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
                className="flex justify-center gap-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
            >
                <div className="text-center">
                    <div className="flex items-center gap-1 justify-center mb-1">
                        <span className="text-xl font-bold">4.7</span>
                        <span className="text-gray-400 text-sm">/5</span>
                    </div>
                    <div className="flex justify-center gap-1 mb-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                                key={i}
                                className="w-3 h-3 fill-yellow-400 text-yellow-400"
                            />
                        ))}
                    </div>
                    <p className="text-xs text-gray-400">App Rating</p>
                </div>
                <div className="text-center">
                    <div className="text-xl font-bold mb-1">5M+</div>
                    <p className="text-xs text-gray-400">Transactions so far</p>
                </div>
            </motion.div>
        </section>
    );
};

export default HeroSectionMobile;
