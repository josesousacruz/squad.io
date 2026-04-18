import {
  Sparkle,
  XLogo,
  LinkedinLogo,
  InstagramLogo,
  GithubLogo,
} from "@phosphor-icons/react/dist/ssr";

const COLS = [
  {
    heading: "Produto",
    links: ["Como funciona", "Casos de uso", "Precos", "FAQ"],
  },
  {
    heading: "Servicos",
    links: [
      "Bug & hotfix",
      "Novas features",
      "Integracoes",
      "Deploy & DevOps",
      "Seguranca",
    ],
  },
  {
    heading: "CruzTech",
    links: ["Sobre", "Consultoria", "Blog", "Carreiras", "Contato"],
  },
  {
    heading: "Legal",
    links: ["Termos", "Privacidade", "LGPD", "NDA padrao"],
  },
];

export function Footer() {
  return (
    <footer className="bg-canvas border-t border-black/5">
      <div className="max-w-[1240px] mx-auto px-6 py-20">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-5">
              <div className="relative w-7 h-7">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent via-aurora-lavender to-aurora-peach opacity-80 blur-[2px]" />
                <div className="absolute inset-0.5 rounded-full bg-black flex items-center justify-center">
                  <Sparkle weight="fill" size={12} className="text-white" />
                </div>
              </div>
              <div>
                <div className="font-semibold text-[17px] tracking-tight">
                  Squad<span className="text-ink-muted">.io</span>
                </div>
              </div>
            </a>
            <p className="text-[14px] text-ink-muted max-w-[300px] leading-relaxed">
              Engenheiros seniores + IA resolvendo bugs, features e deploys direto no WhatsApp.
            </p>
          </div>

          {COLS.map((col) => (
            <div key={col.heading}>
              <h4 className="font-semibold text-black text-[12px] uppercase tracking-wider mb-4">
                {col.heading}
              </h4>
              <ul className="space-y-3 text-[14px] text-ink-muted">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="hover:text-black transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row items-center justify-between gap-6 text-[13px] text-ink-muted">
          <div className="flex items-center gap-5">
            <a href="#" aria-label="LinkedIn" className="hover:text-black transition-colors">
              <LinkedinLogo size={16} />
            </a>
            <a href="#" aria-label="GitHub" className="hover:text-black transition-colors">
              <GithubLogo size={16} />
            </a>
            <a href="#" aria-label="X" className="hover:text-black transition-colors">
              <XLogo size={16} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-black transition-colors">
              <InstagramLogo size={16} />
            </a>
          </div>
          <div className="text-center">
            Squad.io &copy; 2025 &middot; Uma marca{" "}
            <a
              href="https://cruztech.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-accent-600 transition-colors font-medium"
            >
              CruzTech
            </a>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-wa" />
            <span>Portugues (BR)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
