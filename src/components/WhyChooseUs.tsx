import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Shield, Sparkles } from 'lucide-react';

const reasons = [
  {
    title: 'Future-Proof Tech',
    desc: 'We use the latest frameworks and architectures to ensure your solution stands the test of time.',
    icon: Zap,
  },
  {
    title: 'User-Centric Design',
    desc: 'Every pixel is placed with purpose, focusing on intuition and engagement.',
    icon: Target,
  },
  {
    title: 'Bank-Grade Security',
    desc: 'Security isn’t an afterthought. We build fortified systems from the ground up.',
    icon: Shield,
  },
  {
    title: 'Excellence in Motion',
    desc: 'Fluid animations and seamless transitions that make your brand feel premium.',
    icon: Sparkles,
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-navy-900/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Why Brands Join <br /><span className="glow-text">Our Orbit</span></h2>
            <div className="space-y-8">
              {reasons.map((reason, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-6 group"
                >
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <reason.icon className="w-6 h-6 text-primary-glow" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
                    <p className="text-white/50 leading-relaxed">{reason.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative">
            <motion.div 
              animate={{ 
                rotate: 360,
              }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="relative aspect-square rounded-full border border-dashed border-primary/20 p-12"
            >
              <div className="w-full h-full rounded-full border border-primary/10 flex items-center justify-center">
                 <div className="w-3/4 h-3/4 rounded-full bg-primary/5 blur-3xl" />
              </div>
              <motion.div 
                className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-12 bg-background border border-primary/30 rounded-xl flex items-center justify-center shadow-lg shadow-primary/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              >
                <Zap className="w-6 h-6 text-primary-glow" />
              </motion.div>
            </motion.div>
            {/* Visual premium card floating */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute top-1/4 right-0 glass-card p-6 max-w-[200px]"
            >
              <p className="text-xs text-white/50 mb-2">Performance Score</p>
              <div className="text-2xl font-black text-primary-glow">99.9%</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
