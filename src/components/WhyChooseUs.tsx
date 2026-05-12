import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, Shield, BarChart3, CheckCircle2 } from 'lucide-react';

const reasons = [
  {
    title: 'Modern Architecture',
    desc: 'We engineer solutions using the most robust, enterprise-grade frameworks to ensure long-term scalability.',
    icon: Zap,
  },
  {
    title: 'Strategic Design',
    desc: 'Our research-driven design process ensures every interaction serves a clear business objective.',
    icon: Target,
  },
  {
    title: 'Enterprise Security',
    desc: 'Security is at our core. We implement multi-layered encryption and rigorous compliance standards.',
    icon: Shield,
  },
  {
    title: 'Data-Driven Growth',
    desc: 'We integrate advanced analytics into every product to help you make informed, strategic decisions.',
    icon: BarChart3,
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-sm mb-6">
              <CheckCircle2 className="w-4 h-4" />
              The Agency Advantage
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-12 tracking-tight text-white leading-tight">
              Why Industry Leaders <br />
              <span className="text-slate-500">Choose Our Team</span>
            </h2>
            <div className="space-y-10">
              {reasons.map((reason, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-6 group"
                >
                  <div className="w-14 h-14 shrink-0 rounded-2xl bg-slate-900 border border-white/5 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-300">
                    <reason.icon className="w-6 h-6 text-slate-400 group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors">{reason.title}</h3>
                    <p className="text-slate-400 leading-relaxed">{reason.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full" />
            <motion.div 
              animate={{ 
                rotate: 360,
              }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="relative aspect-square rounded-full border border-white/5 p-16"
            >
              <div className="w-full h-full rounded-full border border-white/5 flex items-center justify-center" />
              <motion.div 
                className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-slate-900 border border-white/10 rounded-2xl flex items-center justify-center shadow-2xl"
                animate={{ rotate: -360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
                </div>
              </motion.div>
            </motion.div>

            {/* Performance Metric Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="absolute top-1/4 -right-4 md:right-10 bg-slate-900/90 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl max-w-[240px]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Efficiency</span>
              </div>
              <div className="text-4xl font-black text-white mb-2">99.9%</div>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">Uptime and performance consistency across all projects.</p>
            </motion.div>

            {/* Global Reach Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="absolute bottom-1/4 -left-4 md:-left-10 bg-slate-900/90 backdrop-blur-xl p-8 rounded-3xl border border-white/10 shadow-2xl max-w-[240px]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                </div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Reliability</span>
              </div>
              <div className="text-4xl font-black text-white mb-2">100%</div>
              <p className="text-xs text-slate-500 leading-relaxed font-medium">Successful delivery rate for over 500+ global deployments.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
