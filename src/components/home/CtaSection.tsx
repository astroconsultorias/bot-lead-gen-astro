import React from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";

const WA_DIAG =
  "https://wa.me/5551981520555?text=" +
  encodeURIComponent(
    "Olá, conheci a Astro pelo site e gostaria de solicitar um diagnóstico para minha empresa."
  );

const WA_GERAL =
  "https://wa.me/5551981520555?text=" +
  encodeURIComponent("Olá, gostaria de falar com a Astro Consultoria.");

const CtaSection: React.FC = () => {
  return (
    <section id="contato" className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-br from-background via-secondary to-background">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-6 leading-tight">
            Sua empresa não precisa continuar funcionando{" "}
            <span className="text-accent">no improviso.</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Converse com a Astro e descubra quais ajustes podem melhorar o atendimento, os processos, a presença digital e a rotina comercial do seu negócio.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-8 py-6 text-lg shadow-gold hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <a
                href={WA_DIAG}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Solicitar diagnóstico pelo WhatsApp"
                className="flex items-center gap-2"
              >
                Solicitar diagnóstico
                <ArrowRight size={22} />
              </a>
            </Button>
            <Button
              size="lg"
              asChild
              variant="outline"
              className="border-2 border-foreground/30 bg-foreground/5 text-foreground hover:bg-foreground/10 font-semibold"
            >
              <a
                href={WA_GERAL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar pelo WhatsApp"
                className="flex items-center gap-2"
              >
                <MessageCircle size={20} />
                Falar pelo WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
