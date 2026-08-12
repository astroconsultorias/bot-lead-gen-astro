import React from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Workflow, Cpu, Check } from "lucide-react";

interface Solucao {
  icon: React.ReactNode;
  title: string;
  price: string;
  desc: string;
  includes: string[];
  cta: string;
  waMessage: string;
}

const solucoes: Solucao[] = [
  {
    icon: <MessageCircle className="h-6 w-6" />,
    title: "Implantação de Atendimento",
    price: "R$ 2.800",
    desc: "Estruturamos a jornada do primeiro contato ao acompanhamento para reduzir improviso e dar clareza à equipe.",
    includes: [
      "Fluxo de atendimento e responsabilidades",
      "WhatsApp Business, etiquetas e respostas rápidas",
      "Scripts e padrão de comunicação",
      "Rotina de follow-up",
      "Indicadores básicos",
      "Treinamento da equipe",
    ],
    cta: "Conversar sobre atendimento",
    waMessage: "Olá, quero entender se a Implantação de Atendimento da Astro faz sentido para minha empresa.",
  },
  {
    icon: <Workflow className="h-6 w-6" />,
    title: "Organização de Processos",
    price: "a partir de R$ 3.200",
    desc: "Transformamos tarefas dependentes de memória e improviso em fluxos claros, responsabilidades definidas e padrões de execução.",
    includes: [
      "Mapeamento do processo atual",
      "Identificação de gargalos",
      "Desenho do fluxo futuro",
      "Definição de responsabilidades",
      "Procedimento operacional",
      "Indicadores e implantação assistida",
    ],
    cta: "Conversar sobre processos",
    waMessage: "Olá, quero entender se a Organização de Processos da Astro faz sentido para minha empresa.",
  },
  {
    icon: <Cpu className="h-6 w-6" />,
    title: "Tecnologia aplicada",
    price: "projetos a partir de R$ 690",
    desc: "Tecnologia entra quando resolve um problema identificado. Não vendemos ferramenta pela ferramenta.",
    includes: [
      "Google Perfil da Empresa — R$ 690",
      "Landing page — R$ 1.490",
      "Site institucional — a partir de R$ 2.490",
      "Automação e IA — a partir de R$ 2.500",
      "Integrações adequadas ao processo",
      "Orientação para uso e manutenção",
    ],
    cta: "Conversar sobre tecnologia",
    waMessage: "Olá, quero conversar sobre uma solução de tecnologia aplicada para minha empresa.",
  },
];

const waLink = (msg: string) =>
  `https://wa.me/5551981520555?text=${encodeURIComponent(msg)}`;

const SolutionsSection: React.FC = () => {
  return (
    <section id="solucoes" className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-block text-xs font-semibold tracking-wider uppercase text-accent mb-3">
            Depois do diagnóstico
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
            A solução depende do{" "}
            <span className="text-accent">problema encontrado</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A Astro concentra a implantação em três frentes: atendimento, processos e tecnologia aplicada. O cliente não precisa adivinhar qual ferramenta comprar antes de entender a causa do problema.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {solucoes.map((s, i) => (
            <article
              key={i}
              className="bg-background rounded-2xl p-8 border border-border flex flex-col hover-lift"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 text-accent">
                {s.icon}
              </div>

              <h3 className="text-xl font-bold font-heading text-foreground mb-2">
                {s.title}
              </h3>
              <p className="text-2xl font-bold text-accent font-heading mb-4">
                {s.price}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {s.desc}
              </p>

              <ul className="space-y-2 mb-6 flex-grow">
                {s.includes.map((it, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-foreground/80">
                    <Check className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                variant="outline"
                className="border-accent/50 hover:bg-accent/10 font-semibold w-full"
              >
                <a
                  href={waLink(s.waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${s.cta} pelo WhatsApp`}
                >
                  {s.cta}
                </a>
              </Button>
            </article>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-8 text-center rounded-2xl border border-accent/20 bg-accent/5 p-5">
          <p className="text-sm text-foreground/80">
            Após um diagnóstico ou projeto de implantação, a empresa também pode contratar a <strong>Consultoria Contínua ASTRO por R$ 1.490/mês</strong>, conforme escopo definido.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
