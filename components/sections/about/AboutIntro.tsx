import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

type AboutIntroProps = {
  title: string;
  paragraphs: string[];
  image?: string;
  imagePosition?: "left" | "right";
  button?: { label: string; href: string };
  /** Excepción puntual para reducir el margen superior cuando la sección va pegada a otra. */
  spacingClassName?: string;
  /** Cuando es true, la imagen ocupa todo el ancho de su columna en vez de limitarse a 492px centrada. */
  imageFullWidth?: boolean;
  /** Gap del grid título/imagen; permite alinear la columna de la imagen con un bloque de otra sección. */
  gapClassName?: string;
};

/**
 * Bloque simple de "quiénes somos": título + uno o más párrafos + foto al lado.
 * Sin checklist (a diferencia de FeatureSplit / WhyChooseUs). El botón es opcional.
 */
export default function AboutIntro({
  title,
  paragraphs,
  image = "/img/nosotros-about.png",
  imagePosition = "right",
  button,
  spacingClassName = "py-17",
  imageFullWidth = false,
  gapClassName = "gap-12",
}: AboutIntroProps) {
  const textOrderClass = imagePosition === "left" ? "lg:order-last" : "lg:order-first";
  const imageOrderClass = imagePosition === "left" ? "lg:order-first" : "lg:order-last";
  const textIndentClass = imagePosition === "left" ? "lg:ml-5" : "";
  const imageWidthClass = imageFullWidth ? "w-full" : "mx-auto w-full max-w-[492px]";

  return (
    <section className={spacingClassName}>
      <div className={`mx-auto grid max-w-content grid-cols-1 items-center ${gapClassName} px-6 sm:px-10 lg:grid-cols-2 lg:px-20`}>
        <Reveal className={`${textOrderClass} ${textIndentClass}`}>
          <h2 className="text-titulo-xxl text-azul">{title}</h2>
          {paragraphs.map((p, i) => (
            <p key={i} className="mt-5 text-subtitulo-xxl text-texto">
              {p}
            </p>
          ))}
          {button && (
            <div className="mt-8">
              <Button label={button.label} href={button.href} variant="solid" />
            </div>
          )}
        </Reveal>

        <Reveal
          delay={150}
          className={`relative h-[340px] overflow-hidden rounded-panel ${imageWidthClass} ${imageOrderClass}`}
        >
          <Image src={image} alt={title} fill sizes="(max-width: 1024px) 90vw, 492px" className="object-cover" />
        </Reveal>
      </div>
    </section>
  );
}
