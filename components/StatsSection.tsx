const STATS = [
  { value: "500", suffix: "+", label: "tarefas entregues" },
  { value: "R$ 1.2", suffix: "M", label: "economizados pelos clientes" },
  { value: "< 4", suffix: "h", label: "tempo medio de resposta" },
  { value: "98", suffix: "%", label: "de satisfacao" },
];

export function StatsSection() {
  return (
    <section className="relative py-28 bg-canvas overflow-hidden">
      {/* Subtle watercolor accent */}
      <div
        className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full opacity-50 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(196, 218, 242, 0.55) 0%, rgba(212, 196, 240, 0.3) 50%, transparent 100%)",
          filter: "blur(60px)",
        }}
        aria-hidden
      />
      <div
        className="absolute -bottom-20 -left-20 w-[450px] h-[450px] rounded-full opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(240, 208, 180, 0.4) 0%, rgba(240, 196, 216, 0.3) 50%, transparent 100%)",
          filter: "blur(60px)",
        }}
        aria-hidden
      />

      <div className="relative z-10 max-w-[1240px] mx-auto px-6">
        <div className="mb-20">
          <div className="text-[13px] font-medium text-ink-muted mb-4">Numeros que importam</div>
          <h2 className="text-h2 text-black max-w-[720px] text-balance">
            Resultado em escala,{" "}
            <span className="font-display italic text-ink-subtle">revisao em detalhe.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 lg:gap-10">
          {STATS.map((stat, idx) => (
            <div key={stat.label} className="flex flex-col">
              {/* Hair divider top */}
              <div className="hair-divider mb-6" />

              <div className="flex items-start gap-0.5 text-black">
                <span className="text-giant font-semibold tracking-tight leading-none tabular-nums">
                  {stat.value}
                </span>
                <span className="text-[44px] font-semibold tracking-tight leading-none mt-2 text-ink-muted">
                  {stat.suffix}
                </span>
              </div>

              <div className="mt-4 text-[14px] text-ink-muted leading-snug max-w-[180px]">
                {stat.label}
              </div>

              {/* Subtle index number */}
              <div className="mt-6 text-[11px] font-mono text-ink-whisper">
                0{idx + 1} / 0{STATS.length}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
