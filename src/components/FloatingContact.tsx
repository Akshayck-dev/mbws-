import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone } from 'lucide-react';

export const FloatingContact = () => {
  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4">
      {/* Whatsapp Button */}
      <motion.a
        href="https://wa.me/+919446717047"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(37,211,102,0.5)] group relative"
      >
        <MessageCircle className="w-8 h-8 text-white" />
        <span className="absolute right-full mr-4 px-3 py-1 bg-white text-black text-sm font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Chat with us
        </span>
      </motion.a>

      {/* Call Button */}
      <motion.a
        href="tel:+919446717047"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1 }}
        whileHover={{ scale: 1.1 }}
        className="w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,119,255,0.5)] group relative"
      >
        <Phone className="w-7 h-7 text-white" />
        <span className="absolute right-full mr-4 px-3 py-1 bg-white text-black text-sm font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Call Experts
        </span>
      </motion.a>
    </div>
  );
};
