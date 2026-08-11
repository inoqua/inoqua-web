import Reveal from "@/components/ui/Reveal";
import Icon, { IconName } from "@/components/ui/Icon";

type BusinessChip = { icon: IconName; label: string };

type BusinessTypeGridProps = {
  title: string;
  chips: BusinessChip[];
};

/**
 * Grilla compacta de "tipos de negocio a los que aplica este servicio":
 * chips angostas con ícono + nombre del rubro. Distinto de AudienceCards
 * (que lleva frases más largas) y de BusinessTypes de Home (que lleva fotos).
 */
export default function BusinessTypeGrid({ title, chips }: BusinessTypeGridProps) {
  // Con 5 chips (ej: certificaciones) entran todas en una sola fila; con 4 o más de 5 se usan 4 por fila.
  const isFiveChips = chips.length === 5;
  const chipWidthClass = isFiveChips
    ? "w-[calc(50%_-_0.5rem)] sm:w-[calc(33.3333%_-_0.667rem)] lg:w-[calc(20%_-_0.8rem)]"
    : "w-[calc(50%_-_0.5rem)] sm:w-[calc(33.3333%_-_0.667rem)] lg:w-[calc(25%_-_0.75rem)]";

  return (
    <section className="mx-auto max-w-content px-6 py-17 sm:px-10 lg:px-20">
      <Reveal className="text-center">
        <h2 className="mx-auto max-w-3xl text-subtitulo-35-sm sm:text-subtitulo-35 text-azul">{title}</h2>
      </Reveal>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        {chips.map((chip, i) => (
          <Reveal key={chip.label} delay={i * 60} className={chipWidthClass}>
            <div className="flex h-[150px] flex-col items-center gap-4 rounded-card bg-azul p-4 pt-8 text-center transition-transform duration-300 hover:-translate-y-1">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center">
                <Icon name={chip.icon} className="h-8 w-8 text-naranja" />
              </div>
              <p className="text-[15px] mt-1 text-white">{chip.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
