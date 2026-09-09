// Export the standalone Single-File HTML with Tailwind CSS via CDN and interactive anchors
export const STANDALONE_HTML = `<!DOCTYPE html>
<html lang="es" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Abordaje integral de las alteraciones hemáticas en caninos y felinos | Innovett & Mindray</title>
  <meta name="description" content="Workshop teórico-práctico: Abordaje integral de las alteraciones hemáticas en caninos y felinos. Caracas, Maracay y Lecherías. Ponentes internacionales y práctica en analizadores Mindray.">
  <meta property="og:title" content="Abordaje integral de las alteraciones hemáticas en caninos y felinos | Innovett & Mindray">
  <meta property="og:description" content="Workshop teórico-práctico: Abordaje integral de las alteraciones hemáticas en caninos y felinos. Caracas, Maracay y Lecherías. Ponentes internacionales y práctica en analizadores Mindray.">
  <meta property="og:type" content="website">

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            brand: {
              50: '#f0fdf4',
              100: '#dcfce7',
              500: '#16a34a',
              600: '#15803d',
              700: '#166534',
              800: '#006837', // Verde Innovett
              900: '#052e16',
            }
          },
          fontFamily: {
            sans: ['"Plus Jakarta Sans"', 'sans-serif'],
            display: ['"Outfit"', 'sans-serif'],
          }
        }
      }
    }
  </script>
</head>
<body class="bg-slate-50 text-slate-800 font-sans antialiased selection:bg-emerald-800 selection:text-white pb-20 md:pb-0">

  <!-- Urgency Top Bar -->
  <div class="bg-slate-900 text-white text-xs sm:text-sm py-2 px-4 border-b border-slate-800 sticky top-0 z-50">
    <div class="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
      <div class="flex items-center gap-2">
        <span class="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-amber-400 text-slate-950 uppercase tracking-wide">
          ⚡ Preventa Activa
        </span>
        <span class="text-slate-200">
          Asegura tu cupo por <strong class="text-white font-bold">$160</strong> antes del <strong>30 de Octubre</strong> (Ahorras $30).
        </span>
      </div>
      <a href="https://wa.me/584248767342?text=%C2%A1Hola%20Lorena!%20Deseo%20aprovechar%20la%20tarifa%20de%20preventa%20($160)%20para%20el%20Workshop%20de%20Hematolog%C3%ADa%20Veterinaria." target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 font-bold text-emerald-400 hover:text-emerald-300 underline underline-offset-4 whitespace-nowrap transition-colors">
        Asegurar cupo en WhatsApp →
      </a>
    </div>
  </div>

  <!-- Header -->
  <header class="bg-white/95 backdrop-blur-md border-b border-slate-200 sticky top-9 z-40">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
      <a href="#" class="flex items-center gap-2">
        <svg viewBox="0 0 520 165" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-10 sm:h-11 w-auto" role="img" aria-label="Innovett animal care">
          <circle cx="27" cy="46" r="14" fill="#156534" />
          <path d="M 33 41 C 100 -12, 330 -10, 442 34 C 330 3, 105 5, 30 46 Z" fill="#156534" />
          <text x="12" y="118" fill="#156534" font-family="'Outfit', 'Montserrat', 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-size="92" font-weight="900" letter-spacing="-0.04em">innovett</text>
          <text x="512" y="156" text-anchor="end" fill="#156534" font-family="'Outfit', 'Montserrat', 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-size="36" font-weight="800" letter-spacing="0.01em">animal care</text>
        </svg>
      </a>
      <nav class="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-600">
        <a href="#beneficios" class="hover:text-emerald-800 transition-colors">Beneficios</a>
        <a href="#ciudades" class="hover:text-emerald-800 transition-colors">Fechas y Sedes</a>
        <a href="#programa" class="hover:text-emerald-800 transition-colors">Temario</a>
        <a href="#ponentes" class="hover:text-emerald-800 transition-colors">Ponentes</a>
        <a href="#inversion" class="hover:text-emerald-800 transition-colors">Inversión</a>
      </nav>
      <a href="https://wa.me/584248767342?text=%C2%A1Hola%20Lorena!%20Deseo%20inscribirme%20en%20el%20Workshop%20de%20Hematolog%C3%ADa%20Veterinaria." target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all">
        Inscribirme vía WhatsApp
      </a>
    </div>
  </header>

  <!-- Hero Section -->
  <section class="relative pt-8 pb-16 md:pt-14 md:pb-24 bg-gradient-to-b from-white via-slate-50 to-slate-100 border-b border-slate-200">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="flex flex-wrap items-center gap-2 mb-4">
        <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
          Workshop Presencial Teórico - Práctico
        </span>
        <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
          📍 Caracas • Maracay • Lecherías
        </span>
        <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-red-50 text-rose-700 border border-rose-200">
          Patrocinado por Mindray Animal Medical & Mindvet Academy
        </span>
      </div>

      <div class="max-w-3xl">
        <h1 class="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.12] mb-6">
          Abordaje integral de las <span class="text-emerald-800 underline decoration-emerald-300 decoration-wavy underline-offset-4">alteraciones hemáticas</span> en caninos y felinos
        </h1>

        <p class="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed mb-8">
          Aprende a interpretar hemogramas complejos, clasificar anemias y trombocitopenias con precisión diagnóstica y realiza <strong>práctica directa en analizadores automatizados Mindray</strong> con especialistas internacionales de México y Colombia.
        </p>

        <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
          <a href="#ciudades" class="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-base shadow-lg shadow-emerald-800/25 transition-all">
            Seleccionar Ciudad y Reservar Cupo
          </a>
          <a href="https://wa.me/584248767342?text=%C2%A1Hola%20Lorena!%20Quiero%20solicitar%20informaci%C3%B3n%20del%20Workshop%20de%20Hematolog%C3%ADa%20Veterinaria." target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-base border border-slate-300 shadow-sm transition-all">
            Consultar con Asesora
          </a>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-200">
          <div>
            <p class="text-xs text-slate-500 font-medium uppercase tracking-wider">Duración</p>
            <p class="font-display font-bold text-slate-900 text-base sm:text-lg">11 Horas</p>
            <p class="text-xs text-slate-500">08:00 a 19:00 hrs</p>
          </div>
          <div>
            <p class="text-xs text-slate-500 font-medium uppercase tracking-wider">Metodología</p>
            <p class="font-display font-bold text-slate-900 text-base sm:text-lg">Teórico + Práctico</p>
            <p class="text-xs text-slate-500">Con analizadores reales</p>
          </div>
          <div>
            <p class="text-xs text-slate-500 font-medium uppercase tracking-wider">Ponentes</p>
            <p class="font-display font-bold text-slate-900 text-base sm:text-lg">Internacionales</p>
            <p class="text-xs text-slate-500">México 🇲🇽 y Colombia 🇨🇴</p>
          </div>
          <div>
            <p class="text-xs text-slate-500 font-medium uppercase tracking-wider">Incluye</p>
            <p class="font-display font-bold text-slate-900 text-base sm:text-lg">Todo Incluido</p>
            <p class="text-xs text-slate-500">Almuerzo, Coffee y Certificado</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Problem / Solution Section -->
  <section id="beneficios" class="py-16 md:py-20 bg-white border-b border-slate-200">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div class="lg:col-span-7">
          <span class="text-xs font-bold text-rose-600 tracking-wider uppercase bg-rose-50 px-3 py-1 rounded-full border border-rose-100 inline-block mb-3">
            La Realidad en la Clínica Diaria
          </span>
          <h2 class="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-900 tracking-tight mb-5">
            ¿Cuántas alteraciones hemáticas están pasando desapercibidas en tu consulta?
          </h2>
          <p class="text-slate-600 text-base leading-relaxed mb-4">
            Las enfermedades hematológicas —<strong>anemias, trombocitopenias, leucocitosis, leucopenias y alteraciones linfocitarias</strong>— figuran entre los motivos de consulta más frecuentes en la clínica de pequeños animales, y con frecuencia son subdiagnosticadas o mal interpretadas por falta de una formación específica en fisiopatología hemática.
          </p>
          <p class="text-slate-600 text-base leading-relaxed mb-6">
            Un abordaje diagnóstico deficiente puede retrasar el tratamiento oportuno y comprometer el pronóstico y la vida del paciente.
          </p>
          <div class="space-y-3">
            <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-700">
              ✓ <strong>Diferenciación exacta de anemias:</strong> Algoritmo metódico para clasificar si es regenerativa, hemolítica o hipoplásica.
            </div>
            <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-700">
              ✓ <strong>Abordaje del paciente trombocitopénico:</strong> Discierne entre trombocitopenia inmunomediada, infecciosa o por consumo.
            </div>
            <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-700">
              ✓ <strong>Práctica con analizadores Mindray:</strong> Lee histogramas, curvas de dispersión y correlaciónalas en vivo con frotis sanguíneo.
            </div>
          </div>
        </div>

        <div class="lg:col-span-5">
          <div class="bg-gradient-to-br from-slate-900 to-emerald-950 text-white p-7 rounded-2xl shadow-xl border border-slate-800">
            <span class="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-2">Compromiso Académico</span>
            <h3 class="font-display font-bold text-2xl text-white mb-4">Formación de Nivel Internacional en Venezuela</h3>
            <p class="text-slate-300 text-sm leading-relaxed mb-6">
              Fortalecer estas competencias responde a una necesidad real de actualización profesional, acercando formación dictada por ponentes internacionales a los médicos veterinarios de Caracas, Maracay y Lecherías.
            </p>
            <div class="border-t border-slate-800 pt-5 space-y-3">
              <div class="flex items-center justify-between text-xs text-slate-300">
                <span>Aval Institucional:</span>
                <strong class="text-white">Innovett & Mindray Academy</strong>
              </div>
              <div class="flex items-center justify-between text-xs text-slate-300">
                <span>Intensidad:</span>
                <strong class="text-white">11 Horas Académicas Certificadas</strong>
              </div>
              <div class="flex items-center justify-between text-xs text-slate-300">
                <span>Almuerzo y Coffee:</span>
                <strong class="text-white">100% Incluidos</strong>
              </div>
            </div>
            <div class="mt-6">
              <a href="#inversion" class="w-full text-center block py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-colors">
                Ver Precios de Preventa
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 3 Ciudades y Fechas -->
  <section id="ciudades" class="py-16 md:py-20 bg-slate-50 border-b border-slate-200">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="text-center max-w-2xl mx-auto mb-12">
        <span class="text-xs font-bold text-emerald-800 tracking-wider uppercase bg-emerald-100 px-3 py-1 rounded-full inline-block mb-3">
          Gira Noviembre Venezuela
        </span>
        <h2 class="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-900 tracking-tight mb-4">
          Ciudades y Fechas Confirmadas
        </h2>
        <p class="text-slate-600 text-sm sm:text-base">
          Elige tu ciudad y asegura tu cupo con tarifa de pronto pago ($160) antes del 30 de octubre.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <!-- Caracas -->
        <div class="bg-white rounded-2xl border-2 border-emerald-800 p-6 flex flex-col justify-between shadow-sm">
          <div>
            <div class="flex items-center justify-between mb-3">
              <span class="px-2.5 py-1 rounded text-xs font-bold bg-slate-100 text-slate-800">Sede 01</span>
              <span class="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">Cupos Disponibles</span>
            </div>
            <h3 class="font-display font-black text-3xl text-slate-900 mb-1">Caracas</h3>
            <p class="text-emerald-800 font-bold text-base mb-3">Lunes, 16 de Noviembre</p>
            <p class="text-xs text-slate-500 mb-6">08:00 a 19:00 hrs. Sede confirmada al formalizar inscripción.</p>
          </div>
          <a href="https://wa.me/584248767342?text=%C2%A1Hola%20Lorena!%20Deseo%20apartar%20mi%20cupo%20con%20preventa%20para%20el%20Workshop%20en%20*Caracas*%20(16%20Nov)." target="_blank" rel="noopener noreferrer" class="w-full text-center py-3.5 px-4 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all">
            Apartar Cupo en Caracas
          </a>
        </div>

        <!-- Maracay -->
        <div class="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-sm hover:border-emerald-800 transition-all">
          <div>
            <div class="flex items-center justify-between mb-3">
              <span class="px-2.5 py-1 rounded text-xs font-bold bg-slate-100 text-slate-800">Sede 02</span>
              <span class="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">Cupos Disponibles</span>
            </div>
            <h3 class="font-display font-black text-3xl text-slate-900 mb-1">Maracay</h3>
            <p class="text-emerald-800 font-bold text-base mb-3">Miércoles, 18 de Noviembre</p>
            <p class="text-xs text-slate-500 mb-6">08:00 a 19:00 hrs. Sede confirmada al formalizar inscripción.</p>
          </div>
          <a href="https://wa.me/584248767342?text=%C2%A1Hola%20Lorena!%20Deseo%20apartar%20mi%20cupo%20con%20preventa%20para%20el%20Workshop%20en%20*Maracay*%20(18%20Nov)." target="_blank" rel="noopener noreferrer" class="w-full text-center py-3.5 px-4 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all">
            Apartar Cupo en Maracay
          </a>
        </div>

        <!-- Lecherías -->
        <div class="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-sm hover:border-emerald-800 transition-all">
          <div>
            <div class="flex items-center justify-between mb-3">
              <span class="px-2.5 py-1 rounded text-xs font-bold bg-slate-100 text-slate-800">Sede 03</span>
              <span class="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">Últimos Cupos</span>
            </div>
            <h3 class="font-display font-black text-3xl text-slate-900 mb-1">Lecherías</h3>
            <p class="text-emerald-800 font-bold text-base mb-3">Viernes, 20 de Noviembre</p>
            <p class="text-xs text-slate-500 mb-6">08:00 a 19:00 hrs. Sede confirmada al formalizar inscripción.</p>
          </div>
          <a href="https://wa.me/584248767342?text=%C2%A1Hola%20Lorena!%20Deseo%20apartar%20mi%20cupo%20con%20preventa%20para%20el%20Workshop%20en%20*Lecher%C3%ADas*%20(20%20Nov)." target="_blank" rel="noopener noreferrer" class="w-full text-center py-3.5 px-4 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-all">
            Apartar Cupo en Lecherías
          </a>
        </div>
      </div>

      <div class="p-6 rounded-2xl bg-slate-900 text-white">
        <h4 class="font-display font-bold text-lg text-emerald-400 mb-2">Dirigido a:</h4>
        <p class="text-sm text-slate-300">
          Médicos veterinarios clínicos, especialistas en medicina interna y cuidados intensivos, laboratoristas clínicos veterinarios, estudiantes de últimos semestres y egresados de Medicina Veterinaria interesados en fortalecer competencias en fisiopatología hemática y abordajes diagnósticos y terapéuticos.
        </p>
      </div>
    </div>
  </section>

  <!-- Programa Completo -->
  <section id="programa" class="py-16 md:py-20 bg-white border-b border-slate-200">
    <div class="max-w-4xl mx-auto px-4 sm:px-6">
      <div class="text-center max-w-2xl mx-auto mb-12">
        <span class="text-xs font-bold text-emerald-800 tracking-wider uppercase bg-emerald-100 px-3 py-1 rounded-full inline-block mb-3">
          Cronograma Detallado
        </span>
        <h2 class="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-900 tracking-tight mb-4">
          Programa del Workshop (08:00 a 19:00 hrs)
        </h2>
        <p class="text-slate-600 text-sm sm:text-base">
          8 módulos intensivos más sesión práctica con equipos de hematología automatizada Mindray Animal Medical.
        </p>
      </div>

      <div class="space-y-3">
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm">
          <span class="font-bold text-slate-900">08:00 – 08:15</span> | <strong>Apertura</strong> – Bienvenida e introducción (Dr. Gilberto Sánchez, Biól. MVZ Pablo Morales O. / Lcda. Tatiana Rodríguez M.)
        </div>
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm">
          <span class="font-bold text-emerald-800">08:15 – 09:30</span> | <strong>Módulo 1:</strong> Eritropoyesis y fisiología eritrocitaria (Biól. MVZ Pablo Morales O. - 1h 15m)
        </div>
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm">
          <span class="font-bold text-emerald-800">09:30 – 11:00</span> | <strong>Módulo 2:</strong> Clasificación y abordaje diagnóstico de las principales anemias (Biól. MVZ Pablo Morales O. - 1h 30m)
        </div>
        <div class="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs font-semibold text-amber-900 flex justify-between">
          <span>☕ 11:00 – 11:15 | Receso / Coffee Break (15 min)</span>
          <span>Incluido</span>
        </div>
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm">
          <span class="font-bold text-emerald-800">11:15 – 12:15</span> | <strong>Módulo 3:</strong> Fisiología plaquetaria y trombopoyesis (Biól. MVZ Pablo Morales O. - 1h 00m)
        </div>
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm">
          <span class="font-bold text-emerald-800">12:15 – 13:30</span> | <strong>Módulo 4:</strong> Abordaje del paciente trombocitopénico y principales trombocitopatías (Biól. MVZ Pablo Morales O. - 1h 15m)
        </div>
        <div class="p-4 rounded-xl bg-emerald-100 border border-emerald-300 text-xs sm:text-sm font-bold text-emerald-950 flex justify-between">
          <span>🍽️ 13:30 – 14:15 | Receso / Almuerzo Completo y Networking (45 min)</span>
          <span class="bg-white px-2 py-0.5 rounded text-emerald-800">Incluido</span>
        </div>
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm">
          <span class="font-bold text-emerald-800">14:15 – 15:15</span> | <strong>Módulo 5:</strong> Fisiología leucocitaria y mielopoyesis (Biól. MVZ Pablo Morales O. - 1h 00m)
        </div>
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm">
          <span class="font-bold text-emerald-800">15:15 – 16:30</span> | <strong>Módulo 6:</strong> Abordaje de las alteraciones leucocitarias (Biól. MVZ Pablo Morales O. - 1h 15m)
        </div>
        <div class="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs font-semibold text-amber-900 flex justify-between">
          <span>☕ 16:30 – 16:45 | Receso / Coffee Break (15 min)</span>
          <span>Incluido</span>
        </div>
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm">
          <span class="font-bold text-emerald-800">16:45 – 17:30</span> | <strong>Módulo 7:</strong> Fisiología linfocitaria y linfopoyesis (Biól. MVZ Pablo Morales O. - 45 min)
        </div>
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm">
          <span class="font-bold text-emerald-800">17:30 – 18:30</span> | <strong>Módulo 8:</strong> Interpretación de los linfocitos en sangre circulante (Biól. MVZ Pablo Morales O. - 1h 00m)
        </div>
        <div class="p-5 rounded-xl bg-gradient-to-r from-slate-900 to-emerald-950 text-white border border-slate-800">
          <span class="font-bold text-emerald-400">18:30 – 19:00</span> | <strong>Cierre Práctico:</strong> Casos clínicos, práctica con equipos de hematología Mindray Animal Medical, preguntas y cierre (Biól. MVZ Pablo Morales O. / Lcda. Tatiana Rodríguez M. - 30 min)
        </div>
      </div>
    </div>
  </section>

  <!-- Ponentes -->
  <section id="ponentes" class="py-16 md:py-20 bg-slate-50 border-b border-slate-200">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="text-center max-w-2xl mx-auto mb-12">
        <span class="text-xs font-bold text-emerald-800 tracking-wider uppercase bg-emerald-100 px-3 py-1 rounded-full inline-block mb-3">
          Facilitadores
        </span>
        <h2 class="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-900 tracking-tight mb-4">
          Ponentes Internacionales
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Ponente 1 -->
        <div class="bg-white rounded-2xl border border-slate-200 p-7 shadow-sm">
          <div class="flex items-center gap-2 mb-2">
            <span class="text-2xl">🇲🇽</span>
            <span class="text-xs font-bold text-emerald-800 uppercase">México • Ponente Internacional</span>
          </div>
          <h3 class="font-display font-bold text-2xl text-slate-900 mb-1">Pablo Morales</h3>
          <p class="text-xs font-bold text-slate-500 mb-3">Biól. MVZ EEHDL Dipl.</p>
          <div class="inline-block px-3 py-1 rounded bg-emerald-100 text-emerald-900 text-xs font-bold mb-4">
            Especialista en Hematología y Hemato-oncología Veterinaria
          </div>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
            Formado en el Instituto de Hematopatología y la UDG, el Dr. Morales cuenta con una sólida trayectoria médica enriquecida por estancias internacionales en Croacia, Costa Rica y España.
          </p>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
            Destaca por su compromiso con la divulgación científica, siendo autor de diversos casos clínicos publicados y ponente recurrente en congresos nacionales e internacionales. Miembro de la American Association of Veterinary Hematology & Transfusion Medicine (AVHTM) y del Colegio de Médicos Veterinarios en Pequeñas Especies.
          </p>
        </div>

        <!-- Ponente 2 -->
        <div class="bg-white rounded-2xl border border-slate-200 p-7 shadow-sm">
          <div class="flex items-center gap-2 mb-2">
            <span class="text-2xl">🇨🇴</span>
            <span class="text-xs font-bold text-blue-700 uppercase">Colombia / LATAM • Especialista Mindray</span>
          </div>
          <h3 class="font-display font-bold text-2xl text-slate-900 mb-1">Tatiana Rodríguez Méndez</h3>
          <p class="text-xs font-bold text-slate-500 mb-3">Lcda. Mgst. en Microbiología</p>
          <div class="inline-block px-3 py-1 rounded bg-blue-100 text-blue-900 text-xs font-bold mb-4">
            Especialista en Laboratorio Clínico Veterinario y Microbiología
          </div>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-3">
            Formada como Bacterióloga y Laboratorista Clínica con énfasis en Diagnóstico Clínico Veterinario, la Lcda. Rodríguez cuenta con una Maestría en Microbiología y un Diplomado en Laboratorio Clínico de Pequeñas Especies.
          </p>
          <p class="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
            Destaca por su liderazgo técnico a nivel regional, desempeñándose como Especialista de Aplicaciones LATAM para la línea de Diagnóstico In Vitro de Mindray Animal Medical, impulsando la innovación tecnológica en el sector veterinario.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Inversión -->
  <section id="inversion" class="py-16 md:py-20 bg-white border-b border-slate-200">
    <div class="max-w-4xl mx-auto px-4 sm:px-6">
      <div class="text-center max-w-2xl mx-auto mb-12">
        <span class="text-xs font-bold text-emerald-800 tracking-wider uppercase bg-emerald-100 px-3 py-1 rounded-full inline-block mb-3">
          Tarifas
        </span>
        <h2 class="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-slate-900 tracking-tight mb-4">
          Inversión del Workshop
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <!-- Preventa -->
        <div class="bg-slate-50 rounded-2xl border-2 border-emerald-800 p-7 flex flex-col justify-between shadow-lg">
          <div>
            <span class="text-xs font-bold text-emerald-800 uppercase">Pronto Pago</span>
            <h3 class="font-display font-bold text-2xl text-slate-900 mb-2">Antes del 30 de Octubre</h3>
            <div class="flex items-baseline gap-1 my-3">
              <span class="font-display font-black text-5xl text-slate-950">$160</span>
              <span class="text-sm font-semibold text-slate-500">USD</span>
            </div>
            <p class="text-xs text-slate-500 mb-6">A tasa oficial BCV del día de la formalización.</p>
            <ul class="space-y-2 text-sm text-slate-700 mb-8 border-t border-slate-200 pt-4">
              <li>✓ Coffee Break matutino y vespertino</li>
              <li>✓ Almuerzo completo incluido</li>
              <li>✓ Material académico y memorias</li>
              <li>✓ Certificado avalado con horas curriculares</li>
              <li>✓ Práctica en analizadores Mindray</li>
            </ul>
          </div>
          <a href="https://wa.me/584248767342?text=%C2%A1Hola%20Lorena!%20Quiero%20apartar%20con%20precio%20de%20preventa%20($160)%20para%20el%20Workshop%20de%20Hematolog%C3%ADa." target="_blank" rel="noopener noreferrer" class="w-full text-center py-4 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white font-bold text-base shadow-md transition-all">
            Reservar Preventa ($160)
          </a>
        </div>

        <!-- Regular -->
        <div class="bg-slate-50 rounded-2xl border border-slate-200 p-7 flex flex-col justify-between">
          <div>
            <span class="text-xs font-bold text-slate-500 uppercase">Precio Estándar</span>
            <h3 class="font-display font-bold text-2xl text-slate-900 mb-2">Desde el 31 de Octubre</h3>
            <div class="flex items-baseline gap-1 my-3">
              <span class="font-display font-black text-5xl text-slate-600">$190</span>
              <span class="text-sm font-semibold text-slate-500">USD</span>
            </div>
            <p class="text-xs text-slate-500 mb-6">A tasa oficial BCV del día.</p>
            <ul class="space-y-2 text-sm text-slate-600 mb-8 border-t border-slate-200 pt-4">
              <li>✓ Coffee Break matutino y vespertino</li>
              <li>✓ Almuerzo completo incluido</li>
              <li>✓ Material académico y memorias</li>
              <li>✓ Certificado avalado con horas curriculares</li>
              <li>✓ Práctica en analizadores Mindray</li>
            </ul>
          </div>
          <a href="https://wa.me/584248767342?text=%C2%A1Hola%20Lorena!%20Deseo%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20Workshop%20de%20Hematolog%C3%ADa." target="_blank" rel="noopener noreferrer" class="w-full text-center py-4 rounded-xl bg-white border border-slate-300 hover:bg-slate-100 text-slate-800 font-bold text-base transition-all">
            Consultar Cupos
          </a>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer y Contacto -->
  <footer class="bg-slate-950 text-white py-14 border-t border-slate-800">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pb-10 border-b border-slate-800">
        <div>
          <div class="mb-4">
            <svg viewBox="0 0 520 165" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-12 w-auto" role="img" aria-label="Innovett animal care">
              <circle cx="27" cy="46" r="14" fill="#ffffff" />
              <path d="M 33 41 C 100 -12, 330 -10, 442 34 C 330 3, 105 5, 30 46 Z" fill="#ffffff" />
              <text x="12" y="118" fill="#ffffff" font-family="'Outfit', 'Montserrat', 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-size="92" font-weight="900" letter-spacing="-0.04em">innovett</text>
              <text x="512" y="156" text-anchor="end" fill="#34d399" font-family="'Outfit', 'Montserrat', 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-size="36" font-weight="800" letter-spacing="0.01em">animal care</text>
            </svg>
          </div>
          <p class="text-slate-400 text-sm max-w-md leading-relaxed mb-4">
            Workshop: Abordaje Integral de las Alteraciones Hemáticas en Caninos y Felinos. Formación médica veterinaria de vanguardia en Venezuela.
          </p>
          <p class="text-xs text-slate-500">Patrocinado por: Mindray Animal Medical y Mindvet Academy</p>
        </div>

        <div class="bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <span class="text-xs font-bold text-emerald-400 uppercase tracking-widest block mb-1">Contáctanos</span>
          <h3 class="font-display font-bold text-xl text-white mb-2">Escribe a nuestra asesora: Lorena Fuentes</h3>
          <p class="text-sm text-slate-300 mb-4">WhatsApp directo: <strong>+58 424-8767342</strong></p>
          <a href="https://wa.me/584248767342?text=%C2%A1Hola%20Lorena!%20Vengo%20de%20la%20p%C3%A1gina%20web%20del%20Workshop%20de%20Hematolog%C3%ADa.%20Deseo%20reservar%20mi%20cupo." target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm shadow-md transition-all">
            Chatear con Lorena Fuentes por WhatsApp
          </a>
        </div>
      </div>

      <div class="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <p>© 2026 Innovett Animal Care. Todos los derechos reservados.</p>
        <p>Caracas • Maracay • Lecherías • Noviembre</p>
      </div>
    </div>
  </footer>

  <!-- Floating Mobile WhatsApp Bar -->
  <div class="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200 p-3 sm:hidden shadow-lg flex items-center justify-between gap-3">
    <div>
      <p class="text-[10px] text-slate-500 font-bold uppercase">Preventa</p>
      <span class="font-display font-black text-xl text-slate-900">$160 USD</span>
    </div>
    <a href="https://wa.me/584248767342?text=%C2%A1Hola%20Lorena!%20Deseo%20apartar%20mi%20cupo%20con%20preventa%20para%20el%20Workshop%20de%20Hematolog%C3%ADa." target="_blank" rel="noopener noreferrer" class="flex-1 py-2.5 px-4 rounded-xl bg-emerald-800 text-white font-bold text-sm text-center shadow-md">
      Inscribirme por WhatsApp
    </a>
  </div>

</body>
</html>`;
