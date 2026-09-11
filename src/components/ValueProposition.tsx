import React from 'react';
import { AlertTriangle, CheckCircle, ArrowUpRight } from 'lucide-react';
import { getWhatsAppLink } from '../data/workshopData';

export const ValueProposition: React.FC = () => {
  return (
    <section id="beneficios" className="py-16 md:py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Problem & Justification Column */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold uppercase tracking-wider mb-4">
              <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
              La Realidad en la Clínica Diaria
            </div>

            <h2 className="font-['Outfit',sans-serif] font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-900 tracking-tight mb-5 leading-tight">
              ¿Cuántas alteraciones hemáticas están pasando desapercibidas en tu consulta?
            </h2>

            <p className="text-slate-600 text-base leading-relaxed mb-4">
              Las enfermedades hematológicas —<strong>anemias, trombocitopenias, leucocitosis, leucopenias y alteraciones linfocitarias</strong>— figuran entre los motivos de consulta y hallazgos de laboratorio más frecuentes en la clínica de pequeños animales.
            </p>

            <p className="text-slate-600 text-base leading-relaxed mb-6">
              Sin embargo, con frecuencia son <strong>subdiagnosticadas o mal interpretadas</strong> por falta de una formación específica en fisiopatología hemática celular. Un abordaje diagnóstico deficiente retrasa el tratamiento oportuno y <strong>compromete seriamente el pronóstico del paciente</strong>.
            </p>

            {/* Practical Points */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700">
                  <strong>Abordaje sistemático de anemias:</strong> Deja de adivinar y domina el algoritmo para diferenciar anemias regenerativas, no regenerativas, hemolíticas e inmunomediadas.
                </p>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700">
                  <strong>Manejo del paciente trombocitopénico:</strong> Discierne con rapidez cuándo hay trombocitopenia por consumo, secuestro o falla medular, y cuándo indicar transfusiones seguras.
                </p>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <p className="text-sm text-slate-700">
                  <strong>Demostración y procesamiento de muestras en equipos:</strong> Aprende a correlacionar frotis de sangre periférica con las alarmas, histogramas y gráficos de dispersión de analizadores automatizados.
                </p>
              </div>
            </div>
          </div>

          {/* Right Card / Commitment Banner */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-slate-900 to-emerald-950 text-white p-7 rounded-2xl shadow-xl relative overflow-hidden border border-slate-800">
              <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl"></div>

              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-2">
                Compromiso Institucional
              </span>
              <h3 className="font-['Outfit',sans-serif] font-bold text-2xl text-white mb-3">
                Elevando el estándar del gremio veterinario venezolano
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Fortalecer estas competencias responde a una necesidad real de actualización profesional y educación continua, acercando formación de alto rigor dictada por especialistas internacionales a <strong>Caracas, Maracay y Lecherías</strong>.
              </p>

              <div className="border-t border-slate-800 pt-5 space-y-3 mb-6">
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span>Aval Oficial:</span>
                  <strong className="text-white">Innovett, Mindray Animal Care & Midvet Care</strong>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span>Carga Académica:</span>
                  <strong className="text-white">11 Horas Intensivas Certificadas</strong>
                </div>
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span>Metodología:</span>
                  <strong className="text-white">Casos Reales + Procesamiento en Equipos</strong>
                </div>
              </div>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center flex items-center justify-center gap-1.5 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all"
              >
                <span>Consultar Dudas por WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
