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
    company: "Loja Verde",
    industry: "E-commerce de organicos",
    icon: Storefront,
    problem: "Checkout derrubando 1 em cada 3 pedidos no Safari iOS.",
    solution: "Bug de compatibilidade Safari corrigido + testes de navegador adicionados.",
    stat: { time: "2h20", saved: "R$ 6.500" },
    reviewer: "Almir Cruz (senior)",
  },
  {
    company: "Fretella",
    industry: "Startup de logistica",
    icon: Package,
    problem: "Integracao com API dos Correios nao carregava rastreio em 40% dos casos.",
    solution: "Retry com backoff exponencial + cache de respostas + dashboard de status.",
    stat: { time: "1 dia", saved: "R$ 14.000" },
    reviewer: "Rafael Tavares (senior)",
  },
  {
    company: "PayKey",
    industry: "Fintech B2B",
    icon: CreditCard,
    problem: "Relatorio mensal de conciliacao levava 8h manual, bugando planilha.",
    solution: "Automacao completa em Node + exportacao PDF/CSV com auditoria.",
    stat: { time: "3 dias", saved: "40h/mes" },
    reviewer: "Juliana M. (senior)",
  },
];

export function CaseStudies() {
  return (
    <section className="max-w-[1240px] mx-auto px-6 py-24 relative z-10">
      <div className="text-center max-w-[700px] mx-auto mb-16">
        <div className="inline-block text-[13px] font-semibold tracking-widest text-accent-600 uppercase mb-3">
          Cases reais
        </div>
        <h2 className="text-h2 text-black text-balance">
          Resultados que ja entregamos
        </h2>
        <p className="text-body text-ink-muted mt-5 max-w-[560px] mx-auto">
          Problemas reais, clientes reais, entregues com revisao de engenheiro senior.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {CASES.map((c) => {
          const Icon = c.icon;
          return (
            <article
              key={c.company}
              className="group relative bg-white border border-gray-100 rounded-[24px] p-7 hover:border-accent/30 hover:shadow-[0_20px_50px_rgba(139,92,246,0.08)] transition-all flex flex-col"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-11 h-11 rounded-xl bg-accent-50 text-accent-600 flex items-center justify-center">
                  <Icon weight="duotone" size={22} />
                </div>
                <div>
                  <div className="text-[15px] font-semibold text-black">{c.company}</div>
                  <div className="text-[12px] text-gray-500">{c.industry}</div>
                </div>
              </div>

              <div className="mb-4">
                <div className="text-[11px] font-semibold tracking-widest text-red-500 uppercase mb-1.5">
                  Problema
                </div>
                <p className="text-[14px] text-black leading-relaxed">{c.problem}</p>
              </div>

              <div className="mb-6">
                <div className="text-[11px] font-semibold tracking-widest text-wa uppercase mb-1.5">
                  Entregamos
                </div>
                <p className="text-[14px] text-ink-muted leading-relaxed">{c.solution}</p>
              </div>

              {/* Stat destaque */}
              <div className="mt-auto bg-black rounded-2xl p-5 text-white">
                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <div className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider text-gray-400 mb-1">
                      <Clock size={11} /> Entregue em
                    </div>
                    <div className="text-[22px] font-semibold leading-none">{c.stat.time}</div>
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider text-gray-400 mb-1">
                      <CurrencyCircleDollar size={11} /> Economia
                    </div>
                    <div className="text-[22px] font-semibold leading-none text-wa">
                      {c.stat.saved}
                    </div>
                  </div>
                </div>
                <div className="pt-3 border-t border-white/10 flex items-center gap-2 text-[11px] text-gray-300">
                  <CheckCircle weight="fill" size={12} className="text-wa" />
                  Revisado por <span className="text-white font-medium">{c.reviewer}</span>
                </div>
              </div>

              <a
                href="#"
                className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-medium text-accent-600 hover:text-accent-700 transition-colors"
              >
                Ver case completo
                <ArrowRight size={12} />
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}
