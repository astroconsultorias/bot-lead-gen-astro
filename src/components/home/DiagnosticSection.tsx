import React from "react";
import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  Workflow,
  ClipboardCheck,
  TrendingUp,
  ArrowRight,
  Clock3,
  FileCheck2,
  Search,
} from "lucide-react";

const WA_DIAGNOSTICO =
  "https://wa.me/5551981520555?text=" +
  encodeURIComponent(
    "Olá, quero solicitar o Diagnóstico ASTRO de R$ 690 para minha empresa."
  );

const pilares = [
  { icon: <MessageCircle className="h-5 w-5" />, label: "Atendimento e comunicação" },
  { icon: <Workflow className="h-5 w-5" />, label: "Fluxos e responsabilidades" },
  { icon: <ClipboardCheck className="h-5 w-5" />, label: "Rotinas e controles" },
  { icon: <TrendingUp className="h-5 w-5" />, label: "Indicadores e prioridades" },
];

const facts = [
  {
    icon: <Search className="h-5 w-5" />,
    title: "Análise",
    text: "Reunião de até 60 minutos e análise de até 3 processos críticos",
  },
  {
    icon: <FileCheck2 className="h-5 w-5" />,
    title: "Entrega",
    text: "ASTRO SCORE, gargalos, prioridades e plano de ação objetivo",
  },
  {
    icon: <Clock3 className="h-5 w-5" />,
    title: "Prazo",
    text: "Devolutiva em até 3 dias úteis após o recebimento das informações necessárias",
  },
];

const DiagnosticSection: React.FC = () => {
  return (
    <section id="diagnostico" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto rounded-3xl p-8 md:p-12 bg-gradient-to-br from-secondary to-background border border-accent/25 shadow-elevated">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-block text-xs font-semibold tracking-wider uppercase text-accent mb-3">
              A porta de entrada da Astro
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
              Diagnóstico <span className="text-accent">ASTRO</span>
            </h2>
            <p className="text-xl text-foreground/90 font-medium mb-4">
              Descubra onde sua operação está travando antes de investir na solução errada.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Analisamos os processos mais críticos, separamos sintomas de causas e entregamos uma ordem clara de prioridades para a empresa agir.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-6 mb-8">
            <div className="bg-background/70 rounded-2xl p-6 border border-border">
              <p className="font-semibold mb-4 text-accent uppercase text-xs tracking-wider">
                O que observamos
              </p>
              <ul className="space-y-3">
                {pilares.map((p) => (
                  <li key={p.label} className="flex items-center gap-3 text-foreground/85">
                    <span className="text-accent">{p.icon}</span>
                    <span className="text-sm">{p.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid sm:grid-cols-3 gap-3">
              {facts.map((fact) => (
                <article key={fact.title} className="bg-background/70 rounded-2xl p-5 border border-border">
                  <span className="text-accent">{fact.icon}</span>
                  <h3 className="font-bold text-foreground mt-3 mb-1">{fact.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{fact.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="text-center rounded-2xl border border-accent/30 bg-accent/5 p-6">
            <p className="text-sm uppercase tracking-wider font-semibold text-muted-foreground mb-1">Investimento</p>
            <p className="text-4xl font-bold font-heading text-accent mb-2">R$ 690</p>
            <p className="text-sm text-muted-foreground mb-6">
              Pagamento integral na contratação. Se um projeto de implantação for contratado em até 7 dias, R$ 300 do diagnóstico podem ser abatidos do projeto.
            </p>

            <Button
              size="lg"
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg shadow-gold hover:scale-105 transition-all"
            >
              <a
                href={WA_DIAGNOSTICO}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Solicitar Diagnóstico ASTRO pelo WhatsApp"
                className="flex items-center gap-2"
              >
                Solicitar Diagnóstico ASTRO
                <ArrowRight size={20} />
              </a>
            </Button>
            <p className="text-xs text-muted-foreground mt-4">
              O diagnóstico não obriga a contratação de nenhum outro serviço.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiagnosticSection;
