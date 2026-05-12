import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Code2, Rocket, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Strategic Discovery',
    desc: 'In-depth analysis of your business requirements, target audience, and market landscape.',
  },
  {
    icon: PenTool,
    title: 'Architecture & Design',
    desc: 'Crafting high-fidelity UI/UX prototypes and robust technical system architectures.',
  },
  {
    icon: Code2,
    title: 'Agile Engineering',
    desc: 'Iterative development cycles focused on code quality, performance, and scalability.',
  },
  {
    icon: Rocket,
    title: 'Deployment & Support',
    desc: 'Rigorous QA testing followed by seamless deployment and ongoing optimization.',
  },
];

export const ProcessTimeline = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-950/30">
      <div className="container mx-auto px-6">
        <div className="mb-24 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-sm mb-6">
            Execution Framework
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight text-white leading-tight">
            Our Development <span className="text-slate-500">Methodology</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            We follow a structured, results-oriented process to ensure every project is delivered with surgical precision and excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-[2.75rem] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />
          
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-2xl bg-slate-900 border border-white/5 flex items-center justify-center mb-8 group-hover:border-primary/40 group-hover:bg-primary/5 transition-all duration-500 shadow-xl">
                <step.icon className="w-8 h-8 text-slate-500 group-hover:text-primary transition-colors" />
              </div>
              <div className="flex items-center gap-2 mb-4 justify-center">
                 <span className="text-[10px] font-black text-primary/40 uppercase tracking-widest">Step {i + 1}</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors">{step.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm md:text-base">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
