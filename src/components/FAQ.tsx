import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "What is the typical engagement duration?",
    answer: "Project timelines vary depending on scope. A comprehensive enterprise web application typically ranges from 8 to 16 weeks, while more focused digital products can be delivered in 4 to 6 weeks."
  },
  {
    question: "Do you provide comprehensive post-deployment support?",
    answer: "Yes, we offer strategic Service Level Agreements (SLAs) and dedicated maintenance packages to ensure your digital infrastructure remains secure, updated, and high-performing."
  },
  {
    question: "Can your team modernize legacy enterprise systems?",
    answer: "We specialize in legacy transformation. Our engineers are experts at migrating outdated architectures to modern, scalable tech stacks without interrupting your core business operations."
  },
  {
    question: "How do you ensure the security of our digital assets?",
    answer: "Security is integrated into our entire development lifecycle. We follow industry best practices, including regular security audits, multi-factor authentication, and enterprise-grade encryption standards."
  }
];

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/5 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-8 flex items-center justify-between text-left group"
      >
        <span className="text-xl font-bold text-slate-300 group-hover:text-primary transition-colors pr-8 tracking-tight">{question}</span>
        <div className={`w-10 h-10 shrink-0 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center transition-all duration-300 ${isOpen ? 'rotate-180 bg-primary/20 border-primary/30' : ''}`}>
          <ChevronDown className="w-5 h-5 text-slate-500 group-hover:text-primary" />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="pb-8 text-slate-400 leading-relaxed max-w-3xl text-lg">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQ = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-slate-950/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-1/3">
            <div className="inline-flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-sm mb-6">
              <HelpCircle className="w-4 h-4" />
              Information Hub
            </div>
            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight text-white leading-tight">
              Frequently <br />
              <span className="text-slate-500">Asked Questions</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              We believe in transparency and clear communication. If you have any other questions, our team is always ready to assist.
            </p>
            <div className="mt-12">
               <button className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold hover:bg-white/10 transition-all">
                  Contact Support
               </button>
            </div>
          </div>
          
          <div className="lg:w-2/3">
            <div className="bg-slate-900/40 border border-white/5 rounded-[2.5rem] p-8 md:p-12">
              <div className="divide-y divide-white/5">
                {faqs.map((faq, i) => (
                  <FAQItem key={i} {...faq} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
