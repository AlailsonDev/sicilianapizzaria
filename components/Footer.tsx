
import React from 'react';

const Footer: React.FC = () => {
  const deliveryUrl = "https://deliverydireto.com.br/pizzaria-siciliana/pizzaria-siciliana";

  return (
    <footer className="py-20 border-t border-white/5 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <div className="max-w-xs">
          <div className="text-3xl font-display font-bold mb-6">SICILIANA</div>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            Av. Bernardo Vieira de Melo, 1250 - Piedade, Jaboatão dos Guararapes - PE, 54410-010
          </p>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/sicilianarestaurante" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white hover:text-black transition-all">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-16 gap-y-4 text-sm">
          <div className="flex flex-col gap-4">
            <span className="font-bold uppercase tracking-widest text-gray-500 mb-2">Pizzaria</span>
            <a href={deliveryUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white text-gray-400">Cardápio</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-bold uppercase tracking-widest text-gray-500 mb-2">Contato</span>
            <a href="tel:8133630904" className="hover:text-white text-gray-400">(81) 3363-0904</a>
            <a href="#" className="hover:text-white text-gray-400">WhatsApp</a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-gray-600 gap-4">
        <span>&copy; 2026 Pizzaria Siciliana. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
