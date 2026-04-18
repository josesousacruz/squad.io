import { WhatsappLogo, Clock, ShieldCheck, Sparkle } from "@phosphor-icons/react/dist/ssr";

export function CtaFinal() {
  return (
    <section id="cta" className="py-24 px-6 bg-canvas">
      <div className="relative max-w-[1240px] mx-auto rounded-[40px] overflow-hidden">
        {/* Watercolor layered background */}
        <div className="absolute inset-0 bg-gradient-to-br from-aurora-peach/60 via-aurora-lavender/50 to-aurora-sky/60" />
        <div
          className="absolute -top-20 -left-20 w-[500px] h-[500px] rounded-full opacity-70"
          style={{
            background:
              "radial-gradient(circle, rgba(240, 208, 180, 0.9) 0%, rgba(240, 196, 216, 0.5) 40%, transparent 100%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute -bottom-20 -right-20 w-[450px] h-[450px] rounded-full opacity-70"
          style={{
            background:
              "radial-gradient(circle, rgba(212, 196, 240, 0.9) 0%, rgba(196, 218, 242, 0.6) 40%, transparent 100%)",
            filter: "blur(60px)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white/30" />

        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.08) 1px, transparent 0)",
            backgroundSize: "28px 28px",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 70%)",
          }}
          aria-hidden
        />

        <div className="relative z-10 px-6 sm:px-16 py-28 text-center">
          <div className="concept-pill bg-white/90 mx-auto mb-10">
            <Sparkle weight="fill" size={11} className="text-accent" />
            <span className="text-ink-subtle">Diagnostico gratuito em ate 10min</span>
          </div>

          <h2 className="text-[56px] md:text-[80px] font-semibold tracking-[-0.035em] leading-[1.02] text-black max-w-[900px] mx-auto mb-7 text-balance">
            Seu proximo bug pode estar{" "}
            <span className="font-display italic">resolvido hoje.</span>
          </h2>

          <p className="text-[18px] text-ink-subtle max-w-[580px] mx-auto mb-12 text-balance leading-relaxed">
            Fale com o time de engenheiros seniores da CruzTech agora. Sem compromisso, sem
            formulario, direto no WhatsApp.
          </p>

          <a
            href="https://wa.me/5500000000000?text=Oi,%20quero%20conhecer%20o%20Squad.io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 rounded-full bg-black text-white px-10 py-5 text-[17px] font-semibold hover:bg-ink-subtle hover:-translate-y-0.5 transition-all shadow-[0_8px_24px_rgba(0,0,0,0.15)]"
          >
            <WhatsappLogo weight="fill" size={20} />
            Contratar meu Squad
          </a>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[13px] text-ink-muted">
            <div className="flex items-center gap-2">
              <Clock weight="fill" size={12} className="text-wa-700" />
              Resposta em menos de 10min
            </div>
            <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-ink-whisper" />
            <div className="flex items-center gap-2">
              <ShieldCheck weight="fill" size={12} className="text-accent-600" />
              Sem compromisso
            </div>
            <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-ink-whisper" />
            <div className="flex items-center gap-2">
              <Sparkle weight="fill" size={12} className="text-aurora-coral" />
              Feito no Brasil
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
