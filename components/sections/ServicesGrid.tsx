import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import Icon, { IconName } from "@/components/ui/Icon";

type ServiceCardProps = {
  icon: IconName;
  title: string;
  text: string;
  href: string;
};

/** Card individual de servicio (fondo azul oscuro, título, texto y link "Ver más") */
export function ServiceCard({ icon, title, text, href }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group flex h-70 lg:h-82 xl:h-75 w-full flex-col rounded-card bg-azul p-7 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
    >
      {/* Acento de color en vez del ícono de Figma — reemplazá por tu ícono real si querés */}
      <Icon name={icon} className="h-10 w-10 shrink-0 text-naranja" />
      <h3 className="mt-6 min-h-13 text-card-titulo text-white">{title}</h3>
      <p className="mt-0 min-h-5 sm:min-h-14 md:min-h-12 lg:min-h-15 lg:mt-4 text-card-txt text-white/90">{text}</p>
      <span className="mt-10 sm:mt-8 lg:mt-auto flex items-center gap-2 text-sm text-white transition-transform duration-200 group-hover:translate-x-1">
        Ver más
        <Icon name="arrowRight" className="h-4 w-4 text-naranja" />
      </span>
    </Link>
  );
}

type ServicesGridProps = {
  title: string;
  subtitle: string;
  cards: ServiceCardProps[];
};

/**
 * Sección "Nuestros servicios" — grilla de ServiceCard.
 * Reutilizable pasando otro título/subtítulo/cards desde cualquier página.
 */
export default function ServicesGrid({ title, subtitle, cards }: ServicesGridProps) {
  return (
    <section id="servicios" className="mx-auto max-w-content px-4 py-17 sm:px-10 lg:px-20">
      <Reveal className="text-center">
        <h2 className="text-titulo-xxl text-azul">{title}</h2>
        <p className="mt-2 text-subtitulo-xxl text-texto">{subtitle}</p>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, i) => (
          <Reveal key={card.title} delay={i * 100}>
            <ServiceCard {...card} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
