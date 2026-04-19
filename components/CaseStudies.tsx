import {
  Clock,
  CurrencyCircleDollar,
  CheckCircle,
  ArrowRight,
  Storefront,
  Package,
  CreditCard,
} from "@phosphor-icons/react/dist/ssr";

const CASES = [
  {
    swatch: "swatch-peach",
    company: "Loja Verde",
    industry: "E-commerce de orgânicos",
    icon: Storefront,
    problem: "Checkout derrubando 1 em cada 3 pedidos no Safari iOS.",
    solution: "Bug de compatibilidade Safari corrigido + testes cross-browser.",
    stat: { time: "2h20", saved: "R$ 6.500" },
    reviewer: "Almir Cruz",
  },
  {
    swatch: "swatch-sky",
    company: "Fretella",
    industry: "Startup de logística",
    icon: Package,
    problem: "Integração com API dos Correios caindo em 40% dos casos.",
    solution: "Retry com backoff + cache + dashboard de status em tempo real.",
    stat: { time: "1 dia", saved: "R$ 14.000" },
    reviewer: "Rafael Tavares",
  },
  {
    swatch: "swatch-butter",
    company: "PayKey",
    industry: "Fintech B2B",
    icon: CreditCard,
    problem: "Relatório mensal de conciliação levava 8h manual com erros.",
    solution: "Automação completa em Node + export PDF/CSV com auditoria.",
    stat: { time: "3 dias", saved: "40h/mês" },
    reviewer: "Juliana Moraes",
  },
];

export function CaseStudies() {
  return (
    <section id="cases" className="py-28 bg-canvas">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="mb-14">
          <div className="text-[13px] font-medium text-ink-muted mb-4">Cases reais</div>
          <h2 className="text-h2 text-black max-w-[760px] text-balance">
            O que a gente já entregou{" "}
            <span className="font-display italic text-ink-subtle">este trimestre.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CASES.map((c) => {
            const Icon = c.icon;
            return (
              <article
                key={c.company}
                className="group relative flex flex-col"
              >
                {/* Watercolor header card */}
                <div
                  className={`${c.swatch} relative rounded-[24px] h-[180px] overflow-hidden mb-6 transition-transform duration-500 group-hover:scale-[1.02]`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-black/5" />

                  {/* Company pill */}
                  <div className="absolute top-5 left-5 concept-pill bg-white/90">
                    <div className="w-4 h-4 rounded-md bg-black/5 flex items-center justify-center">
                      <Icon weight="fill" size={9} className="text-ink-subtle" />
                    </div>
                    <span className="text-ink-subtle font-semibold">{c.company}</span>
                  </div>

                  {/* Center big stat */}
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <div className="bg-black rounded-2xl p-4 shadow-float">
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <div className="flex items-center gap-1 text-[9px] font-medium uppercase tracking-wider text-white/50 mb-1">
                            <Clock size={9} /> Tempo
                          </div>
                          <div className="text-[22px] font-semibold text-white leading-none tracking-tight">
                            {c.stat.time}
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center gap-1 text-[9px] font-medium uppercase tracking-wider text-white/50 mb-1">
                            <CurrencyCircleDollar size={9} /> Economia
                          </div>
                          <div className="text-[22px] font-semibold text-wa leading-none tracking-tight">
                            {c.stat.saved}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Text body */}
                <div className="flex flex-col flex-1">
                  <div className="text-[11px] font-medium text-ink-muted uppercase tracking-wider mb-3">
                    {c.industry}
                  </div>
                  <p className="text-[15px] text-black font-medium leading-snug mb-3">
                    {c.problem}
                  </p>
                  <p className="text-[14px] text-ink-muted leading-relaxed mb-5">{c.solution}</p>

                  <div className="mt-auto pt-4 border-t border-black/5 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[12px] text-ink-muted">
                      <CheckCircle weight="fill" size={12} className="text-wa" />
                      Revisado por <span className="text-black font-medium">{c.reviewer}</span>
                    </div>
                    <a
                      href="#"
                      className="inline-flex items-center gap-1 text-[12px] font-medium text-ink-subtle hover:text-accent-600 transition-colors"
                    >
                      Ver case <ArrowRight size={11} />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
