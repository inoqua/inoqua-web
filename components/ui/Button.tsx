"use client";

import Link from "next/link";
import { event } from "@/lib/analytics/gtag";

export type ButtonVariant = "solid" | "outline" | "whatsapp" | "dark";

type ButtonProps = {
  label: string;
  href: string;
  variant?: ButtonVariant;
  className?: string;
};

const variantClasses: Record<ButtonVariant, string> = {
  // atomo/boton "solicitar" — fondo naranja
  solid: "bg-naranja text-azul hover:bg-[#e67d1e] hover:shadow-lg hover:-translate-y-0.5",
  // atomo/boton "hablar" — borde azul, transparente
  outline:
    "bg-transparent border-2 border-azul text-azul hover:bg-azul hover:text-white hover:-translate-y-0.5",
  // variante para WhatsApp
  whatsapp:
    "bg-[#25D366] text-white hover:bg-[#1ebe57] hover:shadow-lg hover:-translate-y-0.5",
  // fondo azul sólido, texto blanco (ej: "Nuestros servicios")
  dark: "bg-azul text-white hover:bg-[#243252] hover:shadow-lg hover:-translate-y-0.5",
};

/**
 * Botón reutilizable de todo el sitio. Usalo así:
 * <Button label="Evaluar mi caso" href="/contacto" variant="solid" />
 */
export default function Button({ label, href, variant = "solid", className = "" }: ButtonProps) {
  const isExternal = href.startsWith("http");

  const classes = `inline-flex items-center justify-center whitespace-nowrap rounded-[10px] px-5 py-[7px] font-semibold text-[15px] leading-[22px] transition-all duration-200 ease-out active:scale-95 ${variantClasses[variant]} ${className}`;

  const handleClick = () => event({ action: "click", category: "cta", label });

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} onClick={handleClick}>
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} onClick={handleClick}>
      {label}
    </Link>
  );
}
