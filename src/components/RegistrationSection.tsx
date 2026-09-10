import React, { useState } from 'react';
import { Send, CheckCircle2, Loader2, Sparkles } from 'lucide-react';
import { WORKSHOP_INFO } from '../data/workshopData';

interface RegistrationSectionProps {
  selectedCity: string;
  onSelectCity: (cityId: string) => void;
}

// Google Form ID oficial: 1FAIpQLSfQRE5d0XywrILRl9l_DJG-8hhYOa4zgmfxVbTaJosJWCupNA
const GOOGLE_FORM_ACTION =
  'https://docs.google.com/forms/d/e/1FAIpQLSfQRE5d0XywrILRl9l_DJG-8hhYOa4zgmfxVbTaJosJWCupNA/formResponse';
const BACKUP_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbxTCxU-lLxkZTk7tqNrsyEUFSCwIkwyoVpNJ6bEfbMATgD9Xa0JEKTqZyEtit6FQlWn/exec';

// Mapeo exacto de los campos extraídos del Google Form
const GOOGLE_FORM_ENTRIES = {
  Nombres: 'entry.968290457',
  Apellidos: 'entry.1955546545',
  Cedula: 'entry.1752687897',
  Correo: 'entry.671405124',
  Telefono: 'entry.1144151808',
  Ciudad: 'entry.1003990398',
  Estado: 'entry.1499429720',
  Ciudad_Workshop: 'entry.426561982',
};

