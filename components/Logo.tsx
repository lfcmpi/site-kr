
import React from 'react';

export const LogoIcon = ({ className }: { className?: string }) => (
    <svg 
        className={className}
        viewBox="0 0 100 100" 
        fill="currentColor" 
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
    >
        {/* Left Side Chevron - Not touching at top/bottom */}
        <path d="M46 5L5 50L46 95V82L18 50L46 18V5Z" />
        
        {/* Right Side Chevron - Not touching at top/bottom */}
        <path d="M54 5L95 50L54 95V82L82 50L54 18V5Z" />
    </svg>
);


export const Logo = ({ className }: { className?: string }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <LogoIcon className="h-8 w-auto text-current" />
    <span className="text-3xl font-bold tracking-tight">
      KnowRisk
    </span>
  </div>
);
