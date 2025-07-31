import { Suspense } from 'react';
import { motion } from 'framer-motion';

// Simple 3D-like animation component since we don't have a specific Spline scene
const SplineScene = () => {
  return (
    <div className="relative w-full h-64 overflow-hidden rounded-xl bg-black"> {/* Added bg-black to ensure a dark background for the scene itself */}
      <Suspense fallback={
        <div className="w-full h-full bg-gradient-to-br from-primary/10 to-purple-500/10 animate-pulse rounded-xl" />
      }>
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 rounded-xl" // Adjusted opacity for dark background
          animate={{
            background: [
              "linear-gradient(45deg, rgba(147, 51, 234, 0.05), rgba(168, 85, 247, 0.05))", // Adjusted opacity
              "linear-gradient(135deg, rgba(168, 85, 247, 0.05), rgba(147, 51, 234, 0.05))", // Adjusted opacity
              "linear-gradient(225deg, rgba(147, 51, 234, 0.05), rgba(168, 85, 247, 0.05))", // Adjusted opacity
              "linear-gradient(315deg, rgba(168, 85, 247, 0.05), rgba(147, 51, 234, 0.05))"  // Adjusted opacity
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Floating geometric shapes */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-16 h-16 bg-primary/20 rounded-lg" // Adjusted opacity for dark background
          animate={{
            y: [0, -20, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute top-1/2 right-1/4 w-12 h-12 bg-purple-500/20 rounded-full" // Adjusted opacity for dark background
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0],
            scale: [1, 0.8, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        
        <motion.div 
          className="absolute bottom-1/4 left-1/2 w-8 h-8 bg-green-400/20 rotate-45" // Adjusted opacity for dark background
          animate={{
            y: [0, -15, 0],
            rotate: [45, 225, 405],
            opacity: [0.1, 0.4, 0.1] // Adjusted opacity for dark background
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Particle-like elements */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/10 rounded-full" // Adjusted opacity for dark background
            style={{
              left: `${20 + i * 10}%`,
              top: `${30 + (i % 3) * 20}%`
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0.5, 0], // Adjusted opacity for dark background
              scale: [0, 1, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
          />
        ))}
      </Suspense>
    </div>
  );
};

export default SplineScene;