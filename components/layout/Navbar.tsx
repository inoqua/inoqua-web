"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";

const serviciosLinks = [
  { label: "Habilitaciones / Renovaciones bromatológicas", href: "/servicios/habilitaciones" },
  { label: "Representación Técnica", href: "/servicios/representacion-tecnica" },
  { label: "Registro de productos", href: "/servicios/registro-productos" },
  { label: "Capacitaciones", href: "/servicios/capacitaciones" },
  { label: "Certificaciones y sistemas de gestión", href: "/servicios/certificaciones" },
  { label: "Planes de trabajo", href: "/servicios/planes-de-trabajo" },
];

const negocioLinks = [
  { label: "Locales sin elaboración", href: "/tipo-de-negocio/locales-sin-elaboracion" },
  { label: "Locales gastronómicos", href: "/tipo-de-negocio/locales-gastronomicos" },
  { label: "Supermercados y autoservicios", href: "/tipo-de-negocio/supermercados-autoservicios" },
  { label: "Industria y elaboración", href: "/tipo-de-negocio/industria-y-elaboracion" },
  { label: "Depósitos y logística", href: "/tipo-de-negocio/depositos-y-logistica" },
  { label: "Espacios gastronómicos colectivos", href: "/tipo-de-negocio/espacios-gastronomicos-colectivos" },
  { label: "Ferias gastronómicas", href: "/tipo-de-negocio/ferias-gastronomicas" },
  
];

type LinkItem = { label: string; href: string };

/** Dropdown de escritorio: se despliega al hacer hover. */
function NavDropdown({ label, items, pathname }: { label: string; items: LinkItem[]; pathname: string }) {
  const [open, setOpen] = useState(false);
  const isSectionActive = items.some((item) => pathname === item.href);

  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        className={`flex items-center gap-2 text-[15px] font-medium transition-colors ${
          isSectionActive ? "text-naranja" : "text-azul"
        }`}
      >
        {label}
        <svg
          className={`h-2 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          viewBox="0 0 14 8"
          fill="none"
        >
          <path
            d="M1 1L7 7L13 1"
            stroke={isSectionActive ? "#FF8D28" : "#1B263B"}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {/*
        Ojo con esto: el div de abajo empieza justo en "top-full" (pegado al botón, sin gap) y
        usa padding-top (pt-3) en vez de margin/translate para separar visualmente el menú.
        Así el "área hoverable" queda continua entre el botón y el menú, sin un hueco muerto
        que dispare el onMouseLeave antes de llegar a los links.
      */}
      <div
        className={`absolute left-1/2 top-full z-40 w-72 -translate-x-1/2 pt-3 transition-opacity duration-200 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="rounded-xl bg-white p-2 shadow-xl ring-1 ring-black/5">
          {items.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`block rounded-lg px-4 py-2 text-[14px] transition-colors hover:bg-azul/5 ${
                  isActive ? "font-semibold text-naranja" : "text-azul"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/** Dropdown de mobile/tablet: se despliega con click (no hay hover táctil), igual que el de desktop pero acordeón. */
function MobileNavDropdown({
  label,
  items,
  pathname,
  onNavigate,
}: {
  label: string;
  items: LinkItem[];
  pathname: string;
  onNavigate: () => void;
}) {
  const [open, setOpen] = useState(false);
  const isSectionActive = items.some((item) => pathname === item.href);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`flex w-full items-center justify-between text-[15px] font-medium transition-colors ${
          isSectionActive ? "text-naranja" : "text-azul"
        }`}
        aria-expanded={open}
      >
        {label}
        <svg
          className={`h-2 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          viewBox="0 0 14 8"
          fill="none"
        >
          <path
            d="M1 1L7 7L13 1"
            stroke={isSectionActive ? "#FF8D28" : "#1B263B"}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>

      <div
        className={`overflow-hidden transition-[max-height] duration-300 ${open ? "max-h-150" : "max-h-0"}`}
      >
        <div className="mt-3 flex flex-col gap-3 border-l-2 border-azul/10 pl-4">
          {items.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onNavigate}
                className={`text-[15px] transition-colors ${
                  isActive ? "font-semibold text-naranja" : "text-azul/80"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cierra el menú mobile cada vez que cambiamos de página (al clickear un link).
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navLinkClass = (href: string, size: "desktop" | "mobile" = "desktop") => {
    const isActive = pathname === href;
    const base = size === "desktop" ? "text-[16px]" : "text-[16px]";
    return `${base} font-medium transition-colors ${isActive ? "font-semibold text-naranja" : "text-azul"}`;
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "shadow-none"
      }`}
    >
      <div className="mx-auto flex h-17.5 max-w-content items-center justify-between px-6 sm:px-10 lg:px-20">
        <Link href="/" className="relative h-10.5 w-32.5 shrink-0">
          <Image
            src="/img/logo.png"
            alt="InoQua Consultoría Alimentaria"
            fill
            sizes="130px"
            className="object-contain object-left"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-10 lg:flex">
          <NavDropdown label="Servicios" items={serviciosLinks} pathname={pathname} />
          <NavDropdown label="Tipo de negocio" items={negocioLinks} pathname={pathname} />
          <Link href="/nosotros" className={navLinkClass("/nosotros")}>
            Nosotros
          </Link>
          <Link href="/contacto" className={navLinkClass("/contacto")}>
            Contacto
          </Link>
        </nav>

        <div className="hidden lg:block">
          <Button
            label="Evaluar mi caso"
            href="/contacto"
            variant="outline"
            className="!border-azul !bg-azul !text-white hover:!bg-white hover:!text-azul"
          />
        </div>

        {/* Botón hamburguesa mobile/tablet */}
        <button
          className="flex flex-col gap-1.5 lg:hidden"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Abrir menú"
          aria-expanded={mobileOpen}
        >
          <span className={`h-0.5 w-7 bg-azul transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-7 bg-azul transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-7 bg-azul transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Menú mobile/tablet — Servicios y Tipo de negocio se despliegan igual que en desktop */}
      <div
        className={`overflow-y-auto bg-white transition-[max-height] duration-300 lg:hidden ${
          mobileOpen ? "max-h-[80vh]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-5 px-6 pb-6">
          <MobileNavDropdown
            label="Servicios"
            items={serviciosLinks}
            pathname={pathname}
            onNavigate={() => setMobileOpen(false)}
          />
          <MobileNavDropdown
            label="Tipo de negocio"
            items={negocioLinks}
            pathname={pathname}
            onNavigate={() => setMobileOpen(false)}
          />
          <Link href="/nosotros" className={navLinkClass("/nosotros", "mobile")}>
            Nosotros
          </Link>
          <Link href="/contacto" className={navLinkClass("/contacto", "mobile")}>
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
}
