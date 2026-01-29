
import React from 'react';
import { CheckIcon, LightbulbIcon, CodeIcon, WrenchIcon } from './icons';
import AnimatedElement from './AnimatedElement';

const developmentSteps = [
  {
    icon: <CheckIcon className="h-5 w-5 text-slate-800" />,
    title: "Discovery & Estratégia",
    description: "Imersão profunda no seu negócio para alinhar os objetivos estratégicos com o potencial da IA."
  },
  {
    icon: <LightbulbIcon className="h-5 w-5 text-slate-800" />,
    title: "Mapeamento de Oportunidades",
    description: "Identificamos os casos de uso de maior impacto, traduzindo desafios em soluções viáveis."
  },
    {
    icon: <CodeIcon className="h-5 w-5 text-slate-800" />,
    title: "Validação e Prova de Conceito",
    description: "Avaliamos seus dados e desenvolvemos um protótipo para validar a eficácia da solução."
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-slate-800"><path d="M12 2l-3.5 3.5 3.5 3.5 3.5-3.5L12 2zM5.5 9L2 12.5 5.5 16 9 12.5 5.5 9zM18.5 9l-3.5 3.5 3.5 3.5 3.5-3.5L18.5 9zM12 22l-3.5-3.5 3.5-3.5 3.5 3.5L12 22z"/></svg>,
    title: "Desenvolvimento e Integração",
    description: "Co-criamos a solução de IA customizada, integrando-a de forma transparente aos seus sistemas."
  },
  {
    icon: <WrenchIcon className="h-5 w-5 text-slate-800" />,
    title: "Implementação e Monitoramento",
    description: "Estruturamos o plano de rollout com governança, métricas de sucesso e acompanhamento contínuo."
  },
  {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-slate-800"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
    title: "Capacitação e Adoção Cultural",
    description: "Preparamos sua equipe para extrair o máximo valor da tecnologia, garantindo a adoção efetiva."
  },
];

const CustomAIDevelopment: React.FC = () => {
  return (
    <section id="implementar-ia" className="py-12 md:py-16 bg-slate-50 scroll-section">
      <div className="container mx-auto px-6 max-w-5xl">
        <AnimatedElement className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3 tracking-tight">Nosso Processo Colaborativo</h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto">Uma jornada estruturada para garantir o impacto máximo da IA em sua organização.</p>
        </AnimatedElement>
        
        <div className="relative">
            {/* Timeline line - refined opacity and width */}
            <div className="absolute left-6 top-2 bottom-2 w-0.5 bg-slate-200 md:left-1/2 md:-translate-x-1/2" aria-hidden="true"></div>
            
            <div className="space-y-3 md:space-y-4">
                {developmentSteps.map((step, index) => (
                  <AnimatedElement key={index}>
                    <div className="relative flex items-center md:grid md:grid-cols-2 md:gap-x-12">
                        {/* Content Card - more compact padding and text */}
                        <div className={`pl-16 md:pl-0 ${index % 2 === 0 ? 'md:col-start-2' : 'md:col-start-1 md:text-right'}`}>
                            <div className="p-4 bg-white rounded-xl shadow-sm border border-slate-100 hover:border-cyan-200 transition-colors duration-300">
                                <h3 className="text-base md:text-lg font-bold text-slate-800 leading-tight">{step.title}</h3>
                                <p className="text-slate-600 mt-1 text-xs md:text-sm leading-relaxed">{step.description}</p>
                            </div>
                        </div>

                        {/* Circle in the middle - slightly smaller */}
                        <div className="absolute top-1/2 -translate-y-1/2 left-6 md:left-1/2 -translate-x-1/2 z-10">
                            <div className="bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md border-2 border-slate-100 group-hover:border-cyan-400 transition-colors">
                                {step.icon}
                            </div>
                        </div>
                    </div>
                  </AnimatedElement>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default CustomAIDevelopment;
