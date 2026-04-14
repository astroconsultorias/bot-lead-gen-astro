import React from "react";
import { TrendingUp } from "lucide-react";

const results = [
  "Redução de retrabalho",
  "Mais controle sobre atendimentos e contatos",
  "Mais clareza no processo comercial",
  "Aumento da produtividade",
  "Melhora na experiência do cliente",
  "Mais profissionalismo na percepção da marca",
  "Maior capacidade de crescimento com segurança",
];

const ResultsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground text-center mb-6">
            O que muda quando seu negócio ganha <span className="text-accent">estrutura</span>
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 leading-relaxed">
            Quando a operação fica mais clara e a presença digital começa a trabalhar a favor da empresa, os resultados aparecem em várias frentes.
          </p>

          <div className="space-y-3">
            {results.map((r, i) => (
              <div key={i} className="flex items-center gap-4 bg-muted/50 p-4 rounded-xl border border-border">
                <TrendingUp className="h-5 w-5 text-accent shrink-0" />
                <span className="text-foreground font-medium">{r}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-accent/10 border border-accent/20 rounded-2xl p-6 text-center">
            <p className="text-foreground font-semibold text-lg">
              Estrutura não é burocracia. Estrutura é o que permite crescer sem perder o controle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
