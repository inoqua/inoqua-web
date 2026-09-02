import ServiceHero from "@/components/sections/service/ServiceHero";
import PricingCards from "@/components/sections/service/PricingCards";
import FinalCTA from "@/components/sections/FinalCTA";
import { heroContent, pricingSection, finalCtaContent } from "@/content/servicios-planes-de-trabajo";
import { buildMetadata } from "@/lib/seo/metadata";
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";

const path = "/servicios/planes-de-trabajo";
const pageTitle = "Planes de Representación Técnica para Empresas Alimentarias";
const pageDescription =
  "Planes de acompañamiento técnico adaptados al riesgo y tamaño de tu empresa alimentaria: básico, profesional, integral o a medida. Consultá precios y alcance.";

export const metadata = buildMetadata({
  title: pageTitle,
  description: pageDescription,
  path,
  keywords: [
    "planes representación técnica alimentos",
    "consultora bromatológica planes",
    "precio representación técnica Uruguay",
  ],
});

export default function PlanesDeTrabajoPage() {
  return (
    <main>
      <ServiceJsonLd name={pageTitle} description={pageDescription} path={path} />
      <BreadcrumbJsonLd
        items={[
          { name: "Inicio", path: "/" },
          { name: "Servicios", path: "/#servicios" },
          { name: "Planes de trabajo", path },
        ]}
      />
      <ServiceHero {...heroContent} />
      <PricingCards {...pricingSection} />
      <FinalCTA {...finalCtaContent} />
    </main>
  );
}
