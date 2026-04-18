import { Sparkle } from "@phosphor-icons/react/dist/ssr";
import { HeroMockup } from "./HeroMockup";

export function Hero() {
  return (
    <section className="relative w-full overflow-hidden pt-28 pb-20 bg-canvas">
      {/* Watercolor background */}
      <div className="watercolor-hero" aria-hidden />
      <div className="watercolor-hero-extra" aria-hidden />

      {/* Dot grid pattern */}
      <div className="dot-grid" aria-hidden />

      {/* Soft fade to content below */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-canvas pointer-events-none" aria-hidden />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 flex flex-col items-center text-center">
        {/* Brand mark */}
        <div className="mb-10 flex items-center gap-2.5">
          <div className="relative w-6 h-6">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent via-aurora-lavender to-aurora-peach opacity-80 blur-[2px]" />
            <div className="absolute inset-[3px] rounded-full bg-black flex items-center justify-center">
              <Sparkle weight="fill" size={10} className="text-white" />
            </div>
          </div>
          <span className="font-semibold text-[15px] tracking-tight text-black">
            Squad<span className="text-ink-muted">.io</span>
          </span>
          <span className="text-[13px] text-ink-faint">&middot;</span>
          <span className="text-[13px] text-ink-muted font-medium">by CruzTech</span>
        </div>

        {/* Headline */}
        <h1 className="text-hero text-black max-w-[960px] text-balance mb-8">
          Seu time de engenheiros<br />
          <span className="font-display italic text-ink-subtle">resolvendo bugs no WhatsApp.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-[19px] leading-[1.5] text-ink-muted max-w-[560px] mb-10 text-balance">
          Engenheiros de software <strong className="text-black font-semibold">seniores + IA</strong> entregando
          features, correcoes e deploys em horas. Voce so manda mensagem.
        </p>

        {/* Single CTA - Base44 pattern */}
        <a
          href="https://wa.me/5500000000000?text=Oi,%20quero%20conhecer%20o%20Squad.io"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-black"
        >
          Contratar meu Squad
        </a>

        {/* Trust signal */}
        <div className="mt-8 flex items-center gap-3 text-[13px] text-ink-muted">
          <div className="flex -space-x-2">
            {[
              "from-aurora-peach to-aurora-coral",
              "from-aurora-lavender to-accent/60",
              "from-aurora-mint to-aurora-seafoam",
              "from-aurora-sky to-aurora-lilac",
            ].map((g, i) => (
              <div
                key={i}
                className={`w-6 h-6 rounded-full border-2 border-canvas bg-gradient-to-br ${g}`}
              />
            ))}
          </div>
          <span>
            <span className="text-black font-semibold">+500 tarefas</span> entregues por
            engenheiros seniores CruzTech
          </span>
        </div>
      </div>

      {/* Mockup floating below hero */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 mt-20">
        <HeroMockup />
      </div>
    </section>
  );
}
