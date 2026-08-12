import React from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Briefcase, Users } from "lucide-react";

const WA_DIAGNOSTICO =
  "https://wa.me/5551981520555?text=" +
  encodeURIComponent(
    "Olá, quero entender se o Diagnóstico ASTRO faz sentido para minha empresa."
  );

const perfis = [
  {
    icon: <MessageCircle className="h-6 w-6 text-accent" />,
    title: "Clínicas e consultórios",
    text: "Negócios em que agenda, recepção, WhatsApp, retornos e comunicação entre equipe precisam funcionar como um sistema.",
  },
  {
    icon: <Briefcase className="h-6 w-6 text-accent" />,
    title: "Empresas de serviços",
    text: "Operações que dependem de atendimento, orçamento, acompanhamento de clientes e execução coordenada entre pessoas.",
  },
  {
    icon: <Users className="h-6 w-6 text-accent" />,
    title: "Equipes em crescimento",
    text: "Empresas que já possuem demanda, mas começaram a sentir retrabalho, falta de padrão e dependência excessiva do gestor.",
  },
];

const TargetAudienceSection: React.FC = () => {
  return (
    <section id="consultoria" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-block text-xs font-semibold tracking-wider uppercase text-accent mb-3">
            Para quem a Astro faz mais sentido
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
            Empresas que cresceram mais rápido do que{" "}
            <span className="text-accent">seus processos</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Nosso foco comercial inicial são clínicas, consultórios e negócios de serviços. A Astro não atende somente esses segmentos: o ponto central é existir uma operação que precise de mais clareza, padrão e controle.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
          {perfis.map((p) => (
            <article
              key={p.title}
              className="bg-muted/40 p-7 rounded-2xl border border-border hover-lift"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                {p.icon}
              </div>
              <h3 className="text-xl font-bold font-heading text-foreground mb-3">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {p.text}
              </p>
            </article>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-gold hover:scale-105 transition-all"
          >
            <a
              href={WA_DIAGNOSTICO}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Solicitar Diagnóstico ASTRO pelo WhatsApp"
            >
              Avaliar minha empresa
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
