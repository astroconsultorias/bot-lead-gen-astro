
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const CtaSection: React.FC = () => {
  const features = [
    "Análise gratuita do seu atendimento atual",
    "Diagnóstico personalizado para o seu negócio",
    "Recomendações de automação e treinamento",
    "30 minutos com especialistas em crescimento",
  ];

  return (
    <section className="py-16 lg:py-20 bg-astro-blue">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Pronto para Transformar seu Atendimento?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Agende agora mesmo seu diagnóstico gratuito e descubra como
              podemos ajudar seu negócio a crescer com automação inteligente.
            </p>
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-6 w-6 text-astro-orange flex-shrink-0 mt-0.5" />
                  <span className="text-white/90">{feature}</span>
                </div>
              ))}
            </div>
            <Button
              asChild
              size="lg"
              className="bg-astro-orange hover:bg-astro-orange/90 text-white font-semibold px-8 py-6 text-lg"
            >
              <Link to="/agenda">Agendar com Google Calendar</Link>
            </Button>
          </div>
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-astro-orange rounded-full opacity-10 animate-float"></div>
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-astro-purple rounded-full opacity-10 animate-float" style={{ animationDelay: "1.5s" }}></div>
              <img
                src="https://placehold.co/500x400/F97316/FFF?text=Diagnóstico+Grátis"
                alt="Especialista realizando diagnóstico"
                className="w-full h-auto rounded-lg shadow-2xl relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
