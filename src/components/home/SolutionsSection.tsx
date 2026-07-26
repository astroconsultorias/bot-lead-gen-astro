import React from "react";
import { Button } from "@/components/ui/button";
import { MapPin, FileText, LayoutGrid, Check } from "lucide-react";

interface Produto {
  icon: React.ReactNode;
  title: string;
  price: string;
  desc: string;
  includes: string[];
  cta: string;
  waMessage: string;
  badge?: string;
  highlight?: boolean;
}

const produtos: Produto[] = [
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Google Essencial",
    price: "R$ 300",
    desc: "Organização e otimização das principais informações da empresa no Perfil da Empresa no Google.",
    includes: [
      "Conferência dos dados",
      "Categoria principal",
      "Descrição profissional",
      "Serviços, horários, telefone e localização",
      "Links, fotos e informações disponíveis",
      "Orientação para manutenção",
    ],
    cta: "Quero melhorar meu Google",
    waMessage: "Olá, tenho interesse no Google Essencial de R$ 300.",
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "Página Expressa",
    price: "R$ 500",
    desc: "Uma página profissional e objetiva para apresentar sua empresa, seus serviços e facilitar o contato pelo WhatsApp.",
    includes: [
      "Página responsiva",
      "Apresentação da empresa",
      "Serviços e diferenciais",
      "Contatos e botão de WhatsApp",
      "Redes sociais e localização",
      "Configuração básica de publicação",
    ],
    cta: "Quero uma Página Expressa",
    waMessage: "Olá, tenho interesse na Página Expressa de R$ 500.",
  },
  {
    icon: <LayoutGrid className="h-6 w-6" />,
    title: "Kit Presença Local",
    price: "R$ 800",
    desc: "Combinação do Google Essencial com a Página Expressa para fortalecer a presença local e facilitar o contato de novos clientes.",
    includes: [
      "Organização do Perfil da Empresa no Google",
      "Página profissional",
      "Apresentação dos serviços",
      "Integração com WhatsApp",
      "Informações padronizadas",
      "Orientação para uso e manutenção",
    ],
    cta: "Quero o Kit Presença Local",
    waMessage: "Olá, tenho interesse no Kit Presença Local de R$ 800.",
    badge: "Solução mais completa",
    highlight: true,
  },
];

const waLink = (msg: string) =>
  `https://wa.me/5551981520555?text=${encodeURIComponent(msg)}`;

const SolutionsSection: React.FC = () => {
  return (
    <section id="solucoes" className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-4">
            Soluções para melhorar a{" "}
            <span className="text-accent">presença e o atendimento</span> da sua empresa
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Serviços objetivos para negócios que precisam corrigir problemas específicos e melhorar rapidamente sua apresentação digital.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {produtos.map((p, i) => (
            <div
              key={i}
              className={`relative bg-background rounded-2xl p-8 border flex flex-col ${
                p.highlight
                  ? "border-accent shadow-gold ring-1 ring-accent/40"
                  : "border-border"
              }`}
            >
              {p.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full whitespace-nowrap">
                  {p.badge}
                </span>
              )}

              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 text-accent">
                {p.icon}
              </div>

              <h3 className="text-xl font-bold font-heading text-foreground mb-2">
                {p.title}
              </h3>
              <p className="text-3xl font-bold text-accent font-heading mb-4">
                {p.price}
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {p.desc}
              </p>

              <ul className="space-y-2 mb-6 flex-grow">
                {p.includes.map((it, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-foreground/80">
                    <Check className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold w-full"
              >
                <a
                  href={waLink(p.waMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${p.cta} pelo WhatsApp`}
                >
                  {p.cta}
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
