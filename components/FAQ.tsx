"use client";

import { useState } from "react";
import { Plus } from "@phosphor-icons/react/dist/ssr";

const FAQS = [
  {
    q: "Como funciona o acesso ao meu repositorio?",
    a: "Voce instala nosso GitHub App (ou GitLab/Bitbucket) com permissao apenas no repositorio que escolher. O agente trabalha em branch isolada, abre PR, e voce aprova antes de merge. Nunca temos acesso direto a producao.",
  },
  {
    q: "E se o agente quebrar algo em producao?",
    a: "Nao deixamos chegar la. Todo PR passa por 3 camadas: testes automatizados, revisao por engenheiro senior, e sua aprovacao final. Deploy em staging antes de producao, com rollback automatico se algo falhar.",
  },
  {
    q: "Quem sao os engenheiros que revisam o codigo?",
    a: "Time CruzTech: engenheiros seniores com minimo de 8 anos de experiencia, atuando em projetos B2B, e-commerce, fintech e SaaS. Toda entrega leva o nome do revisor. No plano Pro, voce tem um engenheiro dedicado.",
  },
  {
    q: "Voces assinam NDA e tem contrato formal?",
    a: "Sim. Contrato assinado digitalmente, NDA padrao ou customizado, e compromissos de LGPD. Dados sensiveis nunca sao usados para treinar modelos, e podemos isolar em sandbox com zero retention.",
  },
  {
    q: "Quais linguagens e stacks voces suportam?",
    a: "Node.js, Next.js, React, Vue, Laravel, PHP, Python (Django/FastAPI), Ruby on Rails, TypeScript. Infra: Vercel, AWS, Google Cloud, Cloudflare, Supabase. Se tiver algo especifico, pergunte antes de contratar.",
  },
  {
    q: "Posso cancelar quando quiser?",
    a: "Sim. Contratos mensais, sem fidelidade. Cancelamento em 7 dias corridos. Creditos nao utilizados no mes nao se acumulam, mas voce nao paga multa de nada.",
  },
  {
    q: "Qual a diferenca pra contratar um freelancer?",
    a: "Freelancer: disponibilidade incerta, codigo sem revisao, preco por projeto, risco de sumir. Squad.io: time de engenheiros seniores ativo, IA acelerando entrega, revisao garantida em todo PR, preco previsivel, contrato formal com CruzTech.",
  },
  {
    q: "E se minha tarefa for muito complexa pra um plano mensal?",
    a: "Se o escopo for muito grande (migracao, refactor pesado, sistema do zero), tratamos como projeto fechado fora do plano. Voce mantem o plano mensal pra manutencao continua e contrata o projeto a parte.",
  },
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-28 bg-canvas">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <div className="text-[13px] font-medium text-ink-muted mb-4">FAQ</div>
              <h2 className="text-h2 text-black text-balance mb-6">
                Sobre como{" "}
                <span className="font-display italic text-ink-subtle">a gente trabalha.</span>
              </h2>
              <p className="text-[15px] text-ink-muted leading-relaxed">
                Duvida nao respondida?{" "}
                <a
                  href="https://wa.me/5500000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-wa-700 font-medium hover:text-wa-900 transition-colors"
                >
                  Pergunta no WhatsApp &rarr;
                </a>
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="divide-y divide-black/[0.08]">
              {FAQS.map((item, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <div key={item.q} className="py-5">
                    <button
                      onClick={() => setOpenIdx(isOpen ? null : idx)}
                      className="w-full flex items-start justify-between gap-6 text-left group"
                    >
                      <span
                        className={`text-[17px] font-medium leading-tight transition-colors ${
                          isOpen ? "text-black" : "text-ink-subtle group-hover:text-black"
                        }`}
                      >
                        {item.q}
                      </span>
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 transition-all ${
                          isOpen
                            ? "bg-black text-white rotate-45"
                            : "bg-black/[0.04] text-ink-subtle group-hover:bg-black/[0.08]"
                        }`}
                      >
                        <Plus weight="bold" size={12} />
                      </div>
                    </button>
                    <div
                      className={`grid transition-all duration-300 ease-out ${
                        isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-[15px] text-ink-muted leading-[1.65] max-w-[640px] pr-10">
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
