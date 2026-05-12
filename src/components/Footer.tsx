import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Globe, Code, Send, Camera, ArrowUpRight } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="relative bg-background pt-24 pb-12 overflow-hidden">
      {/* Decorative Orbit Line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[200%] h-[500px] border-t border-primary/10 rounded-[100%] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                 <span className="font-black italic text-primary-glow">W</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-2xl font-black tracking-tighter text-white">WebApp</span>
                <span className="text-2xl font-black tracking-tighter text-primary-glow">Orbis</span>
              </div>
            </Link>
            <p className="text-white/60 leading-relaxed max-w-sm">
              Architecting the digital future through innovative design and high-performance technology. We build experiences that orbit around your success.
            </p>
            <div className="flex gap-4">
              {[Send, Code, Globe, Camera].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/40 transition-all duration-300 group"
                >
                  <Icon className="w-5 h-5 text-white/70 group-hover:text-primary-glow" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-4">
              {['App Development', 'Web Development', 'ERP Systems', 'UI/UX Design', 'Digital Solutions'].map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-white/50 hover:text-primary-glow transition-colors flex items-center gap-2 group">
                    {item}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              {['About Us', 'Our Projects', 'Careers', 'Latest News', 'Contact'].map((item) => (
                <li key={item}>
                  <Link to={`/${item.toLowerCase().replace(' ', '-')}`} className="text-white/50 hover:text-primary-glow transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Newsletter</h4>
            <p className="text-white/50 mb-6 text-sm">Stay updated with our latest celestial insights and digital breakthroughs.</p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-6 text-sm focus:outline-none focus:border-primary/50 transition-colors"
              />
              <button className="absolute right-2 top-2 bottom-2 px-4 bg-primary rounded-full text-xs font-bold hover:bg-primary-glow transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/40">
          <p>© 2026 WebApp Orbis. All orbits reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
