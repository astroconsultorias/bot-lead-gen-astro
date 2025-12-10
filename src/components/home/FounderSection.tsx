import React from "react";
import { Briefcase, GraduationCap, Globe, Handshake } from "lucide-react";
import jeanPortrait from "@/assets/jean-cesar-portrait.jpg";

const FounderSection: React.FC = () => {
  const highlights = [
    {
      icon: Briefcase,
      title: "20+ anos",
      description: "Atendendo pessoas",
    },
    {
      icon: GraduationCap,
      title: "Especialista",
      description: "Educação digital e comunicação",
    },
    {
      icon: Globe,
      title: "Experiência real",
      description: "Com públicos diversos",
    },
    {
      icon: Handshake,
      title: "Missão social",
      description: "Transformar pequenos negócios",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-primary mb-4">
            A minha história é a base do meu propósito.
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent/60 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Image */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-primary/10 rounded-3xl blur-xl" />
              <div className="relative p-1 rounded-2xl bg-gradient-to-br from-accent via-accent/70 to-primary/30">
                <img
                  src={jeanPortrait}
                  alt="Jean Cesar Villela Rodrigues"
                  className="w-full max-w-sm rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Story */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-foreground/80 leading-relaxed">
                Desde cedo aprendi que os pequenos negócios são mais do que uma fonte de renda: são o que sustenta famílias, transforma comunidades e muda vidas.
              </p>
              
              <p className="text-lg text-foreground/80 leading-relaxed">
                Eu cresci vendo negócios simples manterem minha casa, minha família, meus sonhos vivos por um tempo — e aquilo me marcou.
              </p>

              <p className="text-lg text-foreground/80 leading-relaxed">
                Ao longo de mais de <strong className="text-primary">20 anos atendendo pessoas</strong> de todas as realidades, percebi que o atendimento é o coração de qualquer negócio. É ele que aproxima, acolhe e fideliza.
              </p>

              <p className="text-lg text-foreground/80 leading-relaxed">
                Estudei comportamento humano, comunicação e educação digital, me especializei em tecnologia aplicada ao aprendizado e hoje ajudo pequenos negócios a prosperarem com <strong className="text-primary">atendimento humano + automação inteligente</strong>.
              </p>

              <p className="text-xl font-semibold text-primary leading-relaxed">
                Fundador da AstroAtendimento, meu propósito é simples e enorme: transformar a realidade das pessoas através de negócios melhores.
              </p>
            </div>
          </div>
        </div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl border-2 border-accent/20 hover:border-accent/50 transition-all duration-300 hover-lift text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <item.icon size={28} className="text-accent" />
              </div>
              <h3 className="font-bold text-primary text-lg mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FounderSection;