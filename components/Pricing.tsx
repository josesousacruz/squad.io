import { Check, ShieldCheck, Sparkle } from "@phosphor-icons/react/dist/ssr";

type Plan = {
  name: string;
  price: string;
  tagline: string;
  features: string[];
  cta: string;
  highlight?: boolean;
  badge?: string;
  swatch?: string;
};

const PLANS: Plan[] = [
  {
    name: "Essencial",
    price: "497",
    tagline: "Pra quem so precisa manter o site vivo.",
    features: [
      "Ate 10 tarefas pequenas / mes",
      "Bug fix, ajustes, configuracoes",
      "SLA de 48h uteis",
      "Revisao por engenheiro senior",
      "Canal WhatsApp dedicado",
      "Cancelamento a qualquer momento",
    ],
    cta: "Comecar agora",
  },
  {
    name: "Growth",
    price: "1.497",
    tagline: "Pra evoluir o produto sem contratar CLT.",
    features: [
      "Ate 30 tarefas / mes",
      "Features medias inclusas",
      "Deploy e DevOps inclusos",
      "SLA de 24h uteis",
      "Revisao por engenheiro senior",
      "Reuniao mensal de roadmap",
      "Analise trimestral de seguranca",
    ],
    cta: "Comecar no WhatsApp",
    highlight: true,
    badge: "Mais popular",
    swatch: "swatch-lavender",
  },
  {
    name: "Pro",
    price: "2.997",
    tagline: "Pra operacoes que nao podem parar.",
    features: [
      "Volume alto de tarefas",
      "SLA de 4h uteis",
      "Engenheiro senior dedicado",
      "Analise mensal de seguranca",
      "On-call para urgencias",
      "Relatorio executivo mensal",
      "Onboarding com arquiteto",
    ],
    cta: "Falar com time comercial",
  },
];

export function Pricing() {
  return (
    <section id="precos" className="py-28 bg-canvas">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="mb-14 text-center max-w-[720px] mx-auto">
          <div className="text-[13px] font-medium text-ink-muted mb-4">Precos</div>
          <h2 className="text-h2 text-black text-balance mb-5">
            Planos simples,{" "}
            <span className="font-display italic text-ink-subtle">sem surpresa.</span>
          </h2>
          <p className="text-[16px] text-ink-muted">
            Todos os planos incluem revisao humana por engenheiro senior e cancelamento quando voce
            quiser.
          </p>
        </div>

        <div className="relative">
          <div className="mobile-scroll-fade left md:hidden" aria-hidden />
          <div className="mobile-scroll-fade right md:hidden" aria-hidden />
          <div className="flex gap-5 overflow-x-auto snap-scroll pb-4 md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-3 md:gap-6 items-stretch">
            {PLANS.map((plan) => {
              const isHighlight = plan.highlight;
              return (
                <div
                  key={plan.name}
                  className={`relative shrink-0 w-[86vw] max-w-[360px] md:w-auto md:max-w-none rounded-[28px] flex flex-col overflow-hidden ${
                    isHighlight
                      ? "lg:-translate-y-4 shadow-float"
                      : "bg-white border border-black/5 shadow-soft"
                  }`}
                >
                  {/* Watercolor base for highlight */}
                  {isHighlight && (
                    <>
                      <div className={`absolute inset-0 ${plan.swatch}`} />
                      <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/40 to-white/70 backdrop-blur-sm" />
                      <div className="absolute inset-[1px] rounded-[27px] bg-white/60 backdrop-blur-xl" />
                    </>
                  )}

                  <div className="relative z-10 p-8 flex flex-col h-full">
                    {plan.badge && (
                      <div className="absolute -top-1 left-1/2 -translate-x-1/2 concept-pill bg-black text-white">
                        <Sparkle weight="fill" size={10} className="text-aurora-butter" />
                        <span className="text-white">{plan.badge}</span>
                      </div>
                    )}

                    <div className="mb-6 mt-2">
                      <div className={`text-[13px] font-semibold ${isHighlight ? "text-accent-700" : "text-accent-600"}`}>
                        {plan.name}
                      </div>
                      <p className="text-[13px] text-ink-muted mt-1.5 leading-snug max-w-[240px]">
                        {plan.tagline}
                      </p>
                    </div>

                    <div className="mb-8">
                      <div className="flex items-baseline gap-1">
                        <span className="text-[16px] font-medium text-ink-muted">R$</span>
                        <span className="text-[56px] font-semibold tracking-tight leading-none tabular-nums text-black">
                          {plan.price}
                        </span>
                        <span className="text-[15px] text-ink-muted">/mes</span>
                      </div>
                    </div>

                    <ul className="space-y-2.5 mb-8 flex-1">
                      {plan.features.map((f) => {
                        const isSeniorReview = f.toLowerCase().includes("engenheiro senior");
                        return (
                          <li key={f} className="flex items-start gap-3 text-[14px] leading-snug">
                            <div
                              className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                                isSeniorReview ? "bg-wa/15" : "bg-black/[0.04]"
                              }`}
                            >
                              {isSeniorReview ? (
                                <ShieldCheck weight="fill" size={11} className="text-wa" />
                              ) : (
                                <Check weight="bold" size={10} className="text-ink-subtle" />
                              )}
                            </div>
                            <span
                              className={
                                isSeniorReview
                                  ? "text-black font-medium"
                                  : "text-ink-subtle"
                              }
                            >
                              {f}
                            </span>
                          </li>
                        );
                      })}
                    </ul>

                    <a
                      href="https://wa.me/5500000000000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-black w-full"
                    >
                      {plan.cta}
                    </a>
                  </div>
                </div>
              );
            })}
            <div className="shrink-0 w-1 md:hidden" aria-hidden />
          </div>
        </div>

        <div className="text-center mt-10 text-[14px] text-ink-muted">
          Precisa de volume custom?{" "}
          <a href="#" className="text-accent-600 hover:text-accent-700 font-medium">
            Falar com o time &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
