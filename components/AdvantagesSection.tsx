
import React from 'react';
import { WrenchIcon, BarChartIcon, MessageCircleIcon } from './icons';
import AnimatedElement from './AnimatedElement';

const advantages = [
  {
    icon: <WrenchIcon className="h-10 w-10 text-cyan-400" />,
    title: "Software e Automação Sob Medida",
    description: "Desenvolvemos softwares e automatizamos processos que eliminam tarefas manuais, integrando sistemas para otimizar recursos em tempo real."
  },
  {
    icon: <BarChartIcon className="h-10 w-10 text-cyan-400" />,
    title: "Inteligência Preditiva e Causal",
    description: "Vamos além dos dashboards. Nossas ferramentas de IA identificam as causas-raízes dos problemas e preveem cenários para decisões mais seguras."
  },
  {
    icon: <MessageCircleIcon className="h-10 w-10 text-cyan-400" />,
    title: "Sistemas Cognitivos e Personalizados",
    description: "Criamos softwares com IA que oferecem experiências únicas, com comunicação que se adapta ao perfil de cada usuário em escala."
  }
];

const AdvantagesSection: React.FC = () => {
  return (
    <section id="vantagens" className="py-20 bg-slate-900 text-white scroll-section">
      <div className="container mx-auto px-6">
        <AnimatedElement className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Software e Automação com IA para Resultados Reais</h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">Nós não entregamos apenas tecnologia. Construímos as ferramentas e automatizamos os processos que geram resultados de negócio mensuráveis.</p>
        </AnimatedElement>
        <div className="grid md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <AnimatedElement key={index} className={`transition-all delay-${index * 150}`}>
              <div className="bg-slate-800 p-8 rounded-lg shadow-lg border border-slate-700 hover:border-cyan-400 transition-all duration-300 transform hover:-translate-y-2 h-full">
                <div className="mb-6">{advantage.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-white">{advantage.title}</h3>
                <p className="text-slate-400">{advantage.description}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
