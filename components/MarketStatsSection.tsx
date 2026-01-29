
import React from 'react';
import AnimatedElement from './AnimatedElement';
import { BriefcaseIcon, UsersIcon, ClockIcon, PercentIcon } from './icons';

const stats = [
  { icon: <BriefcaseIcon className="h-10 w-10 text-cyan-400" />, value: "US$ 1,8 TRILHÕES", label: "Potencial de valor agregado pela IA na produtividade global." },
  { icon: <UsersIcon className="h-10 w-10 text-cyan-400" />, value: "9 EM CADA 10", label: "Empresas que investem em IA para obter vantagem competitiva." },
  { icon: <ClockIcon className="h-10 w-10 text-cyan-400" />, value: "40% DAS HORAS", label: "De trabalho que podem ser impactadas pela IA nos próximos 3 anos." },
  { icon: <PercentIcon className="h-10 w-10 text-cyan-400" />, value: "70% DAS EMPRESAS", label: "Que já adotaram alguma forma de IA em seus negócios." },
];

const MarketStatsSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 text-white scroll-section">
      <div className="container mx-auto px-6">
        <AnimatedElement className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">A IA já está remodelando o mercado</h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">Os números mostram que a adoção de IA não é mais uma tendência futura, mas uma realidade presente e um imperativo para a competitividade.</p>
        </AnimatedElement>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AnimatedElement key={index} className={`transition-all delay-${index * 150}`}>
              <div className="bg-slate-800 p-8 rounded-lg shadow-lg text-center h-full border-t-4 border-cyan-500">
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <p className="text-4xl font-extrabold text-white mb-2">{stat.value}</p>
                <p className="text-slate-400">{stat.label}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketStatsSection;
