const STATS = [
  { value: "500", suffix: "+", label: "tarefas entregues", color: "text-black" },
  { value: "R$ 1.2", suffix: "M+", label: "economizados pelos clientes", color: "text-wa" },
  { value: "< 4", suffix: "h", label: "tempo medio de resposta", color: "text-black" },
  { value: "98", suffix: "%", label: "satisfacao dos clientes", color: "text-accent-600" },
];

export function StatsSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute inset-0 section-blob -z-10" aria-hidden />
      <div className="max-w-[1240px] mx-auto px-6 py-28 relative z-10">
        <div className="text-center max-w-[700px] mx-auto mb-20">
          <div className="inline-block text-[13px] font-semibold tracking-widest text-accent-600 uppercase mb-3">
            Numeros que importam
          </div>
          <h2 className="text-h2 text-black text-balance">
            Resultado em escala, revisao em detalhe
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className={`${stat.color} flex items-start justify-center`}>
                <span className="text-giant font-semibold tracking-tight tabular-nums">
                  {stat.value}
                </span>
                <span className="text-[48px] font-semibold tracking-tight leading-[1] mt-3">
                  {stat.suffix}
                </span>
              </div>
              <div className="text-[14px] text-ink-muted mt-2 max-w-[200px] mx-auto leading-snug">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
