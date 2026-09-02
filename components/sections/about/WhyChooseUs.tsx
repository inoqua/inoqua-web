import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

type WhyChooseUsProps = {
  title: string;
  subtitle: string;
  items: string[];
  imagePosition?: "left" | "right";
};

/**
 * Bloque "Por qué elegirnos": título + párrafo + checklist + foto.
 * Muy parecido a FeatureSplit (de servicios), pero sin botón — acá el fin es
 * informar, no empujar a una acción puntual.
 */
export default function WhyChooseUs({ title, subtitle, items, imagePosition = "left" }: WhyChooseUsProps) {
  const textOrderClass = imagePosition === "left" ? "lg:order-last" : "lg:order-first";
  const imageOrderClass = imagePosition === "left" ? "lg:order-first" : "lg:order-last";

  return (
    <section className="bg-azul/[0.06] py-12">
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-12 px-6 sm:px-10 lg:grid-cols-2 lg:px-20">
        <Reveal className={textOrderClass}>
          <h2 className="text-titulo-xxl text-azul">{title}</h2>
          <p className="mt-4 text-[18px] font-semibold leading-[29px] text-texto">{subtitle}</p>

          <ul className="mt-8 flex flex-col gap-5">
            {items.map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0 text-naranja">
                  <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.15" />
                  <path d="M8 12.5l2.5 2.5L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-parrafo-20 text-texto">{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal
          delay={150}
          className={`relative mx-auto h-[400px] w-full max-w-[492px] overflow-hidden rounded-panel ${imageOrderClass}`}
        >
          <Image src="/img/registroProductos-solucion.png" alt={title} fill sizes="(max-width: 1024px) 90vw, 492px" className="object-cover" />
        </Reveal>
      </div>
    </section>
  );
}
