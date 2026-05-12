import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'CEO, TechNova',
    content: 'WebApp Orbis transformed our vision into a digital reality. Their attention to detail and futuristic design approach is unmatched.',
    avatar: 'https://i.pravatar.cc/150?u=1'
  },
  {
    name: 'Marcus Chen',
    role: 'Product Lead, OrbitFlow',
    content: 'The team delivered a high-performance ERP system that scaled our operations by 200%. True partners in innovation.',
    avatar: 'https://i.pravatar.cc/150?u=2'
  },
  {
    name: 'Elena Rodriguez',
    role: 'Founder, Aether Design',
    content: 'Working with Orbis felt like seeing the future. The animations and UI they created for our app are simply award-winning.',
    avatar: 'https://i.pravatar.cc/150?u=3'
  },
  {
    name: 'David Smith',
    role: 'CTO, DataSphere',
    content: 'The most immersive website experience we’ve ever had built. Our clients are constantly praising the new design.',
    avatar: 'https://i.pravatar.cc/150?u=4'
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Celestial Praise</h2>
        <p className="text-white/60 text-lg">Don’t just take our word for it. Hear from those who’ve joined our orbit.</p>
      </div>

      <div className="flex overflow-hidden group">
        <motion.div 
          animate={{ x: [0, -1920] }}
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="flex gap-8 whitespace-nowrap py-10"
        >
          {[...testimonials, ...testimonials].map((item, i) => (
            <div 
              key={i}
              className="w-[400px] shrink-0 glass-card p-8 relative group/card"
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg group-hover/card:scale-110 transition-transform">
                <Quote className="w-6 h-6 text-white" />
              </div>
              <p className="text-white/70 italic mb-8 whitespace-normal leading-relaxed text-lg">
                "{item.content}"
              </p>
              <div className="flex items-center gap-4">
                <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full border border-primary/30" />
                <div>
                  <h4 className="font-bold text-white">{item.name}</h4>
                  <p className="text-sm text-primary-glow">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
