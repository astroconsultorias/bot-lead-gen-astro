import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "A Astro atende somente clínicas?",
    a: "Não. Clínicas e consultórios são um foco comercial inicial porque concentram problemas de atendimento, agenda, equipe e processos. A Astro também atende outros negócios de serviços quando existe uma operação que precisa de mais organização e controle.",
  },
  {
    q: "O Diagnóstico ASTRO me obriga a contratar outro serviço?",
    a: "Não. O Diagnóstico ASTRO custa R$ 690 e entrega a análise, o ASTRO SCORE, os principais gargalos, as prioridades e um plano de ação. A contratação de uma implantação posterior é opcional.",
  },
  {
    q: "Vocês vendem software ou automação?",
    a: "Não como ponto de partida. A tecnologia é uma ferramenta. Primeiro identificamos o problema e organizamos o processo; depois indicamos site, Google, automação, inteligência artificial ou outra tecnologia somente quando fizer sentido.",
  },
  {
    q: "Quanto custa um projeto de implantação?",
    a: "A Implantação de Atendimento custa R$ 2.800 no escopo-base e a Organização de Processos parte de R$ 3.200. Projetos de tecnologia e estruturas maiores variam conforme a complexidade e têm o valor apresentado antes do início.",
  },
  {
    q: "O trabalho pode ser realizado remotamente?",
    a: "Sim, quando o processo puder ser analisado adequadamente a distância. Quando a observação presencial for importante, a forma de atendimento é combinada antes da contratação.",
  },
  {
    q: "A Astro garante aumento de vendas ou faturamento?",
    a: "Não. Resultados comerciais dependem de diversos fatores. A Astro se compromete com o diagnóstico, a implantação do escopo contratado e a melhoria dos processos e controles definidos no projeto.",
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
