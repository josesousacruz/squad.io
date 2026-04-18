import { WhatsappLogo, ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import { HeroMockup } from "./HeroMockup";
import { TrustStrip } from "./TrustStrip";

export function Hero() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Organic purple ambient background */}
      <div className="absolute inset-x-0 top-0 h-[900px] organic-blob-1 -z-20" aria-hidden />
      <div
        className="absolute inset-x-0 top-[200px] h-[700px] organic-blob-2 scale-150 -z-20"
        aria-hidden
      />

      <section className="max-w-[1240px] mx-auto px-6 pt-24 pb-16 flex flex-col items-center text-center relative z-10">
        {/* Dual-brand eyebrow */}
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent-50/80 backdrop-blur-sm px-4 py-1.5 text-[13px] font-medium text-accent-700">
          <ShieldCheck weight="fill" size={14} />
          CruzTech apresenta
          <span className="font-semibold text-accent-900">Squad.io</span>
        </div>

        <h1 className="max-w-[900px] mb-6 text-balance text-h1 text-black">
          Seu site tem bugs agora.<br />
          <span className="text-ink-muted">Seu time nao vai resolver hoje.</span>
        </h1>

        <p className="max-w-[680px] text-ink-muted mb-10 text-balance text-body">
          Um time de <strong className="text-black">engenheiros de software seniores + IA</strong> resolvendo bugs, features, deploys e seguranca direto no WhatsApp. Cada entrega revisada linha por linha por um engenheiro humano.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/5500000000000?text=Oi,%20quero%20conhecer%20o%20Squad.io"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa"
          >
            <WhatsappLogo weight="fill" size={20} />
            Falar agora no WhatsApp
          </a>
          <a href="#como-funciona" className="text-[15px] font-medium text-ink-muted hover:text-black transition-colors">
            Como funciona &rarr;
          </a>
        </div>

        <TrustStrip />
        <HeroMockup />
      </section>
    </div>
  );
}
