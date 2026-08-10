import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import Parallax from "@/components/ui/Parallax";

type ContactInfoCard = {
  icon: "email" | "phone" | "whatsapp" | "instagram" | "linkedin";
  label: string;
  href: string;
};

type ContactHeroProps = {
  title: string;
  subtitle: string;
  cards: ContactInfoCard[];
};

const icons: Record<ContactInfoCard["icon"], React.ReactNode> = {
  email: (
    <>
      <path d="M2 6h20v12H2V6Z" />
      <path d="m2 6 10 7 10-7" />
    </>
  ),
  phone: (
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
  ),
  instagram: (
    <>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  linkedin: (
    <path
      fill="currentColor"
      stroke="none"
      d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2 3.77-2 4 0 4.8 2.6 4.8 6.1V21h-4v-5.4c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9V21h-4V9Z"
    />
  ),
  whatsapp: (
    <>
      <path
        fill="currentColor"
        stroke="none"
        d="M17.5 14.4c-.3-.1-1.7-.9-2-1-.3-.1-.5-.1-.6.1-.2.3-.7 1-.9 1.1-.1.2-.3.2-.6.1-.3-.2-1.2-.5-2.4-1.5-.9-.8-1.5-1.8-1.6-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.2-.1.2-.3.3-.5.1-.2 0-.4 0-.5C10.1 8.7 9.6 7.5 9.4 7c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.5-.3Z"
      />
      <path
        fill="currentColor"
        stroke="none"
        d="M12 2a10 10 0 0 0-8.6 15L2 22l5.2-1.4A10 10 0 1 0 12 2Zm0 18.3a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3A8.3 8.3 0 1 1 12 20.3Z"
      />
    </>
  ),
};

/**
 * Hero de la landing de Contacto: foto de fondo con parallax, título + subtítulo,
 * y 4 tarjetas oscuras con las vías de contacto directo. Distinto de ServiceHero
 * y de Hero de Home (no lleva botones, sino tarjetas de contacto).
 */
export default function ContactHero({ title, subtitle, cards }: ContactHeroProps) {
  return (
    <section className="relative overflow-hidden px-6 py-17 sm:px-10 lg:px-20">
      <Parallax className="absolute inset-x-0 -inset-y-[15%]">
        <Image src="/img/negocio-cta3.png" alt="" fill className="object-cover" />
      </Parallax>

      <Reveal className="relative mx-auto flex w-full max-w-6xl flex-col items-center rounded-final bg-white/85 px-10 py-14 text-center shadow-lg backdrop-blur-sm">
        <h1 className="text-titulo-xxl-hero-sm sm:text-titulo-xxl-hero text-azul">{title}</h1>
        <p className="mx-auto mt-5 max-w-xl text-subtitulo-xxl text-texto">{subtitle}</p>

        <div className="mt-12 flex w-full flex-wrap justify-center gap-3">
          {cards.map((card, i) => (
            <Reveal key={card.label} delay={i * 100}>
              <a
                href={card.href}
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex h-[140px] w-52.5 flex-col items-center justify-center gap-3 rounded-card bg-azul p-4 text-center transition-transform duration-300 hover:-translate-y-1"
              >
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-white transition-colors duration-300 group-hover:text-orange-400">
                  {icons[card.icon]}
                </svg>
                <span className="text-[15px] text-white group-hover:text-orange-400">{card.label}</span>
              </a>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
