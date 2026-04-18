import {
  Bug,
  GitBranch,
  PlugsConnected,
  Rocket,
  ShieldCheck,
  ArrowsClockwise,
  WhatsappLogo,
  Warning,
  Check,
  CheckCircle,
  Lightning,
  Terminal,
  Database,
  Clock,
} from "@phosphor-icons/react/dist/ssr";

/* ============================================================
   Mini-mockups - cada caso tem um visual conceitual unico
   estilo Base44: UIs pequenas flutuando sobre swatch colorido
   ============================================================ */

function MiniMockupBug() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Browser frame */}
      <div className="w-[75%] bg-white rounded-2xl shadow-card overflow-hidden rotate-[-3deg] absolute top-6 left-6">
        <div className="h-6 bg-ink-subtle/5 border-b border-black/5 flex items-center gap-1 px-2">
          <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
          <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
          <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
          <div className="ml-auto w-16 h-1.5 bg-black/5 rounded-full" />
        </div>
        <div className="p-3 space-y-1.5">
          <div className="h-2 w-[80%] bg-black/10 rounded" />
          <div className="h-2 w-[60%] bg-black/5 rounded" />
          <div className="mt-3 flex items-center gap-2 p-2 rounded-lg bg-red-50 border border-red-200/60">
            <Warning weight="fill" size={12} className="text-red-500 shrink-0" />
            <div className="h-1.5 flex-1 bg-red-300/50 rounded" />
          </div>
        </div>
      </div>
      {/* Floating PR card */}
      <div className="w-[60%] bg-white rounded-xl shadow-float p-3 absolute bottom-6 right-6 rotate-[4deg] z-10">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-5 h-5 rounded-md bg-wa/10 flex items-center justify-center">
            <GitBranch size={10} className="text-wa-700" />
          </div>
          <span className="text-[10px] font-semibold text-black">PR #847</span>
          <span className="ml-auto text-[9px] font-semibold text-wa bg-wa/10 rounded-full px-1.5 py-0.5">
            Pronto
          </span>
        </div>
        <div className="space-y-1">
          <div className="h-1.5 bg-black/10 rounded w-full" />
          <div className="h-1.5 bg-black/5 rounded w-[70%]" />
        </div>
      </div>
    </div>
  );
}

function MiniMockupFeature() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="w-[70%] bg-white rounded-2xl shadow-card p-4 absolute top-6 rotate-[-2deg]">
        <div className="text-[9px] font-medium text-ink-muted mb-2 flex items-center gap-1">
          <Lightning weight="fill" size={9} className="text-accent" />
          Nova feature: cupom de desconto
        </div>
        <div className="space-y-1.5 font-mono text-[9px]">
          <div className="flex items-start gap-2">
            <span className="text-ink-faint">1</span>
            <span className="text-ink-muted">+ export function applyCoupon(</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-ink-faint">2</span>
            <span className="text-ink-muted">+ &nbsp;&nbsp;code: string, cart: Cart</span>
          </div>
          <div className="flex items-start gap-2 bg-wa/10 -mx-2 px-2 rounded">
            <span className="text-wa/60">3</span>
            <span className="text-wa-700">+ ) &#123; return cart * 0.9 &#125;</span>
          </div>
        </div>
      </div>
      <div className="w-[55%] bg-black rounded-xl shadow-float p-3 absolute bottom-6 right-5 rotate-[5deg] z-10">
        <div className="flex items-center gap-1.5 text-[9px] text-wa font-mono mb-2">
          <Check weight="bold" size={9} />
          14/14 testes ok
        </div>
        <div className="h-1 bg-wa/30 rounded-full overflow-hidden">
          <div className="h-full w-full bg-wa rounded-full" />
        </div>
      </div>
    </div>
  );
}

function MiniMockupIntegration() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Central node */}
      <div className="relative w-12 h-12 rounded-2xl bg-white shadow-float flex items-center justify-center z-10">
        <PlugsConnected weight="duotone" size={22} className="text-accent" />
      </div>
      {/* Connectors animated */}
      <svg className="absolute inset-0 w-full h-full" aria-hidden>
        <line x1="25%" y1="30%" x2="50%" y2="50%" stroke="rgba(0,0,0,0.15)" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="75%" y1="25%" x2="50%" y2="50%" stroke="rgba(0,0,0,0.15)" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="25%" y1="75%" x2="50%" y2="50%" stroke="rgba(0,0,0,0.15)" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="75%" y1="80%" x2="50%" y2="50%" stroke="rgba(0,0,0,0.15)" strokeWidth="1" strokeDasharray="3 3" />
      </svg>
      {/* Surrounding services */}
      <div className="absolute top-[20%] left-[18%] w-9 h-9 rounded-full bg-white shadow-pill flex items-center justify-center text-[10px] font-bold text-[#635BFF]">
        Str
      </div>
      <div className="absolute top-[15%] right-[20%] w-9 h-9 rounded-full bg-white shadow-pill flex items-center justify-center">
        <WhatsappLogo weight="fill" size={16} className="text-wa" />
      </div>
      <div className="absolute bottom-[20%] left-[18%] w-9 h-9 rounded-full bg-white shadow-pill flex items-center justify-center">
        <Database weight="fill" size={16} className="text-ink-subtle" />
      </div>
      <div className="absolute bottom-[22%] right-[18%] w-9 h-9 rounded-full bg-white shadow-pill flex items-center justify-center text-[10px] font-bold text-[#FF6B6B]">
        API
      </div>
    </div>
  );
}

