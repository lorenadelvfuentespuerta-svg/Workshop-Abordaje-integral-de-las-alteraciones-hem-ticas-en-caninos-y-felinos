import React from 'react';
import { Check, MessageCircle, Sparkles, ShieldCheck } from 'lucide-react';
import { WORKSHOP_INFO, getWhatsAppLink } from '../data/workshopData';

interface PricingSectionProps {
  selectedCity?: string;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ selectedCity }) => {
  return (
    <section id="inversion" className="py-16 md:py-20 bg-slate-100 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-emerald-800 tracking-wider uppercase bg-emerald-100 px-3 py-1 rounded-full inline-block mb-3">
            Inversión Académica
          </span>
          <h2 className="font-['Outfit',sans-serif] font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-900 tracking-tight mb-4">
            Asegura tu Cupo con Tarifa de Preventa
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Inscríbete antes del <strong>30 de Octubre</strong> para obtener $30 de descuento directo.
          </p>
        </div>

        {/* Pricing Cards Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch mb-10">
          
          {/* Pronto Pago Card */}
          <div className="bg-white rounded-2xl border-2 border-emerald-800 p-7 shadow-xl relative flex flex-col justify-between">
            <div className="absolute -top-3.5 right-6 bg-emerald-800 text-white font-bold text-xs uppercase px-3 py-1 rounded-full tracking-wider shadow-md flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Recomendada • Ahorras $30
            </div>

            <div>
              <span className="text-xs font-bold text-emerald-800 uppercase tracking-wide">
                Pronto Pago (Preventa)
              </span>
              <h3 className="font-['Outfit',sans-serif] font-bold text-2xl text-slate-900 mb-1">
                Antes del {WORKSHOP_INFO.pricing.earlyBirdDeadline}
              </h3>
              
              <div className="flex items-baseline gap-1 my-4">
                <span className="font-['Outfit',sans-serif] font-black text-5xl text-slate-950">
                  ${WORKSHOP_INFO.pricing.earlyBirdPrice}
                </span>
                <span className="text-sm font-semibold text-slate-500">USD</span>
              </div>

              <p className="text-xs text-slate-500 mb-6">
                Pagadero en divisas o Bolívares calculados a la tasa oficial del <strong>BCV</strong>.
              </p>

              <div className="border-t border-slate-100 pt-5 mb-8">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Tu inscripción incluye:
                </p>
                <ul className="space-y-2.5 text-sm text-slate-700">
                  {WORKSHOP_INFO.pricing.includes.map((inc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <a
              href={getWhatsAppLink(selectedCity)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-base shadow-lg shadow-emerald-800/25 transition-all hover:scale-[1.01]"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Reservar Preventa (${WORKSHOP_INFO.pricing.earlyBirdPrice})</span>
            </a>
          </div>

          {/* Regular Card */}
          <div className="bg-white rounded-2xl border border-slate-200 p-7 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                Tarifa Regular
              </span>
              <h3 className="font-['Outfit',sans-serif] font-bold text-2xl text-slate-900 mb-1">
                Desde el {WORKSHOP_INFO.pricing.regularFrom}
              </h3>
              
              <div className="flex items-baseline gap-1 my-4">
                <span className="font-['Outfit',sans-serif] font-black text-5xl text-slate-600">
                  ${WORKSHOP_INFO.pricing.regularPrice}
                </span>
                <span className="text-sm font-semibold text-slate-500">USD</span>
              </div>

              <p className="text-xs text-slate-500 mb-6">
                A tasa oficial BCV del día de la transferencia o pago.
              </p>

              <div className="border-t border-slate-100 pt-5 mb-8">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Incluye exactamente los mismos beneficios:
                </p>
                <ul className="space-y-2.5 text-sm text-slate-600">
                  {WORKSHOP_INFO.pricing.includes.map((inc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <a
              href={getWhatsAppLink(selectedCity)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-base transition-all"
            >
              <span>Consultar Modalidades de Pago</span>
            </a>
          </div>

        </div>

        {/* Guarantee / Transparency Note */}
        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-center text-xs text-emerald-900 flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
          <span>Cupos limitados por sede para garantizar que cada asistente participe activamente en la sesión práctica.</span>
        </div>

      </div>
    </section>
  );
};
