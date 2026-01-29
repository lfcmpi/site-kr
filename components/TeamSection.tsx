
import React from 'react';
import { LinkedInIcon } from './icons';
import AnimatedElement from './AnimatedElement';

const teamMembers = [
  {
    name: "Voloí Borges",
    title: "CEO",
    role: "Engenheiro",
    image: "https://picsum.photos/200/200?random=3",
    linkedin: "#"
  },
  {
    name: "Israel Guerra",
    title: "Mestre",
    role: "Data Scientist & AI Dev",
    image: "https://picsum.photos/200/200?random=4",
    linkedin: "#"
  },
  {
    name: "Felipe (π) Martins",
    title: "Mestre",
    role: "Cientista da Computação",
    image: "https://picsum.photos/200/200?random=5",
    linkedin: "#"
  },
  {
    name: "Renata Martins",
    title: "Data Scientist",
    role: "Ciência da Computação",
    image: "https://picsum.photos/200/200?random=6",
    linkedin: "#"
  },
  {
    name: "Mauricio",
    title: "Doutor",
    role: "AI & Robotics Specialist",
    image: "https://picsum.photos/200/200?random=7",
    linkedin: "#"
  },
  {
    name: "Ismael",
    title: "Especialista",
    role: "Cloud & AI Architect",
    image: "https://picsum.photos/200/200?random=8",
    linkedin: "#"
  },
];

const TeamSection: React.FC = () => {
  return (
    <section id="equipe" className="py-20 bg-slate-900 scroll-section">
      <div className="container mx-auto px-6">
        <AnimatedElement className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Nossos AI Stars ✨</h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">Somos mestres, doutores, pós-doutores, empreendedores, empresários e professores altamente qualificados.</p>
        </AnimatedElement>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <AnimatedElement key={index} className={`transition-all delay-${(index % 3) * 150}`}>
                <div className="bg-slate-800 rounded-lg p-6 text-center shadow-lg transform hover:-translate-y-2 transition-transform duration-300 group h-full">
                <img src={member.image} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-slate-700 group-hover:border-cyan-400 transition-colors duration-300" />
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-cyan-400 font-semibold">{member.title}</p>
                <p className="text-slate-400 mb-4">{member.role}</p>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="inline-block text-slate-400 hover:text-white transition-colors duration-300">
                    <LinkedInIcon className="w-6 h-6" />
                </a>
                </div>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;