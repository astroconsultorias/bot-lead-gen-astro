import React from "react";

const steps = [
  { num: "1", title: "Diagnosticar", desc: "Compreender a empresa, os problemas e os resultados desejados." },
  { num: "2", title: "Mapear", desc: "Visualizar processos, canais, responsabilidades e gargalos." },
  { num: "3", title: "Priorizar", desc: "Identificar o que precisa ser resolvido primeiro." },
  { num: "4", title: "Organizar", desc: "Definir fluxos, regras, responsáveis e ferramentas." },
  { num: "5", title: "Implantar", desc: "Colocar as mudanças em funcionamento." },
  { num: "6", title: "Treinar", desc: "Orientar as pessoas envolvidas na nova rotina." },
  { num: "7", title: "Mensurar", desc: "Acompanhar indicadores e resultados." },
  { num: "8", title: "Evoluir", desc: "Corrigir falhas e melhorar continuamente." },
];

const ProcessSection: React.FC = () => {
  return (
    <section id="metodo" className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-block text-xs font-semibold tracking-wider uppercase text-accent mb-3">
            Método ASTRO
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground">
            Um método para transformar problemas em{" "}
            <span className="text-accent">ações práticas</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-10">
          {steps.map((s, i) => (
            <div
              key={i}
              className="relative bg-background p-6 rounded-2xl border border-border hover-lift"
            >
              <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-lg font-bold font-heading mb-4">
                {s.num}
              </div>
              <h3 className="text-lg font-bold font-heading text-foreground mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-foreground/80 max-w-2xl mx-auto italic leading-relaxed">
          Não entregamos apenas uma recomendação. Quando contratado, o trabalho pode incluir organização, implantação, treinamento e acompanhamento.
        </p>
      </div>
    </section>
  );
};

export default ProcessSection;
