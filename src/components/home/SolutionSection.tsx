
import React from "react";
import { Bot, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const SolutionSection: React.FC = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Nossa Solução Completa
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A combinação perfeita de tecnologia e conhecimento para transformar
            seu atendimento via WhatsApp e aumentar seus resultados.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 bg-astro-blue/10 p-3 rounded-lg">
                  <Bot size={28} className="text-astro-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Bots Inteligentes</h3>
                  <p className="text-gray-600">
                    Automatize o atendimento com bots personalizados que respondem
                    dúvidas, qualificam leads e até fecham vendas enquanto você dorme.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 bg-astro-purple/10 p-3 rounded-lg">
                  <Users size={28} className="text-astro-purple" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Treinamento Científico</h3>
                  <p className="text-gray-600">
                    Capacitação baseada em neurociência para sua equipe multiplicar
                    resultados, com metodologias exclusivas e comprovadas.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 bg-astro-orange/10 p-3 rounded-lg">
                  <Zap size={28} className="text-astro-orange" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Consultoria Especializada</h3>
                  <p className="text-gray-600">
                    Acompanhamento passo a passo na implementação, otimização constante
                    e estratégias personalizadas para seu negócio.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Button asChild className="bg-astro-blue hover:bg-astro-blue/90 text-white">
                  <Link to="/servicos">Ver Detalhes dos Serviços</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <img
              src="https://placehold.co/600x500/7C3AED/FFF?text=Solução+Astro"
              alt="Solução completa da Astro Consultoria"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
