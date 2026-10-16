// Contenido editable de la landing "Nosotros".

export const aboutHeroContent = {
  title: "Somos un equipo de profesionales enfocados en la inocuidad alimentaria",
  subtitleRegular:
    "Acompañamos a empresas en sus procesos de habilitación, cumplimiento normativo y gestión técnica con un enfoque práctico.",
  image: "/img/nosotros-hero.webp",
  button: { label: "Solicitar asesoramiento", href: "/contacto" as const },
  secondaryButton: { label: "Nuestros servicios", href: "/#servicios" as const, variant: "dark" as const },
};

export const aboutIntroContent = {
  title: "Expertos en consultora técnica para la industria alimentaria",
  paragraphs: [
    "Trabajamos con un enfoque práctico, orientado a resolver problemas reales y asegurar que cada negocio pueda operar de forma segura y en regla.",
    "Nuestro foco es claro: vos te enfocás en tu negocio, nosotros en que esté habilitado y funcione correctamente todos los días.",
  ],
  imagePosition: "right" as const,
};

export const whyChooseUsContent = {
  title: "Por qué elegirnos",
  subtitle: "En InoQua te acompañamos desde la evaluación inicial hasta la aprobación final.",
  items: [
    "Diseñamos soluciones adaptadas a cada negocio",
    "Respuestas profesionales para operar con tranquilidad",
    "Gestión del trámite ante los organismos",
    "Seguimiento del expediente hasta su aprobación",
  ],
  imagePosition: "left" as const,
};

export const aboutHowWeWorkContent = {
  eyebrow: "NUESTRO MÉTODO",
  title: "Cómo trabajamos",
  subtitle: "Empleamos un método claro y sin sorpresas.",
  closingText: "Más que una solución puntual, somos tu aliado estratégico",
  steps: [
    { number: 1, title: "Evaluamos tu caso", text: "Analizamos el estado actual de tu negocio." },
    { number: 2, title: "Detectamos riesgos", text: "Detectamos puntos de mejora e incumplimientos." },
    { number: 3, title: "Implementamos soluciones", text: "Ordenamos procesos y documentación necesaria." },
    { number: 4, title: "Te acompañamos", text: "Continuamos con vos para que todo siga en regla." },
  ],
};

export const logosMarqueeContent = {
  title: "Empresas que respaldan nuestra trayectoria",
  subtitle:
    "Ellos ya delegaron la gestión bromatológica y los trámites oficiales en manos expertas. Sumá tu empresa a nuestra red de clientes.",
  logos: [
    { name: "Garrido — Soluciones integrales en envases", src: "/img/clients/garrido.png" },
    { name: "Florida's Gourmet", src: "/img/clients/floridas.png" },
    { name: "Mercado Verde", src: "/img/clients/mercado.png" },
    { name: "Supermercados Frigo", src: "/img/clients/frigo.png" },
    { name: "Ciudad Vieja Cocina", src: "/img/clients/ciudad-vieja.png" },
    { name: "Hornito Prado", src: "/img/clients/hornito.png" },
    { name: "Empanadas Da Gusto", src: "/img/clients/empanadas.png" },
    { name: "Molino Cañuelas", src: "/img/clients/canuelas.png" },
    { name: "Supermercado La Bohemia", src: "/img/clients/bohemia.png" },
    { name: "Barbacoa del Parque", src: "/img/clients/barbacoa.png" },
    { name: "APC", src: "/img/clients/apc.png" },
    { name: "Crazy Crêpes", src: "/img/clients/crepes.png" },
    { name: "Malba-Tahan", src: "/img/clients/melba.png" },
    { name: "Chelato Helados Gourmet", src: "/img/clients/chelato.png" },
    { name: "Doña Elida", src: "/img/clients/dona-elida.png" },
    { name: "NOF Cervecería Artesanal", src: "/img/clients/nof.png" },
    { name: "Pigor Plast", src: "/img/clients/pigor-plast.png" },
    { name: "Soluciones Gourmet", src: "/img/clients/soluciones-gourmet.png" },
    { name: "Feria Paseo del Lago", src: "/img/clients/feria-paseo-del-lago.png" },
    { name: "Decreto Natural", src: "/img/clients/decreto-natural.png" },
  ],
};

export const aboutFinalCtaContent = {
  title: "Dejá la gestión técnica en manos expertas y operá con tranquilidad",
  subtitleRegular: "Conocemos la normativa y entendemos la realidad de tu rubro. ",
  subtitleBold: "Evaluamos tu caso sin compromiso.",
  button: { label: "Evaluar mi caso", href: "/contacto" },
  image: "/img/nosotros-cta.webp",
};
