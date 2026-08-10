import Button from "@/components/ui/Button";
import HeroImage from "@/components/ui/HeroImage";

type ServiceHeroProps = {
  breadcrumb: string;
  title: string;
  subtitle: string;
  primaryButton: { label: string; href: string };
  secondaryButton: { label: string; href: string };
  /** Foto específica de esta landing. Si no se pasa, usa la foto genérica del sitio. */
  image?: string;
};

/**
 * Hero para landings de servicio: agrega un breadcrumb arriba del título
 * (ej: "Servicios — Representación técnica"). Distinto del Hero de Home.
 */
export default function ServiceHero({
  breadcrumb,
  title,
  subtitle,
  primaryButton,
  secondaryButton,
  image,
}: ServiceHeroProps) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto grid max-w-content grid-cols-1 items-center gap-12 px-6 pt-8 pb-10 sm:px-10 lg:grid-cols-2 lg:gap-8 lg:px-20 lg:pt-10 lg:pb-20">
        <div className=" mt-12 lg:mt-3 animate-fadeUp">
          <span className="text-[10px]  font-medium uppercase tracking-[1.2px] text-naranja">
            {breadcrumb}
          </span>
          <h1 className="mt-3 text-titulo-xxl-hero-sm sm:text-titulo-xxl-hero text-azul">{title}</h1>
          <p className="mt-6 text-subtitulo-xxl text-texto">{subtitle}</p>
          <div className="mt-10 flex flex-nowrap gap-3 [&>a:last-child]:hidden min-[420px]:max-[639px]:[&>a:last-child]:inline-flex min-[420px]:max-[639px]:[&>a]:px-3 min-[420px]:max-[639px]:[&>a]:py-1.5 min-[420px]:max-[639px]:[&>a]:text-[14px] sm:[&>a:last-child]:inline-flex">
            <Button label={primaryButton.label} href={primaryButton.href} variant="solid" />
            <Button label={secondaryButton.label} href={secondaryButton.href} variant="outline" />
          </div>
        </div>

        <HeroImage alt={title} image={image} />
      </div>
    </section>
  );
}
