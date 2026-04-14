import React from "react";
import { Button } from "@/components/ui/button";
import { Search, Globe, Settings } from "lucide-react";

const solutions = [
  {
    icon: <Search className="h-8 w-8 text-accent" />,
    title: "Diagnóstico Estratégico",
    description: "Analisamos sua operação, seu atendimento e sua estrutura comercial para identificar onde o negócio está perdendo eficiência, tempo e clientes.",
    benefits: ["Visão clara dos gargalos", "Prioridades definidas", "Plano de ação inicial"],
  },
  {
    icon: <Globe className="h-8 w-8 text-accent" />,
    title: "Landing Page / Site Estratégico",
    description: "Criamos páginas pensadas para transformar visitas em contatos reais no WhatsApp e gerar uma presença digital mais profissional e confiável.",
    benefits: ["Mais conversão", "Mais clareza para o cliente", "Presença digital orientada a resultado"],
  },
  {
    icon: <Settings className="h-8 w-8 text-accent" />,
    title: "Consultoria de Estruturação",
    description: "Organizamos processos, atendimento, fluxo comercial e ferramentas para que o negócio funcione com mais controle, menos retrabalho e maior capacidade de crescimento.",
    benefits: ["Processos definidos", "Equipe mais alinhada", "Operação mais leve e previsível"],
  },
];

const SolutionsSection: React.FC = () => {
  return (
    <section id="solucoes" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
            Nós não vendemos ferramenta. Resolvemos{" "}
            <span className="text-accent">gargalos</span> que impedem seu negócio de crescer.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {solutions.map((s, i) => (
            <div key={i} className="bg-muted/30 rounded-2xl p-8 border border-border hover-lift transition-all">
              <div className="mb-6">{s.icon}</div>
              <h3 className="text-xl font-bold font-heading text-foreground mb-3">{s.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{s.description}</p>
              <ul className="space-y-2">
                {s.benefits.map((b, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-gold hover:scale-105 transition-all">
            <a href="#diagnostico">Quero uma solução para o meu negócio</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
