import React from "react";
import { Zap, Building2, Bot, GraduationCap, Globe, Calendar, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  price?: string;
  priceNote?: string;
  badge?: string;
  featured?: boolean;
  buttonText: string;
  buttonLink: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  price,
  priceNote,
  badge,
  featured,
  buttonText,
  buttonLink,
}) => (
  <div
    className={`bg-card p-6 rounded-2xl border-2 transition-all duration-300 hover-lift flex flex-col h-full ${
      featured ? "border-accent shadow-gold" : "border-border hover:border-accent/50"
    }`}
  >
    {badge && (
      <Badge className={`self-start mb-4 ${featured ? "bg-accent text-accent-foreground" : "bg-primary text-primary-foreground"}`}>
        {badge}
      </Badge>
    )}

    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${featured ? "bg-accent/20" : "bg-primary/10"}`}>
      <Icon size={28} className={featured ? "text-accent" : "text-primary"} />
    </div>

    <h4 className="text-xl font-bold font-heading text-primary mb-3">{title}</h4>
    <p className="text-muted-foreground mb-4 flex-grow">{description}</p>

    {price && (
      <div className="mb-4">
        <p className="text-2xl font-bold text-primary">{price}</p>
        {priceNote && <p className="text-sm text-muted-foreground">{priceNote}</p>}
      </div>
    )}

    <Button
      asChild
      className={`w-full ${
        featured
          ? "bg-accent hover:bg-accent/90 text-accent-foreground"
          : "bg-primary hover:bg-primary/90 text-primary-foreground"
      }`}
    >
      <a href={buttonLink} target="_blank" rel="noopener noreferrer">
        {buttonText}
      </a>
    </Button>
  </div>
);

const ServicesSection: React.FC = () => {
  const categories = [
    {
      title: "Soluções Rápidas",
      subtitle: "Para quem precisa começar agora",
      icon: Zap,
      services: [
        {
          icon: Zap,
          title: "AstroAtendimento Express",
          description: "Transformação básica do atendimento em 48h. Automação + organização + mini treinamento.",
          price: "R$ 250",
          priceNote: "em até 10x",
          buttonText: "Quero meu Express",
          buttonLink: "https://wa.me/5551981520555?text=Quero%20o%20AstroAtendimento%20Express!",
          featured: true,
          badge: "Mais Popular",
        },
        {
          icon: Globe,
          title: "Landing Page Humanizada",
          description: "Página profissional integrada com redes sociais e WhatsApp. Focada em conversão e atendimento humano.",
          price: "R$ 250 a R$ 350",
          buttonText: "Solicitar Orçamento",
          buttonLink: "https://wa.me/5551981520555?text=Quero%20uma%20Landing%20Page%20Humanizada!",
        },
        {
          icon: Sparkles,
          title: "Setup de Presença Digital",
          description: "Instagram, WhatsApp Business, bio otimizada e identidade básica.",
          price: "R$ 150 a R$ 300",
          buttonText: "Quero meu Setup",
          buttonLink: "https://wa.me/5551981520555?text=Quero%20o%20Setup%20de%20Presença%20Digital!",
        },
      ],
    },
    {
      title: "Transformação de Atendimento",
      subtitle: "Carro-chefe para resultados reais",
      icon: Building2,
      services: [
        {
          icon: Building2,
          title: "AstroAtendimento Profissional",
          description: "Diagnóstico + scripts + padrões + organização completa do seu atendimento.",
          price: "R$ 497 a R$ 597",
          buttonText: "Solicitar Diagnóstico",
          buttonLink: "https://wa.me/5551981520555?text=Quero%20o%20AstroAtendimento%20Profissional!",
          featured: true,
        },
        {
          icon: Users,
          title: "Experiência do Cliente",
          description: "Para pequenas empresas que querem encantamento, fidelização e operação de atendimento estruturada.",
          price: "A partir de R$ 997",
          buttonText: "Saber Mais",
          buttonLink: "https://wa.me/5551981520555?text=Quero%20saber%20mais%20sobre%20Experiência%20do%20Cliente!",
        },
      ],
    },
    {
      title: "Tecnologia Humanizada",
      subtitle: "Automação com alma",
      icon: Bot,
      services: [
        {
          icon: Bot,
          title: "AstroBot — Assistente Virtual",
          description: "Automação com linguagem natural, acolhimento e processos reais. Atende 24/7.",
          price: "R$ 497 a R$ 2.000",
          buttonText: "Ver Demonstração",
          buttonLink: "https://wa.me/5551981520555?text=Quero%20ver%20demonstração%20do%20AstroBot!",
          featured: true,
        },
        {
          icon: Calendar,
          title: "Agendamentos Inteligentes",
          description: "Integração completa, lembretes, mensagens empáticas e gestão automatizada.",
          price: "R$ 300 a R$ 700",
          buttonText: "Solicitar Setup",
          buttonLink: "https://wa.me/5551981520555?text=Quero%20Agendamentos%20Inteligentes!",
        },
      ],
    },
    {
      title: "Educação & Transformação",
      subtitle: "Conhecimento que transforma",
      icon: GraduationCap,
      services: [
        {
          icon: GraduationCap,
          title: "Academia do Atendimento",
          description: "Cursos sobre comunicação, atendimento, empatia, comportamento, tecnologia e vendas humanas.",
          badge: "Assinatura Mensal",
          buttonText: "Conhecer Academia",
          buttonLink: "https://wa.me/5551981520555?text=Quero%20conhecer%20a%20Academia%20do%20Atendimento!",
        },
        {
          icon: Users,
          title: "Mentoria Humanizada",
          description: "Acompanhamento mensal com foco em transformação real para pequenos negócios.",
          buttonText: "Agendar Conversa",
          buttonLink: "https://wa.me/5551981520555?text=Quero%20saber%20mais%20sobre%20a%20Mentoria!",
        },
      ],
    },
  ];

  return (
    <section id="solucoes" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-primary mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            Soluções para cada momento do seu negócio
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent/60 mx-auto rounded-full" />
        </div>

        {/* Categories */}
        <div className="space-y-16">
          {categories.map((category, catIndex) => (
            <div key={catIndex}>
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <category.icon size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-heading text-primary">{category.title}</h3>
                  <p className="text-muted-foreground">{category.subtitle}</p>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-accent/30 to-transparent ml-4 hidden md:block" />
              </div>

              {/* Services Grid */}
              <div className={`grid gap-6 ${
                category.services.length === 3 
                  ? "md:grid-cols-3" 
                  : "md:grid-cols-2"
              }`}>
                {category.services.map((service, serviceIndex) => (
                  <ServiceCard key={serviceIndex} {...service} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;