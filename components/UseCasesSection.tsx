
import React from 'react';
import AnimatedElement from './AnimatedElement';
import { CogIcon, FileTextIcon, IndustryIcon, WorkflowIcon, UsersIcon, CompassIcon, GraduationCapIcon, BrainCircuitIcon, BarChartIcon } from './icons';

const useCases = [
  { icon: <CogIcon className="w-8 h-8 text-cyan-500" />, title: "Otimização de Manutenção", description: "Redução de custos e aumento da disponibilidade de máquinas com manutenção preditiva." },
  { icon: <FileTextIcon className="w-8 h-8 text-cyan-500" />, title: "Propostas Automatizadas", description: "Criação de propostas técnicas e comerciais enriquecidas por IA, acelerando o ciclo de vendas." },
  { icon: <IndustryIcon className="w-8 h-8 text-cyan-500" />, title: "Otimização da Produção", description: "Melhora da linha de produção através da reavaliação de processos e automação inteligente." },
  { icon: <WorkflowIcon className="w-8 h-8 text-cyan-500" />, title: "Melhoria de Processos", description: "Identificação de gargalos e otimização de fluxos de trabalho em diversas áreas da empresa." },
  { icon: <UsersIcon className="w-8 h-8 text-cyan-500" />, title: "Performance da Equipe", description: "Aumento da produtividade e eficácia da comunicação com ferramentas de análise de performance." },
  { icon: <CompassIcon className="w-8 h-8 text-cyan-500" />, title: "Alinhamento Estratégico", description: "Avaliação e adequação de equipes e recursos para garantir o alinhamento com os objetivos da empresa." },
  { icon: <GraduationCapIcon className="w-8 h-8 text-cyan-500" />, title: "Treinamento Customizado", description: "Programas de capacitação hiper-customizados para desenvolver habilidades de alta eficiência." },
  { icon: <BrainCircuitIcon className="w-8 h-8 text-cyan-500" />, title: "Tutor Digital", description: "Maximiza o desempenho e a aprendizagem em instituições de ensino com tutoria inteligente." },
  { icon: <BarChartIcon className="w-8 h-8 text-cyan-500" />, title: "Análise de Tendências", description: "Uso de múltiplas variáveis para gerar insights avançados sobre mercado e comportamento do consumidor." },
];

const UseCasesSection: React.FC = () => {
  return (
    <section className="py-20 bg-white scroll-section">
      <div className="container mx-auto px-6">
        <AnimatedElement className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Impacto Real: Casos de Uso</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">Soluções de IA com impacto real, transformando diversas áreas de negócio.</p>
        </AnimatedElement>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {useCases.map((item, index) => (
            <AnimatedElement key={index} className={`transition-all delay-${(index % 3) * 150}`}>
                <div className="bg-slate-50 p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 border border-transparent hover:border-cyan-200 transform hover:-translate-y-1 h-full flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-cyan-500/10 flex items-center justify-center mb-6">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-lg text-slate-800 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-sm">{item.description}</p>
                </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
