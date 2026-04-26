import React from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight } from "lucide-react";

const CtaSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-br from-background via-secondary to-background">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-foreground mb-6">
            Se o seu negócio está perdendo clientes por falta de estrutura,{" "}
            <span className="text-accent">a hora de organizar é agora.</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-2xl mx-auto">
            A Astro Consultoria ajuda pequenos negócios a ganhar clareza, profissionalismo e capacidade de crescimento com mais controle.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-10 py-7 text-xl shadow-gold hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <a href="#diagnostico" className="flex items-center gap-3">
                Quero organizar meu negócio
                <ArrowRight size={24} />
              </a>
            </Button>
            <Button
              size="lg"
              asChild
              variant="outline"
              className="border-2 border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 font-semibold"
            >
              <a
                href="https://wa.me/5551981520555?text=Olá,%20quero%20saber%20mais%20sobre%20a%20Astro%20Consultoria!"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle size={20} />
                Chamar no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
