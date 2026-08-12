import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const WA_DIAG =
  "https://wa.me/5551981520555?text=" +
  encodeURIComponent(
    "Olá, conheci a Astro pelo site e gostaria de solicitar o Diagnóstico ASTRO para minha empresa."
  );

const CtaSection: React.FC = () => {
  return (
    <section id="contato" className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-br from-background via-secondary to-background">
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-10 right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-6 leading-tight">
            Você não precisa começar comprando{" "}
            <span className="text-accent">uma ferramenta.</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 mb-4 max-w-2xl mx-auto leading-relaxed">
            Primeiro descubra onde está o problema.
          </p>
          <p className="text-base text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            O Diagnóstico ASTRO mostra os principais gargalos da sua operação, organiza prioridades e entrega um plano de ação objetivo por R$ 690.
          </p>

          <Button
            size="lg"
            asChild
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-6 text-lg shadow-gold hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <a
              href={WA_DIAG}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Solicitar Diagnóstico ASTRO pelo WhatsApp"
              className="flex items-center gap-2"
            >
              Solicitar Diagnóstico ASTRO
              <ArrowRight size={22} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
