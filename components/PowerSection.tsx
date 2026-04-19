import {
  Lightning,
  Clock,
  ShieldCheck,
  GitPullRequest,
  WhatsappLogo,
  TelegramLogo,
  Check,
  User,
  CircleNotch,
  Sparkle,
} from "@phosphor-icons/react/dist/ssr";

// Custom concept pills for each feature (unique micro-illustrations)

function PillSpeed() {
  return (
    <div className="relative">
      <div className="concept-pill bg-gradient-to-r from-white to-aurora-butter/40">
        <div className="w-4 h-4 rounded-full bg-gradient-to-br from-aurora-peach to-aurora-coral flex items-center justify-center">
          <Lightning weight="fill" size={9} className="text-white" />
        </div>
        <span className="text-ink-subtle">Entregue em 2h</span>
      </div>
    </div>
  );
}

function PillSenior() {
  return (
    <div className="concept-pill bg-gradient-to-r from-white to-aurora-lavender/30">
      <div className="w-4 h-4 rounded-full bg-gradient-to-br from-accent to-indigo-600 flex items-center justify-center">
        <User weight="fill" size={8} className="text-white" />
      </div>
      <span className="text-ink-subtle">Validado por Almir C.</span>
      <Check weight="bold" size={11} className="text-wa" />
    </div>
  );
}

function PillNoInfra() {
  return (
    <div className="concept-pill bg-gradient-to-r from-white to-aurora-mint/30">
      <div className="w-4 h-4 rounded-full border border-black/10 bg-white flex items-center justify-center">
        <Sparkle weight="fill" size={8} className="text-wa" />
      </div>
      <span className="text-ink-subtle">Sem setup, sem configuração</span>
    </div>
  );
}

function PillIntegrations() {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-full bg-white shadow-pill flex items-center justify-center">
        <WhatsappLogo weight="fill" size={16} className="text-wa" />
      </div>
      <div className="w-8 h-8 rounded-full bg-white shadow-pill flex items-center justify-center">
        <TelegramLogo weight="fill" size={16} className="text-[#2AABEE]" />
      </div>
      <div className="w-8 h-8 rounded-full bg-white shadow-pill flex items-center justify-center text-[11px] font-bold text-ink-subtle">
        GH
      </div>
      <div className="w-8 h-8 rounded-full bg-white shadow-pill flex items-center justify-center text-[10px] font-bold text-ink-subtle">
        ...
      </div>
    </div>
  );
}

function PillSecure() {
  return (
    <div className="concept-pill bg-gradient-to-r from-white to-aurora-seafoam/40">
      <ShieldCheck weight="fill" size={12} className="text-wa" />
      <span className="text-ink-subtle">Sandbox isolado</span>
    </div>
  );
}

function PillSLA() {
  return (
    <div className="relative inline-flex items-center gap-3">
      <div className="concept-pill bg-white">
        <div className="w-2 h-2 rounded-full bg-wa animate-pulse" />
        <span className="text-ink-subtle font-mono tracking-tight">SLA 04:00:00</span>
      </div>
      <CircleNotch size={14} className="text-accent-400 animate-spin-slow" />
    </div>
  );
}

type Feature = {
  pill: React.ReactNode;
  title: string;
  desc: string;
};

const FEATURES: Feature[] = [
  {
    pill: <PillSpeed />,
    title: "Execução autônoma real",
    desc: "Super agentes leem o repositório, quebram o problema, implementam a solução e preparam o PR em minutos. Não é atendimento automático; é execução técnica de ponta a ponta.",
  },
  {
    pill: <PillSenior />,
    title: "Validação de engenheiro sênior",
    desc: "Antes de qualquer entrega sair, um engenheiro sênior da CruzTech revisa arquitetura, segurança, edge cases e aderência ao seu padrão de código.",
  },
  {
    pill: <PillNoInfra />,
    title: "Operação sem atrito",
    desc: "Você não precisa montar squad, contratar freela ou abrir ticket em ferramenta nova. Manda a demanda por mensagem e recebe execução, contexto e próximo passo.",
  },
  {
    pill: <PillIntegrations />,
    title: "No fluxo que você já usa",
    desc: "WhatsApp, Telegram, GitHub, Slack e e-mail. Os super agentes entram no seu fluxo atual sem forçar novo processo, nova rotina ou nova ferramenta de gestão.",
  },
  {
    pill: <PillSecure />,
    title: "Governança por padrão",
    desc: "Sandbox isolado por cliente, permissões mínimas no repo, zero retention nos modelos e revisão humana antes do merge. Autonomia com controle desde o início.",
  },
  {
    pill: <PillSLA />,
    title: "SLA com accountability",
    desc: "4 horas no plano Pro, 24h no Growth, 48h no Essencial. A IA acelera a execução, e o time sênior da CruzTech responde pela entrega.",
  },
];

export function PowerSection() {
  return (
    <section className="relative py-28 bg-canvas">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <div className="text-[13px] font-medium text-ink-muted mb-4">
            O poder do Squad.io
          </div>
          <h2 className="text-h2 text-black max-w-[780px] text-balance">
            Não é chatbot. É operação autônoma,{" "}
            <span className="font-display italic text-ink-subtle">com supervisão sênior.</span>
          </h2>
        </div>

        {/* Grid with soft dividers */}
        <div className="relative">
          <div className="mobile-scroll-fade left md:hidden" aria-hidden />
          <div className="mobile-scroll-fade right md:hidden" aria-hidden />
          <div className="grid grid-flow-col auto-cols-[minmax(260px,82vw)] grid-rows-2 gap-x-5 gap-y-10 overflow-x-auto pb-4 snap-scroll md:grid-flow-row md:auto-cols-auto md:grid-cols-2 md:grid-rows-none md:overflow-visible lg:grid-cols-3 md:gap-y-14 md:gap-x-12">
            {FEATURES.map((feat) => (
              <div key={feat.title} className="relative min-w-0">
                {/* Top hair divider (always visible on each card) */}
                <div className="hair-divider mb-8" />

                {/* Pill concept illustration */}
                <div className="h-12 flex items-center mb-8">{feat.pill}</div>

                {/* Title */}
                <h3 className="text-[20px] font-semibold text-black leading-tight mb-3 tracking-tight">
                  {feat.title}
                </h3>

                {/* Description */}
                <p className="text-[14.5px] text-ink-muted leading-[1.65]">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
