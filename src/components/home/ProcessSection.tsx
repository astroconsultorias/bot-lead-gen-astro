import React from "react";
import { MessageCircle, Search, ClipboardList, Wrench, TrendingUp } from "lucide-react";

const journey = [
  {
    icon: <MessageCircle className="h-5 w-5" />,
    title: "Conversa inicial",
    desc: "Entendemos o negócio, a necessidade e o resultado esperado.",
  },
  {
    icon: <Search className="h-5 w-5" />,
    title: "Diagnóstico",
    desc: "Analisamos gargalos, riscos e oportunidades prioritárias.",
  },
  {
    icon: <ClipboardList className="h-5 w-5" />,
    title: "Plano de ação",
    desc: "Definimos escopo, responsáveis, prazo e próximos passos.",
  },
  {
    icon: <Wrench className="h-5 w-5" />,
    title: "Implantação",
    desc: "Executamos as melhorias aprovadas e orientamos a nova rotina.",
  },
  {
    icon: <TrendingUp className="h-5 w-5" />,
    title: "Acompanhamento",
    desc: "Validamos a entrega, medimos e indicamos a evolução.",
  },
];

const method = ["Diagnosticar", "Mapear", "Priorizar", "Organizar", "Implantar", "Mensurar", "Evoluir"];

const ProcessSection: React.FC = () => {
  return (
    <section id="metodo" className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block text-xs font-semibold tracking-wider uppercase text-accent mb-3">
            Método ASTRO
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
            Do problema à implantação,{" "}
            <span className="text-accent">sem complicação</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Uma jornada consultiva curta, com decisões claras e tecnologia aplicada somente quando faz sentido.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 max-w-6xl mx-auto mb-10">
          {journey.map((step, index) => (
            <article key={step.title} className="relative bg-background p-5 rounded-2xl border border-border">
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

        <div className="max-w-5xl mx-auto rounded-2xl border border-accent/25 bg-accent/5 p-5">
          <p className="text-center text-xs font-semibold tracking-wider uppercase text-accent mb-4">
            A lógica do método
          </p>
          <div className="flex flex-wrap justify-center items-center gap-2">
            {method.map((item, index) => (
              <React.Fragment key={item}>
                <span className="px-3 py-2 rounded-full bg-background border border-border text-sm font-medium text-foreground">
                  {item}
                </span>
                {index < method.length - 1 && <span className="text-accent" aria-hidden="true">→</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
