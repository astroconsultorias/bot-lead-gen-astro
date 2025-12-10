import React from "react";
import { Target, Eye, Heart, BookOpen, Lightbulb, Shield, Users } from "lucide-react";

const MissionVisionValues: React.FC = () => {
  const values = [
    { icon: Heart, label: "Empatia" },
    { icon: BookOpen, label: "Educação" },
    { icon: Lightbulb, label: "Simplicidade" },
    { icon: Target, label: "Inovação" },
    { icon: Shield, label: "Responsabilidade" },
    { icon: Users, label: "Transformação social" },
  ];

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-primary mb-4">
            Nossos Pilares
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent/60 mx-auto rounded-full" />
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Missão */}
          <div className="bg-card p-8 lg:p-10 rounded-2xl shadow-soft border-l-4 border-l-accent hover-lift">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                <Target size={32} className="text-accent" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold font-heading text-primary">
                Missão
              </h3>
            </div>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Transformar pequenos negócios através de atendimento humano, comunicação clara e tecnologia acessível.
            </p>
          </div>

          {/* Visão */}
          <div className="bg-card p-8 lg:p-10 rounded-2xl shadow-soft border-l-4 border-l-primary hover-lift">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Eye size={32} className="text-primary" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold font-heading text-primary">
                Visão
              </h3>
            </div>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Ser referência nacional em humanização + tecnologia para pequenos empreendedores.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="bg-card p-8 lg:p-10 rounded-2xl shadow-soft">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
              <Heart size={32} className="text-accent" />
            </div>
            <h3 className="text-2xl lg:text-3xl font-bold font-heading text-primary">
              Valores
            </h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {values.map((value, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 rounded-xl bg-muted/50 hover:bg-accent/10 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 group-hover:bg-accent/20 flex items-center justify-center mb-3 transition-colors">
                  <value.icon size={24} className="text-accent" />
                </div>
                <span className="text-sm font-medium text-primary text-center">{value.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionValues;