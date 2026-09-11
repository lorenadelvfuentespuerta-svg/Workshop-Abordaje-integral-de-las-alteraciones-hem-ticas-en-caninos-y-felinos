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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {WORKSHOP_INFO.speakers.map((speaker, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-2xl border border-slate-200 p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:border-emerald-700/60 hover:shadow-md transition-all"
            >
              <div>
                {/* Full Uncropped Speaker Poster / Image */}
                <div className="relative w-full rounded-xl overflow-hidden bg-gradient-to-b from-white to-slate-100/80 p-2 sm:p-3 mb-6 border border-slate-200/80 shadow-xs flex items-center justify-center">
                  <img
                    src={speaker.avatar}
                    alt={speaker.name}
                    className="w-full max-w-[340px] sm:max-w-[360px] h-auto aspect-[566/800] object-contain rounded-lg drop-shadow-sm transition-transform hover:scale-[1.01] duration-300"
                    loading="lazy"
                  />
                </div>

                {/* Country and Status Badges */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{speaker.flag}</span>
                    <span className="text-xs font-bold text-emerald-800 uppercase tracking-wide">
                      {speaker.badge} • {speaker.country}
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold bg-emerald-100 text-emerald-900 px-2.5 py-0.5 rounded-full">
                    Confirmado
                  </span>
                </div>

                {/* Specialty Title Badge */}
                <div className="inline-block px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-900 font-bold text-xs border border-emerald-200/60 mb-4">
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

              <div className="border-t border-slate-200 pt-4 flex items-center justify-between text-xs text-slate-500 font-medium mt-auto">
                <span className="flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-emerald-700" />
                  Caracas, Maracay y Lecherías
                </span>
                <span className="text-emerald-800 font-bold">100% Confirmado</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
