import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Star } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(37,99,235,0.15),transparent_70%)] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary-glow text-sm font-bold mb-8"
          >
            <Star className="w-4 h-4 fill-primary" />
            <span>Top Rated Digital Agency in India</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-extrabold tracking-tight text-white mb-8 leading-[1.1]"
          >
            Architecting the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-glow">Digital Future.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            We partner with ambitious brands to engineer high-performance websites, mobile apps, and custom software that drive real business growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <button className="w-full sm:w-auto px-10 py-5 rounded-full bg-primary text-white font-bold text-lg hover:bg-primary/90 transition-all shadow-[0_10px_30px_rgba(37,99,235,0.3)] flex items-center justify-center gap-2 group">
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto px-10 py-5 rounded-full bg-white/5 text-white font-bold text-lg border border-white/10 hover:bg-white/10 transition-all">
              View Our Work
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-20 pt-12 border-t border-white/5 flex flex-wrap justify-center gap-8 md:gap-16 text-white/40"
          >
            {[
              "100+ Projects Delivered",
              "10+ Global Offices",
              "98% Client Satisfaction",
              "Industry Award Winners"
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-2 text-sm font-semibold tracking-wide uppercase">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                {stat}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
