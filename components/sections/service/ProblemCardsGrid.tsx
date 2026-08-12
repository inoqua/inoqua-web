import Reveal from "@/components/ui/Reveal";
import Icon, { IconName } from "@/components/ui/Icon";

type ProblemCard = { icon: IconName; text: string };

type ProblemCardsGridProps = {
  title: string;
  subtitle: string;
  cards: ProblemCard[];
};

/**
 * Variante de ProblemCards para 6 tarjetas: grilla fija de 3 columnas (3 arriba + 3 abajo)
 * que ocupa todo el ancho del contenedor, igual que el resto de las secciones.
 */
export default function ProblemCardsGrid({ title, subtitle, cards }: ProblemCardsGridProps) {
  return (
    <section className="mx-auto max-w-content px-4 pt-6 pb-5 sm:px-10 lg:px-20">
      <Reveal>
        <h2 className="mx-auto max-w-xl text-subtitulo-35-sm sm:text-subtitulo-35 text-azul text-center">{title}</h2>
        <p className="mt-10 text-subtitulo-xxl text-texto">{subtitle}</p>
      </Reveal>

      <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {cards.map((card, i) => (
          <Reveal key={card.text} delay={i * 80}>
            <div className="flex h-30 items-center gap-3 rounded-card bg-azul px-3 py-4 text-left transition-transform duration-300 hover:-translate-y-1 max-[484px]:h-36 max-[484px]:flex-col max-[484px]:justify-center max-[484px]:text-center md:gap-5 md:px-8">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center lg:ml-1">
                <Icon name={card.icon} className="h-9 w-9 text-naranja" />
              </div>
              <p className="text-[15px] lg:pl-2 text-white">{card.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
