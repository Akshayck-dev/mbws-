import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity, but a premium web application typically takes between 4 to 8 weeks from discovery to launch."
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Absolutely. We provide dedicated maintenance and support orbits to ensure your platform continues to perform at its peak."
  },
  {
    question: "Can you help with existing legacy systems?",
    answer: "Yes, we specialize in modernizing legacy architectures, migrating them to futuristic tech stacks without disrupting your current operations."
  },
  {
    question: "What makes WebApp Orbis different?",
    answer: "Our unique blend of cinematic design aesthetics and high-performance engineering ensures your brand doesn't just exist online—it orbits above the competition."
  }
];

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-xl font-medium text-white/80 group-hover:text-white transition-colors">{question}</span>
        <div className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center transition-transform duration-300 ${isOpen ? 'rotate-180 bg-primary/20' : ''}`}>
          <ChevronDown className="w-5 h-5 text-primary-glow" />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="pb-8 text-white/50 leading-relaxed max-w-3xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQ = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-navy-950/20">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Common Inquiries</h2>
          <p className="text-white/60">Navigating the digital space can be complex. Here are some answers to guide you.</p>
        </div>
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <FAQItem key={i} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
};
