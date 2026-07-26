import React from "react";
import { Button } from "@/components/ui/button";
import { BriefcaseBusiness, GraduationCap, MapPin, Users } from "lucide-react";

const WA_ABOUT =
  "https://wa.me/5551981520555?text=" +
  encodeURIComponent("Olá, gostaria de falar com Jean sobre a minha empresa.");

const credentials = [
  { icon: <GraduationCap className="h-5 w-5" />, text: "Administrador, com pós-graduações em áreas de gestão e educação digital" },
  { icon: <Users className="h-5 w-5" />, text: "Mais de 20 anos de experiência em atendimento e relacionamento com clientes" },
  { icon: <BriefcaseBusiness className="h-5 w-5" />, text: "Experiência prática em processos, gestão de pessoas e ambientes corporativo e hospitalar" },
  { icon: <MapPin className="h-5 w-5" />, text: "Atuação em Porto Alegre e Região Metropolitana" },
];

const ResultsSection: React.FC = () => {
  return (
    <section id="sobre" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.8fr_1.2fr] gap-10 items-center">
          <div className="relative">
            <div className="aspect-square max-w-sm mx-auto rounded-3xl border border-accent/30 bg-gradient-to-br from-secondary to-background flex items-center justify-center shadow-elevated">
              <div className="w-40 h-40 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center">
                <span className="text-5xl font-bold font-heading text-accent">JV</span>
              </div>
            </div>
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-background border border-border rounded-2xl px-5 py-3 shadow-soft text-center whitespace-nowrap">
              <p className="font-bold text-foreground">Jean Cesar Villela Rodrigues</p>
              <p className="text-xs text-muted-foreground">Fundador da Astro Consultoria</p>
            </div>
          </div>

          <div className="pt-8 lg:pt-0">
            <span className="inline-block text-xs font-semibold tracking-wider uppercase text-accent mb-3">
              Quem está por trás da Astro
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-5">
              Experiência prática para transformar{" "}
              <span className="text-accent">confusão em processo</span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed mb-7">
              <p>
                A Astro foi criada para ajudar pequenos empresários que entregam bons serviços, mas perdem tempo, clientes e energia por falta de organização.
              </p>
              <p>
                Jean combina experiência em atendimento, administração, processos, gestão de pessoas e transformação digital para construir soluções que caibam na rotina real da empresa.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {credentials.map((item) => (
                <div key={item.text} className="flex gap-3 items-start rounded-xl bg-muted/40 border border-border p-4">
                  <span className="text-accent shrink-0 mt-0.5">{item.icon}</span>
                  <p className="text-sm text-foreground/80">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-accent/30 bg-accent/5 p-5 mb-8">
              <p className="text-lg md:text-xl font-bold font-heading text-foreground text-center">
                Pessoas <span className="text-accent">→</span> Processos <span className="text-accent">→</span> Tecnologia
              </p>
            </div>

            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-gold hover:scale-105 transition-all"
            >
              <a
                href={WA_ABOUT}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar com Jean pelo WhatsApp"
              >
                Falar com Jean sobre minha empresa
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
