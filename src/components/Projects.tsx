import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'Nova SaaS Platform',
    category: 'Web Application',
    image: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800',
    desc: 'A revolutionary cloud infrastructure management dashboard.',
  },
  {
    title: 'Orbit Pay',
    category: 'Fintech App',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    desc: 'Seamless cross-border payment gateway with real-time tracking.',
  },
  {
    title: 'Aether CRM',
    category: 'Enterprise Solution',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    desc: 'AI-driven customer relationship management for the modern era.',
  },
];

export const Projects = () => {
  return (
    <section className="py-24 bg-navy-950/50 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Works</h2>
            <p className="text-white/60 text-lg">
              Explore our gallery of digital masterpieces, where vision meets technical excellence.
            </p>
          </div>
          <button className="btn-outline flex items-center gap-2 group">
            View All Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 border border-white/10">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-white text-background flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                    <ExternalLink className="w-6 h-6" />
                  </div>
                </div>
              </div>
              <span className="text-primary-glow text-xs font-bold tracking-widest uppercase mb-2 block">{project.category}</span>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary-glow transition-colors">{project.title}</h3>
              <p className="text-white/50">{project.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
