const LOGOS = ["Loja Verde", "Fretella", "PayKey", "Agro Digital", "Pet Express", "RepoBrasil"];

export function LogosRail() {
  return (
    <section className="max-w-[1100px] w-full mx-auto px-6 py-16 relative z-10">
      <p className="text-center text-[12px] font-semibold tracking-widest text-ink-muted uppercase mb-8">
        Empresas que confiam no time CruzTech
      </p>
      <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 grayscale opacity-60">
        {LOGOS.map((logo) => (
          <span
            key={logo}
            className="font-semibold text-[22px] tracking-tight text-ink-muted"
          >
            {logo}
          </span>
        ))}
      </div>
    </section>
  );
}
