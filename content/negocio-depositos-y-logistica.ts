export const heroContent = {
  breadcrumb: "Tipo de negocio — Depósitos y logística",
  title: "Habilitación de depósitos y centros logísticos de alimentos",
  subtitle:
    "¿Almacenás o distribuís alimentos? Habilitamos tu depósito, tu importadora y tus vehículos cumpliendo la normativa de almacenamiento, cadena de frío y trazabilidad.",
  primaryButton: { label: "Solicitar asesoramiento", href: "/contacto" },
  secondaryButton: { label: "Hablar por Whatsapp", href: "https://wa.me/59899286804" },
  image: "/img/deposito-hero.png",
};

export const problemSection = {
  title: "¿Tuviste desvíos de temperatura o perdiste trazabilidad al despachar?",
  subtitle: "Muchos emprendedores se encuentran con:",
  cards: [
    { icon: "package" as const, text: "Desvíos de temperatura en mercadería congelada" },
    { icon: "building" as const, text: "Observaciones edilicias por contaminación cruzada" },
    { icon: "money" as const, text: "Pérdida de trazabilidad al despachar alimentos" },
    { icon: "warning" as const, text: "Retrasos burocráticos al habilitar tu importadora" },
  ],
};

export const featureSplitSection = {
  title: "Habilitamos tu depósito, tu logística y tu flota",
  subtitle: "Para que tu documentación y tu flota estén en regla en cada operación.",
  items: [
    "Controles estrictos para la cadena de frío",
    "Planificación eficiente del diseño de tu depósito",
    "Implementación de manuales para asegurar stock",
    "Agilización de trámites de importación y logística",
  ],
  button: { label: "Solicitar asesoramiento", href: "/contacto" },
  imagePosition: "left" as const,
  image: "/img/depositosLogistica-solucion.png",
};

export const differentiatorSection = {
  eyebrow: "NUESTRO DIFERENCIAL",
  title: "¿El cumplimiento te está frenando la operación?",
  cards: [
    {
      icon: "building" as const,
      title: "Procesos y control técnico",
      text: "Estructuramos cada etapa productiva bajo normativas vigentes.",
    },
    {
      icon: "package" as const,
      title: "Enfoque en Registros",
      text: "Aseguramos la trazabilidad documental de toda tu planta.",
    },
    {
      icon: "handshake" as const,
      title: "Control de alto nivel",
      text: "Implementamos auditorías para garantizar un cumplimiento estricto.",
    },
  ],
  quote: "Gestionamos flujos logísticos de alta complejidad con eficiencia y respaldo técnico",
};

export const processStepsSection = {
  eyebrow: "NUESTRO MÉTODO",
  title: "¿Cómo ordenamos tu operación logística?",
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
  title: "¿Necesitás habilitar tu depósito o tus vehículos de reparto?",
  subtitleRegular: "Te acompañamos en la habilitación del depósito de alimentos.",
  subtitleBold: "Evaluamos tu caso sin compromiso.",
  button: { label: "Evaluar mi caso", href: "/contacto" },
  image: "/img/negocio-cta5.png",
};
