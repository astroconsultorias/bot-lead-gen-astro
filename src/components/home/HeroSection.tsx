import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const WA_HERO =
  "https://wa.me/5551981520555?text=" +
  encodeURIComponent(
    "Olá, conheci a Astro pelo site e gostaria de solicitar um diagnóstico para minha empresa."
  );

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-background via-secondary to-background">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/4 left-0 w-32 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        <div className="absolute bottom-1/3 right-0 w-48 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      </div>

      <div className="absolute top-20 left-6 md:left-10 z-20">
        <img
          src="/lovable-uploads/1e21dbc2-5ede-422e-b8fb-5d0c7c77f6ce.png"
          alt="Astro Consultoria"
          className="w-14 h-14 md:w-20 md:h-20 object-contain drop-shadow-[0_0_15px_hsl(var(--accent)/0.4)]"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-foreground space-y-8 animate-fade-in-up">
          <span className="inline-block text-xs md:text-sm font-semibold tracking-wider uppercase text-accent border border-accent/30 rounded-full px-4 py-1.5 bg-accent/5">
            Consultoria prática para pequenos negócios
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight">
            Organizamos sua empresa para ela{" "}
            <span className="text-accent">atender melhor, vender mais e crescer com controle.</span>
          </h1>

          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            A Astro identifica gargalos no atendimento, nos processos, na presença digital e na rotina comercial. Depois, transforma os problemas encontrados em um plano claro de melhoria e implantação.
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

          <p className="text-sm md:text-base text-foreground/70 pt-2 max-w-xl mx-auto">
            Atendimento consultivo, soluções práticas e tecnologia aplicada à realidade da sua empresa.
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
