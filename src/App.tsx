import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { OrbitBackground } from './components/OrbitBackground';
import { Hero } from './components/Hero';
import { ServicesBento } from './components/ServicesBento';
import { Projects } from './components/Projects';
import { Testimonials } from './components/Testimonials';
import { TechStack } from './components/TechStack';

import { WhyChooseUs } from './components/WhyChooseUs';
import { ProcessTimeline } from './components/ProcessTimeline';
import { FAQ } from './components/FAQ';
import { Clients } from './components/Clients';
import { Industries } from './components/Industries';
import { Awards } from './components/Awards';
import { GlobalPresence } from './components/GlobalPresence';
import { FloatingContact } from './components/FloatingContact';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};
// Layout Wrapper
const Layout = ({ children }: { children: React.ReactNode }) => (
  <div className="relative min-h-screen">
    <OrbitBackground />
    <Navbar />
    <main className="relative z-10">{children}</main>
    <FloatingContact />
    <Footer />
  </div>
);

// Pages
const Home = () => (
  <>
    <Hero />
    <Clients />
    <WhyChooseUs />
    <ServicesBento />
    <Projects />
    <Testimonials />
    <Awards />
    <Industries />
    <GlobalPresence />
    <ProcessTimeline />
    <TechStack />
    <FAQ />
    {/* CTA Section */}
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-to-br from-primary/10 to-transparent p-12 md:p-24 rounded-[3rem] border border-white/5 text-center relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
          <h2 className="text-4xl md:text-7xl font-extrabold mb-8 relative z-10 tracking-tight text-white">
            Ready to <span className="text-primary">Scale Your Business?</span>
          </h2>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 relative z-10 leading-relaxed">
            Let's discuss how our technical expertise can help you achieve your business objectives and drive sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 relative z-10">
            <button className="px-10 py-5 rounded-full bg-primary text-white font-bold text-lg hover:bg-primary/90 transition-all shadow-[0_10px_30px_rgba(37,99,235,0.3)]">
              Schedule a Consultation
            </button>
            <button className="px-10 py-5 rounded-full bg-white/5 text-white font-bold text-lg border border-white/10 hover:bg-white/10 transition-all">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  </>
);


const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="pt-32 pb-24 container mx-auto px-6 text-center">
    <h1 className="text-6xl font-black mb-8 glow-text">{title}</h1>
    <p className="text-white/60 text-xl max-w-2xl mx-auto">
      This cosmic portal is currently being engineered. Stay tuned for a stellar experience.
    </p>
  </div>
);

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<PlaceholderPage title="Our Services" />} />
          <Route path="/projects" element={<PlaceholderPage title="Featured Works" />} />
          <Route path="/about" element={<PlaceholderPage title="Our Story" />} />
          <Route path="/contact" element={<PlaceholderPage title="Contact Us" />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
