import {
  Warning,
  CurrencyDollar,
  ShieldWarning,
  PlugsConnected,
} from "@phosphor-icons/react/dist/ssr";

const PAINS = [
  {
    icon: Warning,
    title: "Checkout quebrado",
    desc: "Seu site parou de vender e o freelancer so responde amanha. Cada hora sem fix = cliente perdido.",
    tag: "Receita em risco",
  },
  {
    icon: CurrencyDollar,
    title: "Agencia cobrou R$ 8.000",
    desc: "Voce pediu uma feature simples de 2 dias e a agencia enviou proposta fechada de semanas.",
    tag: "Custo inflado",
  },
  {
    icon: ShieldWarning,
    title: "Vulnerabilidade invisivel",
    desc: "Seu banco de dados pode estar exposto agora e ninguem do seu time tem tempo de auditar.",
    tag: "Risco de seguranca",
  },
  {
    icon: PlugsConnected,
    title: "Integracao travada",
    desc: "Precisa ligar gateway de pagamento, WhatsApp, ou API do parceiro e nao sabe por onde comecar.",
    tag: "Projeto parado",
  },
];

export function PainSection() {
  return (
    <section className="max-w-[1240px] mx-auto px-6 py-24 relative z-10">
      <div className="text-center max-w-[700px] mx-auto mb-16">
        <div className="inline-block text-[13px] font-semibold tracking-widest text-red-500 uppercase mb-3">
          O problema
        </div>
        <h2 className="text-h2 text-black text-balance">
          Reconhece esses momentos?
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {PAINS.map((p) => {
          const Icon = p.icon;
          return (
            <div
              key={p.title}
              className="group relative bg-white border border-gray-100 rounded-2xl p-7 hover:border-gray-200 hover:shadow-soft transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-red-50 text-red-500 flex items-center justify-center mb-5 group-hover:bg-red-100 transition-colors">
                <Icon weight="duotone" size={24} />
              </div>
              <h3 className="text-[18px] font-semibold text-black mb-2">{p.title}</h3>
              <p className="text-[14px] text-ink-muted leading-relaxed mb-4">{p.desc}</p>
              <div className="text-[11px] font-semibold tracking-wide text-red-600 uppercase bg-red-50 rounded-full px-2.5 py-1 inline-block">
                {p.tag}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
