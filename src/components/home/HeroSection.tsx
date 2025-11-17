
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
  return (
    <section className="relative text-white py-32 lg:py-48 overflow-hidden">
      {/* Hero Background with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{ 
          backgroundImage: "linear-gradient(to bottom, rgba(14, 58, 89, 0.85), rgba(209, 162, 76, 0.85)), url('/lovable-uploads/cfb1f5b2-6802-4839-ac80-10d50e1465fc.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      
      {/* Logo in top left corner */}
      <div className="absolute top-6 left-6 md:left-10 z-20">
        <div className="bg-white/90 rounded-full p-3 md:p-4 shadow-lg">
          <img 
            src="/lovable-uploads/1e21dbc2-5ede-422e-b8fb-5d0c7c77f6ce.png" 
            alt="AstroAtendimento Logo" 
            className="w-16 h-16 md:w-24 md:h-24 object-contain"
          />
        </div>
      </div>
      
      {/* Professional Person Cutout */}
      <div className="absolute right-0 bottom-0 h-full max-w-md lg:max-w-xl hidden lg:block z-10">
        <div 
          className="h-full w-full bg-contain bg-no-repeat bg-bottom"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=687&auto=format&fit=crop')",
            backgroundSize: "contain",
            backgroundPosition: "bottom right",
          }}
        />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading mb-6 leading-tight">
            A experiência e a tecnologia que transformam o seu atendimento
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8">
            Técnica, empatia e automação inteligente para encantar clientes e aumentar resultados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              asChild 
              className="bg-accent hover:bg-accent/90 text-primary font-semibold px-8 py-6 text-lg"
            >
              <a href="#solucoes">Descobrir Soluções</a>
            </Button>
            <Button 
              size="lg" 
              asChild 
              variant="outline" 
              className="border-2 border-white bg-white/10 text-white hover:bg-white/20 font-semibold"
            >
              <a 
                href="https://wa.me/5551981520555?text=Olá%20Jean,%20quero%20transformar%20meu%20atendimento!" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Falar com Jean
              </a>
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-12 flex items-center gap-6 flex-wrap">
            <p className="text-white/80 font-medium">Clientes Satisfeitos:</p>
            <div className="flex -space-x-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-astro-blue bg-gray-300 overflow-hidden">
                  <img 
                    src={`https://randomuser.me/api/portraits/men/${20 + i}.jpg`} 
                    alt={`Cliente ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            <span className="text-white/90 text-sm">+500 empresas atendidas</span>
          </div>
        </div>
      </div>
      
      {/* Animated elements */}
      <div className="absolute bottom-0 left-0 w-full">
        <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-accent rounded-full opacity-10 animate-float"></div>
        <div className="absolute bottom-20 right-1/4 w-24 h-24 bg-primary rounded-full opacity-20 animate-float" style={{ animationDelay: "1.5s" }}></div>
      </div>
      
      {/* Professional Badge */}
      <div className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20 z-20 hidden md:flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
            <path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z"></path>
            <path d="m14 7 3 3"></path>
            <path d="M5 6v4"></path>
            <path d="M19 14v4"></path>
            <path d="M10 2v2"></path>
            <path d="M7 8H3"></path>
            <path d="M21 16h-4"></path>
            <path d="M11 3H9"></path>
          </svg>
        </div>
        <div>
          <p className="text-sm font-semibold">Especialista em Atendimento</p>
          <p className="text-xs text-white/70">+10 Anos de Experiência</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
