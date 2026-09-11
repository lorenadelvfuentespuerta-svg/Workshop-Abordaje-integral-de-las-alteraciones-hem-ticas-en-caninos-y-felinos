import React, { useState } from 'react';
import { Clock, Coffee, Utensils, Award, ChevronDown, ChevronUp, Microscope } from 'lucide-react';
import { WORKSHOP_INFO } from '../data/workshopData';

export const AgendaSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'erythrocyte' | 'platelet' | 'leukocyte' | 'practice'>('all');

  const filteredModules = WORKSHOP_INFO.modules.filter((m) => {
    if (filter === 'all') return true;
    if (filter === 'erythrocyte') return m.module.includes('1') || m.module.includes('2');
    if (filter === 'platelet') return m.module.includes('3') || m.module.includes('4');
    if (filter === 'leukocyte') return m.module.includes('5') || m.module.includes('6') || m.module.includes('7') || m.module.includes('8');
    if (filter === 'practice') return m.module.includes('Cierre');
    return true;
  });

  return (
    <section id="programa" className="py-16 md:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-emerald-800 tracking-wider uppercase bg-emerald-100 px-3 py-1 rounded-full inline-block mb-3">
            Cronograma Oficial
          </span>
          <h2 className="font-['Outfit',sans-serif] font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-900 tracking-tight mb-4">
            Programa Intensivo de 08:00 a 19:00 hrs
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Estructurado cronológicamente por líneas celulares y culminando en la aplicación práctica sobre tecnología automatizada.
          </p>
        </div>

        {/* Quick Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          <button
            onClick={() => setFilter('all')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
              filter === 'all'
                ? 'bg-slate-900 text-white shadow-sm'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            Todos los Módulos (8)
          </button>
          <button
            onClick={() => setFilter('erythrocyte')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
              filter === 'erythrocyte'
                ? 'bg-rose-700 text-white shadow-sm'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            🩸 Línea Eritrocitaria
          </button>
          <button
            onClick={() => setFilter('platelet')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
              filter === 'platelet'
                ? 'bg-amber-700 text-white shadow-sm'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            🩹 Línea Plaquetaria
          </button>
          <button
            onClick={() => setFilter('leukocyte')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
              filter === 'leukocyte'
                ? 'bg-blue-700 text-white shadow-sm'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            🛡️ Línea Leucocitaria & Linfocitaria
          </button>
          <button
            onClick={() => setFilter('practice')}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
              filter === 'practice'
                ? 'bg-emerald-800 text-white shadow-sm'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            ⚙️ Demostración y Procesamiento en Equipos
          </button>
        </div>

        {/* Modules List */}
        <div className="space-y-3.5">
          {filteredModules.map((item, index) => {
            const isRecess = item.module === 'Receso';
            const isLunch = item.title.includes('Almuerzo');
            const isPractice = item.module.includes('Cierre');

            if (isLunch) {
              return (
                <div
                  key={index}
                  className="bg-emerald-100 border border-emerald-300 p-4 rounded-xl flex items-center justify-between text-emerald-950 text-xs sm:text-sm font-semibold shadow-sm"
                >
                  <div className="flex items-center gap-2.5">
                    <Utensils className="w-4 h-4 text-emerald-800" />
                    <span>{item.time}</span>
                    <strong className="text-emerald-900">{item.title}</strong>
                    <span className="text-xs text-emerald-700">({item.duration})</span>
                  </div>
                  <span className="text-[11px] bg-white px-2 py-0.5 rounded font-bold text-emerald-800 shadow-sm">
                    Incluido
                  </span>
                </div>
              );
            }

            if (isRecess) {
              return (
                <div
                  key={index}
                  className="bg-amber-50/90 border border-amber-200 p-3 rounded-xl flex items-center justify-between text-amber-900 text-xs font-medium"
                >
                  <div className="flex items-center gap-2">
                    <Coffee className="w-3.5 h-3.5 text-amber-700" />
                    <span>{item.time}</span>
                    <strong>{item.title}</strong>
                    <span className="text-amber-700">({item.duration})</span>
                  </div>
                  <span className="text-xs text-amber-700 font-bold">Coffee Break Incluido</span>
                </div>
              );
            }

            if (isPractice) {
              return (
                <div
                  key={index}
                  className="bg-gradient-to-r from-slate-900 to-emerald-950 text-white p-6 rounded-2xl border border-slate-800 shadow-lg"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded bg-emerald-400 text-slate-950 font-black text-xs">
                        {item.time}
                      </span>
                      <span className="text-xs font-bold text-emerald-300 uppercase tracking-wide">
                        {item.module} • {item.duration}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs font-bold bg-emerald-900/80 text-emerald-200 px-2.5 py-1 rounded-full border border-emerald-700">
                      <Microscope className="w-3 h-3" />
                      Práctica Presencial con Equipos
                    </span>
                  </div>

                  <h3 className="font-['Outfit',sans-serif] font-bold text-lg text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-3">
                    {item.description}
                  </p>
                  <p className="text-xs text-emerald-400 font-semibold">
                    Responsables: {item.speaker}
                  </p>
                </div>
              );
            }

            return (
              <div
                key={index}
                className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:border-emerald-600 transition-colors"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-800 font-bold text-xs">
                      {item.time}
                    </span>
                    <span className="text-xs font-bold text-emerald-800">
                      {item.module} ({item.duration})
                    </span>
                  </div>
                  <span className="text-xs text-slate-500 font-medium">
                    {item.speaker}
                  </span>
                </div>

                <h4 className="font-['Outfit',sans-serif] font-bold text-slate-900 text-base mb-1.5">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
