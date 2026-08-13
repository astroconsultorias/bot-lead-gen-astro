import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const WA_HERO =
  "https://wa.me/5551981520555?text=" +
  encodeURIComponent(
    "Olá, conheci a Astro pelo site e gostaria de solicitar o Diagnóstico ASTRO para minha empresa."
  );

const HeroSection: React.FC = () => {
  return (
    <section
      id="top"
      className="astro-hero relative min-h-[85svh] flex items-center overflow-hidden"
    >
      <div className="astro-hero-space absolute inset-0" aria-hidden="true">
        <div className="astro-stars astro-stars-a" />
        <div className="astro-stars astro-stars-b" />
        <div className="astro-nebula astro-nebula-a" />
        <div className="astro-nebula astro-nebula-b" />
        <div className="astro-orbit-wrap">
          <div className="astro-orbit astro-orbit-one" />
          <div className="astro-orbit astro-orbit-two" />
          <div className="astro-orbit-core" />
        </div>
        <div className="astro-hero-overlay" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 py-20 md:py-24">
        <div className="max-w-4xl mx-auto text-center text-foreground space-y-8 animate-fade-in-up">
          <span className="inline-block text-xs md:text-sm font-semibold tracking-wider uppercase text-accent border border-accent/30 rounded-full px-4 py-1.5 bg-background/30 backdrop-blur-md shadow-soft">
            Consultoria operacional para pequenas empresas
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight drop-shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
            Sua empresa cresceu. Seus processos{" "}
            <span className="text-accent astro-text-glow">acompanharam?</span>
          </h1>

          <p className="text-lg md:text-xl text-foreground/85 max-w-3xl mx-auto leading-relaxed">
            A Astro identifica gargalos em atendimento, processos e operação e ajuda sua empresa a transformar improviso, retrabalho e falta de controle em uma rotina mais organizada.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Button
              size="lg"
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg shadow-gold hover:shadow-xl transition-all duration-300 hover:scale-[1.03]"
            >
              <a
                href={WA_HERO}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Solicitar Diagnóstico ASTRO pelo WhatsApp"
                className="flex items-center gap-2"
              >
                Solicitar Diagnóstico ASTRO
                <ArrowRight size={20} />
              </a>
            </Button>

            <Button
              size="lg"
              asChild
              variant="outline"
              className="border-2 border-foreground/25 bg-background/20 text-foreground hover:bg-background/35 font-semibold backdrop-blur-md"
            >
              <a href="#metodo" aria-label="Entender como a Astro trabalha">
                Como funciona
              </a>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6 text-sm text-foreground/70 pt-2">
            <span className="flex items-center justify-center gap-2"><CheckCircle2 size={16} className="text-accent" /> Diagnóstico antes da solução</span>
            <span className="flex items-center justify-center gap-2"><CheckCircle2 size={16} className="text-accent" /> Processos claros</span>
            <span className="flex items-center justify-center gap-2"><CheckCircle2 size={16} className="text-accent" /> Tecnologia com propósito</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
