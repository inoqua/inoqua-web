"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

type ContactFormProps = {
  title: string;
  subtitle: string;
  submitLabel: string;
};

const situaciones = ["Idea de negocio", "En proceso", "Funcionando"];

const tiposNegocio = [
  "Locales gastronómicos con cocina",
  "Emprendimientos sin elaboración",
  "Supermercado o Autoservicio",
  "Comercio minorista",
  "Depósito, logística o importación",
  "Fábrica, industria o catering",
  "Plazas de comidas o cocinas comunitarias",
  "Ferias o eventos gastronómicos",
  "Alimentos para animales",
  "Otros",
];

// Solo estas dos categorías habilitan un segundo desplegable con subrubros.
// El resto se envía únicamente con la categoría principal.
const subtiposPorNegocio: Record<string, string[]> = {
  "Locales gastronómicos con cocina": [
    "Panadería",
    "Rotisería",
    "Restaurante",
    "Confitería",
    "Fábrica de pastas",
    "Pizzería",
    "Salón de fiesta",
    "Comida al paso/ minutas",
    "Fiambrería",
    "Cantina con elaboración",
    "Pescadería",
    "Parrillada",
    "Salón de té",
    "Heladería",
    "Elaboración de sandwiches",
    "Venta de fiambres",
    "Otros",
  ],
  "Emprendimientos sin elaboración": ["Kiosco", "Almacén", "Venta de productos envasados", "Frutería/verdulería", "Otros"],
};

const subtipoPlaceholderPorNegocio: Record<string, string> = {
  "Locales gastronómicos con cocina": "Selecciona tu local gastronómico",
  "Emprendimientos sin elaboración": "Selecciona tu tipo de emprendimiento",
};

type DropdownProps = {
  value: string;
  placeholder: string;
  options: string[];
  onChange: (value: string) => void;
  error?: boolean;
};

