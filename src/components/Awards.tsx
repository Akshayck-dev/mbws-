import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Award, Medal } from 'lucide-react';

const awards = [
  {
    title: "Best Web Agency 2023",
    organization: "Digital Excellence Awards",
    icon: Trophy,
    year: "2023"
  },
  {
    title: "Top E-commerce Developer",
    organization: "Global Tech Review",
    icon: Award,
    year: "2022"
  },
  {
    title: "Innovation in UI/UX",
    organization: "Design Nominees",
    icon: Star,
    year: "2023"
  },
  {
    title: "Best Mobile App Solutions",
    organization: "Mobile App Daily",
    icon: Medal,
    year: "2021"
  }
];

export const Awards = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-navy-950">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-primary-glow font-bold tracking-widest uppercase text-sm"
          >
            Recognition
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black mt-4 text-white tracking-tighter"
          >
            Awards & <span className="text-primary">Recognition</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 relative overflow-hidden text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <award.icon className="w-8 h-8 text-primary-glow" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{award.title}</h3>
                <p className="text-white/60 text-sm mb-4">{award.organization}</p>
                <span className="inline-block px-3 py-1 bg-primary/20 text-primary-glow rounded-full text-xs font-bold">
                  {award.year}
                </span>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
