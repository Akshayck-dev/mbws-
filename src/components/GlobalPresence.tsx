import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Globe, Phone, Mail } from 'lucide-react';

const locations = [
  {
    city: "Kochi, India",
    address: "Infopark Campus, Kakkanad, Kochi, Kerala",
    phone: "+91 484 405 2626",
    email: "india@webapporbis.com"
  },
  {
    city: "Dubai, UAE",
    address: "Business Bay, Downtown Dubai, UAE",
    phone: "+971 4 554 0033",
    email: "uae@webapporbis.com"
  },
  {
    city: "London, UK",
    address: "Canary Wharf, London, United Kingdom",
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
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Abstract World Map Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/world-map.png')] bg-center bg-no-repeat bg-contain" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-primary-glow font-bold tracking-widest uppercase text-sm"
            >
              Global Reach
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black mt-4 text-white tracking-tighter"
            >
              Serving Clients <br />
              <span className="text-primary">Across the Globe</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/60 mt-6 text-lg leading-relaxed max-w-xl"
            >
              With strategic offices across multiple continents, we provide localized support and global-standard digital solutions to businesses worldwide.
            </motion.p>

            <div className="mt-12 grid grid-cols-2 gap-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary-glow">
                   <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold">5+ Countries</h4>
                  <p className="text-white/40 text-sm">Physical Presence</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary-glow">
                   <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold">500+ Projects</h4>
                  <p className="text-white/40 text-sm">Delivered Worldwide</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {locations.map((loc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-primary/30 hover:bg-white/10 transition-all group"
              >
                <h3 className="text-lg font-bold text-white mb-4 group-hover:text-primary-glow transition-colors">{loc.city}</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-white/50 text-sm">
                    <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                    <span>{loc.address}</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/50 text-sm">
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    <span>{loc.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-white/50 text-sm">
                    <Mail className="w-4 h-4 flex-shrink-0" />
                    <span>{loc.email}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
