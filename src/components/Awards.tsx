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
    title: "Best Mobile Solutions",
    organization: "Mobile App Daily",
    icon: Medal,
    year: "2021"
  }
];

export const Awards = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-sm mb-4">
              <Trophy className="w-4 h-4" />
              Excellence Recognized
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Awards & Global <br />
              <span className="text-slate-500">Recognition</span>
            </h2>
          </div>
          <p className="text-slate-400 text-lg leading-relaxed max-w-sm lg:mb-2">
            Our commitment to engineering excellence has been recognized by leading industry authorities worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-[2.5rem] bg-slate-900/40 border border-white/5 hover:border-primary/20 hover:bg-slate-900/60 transition-all duration-500 group text-center"
            >
              <div className="w-14 h-14 mx-auto mb-6 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-500">
                <award.icon className="w-7 h-7 text-slate-400 group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors tracking-tight">{award.title}</h3>
              <p className="text-slate-500 text-sm mb-6 font-medium">{award.organization}</p>
              <span className="px-3 py-1 rounded-md bg-white/5 text-[10px] font-black text-slate-500 uppercase tracking-widest border border-white/5 group-hover:border-primary/20 group-hover:text-primary transition-all">
                Class of {award.year}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
