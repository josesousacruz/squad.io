import {
  Sparkle,
  XLogo,
  LinkedinLogo,
  InstagramLogo,
  GithubLogo,
  WhatsappLogo,
} from "@phosphor-icons/react/dist/ssr";

const COLS = [
  {
    heading: "Produto",
    links: ["Como funciona", "Servicos", "Cases", "Precos", "FAQ"],
  },
  {
    heading: "Servicos",
    links: [
      "Bug fix & hotfix",
      "Novas features",
      "Integracoes",
      "Deploy & DevOps",
      "Seguranca",
    ],
  },
  {
    heading: "CruzTech",
    links: ["Sobre a CruzTech", "Consultoria corporativa", "Blog", "Carreiras", "Contato"],
  },
  {
    heading: "Legal",
    links: ["Termos de uso", "Privacidade", "LGPD", "NDA padrao"],
  },
];

export function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-100 relative z-10">
      <div className="max-w-[1240px] mx-auto px-6 py-16">
        {/* Brand block + CTA */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 pb-16">
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent to-indigo-600 flex items-center justify-center">
                <Sparkle weight="fill" size={18} className="text-white" />
              </div>
              <div>
                <div className="font-semibold text-[18px] tracking-tight">Squad.io</div>
                <div className="text-[11px] font-medium text-ink-muted tracking-wider uppercase">
                  by CruzTech
                </div>
              </div>
            </a>
            <p className="text-[14px] text-ink-muted max-w-[320px] leading-relaxed mb-6">
              Time de engenheiros seniores + IA resolvendo bugs, features, deploys e seguranca direto no WhatsApp.
            </p>
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-wa text-[13px] py-2.5 px-5"
            >
              <WhatsappLogo weight="fill" size={14} />
              Falar no WhatsApp
            </a>
          </div>

          {COLS.map((col) => (
            <div key={col.heading}>
              <h4 className="font-semibold text-black text-[13px] uppercase tracking-wider mb-4">
                {col.heading}
              </h4>
              <ul className="flex flex-col gap-3 text-[14px] text-ink-muted">
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

        {/* Bottom */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-6 text-[13px] text-ink-muted">
          <div className="flex items-center gap-5 text-lg">
            <a href="#" aria-label="LinkedIn" className="hover:text-black transition-colors">
              <LinkedinLogo size={18} />
            </a>
            <a href="#" aria-label="GitHub" className="hover:text-black transition-colors">
              <GithubLogo size={18} />
            </a>
            <a href="#" aria-label="X" className="hover:text-black transition-colors">
              <XLogo size={18} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-black transition-colors">
              <InstagramLogo size={18} />
            </a>
          </div>
          <div className="text-center font-medium">
            Squad.io &copy; 2025 &middot; Uma marca{" "}
            <a
              href="https://cruztech.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-accent-600 transition-colors"
            >
              CruzTech
            </a>
          </div>
          <div className="flex items-center gap-2 font-medium">
            <div className="w-2 h-2 rounded-full bg-wa" />
            <span>Portugues (Brasil)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
