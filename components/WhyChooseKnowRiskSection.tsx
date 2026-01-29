
import React from 'react';
import AnimatedElement from './AnimatedElement';
import { BrainCircuitIcon, TrendingUpIcon, UsersIcon, LayersIcon } from './icons';

const differentiators = [
  {
    icon: <TrendingUpIcon className="h-10 w-10 text-cyan-400" />,
    title: "Vantagem Estratégica",
    description: "Não apenas implementamos IA, nós a integramos à sua estratégia de negócios para criar vantagens competitivas duradouras e maximizar seu ROI."
  },
  {
    icon: <BrainCircuitIcon className="h-10 w-10 text-cyan-400" />,
    title: "Expertise Profunda em IA",
    description: "Nossa equipe de mestres e doutores está na vanguarda da pesquisa em IA, aplicando as técnicas mais avançadas para resolver seus desafios mais complexos."
  },
  {
    icon: <UsersIcon className="h-10 w-10 text-cyan-400" />,
    title: "Abordagem Centrada no Cliente",
    description: "Trabalhamos em um modelo de parceria colaborativa. Seu sucesso é nosso objetivo, e co-criamos soluções que se alinham perfeitamente às suas necessidades."
  },
  {
    icon: <LayersIcon className="h-10 w-10 text-cyan-400" />,
    title: "Experiência Multissetorial",
    description: "Nossas soluções são validadas em setores como saúde, mineração, engenharia e educação. Trazemos um conhecimento amplo e adaptável para o seu desafio."
  }
];

const WhyChooseKnowRiskSection: React.FC = () => {
  return (
    <section id="why-choose-us" className="py-20 bg-white scroll-section">
      <div className="container mx-auto px-6">
        <AnimatedElement className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Por que escolher a KnowRISK?</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">Vamos além da tecnologia para entregar transformação real e resultados de negócio mensuráveis.</p>
        </AnimatedElement>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {differentiators.map((item, index) => (
            <AnimatedElement key={index} className={`transition-all delay-${index * 100}`}>
              <div className="bg-slate-50 p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full border-t-4 border-transparent hover:border-cyan-400">
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-slate-900">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseKnowRiskSection;
