import Reveal from "@/components/ui/Reveal";
import Icon, { IconName } from "@/components/ui/Icon";

type DifferentiatorCard = { icon: IconName; title: string; text: string };

type DifferentiatorCardsGridProps = {
  eyebrow: string;
  title: string;
  cards: DifferentiatorCard[];
  quote: string;
};

/**
 * Variante de DifferentiatorCards: a partir de 992px pasa a 3 columnas (como ProblemCardsGrid)
 * en vez de 2. Mismos colores, disposición de ícono/texto y altura de tarjeta que el original.
 */
export default function DifferentiatorCardsGrid({ eyebrow, title, cards, quote }: DifferentiatorCardsGridProps) {
  return (
    <section className="bg-azul/[0.06] py-17">
      <div className="mx-auto max-w-content px-6 sm:px-10 lg:px-20">
        <Reveal className="text-center">
          <span className="text-xs font-medium uppercase tracking-[1.2px] text-naranja/80">{eyebrow}</span>
          <h2 className="mt-2 text-titulo-xxl text-azul">{title}</h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:auto-rows-fr lg:grid-cols-3 lg:auto-rows-auto">
          {cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 100} className="max-lg:h-full">
              <div className="flex max-lg:h-full min-[1024px]:h-[190px] min-[1170px]:h-full min-[1170px]:min-h-40 min-[1203px]:min-h-30 items-start gap-5 rounded-panel border-2 border-azul/10 bg-white p-6 transition-transform duration-300 hover:-translate-y-1">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-azul/10 text-azul">
                  <Icon name={card.icon} className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="sm:min-h-13 lg:h-11.25 lg:min-h-0 text-card-titulo lg:text-[15px] text-azul">{card.title}</h3>
                  <p className="mt-3 text-card-txt text-texto">{card.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400}>
          <div className="mt-4 rounded-2xl border-2 border-azul/10 bg-white px-8 py-3 text-center">
            <p className="text-subtitulo-xxl text-azul">{quote}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
