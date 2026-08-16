export const heroContent = {
  breadcrumb: "Tipo de negocio — Locales sin elaboración",
  title: "Habilitá tu comercio de alimentos sin complicaciones",
  subtitle:
    "Garantizá el cumplimiento de las normativas municipales y sanitarias vigentes con el respaldo de nuestro equipo técnico.",
  primaryButton: { label: "Solicitar asesoramiento", href: "/contacto" },
  secondaryButton: { label: "Hablar por Whatsapp", href: "https://wa.me/59899286804" },
  image: "/img/localesSinElaboracion-hero.png",
};

export const problemSection = {
  title: "Las soluciones técnicas que tu comercio necesita para avanzar",
  subtitle: "Muchos emprendedores se encuentran con:",
  cards: [
    { icon: "building" as const, text: "Reformas y obras innecesarias" },
    { icon: "warning" as const, text: "Exigencias sanitarias de último momento" },
    { icon: "money" as const, text: "Multas y clausuras costosas" },
    { icon: "package" as const, text: "Apertura comercial demorada" },
  ],
};

export const featureSplitSection = {
  title: "Nos encargamos de todo el proceso por vos",
  subtitle: "En InoQua te acompañamos desde la evaluación inicial hasta la aprobación final.",
  items: [
    "Habilitación comercial rápida de tu nuevo local",
    "Identificación de los requisitos para prevenir gastos excesivos en reformas de obra",
    "Gestión del trámite ante los organismos",
    "Seguimiento del expediente hasta su aprobación",
  ],
  button: { label: "Solicitar asesoramiento", href: "/contacto" },
  imagePosition: "left" as const,
  image: "/img/localesSinElaboracion-solucion.png",
};

export const differentiatorSection = {
  eyebrow: "NUESTRO DIFERENCIAL",
  title: 'No trabajamos solo para "presentar papeles"',
  cards: [
    {
      icon: "money" as const,
      title: "Habilitación inmediata",
      text: "Trámites municipales ágiles para abrir tu negocio sin demoras.",
    },
    {
      icon: "package" as const,
      title: "Presupuestos accesibles",
      text: "Tarifas adaptadas a tu realidad para evitar gastos excesivos.",
    },
    {
      icon: "handshake" as const,
      title: "Seguridad técnica",
      text: "Prevención eficaz de multas bajo el cumplimiento de normativas.",
    },
  ],
  quote: "Te acompañamos para que logres habilitar tu negocio a la primera",
};

export const businessTypesGrid = {
  title: "Para quién es este servicio",
  chips: [
    { icon: "building" as const, label: "Kioscos" },
    { icon: "shoppingBasket" as const, label: "Almacenes" },
    { icon: "milk" as const, label: "Productos envasados" },
    { icon: "apple" as const, label: "Fruterías y verdulerías" },
  ],
};

export const processStepsSection = {
  eyebrow: "NUESTRO MÉTODO",
  title: "Un proceso claro y profesional",
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
  title: "Llevá la gestión técnica de tu comercio al día",
  subtitleRegular: "Asegurá tu aprobación oficial con nuestro respaldo. ",
  subtitleBold: "Evaluamos tu caso sin compromiso.",
  button: { label: "Evaluar mi caso", href: "/contacto" },
  image: "/img/negocio-cta3.png",
};
