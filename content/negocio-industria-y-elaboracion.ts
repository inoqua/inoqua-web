export const heroContent = {
  breadcrumb: "Tipo de negocio — Industria y elaboración",
  title: "Habilitación y representación técnica para industrias y elaboradores de alimentos",
  subtitle:
    "¿Elaborás alimentos a escala industrial? Te acompañamos en habilitaciones, registro de productos, trazabilidad y sistemas HACCP, con respaldo en cada inspección y auditoría.",
  primaryButton: { label: "Solicitar asesoramiento", href: "/contacto" },
  secondaryButton: { label: "Hablar por Whatsapp", href: "https://wa.me/59899286804" },
  image: "/img/industria-hero.png",
};

export const problemSection = {
  title: "¿Perdés el rastro de tus lotes o te frenan los lanzamientos?",
  subtitle: "Muchos emprendedores se encuentran con:",
  cards: [
    { icon: "package" as const, text: "Pérdida de rastro en lotes productivos" },
    { icon: "building" as const, text: "Demoras en el lanzamiento de productos" },
    { icon: "warning" as const, text: "Desvíos sanitarios por falta de limpieza" },
    { icon: "clipboard" as const, text: "Incertidumbre en las inspecciones regulatorias" },
  ],
};

export const featureSplitSection = {
  title: "Ordenamos el control técnico de tu planta de alimentos",
  subtitle: "Control de materias primas, trazabilidad, manuales a medida y respaldo en auditorías.",
  items: [
    "Control estricto de tus materias primas",
    "Optimización de tiempos ante organismos oficiales",
    "Desarrollo de manuales a medida",
    "Respaldo profesional para superar cada auditoría",
  ],
  button: { label: "Solicitar asesoramiento", href: "/contacto" },
  imagePosition: "left" as const,
  image: "/img/industria-solucion.png",
};

export const differentiatorSection = {
  eyebrow: "NUESTRO DIFERENCIAL",
  title: '¿Las inspecciones regulatorias te generan incertidumbre?',
  cards: [
    {
      icon: "building" as const,
      title: "Dominio Normativo",
      text: "Conocemos la normativa asegurando la aprobación sin observaciones.",
    },
    {
      icon: "shield" as const,
      title: "Almacenamiento Inteligente",
      text: "Optimizamos stock y flujos evitando que el cumplimiento reste velocidad.",
    },
    {
      icon: "building" as const,
      title: "Foco en Cadena de Frío",
      text: "Protegemos productos sensibles con logística de temperatura controlada.",
    },
  ],
  quote: "Convertimos el cumplimiento normativo en una ventaja competitiva real",
};

export const processStepsSection = {
  eyebrow: "NUESTRO MÉTODO",
  title: "¿Cómo trabajamos el cumplimiento de tu industria?",
  subtitle: "Empleamos un método claro y sin sorpresas.",
  closingText: "Más que una solución puntual, somos tu aliado estratégico",
  steps: [
    { number: 1, title: "Evaluamos tu caso", text: "Analizamos el estado actual de tu negocio." },
    { number: 2, title: "Detectamos riesgos", text: "Detectamos puntos de mejora e incumplimientos." },
    { number: 3, title: "Implementamos soluciones", text: "Ordenamos procesos y documentación necesaria." },
    { number: 4, title: "Te acompañamos", text: "Continuamos con vos para que todo siga en regla." },
  ],
};

export const finalCtaContent = {
  title: "¿Necesitás habilitar tu planta o implementar HACCP?",
  subtitleRegular: "Asegurá tus estándares con nuestra representación técnica. ",
  subtitleBold: "Evaluamos tu caso sin compromiso.",
  button: { label: "Evaluar mi caso", href: "/contacto" },
  image: "/img/servicios-cta3.png",
};
