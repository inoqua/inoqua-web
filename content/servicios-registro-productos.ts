export const heroContent = {
  breadcrumb: "Servicios — Registro de productos",
  title: "Registrá tus productos y comercializalos legalmente en Uruguay",
  subtitle:
    "¿Necesitás registrar un producto? Gestionamos el trámite ante los organismos competentes y revisamos tu etiqueta completa para que salgas al mercado sin observaciones.",
  primaryButton: { label: "Solicitar asesoramiento", href: "/contacto" },
  secondaryButton: { label: "Hablar por Whatsapp", href: "https://wa.me/59899286804" },
  image: "/img/registroProductos-hero.png",
};

export const categoriesSection = {
  cards: [
    {
      icon: "fork" as const,
      title: "Consumo humano (RUNAEV)",
      text: "Habilitaciones bromatológicas y registros de productos.",
    },
    {
      icon: "paw" as const,
      title: "Alimentación Animal (MGAP)",
      text: "Registro de alimento para animales.",
    },
  ],
};

export const problemSection = {
  title: "¿Querés vender un producto y no sabés qué registros y qué rótulo necesitás?",
  subtitle: "Muchos fabricantes, importadores y emprendedores se encuentran con:",
  cards: [
    { icon: "package" as const, text: "Requisitos técnicos complejos" },
    { icon: "clipboard" as const, text: "Documentación incompleta" },
    { icon: "eye" as const, text: "Observaciones durante el trámite" },
    { icon: "clock" as const, text: "Demoras excesivas en la aprobación" },
    { icon: "rule" as const, text: "Dificultades con la normativa" },
    { icon: "money" as const, text: "Retrasos en la salida al mercado" },
  ],
};

export const alertBannerText =
  "Un error en el registro puede costarte tiempo, dinero y oportunidades comerciales";

export const featureSplitSection = {
  title: "Nos encargamos del registro de tus productos y de tus rótulos",
  subtitle:
    " Evaluación regulatoria, revisión técnica de la etiqueta y gestión completa del expediente.",
  items: [
    "Evaluación regulatoria",
    "Revisión técnica de etiquetas",
    "Verificación de requisitos documentales",
    "Gestión ante organismos competentes",
    "Seguimiento del trámite",
    "Respuesta a observaciones",
    "Acompañamiento hasta la aprobación",
  ],
  imagePosition: "right" as const,
  image: "/img/registroProductos-solucion.png",
};

export const processStepsSection = {
  eyebrow: "NUESTRO MÉTODO",
  title: "¿Cómo es el proceso de registro paso a paso?",
  subtitle: "Empleamos un método claro y sin sorpresas.",
  steps: [
    { number: 1, title: "Evaluación", text: "Analizamos el producto y determinamos los requisitos aplicables." },
    { number: 2, title: "Preparación documental", text: "Reunimos y organizamos toda la información técnica necesaria." },
    { number: 3, title: "Preparación", text: "Gestionamos el trámite ante el organismo correspondiente." },
    { number: 4, title: "Seguimiento", text: "Realizamos el seguimiento y gestionamos observaciones." },
    { number: 5, title: "Aprobación", text: "Te entregamos el producto listo para ser comercializado." },
  ],
};

export const differentiatorSection = {
  eyebrow: "NUESTRO DIFERENCIAL",
  title: "¿Por qué elegir InoQua para registrar tus alimentos?",
  cards: [
    {
      icon: "building" as const,
      title: "Experiencia en normativa",
      text: "Conocimiento profundo de los marcos regulatorios actuales.",
    },
    {
      icon: "clipboard" as const,
      title: "Gestión integral",
      text: "Nos ocupamos de todo el papeleo y los trámites burocráticos.",
    },
    {
      icon: "handshake" as const,
      title: "Acompañamiento técnico",
      text: "Asesoría profesional en cada etapa de la producción.",
    },
    {
      icon: "warning" as const,
      title: "Reducción de errores y observaciones",
      text: "Minimizamos observaciones para una aprobación más rápida.",
    },
    {
      icon: "eye" as const,
      title: "Seguimiento personalizado",
      text: "Atención directa y actualizaciones constantes de tu trámite.",
    },
    {
      icon: "headset" as const,
      title: "Asistencia durante todo el proceso",
      text: "Estamos disponibles para resolver cualquier duda reglamentaria.",
    },
  ],
  quote: "Un error en el registro puede costarte tiempo, dinero y oportunidades comerciales",
};

export const businessTypesGrid = {
  title: "¿Quiénes registran productos alimentarios?",
  chips: [
    { icon: "fork" as const, label: "Industrias alimentarias" },
    { icon: "package" as const, label: "Importadores de alimentos" },
    { icon: "truck" as const, label: "Distribuidores" },
    { icon: "milk" as const, label: "Elaboradores artesanales" },
    { icon: "paw" as const, label: "Veterinarias con marcas propias" },
    { icon: "lightbulb" as const, label: "Emprendedores alimentarios" },
    { icon: "building" as const, label: "Empresas agroindustriales" },
    { icon: "bone" as const, label: "Alimentos para mascotas" },
  ],
};

export const finalCtaContent = {
  title: "¿Tenés un producto pronto para salir al mercado?",
  subtitleRegular:
    "Evaluamos tu caso y te indicamos exactamente qué registros necesitás para comercializarlo de forma legal.",
  button: { label: "Solicitar asesoramiento", href: "/contacto", variant: "solid" as const },
  image: "/img/servicios-cta4.png",
};
