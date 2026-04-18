import {
  WhatsappLogo,
  Robot,
  UserCheck,
  ArrowRight,
} from "@phosphor-icons/react/dist/ssr";

const STEPS = [
  {
    num: "01",
    icon: WhatsappLogo,
    title: "Manda no WhatsApp",
    desc: "Envie texto, print, audio ou video descrevendo o que precisa. Sem abrir ticket, sem esperar reuniao.",
    accent: "bg-wa/10 text-wa border-wa/20",
  },
  {
    num: "02",
    icon: Robot,
    title: "IA executa, engenheiro senior revisa",
    desc: "Agente de IA codifica, testa e abre PR. Um engenheiro senior da CruzTech revisa cada linha antes de te entregar.",
    accent: "bg-accent-50 text-accent-600 border-accent-200",
    highlight: true,
  },
  {
    num: "03",
    icon: UserCheck,
    title: "Voce aprova, a gente faz o deploy",
    desc: "Voce recebe um resumo em linguagem simples. Aprova? A gente sobe pra producao e monitora.",
    accent: "bg-black/5 text-black border-black/10",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="relative w-full overflow-hidden">
      <div className="absolute inset-0 section-blob -z-10" aria-hidden />
      <div className="max-w-[1240px] mx-auto px-6 py-24 relative z-10">
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <div className="inline-block text-[13px] font-semibold tracking-widest text-accent-600 uppercase mb-3">
            Como funciona
          </div>
          <h2 className="text-h2 text-black text-balance">
            Do problema ao deploy em 3 passos
          </h2>
          <p className="text-body text-ink-muted mt-5 max-w-[560px] mx-auto">
            Tudo no WhatsApp, sem painel complicado, sem aprender ferramenta nova.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={step.num} className="relative">
                <div
                  className={`relative bg-white rounded-2xl p-8 border ${
                    step.highlight
                      ? "border-accent/30 shadow-[0_20px_50px_rgba(139,92,246,0.15)]"
                      : "border-gray-100 shadow-soft"
                  } h-full`}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl border ${step.accent} flex items-center justify-center`}>
                      <Icon weight="duotone" size={28} />
                    </div>
                    <div className="text-[48px] font-semibold text-black/10 leading-none tracking-tight">
                      {step.num}
                    </div>
                  </div>
                  <h3 className="text-[22px] font-semibold text-black mb-3 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-[15px] text-ink-muted leading-relaxed">{step.desc}</p>

                  {step.highlight && (
                    <div className="mt-5 inline-flex items-center gap-1.5 text-[12px] font-semibold text-accent-700 bg-accent-50 rounded-full px-3 py-1.5">
                      <UserCheck weight="fill" size={12} />
                      Revisao humana obrigatoria
                    </div>
                  )}
                </div>

                {idx < STEPS.length - 1 && (
                  <div
                    className="hidden md:flex absolute top-1/2 -right-3 -translate-y-1/2 w-6 h-6 rounded-full bg-white border border-gray-200 items-center justify-center z-10 shadow-sm"
                    aria-hidden
                  >
                    <ArrowRight size={12} className="text-ink-muted" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
