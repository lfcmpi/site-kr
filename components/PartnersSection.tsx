
import React from 'react';
import AnimatedElement from './AnimatedElement';

const partners = [
  {
      name: "Belgo Arames",
      domain: "belgo.com.br",
      url: "https://www.belgo.com.br",
      logoUrl: "/logos/belgo-arames.jpeg",
      useFilter: false
  },
  {
      name: "Bridge Holding",
      domain: "bridgeholding.com.br",
      url: "https://bridgeholding.com.br",
      logoUrl: "/logos/bridge-holding.jpeg",
      useFilter: false
  },
  {
      name: "Herculano Mineração",
      domain: "herculanomineracao.com.br",
      url: "https://herculanomineracao.com.br",
      logoUrl: "/logos/herculano-mineracao.jpeg",
      useFilter: false
  },
  {
      name: "Hospital Moinhos de Vento",
      domain: "hospitalmoinhos.org.br",
      url: "https://www.hospitalmoinhos.org.br",
      logoUrl: "/logos/hospital-moinhos-de-vento.png",
      useFilter: false
  },
];

const PartnersSection: React.FC = () => {
  return (
    <section className="bg-slate-950 py-20 border-y border-white/5 scroll-section">
      <div className="container mx-auto px-6">
        <AnimatedElement className="text-center mb-16">
          <h2 className="text-slate-500 font-bold text-xs uppercase tracking-[0.5em] mb-4">
            Parceiros Estratégicos & Clientes
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
            Empresas líderes que confiam na KnowRisk para impulsionar sua transformação digital através da Inteligência Artificial.
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {partners.map((partner) => (
            <AnimatedElement key={partner.name}>
              <a 
                href={partner.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex flex-col items-center justify-center p-6 bg-white/5 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all duration-500 hover:bg-white/[0.08]"
              >
                <div className="h-12 md:h-16 w-full flex items-center justify-center mb-6">
                  <img
                    src={partner.logoUrl}
                    alt={partner.name}
                    className={`max-h-full max-w-[80%] object-contain transition-all duration-500 group-hover:scale-105 ${
                      partner.useFilter
                        ? 'brightness-0 invert opacity-40 group-hover:opacity-100'
                        : 'opacity-80 group-hover:opacity-100'
                    }`}
                  />
                </div>
                <div className="text-center">
                  <span className="block text-white text-[11px] md:text-xs font-bold tracking-widest uppercase mb-1">{partner.name}</span>
                  <span className="block text-cyan-500 text-[9px] md:text-[10px] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">{partner.domain}</span>
                </div>
              </a>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
