import Reveal from "@/components/ui/Reveal";
import Icon, { IconName } from "@/components/ui/Icon";

type ProblemCard = { icon: IconName; text: string };

type ProblemCardsProps = {
  title: string;
  subtitle: string;
  cards: ProblemCard[];
  /** Excepción puntual para permitir títulos más largos en una sola línea. */
  titleMaxWidthClassName?: string;
};

/**
 * Sección "problema" al inicio de una landing de servicio: pregunta grande +
 * grilla de tarjetas angostas (ícono + frase corta). No existe en Home.
 */
export default function ProblemCards({
  title,
  subtitle,
  cards,
  titleMaxWidthClassName = "max-w-[40rem]",
}: ProblemCardsProps) {
  const isSixCards = cards.length === 6;
  const isOddCount = cards.length % 2 !== 0;
  const gridColsClass =
    cards.length === 4 || isSixCards
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : "sm:grid-cols-3 lg:grid-cols-5";
  return (
    <section className="mx-auto max-w-content px-4 pt-6 pb-5 sm:px-10 lg:px-20">
      <Reveal>
        <h2 className={`mx-auto ${titleMaxWidthClassName} text-subtitulo-35-sm sm:text-subtitulo-35 text-azul text-center`}>{title}</h2>
        <p className="mt-10 text-subtitulo-xxl text-texto">{subtitle}</p>
      </Reveal>

      <div className={`mt-4 grid grid-cols-2 gap-4 ${gridColsClass}`}>
        {cards.map((card, i) => {
          const isLast = i === cards.length - 1;
          const centerLastRow = isSixCards && i === 4 ? "lg:col-start-2" : isSixCards && i === 5 ? "lg:col-start-3" : "";
          const centerLastOdd = isOddCount && isLast ? "max-sm:col-span-2 max-sm:mx-auto max-sm:max-w-[calc(50%-0.5rem)]" : "";
          return (
            <Reveal key={card.text} delay={i * 80} className={`${centerLastRow} ${centerLastOdd}`}>
              <div className="flex h-47.5 flex-col items-center gap-4 rounded-card bg-azul p-5 pt-8 text-center transition-transform duration-300 hover:-translate-y-1">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center">
                  <Icon name={card.icon} className="h-9 w-9 text-naranja" />
                </div>
                <p className="text-[15px] mt-3 text-white">{card.text}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
