import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, Briefcase } from 'lucide-react';

const projects = [
  {
    title: 'Enterprise ERP Suite',
    category: 'Software Engineering',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    desc: 'A comprehensive resource planning system for a multi-national manufacturing firm.',
  },
  {
    title: 'Fintech Mobile Ecosystem',
    category: 'Mobile Development',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    desc: 'Secure, real-time payment processing application with global currency support.',
  },
  {
    title: 'Global Logistics Dashboard',
    category: 'Web Application',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e905263543?auto=format&fit=crop&q=80&w=800',
    desc: 'Advanced supply chain visibility platform with AI-driven route optimization.',
  },
];

export const Projects = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-sm mb-4">
              <Briefcase className="w-4 h-4" />
              Featured Case Studies
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Delivering Excellence <br />
              <span className="text-slate-500">at Global Scale</span>
            </h2>
          </div>
          <button className="px-8 py-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold transition-all flex items-center gap-2 group mb-2">
            View Portfolio
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-8 border border-white/5 group-hover:border-primary/30 transition-all duration-500 shadow-2xl">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <ExternalLink className="w-8 h-8" />
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <span className="px-3 py-1 rounded-md bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.2em]">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors tracking-tight">
                  {project.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {project.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
