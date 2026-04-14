import React from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Clock, Users, Eye, Smartphone, UserCog } from "lucide-react";

const painPoints = [
  { icon: <AlertTriangle className="h-5 w-5 text-accent" />, text: "Atendimento desorganizado" },
  { icon: <Clock className="h-5 w-5 text-accent" />, text: "Falta de processo" },
  { icon: <Users className="h-5 w-5 text-accent" />, text: "Clientes que entram em contato e não avançam" },
  { icon: <Eye className="h-5 w-5 text-accent" />, text: "Ausência de controle sobre o que está acontecendo" },
  { icon: <Smartphone className="h-5 w-5 text-accent" />, text: "Presença digital que não ajuda a vender" },
  { icon: <UserCog className="h-5 w-5 text-accent" />, text: "Dependência excessiva do dono para tudo funcionar" },
];

const PainSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-6">
            O problema não é falta de esforço.{" "}
            <span className="text-accent">É falta de estrutura.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Muitos pequenos negócios trabalham muito, atendem o dia inteiro, respondem mensagens, correm atrás de clientes e, mesmo assim, continuam sem crescer como poderiam.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mt-4">
            O que trava o crescimento quase nunca é a qualidade do serviço. Na maioria das vezes, o problema está em outro lugar:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
          {painPoints.map((point, i) => (
            <div key={i} className="flex items-center gap-3 bg-muted/50 p-4 rounded-xl border border-border hover-lift">
              {point.icon}
              <span className="text-foreground font-medium text-sm">{point.text}</span>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          Quando isso acontece, o negócio perde tempo, perde eficiência e perde clientes sem perceber.
        </p>

        <div className="text-center">
          <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-gold hover:scale-105 transition-all">
            <a href="#diagnostico">Quero entender onde estou perdendo clientes</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PainSection;
