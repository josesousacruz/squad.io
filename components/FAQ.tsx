"use client";

import { useState } from "react";
import { Plus } from "@phosphor-icons/react/dist/ssr";

const FAQS = [
  {
    q: "O que vocês chamam de super agentes de IA?",
    a: "São agentes autônomos especializados em ler contexto, investigar causa raiz, implementar a solução, rodar testes e preparar o PR. Eles aceleram a execução técnica; a decisão final e a validação continuam com engenheiros sêniores da CruzTech.",
  },
  {
    q: "Como funciona o acesso ao meu repositório?",
    a: "Você instala nosso GitHub App (ou GitLab/Bitbucket) com permissão apenas no repositório que escolher. Os super agentes trabalham em branch isolada, abrem o PR e um engenheiro sênior valida antes da sua aprovação final. Nunca temos acesso direto à produção.",
  },
  {
    q: "E se os super agentes quebrarem algo em produção?",
    a: "Não deixamos chegar lá. Toda entrega passa por 3 camadas: testes automatizados, validação por engenheiro sênior e sua aprovação final. Deploy em staging antes de produção, com rollback automático se algo falhar.",
  },
  {
    q: "Quem são os engenheiros que validam o código?",
    a: "Time CruzTech: engenheiros sêniores com mínimo de 8 anos de experiência, atuando em projetos B2B, e-commerce, fintech e SaaS. Toda entrega leva o nome do revisor. No plano Pro, você tem um engenheiro dedicado.",
  },
  {
    q: "Vocês assinam NDA e têm contrato formal?",
    a: "Sim. Contrato assinado digitalmente, NDA padrão ou customizado, e compromissos de LGPD. Dados sensíveis nunca são usados para treinar modelos, e operamos com sandbox isolado e zero retention quando necessário.",
  },
  {
    q: "Quais linguagens e stacks vocês suportam?",
    a: "Node.js, Next.js, React, Vue, Laravel, PHP, Python (Django/FastAPI), Ruby on Rails, TypeScript. Infra: Vercel, AWS, Google Cloud, Cloudflare, Supabase. Se tiver algo específico, pergunte antes de contratar.",
  },
  {
    q: "Posso cancelar quando quiser?",
    a: "Sim. Contratos mensais, sem fidelidade. Cancelamento em 7 dias corridos. Créditos não utilizados no mês não se acumulam, mas você não paga multa de nada.",
  },
  {
    q: "Qual a diferença para contratar um freelancer?",
    a: "Freelancer: disponibilidade incerta, código sem revisão, preço por projeto, risco de sumir. Squad.io: super agentes de IA executando continuamente, validação sênior em todo PR, preço previsível e contrato formal com a CruzTech.",
  },
  {
    q: "E se minha tarefa for muito complexa para um plano mensal?",
    a: "Se o escopo for muito grande (migração, refactor pesado, sistema do zero), tratamos como projeto fechado fora do plano. Você mantém o plano mensal para manutenção contínua e contrata o projeto à parte.",
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
                Dúvida não respondida?{" "}
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
