import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Para quem a Astro Consultoria é indicada?",
    a: "Para micro e pequenos negócios que precisam melhorar atendimento, organização, presença digital e conversão de clientes. É especialmente útil para empresas de serviços, advocacia, saúde e negócios locais.",
  },
  {
    q: "Eu preciso já ter equipe para contratar?",
    a: "Não. A Astro também ajuda negócios pequenos, inclusive aqueles em que o próprio dono concentra grande parte da operação.",
  },
  {
    q: "Vocês fazem só landing page ou também ajudam na estrutura do negócio?",
    a: "Os dois. A landing page pode ser um produto de entrada, mas o diferencial da Astro está em integrar estrutura, atendimento e presença digital de forma estratégica.",
  },
  {
    q: "Quanto tempo leva para começar a ver resultado?",
    a: "Depende do tipo de projeto, mas em muitos casos os primeiros ganhos de clareza, organização e posicionamento já aparecem nas primeiras etapas da implementação.",
  },
  {
    q: "Como funciona o diagnóstico?",
    a: "O diagnóstico é uma conversa estruturada para entender como o negócio funciona hoje, identificar gargalos e apontar prioridades. A partir disso, a Astro recomenda a melhor solução.",
  },
];

const FAQSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground text-center mb-12">
            Perguntas <span className="text-accent">frequentes</span>
          </h2>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-background rounded-xl border border-border px-6">
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
