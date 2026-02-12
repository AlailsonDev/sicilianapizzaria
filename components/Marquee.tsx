
import React from 'react';

const Marquee: React.FC = () => {
  return (
    <section className="py-20 border-y border-white/5 overflow-hidden">
      <div className="flex whitespace-nowrap gap-12 items-center animate-marquee hover:pause">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex shrink-0 items-center gap-12">
            <span className="text-2xl font-display italic text-gray-500">4.6 Estrelas no Google</span>
            <div className="w-2 h-2 rounded-full bg-red-600"></div>
            <span className="text-2xl font-display italic text-gray-500">1.500+ Avaliações Reais</span>
            <div className="w-2 h-2 rounded-full bg-red-600"></div>
            <span className="text-2xl font-display italic text-gray-500">Entrega Expressa</span>
            <div className="w-2 h-2 rounded-full bg-red-600"></div>
            <span className="text-2xl font-display italic text-gray-500">Ingredientes Italianos</span>
            <div className="w-2 h-2 rounded-full bg-red-600"></div>
            <span className="text-2xl font-display italic text-gray-500">Cocktails Autorais</span>
            <div className="w-2 h-2 rounded-full bg-red-600"></div>
          </div>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Marquee;
