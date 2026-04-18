import {
  UserCheck,
  Code,
  CheckCircle,
  Lightning,
  Brain,
  ShieldCheck,
  GitPullRequest,
  Warning,
} from "@phosphor-icons/react/dist/ssr";

function HumanCard() {
  return (
    <div className="relative bg-ink rounded-3xl p-8 overflow-hidden border border-white/5 h-full flex flex-col">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(139,92,246,0.25),_transparent_60%)]" />

      <div className="relative z-10 flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-indigo-600 flex items-center justify-center">
          <UserCheck weight="fill" size={20} className="text-white" />
        </div>
        <div>
          <div className="text-[12px] font-semibold text-accent-400 uppercase tracking-wider">
            Lado humano
          </div>
          <div className="text-[18px] font-semibold text-white">Engenheiros seniores</div>
        </div>
      </div>

      <p className="relative z-10 text-gray-300 text-[15px] leading-relaxed mb-6">
        Um engenheiro CruzTech com +8 anos de experiencia revisa <strong className="text-white">cada linha de codigo</strong> antes de chegar em voce. Arquitetura, seguranca, performance.
      </p>

      <div className="relative z-10 bg-white/5 border border-white/10 rounded-2xl p-5 space-y-3 flex-1">
        <div className="flex items-center gap-2 text-white/90 text-[13px] mb-2">
          <GitPullRequest size={14} className="text-accent-400" />
          Checklist de revisao
        </div>
        {[
          "Seguranca (SQLi, XSS, auth)",
          "Performance e edge cases",
          "Testes cobrindo o cenario",
          "Padrao do seu codebase",
        ].map((item) => (
          <div key={item} className="flex items-center gap-2.5 text-[13px] text-gray-300">
            <CheckCircle weight="fill" size={14} className="text-wa shrink-0" />
            {item}
          </div>
        ))}
      </div>

      <div className="relative z-10 mt-5 flex items-center gap-3 text-[12px] text-gray-400">
        <div className="flex -space-x-2">
          {["from-purple-500 to-indigo-600", "from-blue-500 to-cyan-500", "from-pink-500 to-rose-500"].map(
            (g, i) => (
              <div
                key={i}
                className={`w-7 h-7 rounded-full border-2 border-ink bg-gradient-to-br ${g} flex items-center justify-center text-[10px] font-bold text-white`}
              >
                {["AC", "RT", "JM"][i]}
              </div>
            ),
          )}
        </div>
        Time CruzTech &middot; <span className="text-wa font-medium">online agora</span>
      </div>
    </div>
  );
}

function AICard() {
  return (
    <div className="relative bg-ink rounded-3xl p-8 overflow-hidden border border-white/5 h-full flex flex-col">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(37,211,102,0.15),_transparent_60%)]" />

      <div className="relative z-10 flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-wa to-wa-700 flex items-center justify-center">
          <Brain weight="fill" size={20} className="text-white" />
        </div>
        <div>
          <div className="text-[12px] font-semibold text-wa uppercase tracking-wider">Lado IA</div>
          <div className="text-[18px] font-semibold text-white">Agente autonomo</div>
        </div>
      </div>

      <p className="relative z-10 text-gray-300 text-[15px] leading-relaxed mb-6">
        Modelos de ponta executam a tarefa em <strong className="text-white">minutos, nao dias</strong>. Leem todo o repositorio, sugerem solucoes, rodam testes e abrem o PR automaticamente.
      </p>

      <div className="relative z-10 bg-black/40 border border-white/5 rounded-2xl p-5 font-mono text-[12px] flex-1">
        <div className="flex items-center gap-2 text-gray-500 mb-3 text-[11px]">
          <Lightning weight="fill" size={12} className="text-yellow-400" />
          squad.io agent &middot; live
        </div>
        <div className="space-y-1.5">
          <div className="text-gray-400">&gt; analisando /checkout/*</div>
          <div className="text-wa">&gt; <span className="text-white">4 arquivos</span> indexados</div>
          <div className="text-gray-400">&gt; rodando testes...</div>
          <div className="text-wa">
            &gt; <span className="text-white">14/14 passaram</span> em 1.8s
          </div>
          <div className="text-accent-400">&gt; aguardando revisao humana</div>
        </div>
      </div>

      <div className="relative z-10 mt-5 flex items-center gap-2 text-[12px] text-gray-400">
        <ShieldCheck size={14} className="text-wa" />
        Sandbox isolado por cliente &middot; zero retention
      </div>
    </div>
  );
}

export function HumanAIDiff() {
  return (
    <section className="max-w-[1240px] mx-auto px-6 py-24 relative z-10">
      <div className="text-center max-w-[800px] mx-auto mb-16">
        <div className="inline-flex items-center gap-2 text-[13px] font-semibold tracking-widest uppercase mb-4">
          <span className="text-accent-600">Humano</span>
          <span className="text-gray-400">+</span>
          <span className="text-wa">IA</span>
        </div>
        <h2 className="text-h2 text-black text-balance mb-5">
          Nao e chatbot. E um time de verdade com IA por tras.
        </h2>
        <p className="text-body text-ink-muted max-w-[620px] mx-auto">
          IA sozinha quebra em producao. Humano sozinho e caro e lento. Juntos, voce paga 1/3 do preco de um dev CLT com qualidade de senior.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <HumanCard />
        <AICard />
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[13px] text-ink-muted">
        <div className="flex items-center gap-2">
          <Warning weight="fill" size={14} className="text-red-500" />
          <span>Sem revisao, 30% dos PRs de IA quebram em producao</span>
        </div>
        <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-gray-300" />
        <div className="flex items-center gap-2">
          <CheckCircle weight="fill" size={14} className="text-wa" />
          <span>Com Squad.io: 98% de aprovacao direta pelo cliente</span>
        </div>
      </div>
    </section>
  );
}
