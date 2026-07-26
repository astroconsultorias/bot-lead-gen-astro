import React from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Workflow, Briefcase, Cpu } from "lucide-react";

const WA_CONSULTORIA =
  "https://wa.me/5551981520555?text=" +
  encodeURIComponent(
    "Olá, gostaria de conversar sobre um projeto consultivo para minha empresa."
  );

const areas = [
  {
    icon: <MessageCircle className="h-6 w-6 text-accent" />,
    title: "Atendimento",
    items: [
      "Organização dos canais",
      "Padrões de resposta",
      "Fluxo de atendimento e triagem",
      "Acompanhamento e experiência do cliente",
    ],
  },
  {
    icon: <Workflow className="h-6 w-6 text-accent" />,
    title: "Processos",
    items: [
      "Mapeamento de rotinas",
      "Identificação de gargalos",
      "Redução de retrabalho",
      "Definição de responsabilidades e procedimentos",
    ],
  },
  {
    icon: <Briefcase className="h-6 w-6 text-accent" />,
    title: "Comercial",
    items: [
      "Organização do funil",
      "Controle de leads e follow-up",
      "Propostas e indicadores",
      "Rotina de vendas",
    ],
  },
  {
    icon: <Cpu className="h-6 w-6 text-accent" />,
    title: "Tecnologia e automação",
    items: [
      "WhatsApp Business e CRM",
      "Planilhas, formulários e automações",
      "Inteligência artificial aplicada",
      "Integrações adequadas à realidade da empresa",
    ],
  },
];

const TargetAudienceSection: React.FC = () => {
  return (
    <section id="consultoria" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
            Quando o problema é maior do que{" "}
            <span className="text-accent">uma página ou ferramenta</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Alguns problemas exigem uma análise mais profunda da operação. Nesses casos, a Astro desenvolve projetos consultivos personalizados.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-10">
          {areas.map((a, i) => (
            <div
              key={i}
              className="bg-muted/40 p-6 rounded-2xl border border-border hover-lift"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  {a.icon}
                </div>
                <h3 className="text-xl font-bold font-heading text-foreground">
                  {a.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {a.items.map((it, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-accent mt-1">•</span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-muted-foreground italic mb-6 leading-relaxed">
            Projetos personalizados são avaliados após diagnóstico. O prazo, o escopo e o investimento são definidos conforme a necessidade da empresa.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-gold hover:scale-105 transition-all"
          >
            <a
              href={WA_CONSULTORIA}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Conversar sobre minha empresa pelo WhatsApp"
            >
              Conversar sobre minha empresa
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
