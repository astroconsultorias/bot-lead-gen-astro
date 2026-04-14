import React from "react";
import { Eye, Wrench, Heart, Layers, Users } from "lucide-react";

const diffs = [
  { icon: <Eye className="h-5 w-5 text-accent" />, text: "Visão estratégica e operacional" },
  { icon: <Wrench className="h-5 w-5 text-accent" />, text: "Foco em implementação, não só análise" },
  { icon: <Heart className="h-5 w-5 text-accent" />, text: "Soluções adaptadas à realidade do pequeno negócio" },
  { icon: <Layers className="h-5 w-5 text-accent" />, text: "Integração entre atendimento, processo e presença digital" },
  { icon: <Users className="h-5 w-5 text-accent" />, text: "Atendimento próximo, humano e consultivo" },
];

const DifferentialsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6 text-center">
            Por que a Astro é <span className="text-accent">diferente</span>
          </h2>
          <p className="text-primary-foreground/80 text-lg leading-relaxed text-center mb-4">
            A maioria dos fornecedores vende partes do problema: um site, uma automação, um CRM, uma campanha.
          </p>
          <p className="text-primary-foreground/80 text-lg leading-relaxed text-center mb-4">
            <strong className="text-primary-foreground">A Astro faz diferente.</strong> Nós olhamos o negócio como sistema. Não adianta criar uma landing page se o atendimento continua bagunçado. Não adianta organizar o processo se o cliente não entende seu valor.
          </p>

          <div className="mt-10 space-y-4">
            {diffs.map((d, i) => (
              <div key={i} className="flex items-center gap-4 bg-primary-foreground/10 backdrop-blur-sm p-4 rounded-xl border border-primary-foreground/10">
                {d.icon}
                <span className="font-medium">{d.text}</span>
              </div>
            ))}
          </div>

          <p className="text-center text-primary-foreground/80 mt-10 text-lg">
            Nosso trabalho é estruturar o negócio para crescer com mais lógica, mais clareza e menos caos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
