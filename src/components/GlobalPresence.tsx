import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Globe, Phone, Mail } from 'lucide-react';

const locations = [
  {
    city: "Kochi, India",
    address: "Infopark Campus, Kakkanad, Kerala",
    phone: "+91 484 405 2626",
    email: "india@webapporbis.com"
  },
  {
    city: "Dubai, UAE",
    address: "Business Bay, Downtown Dubai",
    phone: "+971 4 554 0033",
    email: "uae@webapporbis.com"
  },
  {
    city: "London, UK",
    address: "Canary Wharf, United Kingdom",
    phone: "+44 20 7946 0000",
    email: "uk@webapporbis.com"
  },
  {
    city: "Toronto, Canada",
    address: "Downtown Toronto, ON, Canada",
    phone: "+1 416 555 0198",
    email: "canada@webapporbis.com"
  }
];

export const GlobalPresence = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-950/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-sm mb-4">
              <Globe className="w-4 h-4" />
              Global Infrastructure
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Operational Hubs <br />
              <span className="text-slate-500">Worldwide</span>
            </h2>
          </div>
          <p className="text-slate-400 text-lg leading-relaxed max-w-sm lg:mb-2">
            Our strategic global presence allows us to deliver high-performance digital solutions with localized expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {locations.map((loc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-[2.5rem] bg-slate-900/40 border border-white/5 hover:border-primary/20 hover:bg-slate-900/60 transition-all duration-500 group"
            >
              <h3 className="text-xl font-bold text-white mb-6 group-hover:text-primary transition-colors tracking-tight">{loc.city}</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 text-slate-500 text-sm leading-relaxed">
                  <MapPin className="w-4 h-4 mt-1 shrink-0 text-primary/50" />
                  <span>{loc.address}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-500 text-sm">
                  <Phone className="w-4 h-4 shrink-0 text-primary/50" />
                  <span>{loc.phone}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-500 text-sm">
                  <Mail className="w-4 h-4 shrink-0 text-primary/50" />
                  <span className="truncate">{loc.email}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
