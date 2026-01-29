
import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 15,
        y: (e.clientY / window.innerHeight - 0.5) * 15,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
      <>
        <section id="hero" className="bg-[#0F172A] min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-12">
          {/* Background Image Layer */}
          <div 
            className="absolute inset-0 z-0 transition-transform duration-300 ease-out pointer-events-none opacity-25"
            style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px) scale(1.05)` }}
          >
            <img 
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=2400&q=80" 
              alt="Neural Network Background" 
              className="w-full h-full object-cover mix-blend-screen"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] via-transparent to-[#0B1120]"></div>
          </div>

          {/* Glowing Accents */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <div className="absolute top-[15%] left-[5%] w-[45%] h-[45%] bg-cyan-500/10 blur-[180px] rounded-full animate-pulse"></div>
            <div className="absolute bottom-[10%] right-[5%] w-[45%] h-[45%] bg-indigo-500/10 blur-[180px] rounded-full animate-pulse [animation-delay:3s]"></div>
            <div className="absolute inset-0 bg-grid-slate-800 [mask-image:radial-gradient(ellipse_at_center,white,transparent{75%)] opacity-20"></div>
          </div>
          
          <div className="container mx-auto px-6 text-center z-10 relative">
            {/* Minimal Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-12 animate-fade-in">
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]"></div>
                <span className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.3em]">IA & Inteligência Humana</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-10 tracking-tight max-w-5xl mx-auto">
              KnowRisk: Transformando <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400">
                Inteligência Humana
              </span> em <br />
              Vantagem Competitiva
            </h1>
            
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-14 leading-relaxed font-medium">
              Soluções de Inteligência Artificial baseadas em ciência para os desafios complexos da nova economia global.
            </p>
            
            <div className="flex flex-col items-center gap-8">
              <a 
                href="#soluções" 
                className="group relative flex items-center gap-4 bg-cyan-600 text-white font-bold py-5 px-10 rounded-full hover:bg-cyan-500 transition-all duration-500 shadow-[0_0_40px_rgba(8,145,178,0.3)] hover:shadow-[0_0_60px_rgba(8,145,178,0.5)]"
              >
                Conheça o KnowYou
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>

            {/* Subtle Mouse Scroll */}
            <div className="mt-20 opacity-20">
                <div className="w-5 h-9 border-2 border-slate-400 rounded-full mx-auto flex justify-center pt-1.5">
                    <div className="w-1 h-2 bg-slate-400 rounded-full animate-scroll-dot"></div>
                </div>
            </div>
          </div>
        </section>
        
        <style dangerouslySetInnerHTML={{ __html: `
            @keyframes scroll-dot {
                0% { transform: translateY(0); opacity: 1; }
                100% { transform: translateY(12px); opacity: 0; }
            }
            .animate-scroll-dot {
                animation: scroll-dot 2s infinite;
            }
            .animate-fade-in {
                animation: fadeIn 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
        `}} />
      </>
  );
};

export default Hero;
