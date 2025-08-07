import React from 'react';
import { motion } from 'framer-motion';

const MyReviews = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8 sm:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.h1 
          className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-18"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Reviews
        </motion.h1>

        {/* Empty State Container */}
        <motion.div 
          className="flex flex-col items-center justify-center text-center py-8 sm:py-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Illustration */}
          <motion.div 
            className="mb-8 w-48 h-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <svg
              viewBox="0 0 200 160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto"
            >
              {/* Background elements */}
              <circle cx="50" cy="40" r="3" fill="#E5E7EB" />
              <circle cx="150" cy="30" r="2" fill="#E5E7EB" />
              <circle cx="170" cy="60" r="2.5" fill="#E5E7EB" />
              <circle cx="30" cy="80" r="2" fill="#E5E7EB" />
              
              {/* Main box */}
              <rect
                x="60"
                y="70"
                width="80"
                height="60"
                rx="4"
                fill="#8B5CF6"
                className="drop-shadow-lg"
              />
              
              {/* Box lid */}
              <path
                d="M60 70 L100 50 L140 70 L100 90 Z"
                fill="#A78BFA"
                className="drop-shadow-md"
              />
              
              {/* Character head */}
              <circle cx="100" cy="45" r="12" fill="#F3F4F6" />
              
              {/* Character face */}
              <circle cx="96" cy="42" r="1.5" fill="#6B7280" />
              <circle cx="104" cy="42" r="1.5" fill="#6B7280" />
              <path
                d="M96 48 Q100 52 104 48"
                stroke="#6B7280"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
              />
              
              {/* Character hair */}
              <path
                d="M88 38 Q100 32 112 38"
                fill="#8B5CF6"
              />
              
              {/* Floating elements */}
              <motion.circle
                cx="40"
                cy="50"
                r="1.5"
                fill="#8B5CF6"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.circle
                cx="160"
                cy="90"
                r="1.5"
                fill="#8B5CF6"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
              <motion.circle
                cx="170"
                cy="120"
                r="1"
                fill="#A78BFA"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              />
            </svg>
          </motion.div>

          {/* No Reviews Text */}
          <motion.h2 
            className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            No Reviews
          </motion.h2>

          {/* Subtitle */}
          <motion.p 
            className="text-sm sm:text-lg text-gray-500"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            You haven't submitted any reviews yet
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default MyReviews;