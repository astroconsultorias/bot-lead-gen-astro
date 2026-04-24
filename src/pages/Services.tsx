import React from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Users,
  Workflow,
  UserCog,
  Wrench,
  MapPin,
  Globe,
  Sparkles,
  Rocket,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

interface ServiceItem {
  icon: React.ElementType;
  title: string;
  description: string;
  benefit: string;
}

interface Category {
  title: string;
  subtitle: string;
  services: ServiceItem[];
}

const categories: Category[] = [
  {
    title: "Consultoria, diagnóstico e organização empresarial",
    subtitle: "Estrutura, processos e gestão para crescer com clareza",
    services: [
      {
        icon: Search,
        title: "Raio-X de Gargalos Operacionais",
        description:
          "Diagnóstico prático para identificar onde a empresa perde tempo, clientes, eficiência e controle na operação.",
        benefit: "Clareza para enxergar os principais gargalos e definir prioridades de ação.",
      },
      {
        icon: Users,
        title: "Organização Comercial e Atendimento",
        description:
          "Estruturação da rotina de atendimento, acompanhamento comercial e fluxo de oportunidades para reduzir perdas e melhorar a conversão.",
        benefit: "Mais organização no processo comercial e menos dependência do improviso.",
      },
      {
        icon: Workflow,
        title: "Mapeamento de Processos",
        description:
          "Análise e desenho de processos internos para transformar atividades confusas em rotinas mais simples, claras e executáveis.",
        benefit: "Menos retrabalho, mais fluidez e melhor distribuição de responsabilidades.",
      },
      {
        icon: UserCog,
        title: "Estruturação de Equipes e Rotinas",
        description:
          "Apoio na definição de papéis, alinhamento de rotina, acompanhamento e organização operacional de equipes.",
        benefit: "Mais clareza para a equipe e mais controle para a liderança.",
      },
      {
        icon: Wrench,
        title: "Implantação de Melhorias Operacionais",
        description:
          "Execução prática de ajustes prioritários identificados no diagnóstico, com foco em organização, acompanhamento e resultado.",
        benefit: "A empresa sai do diagnóstico e entra na ação.",
      },
    ],
  },
  {
    title: "Soluções rápidas e acessíveis para presença digital",
    subtitle: "O essencial para sua empresa ser encontrada e transmitir confiança",
    services: [
      {
        icon: MapPin,
        title: "Google Essencial",
        description:
          "Criação ou organização do Perfil da Empresa no Google para melhorar apresentação, confiança e facilidade de contato.",
        benefit: "Sua empresa mais encontrável e mais bem apresentada nas buscas locais.",
      },
      {
        icon: Globe,
        title: "Página Expressa",
        description:
          "Página simples, profissional e objetiva para apresentar a empresa, os serviços e facilitar o contato por WhatsApp.",
        benefit: "Um link profissional para transmitir mais confiança e agilizar o atendimento.",
      },
      {
        icon: Sparkles,
        title: "Kit Presença Local",
        description:
          "Combinação do Perfil da Empresa no Google com uma página simples de apresentação, criando uma presença digital enxuta e eficiente.",
        benefit: "Mais visibilidade, mais confiança e mais praticidade para o cliente entrar em contato.",
      },
      {
        icon: Rocket,
        title: "Estrutura Digital de Entrada",
        description:
          "Organização básica da presença digital para empresas que precisam começar de forma rápida, simples e funcional.",
        benefit: "O essencial para sair da informalidade digital e começar com mais consistência.",
      },
      {
        icon: MessageSquare,
        title: "Ajustes Estratégicos de Apresentação",
        description:
          "Melhorias em textos, organização da comunicação, clareza da oferta e apresentação digital da empresa.",
        benefit: "Uma imagem mais profissional e coerente com o valor do negócio.",
      },
    ],
  },
];

const ServiceCard: React.FC<{ service: ServiceItem }> = ({ service }) => {
  const Icon = service.icon;
  return (
    <div className="bg-card p-6 rounded-2xl border-2 border-border hover:border-accent/50 transition-all duration-300 hover-lift flex flex-col h-full">
      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
        <Icon size={24} className="text-accent" />
      </div>
      <h4 className="text-lg font-bold font-heading text-primary mb-2">{service.title}</h4>
      <p className="text-muted-foreground text-sm mb-4 flex-grow">{service.description}</p>
      <div className="pt-4 border-t border-border">
        <p className="text-xs font-semibold text-accent uppercase tracking-wide mb-1">
          Benefício principal
        </p>
        <p className="text-sm text-foreground/80">{service.benefit}</p>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-16 lg:pt-24 pb-12 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <Badge className="bg-accent/10 text-accent hover:bg-accent/20 mb-4">
              Nossos Serviços
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-primary mb-6">
              Serviços que transformam organização em resultado
            </h1>
            <p className="text-lg text-muted-foreground">
              Da estruturação da operação ao fortalecimento da presença digital, a Astro
              Consultoria entrega soluções práticas para empresas que precisam crescer com
              mais clareza, eficiência e confiança.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent/60 mx-auto rounded-full mt-8" />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 lg:py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-16">
            {categories.map((category, catIndex) => (
              <div key={catIndex}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-1 h-12 bg-accent rounded-full" />
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold font-heading text-primary">
                      {category.title}
                    </h2>
                    <p className="text-muted-foreground mt-1">{category.subtitle}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, idx) => (
                    <ServiceCard key={idx} service={service} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Texto de apoio */}
          <div className="max-w-3xl mx-auto text-center mt-16">
            <p className="text-lg text-muted-foreground italic">
              A Astro Consultoria acredita que pequenas empresas não precisam de complexidade.
              Precisam de direção, organização e soluções que funcionem no mundo real.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 lg:py-20 bg-primary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-primary-foreground mb-6">
            Vamos encontrar a melhor solução para o seu momento?
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Se sua empresa precisa organizar a operação, melhorar o atendimento ou fortalecer
            sua presença digital, a Astro Consultoria pode ajudar com uma solução prática e
            adequada à sua realidade.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg"
          >
            <a
              href="https://wa.me/5551981520555?text=Quero%20entender%20a%20melhor%20solução%20para%20meu%20negócio"
              target="_blank"
              rel="noopener noreferrer"
            >
              Quero entender a melhor solução
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
