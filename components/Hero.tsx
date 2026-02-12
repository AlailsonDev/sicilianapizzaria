
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subTitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Using gsap.context for scoped animations and automatic cleanup
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.fromTo(titleRef.current, 
        { opacity: 0, y: 100, skewY: 7 }, 
        { opacity: 1, y: 0, skewY: 0, duration: 1.5, ease: "power4.out" }
      ).fromTo(subTitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" },
        "-=0.8"
      ).fromTo(ctaRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.7)" },
        "-=0.5"
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-[#050505] z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Pizzeria Background" 
          className="w-full h-full object-cover grayscale-[0.2]"
        />
      </div>

      <div className="relative z-20 text-center max-w-4xl px-6">
        <h1 
          ref={titleRef}
          className="text-5xl md:text-8xl font-display font-bold leading-[0.9] tracking-tighter mb-8 text-gradient"
        >
          Tradição Siciliana, <br />
          <span className="italic">Alma Urbana.</span>
        </h1>
        
        <p 
          ref={subTitleRef}
          className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          O autêntico sabor da Itália em Piedade. Massas artesanais e pizzas feitas com alma para quem não abre mão do excepcional.
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="https://deliverydireto.com.br/pizzaria-siciliana/pizzaria-siciliana" 
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-10 py-5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-full transition-all overflow-hidden"
          >
            <span className="relative z-10 uppercase tracking-widest text-sm">Faça seu pedido agora!</span>
            <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-white/10"></div>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
