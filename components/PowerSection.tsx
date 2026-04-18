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
      <span className="text-ink-subtle">Revisado por Almir C.</span>
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
      <span className="text-ink-subtle">Sem setup, sem config</span>
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
    title: "Velocidade de IA",
    desc: "O agente le todo o repositorio, identifica a causa, corrige e abre PR em minutos. O que levava dias agora acontece enquanto voce toma um cafe.",
  },
  {
    pill: <PillSenior />,
    title: "Revisao de engenheiro senior",
    desc: "Cada linha de codigo passa pelos olhos de um engenheiro CruzTech com +8 anos de experiencia. O nome dele assina a entrega.",
  },
  {
    pill: <PillNoInfra />,
    title: "Zero infraestrutura",
    desc: "Nao instale nada, nao configure nada. Mande a tarefa por mensagem e receba o resultado. Sem painel complicado, sem curva de aprendizado.",
  },
  {
    pill: <PillIntegrations />,
    title: "Onde voce ja esta",
    desc: "WhatsApp, Telegram, GitHub, Slack, e-mail. O Squad.io conecta com as ferramentas que voce ja usa, sem voce precisar trocar de contexto.",
  },
  {
    pill: <PillSecure />,
    title: "Seguro por padrao",
    desc: "Sandbox isolado por cliente, permissoes minimas no repo, zero retention nos modelos de IA. LGPD e NDA padrao CruzTech em todos os planos.",
  },
  {
    pill: <PillSLA />,
    title: "SLA garantido",
    desc: "4 horas no plano Pro, 24h no Growth, 48h no Essencial. Se a gente nao cumprir, voce nao paga o mes. Tao simples quanto.",
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
            Nao e chatbot. E um time de verdade,{" "}
            <span className="font-display italic text-ink-subtle">com IA por tras.</span>
          </h2>
        </div>

        {/* Grid with soft dividers */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-14 gap-x-12">
            {FEATURES.map((feat, idx) => (
              <div key={feat.title} className="relative">
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
