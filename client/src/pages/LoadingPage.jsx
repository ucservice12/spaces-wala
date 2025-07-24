import React from "react";
import { motion } from "framer-motion";

const LoadingPage = () => {
    return (
        <div className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-blue-200 px-4">
            <motion.div
                className="flex flex-col items-center space-y-6"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
            >
                {/* Spinner */}
                <motion.div
                    className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
                    aria-label="Loading spinner"
                />

                {/* Text with animation */}
                <motion.h1
                    className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 text-center"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    Please wait while we load your experience...
                </motion.h1>
            </motion.div>
        </div>
    );
};

export default LoadingPage;
