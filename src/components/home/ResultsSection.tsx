import React from "react";
import { Button } from "@/components/ui/button";
import { BriefcaseBusiness, GraduationCap, MapPin, Users } from "lucide-react";
import jeanPortrait from "@/assets/jean-cesar-portrait.jpg";

const WA_ABOUT =
  "https://wa.me/5551981520555?text=" +
  encodeURIComponent("Olá, gostaria de solicitar o Diagnóstico ASTRO para minha empresa.");

const credentials = [
  { icon: <GraduationCap className="h-5 w-5" />, text: "Administrador, com formação complementar em gestão, pessoas e educação digital" },
  { icon: <Users className="h-5 w-5" />, text: "Mais de 20 anos de experiência em atendimento e relacionamento com clientes" },
  { icon: <BriefcaseBusiness className="h-5 w-5" />, text: "Vivência prática em processos, gestão de pessoas e operações corporativas e hospitalares" },
  { icon: <MapPin className="h-5 w-5" />, text: "Atuação em Porto Alegre e Região Metropolitana, com projetos remotos quando aplicável" },
];

const ResultsSection: React.FC = () => {
  return (
    <section id="sobre" className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-14 items-center">
          <div className="relative order-2 lg:order-1 pt-3 lg:pt-0">
            <div className="astro-founder-halo" aria-hidden="true" />
            <div className="astro-founder-photo relative max-w-sm mx-auto overflow-hidden rounded-[28px] border border-accent/30 shadow-elevated">
              <img
                src={jeanPortrait}
                alt="Jean Cesar Villela Rodrigues, fundador da Astro Consultoria"
                className="w-full aspect-[4/5] object-cover object-top"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/45 via-transparent to-transparent pointer-events-none" aria-hidden="true" />
            </div>
            <div className="relative lg:absolute mt-4 lg:mt-0 lg:-bottom-5 left-1/2 -translate-x-1/2 bg-background/90 backdrop-blur-md border border-border rounded-2xl px-5 py-3 shadow-soft text-center w-max max-w-[92%]">
              <p className="font-bold text-foreground">Jean Cesar Villela Rodrigues</p>
              <p className="text-xs text-muted-foreground">Fundador da Astro Consultoria</p>
            </div>
          </div>

          <div className="order-1 lg:order-2 pt-0">
            <span className="inline-block text-xs font-semibold tracking-wider uppercase text-accent mb-3">
              Quem está por trás da Astro
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground mb-5">
              Administração aplicada à{" "}
              <span className="text-accent">operação real</span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed mb-7">
              <p>
                A Astro nasceu da percepção de que pequenas empresas muitas vezes não precisam de mais uma ferramenta: precisam descobrir onde a operação está falhando e organizar aquilo que já possuem.
              </p>
              <p>
                Jean combina experiência em atendimento, administração, processos, gestão de pessoas e tecnologia para transformar problemas do dia a dia em rotinas mais claras, mensuráveis e executáveis.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {credentials.map((item) => (
                <div key={item.text} className="flex gap-3 items-start rounded-xl bg-muted/40 border border-border p-4 backdrop-blur-sm">
                  <span className="text-accent shrink-0 mt-0.5">{item.icon}</span>
                  <p className="text-sm text-foreground/80">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-accent/30 bg-accent/5 p-5 mb-8 backdrop-blur-sm">
              <p className="text-lg md:text-xl font-bold font-heading text-foreground text-center">
                Pessoas <span className="text-accent">→</span> Processos <span className="text-accent">→</span> Tecnologia
              </p>
            </div>

            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-gold hover:scale-[1.03] transition-all"
            >
              <a
                href={WA_ABOUT}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Solicitar Diagnóstico ASTRO pelo WhatsApp"
              >
                Solicitar Diagnóstico ASTRO
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
