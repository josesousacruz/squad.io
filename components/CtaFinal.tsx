import { WhatsappLogo, ShieldCheck, Clock, ChatCircleDots } from "@phosphor-icons/react/dist/ssr";

export function CtaFinal() {
  return (
    <section id="cta" className="relative w-full overflow-hidden">
      <div className="absolute inset-0 section-blob -z-10" aria-hidden />
      <div className="absolute inset-x-0 top-0 h-[500px] organic-blob-1 opacity-60 -z-10" aria-hidden />

      <div className="max-w-[1100px] mx-auto px-6 py-32 text-center relative z-10">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-accent-50 border border-accent/20 text-accent-700 px-4 py-1.5 text-[13px] font-medium">
          <ChatCircleDots weight="fill" size={14} />
          Resposta em minutos no WhatsApp
        </div>

        <h2 className="text-[56px] md:text-[72px] font-semibold tracking-tight leading-[1.05] text-black max-w-[900px] mx-auto mb-6 text-balance">
          Seu proximo bug pode estar resolvido hoje.
        </h2>

        <p className="text-[18px] text-ink-muted max-w-[620px] mx-auto mb-10 text-balance">
          Fale com o time de engenheiros seniores da CruzTech agora. Diagnostico gratuito em ate 10 minutos, sem compromisso.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href="https://wa.me/5500000000000?text=Oi,%20quero%20conhecer%20o%20Squad.io"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa-lg"
          >
            <WhatsappLogo weight="fill" size={22} />
            Falar agora no WhatsApp
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[13px] text-ink-muted">
          <div className="flex items-center gap-2">
            <Clock weight="fill" size={14} className="text-wa" />
            Resposta em &lt; 10min em horario comercial
          </div>
          <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-gray-300" />
          <div className="flex items-center gap-2">
            <ShieldCheck weight="fill" size={14} className="text-accent-600" />
            Sem compromisso, diagnostico gratuito
          </div>
        </div>
      </div>
    </section>
  );
}
