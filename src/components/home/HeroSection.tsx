import React from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles } from "lucide-react";
import jeanPortrait from "@/assets/jean-cesar-portrait.jpg";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
        
        {/* Golden lines decoration */}
        <div className="absolute top-1/4 left-0 w-32 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        <div className="absolute bottom-1/3 right-0 w-48 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      </div>

      {/* Logo */}
      <div className="absolute top-6 left-6 md:left-10 z-20">
        <div className="bg-background/95 rounded-2xl p-3 md:p-4 shadow-elevated backdrop-blur-sm border border-accent/20">
          <img 
            src="/lovable-uploads/1e21dbc2-5ede-422e-b8fb-5d0c7c77f6ce.png" 
            alt="AstroAtendimento Logo" 
            className="w-14 h-14 md:w-20 md:h-20 object-contain"
          />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-primary-foreground space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full border border-accent/30">
              <Sparkles size={16} className="text-accent" />
              <span className="text-sm font-medium text-accent">Atendimento Humanizado + Tecnologia</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight">
              Negócios que cuidam de pessoas começam com um{" "}
              <span className="text-accent">atendimento humano.</span>
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl leading-relaxed">
              Eu ajudo pequenos negócios a prosperarem unindo técnica, empatia, comunicação e tecnologia acessível.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                asChild 
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg shadow-gold hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <a href="#solucoes">
                  Descobrir Soluções
                </a>
              </Button>
              <Button 
                size="lg" 
                asChild 
                variant="outline" 
                className="border-2 border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 font-semibold backdrop-blur-sm"
              >
                <a 
                  href="https://wa.me/5551981520555?text=Olá%20Jean,%20quero%20transformar%20meu%20negócio!" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle size={20} />
                  Falar com Jean
                </a>
              </Button>
            </div>
          </div>

          {/* Jean Portrait */}
          <div className="hidden lg:flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/30 to-accent/10 rounded-3xl blur-2xl" />
              
              {/* Golden border frame */}
              <div className="relative p-1 rounded-3xl bg-gradient-to-br from-accent via-accent/80 to-accent/60">
                <img
                  src={jeanPortrait}
                  alt="Jean Cesar - Fundador do AstroAtendimento"
                  className="w-full max-w-md h-auto rounded-2xl shadow-2xl object-cover"
                />
              </div>

              {/* Badge */}
              <div className="absolute -bottom-4 -left-4 bg-background/95 backdrop-blur-sm px-5 py-3 rounded-xl shadow-elevated border border-accent/20">
                <p className="text-sm font-semibold text-primary">+20 anos</p>
                <p className="text-xs text-muted-foreground">atendendo pessoas</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;