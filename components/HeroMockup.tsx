import {
  Lock,
  Bug,
  Code,
  ShieldCheck,
  Lightning,
  WhatsappLogo,
  Checks,
  ArrowsClockwise,
  CheckCircle,
  Plus,
  PaperPlaneRight,
  GitBranch,
  Warning,
  User,
  Check,
  Image as ImageIcon,
  Microphone,
} from "@phosphor-icons/react/dist/ssr";

const THREADS = [
  {
    icon: Bug,
    color: "bg-red-500/20 text-red-400",
    title: "Bug checkout #847",
    subtitle: "PR aprovado, deploy pronto",
    active: true,
  },
  {
    icon: Lightning,
    color: "bg-yellow-500/10 text-yellow-400",
    title: "Feature: cupom",
    subtitle: "Em desenvolvimento",
  },
  {
    icon: ShieldCheck,
    color: "bg-green-500/10 text-green-400",
    title: "Analise de seguranca",
    subtitle: "2 vulnerabilidades OK",
  },
  {
    icon: GitBranch,
    color: "bg-blue-500/10 text-blue-400",
    title: "Deploy staging",
    subtitle: "Pipeline passou",
  },
];

export function HeroMockup() {
  return (
    <div className="w-full mt-20 max-w-[1100px] rounded-[24px] bg-ink shadow-mockup border border-white/10 overflow-hidden text-left h-[640px] flex flex-col">
      {/* Window chrome */}
      <div className="h-12 bg-ink-subtle border-b border-white/5 flex items-center px-4 justify-between shrink-0">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
        </div>
        <div className="text-[13px] text-gray-400 font-mono flex items-center gap-2">
          <Lock size={13} />
          squad.io/workspace
        </div>
        <div className="w-16" />
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar: tarefas */}
        <aside className="w-[260px] bg-ink-subtle border-r border-white/5 flex flex-col">
          <div className="p-4 py-5 flex items-center justify-between">
            <span className="text-[12px] font-medium text-gray-500 uppercase tracking-wider">
              Tarefas
            </span>
            <span className="text-[11px] font-medium text-gray-500 bg-white/5 rounded px-2 py-0.5">
              4 ativas
            </span>
          </div>
          <div className="flex-1 px-2 space-y-1">
            {THREADS.map((t) => {
              const Icon = t.icon;
              return (
                <div
                  key={t.title}
                  className={`flex items-center gap-3 p-3 rounded-xl relative ${
                    t.active ? "bg-white/10 text-white" : "hover:bg-white/5 text-gray-300"
                  }`}
                >
                  {t.active && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-wa rounded-r-full" />
                  )}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${t.color}`}>
                    <Icon size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[14px] font-medium truncate">{t.title}</div>
                    <div className="text-[12px] text-gray-400 truncate">{t.subtitle}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </aside>

        {/* Centro: Chat WhatsApp */}
        <div className="flex-1 flex flex-col bg-ink min-w-0">
          <div className="p-4 border-b border-white/5 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-wa flex items-center justify-center text-white">
              <WhatsappLogo weight="fill" size={20} />
            </div>
            <div className="flex-1">
              <div className="text-[15px] font-medium text-white">Squad.io - CruzTech</div>
              <div className="text-[13px] text-wa flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-wa animate-pulse" />
                Online &middot; engenheiro senior disponivel
              </div>
            </div>
          </div>

          <div className="flex-1 p-6 flex flex-col gap-4 overflow-y-auto">
            {/* User: print do bug */}
            <div className="self-end flex flex-col gap-1 max-w-[80%]">
              <div className="bg-[#005C4B] text-white px-4 py-3 rounded-2xl rounded-tr-sm text-[14px] leading-relaxed">
                <div className="flex items-center gap-2 mb-2 text-[12px] text-green-100/90">
                  <ImageIcon weight="fill" size={14} /> print-checkout.png
                </div>
                <div className="h-24 w-[220px] rounded-lg bg-gradient-to-br from-red-500/30 to-orange-400/20 border border-red-400/40 flex items-center justify-center relative overflow-hidden">
                  <Warning weight="fill" size={28} className="text-red-300" />
                  <div className="absolute bottom-1 left-2 right-2 text-[10px] font-mono text-red-200 text-left truncate">
                    TypeError: Cannot read &apos;total&apos;
                  </div>
                </div>
                <div className="mt-2">Galera, checkout ta dando erro. Clientes reclamando agora!</div>
              </div>
              <div className="text-[11px] text-gray-500 text-right flex items-center justify-end gap-1">
                14:22 <Checks weight="bold" size={12} className="text-wa" />
              </div>
            </div>

            {/* Agent: thought trace */}
            <div className="self-start flex flex-col gap-1.5 max-w-[85%]">
              <div className="flex items-center gap-2 text-[12px] text-gray-400 pl-1">
                <ArrowsClockwise weight="bold" size={12} className="animate-spin-slow" />
                Analisando stack trace em producao...
              </div>
              <div className="flex items-center gap-2 text-[12px] text-accent-400 pl-1 border-l-2 border-accent/40 ml-0.5">
                <Code size={12} />
                Identificado: cart.items[] vazio em getTotalPrice()
              </div>
              <div className="flex items-center gap-2 text-[12px] text-wa pl-1 border-l-2 border-wa/40 ml-0.5">
                <CheckCircle weight="fill" size={12} />
                Revisado por Almir Cruz (eng. senior)
              </div>
            </div>

            {/* Agent: resposta final */}
            <div className="self-start bg-[#1F2C34] border border-white/5 text-white px-4 py-3 rounded-2xl rounded-tl-sm max-w-[85%] text-[14px] leading-relaxed">
              <div className="flex items-center gap-2 mb-2 text-wa text-[12px] font-medium">
                <GitBranch size={13} /> PR #847 pronto
              </div>
              Bug identificado em <code className="bg-white/10 px-1.5 py-0.5 rounded text-[12px]">checkout/total.ts</code>.
              <br />Fix + teste adicionado. Deploy staging OK.
              <br /><br />
              <strong>Aprovado por Almir Cruz (senior).</strong> Posso subir pra producao?
              <div className="mt-3 flex gap-2">
                <button className="bg-wa hover:bg-wa-600 text-white text-[12px] font-medium px-3 py-1.5 rounded-lg flex items-center gap-1">
                  <Check weight="bold" size={12} /> Deploy
                </button>
                <button className="bg-white/10 hover:bg-white/15 text-white text-[12px] font-medium px-3 py-1.5 rounded-lg">
                  Ver diff
                </button>
              </div>
              <div className="text-[11px] text-gray-400 text-right mt-2">14:27</div>
            </div>
          </div>

          <div className="p-3">
            <div className="bg-[#1F2C34] rounded-full flex items-center px-4 py-2.5 gap-3">
              <Plus size={18} className="text-gray-400" />
              <Microphone size={18} className="text-gray-400" />
              <div className="text-[14px] text-white/70 flex-1">Digite uma mensagem...</div>
              <div className="w-8 h-8 rounded-full bg-wa flex items-center justify-center">
                <PaperPlaneRight weight="fill" size={14} className="text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Direita: diff + aprovacao senior */}
        <aside className="w-[340px] bg-ink-subtle border-l border-white/5 hidden lg:flex flex-col">
          <div className="p-5 border-b border-white/5 flex items-center justify-between">
            <div className="text-[12px] font-medium text-gray-400 uppercase tracking-wider">
              PR #847
            </div>
            <span className="text-[11px] font-medium text-wa bg-wa/10 border border-wa/20 rounded-full px-2.5 py-0.5">
              Aprovado
            </span>
          </div>

          {/* Revisor senior */}
          <div className="p-5 border-b border-white/5 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-indigo-600 flex items-center justify-center text-white">
              <User weight="fill" size={18} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[14px] font-medium text-white">Almir Cruz</div>
              <div className="text-[12px] text-gray-400">Eng. senior &middot; 12 anos exp.</div>
            </div>
            <CheckCircle weight="fill" size={22} className="text-wa" />
          </div>

          {/* Diff */}
          <div className="flex-1 p-5 font-mono text-[12px] overflow-auto">
            <div className="text-gray-400 mb-2 flex items-center gap-1.5">
              <Code size={12} />
              checkout/total.ts
            </div>
            <div className="space-y-0.5">
              <div className="text-gray-500">
                <span className="inline-block w-6 text-right pr-2">12</span>
                const items = cart.items;
              </div>
              <div className="bg-red-500/10 text-red-300 rounded">
                <span className="inline-block w-6 text-right pr-2 text-red-400/60">13</span>
                <span className="text-red-400">-</span> return items.reduce(...);
              </div>
              <div className="bg-wa/10 text-green-300 rounded">
                <span className="inline-block w-6 text-right pr-2 text-wa/60">13</span>
                <span className="text-wa">+</span> if (!items?.length) return 0;
              </div>
              <div className="bg-wa/10 text-green-300 rounded">
                <span className="inline-block w-6 text-right pr-2 text-wa/60">14</span>
                <span className="text-wa">+</span> return items.reduce(...);
              </div>
              <div className="text-gray-500">
                <span className="inline-block w-6 text-right pr-2">15</span>
                {"}"}
              </div>
            </div>

            <div className="mt-5 p-3 rounded-lg bg-wa/5 border border-wa/20 text-[12px] text-wa/90">
              <div className="flex items-center gap-1.5 font-medium mb-1">
                <CheckCircle weight="fill" size={12} /> Testes passaram (14/14)
              </div>
              <div className="text-wa/70">Cobertura +2.3% &middot; Build 1.8s</div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
