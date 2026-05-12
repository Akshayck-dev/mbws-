import React from 'react';
import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';

const techCategories = [
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Python', 'Go', 'GraphQL']
  },
  {
    title: 'Database',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch']
  },
  {
    title: 'Cloud & DevOps',
    items: ['AWS', 'Docker', 'Kubernetes', 'CI/CD']
  }
];

export const TechStack = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-sm mb-6">
            <Cpu className="w-4 h-4" />
            Modern Tech Stack
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight text-white leading-tight">
            The Engines of <span className="text-slate-500">Innovation</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            We leverage a world-class technology ecosystem to build secure, high-performance, and future-ready digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 rounded-[2rem] bg-slate-900/40 border border-white/5 hover:border-primary/20 hover:bg-slate-900/60 transition-all duration-500 group"
            >
              <h3 className="text-lg font-bold text-white mb-6 tracking-tight group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-4 py-2 rounded-xl bg-white/5 border border-white/5 text-slate-400 text-xs font-bold tracking-wider group-hover:border-primary/10 transition-all"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
