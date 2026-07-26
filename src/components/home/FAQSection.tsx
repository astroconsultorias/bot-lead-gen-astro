import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "A Astro atende somente empresas de Porto Alegre?",
    a: "O atendimento é prioritariamente voltado a Porto Alegre e Região Metropolitana, mas alguns serviços e projetos podem ser realizados remotamente.",
  },
  {
    q: "Preciso contratar uma consultoria completa?",
    a: "Não. A Astro possui soluções pontuais e também projetos personalizados. A indicação depende do problema identificado.",
  },
  {
    q: "A Astro trabalha apenas com tecnologia?",
    a: "Não. A tecnologia é uma ferramenta. O trabalho pode envolver atendimento, processos, gestão, organização comercial, treinamento e implantação.",
  },
  {
    q: "Quando começa o prazo de entrega?",
    a: "O prazo começa após a confirmação do pagamento e o recebimento de todas as informações, materiais e acessos necessários.",
  },
  {
    q: "Quantas alterações estão incluídas?",
    a: "Cada serviço possui um escopo e uma quantidade de revisões definida na proposta ou contratação. Mudanças fora do escopo podem exigir novo orçamento.",
  },
  {
    q: "A Astro garante aumento de vendas?",
    a: "Não é possível garantir um número de vendas, pois o resultado depende de diversos fatores. A Astro se compromete com a execução do escopo contratado, a melhoria dos processos definidos e o acompanhamento dos indicadores acordados.",
  },
  {
    q: "O cliente precisa saber usar tecnologia?",
    a: "Não. As soluções são explicadas de forma simples e adaptadas à capacidade da empresa.",
  },
  {
    q: "Como recebo uma proposta?",
    a: "O primeiro passo é uma conversa inicial ou diagnóstico. Depois disso, a Astro apresenta a solução, o escopo, o prazo e o investimento.",
  },
];

const FAQSection: React.FC = () => {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground text-center mb-12">
            Perguntas <span className="text-accent">frequentes</span>
          </h2>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-muted/40 rounded-xl border border-border px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
