
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import BentoFeatures from './components/BentoFeatures';
import Highlights from './components/Highlights';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

// Register plugin once outside the component
gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Use gsap.context to manage animations and ensure clean unmounting
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray('.reveal') as HTMLElement[];
      sections.forEach((section) => {
        gsap.fromTo(section, 
          { opacity: 0, y: 50 }, 
          { 
            opacity: 1, 
            y: 0, 
            duration: 1.2, 
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              toggleActions: "play none none none"
            }
          }
        );
      });
    }, containerRef);

    return () => ctx.revert(); // Cleanup all GSAP animations in this context
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen selection:bg-white selection:text-black">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <BentoFeatures />
        <Highlights />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default App;
