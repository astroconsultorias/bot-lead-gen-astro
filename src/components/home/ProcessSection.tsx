import React from "react";
import { Search, ClipboardList, Wrench, TrendingUp } from "lucide-react";

const journey = [
  {
    icon: <Search className="h-5 w-5" />,
    title: "Diagnosticar",
    desc: "Entendemos a operação e identificamos onde estão os gargalos mais relevantes.",
  },
  {
    icon: <ClipboardList className="h-5 w-5" />,
    title: "Priorizar",
    desc: "Separamos sintomas de causas e definimos o que precisa ser corrigido primeiro.",
  },
  {
    icon: <Wrench className="h-5 w-5" />,
    title: "Implantar",
    desc: "Estruturamos a solução aprovada e orientamos a nova rotina da equipe.",
  },
  {
    icon: <TrendingUp className="h-5 w-5" />,
    title: "Medir",
    desc: "Acompanhamos os indicadores definidos e verificamos se a mudança está funcionando.",
  },
];

const ProcessSection: React.FC = () => {
  return (
    <section id="metodo" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block text-xs font-semibold tracking-wider uppercase text-accent mb-3">
            Como trabalhamos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
            Primeiro entendemos. <span className="text-accent">Depois corrigimos.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Uma sequência simples para evitar soluções caras aplicadas ao problema errado.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {journey.map((step, index) => (
            <article key={step.title} className="relative bg-background p-6 rounded-2xl border border-border">
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                  {step.icon}
                </div>
                <span className="text-xs font-bold text-muted-foreground">0{index + 1}</span>
              </div>
              <h3 className="text-lg font-bold font-heading text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
