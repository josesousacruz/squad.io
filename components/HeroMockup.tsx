import {
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
  Code,
  ShieldCheck,
  Sparkle,
} from "@phosphor-icons/react/dist/ssr";

export function HeroMockup() {
  return (
    <div className="relative">
      {/* Soft glow under the mockup */}
      <div className="absolute -inset-x-10 -bottom-10 -top-6 bg-gradient-to-b from-transparent via-white/30 to-white/50 blur-3xl pointer-events-none" aria-hidden />

      <div className="relative rounded-[28px] overflow-hidden bg-white border border-black/5 shadow-[0_40px_120px_rgba(139,92,246,0.20),0_10px_30px_rgba(0,0,0,0.06)]">
        {/* Top chrome */}
        <div className="h-11 bg-canvas-soft border-b border-black/5 flex items-center px-4 justify-between">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
          </div>
          <div className="text-[12px] text-ink-faint font-mono flex items-center gap-1.5">
            <div className="w-1 h-1 rounded-full bg-wa" />
            squad.io/workspace
          </div>
          <div className="w-14" />
        </div>

        <div className="grid grid-cols-12 h-[560px]">
          {/* Left: tarefas sidebar */}
          <aside className="col-span-3 bg-canvas border-r border-black/5 p-4 hidden md:block">
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-semibold text-ink-muted uppercase tracking-wider">
                Tarefas
              </span>
              <span className="text-[10px] font-medium text-ink-muted bg-black/[0.04] rounded-full px-2 py-0.5">
                4 ativas
              </span>
            </div>
            <div className="space-y-1">
              {[
                { icon: "bug", title: "Bug checkout #847", sub: "PR aprovado", active: true, tint: "bg-red-50 text-red-500" },
                { icon: "feat", title: "Feature: cupom", sub: "Em dev", tint: "bg-aurora-lavender/50 text-accent-700" },
                { icon: "sec", title: "Audit seguranca", sub: "2 findings", tint: "bg-wa/10 text-wa-700" },
                { icon: "deploy", title: "Deploy staging", sub: "OK", tint: "bg-aurora-sky/50 text-blue-600" },
              ].map((t) => (
                <div
                  key={t.title}
                  className={`relative flex items-center gap-2.5 p-2.5 rounded-xl ${
                    t.active ? "bg-white shadow-soft" : "hover:bg-black/[0.02]"
                  } transition-colors`}
                >
                  {t.active && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-wa rounded-r-full" />
                  )}
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${t.tint}`}>
                    {t.icon === "bug" && <Warning weight="fill" size={12} />}
                    {t.icon === "feat" && <Sparkle weight="fill" size={12} />}
                    {t.icon === "sec" && <ShieldCheck weight="fill" size={12} />}
                    {t.icon === "deploy" && <GitBranch weight="fill" size={12} />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[12px] font-medium text-black truncate">{t.title}</div>
                    <div className="text-[11px] text-ink-faint truncate">{t.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </aside>

          {/* Center: WhatsApp chat */}
          <div className="col-span-12 md:col-span-6 bg-[#e5ddd5] bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22 viewBox=%220 0 100 100%22><circle cx=%2250%22 cy=%2250%22 r=%221%22 fill=%22%23a0968c%22 opacity=%220.15%22/></svg>')] bg-repeat flex flex-col">
            {/* WhatsApp chat header */}
            <div className="h-14 bg-[#f0f2f5] border-b border-black/5 flex items-center gap-3 px-4">
              <div className="w-9 h-9 rounded-full bg-wa flex items-center justify-center">
                <WhatsappLogo weight="fill" size={18} className="text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[13px] font-semibold text-black">Squad.io &middot; CruzTech</div>
                <div className="text-[11px] text-ink-muted flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-wa animate-pulse" />
                  engenheiro senior online
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {/* User message com print */}
              <div className="flex flex-col items-end gap-1">
                <div className="max-w-[80%] bg-[#d9fdd3] text-ink-subtle rounded-2xl rounded-tr-sm overflow-hidden shadow-sm">
                  <div className="p-2">
                    <div className="rounded-lg bg-gradient-to-br from-red-500/30 to-orange-400/25 border border-red-400/30 h-[80px] relative flex items-center justify-center">
                      <Warning weight="fill" size={22} className="text-red-500/90" />
                      <div className="absolute bottom-1.5 left-2 right-2 text-[9px] font-mono text-red-900/80 text-left truncate">
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

              {/* Thought trace */}
              <div className="flex flex-col items-start gap-1 max-w-[85%]">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl rounded-tl-sm px-3 py-2 text-[11px] text-ink-muted flex items-center gap-1.5 shadow-sm">
                  <ArrowsClockwise weight="bold" size={10} className="animate-spin-slow text-accent" />
                  Analisando stack trace em producao...
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl rounded-tl-sm px-3 py-2 text-[11px] text-ink-subtle flex items-center gap-1.5 shadow-sm">
                  <Code size={10} className="text-accent" />
                  Identificado: <code className="bg-black/5 px-1 rounded text-[10px]">cart.items</code> vazio em{" "}
                  <code className="bg-black/5 px-1 rounded text-[10px]">getTotalPrice()</code>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl rounded-tl-sm px-3 py-2 text-[11px] text-wa-700 flex items-center gap-1.5 shadow-sm">
                  <User weight="fill" size={10} />
                  Revisado por <strong>Almir Cruz</strong> (senior)
                </div>
              </div>

              {/* Final agent msg */}
              <div className="flex flex-col items-start gap-1">
                <div className="max-w-[85%] bg-white rounded-2xl rounded-tl-sm shadow-sm overflow-hidden">
                  <div className="px-3 pt-2.5">
                    <div className="flex items-center gap-1.5 text-[10px] font-semibold text-wa-700 mb-1.5">
                      <GitBranch size={10} /> PR #847 pronto
                    </div>
                  </div>
                  <div className="px-3 pb-1 text-[13px] text-ink-subtle leading-snug">
                    Bug em <code className="bg-black/5 px-1 rounded text-[11px]">checkout/total.ts</code>. Fix + teste.
                    Deploy staging OK.
                    <br />
                    <br />
                    Posso subir pra producao?
                  </div>
                  <div className="flex gap-1.5 px-3 pb-2.5">
                    <button className="bg-wa hover:bg-wa-600 text-white text-[11px] font-medium px-2.5 py-1.5 rounded-lg flex items-center gap-1 transition-colors">
                      <Check weight="bold" size={10} /> Deploy
                    </button>
                    <button className="bg-black/5 hover:bg-black/10 text-ink-subtle text-[11px] font-medium px-2.5 py-1.5 rounded-lg transition-colors">
                      Ver diff
                    </button>
                  </div>
                  <div className="px-3 pb-1.5 text-[10px] text-black/40">14:27</div>
                </div>
              </div>
            </div>

            {/* Input */}
            <div className="p-2 bg-[#f0f2f5]">
              <div className="bg-white rounded-full flex items-center px-3 py-2 gap-2 border border-black/5">
                <Plus size={16} className="text-ink-faint" />
                <Microphone size={16} className="text-ink-faint" />
                <div className="text-[12px] text-ink-faint flex-1">Digite uma mensagem...</div>
                <div className="w-7 h-7 rounded-full bg-wa flex items-center justify-center">
                  <PaperPlaneRight weight="fill" size={12} className="text-white" />
                </div>
              </div>
            </div>
          </div>

          {/* Right: PR details */}
          <aside className="col-span-3 bg-canvas border-l border-black/5 hidden lg:flex flex-col">
            <div className="p-4 border-b border-black/5 flex items-center justify-between">
              <span className="text-[11px] font-semibold text-ink-muted uppercase tracking-wider">
                PR #847
              </span>
              <span className="text-[10px] font-semibold text-wa bg-wa/10 border border-wa/20 rounded-full px-2 py-0.5">
                Aprovado
              </span>
            </div>

            {/* Senior reviewer card */}
            <div className="p-4 border-b border-black/5">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-aurora-lavender to-accent flex items-center justify-center">
                  <User weight="fill" size={15} className="text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[12px] font-semibold text-black">Almir Cruz</div>
                  <div className="text-[10px] text-ink-faint">Eng. senior &middot; 12 anos</div>
                </div>
                <CheckCircle weight="fill" size={18} className="text-wa" />
              </div>
              <div className="text-[11px] text-ink-muted leading-snug">
                Reviewer aprovou o fix e validou cobertura de testes.
              </div>
            </div>

            {/* Diff */}
            <div className="flex-1 p-4 font-mono text-[11px] overflow-auto">
              <div className="flex items-center gap-1.5 text-[10px] text-ink-faint mb-2">
                <Code size={10} />
                checkout/total.ts
              </div>
              <div className="space-y-0.5">
                <div className="flex gap-2 text-ink-faint">
                  <span className="w-4 text-right tabular-nums">12</span>
                  <span>const items = cart.items;</span>
                </div>
                <div className="flex gap-2 bg-red-50 -mx-1 px-1 rounded text-red-700">
                  <span className="w-4 text-right tabular-nums text-red-400">13</span>
                  <span>
                    <span className="text-red-500">-</span> return items.reduce(...);
                  </span>
                </div>
                <div className="flex gap-2 bg-wa/10 -mx-1 px-1 rounded text-wa-900">
                  <span className="w-4 text-right tabular-nums text-wa/60">13</span>
                  <span>
                    <span className="text-wa">+</span> if (!items?.length)
                  </span>
                </div>
                <div className="flex gap-2 bg-wa/10 -mx-1 px-1 rounded text-wa-900">
                  <span className="w-4 text-right tabular-nums text-wa/60">14</span>
                  <span>
                    <span className="text-wa">+</span> &nbsp;&nbsp;return 0;
                  </span>
                </div>
                <div className="flex gap-2 bg-wa/10 -mx-1 px-1 rounded text-wa-900">
                  <span className="w-4 text-right tabular-nums text-wa/60">15</span>
                  <span>
                    <span className="text-wa">+</span> return items.reduce(...);
                  </span>
                </div>
              </div>

              <div className="mt-4 p-2.5 rounded-lg bg-wa/5 border border-wa/20">
                <div className="text-[10px] font-semibold text-wa-700 mb-1 flex items-center gap-1">
                  <CheckCircle weight="fill" size={10} /> Testes passaram
                </div>
                <div className="text-[10px] text-wa-700/80">14/14 &middot; cov +2.3% &middot; 1.8s</div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
