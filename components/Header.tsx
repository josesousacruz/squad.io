import { Sparkle } from "@phosphor-icons/react/dist/ssr";

const NAV = [
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Casos", href: "#casos" },
  { label: "Preços", href: "#precos" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  return (
    <header className="fixed top-4 inset-x-4 z-50 flex justify-center pointer-events-none">
      <div className="pointer-events-auto flex items-center gap-1 rounded-full bg-white/70 backdrop-blur-xl border border-black/[0.06] px-2 py-2 shadow-[0_2px_12px_rgba(0,0,0,0.04),0_20px_40px_rgba(0,0,0,0.04)]">
        <a href="#" className="flex items-center gap-2 pl-3 pr-4 py-1.5 group">
          <div className="relative w-6 h-6">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent via-aurora-lavender to-aurora-peach opacity-90 blur-[2px]" />
            <div className="absolute inset-0.5 rounded-full bg-black flex items-center justify-center">
              <Sparkle weight="fill" size={11} className="text-white" />
            </div>
          </div>
          <span className="font-semibold text-[15px] tracking-tight">
            Squad<span className="text-ink-muted">.io</span>
          </span>
        </a>
        <div className="w-px h-5 bg-black/10 mx-1" />
        <nav className="hidden md:flex items-center gap-1">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-3 py-1.5 text-[13px] font-medium text-ink-muted hover:text-black hover:bg-black/5 rounded-full transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="w-px h-5 bg-black/10 mx-1 hidden md:block" />
        <a
          href="https://wa.me/5500000000000?text=Oi,%20quero%20conhecer%20o%20Squad.io"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 bg-black text-white px-4 py-2 rounded-full text-[13px] font-medium hover:bg-ink-subtle transition-colors"
        >
          Falar agora
        </a>
      </div>
    </header>
  );
}
