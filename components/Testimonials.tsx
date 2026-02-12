
import React from 'react';

const reviews = [
  {
    text: "Um ótimo lugar pra comer pizza e massa com ótimas bebidas. O ambiente é sofisticado sem ser pretensioso.",
    author: "Ricardo Silveira",
    role: "Local Guide"
  },
  {
    text: "As opções de carnes brancas e peixes são surpreendentes. A carta de vinhos atende muito bem!",
    author: "Marina Costa",
    role: "Cliente Fiel"
  },
  {
    text: "Delivery que realmente funciona. Chegou quente e a massa estava impecável. Indico a de Lombinho.",
    author: "João Pedro",
    role: "Via Delivery"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="clientes" className="py-32 px-6 scroll-mt-24">
      <div className="max-w-7xl mx-auto text-center mb-16 reveal">
        <h2 className="text-4xl md:text-6xl font-display mb-6">O que dizem os <span className="italic">Appassionati</span></h2>
        <div className="flex items-center justify-center gap-1 text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
          ))}
          <span className="text-white ml-2 font-bold">4.6/5.0</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {reviews.map((rev, i) => (
          <div key={i} className="glass p-10 rounded-[2.5rem] flex flex-col justify-between reveal">
            <div className="mb-8">
              <svg className="w-10 h-10 text-white/10 mb-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H16.017C14.9124 8 14.017 7.10457 14.017 6V5C14.017 3.89543 14.9124 3 16.017 3H19.017C21.2261 3 23.017 4.79086 23.017 7V15C23.017 18.866 19.883 22 16.017 22H14.017V21ZM1 15V9C1 5.13401 4.13401 2 8 2H10V3H8C6.89543 3 6 3.89543 6 5V6C6 7.10457 6.89543 8 8 8H11C11.5523 8 12 8.44772 12 9V15C12 18.866 8.86599 22 5 22H3V21H5C6.10457 21 7 20.1046 7 19H4C2.34315 19 1 17.6569 1 16V15Z"></path></svg>
              <p className="text-lg leading-relaxed italic text-gray-300">"{rev.text}"</p>
            </div>
            <div>
              <p className="font-bold text-white uppercase tracking-wider text-sm">{rev.author}</p>
              <p className="text-gray-500 text-xs">{rev.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
