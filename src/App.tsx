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

// Scroll to top on route change
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
    <Industries />
    <ProcessTimeline />
    <TechStack />
    <Testimonials />
    <FAQ />
    {/* CTA Section */}
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="glass-card p-12 md:p-24 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <h2 className="text-4xl md:text-6xl font-black mb-8 relative z-10">Ready to Launch Your <br /> <span className="glow-text">Digital Vision?</span></h2>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 relative z-10">
            Join the orbit of world-class brands. Let's engineer something extraordinary together.
          </p>
          <button className="btn-primary scale-110 relative z-10">
            Get Started Now
          </button>
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
