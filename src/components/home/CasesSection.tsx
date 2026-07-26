import React from "react";

const steps = [
  {
    num: "1",
    title: "Conversa inicial",
    desc: "Entendemos brevemente o negócio e a necessidade.",
  },
  {
    num: "2",
    title: "Diagnóstico",
    desc: "Analisamos o cenário, os gargalos e as prioridades.",
  },
  {
    num: "3",
    title: "Recomendação",
    desc: "Apresentamos a solução mais adequada, com escopo claro.",
  },
  {
    num: "4",
    title: "Implantação",
    desc: "Executamos as etapas aprovadas e acompanhamos o projeto.",
  },
  {
    num: "5",
    title: "Entrega e evolução",
    desc: "Validamos o resultado, entregamos as orientações e indicamos os próximos passos.",
  },
];

const CasesSection: React.FC = () => {
  return (
    <section id="como-funciona" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground">
            Como <span className="text-accent">começamos</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-4 mb-10">
          {steps.map((s, i) => (
            <div
              key={i}
              className="flex gap-5 items-start bg-muted/40 p-6 rounded-2xl border border-border"
            >
              <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-lg font-bold font-heading shrink-0">
                {s.num}
              </div>
              <div>
                <h3 className="text-lg font-bold font-heading text-foreground mb-1">
                  {s.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto bg-accent/10 border border-accent/30 rounded-2xl p-6 text-center">
          <p className="text-foreground font-semibold">
            A Astro não recomenda ferramentas antes de entender o problema.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
