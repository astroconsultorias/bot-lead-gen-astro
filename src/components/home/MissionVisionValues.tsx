import React from "react";
import { Target, Eye, Heart } from "lucide-react";

const MissionVisionValues: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary mb-4">
            Nossos Pilares
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transformar o atendimento em experiência estratégica e lucrativa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Missão */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-primary">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto">
              <Target size={32} className="text-primary" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-primary mb-4 text-center">
              Missão
            </h3>
            <p className="text-gray-700 text-center leading-relaxed">
              Transformar o atendimento em uma experiência humana, estratégica e lucrativa.
            </p>
          </div>

          {/* Visão */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-accent">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6 mx-auto">
              <Eye size={32} className="text-accent" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-primary mb-4 text-center">
              Visão
            </h3>
            <p className="text-gray-700 text-center leading-relaxed">
              Ser referência nacional na união entre técnica e automação humanizada.
            </p>
          </div>

          {/* Valores */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-primary">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 mx-auto">
              <Heart size={32} className="text-primary" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-primary mb-4 text-center">
              Valores
            </h3>
            <ul className="text-gray-700 text-center leading-relaxed space-y-2">
              <li>• Empatia</li>
              <li>• Conhecimento</li>
              <li>• Inovação</li>
              <li>• Responsabilidade</li>
              <li>• Transparência</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionValues;
