import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

export type ClientLogo = { name: string; src: string };

type LogosMarqueeProps = {
  title: string;
  subtitle: string;
  logos: ClientLogo[];
};

/**
 * Franja de "empresas que confían": título + subtítulo + tira de logos con
 * scroll infinito (CSS puro, sin JS). Todos los logos se muestran a la misma
 * altura (h-16) y con el mismo espaciado (gap-10), sin importar la proporción
 * original de cada archivo — así la fila queda pareja.
 */
export default function LogosMarquee({ title, subtitle, logos }: LogosMarqueeProps) {
  // Duplicamos la lista para que el loop de la animación sea perfectamente continuo.
  const loopLogos = [...logos, ...logos];

  return (
    <section className="mx-auto max-w-content px-6 py-12 sm:px-10 lg:px-20">
      <Reveal className="text-center">
        <h2 className="text-titulo-xxl text-azul">{title}</h2>
        <p className="mx-auto mt-3 max-w-2xl text-subtitulo-xxl text-texto">{subtitle}</p>
      </Reveal>

      <Reveal delay={150} className="relative mt-12 overflow-hidden">
        {/* Degradados en los bordes para que el scroll infinito no se vea cortado */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />

        <div className="flex w-max animate-marquee items-center gap-10 hover:[animation-play-state:paused]">
          {loopLogos.map((logo, i) => (
            <div key={`${logo.name}-${i}`} className="flex h-16 w-36 shrink-0 items-center justify-center">
              <Image
                src={logo.src}
                alt={logo.name}
                width={144}
                height={64}
                className="h-full w-full object-contain grayscale transition-all duration-300 hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
