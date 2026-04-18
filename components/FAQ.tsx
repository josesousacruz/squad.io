"use client";

import { useState } from "react";
import { Plus, Minus } from "@phosphor-icons/react/dist/ssr";

const FAQS = [
  {
    q: "Como funciona o acesso ao meu repositorio?",
    a: "Voce instala nosso GitHub App (ou GitLab/Bitbucket) com permissao apenas no repositorio que voce escolher. O agente trabalha em uma branch isolada, abre PR, e voce aprova antes de merge. Nunca temos acesso direto a producao.",
  },
  {
    q: "E se o agente quebrar algo em producao?",
    a: "Nao deixamos chegar la. Todo PR passa por 3 camadas: testes automatizados, revisao por engenheiro senior da CruzTech, e sua aprovacao final. Alem disso, fazemos deploy em staging antes de producao. Se mesmo assim algo quebrar, temos rollback automatico.",
  },
  {
    q: "Quem sao os engenheiros que revisam o codigo?",
    a: "Time CruzTech: engenheiros seniores com minimo de 8 anos de experiencia, atuando em projetos B2B, e-commerce, fintech e SaaS. Toda entrega leva o nome do revisor. No plano Pro, voce tem um engenheiro dedicado.",
  },
  {
    q: "Voces assinam NDA e tem contrato formal?",
    a: "Sim. Contrato assinado digitalmente, NDA padrao ou customizado, e compromissos de LGPD. Seus dados sensiveis nunca sao usados para treinar modelos, e podemos isolar em sandbox com zero retention se necessario.",
  },
  {
    q: "Quais linguagens e stacks voces suportam?",
    a: "Node.js, Next.js, React, Vue, Laravel, PHP, Python (Django/FastAPI), Ruby on Rails, TypeScript. Infra: Vercel, AWS, Google Cloud, Cloudflare, Supabase. Se tiver algo especifico, pergunte no WhatsApp antes de contratar.",
  },
  {
    q: "Posso cancelar quando quiser?",
    a: "Sim. Contratos mensais, sem fidelidade. Cancelamento em 7 dias corridos. Creditos nao utilizados no mes nao se acumulam, mas voce nao paga multa de nada.",
  },
  {
    q: "Qual a diferenca pra contratar um freelancer?",
    a: "Freelancer: disponibilidade incerta, codigo sem revisao, preco por projeto, risco de sumir. Squad.io: time de engenheiros seniores ativo 24/7, IA acelerando entrega, revisao garantida em todo PR, preco previsivel, contrato formal com CruzTech.",
  },
  {
    q: "E se minha tarefa for muito complexa pra um plano mensal?",
    a: "Se o escopo for muito grande (migracao, refactor pesado, sistema do zero), tratamos como projeto fechado fora do plano. Voce mantem o plano mensal pra manutencao continua e contrata o projeto a parte.",
  },
];

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="max-w-[920px] mx-auto px-6 py-24 relative z-10">
      <div className="text-center max-w-[700px] mx-auto mb-16">
        <div className="inline-block text-[13px] font-semibold tracking-widest text-accent-600 uppercase mb-3">
          Perguntas frequentes
        </div>
        <h2 className="text-h2 text-black text-balance">
          Sobre como a gente trabalha
        </h2>
      </div>

      <div className="space-y-3">
        {FAQS.map((item, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div
              key={item.q}
              className={`rounded-2xl border transition-all ${
                isOpen
                  ? "bg-white border-accent/30 shadow-[0_8px_30px_rgba(139,92,246,0.08)]"
                  : "bg-white border-gray-100 hover:border-gray-200"
              }`}
            >
              <button
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                className="w-full flex items-center justify-between gap-6 p-6 text-left"
              >
                <span className="text-[16px] font-semibold text-black">{item.q}</span>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                    isOpen ? "bg-accent text-white" : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {isOpen ? <Minus weight="bold" size={14} /> : <Plus weight="bold" size={14} />}
                </div>
              </button>
              {isOpen && (
                <div className="px-6 pb-6 -mt-2">
                  <p className="text-[15px] text-ink-muted leading-relaxed">{item.a}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
