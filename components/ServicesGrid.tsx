import {
  Bug,
  Sparkle,
  PlugsConnected,
  Rocket,
  ShieldCheck,
  ArrowsClockwise,
  Clock,
} from "@phosphor-icons/react/dist/ssr";

const SERVICES = [
  {
    icon: Bug,
    title: "Bug fix & hotfix",
    example: "Checkout quebrado, erro 500, layout bugado em mobile.",
    sla: "~2h",
    color: "text-red-500 bg-red-50",
  },
  {
    icon: Sparkle,
    title: "Novas features",
    example: "Adicionar cupom de desconto, filtro de busca, pagina nova.",
    sla: "1-3 dias",
    color: "text-accent-600 bg-accent-50",
  },
  {
    icon: PlugsConnected,
    title: "Integracoes & APIs",
    example: "Stripe, Pagar.me, WhatsApp Business, Mailchimp, webhooks.",
    sla: "1-2 dias",
    color: "text-blue-500 bg-blue-50",
  },
  {
    icon: Rocket,
    title: "Deploy & DevOps",
    example: "Publicar em producao, configurar CI/CD, migrar servidor.",
    sla: "~4h",
    color: "text-orange-500 bg-orange-50",
  },
  {
    icon: ShieldCheck,
    title: "Analise de seguranca",
    example: "Auditoria de vulnerabilidades, LGPD, hardening.",
    sla: "1 dia",
    color: "text-green-600 bg-green-50",
  },
  {
    icon: ArrowsClockwise,
    title: "Refactor & migracao",
    example: "Migrar versao de framework, limpar debito tecnico.",
    sla: "Sob escopo",
    color: "text-indigo-500 bg-indigo-50",
  },
];

export function ServicesGrid() {
  return (
    <section className="max-w-[1240px] mx-auto px-6 py-24 relative z-10">
      <div className="text-center max-w-[700px] mx-auto mb-16">
        <div className="inline-block text-[13px] font-semibold tracking-widest text-accent-600 uppercase mb-3">
          O que resolvemos
        </div>
        <h2 className="text-h2 text-black text-balance">
          Seu time tecnico completo, sem CLT
        </h2>
        <p className="text-body text-ink-muted mt-5 max-w-[560px] mx-auto">
          Qualquer demanda tecnica que voce teria com um dev interno, a gente resolve.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {SERVICES.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.title}
              className="group bg-white border border-gray-100 rounded-2xl p-7 hover:border-gray-200 hover:shadow-soft hover:-translate-y-0.5 transition-all"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${s.color}`}>
                <Icon weight="duotone" size={24} />
              </div>
              <h3 className="text-[18px] font-semibold text-black mb-2">{s.title}</h3>
              <p className="text-[14px] text-ink-muted leading-relaxed mb-5">
                <span className="text-gray-400">Ex:</span> {s.example}
              </p>
              <div className="flex items-center gap-1.5 text-[12px] font-semibold text-wa bg-wa-50 rounded-full px-3 py-1.5 w-fit">
                <Clock weight="fill" size={12} />
                Entrega em {s.sla}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
