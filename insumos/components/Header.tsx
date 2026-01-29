
import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';

interface HeaderProps {
    isMenuOpen: boolean;
    setIsMenuOpen: (isOpen: boolean) => void;
}

const navLinks = [
    { label: "Soluções", href: "#soluções" },
    { label: "Tecnologia", href: "#why-choose-us" },
    { label: "Clientes", href: "#vantagens" },
    { label: "Contato", href: "#contato" },
];

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const mainScrollContainer = document.querySelector('.scroll-container');
    
    const handleScroll = () => {
        if (mainScrollContainer) {
            setIsScrolled(mainScrollContainer.scrollTop > 50);
        }
    };

    if (mainScrollContainer) {
        mainScrollContainer.addEventListener('scroll', handleScroll);
    }
    
    return () => {
      if (mainScrollContainer) {
        mainScrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-slate-900/90 backdrop-blur-xl py-3 shadow-2xl border-b border-white/5' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center">
            <a href="#hero" aria-label="KnowRisk Home" onClick={handleLinkClick}>
                <Logo className="h-7 text-white" />
            </a>
          </div>

          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map(link => (
              <a key={link.label} href={link.href} className="text-sm text-slate-400 hover:text-white transition-all duration-300 font-medium">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <a 
              href="#contato" 
              className="hidden md:block bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-lg shadow-cyan-900/20"
            >
              Agendar Demonstração
            </a>
            
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-white z-50 relative w-8 h-8"
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
            >
                <div className={`absolute w-full h-0.5 bg-white top-1/2 left-0 -translate-y-1/2 transition-transform duration-300 ${isMenuOpen ? 'rotate-45' : '-translate-y-2'}`}></div>
                <div className={`absolute w-full h-0.5 bg-white top-1/2 left-0 -translate-y-1/2 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></div>
                <div className={`absolute w-full h-0.5 bg-white top-1/2 left-0 -translate-y-1/2 transition-transform duration-300 ${isMenuOpen ? '-rotate-45' : 'translate-y-2'}`}></div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden fixed inset-0 bg-slate-950/95 backdrop-blur-2xl z-40 transition-all duration-500 ease-in-out ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-10">
            {navLinks.map((link, index) => (
              <a 
                key={link.label} 
                href={link.href} 
                className="text-slate-100 text-3xl font-black hover:text-cyan-400 transition-all duration-300"
                onClick={handleLinkClick}
              >
                {link.label}
              </a>
            ))}
            <a 
              href="#contato" 
              onClick={handleLinkClick}
              className="bg-cyan-600 text-white font-bold py-4 px-10 rounded-full"
            >
              Agendar Demonstração
            </a>
        </nav>
      </div>
    </>
  );
};

export default Header;
