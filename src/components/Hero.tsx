import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Globe } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 text-center">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary-glow text-xs font-bold tracking-widest uppercase mb-8 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-glow opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-glow"></span>
          </span>
          Next-Gen Digital Architecture
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[1.1] tracking-tight"
        >
          Orbiting Your <br />
          <span className="glow-text">Digital Universe</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          We craft immersive digital experiences and high-performance solutions that propel brands into the future. Premium design meets cosmic engineering.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button className="btn-primary flex items-center gap-2 group">
            Launch Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="btn-outline flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <Play className="w-4 h-4 fill-white text-white" />
            </div>
            Watch Reel
          </button>
        </motion.div>

        {/* Orbit Visual */}
        <div className="relative mt-24 flex justify-center">
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            {/* Center Logo Placeholder - Stylized W from Logo */}
            <motion.div 
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 8, repeat: Infinity }}
              className="absolute inset-0 flex items-center justify-center z-20"
            >
              <div className="relative w-32 h-32 md:w-48 md:h-48 flex items-center justify-center">
                {/* Stylized W */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary to-primary-glow rounded-full blur-2xl opacity-20 animate-pulse-glow" />
                <div className="relative z-10 text-8xl md:text-[12rem] font-black italic tracking-tighter select-none">
                  <span className="bg-clip-text text-transparent bg-gradient-to-br from-primary via-primary-glow to-primary-glow drop-shadow-[0_0_30px_rgba(0,119,255,0.5)]">W</span>
                </div>
                {/* Logo Ring */}
                <div className="absolute inset-0 border-2 border-primary/30 rounded-full scale-110 -rotate-12 animate-orbit" style={{ animationDuration: '4s' }} />
              </div>
            </motion.div>

            {/* Orbiting Elements */}
            <div className="absolute inset-0 z-10 animate-orbit">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center shadow-lg">
                <div className="w-2 h-2 bg-primary-glow rounded-full" />
              </div>
            </div>
            <div className="absolute inset-0 z-10 animate-orbit-reverse" style={{ animationDuration: '30s' }}>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center shadow-lg">
                <div className="w-3 h-3 bg-primary rounded-full" />
              </div>
            </div>

            {/* Orbit Rings */}
            <div className="absolute inset-0 border border-white/10 rounded-full animate-pulse-glow" />
            <div className="absolute -inset-8 border border-white/5 rounded-full" />
            <div className="absolute -inset-16 border border-white/5 rounded-full opacity-50" />
          </div>
        </div>
      </div>

      {/* Floating Mockup Shadow */}
      <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[80%] h-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
    </section>
  );
};
