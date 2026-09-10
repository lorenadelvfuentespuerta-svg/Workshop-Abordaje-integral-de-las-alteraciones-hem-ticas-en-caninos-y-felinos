import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Pillars } from './components/Pillars';
import { ValueProposition } from './components/ValueProposition';
import { AgendaSection } from './components/AgendaSection';
import { SpeakersSection } from './components/SpeakersSection';
import { CitiesSection } from './components/CitiesSection';
import { PricingSection } from './components/PricingSection';
import { RegistrationSection } from './components/RegistrationSection';
import { FaqSection } from './components/FaqSection';
import { ContactFooter } from './components/ContactFooter';
import { getWhatsAppLink } from './data/workshopData';

export default function App() {
  const [selectedCity, setSelectedCity] = useState<string>('caracas');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans antialiased selection:bg-emerald-800 selection:text-white pb-20 md:pb-0">
      {/* Navegación con barra superior integrada */}
      <Navbar selectedCity={selectedCity} />

      {/* Portada Principal (Hero) */}
      <Hero selectedCity={selectedCity} onSelectCity={setSelectedCity} />

      {/* Pilares del Workshop */}
      <Pillars />

      {/* Propuesta de Valor */}
      <ValueProposition />

      {/* Temario y Módulos */}
      <AgendaSection />

      {/* Ponentes Internacionales y Especialistas */}
      <SpeakersSection />

      {/* Sedes y Fechas por Ciudad */}
      <CitiesSection selectedCity={selectedCity} onSelectCity={setSelectedCity} />

      {/* Tarifas e Inversión */}
      <PricingSection selectedCity={selectedCity} />

      {/* Formulario de Registro Oficial */}
      <RegistrationSection selectedCity={selectedCity} onSelectCity={setSelectedCity} />

      {/* Preguntas Frecuentes */}
      <FaqSection />

      {/* Pie de Página y Contacto */}
      <ContactFooter selectedCity={selectedCity} />

      {/* Botón flotante de WhatsApp */}
      <div className="fixed bottom-5 right-5 z-40">
        <a
          href={getWhatsAppLink(selectedCity)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-xl transition-all hover:scale-105 active:scale-95"
        >
          <MessageCircle className="w-5 h-5" />
          <span>Consultar por WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
