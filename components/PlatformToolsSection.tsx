
import React, { useState } from 'react';
import AnimatedElement from './AnimatedElement';
import { HeartPulseIcon, MountainIcon, GraduationCapIcon, ShoppingCartIcon, IndustryIcon, CheckIcon } from './icons';

const industries = [
  {
    id: 'saude',
    name: 'Saúde',
    icon: <HeartPulseIcon className="w-5 h-5 mr-2" />,
    title: 'IA para uma Saúde Preditiva e Personalizada',
    description: 'Otimizamos desde a gestão hospitalar até o diagnóstico de precisão, melhorando a eficiência operacional e os resultados para os pacientes.',
    points: [
      'Análise preditiva de doenças e riscos.',
      'Otimização de agendamentos e alocação de recursos.',
      'Personalização de tratamentos com base em dados.',
      'Automação de laudos e triagem inteligente.'
    ],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 'mineracao',
    name: 'Mineração',
    icon: <MountainIcon className="w-5 h-5 mr-2" />,
    title: 'Inteligência para uma Mineração Segura e Eficiente',
    description: 'Aplicamos IA para prever falhas, otimizar a extração e garantir a segurança dos colaboradores, transformando dados em produtividade.',
    points: [
      'Manutenção preditiva de equipamentos críticos.',
      'Otimização de rotas e logística de transporte.',
      'Análise geológica inteligente para prospecção.',
      'Monitoramento de segurança em tempo real.'
    ],
    image: '/imagens/mineracao.png'
  },
  {
    id: 'educacao',
    name: 'Educação',
    icon: <GraduationCapIcon className="w-5 h-5 mr-2" />,
    title: 'Revolucionando o Aprendizado com IA',
    description: 'Criamos experiências de aprendizado adaptativas, tutores digitais e ferramentas que personalizam a jornada educacional de cada aluno.',
    points: [
      'Tutores de IA para suporte 24/7.',
      'Trilhas de aprendizagem personalizadas.',
      'Análise de desempenho para identificar dificuldades.',
      'Automação de processos administrativos.'
    ],
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 'varejo',
    name: 'Varejo',
    icon: <ShoppingCartIcon className="w-5 h-5 mr-2" />,
    title: 'Inteligência para o Varejo do Futuro',
    description: 'Desde a previsão de demanda até a personalização da experiência do cliente, usamos IA para aumentar as vendas e a fidelidade à marca.',
    points: [
      'Previsão de demanda e gestão de estoque.',
      'Recomendação de produtos personalizados.',
      'Otimização de preços e promoções.',
      'Análise de sentimento do consumidor.'
    ],
    image: 'https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 'industria',
    name: 'Indústria',
    icon: <IndustryIcon className="w-5 h-5 mr-2" />,
    title: 'Automação Inteligente para a Indústria 4.0',
    description: 'Implementamos soluções de IA para otimizar a linha de produção, controlar a qualidade e automatizar processos complexos.',
    points: [
      'Controle de qualidade automatizado com visão computacional.',
      'Otimização da cadeia de suprimentos (supply chain).',
      'Robótica e automação de processos (RPA).',
      'Eficiência energética e produção sustentável.'
    ],
    image: 'https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1170&q=80'
  }
];

const IndustrySolutionsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(industries[0].id);
  const activeIndustry = industries.find(ind => ind.id === activeTab);

  return (
    <section id="soluções" className="py-16 md:py-24 bg-slate-50 scroll-section">
      <div className="container mx-auto px-6 max-w-6xl">
        <AnimatedElement className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Soluções Especializadas por Indústria</h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">Expertise técnica para os desafios específicos de cada setor.</p>
        </AnimatedElement>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {industries.map(industry => (
            <button
              key={industry.id}
              onClick={() => setActiveTab(industry.id)}
              className={`flex items-center justify-center font-bold py-2.5 px-5 rounded-full transition-all duration-300 text-xs md:text-sm border ${
                activeTab === industry.id
                  ? 'bg-cyan-600 border-cyan-600 text-white shadow-lg'
                  : 'bg-white border-slate-200 text-slate-500 hover:border-cyan-400 hover:text-cyan-600'
              }`}
            >
              {industry.icon} {industry.name}
            </button>
          ))}
        </div>

        {activeIndustry && (
          <AnimatedElement key={activeIndustry.id} className="bg-white p-6 md:p-10 rounded-2xl shadow-xl grid md:grid-cols-2 gap-8 items-center border border-slate-100">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 leading-tight">{activeIndustry.title}</h3>
              <p className="text-sm md:text-base text-slate-600 mb-6 leading-relaxed">{activeIndustry.description}</p>
              <ul className="space-y-2.5">
                {activeIndustry.points.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-cyan-50 rounded-full p-1 mr-3 mt-0.5">
                        <CheckIcon className="h-4 w-4 text-cyan-600 flex-shrink-0" />
                    </div>
                    <span className="text-sm md:text-base text-slate-700 font-medium">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 md:order-2 relative h-48 md:h-[400px] rounded-xl overflow-hidden shadow-inner">
                <img 
                  src={activeIndustry.image} 
                  alt={activeIndustry.name} 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            </div>
          </AnimatedElement>
        )}
      </div>
    </section>
  );
};

export default IndustrySolutionsSection;
