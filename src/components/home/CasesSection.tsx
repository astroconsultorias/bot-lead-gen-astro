import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CasesSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-6">
            Negócios pequenos não precisam de soluções genéricas.{" "}
            <span className="text-accent">Precisam de soluções certas.</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            A Astro está construindo cases reais de transformação com pequenos negócios que precisam organizar atendimento, melhorar sua presença digital e crescer com mais previsibilidade.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-background rounded-2xl p-6 border border-destructive/20 text-left">
              <p className="text-sm font-semibold text-destructive mb-3">ANTES</p>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Atendimento descentralizado</li>
                <li>• Perda de tempo com tarefas repetitivas</li>
                <li>• Pouca visibilidade sobre resultados</li>
              </ul>
            </div>
            <div className="bg-background rounded-2xl p-6 border border-accent/30 text-left">
              <p className="text-sm font-semibold text-accent mb-3">DEPOIS</p>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Processo mais claro e definido</li>
                <li>• Comunicação organizada</li>
                <li>• Maior controle e previsibilidade</li>
              </ul>
            </div>
          </div>

          <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-gold hover:scale-105 transition-all">
            <a href="#diagnostico" className="flex items-center gap-2">
              Quero ser um dos primeiros cases da Astro
              <ArrowRight size={18} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CasesSection;
