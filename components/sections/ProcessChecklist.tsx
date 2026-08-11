import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

type ProcessChecklistProps = {
  title: string;
  subtitle: string;
  imageLabel: string;
  items: string[];
  button: { label: string; href: string };
};

/** Sección con imagen a un lado y checklist de puntos + CTA al otro. Reutilizable en varias landings. */
export default function ProcessChecklist({ title, subtitle, imageLabel, items, button }: ProcessChecklistProps) {
  return (
    <section className="bg-azul/[0.06] py-17">
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-12 px-6 sm:px-10 lg:grid-cols-2 lg:px-20">
        <Reveal className="lg:flex lg:flex-col lg:items-center">
          <h2 className="text-subtitulo-35-sm sm:text-subtitulo-35 text-azul lg:w-100">{title}</h2>
          <p className="mt-4 text-[16px] font-semibold lg:w-100 leading-6.5 text-texto">{subtitle}</p>

          <ul className="mt-5 flex flex-col gap-3">
            {items.map((item, i) => (
              <li key={i} className="flex items-center gap-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0 text-naranja">
                  <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.15" />
                  <path d="M8 12.5l2.5 2.5L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[15px] leading-6.5 text-texto">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 lg:w-100">
            <Button label={button.label} href={button.href} variant="solid" />
          </div>
        </Reveal>

        <Reveal delay={150} className="relative mx-auto h-[400px] w-full max-w-[450px] overflow-hidden rounded-panel">
          <Image src="/img/home-solution.png" alt={imageLabel} fill sizes="(max-width: 1024px) 80vw, 526px" className="object-cover" />
        </Reveal>
      </div>
    </section>
  );
}
