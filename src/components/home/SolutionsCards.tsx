import React from "react";
import { Zap, Building2, GraduationCap, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const SolutionsCards: React.FC = () => {
  const solutions = [
    {
      icon: Zap,
      title: "AstroAtendimento Express",
      description: "Transformação do atendimento em até 48h — organização, automação e mini-treinamento.",
      price: "R$ 250",
      installments: "em até 10x",
      buttonText: "Quero meu Express",
      buttonLink: "https://wa.me/5551999041181?text=Quero%20contratar%20o%20AstroAtendimento%20Express!",
      color: "accent",
      featured: true,
    },
    {
      icon: Building2,
      title: "AstroAtendimento Corporativo",
      description: "Consultoria estratégica completa para empresas que querem transformar o atendimento em vantagem competitiva.",
      buttonText: "Solicitar Diagnóstico",
      buttonLink: "https://wa.me/5551999041181?text=Quero%20um%20diagnóstico%20para%20minha%20empresa!",
      color: "primary",
      featured: false,
    },
    {
      icon: GraduationCap,
      title: "Academia do Atendimento Inteligente",
      description: "Cursos e mentorias contínuas para você e sua equipe dominarem o atendimento de alta performance.",
      badge: "Assinatura Mensal",
      buttonText: "Entrar",
      buttonLink: "https://wa.me/5551999041181?text=Quero%20conhecer%20a%20Academia%20do%20Atendimento!",
      color: "primary",
      featured: false,
    },
    {
      icon: Bot,
      title: "AstroBot — Automação Humanizada",
      description: "Assistentes virtuais com linguagem natural que atendem, qualificam e convertem 24/7.",
      buttonText: "Ver Demonstração",
      buttonLink: "https://wa.me/5551999041181?text=Quero%20ver%20uma%20demonstração%20do%20AstroBot!",
      color: "primary",
      featured: false,
    },
  ];

  return (
    <section id="solucoes" className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">
            Soluções que Transformam
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Escolha a solução ideal para o seu momento e comece a transformar seu atendimento agora
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border-2 flex flex-col ${
                solution.featured ? 'border-accent lg:-translate-y-4' : 'border-gray-200'
              }`}
            >
              {solution.featured && (
                <Badge className="self-start mb-4 bg-accent text-primary">
                  Mais Popular
                </Badge>
              )}
              {solution.badge && !solution.featured && (
                <Badge className="self-start mb-4 bg-primary text-white">
                  {solution.badge}
                </Badge>
              )}

              <div 
                className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 ${
                  solution.color === 'accent' ? 'bg-accent/10' : 'bg-primary/10'
                }`}
              >
                <solution.icon 
                  size={28} 
                  className={solution.color === 'accent' ? 'text-accent' : 'text-primary'} 
                />
              </div>

              <h3 className="text-xl font-bold font-heading text-primary mb-3">
                {solution.title}
              </h3>

              <p className="text-gray-600 mb-6 flex-grow">
                {solution.description}
              </p>

              {solution.price && (
                <div className="mb-4">
                  <p className="text-3xl font-bold text-primary">{solution.price}</p>
                  <p className="text-sm text-gray-500">{solution.installments}</p>
                </div>
              )}

              <Button
                asChild
                className={`w-full ${
                  solution.color === 'accent'
                    ? 'bg-accent hover:bg-accent/90 text-primary'
                    : 'bg-primary hover:bg-primary/90 text-white'
                }`}
              >
                <a href={solution.buttonLink} target="_blank" rel="noopener noreferrer">
                  {solution.buttonText}
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsCards;
