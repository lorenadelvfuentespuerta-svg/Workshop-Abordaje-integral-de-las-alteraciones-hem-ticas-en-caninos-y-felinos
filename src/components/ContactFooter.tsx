import React, { useState } from 'react';
import { MessageCircle, Phone, Mail, User, Building, Send, CheckCircle } from 'lucide-react';
import { WORKSHOP_INFO, getWhatsAppLink } from '../data/workshopData';
import { InnovettLogo } from './InnovettLogo';

interface ContactFooterProps {
  selectedCity: string;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({ selectedCity }) => {
  const [name, setName] = useState('');
  const [clinic, setClinic] = useState('');
  const [city, setCity] = useState(selectedCity);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cityText = WORKSHOP_INFO.cities.find(c => c.id === city)?.city || city;
    const msg = `¡Hola Lorena! Mi nombre es ${name || 'Colega Veterinario'}${clinic ? ` de la clínica/consultorio ${clinic}` : ''}. Me interesa inscribirme con la tarifa de preventa ($120) en la sede de *${cityText}*. ¿Me envías los datos para formalizar mi cupo?`;
    const url = `https://wa.me/${WORKSHOP_INFO.advisor.whatsappNumber}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
    setSubmitted(true);
  };

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-14 border-b border-slate-800">
          
          {/* Left Column: Brand, Advisor details */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="mb-4">
                <InnovettLogo className="h-12 w-auto" variant="white" />
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Innovett acerca a Venezuela programas de actualización médico-veterinaria con especialistas de primer nivel y la tecnología más avanzada del diagnóstico animal.
              </p>

              <div className="bg-slate-900 rounded-2xl p-5 border border-slate-800 mb-6">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block mb-2">
                  Atención Personalizada
                </span>
                <p className="font-bold text-base text-white mb-1">
                  Asesora Académica: {WORKSHOP_INFO.advisor.name}
                </p>
                <p className="text-xs text-slate-400 mb-4">
                  Escríbenos directamente para solventar dudas sobre temario, itinerario o emisión de factura fiscal.
                </p>

                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>WhatsApp: {WORKSHOP_INFO.advisor.phone}</span>
                </a>
              </div>
            </div>

            <div className="text-xs text-slate-500">
              <p className="font-semibold text-slate-400 mb-1">Organización y Aval:</p>
              <p>Innovett Animal Care • Actualización Profesional y Educación Continua</p>
            </div>
          </div>

          {/* Right Column: Quick WhatsApp Registration Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-2">
                Reserva Rápida de Cupo
              </span>
              <h3 className="font-['Outfit',sans-serif] font-bold text-2xl text-white mb-2">
                Solicita tu inscripción directa
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-6">
                Completa tus datos para enviarte un mensaje prearmado a WhatsApp y apartar tu puesto de inmediato con el descuento de preventa ($120).
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Nombre y Apellido *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ej. Dr. Carlos Mendoza"
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors placeholder:text-slate-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Clínica o Universidad (Opcional)
                    </label>
                    <div className="relative">
                      <Building className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                      <input
                        type="text"
                        value={clinic}
                        onChange={(e) => setClinic(e.target.value)}
                        placeholder="Ej. Centro Veterinario Central"
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors placeholder:text-slate-600"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Sede donde deseas asistir *
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {WORKSHOP_INFO.cities.map((c) => (
                      <button
                        key={c.id}
                        type="button"
                        onClick={() => setCity(c.id)}
                        className={`p-2.5 rounded-xl text-xs font-bold border transition-all text-center ${
                          city === c.id
                            ? 'bg-emerald-800 border-emerald-600 text-white'
                            : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                        }`}
                      >
                        {c.city}
                        <span className="block text-[10px] font-normal opacity-80">{c.date}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-lg transition-all flex items-center justify-center gap-2 hover:scale-[1.01]"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar y Conversar en WhatsApp con Lorena Fuentes</span>
                </button>

                <p className="text-[11px] text-slate-500 text-center">
                  Al hacer clic se abrirá WhatsApp Web o la app en tu teléfono con los datos cargados.
                </p>
              </form>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Innovett Animal Care. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <span>Caracas • Maracay • Lecherías</span>
            <span>•</span>
            <span className="text-emerald-400 font-semibold">Tasa Oficial BCV</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
