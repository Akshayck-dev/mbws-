import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, HeartPulse, ShoppingCart, Plane, Factory, Rocket } from 'lucide-react';

const industries = [
  { name: 'Fintech', icon: Landmark },
  { name: 'Healthcare', icon: HeartPulse },
  { name: 'Ecommerce', icon: ShoppingCart },
  { name: 'Aviation', icon: Plane },
  { name: 'Manufacturing', icon: Factory },
  { name: 'SpaceTech', icon: Rocket },
];

export const Industries = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">Industries We <span className="glow-text">Elevate</span></h2>
          <p className="text-white/50">Specialized solutions for high-stakes sectors.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 flex flex-col items-center gap-4 group"
            >
              <industry.icon className="w-10 h-10 text-white/40 group-hover:text-primary-glow transition-all duration-300 group-hover:scale-110" />
              <span className="font-bold text-white/60 group-hover:text-white transition-colors">{industry.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
