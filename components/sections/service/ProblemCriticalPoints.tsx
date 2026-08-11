import Reveal from "@/components/ui/Reveal";
import Icon, { IconName } from "@/components/ui/Icon";

type ProblemCard = { icon: IconName; text: string };

type CriticalPoints = { title: string; items: string[] };

type ProblemCriticalPointsProps = {
  title: string;
  cards: ProblemCard[];
  criticalPoints: CriticalPoints;
};

/**
 * Sección "problema" con grilla 2x2 de tarjetas junto a un panel de puntos
 * críticos (lista con íconos de alerta). Componente exclusivo de Certificaciones.
 */
export default function ProblemCriticalPoints({ title, cards, criticalPoints }: ProblemCriticalPointsProps) {
  return (
    <section className="mx-auto max-w-content px-6 pt-6 pb-5 sm:px-10 lg:px-20">
      <Reveal>
        <h2 className="mx-auto max-w-xl text-subtitulo-35-sm sm:text-subtitulo-35 text-azul text-center">{title}</h2>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2 lg:items-stretch">
        <div className="grid grid-cols-2 gap-4">
          {cards.map((card, i) => (
            <Reveal key={card.text} delay={i * 80}>
              <div className="flex h-full min-h-[130px] flex-col items-center justify-center gap-4 rounded-card bg-azul p-5 text-center transition-transform duration-300 hover:-translate-y-1">
                <Icon name={card.icon} className="h-9 w-9 text-naranja" />
                <p className="text-[15px] text-white">{card.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={320}>
          <div className="h-full rounded-panel border-2 border-naranja bg-white p-6 sm:p-8">
            <h3 className="text-card-titulo lg:ml-10 text-azul">{criticalPoints.title}</h3>
            <ul className="mt-4 space-y-3">
              {criticalPoints.items.map((item) => (
                <li key={item} className="flex items-start gap-3 lg:ml-10">
                  <Icon name="warning" className="mt-0.5 h-5 w-5 shrink-0 text-naranja" />
                  <span className="text-card-txt mt-1 text-texto">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
