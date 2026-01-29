
import React from 'react';
import AnimatedElement from './AnimatedElement';
import { QuoteIcon } from './icons';

const testimonials = [
  {
    quote: "A parceria com a KnowRisk foi um divisor de águas. A solução de manutenção preditiva aumentou a disponibilidade dos nossos equipamentos em 20% e reduziu custos operacionais de forma significativa.",
    author: "Diretor de Inovação",
    company: "Indústria de Mineração"
  },
  {
    quote: "A capacidade da equipe em traduzir nossos desafios complexos de gestão de pessoas em uma solução de IA prática foi impressionante. O alinhamento estratégico das equipes melhorou drasticamente.",
    author: "Gerente de RH",
    company: "Setor de Saúde"
  },
  {
    quote: "O tutor de IA generativa transformou a maneira como nossos alunos aprendem. O engajamento aumentou e conseguimos oferecer suporte personalizado em uma escala que antes era impossível.",
    author: "Coordenador Pedagógico",
    company: "Instituição de Ensino"
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-slate-900 text-white scroll-section">
      <div className="container mx-auto px-6">
        <AnimatedElement className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">O que nossos parceiros dizem</h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">Resultados reais contados por quem vive a transformação no dia a dia.</p>
        </AnimatedElement>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedElement key={index} className={`transition-all delay-${index * 150}`}>
              <div className="bg-slate-800 p-8 rounded-lg shadow-lg border border-slate-700 flex flex-col h-full">
                <QuoteIcon className="h-10 w-10 text-cyan-400 mb-6" />
                <p className="text-slate-300 italic mb-6 flex-grow">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold text-white">{testimonial.author}</p>
                  <p className="text-slate-400">{testimonial.company}</p>
                </div>
              </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
