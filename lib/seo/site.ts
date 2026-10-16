/**
 * Constantes del sitio para SEO. Centralizadas acá para no repetir datos del
 * negocio en cada archivo de metadata/structured data.
 */
export const site = {
  name: "InoQua Consultora Alimentaria",
  shortName: "InoQua",
  siteUrl: "https://inoqua.com.uy",
  description:
    "Consultora especializada en habilitaciones bromatológicas, representación técnica y normativa alimentaria en Uruguay.",
  locale: "es_UY",
  phone: "+59899286804",
  phoneDisplay: "+598 99 286 804",
  email: "info@inoqua.com.uy",
  address: {
    locality: "Montevideo",
    country: "UY",
  },
  social: {
    facebook: "",
    instagram: "https://www.instagram.com/inoqua.consultora/",
    linkedin: "https://www.linkedin.com/company/inoqua-uy",
  },
  defaultOgImage: "/img/home1.webp",
} as const;
