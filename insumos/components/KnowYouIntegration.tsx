
import React from 'react';
import AnimatedElement from './AnimatedElement';
import { BrainCircuitIcon, BarChartIcon, UsersIcon } from './icons';

const pillars = [
  {
    icon: <BrainCircuitIcon className="h-10 w-10 text-cyan-500" />,
    title: "Diagnóstico de Estilos Decisórios e Competências",
    description: "Identificamos perfis decisórios (Analítico, Inovador, Pragmático, Diplomático) e mapeamos competências críticas para entender as forças e lacunas de desenvolvimento de cada indivíduo e equipe."
  },
  {
    icon: <BarChartIcon className="h-10 w-10 text-cyan-500" />,
    title: "Suporte Psicométrico e Base Científica",
    description: "Nossa metodologia é fundamentada em uma base científica robusta, garantindo a validade e a confiabilidade dos insights gerados para o desenvolvimento de estratégias de IA centradas no humano."
  },
  {
    icon: <UsersIcon className="h-10 w-10 text-cyan-500" />,
    title: "Desenvolvimento e Performance",
    description: "Com base nos diagnósticos, criamos planos de desenvolvimento personalizados, otimizamos a alocação de equipes em projetos e promovemos uma cultura de alta performance alinhada aos objetivos estratégicos."
  }
];

const KnowYouIntegration: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50 scroll-section">
      <div className="container mx-auto px-6">
        <AnimatedElement className="text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">Integração com KnowYOU: A Inteligência Humana no Centro da IA</h2>
          <p className="text-lg text-slate-600 max-w-4xl mx-auto mb-12">
            O KnowYOU é a ferramenta de People Analytics mais sofisticada do mercado. Nós a utilizamos para coletar, analisar e interpretar dados comportamentais e cognitivos, garantindo que nossas soluções de IA potencializem o que as pessoas têm de melhor.
          </p>
        </AnimatedElement>
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <AnimatedElement key={index} className={`transition-all delay-${index * 150}`}>
              <div className="bg-white p-8 rounded-lg shadow-lg h-full transform transition-transform duration-300 hover:-translate-y-2 border-t-4 border-cyan-400">
                 <div className="mb-6">{pillar.icon}</div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{pillar.title}</h3>
                <p className="text-slate-600">{pillar.description}</p>
              </div>
            </AnimatedElement>
          ))}
        </div>
        <AnimatedElement className="mt-16">
            <div className="text-center bg-slate-100 p-10 rounded-lg">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 max-w-3xl mx-auto">
                    O KnowYOU é 100% customizado para cada pessoa, transformando a gestão de talentos em uma ciência de precisão.
                </h3>
            </div>
        </AnimatedElement>
      </div>
    </section>
  );
};

export default KnowYouIntegration;
