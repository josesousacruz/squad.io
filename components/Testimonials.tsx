const TESTIMONIALS = [
  {
    swatch: "from-aurora-peach to-aurora-coral",
    quote:
      "Em 2h resolveram um bug que meu freelancer travou por uma semana. E tudo pelo WhatsApp, sem ticket, sem reunião.",
    name: "Carla Mendes",
    role: "CEO, Loja Verde",
    initials: "CM",
  },
  {
    swatch: "from-aurora-lavender to-accent/50",
    quote:
      "Cancelei um freela de R$ 8k que ia levar um mês. Squad entregou em 3 dias por menos da metade. Com código MELHOR.",
    name: "Ricardo Almeida",
    role: "Fundador, Fretella",
    initials: "RA",
  },
  {
    swatch: "from-aurora-mint to-aurora-seafoam",
    quote:
      "Não sou técnica. Dependia do meu cunhado dev. Hoje mando áudio e recebo resumo em linguagem humana. Mudou minha operação.",
    name: "Tatiana R.",
    role: "Diretora, Pet Express",
    initials: "TR",
  },
  {
    swatch: "from-aurora-sky to-aurora-lavender",
    quote:
      "A camada de engenharia sênior validando foi decisiva. Já tive prejuízo com IA sem supervisão. Aqui tenho paz.",
    name: "Bruno Vieira",
    role: "COO, PayKey",
    initials: "BV",
  },
  {
    swatch: "from-aurora-butter to-aurora-peach",
    quote:
      "Descobrimos 2 vulnerabilidades sérias que nosso dev interno não viu. A análise trimestral paga o plano inteiro.",
    name: "Felipe Dantas",
    role: "CTO, Agro Digital",
    initials: "FD",
  },
  {
    swatch: "from-aurora-blush to-aurora-lilac",
    quote:
      "Velocidade absurda. Mandei 22h da quinta, 8h da sexta o PR estava revisado e pronto para deploy.",
    name: "Ana Paula L.",
    role: "Head de Produto, RepoBrasil",
    initials: "AP",
  },
];

export function Testimonials() {
  return (
    <section className="py-28 bg-canvas">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="mb-14 max-w-[720px]">
          <div className="text-[13px] font-medium text-ink-muted mb-4">Depoimentos</div>
          <h2 className="text-h2 text-black text-balance">
            O que nossos clientes{" "}
            <span className="font-display italic text-ink-subtle">dizem por aí.</span>
          </h2>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 [column-fill:_balance]">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="break-inside-avoid mb-6 bg-white rounded-[24px] p-7 border border-black/5 hover:border-black/10 hover:shadow-soft transition-all group"
            >
              <blockquote className="text-[16px] leading-[1.55] text-black font-medium mb-6 text-balance">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="flex items-center gap-3 pt-5 border-t border-black/5">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.swatch} flex items-center justify-center text-white text-[12px] font-bold shadow-sm`}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-[14px] font-semibold text-black">{t.name}</div>
                  <div className="text-[12px] text-ink-muted">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
