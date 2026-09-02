import Reveal from "@/components/ui/Reveal";
import Icon, { IconName } from "@/components/ui/Icon";

type CategoryCard = { icon: IconName; title: string; text: string };

type CategoryCardsProps = {
  cards: CategoryCard[];
};

/** Par de tarjetas oscuras (ícono + título + texto) debajo del hero, para destacar las categorías del servicio. */
export default function CategoryCards({ cards }: CategoryCardsProps) {
  return (
    <section className="mx-auto max-w-content px-6 py-12 sm:px-10 lg:px-20">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {cards.map((card, i) => (
          <Reveal key={card.title} delay={i * 100}>
            <div className="flex h-full items-start gap-5 rounded-card bg-azul p-7">
              <Icon name={card.icon} className="h-9 w-9 ml-4 shrink-0 self-center text-naranja" />
              <div className="ml-4">
                <h3 className="text-card-titulo text-white">{card.title}</h3>
                <p className="mt-3 text-card-txt text-white/90 lg:max-w-75">{card.text}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
