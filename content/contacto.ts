// Contenido editable de la landing "Contacto".

export const contactHeroContent = {
  title: "Hablemos de tu próximo paso técnico",
  subtitle:
    "Contactanos para coordinar una asesoría, solicitar un presupuesto o resolver tus dudas sobre normativas.",
  cards: [
    { icon: "email" as const, label: "info@inoqua.com.uy", href: "mailto:info@inoqua.com.uy" },
    { icon: "whatsapp" as const, label: "+598 99 286 804", href: "https://wa.me/59899286804" },
    { icon: "instagram" as const, label: "@inoqua.consultora", href: "https://www.instagram.com/inoqua.consultora/" },
    { icon: "linkedin" as const, label: "inoqua-uy", href: "https://www.linkedin.com/company/inoqua-uy" },
  ],
};

export const contactFormContent = {
  title: "Solicitá la evaluación técnica de tu negocio",
  subtitle:
    "Completá el formulario, analizaremos tu rubro y nivel de riesgo para enviarte una propuesta a medida.",
  submitLabel: "Solicitar asesoramiento",
};

export const contactHowWeWorkContent = {
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

export const contactFinalCtaContent = {
  title: "Tu tranquilidad normativa empieza con un mensaje",
  subtitleRegular: "No dejes la habilitación de tu empresa al azar.",
  button: { label: "Nuestros servicios", href: "/#servicios", variant: "dark" as const },
  image: "/img/servicios-cta1.png",
  titleMaxWidth: "28rem",
};
