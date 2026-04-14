import React from "react";
import { Button } from "@/components/ui/button";

const steps = [
  { num: "1", title: "Diagnóstico", desc: "Entendemos o cenário atual, identificamos gargalos e mapeamos onde o negócio está perdendo eficiência e oportunidades." },
  { num: "2", title: "Plano de ação", desc: "Definimos o que precisa ser ajustado, corrigido ou construído para melhorar sua estrutura e sua capacidade de conversão." },
  { num: "3", title: "Implementação", desc: "Executamos a solução com foco prático, seja uma landing page, um novo fluxo de atendimento ou uma estrutura de operação mais organizada." },
  { num: "4", title: "Acompanhamento", desc: "Ajustamos o que for necessário e garantimos que o novo modelo esteja funcionando de forma mais consistente e sustentável." },
];

const ProcessSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground text-center mb-16">
          Um processo simples, direto e orientado a <span className="text-accent">resultado</span>
        </h2>

        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-12">
          {steps.map((s, i) => (
            <div key={i} className="text-center relative">
              <div className="w-14 h-14 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xl font-bold font-heading mx-auto mb-4">
                {s.num}
              </div>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-7 left-[60%] w-[80%] h-px bg-accent/30" />
              )}
              <h3 className="text-lg font-bold font-heading text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-gold hover:scale-105 transition-all">
            <a href="#diagnostico">Solicitar meu diagnóstico</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