function Dropdown({ value, placeholder, options, onChange, error }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className={`flex w-full items-center justify-between rounded-xl border-2 bg-white px-4 py-3 text-left text-[16px] outline-none transition-colors ${
          error ? "border-red-500 focus:border-red-500" : "border-azul focus:border-naranja"
        }`}
      >
        <span className={value ? "text-azul" : "text-[#6e6e6e]"}>{value || placeholder}</span>
        <ChevronDown className={`h-5 w-5 shrink-0 text-azul transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute z-10 mt-2 max-h-72 w-full overflow-y-auto rounded-xl border-2 border-azul bg-white py-2 shadow-lg"
        >
          {options.map((option) => (
            <li key={option} role="option" aria-selected={option === value}>
              <button
                type="button"
                onClick={() => {
                  onChange(option);
                  setOpen(false);
                }}
                className={`block w-full px-4 py-2 text-left text-[16px] transition-colors hover:bg-azul/[0.06] ${
                  option === value ? "font-semibold text-azul" : "text-texto"
                }`}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/**
 * Formulario de "Solicitá la evaluación técnica de tu negocio". Es un componente
 * de cliente (maneja estado de los inputs) exclusivo de la landing de Contacto.
 *
 * El envío se hace vía Netlify Forms: se postea a "/" con el body codificado como
 * el resto del sitio (SPA-style), ya que Netlify intercepta cualquier POST que
 * incluya el campo "form-name". El formulario estático equivalente para que
 * Netlify lo detecte en build está en public/forms/contacto.html.
 */
function encodeForm(data: Record<string, string>) {
  return new URLSearchParams(data).toString();
}

export default function ContactForm({ title, subtitle, submitLabel }: ContactFormProps) {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    correo: "",
    negocio: "",
    subNegocio: "",
    situacion: situaciones[0],
    comentarios: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [errors, setErrors] = useState<{
    nombre?: string;
    telefono?: string;
    correo?: string;
    negocio?: string;
    subNegocio?: string;
    comentarios?: string;
  }>({});

  const inputClass =
    "w-full rounded-xl border-2 border-azul bg-white px-4 py-3 text-[16px] text-azul placeholder:text-[#6e6e6e] outline-none transition-colors focus:border-naranja";
  const errorInputClass = "border-red-500 focus:border-red-500";

  const validate = () => {
    const nextErrors: typeof errors = {};

    if (form.nombre.trim().split(/\s+/).filter(Boolean).length < 2) {
      nextErrors.nombre = "Por favor indicanos tu nombre y apellido.";
    }

    if (!/^09\d{7}$/.test(form.telefono.replace(/\D/g, ""))) {
      nextErrors.telefono = "Por favor indicá un teléfono celular de 9 dígitos.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.correo.trim())) {
      nextErrors.correo = "Por favor indicá un email con @ y .com.";
    }

    if (!form.negocio) {
      nextErrors.negocio = "Por favor seleccioná el tipo de negocio.";
    } else if (subtiposPorNegocio[form.negocio] && !form.subNegocio) {
      nextErrors.subNegocio = "Por favor seleccioná una opción.";
    }

    if (!form.comentarios.trim()) {
      nextErrors.comentarios = "Por favor contanos cómo podemos ayudarte.";
    }

    return nextErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSending(true);
    setSubmitError(false);
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeForm({ "form-name": "contacto", ...form }),
      });
      setSubmitted(true);
    } catch {
      setSubmitError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="mx-auto max-w-content px-6 py-17 sm:px-10 lg:px-20">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="text-titulo-xxl text-azul">{title}</h2>
        <p className="mt-3 text-subtitulo-xxl mx-auto max-w-xl text-texto">{subtitle}</p>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-2">
        <Reveal>
          {submitted ? (
            <div className="flex h-full flex-col items-center justify-center rounded-panel bg-azul/[0.06] p-10 text-center">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#FF8D28" strokeWidth="2" className="mb-4">
                <circle cx="12" cy="12" r="10" />
                <path d="M8 12.5l2.5 2.5L16 9" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h3 className="text-card-titulo text-azul">¡Gracias por escribirnos!</h3>
              <p className="mt-2 text-parrafo-20 text-texto">
                Recibimos tu consulta y te vamos a contactar a la brevedad.
              </p>
            </div>
          ) : (
            <form
              name="contacto"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              noValidate
              className="flex flex-col gap-5"
            >
              <input type="hidden" name="form-name" value="contacto" />
              <p className="hidden">
                <label>
                  No completar este campo: <input name="bot-field" tabIndex={-1} autoComplete="off" />
                </label>
              </p>

              <div>
                <label className="mb-1.5 block text-[18px] font-medium text-azul">Nombre *</label>
                <input
                  type="text"
                  name="nombre"
                  placeholder="Tu nombre y apellido"
                  className={`${inputClass} ${errors.nombre ? errorInputClass : ""}`}
                  value={form.nombre}
                  onChange={(e) => {
                    setForm({ ...form, nombre: e.target.value });
                    if (errors.nombre) setErrors({ ...errors, nombre: undefined });
                  }}
                />
                {errors.nombre && <p className="mt-1.5 text-[14px] text-red-600">{errors.nombre}</p>}
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-[18px] font-medium text-azul">Teléfono *</label>
                  <input
                    type="tel"
                    name="telefono"
                    placeholder="Teléfono de contacto"
                    className={`${inputClass} ${errors.telefono ? errorInputClass : ""}`}
                    value={form.telefono}
                    onChange={(e) => {
                      setForm({ ...form, telefono: e.target.value });
                      if (errors.telefono) setErrors({ ...errors, telefono: undefined });
                    }}
                  />
                  {errors.telefono && <p className="mt-1.5 text-[14px] text-red-600">{errors.telefono}</p>}
                </div>
                <div>
                  <label className="mb-1.5 block text-[18px] font-medium text-azul">Correo electrónico *</label>
                  <input
                    type="text"
                    name="correo"
                    placeholder="Correo electrónico"
                    className={`${inputClass} ${errors.correo ? errorInputClass : ""}`}
                    value={form.correo}
                    onChange={(e) => {
                      setForm({ ...form, correo: e.target.value });
                      if (errors.correo) setErrors({ ...errors, correo: undefined });
                    }}
                  />
                  {errors.correo && <p className="mt-1.5 text-[14px] text-red-600">{errors.correo}</p>}
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-[18px] font-medium text-azul">¿Qué tipo de negocio tenés? *</label>
                <Dropdown
                  placeholder="Selecciona la categoría de tu negocio"
                  options={tiposNegocio}
                  value={form.negocio}
                  error={!!errors.negocio}
                  onChange={(value) => {
                    setForm({ ...form, negocio: value, subNegocio: "" });
                    if (errors.negocio || errors.subNegocio) setErrors({ ...errors, negocio: undefined, subNegocio: undefined });
                  }}
                />
                <input type="hidden" name="negocio" value={form.negocio} />
                {errors.negocio && <p className="mt-1.5 text-[14px] text-red-600">{errors.negocio}</p>}
              </div>

              {subtiposPorNegocio[form.negocio] && (
                <div>
                  <Dropdown
                    placeholder={subtipoPlaceholderPorNegocio[form.negocio]}
                    options={subtiposPorNegocio[form.negocio]}
                    value={form.subNegocio}
                    error={!!errors.subNegocio}
                    onChange={(value) => {
                      setForm({ ...form, subNegocio: value });
                      if (errors.subNegocio) setErrors({ ...errors, subNegocio: undefined });
                    }}
                  />
                  <input type="hidden" name="subNegocio" value={form.subNegocio} />
                  {errors.subNegocio && <p className="mt-1.5 text-[14px] text-red-600">{errors.subNegocio}</p>}
                </div>
              )}

              <div>
                <label className="mb-2 block text-[18px] font-medium text-azul">
                  ¿En qué situación está tu negocio? *
                </label>
                <div className="flex flex-wrap gap-5">
                  {situaciones.map((s) => (
                    <label key={s} className="flex cursor-pointer items-center gap-2 text-[16px] text-texto">
                      <input
                        type="radio"
                        name="situacion"
                        value={s}
                        checked={form.situacion === s}
                        onChange={() => setForm({ ...form, situacion: s })}
                        className="h-4 w-4 accent-naranja"
                      />
                      {s}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-[18px] font-medium text-azul">¿Cómo podemos ayudarte? *</label>
                <textarea
                  rows={4}
                  name="comentarios"
                  placeholder="Contanos tus ideas"
                  className={`${inputClass} resize-none ${errors.comentarios ? errorInputClass : ""}`}
                  value={form.comentarios}
                  onChange={(e) => {
                    setForm({ ...form, comentarios: e.target.value });
                    if (errors.comentarios) setErrors({ ...errors, comentarios: undefined });
                  }}
                />
                {errors.comentarios && <p className="mt-1.5 text-[14px] text-red-600">{errors.comentarios}</p>}
              </div>

              {submitError && (
                <p className="text-[14px] text-red-600">
                  No pudimos enviar tu consulta. Por favor, intentá nuevamente o escribinos a{" "}
                  <a href="mailto:info@inoqua.com.uy" className="underline">
                    info@inoqua.com.uy
                  </a>
                  .
                </p>
              )}

              <button
                type="submit"
                disabled={sending}
                className="mt-2 inline-flex w-fit items-center justify-center rounded-[10px] bg-naranja px-7 py-[8px] text-[18px] font-semibold text-azul transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#e67d1e] hover:shadow-lg active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {sending ? "Enviando…" : submitLabel}
              </button>
            </form>
          )}
        </Reveal>

        <Reveal delay={150} className="relative mx-auto h-[620px] w-full max-w-[552px] overflow-hidden rounded-panel">
          <Image src="/img/certificaciones-servicios.png" alt={title} fill sizes="(max-width: 1024px) 90vw, 552px" className="object-cover" />
        </Reveal>
      </div>
    </section>
  );
}
