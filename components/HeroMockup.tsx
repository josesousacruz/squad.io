import {
  WhatsappLogo,
  Checks,
  CheckCircle,
  Plus,
  PaperPlaneRight,
  Warning,
  User,
  Check,
  Microphone,
  Code,
  ShieldCheck,
  Sparkle,
  ChatCircleText,
  Brain,
  Clock,
  Folder,
  Gear,
  TelegramLogo,
  ChatsCircle,
  SidebarSimple,
} from "@phosphor-icons/react/dist/ssr";

const NAV_ITEMS = [
  { icon: ChatCircleText, label: "Chat", active: true },
  { icon: Brain, label: "Cérebro" },
  { icon: Clock, label: "Tarefas" },
  { icon: Folder, label: "Arquivos" },
  { icon: Gear, label: "Configurações" },
];

const CHANNELS = [
  { icon: WhatsappLogo, label: "Continuar no WhatsApp" },
  { icon: TelegramLogo, label: "Continuar no Telegram" },
  { icon: ChatsCircle, label: "Continuar no iMessage" },
];

export function HeroMockup() {
  return (
    <div className="relative">
      <div
        className="absolute -inset-x-12 -bottom-12 -top-8 bg-gradient-to-b from-transparent via-white/35 to-white/55 blur-3xl pointer-events-none"
        aria-hidden
      />

      <div className="relative overflow-hidden rounded-[30px] border border-black/5 bg-[#faf8f4] shadow-[0_40px_120px_rgba(20,20,20,0.08),0_12px_32px_rgba(20,20,20,0.06)]">
        <div className="grid min-h-[470px] grid-cols-1 md:grid-cols-[280px_minmax(0,1fr)] lg:min-h-[590px]">
          <aside className="hidden border-r border-black/5 bg-white md:flex md:flex-col">
            <div className="flex items-start justify-between px-5 py-6">
              <div className="flex items-start gap-3">
                <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-accent via-aurora-lavender to-aurora-peach shadow-[0_10px_24px_rgba(0,0,0,0.10)]">
                  <div className="absolute inset-[5px] rounded-full bg-black flex items-center justify-center">
                    <Sparkle weight="fill" size={16} className="text-white" />
                  </div>
                </div>
                <div>
                  <div className="text-[14px] font-semibold text-[#273142]">Squad.io</div>
                  <div className="text-[12px] text-[#98a3b4]">Jose&apos;s Workspace</div>
                </div>
              </div>
              <button className="flex h-8 w-8 items-center justify-center rounded-lg text-[#8b97a8] transition-colors hover:bg-black/[0.03]">
                <SidebarSimple size={16} />
              </button>
            </div>

            <div className="px-3">
              {NAV_ITEMS.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className={`mb-1.5 flex items-center justify-between rounded-[14px] px-4 py-3 text-[14px] ${
                      item.active
                        ? "bg-[#eef2fa] text-[#1f2937]"
                        : "text-[#495569] hover:bg-black/[0.025]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={18} weight={item.active ? "fill" : "regular"} />
                      <span className={item.active ? "font-medium" : ""}>{item.label}</span>
                    </div>
                    {!item.active && <span className="text-[#6f7c90]">&rsaquo;</span>}
                  </div>
                );
              })}
            </div>

            <div className="px-5 pt-6">
              <div className="mb-4 text-[13px] font-medium text-[#8f9cb0]">Canais</div>
              <div className="space-y-1.5">
                {CHANNELS.map((channel) => {
                  const Icon = channel.icon;
                  return (
                    <div
                      key={channel.label}
                      className="flex items-center gap-3 rounded-[14px] px-3 py-2.5 text-[14px] text-[#495569] hover:bg-black/[0.025]"
                    >
                      <Icon size={18} />
                      {channel.label}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-auto px-5 py-5">
              <div className="flex items-center gap-3 rounded-[14px] px-3 py-2.5 text-[14px] text-[#495569] hover:bg-black/[0.025]">
                <ChatsCircle size={18} />
                Deixar feedback
              </div>
            </div>
          </aside>

          <div className="relative flex flex-col bg-[#fbfaf7]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.9),transparent_55%)]" />

            <div className="relative flex-1 px-6 py-6 pb-36 md:px-12 md:py-10 md:pb-40 lg:px-16 lg:py-12 lg:pb-44">
              <div className="mx-auto flex max-w-[940px] items-center gap-6 text-[13px] font-medium text-[#8f9cb0]">
                <div className="h-px flex-1 bg-black/[0.05]" />
                <span>Hoje</span>
                <div className="h-px flex-1 bg-black/[0.05]" />
              </div>

              <div className="mx-auto mt-10 max-w-[940px]">
                <div className="space-y-3">
                  <div className="flex justify-end">
                    <div className="max-w-[82%] rounded-[22px] rounded-tr-[8px] bg-[#d9fdd3] text-[#334155] shadow-[0_4px_14px_rgba(0,0,0,0.04)]">
                      <div className="p-2">
                        <div className="relative flex h-[80px] items-center justify-center rounded-[14px] border border-red-400/30 bg-gradient-to-br from-red-500/30 to-orange-400/20">
                          <Warning weight="fill" size={22} className="text-red-500/90" />
                          <div className="absolute bottom-1.5 left-2 right-2 truncate text-left font-mono text-[9px] text-red-900/80">
                            TypeError: Cannot read &apos;total&apos; of undefined
                          </div>
                        </div>
                      </div>
                      <div className="px-3 pb-2 pt-1 text-[13px] leading-snug">
                        Gente, checkout dando erro!! Clientes reclamando
                      </div>
                      <div className="flex items-center justify-end gap-1 px-3 pb-1.5 text-[10px] text-black/45">
                        14:22 <Checks weight="bold" size={11} className="text-[#53bdeb]" />
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-start">
                    <div className="max-w-[85%] space-y-1.5">
                      <div className="rounded-[20px] rounded-tl-[8px] bg-white px-3 py-2 text-[11px] text-[#6b7280] shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
                        Analisando stack trace em produção...
                      </div>
                      <div className="flex items-center gap-1.5 rounded-[20px] rounded-tl-[8px] bg-white px-3 py-2 text-[11px] text-[#475569] shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
                        <Code size={10} className="text-accent" />
                        Identificado: <code className="rounded bg-black/5 px-1 text-[10px]">cart.items</code> vazio em{" "}
                        <code className="rounded bg-black/5 px-1 text-[10px]">getTotalPrice()</code>
                      </div>
                      <div className="flex items-center gap-1.5 rounded-[20px] rounded-tl-[8px] bg-white px-3 py-2 text-[11px] text-wa-700 shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
                        <User weight="fill" size={10} />
                        Validado por <strong>Almir Cruz</strong> (sênior)
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-start">
                    <div className="max-w-[85%] overflow-hidden rounded-[22px] rounded-tl-[8px] bg-white shadow-[0_6px_18px_rgba(0,0,0,0.05)]">
                      <div className="px-3 pt-2.5">
                        <div className="mb-1.5 flex items-center gap-1.5 text-[10px] font-semibold text-wa-700">
                          <CheckCircle weight="fill" size={10} />
                          PR #847 pronto
                        </div>
                      </div>
                      <div className="px-3 pb-1 text-[13px] leading-snug text-[#475569]">
                        Bug em <code className="rounded bg-black/5 px-1 text-[11px]">checkout/total.ts</code>. Fix + teste.
                        Deploy staging OK.
                        <br />
                        <br />
                        Posso subir para produção?
                      </div>
                      <div className="flex gap-1.5 px-3 pb-2.5">
                        <button className="flex items-center gap-1 rounded-lg bg-wa px-2.5 py-1.5 text-[11px] font-medium text-white transition-colors hover:bg-wa-600">
                          <Check weight="bold" size={10} /> Deploy
                        </button>
                        <button className="rounded-lg bg-black/5 px-2.5 py-1.5 text-[11px] font-medium text-[#5b6575] transition-colors hover:bg-black/10">
                          Ver diff
                        </button>
                      </div>
                      <div className="px-3 pb-1.5 text-[10px] text-black/40">14:27</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#fbfaf7] via-[#fbfaf7]/80 to-transparent" />

            <div className="absolute bottom-6 left-1/2 z-10 w-[calc(100%-2rem)] max-w-[760px] -translate-x-1/2 md:bottom-8">
              <div className="flex items-center gap-3 rounded-[22px] border border-[#d8def3] bg-white px-5 py-4 shadow-[0_14px_32px_rgba(60,72,88,0.10)]">
                <Plus size={18} className="text-[#4b5563]" />
                <div className="min-w-0 flex-1 text-[15px] text-[#b0b8c7]">Digite uma mensagem...</div>
                <Microphone size={18} className="text-[#a0acbe]" />
                <button className="flex h-9 w-9 items-center justify-center rounded-full bg-[#b8bcc6] text-white">
                  <PaperPlaneRight weight="fill" size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
