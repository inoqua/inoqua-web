import Reveal from "@/components/ui/Reveal";
import Icon, { IconName } from "@/components/ui/Icon";

type CertCard = {
  icon: IconName;
  code: string;
  tag: string;
  description: string;
  items: string[];
};

type CertificationCardsProps = {
  title: string;
  subtitle: string;
  cards: CertCard[];
};

/**
 * Grilla de normas/certificaciones (ej: ISO 9001, ISO 22000...): ícono, código,
 * etiqueta de categoría, descripción y checklist de a quién aplica. Componente
 * exclusivo de la landing de Certificaciones.
 */
export default function CertificationCards({ title, subtitle, cards }: CertificationCardsProps) {
  return (
    <section className="mx-auto max-w-content px-6 py-10 sm:px-10 lg:px-20">
      <Reveal className="mx-auto max-w-3xl text-center">
        <h2 className="mt-2 text-titulo-xxl text-azul">{title}</h2>
        <p className="mt-3 text-subtitulo-xxl text-texto mx-auto max-w-xl">{subtitle}</p>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {cards.map((card, i) => (
          <Reveal key={card.code} delay={i * 100}>
            <div className="flex h-full flex-col items-center rounded-panel bg-azul/[0.06] p-8 text-center">
              <Icon name={card.icon} className="h-10 w-10 text-azul" />
              <h3 className="mt-3 text-[20px] font-bold text-texto">{card.code}</h3>
              <span className="mt-3 flex min-h-10 items-center justify-center rounded-full bg-naranja px-4 py-1 text-center text-[12px] font-medium leading-4 text-azul">
                {card.tag}
              </span>
              <p className="mt-4 lg:min-h-25 xl:min-h-20 text-[16px] leading-[22px] text-texto">{card.description}</p>
              <ul className="mt-5 flex w-full flex-col items-start gap-2">
                {card.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-left text-[15px] text-texto">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className=" mt-0.5 shrink-0 text-naranja">
                      <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.15" />
                      <path d="M8 12.5l2.5 2.5L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
