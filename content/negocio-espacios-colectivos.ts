export const heroContent = {
  breadcrumb: "Tipo de negocio — Espacios gastronómicos colectivos",
  title: "Habilitación de plazas de comidas y espacios gastronómicos colectivos",
  subtitle:
    "¿Gestionás un espacio con varios operadores gastronómicos? Coordinamos la habilitación de todos los locales y estandarizamos los protocolos sanitarios de las áreas comunes.",
  primaryButton: { label: "Solicitar asesoramiento", href: "/contacto" },
  secondaryButton: { label: "Hablar por Whatsapp", href: "https://wa.me/59899286804" },
  image: "/img/espaciosColectivos-hero.png",
};

export const problemSection = {
  title: "¿Un solo local mal gestionado puede clausurar todo tu espacio?",
  subtitle: "Muchos emprendedores se encuentran con:",
  cards: [
    { icon: "headset" as const, text: "Descontrol sanitario por múltiples operadores" },
    { icon: "warning" as const, text: "Clausuras comerciales por fallas comunes" },
    { icon: "clock" as const, text: "Trámites burocráticos que demoran la apertura" },
    { icon: "shield" as const, text: "Riesgos bromatológicos en áreas comunes" },
  ],
};

export const featureSplitSection = {
  title: "Coordinamos la habilitación de todos los locales",
  subtitle: "Protocolos comunes, auditorías por sector y agilización de los trámites.",
  items: [
    "Coordinación integral de todos tus locales",
    "Estandarización de protocolos para áreas compartidas",
    "Agilización de habilitaciones en plazas comerciales",
    "Auditorías preventivas en cada sector gastronómico",
  ],
  button: { label: "Solicitar asesoramiento", href: "/contacto" },
  imagePosition: "left" as const,
  image: "/img/espaciosGastronomicos-solucion.png",
};

export const differentiatorSection = {
  eyebrow: "NUESTRO DIFERENCIAL",
  title: "¿Te cuesta controlar a múltiples operadores a la vez?",
  cards: [
    {
      icon: "package" as const,
      title: "Gestión integral",
      text: "Centralizamos el control bromatológico de todo tu complejo.",
    },
    {
      icon: "clipboard" as const,
      title: "Múltiples Operadores",
      text: "Estandarizamos protocolos sanitarios para todos los locales comerciales.",
    },
    {
      icon: "building" as const,
      title: "Soluciones adaptadas",
      text: "Aseguramos la apertura ágil de tu proyecto gastronómico.",
    },
  ],
  quote: "Coordinamos el cumplimiento normativo de todo tu espacio gastronómico colectivo",
};

export const processStepsSection = {
  eyebrow: "NUESTRO MÉTODO",
  title: "¿Cómo centralizamos el cumplimiento de tu espacio?",
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
  title: "Centralizá la habilitación técnica de tu espacio gastronómico",
  subtitleRegular: "Te acompañamos en las auditorías preventivas de cada local.",
  subtitleBold: "Evaluamos tu caso sin compromiso.",
  button: { label: "Evaluar mi caso", href: "/contacto" },
  image: "/img/espaciosColectivos-hero.png",
};
