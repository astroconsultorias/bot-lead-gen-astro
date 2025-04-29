
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
  return (
    <section 
      className="relative text-white py-32 lg:py-48 overflow-hidden"
      style={{ 
        backgroundImage: "linear-gradient(to bottom, rgba(30, 58, 138, 0.85), rgba(124, 58, 237, 0.85)), url('/lovable-uploads/cfb1f5b2-6802-4839-ac80-10d50e1465fc.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-astro-blue/40 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Lançando Seu Negócio Para o Próximo Nível
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Assim como um foguete, potencializamos seu atendimento com bots inteligentes e treinamento científico.
            Decole suas vendas, reduza custos e alcance novos horizontes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="bg-astro-orange hover:bg-astro-orange/90 text-white font-semibold px-8 py-6 text-lg">
              <Link to="/agenda">Agendar com Google Calendar</Link>
            </Button>
            <Button size="lg" asChild variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/servicos">Conhecer Serviços</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Animated elements */}
      <div className="absolute bottom-0 left-0 w-full">
        <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-astro-orange rounded-full opacity-10 animate-float"></div>
        <div className="absolute bottom-20 right-1/4 w-24 h-24 bg-astro-purple rounded-full opacity-20 animate-float" style={{ animationDelay: "1.5s" }}></div>
      </div>
    </section>
  );
};

export default HeroSection;
