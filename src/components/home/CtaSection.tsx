
import React from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const CtaSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-primary via-primary to-accent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-white mb-6">
            Pronto para transformar seu atendimento?
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Agende uma conversa com Jean e descubra como unir técnica, empatia e tecnologia para multiplicar seus resultados.
          </p>

          <Button
            size="lg"
            asChild
            className="bg-accent hover:bg-accent/90 text-primary font-bold px-12 py-8 text-xl shadow-2xl hover:shadow-accent/50 transition-all duration-300 hover:scale-105"
          >
            <a 
              href="https://wa.me/5551999999999?text=Olá%20Jean,%20quero%20transformar%20meu%20atendimento!"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3"
            >
              <MessageSquare size={28} />
              Falar com Jean Agora
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
