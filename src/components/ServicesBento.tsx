import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Smartphone, Laptop, Database, ShoppingBag, 
  Layout, Shield, Cpu, Code, ArrowRight, Sparkles 
} from 'lucide-react';

const services = [
  {
    title: "Mobile App Development",
    description: "Architecting high-performance iOS and Android experiences with React Native and Flutter.",
    icon: Smartphone,
    tech: ["iOS", "Android", "Flutter"],
    color: "from-blue-500 to-cyan-500",
    size: "col-span-1 md:col-span-2"
  },
  {
    title: "Web Engineering",
    description: "Next-gen web applications built for speed, scale, and cinematic user experiences.",
    icon: Laptop,
    tech: ["React", "Next.js", "Node"],
    color: "from-purple-500 to-pink-500",
    size: "col-span-1"
  },
  {
    title: "E-commerce Solutions",
    description: "Converting browsers into buyers with high-performance digital storefronts.",
    icon: ShoppingBag,
    tech: ["Shopify", "Woo", "Custom"],
    color: "from-orange-500 to-red-500",
    size: "col-span-1"
  },
  {
    title: "Enterprise ERP",
    description: "Streamlining complex business operations with custom-engineered ERP ecosystems.",
    icon: Database,
    tech: ["Odoo", "SAP", "Custom"],
    color: "from-green-500 to-emerald-500",
    size: "col-span-1 md:col-span-2"
  },
  {
    title: "UI/UX Design",
    description: "Cinematic interfaces designed to captivate and convert your target audience.",
    icon: Layout,
    tech: ["Figma", "Adobe", "Motion"],
    color: "from-indigo-500 to-blue-500",
    size: "col-span-1"
  },
  {
    title: "Cyber Security",
    description: "Fortifying your digital assets with enterprise-grade security and encryption.",
    icon: Shield,
    tech: ["Auth", "SSL", "Audit"],
    color: "from-red-500 to-rose-500",
    size: "col-span-1"
  }
];

export const ServicesBento = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 relative overflow-hidden bg-navy-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-primary-glow font-bold tracking-widest uppercase text-sm flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              Our Expertise
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black mt-4 text-white tracking-tighter leading-none"
            >
              Celestial <span className="text-primary">Services</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-white/40 max-w-md text-lg leading-relaxed"
          >
            We don't just build software; we engineer digital galaxies that orbit around your business objectives.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              onHoverStart={() => setHoveredIndex(i)}
              onHoverEnd={() => setHoveredIndex(null)}
              className={`${service.size} group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-500 overflow-hidden cursor-pointer`}
            >
              {/* Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Animated Orbit Ring */}
              <div className="absolute -top-10 -right-10 w-40 h-40 border border-primary/5 rounded-full group-hover:border-primary/20 animate-spin-slow pointer-events-none" style={{ animationDuration: '10s' }} />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-8">
                  <div className={`p-4 rounded-2xl bg-gradient-to-br ${service.color} bg-opacity-20 backdrop-blur-xl group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <ArrowRight className="w-6 h-6 text-white/20 group-hover:text-primary-glow group-hover:translate-x-2 transition-all duration-300" />
                </div>

                <h3 className="text-2xl font-black text-white mb-4 tracking-tight group-hover:text-primary-glow transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/50 text-lg leading-relaxed mb-8">
                  {service.description}
                </p>

                <div className="mt-auto pt-6 border-t border-white/5 flex flex-wrap gap-2">
                  {service.tech.map((t, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 rounded-full bg-white/5 text-white/40 text-xs font-bold uppercase tracking-wider border border-white/5 group-hover:border-primary/30 group-hover:text-primary-glow transition-all"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Overlay Stats/Text */}
              <AnimatePresence>
                {hoveredIndex === i && (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  >
                    <div className="text-[10rem] font-black text-white/[0.03] select-none tracking-tighter">
                      {service.title.split(' ')[0]}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
