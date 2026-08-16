import Hero from "@/components/sections/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import ProcessChecklist from "@/components/sections/ProcessChecklist";
import HowWeWork from "@/components/sections/HowWeWork";
import BusinessTypes from "@/components/sections/BusinessTypes";
import FinalCTA from "@/components/sections/FinalCTA";
import {
  heroContent,
  servicesSection,
  processSection,
  howWeWorkSection,
  businessTypesSection,
  finalCtaSection,
} from "@/content/home";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Inoqua Consultoría Bromatológica",
  description:
    "Consultoría especializada en habilitaciones bromatológicas, representación técnica y normativa alimentaria en Uruguay. Evaluamos tu caso sin compromiso.",
  path: "/",
  keywords: [
    "consultoría alimentaria Uruguay",
    "habilitación bromatológica Montevideo",
    "representación técnica alimentos",
    "consultora alimentaria",
    "normativa bromatológica Uruguay",
  ],
});

export default function HomePage() {
  return (
    <main>
      <Hero {...heroContent} />
      <ServicesGrid {...servicesSection} />
      <ProcessChecklist {...processSection} />
      <BusinessTypes {...businessTypesSection} />
      <HowWeWork {...howWeWorkSection} />
      <FinalCTA {...finalCtaSection} />
    </main>
  );
}
