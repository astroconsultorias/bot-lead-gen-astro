import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const WA_HERO =
  "https://wa.me/5551981520555?text=" +
  encodeURIComponent(
    "Olá, conheci a Astro pelo site e gostaria de solicitar um diagnóstico para minha empresa."
  );

const HeroSection: React.FC = () => {
  return (
    <section
      id="top"
      className="relative min-h-[78vh] flex items-center overflow-hidden bg-gradient-to-br from-background via-secondary to-background"
    >
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 py-16">
        <div className="max-w-4xl mx-auto text-center text-foreground space-y-8 animate-fade-in-up">
          <span className="inline-block text-xs md:text-sm font-semibold tracking-wider uppercase text-accent border border-accent/30 rounded-full px-4 py-1.5 bg-accent/5">
            Consultoria prática para pequenos negócios
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight">
            Organizamos sua empresa para ela{" "}
            <span className="text-accent">atender melhor, vender mais e crescer com controle.</span>
          </h1>

          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            A Astro identifica gargalos no atendimento, nos processos, na presença digital e na rotina comercial — e transforma os achados em prioridades claras de implantação.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Button
              size="lg"
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg shadow-gold hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <a
                href={WA_HERO}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Solicitar diagnóstico pelo WhatsApp"
                className="flex items-center gap-2"
              >
                Solicitar diagnóstico
                <ArrowRight size={20} />
              </a>
            </Button>

            <Button
              size="lg"
              asChild
              variant="outline"
              className="border-2 border-foreground/30 bg-foreground/5 text-foreground hover:bg-foreground/10 font-semibold backdrop-blur-sm"
            >
              <a href="#solucoes" aria-label="Ir para as soluções">
                Conhecer as soluções
              </a>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6 text-sm text-foreground/70 pt-2">
            <span className="flex items-center justify-center gap-2"><CheckCircle2 size={16} className="text-accent" /> Linguagem simples</span>
            <span className="flex items-center justify-center gap-2"><CheckCircle2 size={16} className="text-accent" /> Escopo claro</span>
            <span className="flex items-center justify-center gap-2"><CheckCircle2 size={16} className="text-accent" /> Tecnologia com propósito</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
