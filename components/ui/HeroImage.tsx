import Image from "next/image";

type HeroImageProps = {
  alt: string;
  className?: string;
  /**
   * Foto a mostrar en el hero. Por defecto usa la foto genérica del sitio.
   * Cuando tengas una foto real y específica para esta landing, pasala acá
   * (ej: image="/img/habilitaciones-hero.webp") sin tocar el resto del componente.
   */
  image?: string;
};

/**
 * Imagen de hero con el triángulo naranja decorativo (acento de marca repetido
 * en todas las landings). Centralizado acá para no duplicar el SVG en cada Hero.
 *
 * El triángulo apunta hacia la izquierda: su base (el lado recto) queda apoyada
 * sobre el margen derecho de la columna, y el pico se mete por detrás de la foto.
 */
export default function HeroImage({ alt, className = "", image = "/img/home1.webp" }: HeroImageProps) {
  return (
    <div className={`relative mx-auto hidden lg:flex h-70 w-full items-center justify-center animate-fadeIn lg:h-[360px] ${className}`}>
      {/* Triángulo naranja: base pegada al margen derecho, pico hacia la izquierda */}
      <svg
        className="pointer-events-none absolute right-10 top-1/2 -z-10 hidden h-[90%] w-[65%] -translate-y-1/2 text-naranja lg:-right-20 lg:w-[60%] lg:block"
        viewBox="0 0 100 100"
        fill="currentColor"
        preserveAspectRatio="none"
      >
        <polygon points="100,0 0,50 100,100" />
      </svg>

      <div className="relative h-full w-full max-w-[448px] translate-x-4 overflow-hidden rounded-hero shadow-xl">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 90vw, 448px"
          className="object-cover"
        />
      </div>
    </div>
  );
}
