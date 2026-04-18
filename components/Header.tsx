import { WhatsappLogo, Sparkle } from "@phosphor-icons/react/dist/ssr";

const NAV = [
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Servicos", href: "#servicos" },
  { label: "Cases", href: "#cases" },
  { label: "Precos", href: "#precos" },
  { label: "FAQ", href: "#faq" },
];

export function Header() {
  return (
    <header className="fixed top-0 inset-x-0 h-16 bg-white/80 backdrop-blur-md z-50 flex items-center justify-between px-6 xl:px-12 border-b border-gray-100/60">
      <div className="flex items-center gap-10">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-indigo-600 flex items-center justify-center shadow-sm">
            <Sparkle weight="fill" size={16} className="text-white" />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-semibold text-[17px] tracking-tight">Squad.io</span>
            <span className="text-[10px] font-medium text-ink-muted tracking-wider uppercase">
              by CruzTech
            </span>
          </div>
        </a>
        <nav className="hidden lg:flex items-center gap-7 text-[14px] text-gray-700 font-medium">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-black transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="flex items-center gap-3">
        <a
          href="https://wa.me/5500000000000?text=Oi,%20quero%20conhecer%20o%20Squad.io"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-wa text-white px-4 py-2 text-[13px] font-semibold hover:bg-wa-600 transition-colors"
        >
          <WhatsappLogo weight="fill" size={14} />
          Falar agora
        </a>
      </div>
    </header>
  );
}
