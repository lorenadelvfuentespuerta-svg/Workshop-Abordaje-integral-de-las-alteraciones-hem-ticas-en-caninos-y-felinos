/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MessageCircle, Code2, Sparkles, ChevronRight } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ValueProposition } from './components/ValueProposition';
import { Pillars } from './components/Pillars';
import { CitiesSection } from './components/CitiesSection';
import { AgendaSection } from './components/AgendaSection';
import { SpeakersSection } from './components/SpeakersSection';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { ContactFooter } from './components/ContactFooter';
import { HtmlCodeModal } from './components/HtmlCodeModal';
import { STANDALONE_HTML } from './data/standaloneHtml';
import { WORKSHOP_INFO, getWhatsAppLink } from './data/workshopData';

export default function App() {
  const [selectedCity, setSelectedCity] = useState<string>('caracas');
  const [isCodeModalOpen, setIsCodeModalOpen] = useState<boolean>(false);

  const currentCityObj =
    WORKSHOP_INFO.cities.find((c) => c.id === selectedCity) || WORKSHOP_INFO.cities[0];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-emerald-800 selection:text-white pb-16 sm:pb-0 font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Navigation Header */}
      <Navbar
        onOpenCodeModal={() => setIsCodeModalOpen(true)}
        selectedCity={currentCityObj.city}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          selectedCity={selectedCity}
          onSelectCity={(cityId) => setSelectedCity(cityId)}
        />

        {/* Clinical Problem & Justification */}
        <ValueProposition />

        {/* Core Pillars / Takeaways */}
        <Pillars />

        {/* Venezuela Cities & Dates Selector */}
        <CitiesSection
          selectedCity={selectedCity}
          onSelectCity={(cityId) => setSelectedCity(cityId)}
        />

        {/* Full 8-Module Timeline Agenda */}
        <AgendaSection />

        {/* International Speakers */}
        <SpeakersSection />

        {/* Investment & Pricing Comparison */}
        <PricingSection selectedCity={currentCityObj.city} />

        {/* FAQ Section */}
        <FaqSection />
      </main>

      {/* Contact & Footer */}
      <ContactFooter selectedCity={selectedCity} />

      {/* Floating Desktop Quick Actions */}
      <div className="hidden lg:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-2.5">
        <button
          onClick={() => setIsCodeModalOpen(true)}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-900/90 hover:bg-slate-900 text-white font-bold text-xs shadow-xl backdrop-blur-sm border border-slate-700 transition-all hover:scale-105"
          title="Ver y copiar el código HTML independiente (Single-File)"
        >
          <Code2 className="w-4 h-4 text-emerald-400" />
          <span>Copiar Código HTML</span>
        </button>

        <a
          href={getWhatsAppLink(currentCityObj.city)}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 px-5 py-3.5 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-sm shadow-2xl transition-all hover:scale-105 active:scale-95"
          title="Escribir a Lorena Fuentes por WhatsApp"
        >
          <div className="relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75"></span>
            <MessageCircle className="w-5 h-5 fill-current relative" />
          </div>
          <span>Inscribirme en {currentCityObj.city}</span>
          <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </a>
      </div>

      {/* Sticky Bottom Action Bar on Mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 p-3 sm:hidden shadow-lg flex items-center justify-between gap-3">
        <div>
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wide block">
            Preventa {currentCityObj.city}
          </span>
          <div className="flex items-baseline gap-1">
            <span className="font-['Outfit',sans-serif] font-black text-xl text-slate-900">
              ${WORKSHOP_INFO.pricing.earlyBirdPrice}
            </span>
            <span className="text-xs text-slate-400 line-through">
              ${WORKSHOP_INFO.pricing.regularPrice}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 flex-1 justify-end">
          <button
            onClick={() => setIsCodeModalOpen(true)}
            className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors border border-slate-200"
            title="Ver código HTML"
          >
            <Code2 className="w-4 h-4" />
          </button>
          <a
            href={getWhatsAppLink(currentCityObj.city)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 max-w-[200px] text-center py-2.5 px-3 rounded-xl bg-emerald-800 text-white font-bold text-xs shadow-md flex items-center justify-center gap-1.5"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span>Apartar en WhatsApp</span>
          </a>
        </div>
      </div>

      {/* HTML Single-File Code Modal */}
      <HtmlCodeModal
        isOpen={isCodeModalOpen}
        onClose={() => setIsCodeModalOpen(false)}
        htmlCode={STANDALONE_HTML}
      />
    </div>
  );
}
