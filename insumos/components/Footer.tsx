
import React from 'react';
import { LinkedInIcon } from './icons';
import { Logo } from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 scroll-section flex items-center">
      <div className="container mx-auto px-6 py-8 w-full">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div>
            <Logo className="h-6 text-slate-400" />
          </div>
          <div className="text-center md:text-right flex items-center space-x-6">
            <p className="text-sm text-slate-500">&copy; {new Date().getFullYear()} KnowRISK. Todos os direitos reservados.</p>
            <a href="#" className="text-slate-400 hover:text-white" aria-label="LinkedIn">
              <LinkedInIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;