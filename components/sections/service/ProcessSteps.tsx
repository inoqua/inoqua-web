import Reveal from "@/components/ui/Reveal";

type Step = { number: number; title: string; text: string };

type ProcessStepsProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  steps: Step[];
  closingText?: string;
  subTitleMaxWidth?: string;
};

const LG_COLS_BY_STEP_COUNT: Record<number, string> = {
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
  5: "lg:grid-cols-5",
};

function StepCard({ step, index, total, smCols }: { step: Step; index: number; total: number; smCols: number }) {
  const isLast = index === total - 1;
  // Debajo de lg el grid envuelve en filas: solo mostramos flecha si el siguiente paso cae en la misma fila.
  const showArrowMobile = !isLast && index % 2 !== 1;
  const showArrowTablet = !isLast && index % smCols !== smCols - 1;

  return (
    <div className="relative flex flex-col items-center text-center">
      <div className="flex h-[273px] w-full flex-col items-center rounded-card p-6">
        <div className="flex h-[63px] w-[63px] shrink-0 items-center justify-center rounded-full bg-naranja text-[28px] font-extrabold text-white">
          {step.number}
        </div>
        <h3 className="mt-5 min-h-13 text-card-titulo text-white">{step.title}</h3>
        <p className="mt-3 min-h-13 text-card-txt text-white/90">{step.text}</p>
      </div>

      {!isLast && (
        <svg
          className={`absolute -right-8 top-13.75 h-4 w-15 -translate-y-1/2 ${showArrowMobile ? "block" : "hidden"} ${
            showArrowTablet ? "sm:block" : "sm:hidden"
          } lg:block`}
          viewBox="0 0 60 16"
          fill="none"
        >
          <path
            d="M0 8h56M50 2l6 6-6 6"
            stroke="#9CA3AF"
            strokeWidth="2"
            strokeDasharray="4 4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </div>
  );
}

/**
 * Franja de pasos numerados sobre fondo azul oscuro con flechas conectoras.
 * Soporta cualquier cantidad de pasos (a diferencia de HowWeWork de Home, que es fijo a 4).
 */
export default function ProcessSteps({ eyebrow, title, subtitle, steps,subTitleMaxWidth, closingText }: ProcessStepsProps) {
  // A partir de 5 pasos, en tablet se muestran de a 3 columnas en vez de 2.
  const smCols = steps.length === 5 ? 3 : 2;

  return (
    <section className="bg-azul py-17">
      <div className="mx-auto max-w-content px-6 sm:px-10 lg:px-20">
        <Reveal className="text-center">
          <span className="text-[13px] font-normal tracking-[1.2px] text-naranja">{eyebrow}</span>
          <h2 className="mt-2 text-titulo-xxl text-white">{title}</h2>
          <p className="mt-3 text-subtitulo-xxl text-white" style={{ maxWidth: subTitleMaxWidth }}>
            {subtitle}
          </p>
        </Reveal>

        <div
          className={`mt-16 grid grid-cols-2 gap-2 ${smCols === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"} lg:gap-6 ${
            LG_COLS_BY_STEP_COUNT[steps.length] ?? "lg:grid-cols-5"
          }`}
        >
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 100}>
              <StepCard step={step} index={i} total={steps.length} smCols={smCols} />
            </Reveal>
          ))}
        </div>

        {closingText && (
          <Reveal delay={300}>
            <p className="mx-auto mt-2 max-w-4xl text-center text-parrafo-20 text-naranja">
              {closingText}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
