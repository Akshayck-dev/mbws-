import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, HeartPulse, ShoppingCart, Plane, Factory, Rocket, Building2 } from 'lucide-react';

const industries = [
  { name: 'Fintech', icon: Landmark, desc: 'Secure financial ecosystems.' },
  { name: 'Healthcare', icon: HeartPulse, desc: 'Compliant health tech.' },
  { name: 'E-commerce', icon: ShoppingCart, desc: 'High-conversion retail.' },
  { name: 'Logistics', icon: Plane, desc: 'Supply chain visibility.' },
  { name: 'Manufacturing', icon: Factory, desc: 'Industrial automation.' },
  { name: 'Real Estate', icon: Building2, desc: 'Digital property assets.' },
];

export const Industries = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-sm mb-4">
              <Rocket className="w-4 h-4" />
              Sector Specialization
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Vertical Solutions for <br />
              <span className="text-slate-500">Global Markets</span>
            </h2>
          </div>
          <p className="text-slate-400 text-lg leading-relaxed max-w-sm lg:mb-2">
            We deliver industry-specific engineering that addresses the unique challenges of high-stakes sectors.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-[2rem] bg-slate-900/40 border border-white/5 hover:border-primary/20 hover:bg-slate-900/60 transition-all duration-500 group text-center"
            >
              <div className="w-12 h-12 mx-auto mb-6 rounded-xl bg-white/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-500">
                <industry.icon className="w-6 h-6 text-slate-400 group-hover:text-primary transition-colors" />
              </div>
              <h3 className="font-bold text-white mb-2 group-hover:text-primary transition-colors">{industry.name}</h3>
              <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">{industry.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
