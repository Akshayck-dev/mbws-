import React from 'react';
import { motion } from 'framer-motion';

const clients = [
  'Microsoft', 'Adobe', 'Google', 'Amazon', 'Meta', 'Netflix', 'Shopify', 'Slack'
];

export const Clients = () => {
  return (
    <section className="py-20 border-y border-white/5 bg-slate-950/40">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center mb-12">
          <div className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-[0.2em] uppercase text-slate-500">
            Trusted Partners & Ecosystems
          </div>
        </div>
        
        <div className="flex overflow-hidden relative">
          {/* Masking gradients */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          
          <motion.div 
            animate={{ x: [0, -1600] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-24 items-center whitespace-nowrap"
          >
            {[...clients, ...clients, ...clients].map((client, i) => (
              <span key={i} className="text-2xl md:text-4xl font-extrabold text-slate-700 hover:text-primary transition-colors cursor-default select-none tracking-tighter">
                {client}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
