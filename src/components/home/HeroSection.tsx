
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-astro-blue to-astro-purple text-white py-20 lg:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Transforme Seu WhatsApp em uma Máquina de Vendas 24h
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Automatize seu atendimento com bots inteligentes e treinamento científico para sua equipe.
              Aumente vendas, reduza custos e escale seu negócio sem dor de cabeça.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild className="bg-astro-orange hover:bg-astro-orange/90 text-white font-semibold px-8 py-6 text-lg">
                <Link to="/agendamento">Agendar Diagnóstico Grátis</Link>
              </Button>
              <Button size="lg" asChild variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/servicos">Conhecer Serviços</Link>
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-astro-orange rounded-full opacity-20 animate-float"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-astro-purple rounded-full opacity-20 animate-float" style={{ animationDelay: "1s" }}></div>
              <img
                src="https://placehold.co/600x400/1E3A8A/FFF?text=WhatsApp+Bot"
                alt="Bot de WhatsApp em ação"
                className="w-full h-auto rounded-lg shadow-2xl relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
