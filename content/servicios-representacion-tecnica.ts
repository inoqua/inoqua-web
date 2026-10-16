// Contenido editable de la landing "Servicios / Representación Técnica".
// Igual que en Home: acá se edita texto y links, no en los componentes.

export const serviceHeroContent = {
  breadcrumb: "Servicios — Representación técnica",
  title: "Representante técnico bromatológico para empresas alimentarias",
  subtitle:
    "¿Tu empresa opera sin representante técnico? Asumimos la representación ante el SRA y Bromatología: cumplimiento normativo, respaldo en inspecciones y seguimiento permanente.",
  primaryButton: { label: "Solicitar asesoramiento", href: "/contacto" },
  secondaryButton: { label: "Hablar por Whatsapp", href: "https://wa.me/59899286804" },
  image: "/img/representacionTecnica-hero.png",
};

export const problemSection = {
  title: "¿Tenés un negocio alimentario y no contás con respaldo técnico constante?",
  subtitle: "Esto es más común de lo que parece:",
  cards: [
    { icon: "clipboard" as const, text: "Cumplimiento de normativa" },
    { icon: "eye" as const, text: "Inspecciones sin previo aviso" },
    { icon: "rule" as const, text: "Dudas ante cambios o exigencias nuevas" },
    { icon: "clock" as const, text: "Documentación desactualizada o sin revisar" },
    { icon: "warning" as const, text: "Observaciones que podrían haberse evitado" },
  ],
};

export const alertBannerText =
  "El riesgo no es solo una multa, sino una clausura, sanción o un problema mayor";

export const featureSplitSection = {
  title: "Respaldo profesional para una operación sin fallas",
  subtitle:
    "Supervisamos tu cumplimiento bromatológico todos los días, no solo cuando llega la inspección.",
  items: [
    "Supervisar el cumplimiento bromatológico",
    "Mantener tu documentación actualizada",
    "Asesorarte ante cualquier cambio normativo",
    "Detectar riesgos antes de que se conviertan en sanciones",
    "Ordenar y profesionalizar tus procesos internos",
  ],
  button: { label: "Solicitar asesoramiento", href: "/contacto" },
  imagePosition: "left" as const,
  image: "/img/representacionTecnica-solucion2.png",
};

export const differentiatorSection = {
  eyebrow: "NUESTRO DIFERENCIAL",
  title: "¿Tu representante técnico solo firma y desaparece?",
  cards: [
    {
      icon: "close" as const,
      title: "Evitá sanciones y clausuras",
      text: "Habilitá tu negocio de forma segura y superá cada inspección con total tranquilidad.",
    },
    {
      icon: "eye" as const,
      title: "Recibí inspecciones con tranquilidad",
      text: "Mantené tu documentación al día y la gestión operativa bajo un orden estricto.",
    },
    {
      icon: "rule" as const,
      title: "Tomá decisiones con seguridad",
      text: "Apoyate en nuestro respaldo técnico real para hacer crecer tu empresa sin sorpresas.",
    },
    {
      icon: "handshake" as const,
      title: "Minimizá riesgos operativos",
      text: "Prevení observaciones innecesarias implementando prácticas seguras y eficientes en tus procesos.",
    },
  ],
  quote: "Invertir en cumplimiento hoy te ahorra miles de dólares en sanciones mañana",
};

export const audienceSection = {
  title: "¿Quién necesita un representante técnico ante Bromatología?",
  cards: [
    { icon: "fork" as const, text: "Tenés un local gastronómico en funcionamiento" },
    { icon: "shield" as const, text: "Estás habilitado pero no tenés seguimiento técnico" },
    { icon: "warning" as const, text: "Querés evitar problemas con inspecciones" },
    { icon: "headset" as const, text: "Necesitás respaldo profesional constante" },
  ],
};

export const processStepsSection = {
  eyebrow: "NUESTRO MÉTODO",
  title: "Así te acompañamos en el proceso",
  subtitle:
    "Te acompañamos desde el diagnóstico hasta tus habilitaciones, con respaldo técnico continuo que evita errores.",
  steps: [
    { number: 1, title: "Contacto inicial", text: "Analizamos el estado actual de tu negocio." },
    { number: 2, title: "Evaluación técnica", text: "Revisamos el local y detectamos ajustes necesarios." },
    { number: 3, title: "Preparación", text: "Organizamos toda la documentación requerida." },
    { number: 4, title: "Gestión", text: "Presentamos y hacemos seguimiento del trámite." },
    { number: 5, title: "Aprobación", text: "Te acompañamos hasta que tu negocio quede habilitado." },
  ],
};

export const finalCtaContent = {
  title: "La representación técnica no es un simple trámite, es el escudo de tu empresa",
  subtitleRegular: "Protegé tu negocio todos los días de multas y clausuras. ",
  subtitleBold: "Evaluamos tu caso sin compromiso.",
  button: { label: "Evaluar mi caso", href: "/contacto" },
  image: "/img/servicios-cta3.png",
};
