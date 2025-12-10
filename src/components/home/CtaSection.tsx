import React from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Sparkles } from "lucide-react";

const CtaSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/95">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        
        {/* Golden lines */}
        <div className="absolute top-1/3 left-0 w-48 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        <div className="absolute bottom-1/4 right-0 w-64 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full border border-accent/30 mb-8">
            <Sparkles size={16} className="text-accent" />
            <span className="text-sm font-medium text-accent">Transforme seu negócio agora</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-primary-foreground mb-6">
            Pronto para transformar seu negócio e sua{" "}
            <span className="text-accent">realidade?</span>
          </h2>

          <p className="text-lg md:text-xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto">
            Agende uma conversa com Jean e descubra como unir atendimento humano + tecnologia para fazer seu negócio crescer.
          </p>

          <Button
            size="lg"
            asChild
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-12 py-8 text-xl shadow-gold hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <a 
              href="https://wa.me/5551981520555?text=Olá%20Jean,%20quero%20transformar%20meu%20negócio!"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <MessageCircle size={28} />
              Falar com Jean no WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;