export const heroContent = {
  breadcrumb: "Tipo de negocio — Supermercados y autoservicios",
  title: "Habilitación y asesoría bromatológica para supermercados y autoservicios",
  subtitle:
    "¿Vas a abrir un autoservicio o te observaron un sector? Coordinamos la habilitación integral de tu supermercado: control sanitario por área, cadena de frío y registros obligatorios.",
  primaryButton: { label: "Solicitar asesoramiento", href: "/contacto" },
  secondaryButton: { label: "Hablar por Whatsapp", href: "https://wa.me/59899286804" },
  image: "/img/supermercados-hero.png",
};

export const problemSection = {
  title: "¿Manejás cada sector por separado y perdés el control sanitario?",
  subtitle: "Muchos emprendedores se encuentran con:",
  cards: [
    { icon: "package" as const, text: "Gestión aislada de las normativas sectoriales" },
    { icon: "warning" as const, text: "Sanciones graves por fallas en la cadena de frío cárnica" },
    { icon: "eye" as const, text: "Inspecciones complejas sin registros obligatorios" },
    { icon: "building" as const, text: "Demoras en la apertura del supermercado" },
  ],
};

export const featureSplitSection = {
  title: "Nos encargamos de todo el proceso por vos",
  subtitle: "En InoQua te acompañamos desde la evaluación inicial hasta la aprobación final.",
  items: [
    "Coordinación de la habilitación integral",
    "Diseño de planes de limpieza y registros bromatológicos para tu rubro",
    "Control sanitario en sectores críticos",
    "Agilización municipal estratégica",
  ],
  button: { label: "Solicitar asesoramiento", href: "/contacto" },
  imagePosition: "left" as const,
  image: "/img/supermercados-solucion.png",
};

export const differentiatorSection = {
  eyebrow: "NUESTRO DIFERENCIAL",
  title: 'No trabajamos solo para "presentar papeles"',
  cards: [
    {
      icon: "building" as const,
      title: "Gestión integral de áreas",
      text: "Coordinamos la habilitación de todo tu local juntos.",
    },
    {
      icon: "shield" as const,
      title: "Control sanitario",
      text: "Aseguramos el cumplimiento bromatológico en cada sector crítico.",
    },
    {
      icon: "building" as const,
      title: "Complejidad Resuelta",
      text: "Agilizamos los procesos municipales para abrir a tiempo.",
    },
  ],
  quote: "Coordinamos con vos cada detalle técnico de tu supermercado",
};

export const processStepsSection = {
  eyebrow: "NUESTRO MÉTODO",
  title: "¿Cómo ordenamos el cumplimiento de tu gran superficie?",
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
  title: "¿Necesitás habilitar tu supermercado o poner en regla un sector?",
  subtitleRegular: "Te acompañamos en las auditorías internas de cada área crítica.",
  subtitleBold: "Evaluamos tu caso sin compromiso.",
  button: { label: "Evaluar mi caso", href: "/contacto" },
  image: "/img/supermercados-hero.png",
};
