import React from 'react';
import { motion } from 'framer-motion';

const techs = [
  { name: 'React', icon: '⚛️' },
  { name: 'Next.js', icon: '▲' },
  { name: 'TypeScript', icon: 'TS' },
  { name: 'Tailwind', icon: '🌊' },
  { name: 'Framer Motion', icon: '✨' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'GraphQL', icon: '🔮' },
  { name: 'PostgreSQL', icon: '🐘' },
];

export const TechStack = () => {
  return (
    <section className="py-24 bg-navy-950/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Engines of Innovation</h2>
          <p className="text-white/50">We use the most advanced technologies to build your digital future.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {techs.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center gap-4 group cursor-default"
            >
              <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300 shadow-[0_0_20px_transparent] group-hover:shadow-[0_0_30px_rgba(22,119,255,0.2)]">
                {tech.icon}
              </div>
              <span className="text-white/60 font-medium group-hover:text-primary-glow transition-colors">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
