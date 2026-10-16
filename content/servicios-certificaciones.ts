import { title } from "process";

export const heroContent = {
  breadcrumb: "Servicios — Certificaciones y sistemas de gestión",
  title: "Consultoría HACCP e ISO 22000 en Uruguay",
  subtitle:
    "¿Un cliente o una licitación te exige certificar? Implementamos sistemas de gestión de inocuidad alimentaria y calidad —HACCP, ISO 22000, ISO 9001 e ISO 27001— hasta la auditoría externa.",
  primaryButton: { label: "Solicitar asesoramiento", href: "/contacto" },
  secondaryButton: { label: "Hablar por Whatsapp", href: "https://wa.me/59899286804" },
  image: "/img/certificaciones-hero.webp",
};

export const problemSection = {
  title: "¿Por qué las empresas necesitan certificar su sistema de inocuidad alimentaria?",
  cards: [
    { icon: "building" as const, text: "Acceder a nuevos mercados" },
    { icon: "handshake" as const, text: "Cumplir requisitos de clientes" },
    { icon: "clipboardCheck" as const, text: "Participar en licitaciones" },
    { icon: "trendingUp" as const, text: "Mejorar procesos internos" },
  ],
  criticalPoints: {
    title: "Puntos Críticos Comunes:",
    items: [
      "Documentación inexistente o desactualizada",
      "Procesos sin estandarizar",
      "Falta de tiempo para implementar",
      "Auditorías que generan incertidumbre",
      "Resistencia interna al cambio de procesos",
    ],
  },
};

export const strategicSupportSection = {
  title: "Acompañamiento Estratégico",
  paragraphs: [
    "En InoQua acompañamos a las organizaciones en el diseño, implementación y mejora de sistemas de gestión alineados con estándares internacionales. Trabajamos con cada equipo para que la certificación no sea un trámite aislado, sino parte natural de cómo opera la empresa.",
    "No solo somos consultores, somos tu respaldo técnico permanente.",
  ],
  image: "/img/certificaciones-solucion.webp",
  imagePosition: "left" as const,
};

export const strategicSupportButton = { label: "Solicitar asesoramiento", href: "/contacto" };

export const certificationCardsSection = {
  title: "Impulsamos la Excelencia Normativa",
  subtitle: "En InoQua te acompañamos en la implementación de sistemas de gestión alineados con estándares internacionales.",
  cards: [
    {
      icon: "shield" as const,
      code: "ISO 22000",
      tag: "INOCUIDAD ALIMENTARIA",
      description:
        "Implementamos tu plan HACCP y el sistema ISO 22000 para identificar y reducir peligros en toda la cadena alimentaria.",
      items: ["HACCP y BPM", "Programas prerrequisito", "Control de peligros químicos"],
    },
    {
      icon: "package" as const,
      code: "ISO 9001",
      tag: "GESTIÓN DE CALIDAD",
      description:
        "Optimizamos procesos, aumentamos la satisfacción del cliente y promovemos la mejora continua.",
      items: ["Optimización de procesos", "Empresas de servicios y PYMES", "Laboratorios de control"],
    },
    {
      icon: "building" as const,
      code: "ISO 27001",
      tag: "SEGURIDAD DE LA INFORMACIÓN",
      description: "Diseñamos sistemas para proteger la información crítica y gestionar riesgos digitales.",
      items: ["Empresas tecnológicas", "Confidencialidad y datos", "Consultoras y sector público"],
    },
  ],
};

export const servicesIncludedSection = {
  title: "¿Qué incluye nuestra consultoría?",
  subtitle: "Un proceso integral diseñado para que tu única preocupación sea el crecimiento de tu negocio.",
  items: [
    "Diagnóstico inicial",
    "Análisis de brechas (Gap Analysis)",
    "Elaboración de documentación",
    "Diseño de procedimientos",
    "Capacitación del personal",
    "Auditorías internas",
    "Preparación para certificación",
    "Acompañamiento durante auditorías externas",
  ],
  imagePosition: "right" as const,
  image: "/img/certificaciones-servicios.webp",
};

export const businessTypesGrid = {
  title: "¿Para quién es este servicio?",
  chips: [
    { icon: "cookingPot" as const, label: "Industrias alimentarias" },
    { icon: "briefcase" as const, label: "Empresas de servicios" },
    { icon: "laptop" as const, label: "Empresas tecnológicas" },
    { icon: "package" as const, label: "Importadores y exportadores" },
    { icon: "building" as const, label: "Organizaciones de alto nivel" },
  ],
};

export const finalCtaContent = {
  title: "¿Necesitás prepararte para una auditoría?",
  subtitleRegular:
    "Te acompañamos en la implementación de HACCP e ISO 22000 en Uruguay para que llegues sin desvíos a la certificación.",
  button: { label: "Solicitar asesoramiento", href: "/contacto" },
  image: "/img/servicios-cta5.webp",
};
