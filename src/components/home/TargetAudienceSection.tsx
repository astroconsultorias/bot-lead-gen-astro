import React from "react";
import { Check } from "lucide-react";

const targets = [
  "Escritórios de advocacia",
  "Clínicas e profissionais da saúde",
  "Prestadores de serviço",
  "Micro e pequenas empresas",
  "Negócios locais que atendem pelo WhatsApp",
  "Empresas que precisam vender melhor sem depender só de indicação",
];

const TargetAudienceSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-6 text-center">
            A Astro foi feita para pequenos negócios que querem crescer{" "}
            <span className="text-accent">sem viver no improviso.</span>
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-10 leading-relaxed">
            Ajudamos empresas que já têm potencial, mas ainda operam com excesso de improviso, retrabalho e pouca previsibilidade.
          </p>

          <div className="bg-background rounded-2xl p-8 shadow-soft border border-border">
            <p className="font-semibold text-foreground mb-6">A Astro Consultoria é ideal para:</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {targets.map((t, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{t}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-center text-muted-foreground mt-8 text-lg leading-relaxed">
            Se o seu negócio já funciona, mas parece travado, confuso ou dependente demais de você, <strong className="text-foreground">a Astro pode ajudar.</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
