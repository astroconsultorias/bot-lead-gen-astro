import React from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-background via-secondary to-background">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/4 left-0 w-32 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        <div className="absolute bottom-1/3 right-0 w-48 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      </div>

      <div className="absolute top-6 left-6 md:left-10 z-20">
        <div className="bg-background/95 rounded-2xl p-3 md:p-4 shadow-elevated backdrop-blur-sm border border-accent/20">
          <img
            src="/lovable-uploads/1e21dbc2-5ede-422e-b8fb-5d0c7c77f6ce.png"
            alt="Astro Consultoria Logo"
            className="w-14 h-14 md:w-20 md:h-20 object-contain"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center text-primary-foreground space-y-8 animate-fade-in-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight">
            Seu negócio não precisa de mais clientes. Precisa de{" "}
            <span className="text-accent">estrutura para converter.</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
            A Astro Consultoria organiza atendimento, operação e presença digital para transformar interesse em cliente, reduzir o caos e criar crescimento com mais controle.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg shadow-gold hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <a href="#diagnostico" className="flex items-center gap-2">
                Solicitar diagnóstico
                <ArrowRight size={20} />
              </a>
            </Button>
            <Button
              size="lg"
              asChild
              variant="outline"
              className="border-2 border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 font-semibold backdrop-blur-sm"
            >
              <a
                href="https://wa.me/5551981520555?text=Olá,%20quero%20saber%20mais%20sobre%20a%20Astro%20Consultoria!"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle size={20} />
                Falar no WhatsApp
              </a>
            </Button>
          </div>
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
