import React, { useState } from 'react';
import { Send, CheckCircle2, Loader2, Sparkles } from 'lucide-react';
import { WORKSHOP_INFO } from '../data/workshopData';

interface RegistrationSectionProps {
  selectedCity: string;
  onSelectCity: (cityId: string) => void;
}

export const RegistrationSection: React.FC<RegistrationSectionProps> = ({
  selectedCity,
  onSelectCity,
}) => {
  const [formData, setFormData] = useState({
    Nombres: '',
    Apellidos: '',
    Cedula: '',
    Correo: '',
    Ciudad: '',
    Estado: '',
    Clinica: '',
    Ciudad_Workshop:
      selectedCity === 'maracay'
        ? 'Maracay'
        : selectedCity === 'lecherias'
        ? 'Lecherías'
        : 'Caracas',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (name === 'Ciudad_Workshop') {
      if (value === 'Maracay') onSelectCity('maracay');
      else if (value === 'Lecherías') onSelectCity('lecherias');
      else onSelectCity('caracas');
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const nombres = formData.Nombres.trim();
    const apellidos = formData.Apellidos.trim();
    const ciudadWorkshop = formData.Ciudad_Workshop;

    const phone = '584248767342';
    const message = `¡Hola! Soy ${nombres} ${apellidos}. Acabo de completar mi registro para el workshop de Innovett en ${ciudadWorkshop}. Quiero información para concretar mi pago.`;
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    let hasRedirected = false;
    const redirect = () => {
      if (!hasRedirected) {
        hasRedirected = true;
        setSubmitted(true);
        window.location.href = whatsappUrl;
      }
    };

    const targetURL = 'https://script.google.com/macros/s/AKfycbxTCxU-lLxkZTk7tqNrsyEUFSCwIkwyoVpNJ6bEfbMATgD9Xa0JEKTqZyEtit6FQlWn/exec';

    // Obtener o crear el iframe invisible para forzar el envío a Google Sheets sin bloqueos
    let iframe = document.getElementById('hidden_iframe') as HTMLIFrameElement | null;
    if (!iframe) {
      iframe = document.createElement('iframe');
      iframe.name = 'hidden_iframe';
      iframe.id = 'hidden_iframe';
      iframe.style.display = 'none';
      document.body.appendChild(iframe);
    }

    iframe.onload = () => {
      redirect();
    };

    // Creamos un formulario dinámico que viaja a través del iframe invisible
    const hiddenForm = document.createElement('form');
    hiddenForm.action = targetURL;
    hiddenForm.method = 'POST';
    hiddenForm.target = 'hidden_iframe';

    const entries: [string, string][] = [
      ['Nombres', formData.Nombres],
      ['Apellidos', formData.Apellidos],
      ['Cedula', formData.Cedula],
      ['Correo', formData.Correo],
      ['Ciudad', formData.Ciudad],
      ['Estado', formData.Estado],
      ['Clinica', formData.Clinica],
      ['Ciudad_Workshop', formData.Ciudad_Workshop],
    ];

    entries.forEach(([key, val]) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = val;
      hiddenForm.appendChild(input);
    });

    document.body.appendChild(hiddenForm);
    hiddenForm.submit();

    // Fallback de seguridad por si el navegador no dispara onload en iframe externo
    setTimeout(() => {
      redirect();
      if (hiddenForm.parentNode) {
        hiddenForm.parentNode.removeChild(hiddenForm);
      }
    }, 1800);
  };

  return (
    <section id="registro" className="py-16 md:py-24 bg-gradient-to-b from-white to-emerald-50/50 border-b border-slate-200 scroll-mt-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <span className="text-xs font-bold text-emerald-800 tracking-wider uppercase bg-emerald-100 px-3.5 py-1 rounded-full inline-flex items-center gap-1 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Registro Oficial en Base de Datos
          </span>
          <h2 className="font-['Outfit',sans-serif] font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight mb-3">
            Formulario de Inscripción
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            Completa tus datos profesionales. Al enviar, la información se almacenará automáticamente y serás redirigido a WhatsApp para coordinar tu método de pago con la asesora académica.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl relative">
          {submitted ? (
            <div className="text-center py-10">
              <CheckCircle2 className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
              <h3 className="font-['Outfit',sans-serif] font-bold text-2xl text-slate-900 mb-2">
                ¡Registro Enviado Exitosamente!
              </h3>
              <p className="text-slate-600 text-sm mb-6 max-w-md mx-auto">
                Si no se abrió automáticamente tu ventana de WhatsApp, haz clic en el siguiente botón para continuar:
              </p>
              <a
                href={`https://wa.me/584248767342?text=${encodeURIComponent(
                  `¡Hola! Soy ${formData.Nombres} ${formData.Apellidos}. Acabo de completar mi registro para el workshop de Innovett en ${formData.Ciudad_Workshop}. Quiero información para concretar mi pago.`
                )}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-800 text-white font-bold text-sm shadow-md"
              >
                Abrir WhatsApp Ahora
              </a>
            </div>
          ) : (
            <form id="registroForm" onSubmit={handleSubmit} className="space-y-5">
              {/* Ciudad Workshop */}
              <div>
                <label
                  htmlFor="Ciudad_Workshop"
                  className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
                >
                  Sede del Workshop *
                </label>
                <select
                  id="Ciudad_Workshop"
                  name="Ciudad_Workshop"
                  required
                  value={formData.Ciudad_Workshop}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20 bg-slate-50 text-slate-900 text-sm font-semibold transition-all outline-none"
                >
                  <option value="Caracas">Caracas - Lunes 16 de Noviembre</option>
                  <option value="Maracay">Maracay - Miércoles 18 de Noviembre</option>
                  <option value="Lecherías">Lecherías - Viernes 20 de Noviembre</option>
                </select>
              </div>

              {/* Nombres y Apellidos */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="Nombres"
                    className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                  >
                    Nombres *
                  </label>
                  <input
                    type="text"
                    id="Nombres"
                    name="Nombres"
                    required
                    value={formData.Nombres}
                    onChange={handleChange}
                    placeholder="Ej. Carlos Eduardo"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20 bg-slate-50 text-slate-900 text-sm transition-all outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="Apellidos"
                    className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                  >
                    Apellidos *
                  </label>
                  <input
                    type="text"
                    id="Apellidos"
                    name="Apellidos"
                    required
                    value={formData.Apellidos}
                    onChange={handleChange}
                    placeholder="Ej. Mendoza Silva"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20 bg-slate-50 text-slate-900 text-sm transition-all outline-none"
                  />
                </div>
              </div>

              {/* Cedula y Correo */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="Cedula"
                    className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                  >
                    Cédula / Identificación *
                  </label>
                  <input
                    type="text"
                    id="Cedula"
                    name="Cedula"
                    required
                    value={formData.Cedula}
                    onChange={handleChange}
                    placeholder="Ej. V-18.452.123"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20 bg-slate-50 text-slate-900 text-sm transition-all outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="Correo"
                    className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                  >
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    id="Correo"
                    name="Correo"
                    required
                    value={formData.Correo}
                    onChange={handleChange}
                    placeholder="tu.correo@ejemplo.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20 bg-slate-50 text-slate-900 text-sm transition-all outline-none"
                  />
                </div>
              </div>

              {/* Ciudad y Estado */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="Ciudad"
                    className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                  >
                    Ciudad de Residencia *
                  </label>
                  <input
                    type="text"
                    id="Ciudad"
                    name="Ciudad"
                    required
                    value={formData.Ciudad}
                    onChange={handleChange}
                    placeholder="Ej. Valencia / Caracas / Maracay"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20 bg-slate-50 text-slate-900 text-sm transition-all outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="Estado"
                    className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                  >
                    Estado *
                  </label>
                  <input
                    type="text"
                    id="Estado"
                    name="Estado"
                    required
                    value={formData.Estado}
                    onChange={handleChange}
                    placeholder="Ej. Carabobo / Miranda / Aragua"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20 bg-slate-50 text-slate-900 text-sm transition-all outline-none"
                  />
                </div>
              </div>

              {/* Clinica */}
              <div>
                <label
                  htmlFor="Clinica"
                  className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                >
                  Clínica Veterinaria o Laboratorio de Procedencia *
                </label>
                <input
                  type="text"
                  id="Clinica"
                  name="Clinica"
                  required
                  value={formData.Clinica}
                  onChange={handleChange}
                  placeholder="Ej. Centro Veterinario Altamira / Práctica Independiente"
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20 bg-slate-50 text-slate-900 text-sm transition-all outline-none"
                />
              </div>

              {/* Notice */}
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 flex items-start gap-2.5">
                <span className="text-base">📲</span>
                <p>
                  <strong>Flujo automatizado:</strong> Al presionar el botón, tus datos se guardarán en la hoja de Google Sheets y serás transferido a WhatsApp con el mensaje listo para gestionar tu pago con nuestra asesora Lorena Fuentes.
                </p>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                id="submit-btn"
                disabled={isSubmitting}
                className="w-full py-4 px-6 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-base sm:text-lg shadow-lg shadow-emerald-900/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Guardando datos y redirigiendo a WhatsApp...</span>
                  </>
                ) : (
                  <>
                    <span>Confirmar Inscripción y Gestionar Pago</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
