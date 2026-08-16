import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import Button, { ButtonVariant } from "@/components/ui/Button";
import Parallax from "@/components/ui/Parallax";

type CTAButton = { label: string; href: string; variant?: ButtonVariant };

type FinalCTAProps = {
  title: string;
  subtitleRegular: string;
  subtitleBold?: string;
  button: CTAButton;
  /** Botón secundario opcional — permite reutilizar este banner como hero (ej: Nosotros). */
  secondaryButton?: CTAButton;
  /** Clases extra para el contenedor de los CTAs (ej: ocultar el secundario en mobile muy chico). */
  ctaContainerClassName?: string;
  /** Foto de fondo — por defecto la genérica de Home. Cada landing puede pasar la suya. */
  image?: string;
  /** Ancho máximo del título — por defecto 36rem. Cada landing puede angostarlo/ampliarlo. */
  titleMaxWidth?: string;
};

/**
 * Banner con foto de fondo (efecto parallax: sube suavemente al hacer scroll),
 * tarjeta blanca semitransparente centrada y uno o dos CTAs. Se usa como cierre
 * de página (Home, Representación Técnica, Contacto) o como hero (Nosotros).
 */
export default function FinalCTA({
  title,
  subtitleRegular,
  subtitleBold,
  button,
  secondaryButton,
  ctaContainerClassName = "",
  image = "/img/home1.jpg",
  titleMaxWidth = "36rem",
}: FinalCTAProps) {
  return (
    <section className="relative flex min-h-[420px] items-center justify-center overflow-hidden px-6 py-17 sm:px-10 lg:px-20">
      <Parallax className="absolute inset-x-0 -inset-y-[20%]">
        <Image src={image} alt="" fill className="object-cover" />
      </Parallax>
      <div className="absolute inset-0 bg-azul/20" />

      <Reveal className="relative mx-auto flex w-full max-w-3xl flex-col items-center rounded-final bg-white/85 px-10 py-14 text-center shadow-lg backdrop-blur-sm md:px-8">
        <h2 className="mx-auto md:text-titulo-xxl text-title-cta-sm text-[#282828]" style={{ maxWidth: titleMaxWidth }}>
          {title}
        </h2>
        <p className="mt-6 lg:max-w-xl text-[18px] leading-[32px] md:text-[16px] md:leading-[30px] text-black">
          {subtitleRegular}</p>
        <p className="text-[18px] leading-[32px] md:text-[16px] md:leading-[30px] text-black font-semibold">{subtitleBold}</p>
        
        <div className={`mt-8 flex flex-nowrap justify-center gap-3 ${ctaContainerClassName}`}>
          <Button label={button.label} href={button.href} variant={button.variant ?? "solid"} />
          {secondaryButton && (
            <Button
              label={secondaryButton.label}
              href={secondaryButton.href}
              variant={secondaryButton.variant ?? "dark"}
            />
          )}
        </div>
      </Reveal>
    </section>
  );
}
