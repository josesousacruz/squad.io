import {
  UserCheck,
  CheckCircle,
  Lightning,
  Brain,
  ShieldCheck,
  GitPullRequest,
} from "@phosphor-icons/react/dist/ssr";

function HumanSide() {
  return (
    <div className="relative rounded-[28px] overflow-hidden h-full">
      {/* Watercolor base */}
      <div className="absolute inset-0 swatch-lavender" />
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-black/5" />

      <div className="relative z-10 p-10 h-full flex flex-col">
        <div className="concept-pill bg-white/90 w-fit mb-8">
          <UserCheck weight="fill" size={11} className="text-accent-600" />
          <span className="text-ink-subtle">Lado humano</span>
        </div>

        <h3 className="text-[32px] font-semibold leading-tight text-black tracking-tight mb-4 text-balance">
          Engenheiros seniores <span className="font-display italic">assinam cada entrega.</span>
        </h3>
        <p className="text-[15px] text-ink-subtle leading-relaxed mb-8 max-w-[380px]">
          Um engenheiro CruzTech com +8 anos de experiencia revisa cada linha antes de chegar em voce.
          Arquitetura, seguranca, performance.
        </p>

        {/* Checklist card */}
        <div className="mt-auto bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-soft">
          <div className="flex items-center gap-2 text-[12px] font-semibold text-black mb-3">
            <GitPullRequest size={12} className="text-accent-600" />
            Checklist de revisao
          </div>
          <div className="space-y-2">
            {[
              "Seguranca (SQLi, XSS, auth)",
              "Performance e edge cases",
              "Testes cobrindo o cenario",
              "Padrao do seu codebase",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-[13px] text-ink-subtle">
                <CheckCircle weight="fill" size={13} className="text-wa shrink-0" />
                {item}
              </div>
            ))}
          </div>

          {/* Team avatars */}
          <div className="mt-5 pt-4 border-t border-black/5 flex items-center gap-3">
            <div className="flex -space-x-2">
              {[
                { initials: "AC", grad: "from-aurora-peach to-aurora-coral" },
                { initials: "RT", grad: "from-aurora-sky to-accent/60" },
                { initials: "JM", grad: "from-aurora-blush to-aurora-lilac" },
              ].map((avatar) => (
                <div
                  key={avatar.initials}
                  className={`w-7 h-7 rounded-full border-2 border-white bg-gradient-to-br ${avatar.grad} flex items-center justify-center text-[10px] font-bold text-white`}
                >
                  {avatar.initials}
                </div>
              ))}
            </div>
            <span className="text-[12px] text-ink-muted">
              Time CruzTech &middot; <span className="text-wa-700 font-medium">online agora</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function AISide() {
  return (
    <div className="relative rounded-[28px] overflow-hidden h-full">
      <div className="absolute inset-0 swatch-mint" />
      <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-black/5" />

      <div className="relative z-10 p-10 h-full flex flex-col">
        <div className="concept-pill bg-white/90 w-fit mb-8">
          <Brain weight="fill" size={11} className="text-wa-700" />
          <span className="text-ink-subtle">Lado IA</span>
        </div>

        <h3 className="text-[32px] font-semibold leading-tight text-black tracking-tight mb-4 text-balance">
          Agente autonomo <span className="font-display italic">em minutos, nao dias.</span>
        </h3>
        <p className="text-[15px] text-ink-subtle leading-relaxed mb-8 max-w-[380px]">
          Modelos de ponta leem todo o repositorio, sugerem solucoes, rodam testes e abrem o PR
          automaticamente.
        </p>

        {/* Terminal card */}
        <div className="mt-auto bg-black rounded-2xl p-5 shadow-float font-mono">
          <div className="flex items-center gap-2 mb-3 text-[10px]">
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
              <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
            </div>
            <Lightning weight="fill" size={10} className="text-yellow-400 ml-2" />
            <span className="text-white/60">squad.io agent &middot; live</span>
          </div>
          <div className="space-y-1 text-[11px]">
            <div className="text-white/50">&gt; analisando /checkout/*</div>
            <div className="text-wa">
              &gt; <span className="text-white">4 arquivos</span> indexados
            </div>
            <div className="text-white/50">&gt; executando 14 testes...</div>
            <div className="text-wa">
              &gt; <span className="text-white">14/14 passaram</span> em 1.8s
            </div>
            <div className="text-aurora-lavender">&gt; aguardando revisao humana</div>
          </div>
        </div>

        <div className="mt-5 flex items-center gap-2 text-[12px] text-ink-muted">
          <ShieldCheck weight="fill" size={13} className="text-wa-700" />
          Sandbox isolado por cliente &middot; zero retention
        </div>
      </div>
    </div>
  );
}

export function HumanAIDiff() {
  return (
    <section className="py-28 bg-canvas">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Header */}
        <div className="mb-14">
          <div className="text-[13px] font-medium text-ink-muted mb-4">Como entregamos</div>
          <h2 className="text-h2 text-black max-w-[720px] text-balance">
            Duas forcas. Um unico resultado:{" "}
            <span className="font-display italic text-ink-subtle">codigo que funciona.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-[520px]">
          <HumanSide />
          <AISide />
        </div>
      </div>
    </section>
  );
}
