import React from "react";
import { Eye, Search, MessageSquare, Wrench, Store, Cpu } from "lucide-react";

const diffs = [
  {
    icon: <Eye className="h-6 w-6 text-accent" />,
    title: "Visão prática",
    desc: "As recomendações consideram a realidade, a equipe e a capacidade da empresa.",
  },
  {
    icon: <Search className="h-6 w-6 text-accent" />,
    title: "Diagnóstico antes da solução",
    desc: "Primeiro identificamos o problema. Depois escolhemos processos e ferramentas.",
  },
  {
    icon: <MessageSquare className="h-6 w-6 text-accent" />,
    title: "Linguagem simples",
    desc: "Explicamos sem complicação e sem excesso de termos técnicos.",
  },
  {
    icon: <Wrench className="h-6 w-6 text-accent" />,
    title: "Implantação orientada",
    desc: "A Astro pode participar da execução e não apenas entregar um relatório.",
  },
  {
    icon: <Store className="h-6 w-6 text-accent" />,
    title: "Foco em pequenos negócios",
    desc: "As soluções são pensadas para empresas que precisam de organização sem estruturas caras ou complexas.",
  },
  {
    icon: <Cpu className="h-6 w-6 text-accent" />,
    title: "Tecnologia com propósito",
    desc: "Usamos tecnologia e inteligência artificial quando elas realmente melhoram o processo.",
  },
];

const DifferentialsSection: React.FC = () => {
  return (
    <section id="diferenciais" className="py-20 lg:py-28 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
            Por que trabalhar com a <span className="text-accent">Astro</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {diffs.map((d, i) => (
            <div
              key={i}
              className="bg-primary-foreground/10 backdrop-blur-sm p-6 rounded-2xl border border-primary-foreground/10 hover:bg-primary-foreground/15 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                {d.icon}
              </div>
              <h3 className="text-lg font-bold font-heading mb-2">{d.title}</h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                {d.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
