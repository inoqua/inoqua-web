import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";

type PricingPlan = {
  name: string;
  subtitle: string;
  items: string[];
  note?: string;
  highlighted?: boolean;
};

type PricingCardsProps = {
  title: string;
  subtitle: string;
  plans: PricingPlan[];
};

function TickIcon({ light = false }: { light?: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={`mt-1 shrink-0 ${light ? "text-white" : "text-naranja"}`}>
      <circle cx="8" cy="8" r="8" fill="currentColor" opacity="0.15" />
      <path d="M5 8.2l1.8 1.8L11 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Grilla de planes/precios con tarjeta destacada (RECOMENDADO). Exclusivo de Planes de trabajo. */
export default function PricingCards({ title, subtitle, plans }: PricingCardsProps) {
  return (
    <section className="mx-auto max-w-content px-6 py-16 sm:px-10 lg:px-20">
      <Reveal className="text-center">
        <h2 className="mt-2 text-titulo-xxl text-azul">{title}</h2>
        <p className="mt-3 text-subtitulo-xxl text-texto mx-auto max-w-xl">{subtitle}</p>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {plans.map((plan, i) => (
          <Reveal key={plan.name} delay={i * 100}>
            <div
              className={`relative flex h-full flex-col rounded-panel border-2 p-6 ${
                plan.highlighted ? "border-naranja bg-azul/90 text-white" : "border-azul bg-white text-texto"
              } ${plan.highlighted ? "lg:-translate-y-4" : ""}`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-naranja px-4 py-1 text-[12px] font-medium text-azul">
                  RECOMENDADO
                </span>
              )}
              <h3 className={`text-[20px] font-semibold ${plan.highlighted ? "text-white" : "text-azul"}`}>{plan.name}</h3>
              <p
                className={`mt-2 text-[15px] leading-5.5 ${
                  plan.highlighted ? "text-white/90" : "min-h-16.5 text-texto"
                }`}
              >
                {plan.subtitle}
              </p>

              <ul className="mt-5 flex flex-1 flex-col gap-3">
                {plan.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <TickIcon light={plan.highlighted} />
                    <span className={`text-[15px] leading-[22px] ${plan.highlighted ? "text-white" : "text-texto"}`}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {plan.note && (
                <p className={`mt-4 min-h-19.5 border-t pt-3 text-[15px] leading-5.5 ${plan.highlighted ? "border-white/20 text-white/90" : "border-azul/10 text-texto"}`}>
                  {plan.note}
                </p>
              )}

              <div className="mt-6">
                <Button
                  label="Consultar plan"
                  href="/contacto"
                  variant={plan.highlighted ? "solid" : "dark"}
                  className="w-full"
                />
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
