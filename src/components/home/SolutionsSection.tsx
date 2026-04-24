import React from "react";
import { Button } from "@/components/ui/button";
import {
  Search,
  Users,
  Workflow,
  UsersRound,
  Rocket,
  MapPin,
  FileText,
  LayoutGrid,
  Globe,
  Sparkles,
} from "lucide-react";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefit: string;
  price: string;
}

interface Category {
  label: string;
  title: string;
  subtitle: string;
  services: Service[];
}

const categories: Category[] = [
  {
    label: "Categoria 1",
    title: "Consultoria, diagnóstico e organização empresarial",
    subtitle: "Soluções estratégicas para estruturar a operação e destravar o crescimento.",
    services: [
      {
        icon: <Search className="h-6 w-6 text-accent" />,
        title: "Raio-X de Gargalos Operacionais",
        description:
          "Diagnóstico prático para identificar onde a empresa perde tempo, clientes, eficiência e controle na operação.",
        benefit: "Clareza para enxergar os gargalos e definir prioridades de ação.",
        price: "A partir de R$ 600",
      },
      {
        icon: <Users className="h-6 w-6 text-accent" />,
        title: "Organização Comercial e Atendimento",
        description:
          "Estruturação da rotina de atendimento, acompanhamento comercial e fluxo de oportunidades para reduzir perdas e melhorar a conversão.",
        benefit: "Mais organização no processo comercial e menos dependência do improviso.",
        price: "A partir de R$ 1.800",
      },
      {
        icon: <Workflow className="h-6 w-6 text-accent" />,
        title: "Mapeamento de Processos",
        description:
          "Análise e desenho de processos internos para transformar atividades confusas em rotinas mais simples, claras e executáveis.",
        benefit: "Menos retrabalho, mais fluidez e melhor distribuição de responsabilidades.",
        price: "A partir de R$ 1.500",
      },
      {
        icon: <UsersRound className="h-6 w-6 text-accent" />,
        title: "Estruturação de Equipes e Rotinas",
        description:
          "Apoio na definição de papéis, alinhamento de rotina, acompanhamento e organização operacional de equipes.",
        benefit: "Mais clareza para a equipe e mais controle para a liderança.",
        price: "A partir de R$ 1.500",
      },
      {
        icon: <Rocket className="h-6 w-6 text-accent" />,
        title: "Implantação de Melhorias Operacionais",
        description:
          "Execução prática de ajustes prioritários identificados no diagnóstico, com foco em organização, acompanhamento e resultado.",
        benefit: "A empresa sai do diagnóstico e entra na ação.",
        price: "A partir de R$ 1.800",
      },
    ],
  },
  {
    label: "Categoria 2",
    title: "Soluções rápidas e acessíveis para presença digital",
    subtitle: "Estrutura digital simples, profissional e funcional para quem precisa começar bem.",
    services: [
      {
        icon: <MapPin className="h-6 w-6 text-accent" />,
        title: "Google Essencial",
        description:
          "Criação ou organização do Perfil da Empresa no Google para melhorar apresentação, confiança e facilidade de contato.",
        benefit: "Sua empresa mais encontrável e mais bem apresentada nas buscas locais.",
        price: "R$ 300",
      },
      {
        icon: <FileText className="h-6 w-6 text-accent" />,
        title: "Página Expressa",
        description:
          "Página simples, profissional e objetiva para apresentar a empresa, os serviços e facilitar o contato por WhatsApp.",
        benefit: "Um link profissional para transmitir mais confiança e agilizar o atendimento.",
        price: "R$ 500",
      },
      {
        icon: <LayoutGrid className="h-6 w-6 text-accent" />,
        title: "Kit Presença Local",
        description:
          "Combinação do Perfil da Empresa no Google com uma página simples de apresentação, criando uma presença digital enxuta e eficiente.",
        benefit: "Mais visibilidade, mais confiança e mais praticidade para o cliente.",
        price: "R$ 800",
      },
      {
        icon: <Globe className="h-6 w-6 text-accent" />,
        title: "Estrutura Digital de Entrada",
        description:
          "Organização básica da presença digital para empresas que precisam começar de forma rápida, simples e funcional.",
        benefit: "O essencial para sair da informalidade digital com mais consistência.",
        price: "A partir de R$ 600",
      },
      {
        icon: <Sparkles className="h-6 w-6 text-accent" />,
        title: "Ajustes Estratégicos de Apresentação",
        description:
          "Melhorias em textos, organização da comunicação, clareza da oferta e apresentação digital da empresa.",
        benefit: "Uma imagem mais profissional e coerente com o valor do negócio.",
        price: "A partir de R$ 400",
      },
    ],
  },
];

const SolutionsSection: React.FC = () => {
  return (
    <section id="solucoes" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
            Serviços que transformam{" "}
            <span className="text-accent">organização em resultado</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Da estruturação da operação ao fortalecimento da presença digital, a Astro Consultoria
            entrega soluções práticas para empresas que precisam crescer com mais clareza,
            eficiência e confiança.
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-16">
          {categories.map((category, idx) => (
            <div key={idx}>
              {/* Category header */}
              <div className="mb-8 max-w-3xl">
                <span className="inline-block text-xs font-semibold tracking-wider uppercase text-accent mb-2">
                  {category.label}
                </span>
                <h3 className="text-2xl md:text-3xl font-bold font-heading text-foreground mb-2">
                  {category.title}
                </h3>
                <p className="text-muted-foreground">{category.subtitle}</p>
                <div className="w-16 h-0.5 bg-accent mt-4" />
              </div>

              {/* Services grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service, i) => (
                  <div
                    key={i}
                    className="bg-muted/30 rounded-2xl p-6 border border-border hover-lift transition-all flex flex-col"
                  >
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      {service.icon}
                    </div>
                    <h4 className="text-lg font-bold font-heading text-foreground mb-2">
                      {service.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-grow">
                      {service.description}
                    </p>
                    <div className="pt-4 border-t border-border">
                      <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-1">
                        Benefício principal
                      </p>
                      <p className="text-sm text-foreground leading-relaxed">{service.benefit}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Supporting text */}
        <div className="text-center max-w-2xl mx-auto mt-16 mb-12">
          <p className="text-base md:text-lg text-muted-foreground italic leading-relaxed">
            A Astro Consultoria acredita que pequenas empresas não precisam de complexidade.
            Precisam de direção, organização e soluções que funcionem no mundo real.
          </p>
        </div>

        {/* Final CTA */}
        <div className="bg-muted/30 rounded-2xl p-8 md:p-12 border border-border text-center max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold font-heading text-foreground mb-4">
            Vamos encontrar a melhor solução para o seu momento?
          </h3>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Se sua empresa precisa organizar a operação, melhorar o atendimento ou fortalecer sua
            presença digital, a Astro Consultoria pode ajudar com uma solução prática e adequada à
            sua realidade.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-gold hover:scale-105 transition-all"
          >
            <a href="#diagnostico">Quero entender a melhor solução</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
