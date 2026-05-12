import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'Deep dive into your brand DNA, goals, and target universe.',
  },
  {
    num: '02',
    title: 'Architecture',
    desc: 'Drafting the cosmic blueprints for your digital infrastructure.',
  },
  {
    num: '03',
    title: 'Creation',
    desc: 'High-fidelity design and engineering phase where vision becomes reality.',
  },
  {
    num: '04',
    title: 'Launch',
    desc: 'Rigorous testing followed by a flawless deployment into the market.',
  },
];

export const ProcessTimeline = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="container mx-auto px-6">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Cosmic Journey</h2>
          <p className="text-white/60 text-lg">A structured approach to stellar results.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent z-0" />
          
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-background border-2 border-white/10 flex items-center justify-center text-2xl font-black text-primary-glow mb-8 group-hover:border-primary-glow transition-colors group-hover:scale-110 duration-500 shadow-[0_0_20px_rgba(59,169,255,0)] group-hover:shadow-[0_0_30px_rgba(59,169,255,0.2)]">
                {step.num}
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-white/50 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
