
import React from 'react';

const HighlightCard: React.FC<{ title: string; desc: string; img: string; price?: string }> = ({ title, desc, img, price }) => (
  <div className="group relative rounded-3xl overflow-hidden aspect-[4/5] reveal">
    <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-8 flex flex-col justify-end">
      <h3 className="text-2xl font-display mb-1">{title}</h3>
      <p className="text-gray-400 text-sm mb-4 line-clamp-2">{desc}</p>
      <div className="flex items-center justify-between">
        {price && <span className="text-lg font-bold text-white">{price}</span>}
        <button className="bg-white/10 hover:bg-white text-white hover:text-black p-3 rounded-full transition-all backdrop-blur-md">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path></svg>
        </button>
      </div>
    </div>
  </div>
);

const Highlights: React.FC = () => {
  const deliveryUrl = "https://deliverydireto.com.br/pizzaria-siciliana/pizzaria-siciliana";

  return (
    <section className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 reveal">
          <div>
            <h2 className="text-4xl md:text-6xl font-display mb-4">Favoritos da Casa</h2>
            <p className="text-gray-400">Uma seleção dos pratos que nos tornaram referência em Jaboatão.</p>
          </div>
          <a href={deliveryUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-bold uppercase tracking-widest border-b border-white pb-1 hover:text-red-500 hover:border-red-500 transition-all">Ver Cardápio Completo</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <HighlightCard 
            title="Pizza de Lombinho" 
            desc="Lombinho canadense com o legítimo Catupiry e cebolas caramelizadas."
            img="https://images.unsplash.com/photo-1571066811402-9d8d77596fab?auto=format&fit=crop&q=80&w=800"
          />
          <HighlightCard 
            title="Lasanha Clássica" 
            desc="Massa artesanal intercalada com nosso ragu de carne e molho bechamel aveludado."
            img="https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=800"
          />
          <HighlightCard 
            title="Parmegiana de Filé" 
            desc="Filé mignon empanado, gratinado com muçarela e nosso molho de tomates frescos."
            img="https://images.unsplash.com/photo-1627207644206-a2040d60ecad?auto=format&fit=crop&q=80&w=800"
          />
          <HighlightCard 
            title="Couvert Siciliano" 
            desc="Mini torradas, manteiga temperada, patê de presunto e picles artesanal."
            img="https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&q=80&w=800"
          />
        </div>
      </div>
    </section>
  );
};

export default Highlights;
