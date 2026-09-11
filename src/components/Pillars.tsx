import React from 'react';
import { Activity, ShieldAlert, HeartPulse, Dna, Eye, Cpu } from 'lucide-react';

export const Pillars: React.FC = () => {
  const pillars = [
    {
      icon: <Activity className="w-6 h-6 text-rose-600" />,
      bg: 'bg-rose-50 border-rose-200',
      title: 'Línea Eritrocitaria y Anemias',
      desc: 'Fundamentos de la eritropoyesis, factores de regulación hormonal y clasificación sistemática de anemias regenerativas y no regenerativas.',
      tag: 'Módulos 1 y 2',
    },
    {
      icon: <HeartPulse className="w-6 h-6 text-amber-600" />,
      bg: 'bg-amber-50 border-amber-200',
      title: 'Fisiología Plaquetaria y Trombocitopatías',
      desc: 'Trombopoyesis, hemostasia primaria y abordaje clínico diferencial del paciente con trombocitopenia severa o defectos de coagulación.',
      tag: 'Módulos 3 y 4',
    },
    {
      icon: <ShieldAlert className="w-6 h-6 text-blue-600" />,
      bg: 'bg-blue-50 border-blue-200',
      title: 'Línea Leucocitaria y Mielopoyesis',
      desc: 'Dinámica de neutrófilos, monocitos y granulocitos; interpretación de leucocitosis, leucopenias y desvío a la izquierda.',
      tag: 'Módulos 5 y 6',
    },
    {
      icon: <Dna className="w-6 h-6 text-purple-600" />,
      bg: 'bg-purple-50 border-purple-200',
      title: 'Fisiología Linfocitaria y Circulante',
      desc: 'Linfopoyesis y diferenciación de linfocitosis reactiva versus desórdenes linfoproliferativos malignos (linfomas y leucemias).',
      tag: 'Módulos 7 y 8',
    },
    {
      icon: <Eye className="w-6 h-6 text-emerald-600" />,
      bg: 'bg-emerald-50 border-emerald-200',
      title: 'Lectura Fina de Frotis Sanguíneo',
      desc: 'Técnicas de extendido, tinción y reconocimiento óptico de alteraciones morfológicas, inclusiones y hemoparásitos en perros y gatos.',
      tag: 'Transversal',
    },
    {
      icon: <Cpu className="w-6 h-6 text-slate-800" />,
      bg: 'bg-slate-100 border-slate-300',
      title: 'Manejo Práctico de Instrumentación del Laboratorio',
      desc: 'Demostración y procesamiento de muestras en analizadores automatizados. Correlación práctica e interpretación experta de alarmas, gráficos e histogramas.',
      tag: 'Sesión Práctica',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold text-emerald-800 tracking-wider uppercase bg-emerald-100 px-3 py-1 rounded-full inline-block mb-3">
            Habilidades Clínicas
          </span>
          <h2 className="font-['Outfit',sans-serif] font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-900 tracking-tight mb-4">
            Lo que dominarás al finalizar la jornada
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Un recorrido exhaustivo de 360° diseñado para que nunca más tengas dudas al evaluar un hemograma en tu clínica.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-emerald-600 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${item.bg}`}>
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                    {item.tag}
                  </span>
                </div>
                <h3 className="font-['Outfit',sans-serif] font-bold text-lg text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
