// Todo el contenido editable de la Home vive acá.
// Para cambiar textos o links de esta página, editá este archivo: los componentes
// NO tienen texto "hardcodeado", todo llega por props.
//
// Las imágenes están reemplazadas por rectángulos de color (PlaceholderImage) para
// que reemplaces cada una por tu foto real. Ver README.md para instrucciones.

export const heroContent = {
  title: "Impulsá tu empresa de alimentos con seguridad y respaldo técnico",
  subtitle:
    "Somos una consultoría especializada en el área alimentaria, enfocada en acompañar a empresas en sus procesos de habilitación, cumplimiento normativo y gestión técnica.",
  imageLabel: "Foto hero",
  primaryButton: { label: "Solicitar asesoramiento", href: "/contacto" },
  secondaryButton: { label: "Hablar por Whatsapp", href: "https://wa.me/59899286804" },
};

export const servicesSection = {
  title: "Nuestros servicios",
  subtitle: "Soluciones integrales para empresas del sector alimentario",
  cards: [
    {
      icon: "clipboard" as const,
      title: "Habilitaciones",
      text: "Gestionamos el proceso para que tu negocio quede habilitado correctamente.",
      href: "/servicios/habilitaciones",
    },
    {
      icon: "shield" as const,
      title: "Representación Técnica",
      text: "Acompañamiento continuo para operar sin riesgo ni problemas.",
      href: "/servicios/representacion-tecnica",
    },
    {
      icon: "idCard" as const,
      title: "Registro de productos",
      text: "Te ayudamos a registrar tus productos y salir al mercado sin trabas.",
      href: "/servicios/registro-productos",
    },
    {
      icon: "graduationCap" as const,
      title: "Capacitaciones",
      text: "Entrenamos a tu equipo para evitar errores y cumplir normas.",
      href: "/servicios/capacitaciones",
    },
  ],
};

export const processSection = {
  title: "Nos encargamos de todo el proceso por vos",
  subtitle: "En InoQua te acompañamos desde la evaluación inicial hasta la aprobación final.",
  imageLabel: "Foto del proceso",
  items: [
    "Evaluación completa del local",
    "Preparación de toda la documentación",
    "Asesoramiento sobre adecuaciones necesarias",
    "Gestión del trámite ante los organismos",
    "Seguimiento del expediente hasta su aprobación",
  ],
  button: { label: "Solicitar asesoramiento", href: "/contacto" },
};

export const howWeWorkSection = {
  eyebrow: "NUESTRO MÉTODO",
  title: "Cómo trabajamos",
  subtitle: "Empleamos un método claro y sin sorpresas.",
  closingText:
    "Trabajamos con un enfoque práctico, orientado a resolver problemas reales y asegurar que cada negocio pueda operar de forma segura y en regla",
  steps: [
    { number: 1, title: "Evaluamos tu caso", text: "Analizamos el estado actual de tu negocio." },
    { number: 2, title: "Detectamos riesgos", text: "Detectamos puntos de mejora e incumplimientos." },
    { number: 3, title: "Implementamos soluciones", text: "Ordenamos procesos y documentación necesaria." },
    { number: 4, title: "Te acompañamos", text: "Continuamos con vos para que todo siga en regla." },
  ],
};

export const businessTypesSection = {
  title: "Trabajamos con distintos tipos de negocios",
  subtitle: "Cada rubro tiene su normativa y sus particularidades.",
  cards: [
    { label: "Restaurantes y gastronomía", href: "/tipo-de-negocio/locales-gastronomicos", image: "/img/home-negocio-restaurante.png" },
    { label: "Kioscos y almacenes", href: "/tipo-de-negocio/locales-sin-elaboracion", image: "/img/home-negocio-kiosco.png" },
    { label: "Supermercados", href: "/tipo-de-negocio/supermercados-autoservicios", image: "/img/supermercados-hero.png" },
    { label: "Industrias alimentarias", href: "/tipo-de-negocio/industria-y-elaboracion", image: "/img/home-negocio-industria.png" },
    { label: "Depósitos y logística", href: "/tipo-de-negocio/depositos-y-logistica", image: "/img/deposito-hero.png" },
    { label: "Espacios colectivos", href: "/tipo-de-negocio/espacios-gastronomicos-colectivos", image: "/img/espaciosColectivos-hero.png" },
  ],
};

export const finalCtaSection = {
  title: "El problema no es el trámite, sino la falta de respaldo técnico para enfrentarlo",
  subtitleRegular: "Un error puede costarte tiempo, dinero o incluso tu negocio. ",
  subtitleBold: "Evaluamos tu caso sin compromiso.",
  button: { label: "Evaluar mi caso", href: "/contacto" },
  image: "/img/home_cta.png",
};
