import Reveal from "@/components/ui/Reveal";

type AlertBannerProps = {
  text: string;
};

/** Franja destacada de advertencia. Componente chico, propio de landings de servicio. */
export default function AlertBanner({ text }: AlertBannerProps) {
  return (
    <div className="mx-auto max-w-content px-6 mb-10 sm:px-10 lg:px-20">
      <Reveal className="mx-auto flex min-h-[70px] items-center justify-center rounded-2xl bg-azul px-8 py-4 text-left md:text-center">
        <p className="w-full text-parrafo-20 text-white">{text}</p>
      </Reveal>
    </div>
  );
}
