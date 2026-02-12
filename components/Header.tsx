
import React, { useEffect, useState } from 'react';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const deliveryUrl = "https://deliverydireto.com.br/pizzaria-siciliana/pizzaria-siciliana";

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
      <nav className={`mx-auto max-w-6xl px-6 flex items-center justify-between transition-all duration-500 ${scrolled ? 'glass rounded-full py-3 px-8 shadow-2xl scale-[0.98]' : ''}`}>
        <div className="flex items-center gap-2">
          <span className="text-2xl font-display font-bold tracking-tighter text-white">SICILIANA</span>
          <div className="w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></div>
        </div>

        <div className="hidden md:flex items-center gap-10 text-sm font-medium tracking-wide uppercase">
          <a href={deliveryUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors text-gray-400">Cardápio</a>
          <a href="#experiencia" className="hover:text-white transition-colors text-gray-400">Experiência</a>
          <a href="#clientes" className="hover:text-white transition-colors text-gray-400">Nossos Clientes ❤</a>
        </div>

        <a 
          href={deliveryUrl}
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white text-black text-xs font-bold px-6 py-3 rounded-full uppercase tracking-widest hover:bg-gray-200 transition-all active:scale-95 shadow-lg shadow-white/5"
        >
          Pedir Online
        </a>
      </nav>
    </header>
  );
};

export default Header;
