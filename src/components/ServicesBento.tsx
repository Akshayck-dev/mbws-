import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Smartphone, Laptop, Database, ShoppingBag, 
  Layout, Shield, ArrowRight, Layers 
} from 'lucide-react';

const services = [
  {
    title: "Web Engineering",
    description: "Developing robust, scalable web applications using the latest modern frameworks and architectures.",
    icon: Laptop,
    tech: ["React", "Next.js", "Node.js"],
    color: "bg-blue-500",
    size: "col-span-1 md:col-span-2"
  },
  {
    title: "Mobile App Development",
    description: "Creating high-performance, native-quality mobile experiences for iOS and Android platforms.",
    icon: Smartphone,
    tech: ["React Native", "Flutter"],
    color: "bg-indigo-500",
    size: "col-span-1"
  },
  {
    title: "E-commerce Solutions",
    description: "End-to-end e-commerce ecosystems designed for high conversion and seamless user journeys.",
    icon: ShoppingBag,
    tech: ["Shopify", "Custom Stack"],
    color: "bg-purple-500",
    size: "col-span-1"
  },
  {
    title: "Enterprise Software",
    description: "Custom ERP and CRM solutions built to streamline complex enterprise-level operations.",
    icon: Database,
    tech: ["Odoo", "Custom ERP"],
    color: "bg-emerald-500",
    size: "col-span-1 md:col-span-2"
  },
  {
    title: "UI/UX Design",
    description: "Research-driven design focused on creating intuitive, accessible, and high-converting user interfaces.",
    icon: Layout,
    tech: ["Figma", "Design Systems"],
    color: "bg-cyan-500",
    size: "col-span-1"
  },
  {
    title: "Cloud & Security",
    description: "Infrastructure management and enterprise-grade security to protect your digital assets.",
    icon: Shield,
    tech: ["AWS", "Cyber Security"],
    color: "bg-rose-500",
    size: "col-span-1"
  }
];

export const ServicesBento = () => {
  return (
    <section className="py-24 bg-slate-950/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-sm mb-4">
              <Layers className="w-4 h-4" />
              Comprehensive Expertise
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Strategic Solutions for <br />
              <span className="text-slate-500">Business Growth</span>
            </h2>
          </div>
          <p className="text-slate-400 text-lg leading-relaxed max-w-sm lg:mb-2">
            We combine technical excellence with business strategy to deliver software that solves real problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`${service.size} group relative p-10 rounded-3xl bg-slate-900/40 border border-white/5 hover:border-primary/40 hover:bg-slate-900/60 transition-all duration-500 overflow-hidden`}
            >
              {/* Background Accent */}
              <div className={`absolute top-0 right-0 w-32 h-32 ${service.color} opacity-[0.03] blur-3xl group-hover:opacity-[0.08] transition-opacity`} />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-10">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-500">
                    <service.icon className="w-7 h-7 text-white/80 group-hover:text-primary transition-colors" />
                  </div>
                  <ArrowRight className="w-6 h-6 text-white/10 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors tracking-tight">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-lg leading-relaxed mb-8">
                  {service.description}
                </p>

                <div className="mt-auto pt-8 border-t border-white/5 flex flex-wrap gap-2">
                  {service.tech.map((t, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 rounded-md bg-white/5 text-slate-500 text-xs font-bold uppercase tracking-wider group-hover:bg-primary/5 group-hover:text-primary transition-all"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
