import Reveal from "@/components/ui/Reveal";
import Icon, { IconName } from "@/components/ui/Icon";

type AudienceCard = { icon: IconName; text: string };

type AudienceCardsProps = {
  title: string;
  subtitle: string;
  cards: AudienceCard[];
};

/** Sección "Para quién es este servicio" — tarjetas cuadradas oscuras con ícono + frase. */
export default function AudienceCards({ title, subtitle, cards }: AudienceCardsProps) {
  return (
    <section className="mx-auto max-w-content px-6 py-17 sm:px-10 lg:px-20">
      <Reveal className="text-center">
        <h2 className="text-titulo-xxl text-azul">{title}</h2>
        <p className="mt-3 text-subtitulo-xxl text-texto">{subtitle}</p>
      </Reveal>

      <div className="mt-12 grid  gap-6 grid-cols-2 lg:grid-cols-4">
        {cards.map((card, i) => (
          <Reveal key={card.text} delay={i * 100}>
            <div className="flex h-57 sm:h-40 lg:h-47 flex-col items-center gap-4 rounded-card bg-azul p-5 pt-8 text-center transition-transform duration-300 hover:-translate-y-1">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center">
                <Icon name={card.icon} className="h-9 w-9 text-naranja" />
              </div>
              <p className="text-[15px] mt-3 text-white">{card.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
