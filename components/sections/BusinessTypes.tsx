import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";

type BusinessCard = { label: string; href: string; image: string };

type BusinessTypesProps = {
  title: string;
  subtitle: string;
  cards: BusinessCard[];
};

function BusinessCardItem({ card }: { card: BusinessCard }) {
  return (
    <Link
      href={card.href}
      prefetch={false}
      className="group relative block h-[220px] w-full overflow-hidden rounded-pill"
    >
      <Image
        src={card.image}
        alt={card.label}
        fill
        sizes="(max-width: 1024px) 90vw, 360px"
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-x-0 bottom-0 flex h-16 flex-col justify-center gap-0.5 rounded-b-pill bg-azul/60 px-6 backdrop-blur-[2px] transition-colors duration-300 group-hover:bg-azul/80">
        <span className="ml-4 text-[15px] font-bold leading-normal text-white">{card.label}</span>
        <span className="mb-1 ml-4 flex items-center gap-2 text-sm text-white transition-transform duration-200 group-hover:translate-x-1">
          Ver más
          <Icon name="arrowRight" className="h-4 w-4 text-naranja" />
        </span>
      </div>
    </Link>
  );
}

/** Sección "Trabajamos con distintos tipos de negocios" — grilla de tarjetas con foto. */
export default function BusinessTypes({ title, subtitle, cards }: BusinessTypesProps) {
  return (
    <section id="tipo-de-negocio" className="mx-auto max-w-content px-6 py-12 sm:px-10 lg:px-20">
      <Reveal className="text-left md:text-center">
        <h2 className="text-titulo-xxl text-azul">{title}</h2>
        <p className="mt-3 text-subtitulo-xxl text-texto">{subtitle}</p>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, i) => (
          <Reveal key={card.label} delay={i * 100}>
            <BusinessCardItem card={card} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
