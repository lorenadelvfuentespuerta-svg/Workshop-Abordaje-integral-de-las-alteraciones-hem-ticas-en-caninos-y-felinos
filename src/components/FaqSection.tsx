import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FaqItem {
  q: string;
  a: string;
}

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      q: '¿Qué métodos de pago tienen habilitados?',
      a: 'Aceptamos transferencias en bolívares (calculadas a la tasa oficial del BCV), Pago Móvil, depósitos en divisas, Zelle y efectivo. Puedes solicitar los datos bancarios exactos a través de nuestro WhatsApp.',
    },
    {
      q: '¿Tienen planes de financiamiento?',
      a: 'Sí, contamos con planes de financiamiento para facilitar tu participación. Sin embargo, ten en cuenta que al optar por financiamiento en cuotas se pierde el precio especial de preventa, aplicando la tarifa regular de $160 USD. Puedes consultar las condiciones y cronograma de cuotas escribiéndonos a nuestro WhatsApp.',
    },
    {
      q: '¿Cómo se llevará a cabo la práctica con los analizadores Mindray?',
      a: 'Innovett Animal Care trasladará equipos de hematología automatizada directamente al lugar del evento. Guiados por la especialista de aplicaciones LATAM y el especialista en hematología, los asistentes correlacionarán los resultados de los equipos, histogramas y alarmas con frotis sanguíneos reales.',
    },
    {
      q: '¿El certificado cuenta con aval oficial?',
      a: 'Sí, recibirás un certificado avalado por Innovett Animal Care, Mindray Animal Medical y Mindvet Academy. Incluye el desglose de las 11 horas académicas cursadas y es totalmente válido para tu currículum profesional.',
    },
    {
      q: '¿Dónde se realizarán los workshops en cada ciudad?',
      a: 'Los eventos serán en Caracas, Maracay y Lechería, en auditorios y salones de conferencias confortables, de fácil acceso y con estacionamiento. Anunciaremos y confirmaremos la locación exacta a todos los inscritos con anticipación.',
    },
    {
      q: '¿Puedo transferir mi cupo si tengo un imprevisto?',
      a: 'Sí, los cupos son transferibles si notificas al equipo de coordinación con al menos 48 horas de anticipación, para así poder emitir el certificado a nombre del nuevo asistente. Ten en cuenta que mantenemos una política de no reembolso.',
    },
    {
      q: '¿Cuál es el código de vestimenta?',
      a: 'El código es casual o casual sport. Te invitamos a llevar un suéter para tu mayor comodidad en el salón.',
    },
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-20 bg-white border-b border-slate-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
            <HelpCircle className="w-4 h-4 text-emerald-700" />
            <span>Resolución de Inquietudes</span>
          </div>
          <h2 className="font-['Outfit',sans-serif] font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
            Preguntas Frecuentes
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-4 sm:p-5 text-left bg-slate-50 hover:bg-slate-100 flex items-center justify-between gap-4 font-bold text-slate-900 text-sm sm:text-base transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-emerald-800' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="p-4 sm:p-5 bg-white text-slate-600 text-sm leading-relaxed border-t border-slate-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
