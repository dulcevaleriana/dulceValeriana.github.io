import { Injectable } from '@angular/core';

export interface Metric {
  value: string;
  label: string;
}

export interface Persona {
  name: string;
  role: string;
  goals: string;
  painPoints: string;
  behavior: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  description: string;
  color: string;
  accentColor: string;
  textColor: string;
  mutedColor: string;
  role: string;
  team: string;
  timeline: string;
  tools: string;
  summary: string;
  problem: string;
  researchItems: { title: string; desc: string }[];
  persona: Persona;
  solution: string;
  metrics: Metric[];
  learnings: string;
}

@Injectable({
  providedIn: 'root'
})
export class CaseStudiesService {
  private studies: CaseStudy[] = [
    {
      id: 'corporate-design-system',
      title: 'Corporate Design System',
      subtitle: 'Sistema de diseño corporativo creado con Angular y Storybook para reestructurar la interfaz visual de una empresa con más de 500 módulos internos.',
      tag: 'DESIGN SYSTEM / CORPORATE',
      description: 'Sistema de diseño robusto con más de 50 componentes siguiendo la metodología Atomic Design.',
      color: '#0F172A',
      accentColor: '#3B82F6',
      textColor: '#F8FAFC',
      mutedColor: '#94A3B8',
      role: 'Diseñador Visual',
      team: '1 Designer, Equipo de Desarrollo',
      timeline: '—',
      tools: 'Figma, Angular, Storybook',
      summary: 'Corporate Design System se creó utilizando Figma, Angular y Storybook. Fue desarrollado para una empresa que tenía como objetivo reestructurar todo su core interno, desde la estructura de la base de datos hasta la estructura visual. Mi contribución fue únicamente en la estructura visual para optimizar el trabajo, tomando en cuenta que tenían en ese momento más de 500 módulos creados con un sistema obsoleto desarrollado en Visual Basic. Encontré un punto importante en su estrategia: muchos módulos por explorar, conocer, documentar y analizar cuáles sí iban a ser migrados y cuáles no. Muchos de ellos, al pertenecer a una misma empresa y utilizarse solamente para esa empresa, compartían la misma estructura visual. Entonces, para optimizar el trabajo, se creó un sistema robusto que contiene más de 50 componentes utilizando la metodología Atomic Design para optimizar la creación, el mantenimiento y la optimización constante.',
      problem: 'La empresa contaba con más de 500 módulos desarrollados en un sistema obsoleto basado en Visual Basic. Necesitaban reestructurar todo su core interno, pero el volumen de módulos hacía inviable un rediseño uno por uno. La mayoría compartía patrones visuales comunes pero no había consistencia ni un sistema que unificara la interfaz. El desafío era crear una solución que optimizara la migración y permitiera a los desarrolladores mantener consistencia visual sin esfuerzo adicional.',
      researchItems: [
        { title: 'Exploración de Módulos', desc: 'Se exploraron, conocieron y documentaron los más de 500 módulos existentes para analizar cuáles serían migrados y cuáles permanecerían en el sistema legacy.' },
        { title: 'Análisis de Patrones', desc: 'Se identificaron patrones visuales compartidos entre módulos de la misma empresa, descubriendo que muchos compartían la misma estructura visual al pertenecer a un mismo ecosistema.' },
        { title: 'Manual de Línea Gráfica', desc: 'Se analizó el manual de línea gráfica de la empresa para establecer los lineamientos de estilo base del nuevo design system.' }
      ],
      persona: {
        name: 'Carlos Mendoza',
        role: 'Desarrollador Frontend · 34 · Santo Domingo',
        goals: 'Tener una librería de componentes consistente para acelerar el desarrollo de nuevos módulos y la migración de los existentes.',
        painPoints: 'Pasar horas ajustando estilos manualmente en cada módulo. Inconsistencia visual entre pantallas. Dificultad para mantener el código visual a escala.',
        behavior: 'Trabaja con múltiples módulos simultáneamente. Valora la documentación clara y los componentes reutilizables. Prefiere inyectar datos en componentes ya construidos.'
      },
      solution: 'Se diseñó un sistema robusto con más de 50 componentes utilizando la metodología Atomic Design, partiendo de átomos (botones, inputs, tipografía) hasta organismos completos. El design system se creó en Figma para establecer los lineamientos de estilo basándose en el manual de línea gráfica de la empresa. Posteriormente, se utilizó como guía para desarrollar la librería de componentes en Storybook, con el objetivo de optimizar el trabajo y crear un dashboard inicial donde los desarrolladores solo tengan que inyectar datos, facilitando la creación del SPA y optimizando los tiempos de entrega de la migración de todo el sistema interno de la compañía.',
      metrics: [
        { value: '50+', label: 'Componentes Creados' },
        { value: 'Atomic Design', label: 'Metodología' },
        { value: 'Storybook', label: 'Librería' },
        { value: 'Figma', label: 'Design System' }
      ],
      learnings: 'Este proyecto me enseñó que cuando trabajas con sistemas legacy a gran escala, la clave no está en rediseñar todo desde cero sino en encontrar los patrones compartidos y construir una solución que los unifique. La metodología Atomic Design fue fundamental para organizar los componentes de manera escalable. Aprendí que un design system bien documentado no solo acelera el desarrollo, sino que garantiza consistencia visual en equipos grandes. El mayor reto fue analizar y documentar cientos de módulos para identificar cuáles realmente necesitaban migración y cuáles podían mantenerse, optimizando así el esfuerzo del equipo.'
    },
    {
      id: 'feelit',
      title: 'FeelIt — Telemedicina',
      subtitle: 'Aplicación móvil que conecta pacientes con doctores para consultas virtuales, agendamiento de citas y gestión de resultados médicos.',
      tag: 'MOBILE / HEALTHTECH',
      description: 'App de telemedicina con consultas virtuales, agendamiento y gestión de resultados.',
      color: '#0A1628',
      accentColor: '#3B82F6',
      textColor: '#F0F9FF',
      mutedColor: '#93C5FD',
      role: 'Product Designer',
      team: '1 Designer, 3 Engineers',
      timeline: '5 meses',
      tools: 'Figma, Flutter, Node.js',
      summary: 'FeelIt es una plataforma de telemedicina diseñada para facilitar el acceso a consultas médicas desde el móvil. Los pacientes pueden agendar citas, realizar videollamadas con doctores, recibir resultados de exámenes y gestionar su historial médico. Los doctores tienen un panel dedicado para administrar su agenda, atender consultas y registrar diagnósticos.',
      problem: 'El acceso a consultas médicas presenciales sigue siendo limitado para muchas personas. Las aplicaciones existentes tienen procesos de registro complejos, tiempos de espera largos y poca integración entre agendamiento, consulta y resultados. Los pacientes necesitan una experiencia fluida que cubra todo el ciclo médico desde la comodidad de su hogar.',
      researchItems: [
        { title: 'Entrevistas con Pacientes', desc: 'Entrevistamos a 18 personas que usan servicios de telemedicina para entender sus frustraciones y expectativas.' },
        { title: 'Análisis Competitivo', desc: 'Evaluamos 6 apps de salud para identificar oportunidades de mejora en flujos de registro y agendamiento.' },
        { title: 'Mapeo del Ciclo Médico', desc: 'Documentamos el journey completo del paciente desde la búsqueda de un doctor hasta el seguimiento post-consulta.' }
      ],
      persona: {
        name: 'Sofía Ramírez',
        role: 'Profesional · 31 · Santo Domingo',
        goals: 'Agendar consultas médicas rápidamente desde su celular. Tener un historial accesible de sus resultados y recetas.',
        painPoints: 'Los procesos de registro son tediosos. Olvida las citas. No encuentra un historial unificado de sus consultas.',
        behavior: 'Usa el móvil para todo. Prefiere videollamadas a visitas presenciales. Busca reseñas antes de elegir doctor.'
      },
      solution: 'Diseñé una experiencia integral de telemedicina con registro simplificado (paciente y doctor), onboarding guiado, agendamiento inteligente de citas, videollamadas integradas, panel de resultados médicos y notificaciones contextuales. La interfaz usa colores azules que transmiten confianza y tranquilidad, con una navegación clara y accesible.',
      metrics: [
        { value: '15', label: 'Pantallas Diseñadas' },
        { value: '100%', label: 'Flujo Validado' },
        { value: '3 Meses', label: 'Ciclo de Diseño' },
        { value: 'Telemedicina', label: 'Sector' }
      ],
      learnings: 'Este proyecto me permitió explorar el diseño de experiencias de salud digital, donde la claridad y la confianza son tan importantes como la funcionalidad. Aprendí a diseñar flujos complejos (registro de doctores, validación de credenciales, videollamadas) manteniendo una interfaz simple y humana. El mayor reto fue equilibrar la cantidad de información médica necesaria sin abrumar al usuario.'
    },
    {
      id: 'Betstick',
      title: 'Betstick — Gestor de Apuestas para Streamers',
      subtitle: 'Una plataforma web para gestionar apuestas entre streamers y sus comunidades, sin estar atada a ningún videojuego en particular.',
      tag: 'WEB APP / GAMING',
      description: 'Plataforma web para gestionar apuestas entre streamers con duelos, depósitos y votación democrática.',
      color: '#0A1A0A',
      accentColor: '#00FF7F',
      textColor: '#F0FFF0',
      mutedColor: '#66FF99',
      role: 'Product Designer',
      team: '1 Designer, 2 Developers',
      timeline: '4 meses',
      tools: 'Figma, Diseño UX, Prototipado',
      summary: 'Betstick nació como una idea de dos emprendedores que querían resolver un problema real en la comunidad de streamers: no existía una forma estructurada y justa de gestionar apuestas informales entre ellos. Trabajé de manera remota con ellos durante varios meses, ayudándoles a concebir la idea desde cero, estructurar el flujo del producto y diseñar la experiencia completa. El resultado fue una plataforma web donde cualquier streamer puede crear duelos, invitar participantes, depositar apuestas y resolver el ganador mediante votación comunitaria con evidencia.',
      problem: 'Los streamers hacen apuestas informales constantemente — desde quién gana una partida hasta desafíos de habilidades — pero no hay una plataforma neutral que gestione el proceso. Dependen de la confianza mutua, lo que genera disputas, falta de transparencia y seguimiento inexistente. Tampoco existe un historial confiable de resultados. El desafío era diseñar un sistema que actuara como árbitro neutral, manteniendo la experiencia ligera y divertida que caracteriza a la comunidad de streaming.',
      researchItems: [
        { title: 'Investigación Contextual', desc: 'Análisis de cómo los streamers gestionan apuestas actualmente: capturas de pantalla, moderadores, hilos de Twitter. Sin estructura formal.' },
        { title: 'Entrevistas con Clientes', desc: 'Sesiones profundas con los dos fundadores para entender la visión, el público objetivo y las mecánicas de apuesta que querían habilitar.' },
        { title: 'Refinamiento del Pitch', desc: 'Ayudé a los clientes a desarrollar y pulir su propuesta de valor antes de presentarla a potenciales inversores y usuarios beta.' }
      ],
      persona: {
        name: 'Alex "Apex_Predator" Martínez',
        role: 'Streamer · 28 · Texas, USA',
        goals: 'Hacer apuestas con otros streamers de forma organizada y transparente. Construir un historial de resultados para aumentar el engagement de su comunidad.',
        painPoints: 'Confiar en la palabra del otro genera conflictos. No hay forma de rastrear apuestas pasadas. Gestionar manualmente los depósitos es tedioso.',
        behavior: 'Hace streaming 5-6 veces por semana. Apuesta frecuentemente con amigos streamers. Su comunidad se involucra y opina en chat.'
      },
      solution: 'Diseñé una plataforma completa donde los streamers pueden crear cuentas, invitar a otros usuarios, y gestionar duelos de principio a fin. El flujo incluye: creación de duelo con selección de equipos, definición de monto y tiempo límite, depósito obligatorio del monto acordado por todos los participantes antes de iniciar, subida de evidencias al finalizar el tiempo, y votación democrática para determinar al ganador. La plataforma distribuye automáticamente las ganancias. Cada usuario cuenta con un perfil detallado y un board con historial de ganancias y pérdidas.',
      metrics: [
        { value: 'MVP', label: 'Producto Mínimo Viable' },
        { value: '3 Meses', label: 'Ciclo de Diseño' },
        { value: '2 Clientes', label: 'Fundadores' },
        { value: '100%', label: 'Flujo Validado' }
      ],
      learnings: 'Este proyecto me enseñó el valor de ayudar a los clientes a refinar su idea antes de construir. Pasamos de una idea difusa de "gestión de apuestas" a un flujo concreto con reglas claras, depósitos obligatorios y resolución democrática. Aprendí que el diseño no solo resuelve problemas de usuario, también ayuda a los emprendedores a descubrir qué es lo que realmente están construyendo. La experiencia fue respetuosa, enriquecedora, y me llevo herramientas para concebir productos desde cero.'
    }
  ];

  getAll(): CaseStudy[] {
    return this.studies;
  }

  getById(id: string): CaseStudy | undefined {
    return this.studies.find(s => s.id === id);
  }
}
