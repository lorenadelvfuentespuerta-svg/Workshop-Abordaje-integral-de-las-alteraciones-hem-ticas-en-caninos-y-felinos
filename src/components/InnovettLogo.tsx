import React from 'react';

export const INNOVETT_LOGO_URL = 'https://i.postimg.cc/PNB5dVS0/Logo-Innovett-sin-fondo-(1)-(1).png';

interface InnovettLogoProps {
  className?: string;
  variant?: 'green' | 'white' | 'emerald';
  showSubtitle?: boolean;
}

export const InnovettLogo: React.FC<InnovettLogoProps> = ({
  className = 'h-10 sm:h-12',
  variant = 'green',
}) => {
  const filterClass =
    variant === 'white'
      ? 'brightness-0 invert'
      : '';

  return (
    <img
      src={INNOVETT_LOGO_URL}
      alt="Innovett Animal Care"
      className={`${className} w-auto object-contain transition-transform ${filterClass}`}
      loading="eager"
      decoding="async"
    />
  );
};