export const RegistrationSection: React.FC<RegistrationSectionProps> = ({
  selectedCity,
  onSelectCity,
}) => {
  const [formData, setFormData] = useState({
    Nombres: '',
    Apellidos: '',
    Cedula: '',
    Correo: '',
    Telefono: '',
    Ciudad: '',
    Estado: '',
    Clinica: '',
    Ciudad_Workshop:
      selectedCity === 'maracay'
        ? 'Maracay'
        : selectedCity === 'lecherias'
        ? 'Lechería'
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
      else if (value === 'Lechería' || value === 'Lecherías') onSelectCity('lecherias');
      else onSelectCity('caracas');
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const nombres = formData.Nombres.trim();
    const apellidos = formData.Apellidos.trim();
    const ciudadWorkshop = formData.Ciudad_Workshop;
    const telefono = formData.Telefono.trim();

    const asesorWhatsApp = '584248767342';
    const message = `¡Hola! Soy ${nombres} ${apellidos}. Acabo de completar mi registro para el workshop de Innovett en ${ciudadWorkshop}.\n\nCédula: ${formData.Cedula}\nTeléfono: ${telefono}\nCiudad: ${formData.Ciudad}\n\nQuiero coordinar la información de pago para asegurar mi cupo.`;
    const whatsappUrl = `https://wa.me/${asesorWhatsApp}?text=${encodeURIComponent(message)}`;

    let hasRedirected = false;
    const redirect = () => {
      if (!hasRedirected) {
        hasRedirected = true;
        setSubmitted(true);
        window.location.href = whatsappUrl;
      }
    };

    // 1. Preparar envío a Google Forms en segundo plano mediante fetch (no-cors)
    try {
      const gFormData = new URLSearchParams();
      gFormData.append(GOOGLE_FORM_ENTRIES.Nombres, formData.Nombres);
      gFormData.append(GOOGLE_FORM_ENTRIES.Apellidos, formData.Apellidos);
      gFormData.append(GOOGLE_FORM_ENTRIES.Cedula, formData.Cedula);
      gFormData.append(GOOGLE_FORM_ENTRIES.Correo, formData.Correo);
      gFormData.append(GOOGLE_FORM_ENTRIES.Telefono, formData.Telefono);
      gFormData.append(GOOGLE_FORM_ENTRIES.Ciudad, formData.Ciudad);
      gFormData.append(GOOGLE_FORM_ENTRIES.Estado, formData.Estado);
      gFormData.append(GOOGLE_FORM_ENTRIES.Ciudad_Workshop, formData.Ciudad_Workshop);

      fetch(GOOGLE_FORM_ACTION, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: gFormData.toString(),
      }).catch(() => {
        // Ignorar errores silenciosos de no-cors
      });
    } catch (err) {
      console.warn('Error en fetch no-cors a Google Forms:', err);
    }

    // 2. Garantizar recepción en Google Forms mediante el form dinámico a iframe oculto
    let iframe = document.getElementById('gform_hidden_iframe') as HTMLIFrameElement | null;
    if (!iframe) {
      iframe = document.createElement('iframe');
      iframe.name = 'gform_hidden_iframe';
      iframe.id = 'gform_hidden_iframe';
      iframe.style.display = 'none';
      document.body.appendChild(iframe);
    }

    iframe.onload = () => {
      redirect();
    };

    const hiddenForm = document.createElement('form');
    hiddenForm.action = GOOGLE_FORM_ACTION;
    hiddenForm.method = 'POST';
    hiddenForm.target = 'gform_hidden_iframe';

    const googleFormFields: [string, string][] = [
      [GOOGLE_FORM_ENTRIES.Nombres, formData.Nombres],
      [GOOGLE_FORM_ENTRIES.Apellidos, formData.Apellidos],
      [GOOGLE_FORM_ENTRIES.Cedula, formData.Cedula],
      [GOOGLE_FORM_ENTRIES.Correo, formData.Correo],
      [GOOGLE_FORM_ENTRIES.Telefono, formData.Telefono],
      [GOOGLE_FORM_ENTRIES.Ciudad, formData.Ciudad],
      [GOOGLE_FORM_ENTRIES.Estado, formData.Estado],
      [GOOGLE_FORM_ENTRIES.Ciudad_Workshop, formData.Ciudad_Workshop],
    ];

    googleFormFields.forEach(([name, val]) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = name;
      input.value = val;
      hiddenForm.appendChild(input);
    });

    // También enviamos al script de respaldo en paralelo
    try {
      const backupData = new FormData();
      backupData.append('Nombres', formData.Nombres);
      backupData.append('Apellidos', formData.Apellidos);
      backupData.append('Cedula', formData.Cedula);
      backupData.append('Correo', formData.Correo);
      backupData.append('Telefono', formData.Telefono);
      backupData.append('Ciudad', formData.Ciudad);
      backupData.append('Estado', formData.Estado);
      backupData.append('Clinica', formData.Clinica);
      backupData.append('Ciudad_Workshop', formData.Ciudad_Workshop);

      fetch(BACKUP_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: backupData,
      }).catch(() => {});
    } catch (_) {}

    document.body.appendChild(hiddenForm);
    hiddenForm.submit();

    // Redirección asegurada a WhatsApp en máximo 1.8s
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

              {/* Cedula y Telefono */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="Cedula"
                    className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                  >
                    Cédula de Identidad *
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
                    htmlFor="Telefono"
                    className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                  >
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="Telefono"
                    name="Telefono"
                    required
                    value={formData.Telefono}
                    onChange={handleChange}
                    placeholder="Ej. +58 412 1234567"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20 bg-slate-50 text-slate-900 text-sm transition-all outline-none"
                  />
                </div>
              </div>

              {/* Correo y Ciudad */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    placeholder="Ej. Caracas / Valencia / Maracay"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20 bg-slate-50 text-slate-900 text-sm transition-all outline-none"
                  />
                </div>
              </div>

              {/* Estado y Clinica */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    placeholder="Ej. Miranda / Aragua / Carabobo"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20 bg-slate-50 text-slate-900 text-sm transition-all outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="Clinica"
                    className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                  >
                    Clínica / Empresa *
                  </label>
                  <input
                    type="text"
                    id="Clinica"
                    name="Clinica"
                    required
                    value={formData.Clinica}
                    onChange={handleChange}
                    placeholder="Ej. Centro Vet / Laboratorio"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700/20 bg-slate-50 text-slate-900 text-sm transition-all outline-none"
                  />
                </div>
              </div>

              {/* Notice */}
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 flex items-start gap-2.5">
                <span className="text-base">📋</span>
                <p>
                  <strong>Sincronización en vivo:</strong> Al enviar el formulario, tus respuestas quedarán registradas de inmediato en el <strong>Google Form y base de datos oficial</strong> del workshop, y se abrirá WhatsApp con tus datos listos para coordinar el pago.
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
                    <span>Guardando en Google Forms y redirigiendo...</span>
                  </>
                ) : (
                  <>
                    <span>Completar Inscripción y Pagar</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="text-center pt-2">
                <p className="text-xs text-slate-500">
                  ¿Prefieres llenar el formulario directamente en Google?{' '}
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfQRE5d0XywrILRl9l_DJG-8hhYOa4zgmfxVbTaJosJWCupNA/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-700 font-semibold underline hover:text-emerald-800"
                  >
                    Abrir en Google Forms
                  </a>
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
