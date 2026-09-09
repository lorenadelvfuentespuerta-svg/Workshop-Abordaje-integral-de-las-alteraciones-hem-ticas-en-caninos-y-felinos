import React from 'react';
import { Award, Globe, CheckCircle2 } from 'lucide-react';
import { WORKSHOP_INFO } from '../data/workshopData';

export const SpeakersSection: React.FC = () => {
  return (
    <section id="ponentes" className="py-16 md:py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-emerald-800 tracking-wider uppercase bg-emerald-100 px-3 py-1 rounded-full inline-block mb-3">
            Facilitadores Internacionales
          </span>
          <h2 className="font-['Outfit',sans-serif] font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-900 tracking-tight mb-4">
            Ponentes de Referencia Continental
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Expertos dedicados a la investigación, práctica clínica de alta complejidad y aplicación tecnológica en diagnóstico in vitro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {WORKSHOP_INFO.speakers.map((speaker, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-2xl border border-slate-200 p-7 flex flex-col justify-between shadow-sm hover:border-emerald-700 transition-all"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-2xl">{speaker.flag}</span>
                      <span className="text-xs font-bold text-emerald-800 uppercase tracking-wide">
                        {speaker.badge} • {speaker.country}
                      </span>
                    </div>
                    <h3 className="font-['Outfit',sans-serif] font-bold text-xl sm:text-2xl text-slate-900 leading-tight">
                      {speaker.name}
                    </h3>
                    <p className="text-xs font-bold text-slate-500 mt-0.5">
                      {speaker.role}
                    </p>
                  </div>
                </div>

                <div className="inline-block px-3 py-1 rounded-lg bg-emerald-100 text-emerald-900 font-bold text-xs mb-4">
                  {speaker.title}
                </div>

                {/* Highlights chips */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {speaker.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="text-[11px] font-semibold bg-white text-slate-700 px-2.5 py-1 rounded-md border border-slate-200"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                {/* Bio items */}
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700 leading-relaxed mb-6">
                  {speaker.bio.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-700 font-bold mt-0.5">•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-slate-200 pt-4 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span className="flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-emerald-700" />
                  Presencial en Caracas, Maracay y Lecherías
                </span>
                <span className="text-emerald-800 font-bold">100% Confirmado</span>
              </div>
            </div>
          ))}
        </div>

        {/* Sponsor Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-100 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <p className="text-xs uppercase font-bold tracking-wider text-slate-500">Tecnología y Respaldo</p>
            <p className="font-['Outfit',sans-serif] font-bold text-slate-900 text-lg">Patrocinado por Mindray Animal Medical & Mindvet Academy</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="px-3 py-1.5 rounded-lg bg-white font-bold text-xs text-slate-700 border border-slate-300">
              Analizadores In Vitro
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-white font-bold text-xs text-slate-700 border border-slate-300">
              Certificación Oficial
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
