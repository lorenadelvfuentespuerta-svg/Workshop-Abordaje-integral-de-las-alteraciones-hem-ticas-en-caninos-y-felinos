import React from 'react';
import { Calendar, MapPin, MessageCircle, Users, Check } from 'lucide-react';
import { WORKSHOP_INFO, getWhatsAppLink } from '../data/workshopData';

interface CitiesSectionProps {
  selectedCity: string;
  onSelectCity: (cityId: string) => void;
}

export const CitiesSection: React.FC<CitiesSectionProps> = ({ selectedCity, onSelectCity }) => {
  return (
    <section id="ciudades" className="py-16 md:py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-emerald-800 tracking-wider uppercase bg-emerald-100 px-3 py-1 rounded-full inline-block mb-3">
            Gira Venezuela • Noviembre
          </span>
          <h2 className="font-['Outfit',sans-serif] font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-900 tracking-tight mb-4">
            3 Ciudades, Fechas Confirmadas
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Reserva tu lugar en la sede de tu preferencia. Cupos limitados para garantizar el manejo práctico de instrumentación del laboratorio y la dinámica presencial.
          </p>
        </div>

        {/* 3 City Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {WORKSHOP_INFO.cities.map((item, idx) => {
            const isSelected = item.id === selectedCity;
            return (
              <div
                key={item.id}
                onClick={() => onSelectCity(item.id)}
                className={`cursor-pointer rounded-2xl p-6 border-2 transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'border-emerald-800 bg-emerald-50/40 shadow-lg scale-[1.02]'
                    : 'border-slate-200 bg-slate-50 hover:border-slate-300 hover:bg-slate-100/70'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-slate-200 text-slate-800">
                      Sede 0{idx + 1}
                    </span>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-200">
                      {item.status}
                    </span>
                  </div>

                  <h3 className="font-['Outfit',sans-serif] font-black text-3xl text-slate-900 mb-1">
                    {item.city}
                  </h3>

                  <div className="flex items-center gap-2 text-emerald-800 font-bold text-base mb-3">
                    <Calendar className="w-4 h-4" />
                    <span>{item.day}, {item.date}</span>
                  </div>

                  <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                    Horario: <strong>08:00 a 19:00 hrs</strong> (11 horas intensivas). {item.locationHint}.
                  </p>
                </div>

                <div>
                  <div className="flex items-baseline justify-between mb-3 text-xs text-slate-500">
                    <span>Preventa (hasta 30 Oct):</span>
                    <div className="flex items-center gap-1.5">
                      <span className="line-through text-slate-400 text-xs">$160</span>
                      <strong className="text-emerald-700 font-bold text-sm">$120 USD</strong>
                    </div>
                  </div>

                  <a
                    href={getWhatsAppLink(item.city)}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Apartar Cupo en {item.city}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Target Audience Banner */}
        <div className="p-6 md:p-8 rounded-2xl bg-slate-900 text-white border border-slate-800">
          <div className="flex items-center gap-2.5 text-emerald-400 font-bold text-xs uppercase tracking-wider mb-2">
            <Users className="w-4 h-4" />
            <span>Perfil de Participantes</span>
          </div>

          <h3 className="font-['Outfit',sans-serif] font-bold text-xl md:text-2xl text-white mb-4">
            ¿Para quién está diseñado este workshop?
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-300 text-sm">
            {WORKSHOP_INFO.targetAudience.map((target, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                <span>{target}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