function MiniMockupDeploy() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="w-[80%] bg-black rounded-2xl p-4 font-mono text-[10px] shadow-float rotate-[-2deg]">
        <div className="flex items-center gap-1.5 mb-3 pb-2 border-b border-white/10">
          <Terminal size={11} className="text-white/60" />
          <span className="text-white/60 text-[9px]">deploy.sh</span>
        </div>
        <div className="space-y-1">
          <div className="text-white/50">$ squad deploy production</div>
          <div className="text-wa">&#10003; Build: 32s</div>
          <div className="text-wa">&#10003; Tests: 14 passed</div>
          <div className="text-wa">&#10003; Deploy: ok</div>
          <div className="text-accent-400 flex items-center gap-1">
            <CheckCircle weight="fill" size={10} /> Live in 1m 18s
          </div>
        </div>
      </div>
      <div className="absolute top-3 right-4 w-[40%] bg-white rounded-xl shadow-card p-2.5 rotate-[4deg] z-10">
        <div className="flex items-center gap-1.5 mb-1">
          <div className="w-1.5 h-1.5 rounded-full bg-wa animate-pulse" />
          <span className="text-[9px] font-semibold text-black">Producao</span>
        </div>
        <div className="text-[9px] text-ink-muted">v2.4.1 &middot; OK</div>
      </div>
    </div>
  );
}

function MiniMockupSecurity() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="w-[75%] bg-white rounded-2xl shadow-card p-4 rotate-[-3deg]">
        <div className="flex items-center justify-between mb-3">
          <div className="text-[10px] font-semibold text-black flex items-center gap-1.5">
            <ShieldCheck weight="fill" size={12} className="text-wa" />
            Audit report
          </div>
          <span className="text-[9px] font-semibold text-wa bg-wa/10 rounded-full px-2 py-0.5">
            Aprovado
          </span>
        </div>
        <div className="space-y-2">
          {[
            { label: "SQL Injection", ok: true },
            { label: "XSS & CSRF", ok: true },
            { label: "Auth flow", ok: true },
            { label: "LGPD compliance", ok: true },
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-between text-[10px]">
              <span className="text-ink-muted">{item.label}</span>
              <Check weight="bold" size={10} className="text-wa" />
            </div>
          ))}
        </div>
      </div>
      <div className="absolute -bottom-1 right-6 w-11 h-11 rounded-full bg-gradient-to-br from-wa to-wa-700 shadow-float flex items-center justify-center rotate-[8deg]">
        <ShieldCheck weight="fill" size={22} className="text-white" />
      </div>
    </div>
  );
}

function MiniMockupRefactor() {
  return (
    <div className="relative w-full h-full flex items-center justify-center gap-3">
      <div className="w-[38%] bg-white rounded-xl shadow-card p-2.5 font-mono text-[9px] rotate-[-4deg]">
        <div className="text-[9px] font-semibold text-red-500 mb-1.5 flex items-center gap-1">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-400" /> Antes
        </div>
        <div className="space-y-0.5 text-ink-muted">
          <div className="truncate">function a(x)&#123;</div>
          <div className="truncate">let b=0</div>
          <div className="truncate">for(i=0;i&lt;x;...)</div>
          <div className="truncate">b+=i; return b</div>
          <div className="truncate">&#125;</div>
        </div>
      </div>
      <ArrowsClockwise size={16} className="text-ink-faint" />
      <div className="w-[38%] bg-white rounded-xl shadow-card p-2.5 font-mono text-[9px] rotate-[4deg]">
        <div className="text-[9px] font-semibold text-wa mb-1.5 flex items-center gap-1">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-wa" /> Depois
        </div>
        <div className="space-y-0.5 text-ink-subtle">
          <div className="truncate">const sum = (</div>
          <div className="truncate">&nbsp;&nbsp;n: number</div>
          <div className="truncate">) =&gt; (n*(n+1))/2;</div>
          <div className="truncate text-wa">// O(1)</div>
        </div>
      </div>
    </div>
  );
}

type Case = {
  swatch: string;
  category: string;
  icon: React.ElementType;
  mockup: React.ReactNode;
  title: string;
  desc: string;
  time: string;
};

