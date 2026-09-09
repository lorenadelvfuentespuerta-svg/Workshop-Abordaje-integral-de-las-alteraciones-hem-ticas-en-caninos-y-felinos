export interface ModuleItem {
  time: string;
  module: string;
  title: string;
  speaker: string;
  duration: string;
  description: string;
}

export interface Speaker {
  name: string;
  title: string;
  role: string;
  country: string;
  flag: string;
  badge: string;
  bio: string[];
  highlights: string[];
  avatar: string;
}

export interface CityEvent {
  id: string;
  city: string;
  date: string;
  day: string;
  status: string;
  locationHint: string;
}

export const WORKSHOP_INFO = {
  name: "Abordaje integral de las alteraciones hemáticas en caninos y felinos",
  badge: "Workshop Presencial Teórico - Práctico",
  organizer: "Innovett Animal Care",
  sponsors: ["Mindray Animal Medical", "Mindvet Academy"],
  advisor: {
    name: "Lorena Fuentes",
    phone: "+58 424-8767342",
    whatsappNumber: "584248767342",
  },
  pricing: {
    earlyBirdPrice: 160,
    earlyBirdDeadline: "30 de Octubre",
    regularPrice: 190,
    regularFrom: "31 de Octubre",
    currency: "USD",
    rateNote: "Aceptado a tasa oficial BCV",
    includes: [
      "Jornada intensiva completa (08:00 a 19:00 hrs)",
      "Práctica real guiada con equipos de hematología Mindray Animal Medical",
      "Coffee Break matutino y vespertino",
      "Almuerzo completo incluido",
      "Material académico exclusivo y memorias",
      "Certificado oficial con respaldo internacional",
    ],
  },
  cities: [
    {
      id: "caracas",
      city: "Caracas",
      date: "16 de Noviembre",
      day: "Lunes",
      status: "Cupos Disponibles",
      locationHint: "Salón de conferencias corporativo con facilidades de estacionamiento",
    },
    {
      id: "maracay",
      city: "Maracay",
      date: "18 de Noviembre",
      day: "Miércoles",
      status: "Cupos Disponibles",
      locationHint: "Salón principal de conferencias con facilidades de estacionamiento",
    },
    {
      id: "lecherias",
      city: "Lecherías",
      date: "20 de Noviembre",
      day: "Viernes",
      status: "Cupos Limitados",
      locationHint: "Salón ejecutivo de entrenamiento con facilidades de estacionamiento",
    },
  ] as CityEvent[],
  targetAudience: [
    "Médicos Veterinarios dedicados a la clínica de pequeños animales.",
    "Especialistas en medicina interna, emergencias y cuidados intensivos.",
    "Laboratoristas y patólogos clínicos veterinarios.",
    "Estudiantes de últimos semestres y recién egresados de Medicina Veterinaria interesados en fisiopatología hemática.",
  ],
  modules: [
    {
      time: "08:00 – 08:15",
      module: "Apertura",
      title: "Bienvenida e introducción al curso",
      speaker: "Dr. Gilberto Sánchez, Biól. MVZ Pablo Morales O. / Lcda. Tatiana Rodríguez M.",
      duration: "15 min",
      description: "Presentación del marco metodológico, objetivos del programa y contextualización del hemograma en la medicina veterinaria moderna.",
    },
    {
      time: "08:15 – 09:30",
      module: "Módulo 1",
      title: "Eritropoyesis y fisiología eritrocitaria",
      speaker: "Biól. MVZ Pablo Morales O.",
      duration: "1h 15m",
      description: "Bases celulares de la eritropoyesis, factores de regulación, morfología eritrocitaria normal y respuestas adaptativas en caninos y felinos.",
    },
    {
      time: "09:30 – 11:00",
      module: "Módulo 2",
      title: "Clasificación y abordaje diagnóstico de las principales anemias",
      speaker: "Biól. MVZ Pablo Morales O.",
      duration: "1h 30m",
      description: "Algoritmo paso a paso para diferenciar anemias regenerativas de no regenerativas, hemolíticas, hemorrágicas y por afección medular.",
    },
    {
      time: "11:00 – 11:15",
      module: "Receso",
      title: "Coffee Break Matutino",
      speaker: "Innovett",
      duration: "15 min",
      description: "Pausa para café, refrigerio y networking entre colegas.",
    },
    {
      time: "11:15 – 12:15",
      module: "Módulo 3",
      title: "Fisiología plaquetaria y trombopoyesis",
      speaker: "Biól. MVZ Pablo Morales O.",
      duration: "1h 00m",
      description: "Producción plaquetaria, cinética, hemostasia primaria y el rol del endotelio vascular en perros y gatos.",
    },
    {
      time: "12:15 – 13:30",
      module: "Módulo 4",
      title: "Abordaje del paciente trombocitopénico y principales trombocitopatías",
      speaker: "Biól. MVZ Pablo Morales O.",
      duration: "1h 15m",
      description: "Diferenciación entre consumo, secuestro, destrucción inmunomediada y fallas de producción. Criterios para transfusión y manejo terapéutico.",
    },
    {
      time: "13:30 – 14:15",
      module: "Receso",
      title: "Almuerzo y Espacio de Networking",
      speaker: "Innovett",
      duration: "45 min",
      description: "Almuerzo completo incluido para todos los participantes en un ambiente propicio para intercambio profesional.",
    },
    {
      time: "14:15 – 15:15",
      module: "Módulo 5",
      title: "Fisiología leucocitaria y mielopoyesis",
      speaker: "Biól. MVZ Pablo Morales O.",
      duration: "1h 00m",
      description: "Cinética de neutrófilos, eosinófilos, basófilos y monocitos en médula ósea y circulación periférica.",
    },
    {
      time: "15:15 – 16:30",
      module: "Módulo 6",
      title: "Abordaje de las alteraciones leucocitarias en la clínica",
      speaker: "Biól. MVZ Pablo Morales O.",
      duration: "1h 15m",
      description: "Leucocitosis, leucopenias, viraje a la izquierda regenerativo vs degenerativo, cambios tóxicos y correlación con procesos infecciosos o inflamatorios.",
    },
    {
      time: "16:30 – 16:45",
      module: "Receso",
      title: "Coffee Break Vespertino",
      speaker: "Innovett",
      duration: "15 min",
      description: "Breve descanso y recarga de energía.",
    },
    {
      time: "16:45 – 17:30",
      module: "Módulo 7",
      title: "Fisiología linfocitaria y linfopoyesis",
      speaker: "Biól. MVZ Pablo Morales O.",
      duration: "45 min",
      description: "Diferenciación linfocitaria, órganos linfoides y respuesta inmune adaptativa reflejada en el hemograma.",
    },
    {
      time: "17:30 – 18:30",
      module: "Módulo 8",
      title: "Interpretación de los linfocitos en sangre circulante",
      speaker: "Biól. MVZ Pablo Morales O.",
      duration: "1h 00m",
      description: "Linfocitosis reactiva vs neoplasias linfoproliferativas, leucemias y linfomas: claves diagnósticas para no errar.",
    },
    {
      time: "18:30 – 19:00",
      module: "Cierre Práctico",
      title: "Casos clínicos, práctica con equipos Mindray y ronda de preguntas",
      speaker: "Biól. MVZ Pablo Morales O. / Lcda. Tatiana Rodríguez M.",
      duration: "30 min",
      description: "Resolución interactiva de casos clínicos reales, aplicación con tecnología hematológica automatizada Mindray Animal Medical y entrega de certificados.",
    },
  ] as ModuleItem[],
  speakers: [
    {
      name: "Biól. MVZ Pablo José Morales Orozco",
      badge: "Ponente Internacional",
      country: "México",
      flag: "🇲🇽",
      title: "Especialista en Hematología y Hemato-oncología Veterinaria",
      role: "Biólogo, MVZ EEHDL Dipl.",
      avatar: "https://i.postimg.cc/DfBbt2PR/pablo-png-para-web.png",
      bio: [
        "Formado en el Instituto de Hematopatología y en la Universidad de Guadalajara (UDG).",
        "Cuenta con una sólida trayectoria médica enriquecida por estancias internacionales de especialización en Croacia, Costa Rica y España.",
        "Autor de diversos casos clínicos científicos publicados y ponente recurrente en congresos de alcance nacional e internacional.",
        "Miembro activo de la AVHTM (American Association of Veterinary Hematology & Transfusion Medicine) y del Colegio de Médicos Veterinarios en Pequeñas Especies.",
      ],
      highlights: [
        "Especialista en Hemato-oncología",
        "Miembro de la AVHTM",
        "Estancias en Europa y Latinoamérica",
        "Divulgador de casos clínicos de alta complejidad",
      ],
    },
    {
      name: "Lcda. Mgst. Tatiana Rodríguez Méndez",
      badge: "Especialista de Aplicaciones LATAM",
      country: "Colombia / LATAM",
      flag: "🇨🇴",
      title: "Especialista en Laboratorio Clínico Veterinario y Microbiología",
      role: "Bacterióloga, Magíster en Microbiología",
      avatar: "https://i.postimg.cc/1tYsrYDK/TATIANA.png",
      bio: [
        "Formada como Bacterióloga y Laboratorista Clínica con énfasis en Diagnóstico Clínico Veterinario.",
        "Cuenta con Maestría en Microbiología y Diplomado en Laboratorio Clínico de Pequeñas Especies, lo que le otorga un profundo dominio analítico.",
        "Líder técnica regional como Especialista de Aplicaciones LATAM para la línea de Diagnóstico In Vitro de Mindray Animal Medical.",
        "Experta en optimización de tecnología automatizada y correlación celular en frotis sanguíneos.",
      ],
      highlights: [
        "Especialista Mindray Animal Medical LATAM",
        "Magíster en Microbiología",
        "Diplomada en Pequeñas Especies",
        "Liderazgo en diagnóstico in vitro",
      ],
    },
  ] as Speaker[],
};

export function getWhatsAppLink(city?: string): string {
  const base = `https://wa.me/${WORKSHOP_INFO.advisor.whatsappNumber}`;
  const cityText = city ? ` en la ciudad de *${city}*` : "";
  const message = encodeURIComponent(
    `¡Hola Lorena! Vengo de la página web del Workshop de Hematología Veterinaria (Innovett). Me interesa apartar mi cupo con la tarifa de preventa ($160)${cityText}. ¿Me podrías indicar los datos para realizar la reserva?`
  );
  return `${base}?text=${message}`;
}
