import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, Globe, Camera, Code, ArrowUpRight } from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/about' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' }
  ],
  services: [
    { name: 'Web Development', href: '/services' },
    { name: 'Mobile Apps', href: '/services' },
    { name: 'UI/UX Design', href: '/services' },
    { name: 'Digital Marketing', href: '/services' }
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' }
  ]
};

export const Footer = () => {
  return (
    <footer className="bg-slate-950 pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-1 mb-6">
              <span className="text-2xl font-extrabold tracking-tight text-white">WebApp</span>
              <span className="text-2xl font-extrabold tracking-tight text-primary">Orbis</span>
              <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5" />
            </Link>
            <p className="text-slate-400 leading-relaxed mb-8">
              We engineer high-performance digital products for ambitious brands worldwide. Delivering excellence through technology and design.
            </p>
            <div className="flex gap-4">
              {[Send, Code, Globe, Camera].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white transition-all border border-white/10"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-slate-400 hover:text-primary transition-colors flex items-center group">
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Services</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-slate-400 hover:text-primary transition-colors flex items-center group">
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Newsletter</h4>
            <p className="text-slate-400 text-sm mb-6">Stay updated with the latest digital trends and our newest projects.</p>
            <form className="relative group">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="w-full px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-primary transition-all pr-12"
              />
              <button className="absolute right-2 top-2 bottom-2 px-4 rounded-lg bg-primary text-white hover:bg-primary/90 transition-all">
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-slate-500 text-sm">
            © {new Date().getFullYear()} WebApp Orbis. All rights reserved.
          </div>
          <div className="flex gap-8">
            {footerLinks.legal.map((link) => (
              <a key={link.name} href={link.href} className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
