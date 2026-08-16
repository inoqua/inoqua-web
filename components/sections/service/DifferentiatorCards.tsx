import Reveal from "@/components/ui/Reveal";
import Icon, { IconName } from "@/components/ui/Icon";

type DifferentiatorCard = { icon: IconName; title: string; text: string };

type DifferentiatorCardsProps = {
  eyebrow: string;
  title: string;
  cards: DifferentiatorCard[];
  quote: string;
};

/**
 * Sección de diferenciales sobre fondo celeste: eyebrow + título, grilla 2x2 de
 * tarjetas anchas (ícono + título + texto) y un cuadro de cita destacada.
 * Componente exclusivo de landings de servicio.
 */
export default function DifferentiatorCards({ eyebrow, title, cards, quote }: DifferentiatorCardsProps) {
  return (
    <section className="bg-azul/[0.06] py-17">
      <div className="mx-auto max-w-content px-6 sm:px-10 lg:px-20">
        <Reveal className="text-center">
          <span className="text-xs font-medium uppercase tracking-[1.2px] text-naranja/80">{eyebrow}</span>
          <h2 className="mt-2 text-titulo-xxl text-azul">{title}</h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2 lg:auto-rows-fr">
          {cards.map((card, i) => (
            <Reveal key={card.title} delay={i * 100} className="lg:h-full">
              <div className="flex lg:h-full items-start gap-5 rounded-panel border-2 border-azul/10 bg-white p-6 transition-transform duration-300 hover:-translate-y-1">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-azul/10 text-azul">
                  <Icon name={card.icon} className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-card-titulo text-azul">{card.title}</h3>
                  <p className="mt-4 text-card-txt text-texto">{card.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400}>
          <div className="mt-4 rounded-2xl border-2 border-azul/10 bg-white px-8 py-3 text-center">
            <p className="text-parrafo-20 text-azul">{quote}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
