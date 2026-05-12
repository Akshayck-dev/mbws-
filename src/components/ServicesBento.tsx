import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Laptop, Database, ShoppingBag, Layout, Shield, Cpu, Code } from 'lucide-react';

const services = [
  {
    title: 'App Development',
    desc: 'Crafting high-performance iOS and Android applications with cutting-edge tech.',
    icon: Smartphone,
    size: 'md:col-span-2 md:row-span-2',
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'Web Development',
    desc: 'Bespoke web experiences built for speed, scale, and SEO.',
    icon: Laptop,
    size: 'md:col-span-2',
    color: 'from-purple-500/20 to-blue-500/20',
  },
  {
    title: 'UI/UX Design',
    desc: 'Immersive interfaces designed for user engagement.',
    icon: Layout,
    size: 'md:col-span-1',
    color: 'from-pink-500/20 to-rose-500/20',
  },
  {
    title: 'ERP Systems',
    desc: 'Custom enterprise resource planning for complex workflows.',
    icon: Database,
    size: 'md:col-span-1',
    color: 'from-amber-500/20 to-orange-500/20',
  },
  {
    title: 'Ecommerce',
    desc: 'Scalable online stores that drive conversion.',
    icon: ShoppingBag,
    size: 'md:col-span-2',
    color: 'from-green-500/20 to-emerald-500/20',
  },
  {
    title: 'Digital Solutions',
    desc: 'Transforming businesses with strategic digital integration.',
    icon: Shield,
    size: 'md:col-span-1',
    color: 'from-indigo-500/20 to-blue-500/20',
  },
  {
    title: 'Custom Software',
    desc: 'Tailored solutions for unique business challenges.',
    icon: Code,
    size: 'md:col-span-1',
    color: 'from-primary/20 to-primary-glow/20',
  }
];

export const ServicesBento = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Celestial Services</h2>
          <p className="text-white/60 text-lg">
            We provide a comprehensive orbit of digital solutions, engineered to propel your brand into the future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`glass-card p-8 relative overflow-hidden group cursor-pointer ${service.size}`}
            >
              {/* Background Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:text-primary-glow transition-all duration-300">
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary-glow transition-colors">{service.title}</h3>
                <p className="text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
                  {service.desc}
                </p>
              </div>

              {/* Decorative Lines */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 border border-white/5 rounded-full group-hover:scale-150 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
