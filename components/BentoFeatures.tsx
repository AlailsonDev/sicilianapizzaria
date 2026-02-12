
import React from 'react';

const BentoFeatures: React.FC = () => {
  return (
    <section id="experiencia" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-24">
      <div className="mb-16 reveal">
        <h2 className="text-4xl md:text-6xl font-display mb-4">A Experiência <span className="italic">Siciliana</span></h2>
        <p className="text-gray-400 max-w-xl">Combinamos hospitalidade siciliana com a vibração de Jaboatão para criar algo verdadeiramente único.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-4 h-auto md:h-[600px]">
        {/* Main large card */}
        <div className="md:col-span-2 md:row-span-2 glass rounded-3xl p-10 relative overflow-hidden flex flex-col justify-end group reveal">
          <img 
            src="https://images.unsplash.com/photo-1593504049359-74330189a345?auto=format&fit=crop&q=80&w=1000" 
            alt="Pizza oven" 
            className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:scale-110 transition-transform duration-1000"
          />
          <div className="relative z-10">
            <span className="bg-red-600 text-[10px] font-bold px-3 py-1 rounded-full uppercase mb-4 inline-block">Mestre Pizzaiolo</span>
            <h3 className="text-4xl font-display mb-2">Massa de Longa Fermentação</h3>
            <p className="text-gray-300 max-w-md">Nossas pizzas descansam por 48h, garantindo leveza extrema e sabor acentuado que derrete na boca.</p>
          </div>
        </div>

        {/* Small card 1 */}
        <div className="glass rounded-3xl p-8 flex flex-col justify-center items-start reveal">
          <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
            <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <h4 className="text-xl font-display mb-2">Delivery Impecável</h4>
          <p className="text-sm text-gray-400">Entrega dentro do prazo garantida, para sua pizza chegar exatamente como saiu do forno.</p>
        </div>

        {/* Small card 2 */}
        <div className="glass rounded-3xl p-8 flex flex-col justify-center items-start reveal">
          <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
            <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <h4 className="text-xl font-display mb-2">Kids Friendly</h4>
          <p className="text-sm text-gray-400">Cardápio infantil dedicado e ambiente acolhedor para toda a família desfrutar o melhor da Itália.</p>
        </div>
      </div>
    </section>
  );
};

export default BentoFeatures;
