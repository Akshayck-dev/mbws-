import React from 'react';
import { motion } from 'framer-motion';

const clients = [
  'NOVA', 'AETHER', 'ORBIT', 'FLUX', 'GENESIS', 'ZENITH', 'VORTEX', 'APEX'
];

export const Clients = () => {
  return (
    <section className="py-20 border-y border-white/5 bg-white/[0.02]">
      <div className="container mx-auto px-6">
        <p className="text-center text-xs font-bold tracking-[0.3em] uppercase text-white/30 mb-12">Trusted by cosmic pioneers</p>
        <div className="flex overflow-hidden">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex gap-20 items-center whitespace-nowrap"
          >
            {[...clients, ...clients, ...clients].map((client, i) => (
              <span key={i} className="text-3xl md:text-5xl font-black text-white/10 hover:text-primary-glow/40 transition-colors cursor-default select-none">
                {client}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
