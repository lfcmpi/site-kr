
import React from 'react';
import AnimatedElement from './AnimatedElement';
import { Logo } from './Logo';

const AIImperativeSection: React.FC = () => {
  return (
    <section className="py-20 bg-white scroll-section">
      <div className="container mx-auto px-6">
        <AnimatedElement className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">O Imperativo da IA na Nova Economia</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">A IA não é mais uma opção, é a condição para a relevância e competitividade no mercado digital.</p>
        </AnimatedElement>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-8 p-6 border-l-4 border-teal-500 bg-slate-50 rounded-r-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">A Nova Fronteira da Competição</h3>
              <p className="text-slate-600">O risco não vem de concorrentes tradicionais, mas de empresas que utilizam softwares de IA e automações para operar com máxima eficiência e inteligência de mercado.</p>
            </div>
            <div className="p-6 border-l-4 border-cyan-400 bg-slate-50 rounded-r-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Evolução Digital Essencial</h3>
              <p className="text-slate-600">Assim como a internet mudou tudo, a automação inteligente de processos com IA é a nova fronteira. Ignorá-la é arriscar a obsolescência.</p>
            </div>
          </div>
          <div className="bg-slate-100 p-8 rounded-lg shadow-lg">
             <div className="flex justify-center mb-6">
                <Logo className="h-12 text-slate-900" />
             </div>
             <p className="text-center text-slate-600 mb-6 font-semibold">Nós guiamos sua empresa em cada etapa da jornada, transformando desafios em oportunidades de crescimento acelerado.</p>
             <div className="space-y-4">
                <div className="bg-white p-4 rounded-md flex items-center space-x-4 shadow-sm">
                    <div className="bg-cyan-100 text-cyan-500 p-3 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </div>
                    <span className="text-xl font-semibold text-slate-800">Avaliamos</span>
                </div>
                <div className="bg-white p-4 rounded-md flex items-center space-x-4 shadow-sm">
                    <div className="bg-cyan-100 text-cyan-500 p-3 rounded-full">
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" /></svg>
                    </div>
                    <span className="text-xl font-semibold text-slate-800">Implementamos</span>
                </div>
                <div className="bg-white p-4 rounded-md flex items-center space-x-4 shadow-sm">
                    <div className="bg-cyan-100 text-cyan-500 p-3 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    </div>
                    <span className="text-xl font-semibold text-slate-800">Treinamos</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIImperativeSection;
