import { Quotes } from "@phosphor-icons/react/dist/ssr";

const TESTIMONIALS = [
  {
    quote:
      "O time do Squad resolveu em 2h um bug que meu freelancer travou por uma semana. E o melhor: eu conversei tudo pelo WhatsApp, sem abrir ticket.",
    name: "Carla Mendes",
    role: "CEO",
    company: "Loja Verde",
    avatar: "https://i.pravatar.cc/120?img=47",
  },
  {
    quote:
      "Cancelamos um freela de R$ 8k que ia levar um mes. Squad.io entregou a feature inteira em 3 dias por uma fracao do preco, com codigo MELHOR.",
    name: "Ricardo Almeida",
    role: "Fundador",
    company: "Fretella",
    avatar: "https://i.pravatar.cc/120?img=68",
  },
  {
    quote:
      "Eu nao sou tecnico. Antes dependia do meu cunhado dev pra tudo. Agora mando audio no WhatsApp, recebo explicacao em linguagem humana e aprovo.",
    name: "Tatiana R.",
    role: "Diretora",
    company: "Pet Express",
    avatar: "https://i.pravatar.cc/120?img=5",
  },
  {
    quote:
      "A parte de engenheiro senior revisando foi decisiva. Ja tive prejuizo com IA sem supervisao. Aqui tenho tranquilidade que um humano validou antes.",
    name: "Bruno Vieira",
    role: "COO",
    company: "PayKey",
    avatar: "https://i.pravatar.cc/120?img=12",
  },
  {
    quote:
      "Descobrimos 2 vulnerabilidades serias que nosso dev interno nao tinha visto. A analise de seguranca trimestral vale o plano todo.",
    name: "Felipe Dantas",
    role: "CTO",
    company: "Agro Digital",
    avatar: "https://i.pravatar.cc/120?img=33",
  },
  {
    quote:
      "A velocidade de resposta e absurda. Mandei a tarefa 22h de uma quinta, 8h da sexta o PR estava na minha mesa revisado e pronto pra deploy.",
    name: "Ana Paula L.",
    role: "Head de Produto",
    company: "RepoBrasil",
    avatar: "https://i.pravatar.cc/120?img=11",
  },
];

export function Testimonials() {
  return (
    <section className="max-w-[1240px] mx-auto px-6 py-24 relative z-10 border-t border-gray-100">
      <div className="text-center max-w-[700px] mx-auto mb-16">
        <div className="inline-block text-[13px] font-semibold tracking-widest text-accent-600 uppercase mb-3">
          Depoimentos
        </div>
        <h2 className="text-h2 text-black text-balance">
          O que nossos clientes dizem
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {TESTIMONIALS.map((t) => (
          <div
            key={t.name}
            className="bg-[#F7F7F8] rounded-[24px] p-8 flex flex-col justify-between gap-8 hover:bg-white hover:shadow-soft hover:border hover:border-gray-100 transition-all"
          >
            <div>
              <Quotes weight="fill" size={22} className="text-accent-400 mb-4" />
              <p className="text-[15px] leading-[1.65] text-black">&ldquo;{t.quote}&rdquo;</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-gray-200 overflow-hidden shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={t.avatar} alt={t.name} className="w-full h-full grayscale opacity-90" />
              </div>
              <div>
                <p className="text-[14px] font-semibold text-black">{t.name}</p>
                <p className="text-[12px] text-ink-muted">
                  {t.role} &middot; {t.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
