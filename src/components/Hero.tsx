import React from 'react';
import { ArrowRight, MessageCircle, MapPin, Calendar, CheckCircle2, ShieldCheck, Microscope, Award } from 'lucide-react';
import { WORKSHOP_INFO, getWhatsAppLink } from '../data/workshopData';

interface HeroProps {
  selectedCity: string;
  onSelectCity: (cityId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ selectedCity, onSelectCity }) => {
  const currentCityObj = WORKSHOP_INFO.cities.find((c) => c.id === selectedCity) || WORKSHOP_INFO.cities[0];

  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100 border-b border-slate-200">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 w-96 h-96 bg-rose-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Top Floating Badges */}
        <div className="flex flex-wrap items-center gap-2.5 mb-5">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-900 border border-emerald-200 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
            </span>
            {WORKSHOP_INFO.badge} • Actualización Profesional
          </span>

          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-white text-slate-700 border border-slate-200 shadow-sm">
            <MapPin className="w-3.5 h-3.5 text-emerald-700" />
            Caracas • Maracay • Lecherías
          </span>

          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-300 shadow-sm">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
            Con el respaldo institucional y tecnológico de Mindray Animal Care y Midvet Care
          </span>
        </div>

        {/* Impactful Title */}
        <div className="max-w-3xl">
          <h1 className="font-['Outfit',sans-serif] font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.12] mb-6">
            Abordaje integral de las{' '}
            <span className="text-emerald-800">
              alteraciones hemáticas
            </span>{' '}
            en caninos y felinos
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-600 font-normal leading-relaxed mb-8">
            Taller intensivo de actualización profesional y educación continua. Desarrolla un criterio diagnóstico
            sistemático para clasificar anemias, trombocitopatías y serie blanca, integrando la lectura de frotis
            con el manejo e interpretación de <strong>tecnología hematológica automatizada</strong> junto a especialistas de México y Colombia.
          </p>

          {/* City Quick Picker in Hero */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm mb-8">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-emerald-700" />
              Selecciona tu sede en Venezuela:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {WORKSHOP_INFO.cities.map((city) => {
                const isSelected = city.id === selectedCity;
                return (
                  <button
                    key={city.id}
                    onClick={() => onSelectCity(city.id)}
                    className={`p-3 rounded-xl text-left border transition-all ${
                      isSelected
                        ? 'bg-emerald-800 text-white border-emerald-800 shadow-md scale-[1.02]'
                        : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-0.5">
                      <span className={`font-bold text-sm ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                        {city.city}
                      </span>
                      <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                        isSelected ? 'bg-emerald-700 text-emerald-100' : 'bg-slate-200 text-slate-700'
                      }`}>
                        {city.day}
                      </span>
                    </div>
                    <p className={`text-xs ${isSelected ? 'text-emerald-100' : 'text-slate-500'}`}>
                      {city.date}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Primary CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
            <a
              href="#registro"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-base shadow-lg shadow-emerald-800/25 transition-all hover:translate-y-[-1px] active:translate-y-[1px]"
            >
              <span>Formulario de Inscripción en {currentCityObj.city} ($120)</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={getWhatsAppLink(currentCityObj.city)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-base border border-slate-300 shadow-sm transition-all"
            >
              <MessageCircle className="w-5 h-5 text-emerald-600 fill-current" />
              <span>Consultar por WhatsApp</span>
            </a>
          </div>

          {/* 4 Trust Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200">
            <div className="flex items-start gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                <Microscope className="w-4 h-4" />
              </div>
              <div>
                <p className="font-['Outfit',sans-serif] font-bold text-slate-900 text-sm">Práctica con Equipos</p>
                <p className="text-xs text-slate-500">Manejo de instrumentación</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <p className="font-['Outfit',sans-serif] font-bold text-slate-900 text-sm">11 Horas</p>
                <p className="text-xs text-slate-500">Educación Continua</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                <Award className="w-4 h-4" />
              </div>
              <div>
                <p className="font-['Outfit',sans-serif] font-bold text-slate-900 text-sm">Certificado Oficial</p>
                <p className="text-xs text-slate-500">Con aval institucional</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <p className="font-['Outfit',sans-serif] font-bold text-slate-900 text-sm">Todo Incluido</p>
                <p className="text-xs text-slate-500">Coffee + Almuerzo</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
