import React from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../data/workshopData';
import { InnovettLogo } from './InnovettLogo';

interface NavbarProps {
  selectedCity?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ selectedCity }) => {
  return (
    <>
      {/* Top Urgency Strip */}
      <div className="bg-slate-900 text-white text-xs py-2.5 px-4 border-b border-slate-800 sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-amber-400 text-slate-950 uppercase tracking-wide">
              ⚡ Preventa Activa
            </span>
            <span className="text-slate-200">
              Asegura tu cupo en preventa por <strong className="text-emerald-400 font-bold">$120</strong> antes del <strong>30 de Octubre</strong> (Precio inicial <span className="line-through text-slate-400">$160</span> • Ahorras $40).
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#registro"
              className="text-emerald-400 hover:text-emerald-300 font-bold underline underline-offset-4 whitespace-nowrap transition-colors"
            >
              Inscribirme ahora →
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header className="bg-white/95 backdrop-blur-md border-b border-slate-200 sticky top-9 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          {/* Logo Brand */}
          <a href="#" className="flex items-center group" title="Innovett Animal Care">
            <InnovettLogo className="h-10 sm:h-12 group-hover:scale-105 transition-transform origin-left" />
          </a>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-600">
            <a href="#beneficios" className="hover:text-emerald-800 transition-colors">Beneficios</a>
            <a href="#ciudades" className="hover:text-emerald-800 transition-colors">Sedes y Fechas</a>
            <a href="#programa" className="hover:text-emerald-800 transition-colors">Temario</a>
            <a href="#ponentes" className="hover:text-emerald-800 transition-colors">Ponentes</a>
            <a href="#inversion" className="hover:text-emerald-800 transition-colors">Inversión</a>
            <a href="#registro" className="text-emerald-800 font-bold hover:underline transition-all">Formulario</a>
          </nav>

          {/* Header Actions */}
          <div className="flex items-center gap-3">
            <a
              href={getWhatsAppLink(selectedCity)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-sm shadow-md shadow-emerald-800/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">Inscribirme vía WhatsApp</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>
          </div>
        </div>
      </header>
    </>
  );
};
