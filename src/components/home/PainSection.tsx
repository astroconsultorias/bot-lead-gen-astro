import React from "react";
import {
  MessageSquareOff,
  ClipboardX,
  Workflow,
  Globe,
  UserCog,
  Cpu,
} from "lucide-react";

const painPoints = [
  {
    icon: <MessageSquareOff className="h-6 w-6 text-accent" />,
    title: "Clientes sem resposta",
    desc: "Mensagens chegam pelo WhatsApp, Instagram ou Google, mas demoram para ser respondidas ou acabam esquecidas.",
  },
  {
    icon: <ClipboardX className="h-6 w-6 text-accent" />,
    title: "Vendas sem acompanhamento",
    desc: "A empresa conversa com interessados, envia propostas e orçamentos, mas não possui um processo consistente de retorno.",
  },
  {
    icon: <Workflow className="h-6 w-6 text-accent" />,
    title: "Processos desorganizados",
    desc: "As tarefas dependem da memória das pessoas, gerando atrasos, retrabalho e falhas.",
  },
  {
    icon: <Globe className="h-6 w-6 text-accent" />,
    title: "Presença digital fraca",
    desc: "A empresa existe e entrega um bom serviço, mas não transmite confiança ou não é facilmente encontrada na internet.",
  },
  {
    icon: <UserCog className="h-6 w-6 text-accent" />,
    title: "Dono sobrecarregado",
    desc: "O proprietário concentra atendimento, decisões e tarefas operacionais, dificultando o crescimento.",
  },
  {
    icon: <Cpu className="h-6 w-6 text-accent" />,
    title: "Tecnologia mal aproveitada",
    desc: "A empresa possui ferramentas, mas elas não estão integradas à rotina e não resolvem os problemas principais.",
  },
];

const PainSection: React.FC = () => {
  return (
    <section id="problemas" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-6">
            Sua empresa pode estar perdendo oportunidades{" "}
            <span className="text-accent">sem perceber</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Muitos pequenos negócios possuem bons produtos e profissionais competentes, mas enfrentam dificuldades porque o atendimento, os processos e os canais digitais não funcionam de forma integrada.
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
          A Astro analisa o cenário completo antes de recomendar qualquer solução.
        </p>
      </div>
    </section>
  );
};

export default PainSection;
