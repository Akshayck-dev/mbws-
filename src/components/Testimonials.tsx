import React from 'react';
import { motion } from 'framer-motion';
import { Quote, MessageSquare } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'CEO, TechNova Solutions',
    content: 'WebApp Orbis transformed our vision into a scalable digital reality. Their technical depth and strategic approach are truly world-class.',
    avatar: 'https://i.pravatar.cc/150?u=1'
  },
  {
    name: 'Marcus Chen',
    role: 'Product Director, Global Logistics',
    content: 'The team delivered an enterprise-grade ERP system that significantly optimized our operational efficiency. Highly recommended.',
    avatar: 'https://i.pravatar.cc/150?u=2'
  },
  {
    name: 'Elena Rodriguez',
    role: 'Founder, Aether FinTech',
    content: 'Working with Orbis was a seamless experience. They engineered a secure, high-performance mobile ecosystem that exceeded our expectations.',
    avatar: 'https://i.pravatar.cc/150?u=3'
  },
  {
    name: 'David Smith',
    role: 'CTO, DataSphere Systems',
    content: 'The most reliable engineering partner we have worked with. Their commitment to code quality and performance is exceptional.',
    avatar: 'https://i.pravatar.cc/150?u=4'
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-950/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-sm mb-4">
              <MessageSquare className="w-4 h-4" />
              Client Success Stories
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Trusted by Ambitious <br />
              <span className="text-slate-500">Business Leaders</span>
            </h2>
          </div>
          <p className="text-slate-400 text-lg leading-relaxed max-w-sm lg:mb-2">
            Hear from the partners we have helped scale through strategic technology and engineering excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-10 rounded-[2.5rem] bg-slate-900/40 border border-white/5 hover:border-primary/20 transition-all duration-500 relative group"
            >
              <div className="absolute top-10 right-10 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote size={40} className="text-primary" />
              </div>
              <p className="text-slate-300 text-lg leading-relaxed mb-10 relative z-10 italic">
                "{item.content}"
              </p>
              <div className="flex items-center gap-4 relative z-10">
                <div className="relative">
                  <img src={item.avatar} alt={item.name} className="w-14 h-14 rounded-2xl object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  <div className="absolute inset-0 rounded-2xl border border-white/10" />
                </div>
                <div>
                  <h4 className="font-bold text-white tracking-tight">{item.name}</h4>
                  <p className="text-sm text-slate-500 font-medium">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
