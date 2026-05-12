import React from 'react';
import { motion } from 'framer-motion';

export const OrbitBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-background">
      {/* Radial Gradients for atmosphere */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-primary-glow/10 rounded-full blur-[150px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
      
      {/* Orbit Lines */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="absolute border border-white/5 rounded-full"
            style={{
              width: `${i * 300}px`,
              height: `${i * 300}px`,
              opacity: 1 - i * 0.15,
            }}
          />
        ))}
      </div>

      {/* Floating Particles/Glows */}
      <motion.div 
        animate={{ 
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/3 left-1/4 w-2 h-2 bg-primary-glow rounded-full shadow-[0_0_15px_#3BA9FF]"
      />
      <motion.div 
        animate={{ 
          x: [0, -150, 0],
          y: [0, 80, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-primary rounded-full shadow-[0_0_20px_#1677FF]"
      />
    </div>
  );
};
