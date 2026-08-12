import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/seo/site";

const serviciosLinks = [
  { label: "Habilitaciones / Renovaciones bromatológicas", href: "/servicios/habilitaciones" },
  { label: "Representación Técnica", href: "/servicios/representacion-tecnica" },
  { label: "Registro de productos", href: "/servicios/registro-productos" },
  { label: "Capacitaciones", href: "/servicios/capacitaciones" },
  { label: "Certificaciones y sistemas de gestión", href: "/servicios/certificaciones" },
  { label: "Planes de trabajo", href: "/servicios/planes-de-trabajo" },
];

const contactInfo = {
  phone: "+598 99 286 804",
  phoneHref: "tel:+59899286804",
  email: "info@inoqua.com.uy",
  email2: "registros@inoqua.com.uy",
  locationLine1: "Misiones 1379 / 603",
  locationLine2: "Montevideo, Uruguay",
  mapsHref:
    "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent("Misiones 1379 / 603, Montevideo, Uruguay"),
};

export default function Footer() {
  return (
    <footer className="w-full bg-azul text-white">
      <div className="mx-auto max-w-content px-6 pt-12 pb-4 sm:px-10 lg:px-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr_auto]">
          {/* Columna 1: logo + descripción + redes */}
          <div>
            <div className="relative h-18 w-42">
              <Image
                src="/img/Logo-blanco.png"
                alt="InoQua Consultoría Alimentaria"
                fill
                sizes="180px"
                className="object-contain object-left"
              />
            </div>
            <p className="mt-4 max-w-[280px] text-[16px] leading-relaxed text-white/80">
              Consultoría especializada en habilitaciones, representación técnica y normativa
              alimentaria.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-naranja"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-naranja"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2 3.77-2 4 0 4.8 2.6 4.8 6.1V21h-4v-5.4c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9V21h-4V9Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Columna 2: servicios */}
          <div>
            <h4 className="text-footer-titulo text-naranja">SERVICIOS</h4>
            <ul className="mt-4 flex flex-col gap-3">
              {serviciosLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[16px] text-white/90 transition-colors hover:text-naranja"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: contacto */}
          <div>
            <h4 className="text-footer-titulo text-naranja">CONTACTO</h4>
            <ul className="mt-4 flex flex-col gap-4">
              <li className="flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z" />
                </svg>
                <a href={contactInfo.phoneHref} className="text-[16px] text-white/90 hover:text-naranja">
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="mt-0.5 shrink-0"
                >
                  <path d="M4 4h16v16H4V4Z" opacity="0" />
                  <path d="M22 6 12 13 2 6" />
                  <path d="M2 6h20v12H2V6Z" />
                </svg>
                <div className="flex flex-col gap-1">
                  <a href={`mailto:${contactInfo.email}`} className="text-[16px] text-white/90 hover:text-naranja">
                    {contactInfo.email}
                  </a>
                  <a href={`mailto:${contactInfo.email2}`} className="text-[16px] text-white/90 hover:text-naranja">
                    {contactInfo.email2}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="mt-0.5 shrink-0"
                >
                  <path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 1 1 18 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <a
                  href={contactInfo.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[16px] text-white/90 hover:text-naranja"
                >
                  {contactInfo.locationLine1}
                  <br />
                  {contactInfo.locationLine2}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-2 border-t border-white/10 pt-6 text-center text-[15px] text-white/70 sm:flex-row sm:justify-between sm:gap-4">
          <p>
            © {new Date().getFullYear()} InoQua Consultoría Alimentaria. Todos los derechos reservados.
          </p>
          <p className="text-white/40">
            Desarrollado por {" "}
            <a href="https://giameringolo.com" target="_blank" rel="noopener noreferrer" className="underline decoration-white/20 underline-offset-2 transition-colors hover:text-white/70 hover:decoration-white/40">Gianella Meringolo</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
