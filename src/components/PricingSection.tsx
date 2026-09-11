import React from 'react';
import { Check, MessageCircle, Sparkles, ShieldCheck, ArrowDown } from 'lucide-react';
import { WORKSHOP_INFO, getWhatsAppLink } from '../data/workshopData';

interface PricingSectionProps {
  selectedCity?: string;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ selectedCity }) => {
  return (
    <section id="inversion" className="py-16 md:py-20 bg-slate-100 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-emerald-800 tracking-wider uppercase bg-emerald-100 px-3 py-1 rounded-full inline-block mb-3">
            Inversión Académica
          </span>
          <h2 className="font-['Outfit',sans-serif] font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-900 tracking-tight mb-3">
            Asegura tu Cupo con Tarifa de Preventa
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Inscríbete antes del <strong>{WORKSHOP_INFO.pricing.earlyBirdDeadline}</strong> y obtén tu cupo con <strong>$40 de descuento directo</strong>.
          </p>
        </div>

        {/* Único Módulo de Inversión */}
        <div className="max-w-2xl mx-auto mb-10">
          <div className="bg-white rounded-3xl border-2 border-emerald-700 p-6 sm:p-10 shadow-xl relative flex flex-col justify-between">
            {/* Badge superior flotante */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-800 text-white font-bold text-xs uppercase px-4 py-1.5 rounded-full tracking-wider shadow-md flex items-center gap-1.5 whitespace-nowrap">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>Preventa Activa • Ahorras $40 USD</span>
            </div>

            <div>
              <div className="text-center pt-2 sm:pt-0 mb-6">
                <span className="text-xs font-bold text-emerald-800 uppercase tracking-widest block mb-1">
                  Inversión del Workshop
                </span>
                <h3 className="font-['Outfit',sans-serif] font-extrabold text-2xl sm:text-3xl text-slate-900">
                  Acceso Total Teórico-Práctico
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Válido para Caracas, Maracay y Lecherías (Hasta el {WORKSHOP_INFO.pricing.earlyBirdDeadline})
                </p>
              </div>

              {/* Price Display con precio inicial tachado */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 text-center mb-6">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                    Precio Inicial:
                  </span>
                  <span className="font-['Outfit',sans-serif] font-bold text-2xl text-slate-400 line-through decoration-rose-500 decoration-2">
                    ${WORKSHOP_INFO.pricing.regularPrice} USD
                  </span>
                </div>

                <div className="flex items-baseline justify-center gap-2">
                  <span className="font-['Outfit',sans-serif] font-black text-5xl sm:text-6xl text-emerald-800 tracking-tight">
                    ${WORKSHOP_INFO.pricing.earlyBirdPrice}
                  </span>
                  <span className="text-lg font-bold text-slate-600">USD</span>
                </div>

                <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold">
                  <span>Tarifa Especial de Preventa</span>
                </div>

                <p className="text-xs text-slate-500 mt-3">
                  Pagadero en divisas o Bolívares calculados a la tasa oficial del <strong>BCV</strong> del día.
                </p>
              </div>

              {/* Lo que incluye */}
              <div className="border-t border-slate-100 pt-6 mb-8">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-4 text-center sm:text-left">
                  Tu pase de entrada incluye:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                  {WORKSHOP_INFO.pricing.includes.map((inc, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <div className="rounded-full bg-emerald-100 p-0.5 mt-0.5 shrink-0">
                        <Check className="w-3.5 h-3.5 text-emerald-700" />
                      </div>
                      <span className="text-xs sm:text-sm">{inc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              <a
                href={getWhatsAppLink(selectedCity)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-base shadow-lg shadow-emerald-800/25 transition-all hover:scale-[1.01] active:scale-[0.99]"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Asegurar Cupo en Preventa (${WORKSHOP_INFO.pricing.earlyBirdPrice} USD)</span>
              </a>

              <a
                href="#registro"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm transition-colors text-center"
              >
                <ArrowDown className="w-4 h-4 text-emerald-700" />
                <span>O completa tu inscripción en el formulario aquí abajo</span>
              </a>
            </div>
          </div>
        </div>

        {/* Guarantee / Transparency Note */}
        <div className="max-w-2xl mx-auto p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-center text-xs text-emerald-900 flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
          <span>Cupos estrictamente limitados por sede para garantizar la práctica intensiva y personalizada en cada equipo Mindray.</span>
        </div>

      </div>
    </section>
  );
};
