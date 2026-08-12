import React from "react";
import {
  MessageSquareOff,
  ClipboardX,
  Workflow,
  CalendarClock,
  UserCog,
  TrendingUp,
} from "lucide-react";

const painPoints = [
  {
    icon: <MessageSquareOff className="h-6 w-6 text-accent" />,
    title: "Clientes esperando resposta",
    desc: "Mensagens chegam pelo WhatsApp e outros canais, mas a equipe demora, perde contexto ou deixa contatos sem retorno.",
  },
  {
    icon: <ClipboardX className="h-6 w-6 text-accent" />,
    title: "Orçamentos sem acompanhamento",
    desc: "Propostas são enviadas, mas não existe uma rotina clara para acompanhar quem ainda não decidiu.",
  },
  {
    icon: <Workflow className="h-6 w-6 text-accent" />,
    title: "Processos dependentes da memória",
    desc: "Cada pessoa executa de um jeito e tarefas importantes dependem de lembrar, perguntar ou improvisar.",
  },
  {
    icon: <CalendarClock className="h-6 w-6 text-accent" />,
    title: "Agenda e informações desencontradas",
    desc: "Horários, retornos, solicitações e informações ficam espalhados, gerando retrabalho e falhas de comunicação.",
  },
  {
    icon: <UserCog className="h-6 w-6 text-accent" />,
    title: "Gestor apagando incêndios",
    desc: "O proprietário ou gestor concentra decisões e resolve problemas operacionais que deveriam ter um processo definido.",
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-accent" />,
    title: "Pouca visibilidade da operação",
    desc: "A empresa trabalha muito, mas não consegue enxergar com clareza onde estão os atrasos, perdas e prioridades.",
  },
];

const PainSection: React.FC = () => {
  return (
    <section id="problemas" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-6">
            Algum destes problemas acontece{" "}
            <span className="text-accent">na sua empresa?</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Muitas empresas não precisam de mais uma ferramenta. Precisam descobrir onde a operação está falhando e organizar o que já existe.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto mb-10">
          {painPoints.map((point, i) => (
            <div
              key={i}
              className="bg-muted/40 p-6 rounded-2xl border border-border hover-lift"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                {point.icon}
              </div>
              <h3 className="text-lg font-bold font-heading text-foreground mb-2">
                {point.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {point.desc}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-foreground/80 font-medium max-w-2xl mx-auto">
          Primeiro entendemos o problema. Depois recomendamos a intervenção necessária.
        </p>
      </div>
    </section>
  );
};

export default PainSection;
