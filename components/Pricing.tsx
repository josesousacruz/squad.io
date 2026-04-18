import {
  Check,
  Star,
  WhatsappLogo,
  ShieldCheck,
} from "@phosphor-icons/react/dist/ssr";

type Plan = {
  name: string;
  price: string;
  period: string;
  tagline: string;
  features: string[];
  cta: string;
  highlight?: boolean;
  badge?: string;
};

const PLANS: Plan[] = [
  {
    name: "Essencial",
    price: "497",
    period: "/mes",
    tagline: "Pra quem so precisa manter o site vivo",
    features: [
      "Ate 10 tarefas pequenas por mes",
      "Bug fix, ajustes, configuracoes",
      "SLA de 48h uteis",
      "Revisao por engenheiro senior",
      "Canal WhatsApp dedicado",
      "Cancelamento a qualquer momento",
    ],
    cta: "Comecar no WhatsApp",
  },
  {
    name: "Growth",
    price: "1.497",
    period: "/mes",
    tagline: "Pra quem quer evoluir o produto sem contratar CLT",
    features: [
      "Ate 30 tarefas por mes",
      "Features medias inclusas",
      "Deploy e DevOps incluidos",
      "SLA de 24h uteis",
      "Revisao por engenheiro senior",
      "Reuniao mensal de roadmap",
      "Analise de seguranca trimestral",
    ],
    cta: "Comecar no WhatsApp",
    highlight: true,
    badge: "Mais popular",
  },
  {
    name: "Pro",
    price: "2.997",
    period: "/mes",
    tagline: "Pra operacoes que nao podem parar",
    features: [
      "Volume alto de tarefas",
      "SLA de 4h uteis",
      "Engenheiro senior dedicado",
      "Analise de seguranca mensal",
      "On-call para urgencias",
      "Relatorio executivo mensal",
      "Onboarding com arquiteto",
    ],
    cta: "Falar com time comercial",
  },
];

export function Pricing() {
  return (
    <section id="precos" className="max-w-[1240px] mx-auto px-6 py-24 relative z-10">
      <div className="text-center max-w-[700px] mx-auto mb-16">
        <div className="inline-block text-[13px] font-semibold tracking-widest text-accent-600 uppercase mb-3">
          Precos
        </div>
        <h2 className="text-h2 text-black text-balance">
          Planos simples, sem surpresa
        </h2>
        <p className="text-body text-ink-muted mt-5 max-w-[560px] mx-auto">
          Todos os planos incluem revisao humana por engenheiro senior e cancelamento quando voce quiser.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
        {PLANS.map((plan) => {
          const isHighlight = plan.highlight;
          return (
            <div
              key={plan.name}
              className={`relative rounded-[28px] p-8 flex flex-col ${
                isHighlight
                  ? "bg-ink text-white border-2 border-accent shadow-[0_30px_60px_rgba(139,92,246,0.25)] lg:-translate-y-4"
                  : "bg-white text-black border border-gray-100 shadow-soft"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 bg-accent text-white text-[12px] font-semibold px-3.5 py-1.5 rounded-full shadow-lg">
                  <Star weight="fill" size={12} />
                  {plan.badge}
                </div>
              )}

              <div className="mb-6">
                <div className={`text-[14px] font-semibold ${isHighlight ? "text-accent-400" : "text-accent-600"}`}>
                  {plan.name}
                </div>
                <p
                  className={`text-[13px] mt-1 leading-snug ${
                    isHighlight ? "text-gray-400" : "text-ink-muted"
                  }`}
                >
                  {plan.tagline}
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className={`text-[18px] font-medium ${isHighlight ? "text-gray-400" : "text-ink-muted"}`}>
                    R$
                  </span>
                  <span className="text-[56px] font-semibold tracking-tight leading-none tabular-nums">
                    {plan.price}
                  </span>
                  <span className={`text-[16px] ${isHighlight ? "text-gray-400" : "text-ink-muted"}`}>
                    {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-10 flex-1">
                {plan.features.map((f) => {
                  const isSeniorReview = f.toLowerCase().includes("engenheiro senior");
                  return (
                    <li key={f} className="flex items-start gap-3 text-[14px] leading-snug">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          isHighlight ? "bg-wa/20 text-wa" : "bg-wa/10 text-wa-700"
                        }`}
                      >
                        {isSeniorReview ? (
                          <ShieldCheck weight="fill" size={12} />
                        ) : (
                          <Check weight="bold" size={12} />
                        )}
                      </div>
                      <span
                        className={
                          isSeniorReview
                            ? isHighlight
                              ? "text-white font-medium"
                              : "text-black font-medium"
                            : isHighlight
                            ? "text-gray-300"
                            : "text-ink-muted"
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
                className={
                  isHighlight
                    ? "btn-wa w-full"
                    : "inline-flex items-center justify-center gap-2 w-full rounded-full bg-black text-white px-6 py-3.5 text-[15px] font-semibold hover:opacity-85 transition-opacity"
                }
              >
                <WhatsappLogo weight="fill" size={18} />
                {plan.cta}
              </a>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-10 text-[14px] text-ink-muted">
        Precisa de volume custom ou projeto fechado?{" "}
        <a href="#" className="text-accent-600 hover:text-accent-700 font-medium">
          Falar com o time &rarr;
        </a>
      </div>
    </section>
  );
}
