// Todo el contenido editable de la Home vive acá.
// Para cambiar textos o links de esta página, editá este archivo: los componentes
// NO tienen texto "hardcodeado", todo llega por props.
//
// Las imágenes están reemplazadas por rectángulos de color (PlaceholderImage) para
// que reemplaces cada una por tu foto real. Ver README.md para instrucciones.

export const heroContent = {
  title: "Consultoría alimentaria en Uruguay para habilitar y hacer crecer tu empresa de alimentos",
  subtitle:
    "¿Necesitás habilitar tu empresa alimentaria? Te acompañamos en todo el proceso: habilitaciones bromatológicas, representación técnica, registro de productos y certificaciones de inocuidad.",
  imageLabel: "Foto hero",
  primaryButton: { label: "Solicitar asesoramiento", href: "/contacto" },
  secondaryButton: { label: "Hablar por Whatsapp", href: "https://wa.me/59899286804" },
};

export const servicesSection = {
  title: "Servicios de consultoría alimentaria",
  subtitle: "Habilitación bromatológica, representación técnica, registro de alimentos y capacitaciones.",
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
  title: "¿Vas a habilitar tu empresa y no sabés por dónde empezar?",
  subtitle: "Nos encargamos del proceso completo, desde el diagnóstico inicial hasta la aprobación.",
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
  title: "¿Cómo es trabajar con nosotros?",
  subtitle: "Un proceso claro, sin sorpresas y con plazos que se cumplen.",
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
  title: "Habilitación de empresas alimentarias según tu rubro",
  subtitle: "Cada actividad tiene su normativa, su organismo y sus tiempos.",
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
  title: "¿Vas a abrir un negocio de alimentos o te observaron en una inspección?",
  subtitleRegular: "Te acompañamos en la habilitación de tu empresa alimentaria.",
  subtitleBold: "Evaluamos tu caso sin compromiso.",
  button: { label: "Evaluar mi caso", href: "/contacto" },
  image: "/img/home_cta.png",
};
