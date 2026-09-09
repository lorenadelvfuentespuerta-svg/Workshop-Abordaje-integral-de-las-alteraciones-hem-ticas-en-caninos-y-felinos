import React from 'react';

interface InnovettLogoProps {
  className?: string;
  variant?: 'green' | 'white' | 'emerald';
  showSubtitle?: boolean;
}

export const InnovettLogo: React.FC<InnovettLogoProps> = ({
  className = 'h-10',
  variant = 'green',
  showSubtitle = true,
}) => {
  // Brand color matching the user's exact logo
  const mainColor =
    variant === 'white'
      ? '#ffffff'
      : variant === 'emerald'
      ? '#34d399'
      : '#156534'; // Forest medical green from Innovett logo

  const subColor =
    variant === 'white'
      ? '#e2e8f0'
      : variant === 'emerald'
      ? '#a7f3d0'
      : '#156534';

  return (
    <svg
      viewBox="0 0 520 165"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className} w-auto transition-transform`}
      aria-label="Innovett animal care logo"
      role="img"
    >
      {/* Node circle at the 'i' */}
      <circle cx="27" cy="46" r="14" fill={mainColor} />

      {/* Swoosh Arc curving over the brand name */}
      <path
        d="M 33 41 C 100 -12, 330 -10, 442 34 C 330 3, 105 5, 30 46 Z"
        fill={mainColor}
      />

      {/* Brand Name: innovett */}
      <text
        x="12"
        y="118"
        fill={mainColor}
        fontFamily="'Outfit', 'Montserrat', 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
        fontSize="92"
        fontWeight="900"
        letterSpacing="-0.04em"
      >
        innovett
      </text>

      {/* Subtitle: animal care */}
      {showSubtitle && (
        <text
          x="512"
          y="156"
          textAnchor="end"
          fill={subColor}
          fontFamily="'Outfit', 'Montserrat', 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
          fontSize="36"
          fontWeight="800"
          letterSpacing="0.01em"
        >
          animal care
        </text>
      )}
    </svg>
  );
};