const CASES: Case[] = [
  {
    swatch: "swatch-coral",
    category: "Bug & hotfix",
    icon: Bug,
    mockup: <MiniMockupBug />,
    title: "Checkout quebrado? A gente acha o bug antes do almoco.",
    desc: "Voce manda o print do erro, o Squad reproduz, identifica a causa e abre o PR com fix e teste.",
    time: "~2h",
  },
  {
    swatch: "swatch-lavender",
    category: "Nova feature",
    icon: Lightning,
    mockup: <MiniMockupFeature />,
    title: "Features inteiras em dias, nao semanas.",
    desc: "Cupons, filtros, paginas novas, integracao com provedores. Escopo fechado, codigo testado, revisado por senior.",
    time: "1-3 dias",
  },
  {
    swatch: "swatch-sky",
    category: "Integracoes & APIs",
    icon: PlugsConnected,
    mockup: <MiniMockupIntegration />,
    title: "Conectamos o que precisa estar conectado.",
    desc: "Stripe, Pagar.me, WhatsApp Business, ERPs, webhooks. Fazemos a integracao com retry, cache e monitoramento.",
    time: "1-2 dias",
  },
  {
    swatch: "swatch-mint",
    category: "Deploy & DevOps",
    icon: Rocket,
    mockup: <MiniMockupDeploy />,
    title: "Subir pra producao sem travar seu coracao.",
    desc: "CI/CD, staging, rollback automatico, monitoramento de logs. Voce dorme, a gente vigia o deploy.",
    time: "~4h",
  },
  {
    swatch: "swatch-butter",
    category: "Analise de seguranca",
    icon: ShieldCheck,
    mockup: <MiniMockupSecurity />,
    title: "Seu sistema auditado por engenheiro senior.",
    desc: "Varredura de vulnerabilidades, LGPD, permissoes, secrets expostos. Relatorio executivo + patch de correcoes.",
    time: "1 dia",
  },
  {
    swatch: "swatch-blush",
    category: "Refactor & migracao",
    icon: ArrowsClockwise,
    mockup: <MiniMockupRefactor />,
    title: "Debito tecnico vira linhas limpas.",
    desc: "Migracao de versao, refactor de arquitetura, limpeza de codigo legado. Mudamos sem quebrar o que funciona.",
    time: "Sob escopo",
  },
];

export function UseCases() {
  return (
    <section id="casos" className="py-28 bg-canvas relative overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-6 mb-12">
        <div className="text-[13px] font-medium text-ink-muted mb-4">Casos de uso</div>
        <div className="flex items-end justify-between gap-8 flex-wrap">
          <h2 className="text-h2 text-black max-w-[700px] text-balance">
            De uma tarefa,{" "}
            <span className="font-display italic text-ink-subtle">qualquer tarefa,</span>
            <br />
            pro seu Squad.
          </h2>
          <p className="text-[15px] text-ink-muted max-w-[340px]">
            Tudo que um time de TI sobre demanda faz, em um so lugar, no WhatsApp.
          </p>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div className="snap-scroll overflow-x-auto overflow-y-hidden pb-8">
        <div className="flex gap-6 px-6 lg:px-[max(1.5rem,calc((100vw-1240px)/2))]">
          {CASES.map((c) => {
            const Icon = c.icon;
            return (
              <article
                key={c.title}
                className="shrink-0 w-[380px] group cursor-pointer"
              >
                {/* Watercolor card with mockup */}
                <div
                  className={`${c.swatch} relative rounded-[28px] h-[280px] overflow-hidden mb-6 transition-transform duration-500 group-hover:scale-[1.02] group-hover:shadow-float`}
                >
                  {/* Subtle inner glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-black/5 pointer-events-none" />

                  {/* Mockup slot */}
                  <div className="absolute inset-8">{c.mockup}</div>

                  {/* Category pill */}
                  <div className="absolute top-5 left-5 concept-pill bg-white/90 backdrop-blur-sm">
                    <Icon weight="fill" size={11} className="text-ink-subtle" />
                    <span className="text-ink-subtle">{c.category}</span>
                  </div>

                  {/* WhatsApp badge */}
                  <div className="absolute bottom-5 right-5 w-9 h-9 rounded-full bg-white shadow-float flex items-center justify-center">
                    <WhatsappLogo weight="fill" size={16} className="text-wa" />
                  </div>
                </div>

                {/* Card body */}
                <div className="px-1">
                  <div className="flex items-center gap-2 text-[12px] text-ink-muted mb-3">
                    <Clock weight="fill" size={11} className="text-wa" />
                    <span className="font-medium">Entregue em {c.time}</span>
                  </div>
                  <h3 className="text-[20px] font-semibold text-black leading-[1.2] mb-3 tracking-tight text-balance">
                    {c.title}
                  </h3>
                  <p className="text-[14px] text-ink-muted leading-[1.6]">{c.desc}</p>
                </div>
              </article>
            );
          })}

          {/* Final spacer for natural snap end */}
          <div className="shrink-0 w-6" aria-hidden />
        </div>
      </div>
    </section>
  );
}
