import React from "react";
import { Button } from "@/components/ui/button";
import {
  Building2, Users, MessageCircle, Workflow, ClipboardCheck, Cpu,
  TrendingUp, ArrowRight, Clock3, FileCheck2, ShieldCheck, MessagesSquare
} from "lucide-react";

const WA_RAIOX =
  "https://wa.me/5551981520555?text=" +
  encodeURIComponent(
    "Olá, quero entender melhor como funciona o Raio-X Empresarial ASTRO para minha empresa."
  );

const pilares = [
  { icon: <Building2 className="h-5 w-5" />, label: "Empresa e modelo de negócio" },
  { icon: <Users className="h-5 w-5" />, label: "Clientes e aquisição" },
  { icon: <MessageCircle className="h-5 w-5" />, label: "Atendimento" },
  { icon: <Workflow className="h-5 w-5" />, label: "Processos" },
  { icon: <ClipboardCheck className="h-5 w-5" />, label: "Gestão" },
  { icon: <Cpu className="h-5 w-5" />, label: "Tecnologia" },
  { icon: <TrendingUp className="h-5 w-5" />, label: "Crescimento" },
];

const facts = [
  { icon: <MessagesSquare className="h-5 w-5" />, title: "Formato", text: "Conversa consultiva e análise das informações da empresa" },
  { icon: <FileCheck2 className="h-5 w-5" />, title: "Entrega", text: "Diagnóstico, prioridades e plano inicial de ação" },
  { icon: <Clock3 className="h-5 w-5" />, title: "Prazo", text: "Definido antes da contratação, conforme a profundidade necessária" },
  { icon: <ShieldCheck className="h-5 w-5" />, title: "Transparência", text: "Escopo e investimento apresentados antes do início" },
];

const DiagnosticSection: React.FC = () => {
  return (
    <section id="diagnostico" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto rounded-3xl p-8 md:p-12 bg-gradient-to-br from-secondary to-background border border-accent/25 shadow-elevated">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-block text-xs font-semibold tracking-wider uppercase text-accent mb-3">
              Produto de entrada
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
              Raio-X Empresarial <span className="text-accent">ASTRO</span>
            </h2>
            <p className="text-xl text-foreground/90 font-medium mb-4">
              Descubra onde sua empresa perde tempo, clientes e oportunidades.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Um diagnóstico consultivo para identificar gargalos, organizar prioridades e evitar a contratação de ferramentas que não resolvem o problema principal.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-background/70 rounded-2xl p-6 border border-border">
              <p className="font-semibold mb-4 text-accent uppercase text-xs tracking-wider">
                Áreas avaliadas
              </p>
              <ul className="grid sm:grid-cols-2 gap-3">
                {pilares.map((p) => (
                  <li key={p.label} className="flex items-center gap-3 text-foreground/85">
                    <span className="text-accent">{p.icon}</span>
                    <span className="text-sm">{p.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {facts.map((fact) => (
                <article key={fact.title} className="bg-background/70 rounded-2xl p-5 border border-border">
                  <span className="text-accent">{fact.icon}</span>
                  <h3 className="font-bold text-foreground mt-3 mb-1">{fact.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{fact.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg shadow-gold hover:scale-105 transition-all"
            >
              <a
                href={WA_RAIOX}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Solicitar informações sobre o Raio-X Empresarial ASTRO pelo WhatsApp"
                className="flex items-center gap-2"
              >
                Entender como funciona
                <ArrowRight size={20} />
              </a>
            </Button>
            <p className="text-xs text-muted-foreground mt-4">
              O Raio-X é um diagnóstico consultivo — não é auditoria, certificação ou garantia de resultados.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiagnosticSection;
