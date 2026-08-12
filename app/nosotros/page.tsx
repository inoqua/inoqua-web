import FinalCTA from "@/components/sections/FinalCTA";
import HowWeWork from "@/components/sections/HowWeWork";
import AboutIntro from "@/components/sections/about/AboutIntro";
import WhyChooseUs from "@/components/sections/about/WhyChooseUs";
import LogosMarquee from "@/components/sections/about/LogosMarquee";
import {
  aboutHeroContent,
  aboutIntroContent,
  whyChooseUsContent,
  aboutHowWeWorkContent,
  logosMarqueeContent,
  aboutFinalCtaContent,
} from "@/content/nosotros";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata = buildMetadata({
  title: "Nosotros",
  description:
    "Conocé al equipo de InoQua: profesionales especializados en inocuidad alimentaria, habilitaciones y normativa bromatológica en Uruguay.",
  path: "/nosotros",
  keywords: ["consultora alimentaria Uruguay", "equipo InoQua", "consultoría bromatológica Montevideo"],
});

export default function NosotrosPage() {
  return (
    <main>
      <FinalCTA {...aboutHeroContent} ctaContainerClassName="[&>a:last-child]:hidden min-[500px]:[&>a:last-child]:inline-flex" />
      <AboutIntro {...aboutIntroContent} />
      <WhyChooseUs {...whyChooseUsContent} />
      <HowWeWork {...aboutHowWeWorkContent} />
      <LogosMarquee {...logosMarqueeContent} />
      <FinalCTA {...aboutFinalCtaContent} />
    </main>
  );
}
