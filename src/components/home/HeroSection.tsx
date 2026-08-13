import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Rocket, Target, Users } from "lucide-react";
import equipeImg from "@/assets/treinamento-cientifico.jpg";

const atendimentoImg =
  "https://images.unsplash.com/photo-1766066014237-00645c74e9c6?auto=format&fit=crop&fm=jpg&q=80&w=1400";

const processosImg =
  "https://images.unsplash.com/photo-1758873268444-73528cd3ec93?auto=format&fit=crop&fm=jpg&q=80&w=1200";

const WA_HERO =
  "https://wa.me/5551981520555?text=" +
  encodeURIComponent(
    "Olá, conheci a Astro pelo site e gostaria de solicitar o Diagnóstico ASTRO para minha empresa."
  );

const HeroSection: React.FC = () => {
  return (
    <section id="top" className="astro-hero astro-reference-hero relative overflow-hidden">
      <div className="astro-hero-space absolute inset-0" aria-hidden="true">
        <div className="astro-stars astro-stars-a" />
        <div className="astro-stars astro-stars-b" />
        <div className="astro-nebula astro-nebula-a" />
        <div className="astro-nebula astro-nebula-b" />
        <div className="astro-hero-overlay" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 py-14 md:py-20 lg:py-24">
        <div className="astro-reference-hero-grid max-w-7xl mx-auto">
          <div className="astro-reference-copy animate-fade-in-up">
            <span className="inline-flex items-center gap-2 text-[11px] md:text-xs font-semibold tracking-wide uppercase text-foreground/90 border border-accent/40 rounded-full px-4 py-2 bg-accent/10 backdrop-blur-md shadow-soft">
              <span className="h-2 w-2 rounded-full bg-accent shadow-gold" />
              Consultoria em processos e atendimento
            </span>

            <h1 className="mt-7 text-4xl md:text-5xl lg:text-[4.35rem] font-bold font-heading leading-[1.03] tracking-tight text-foreground">
              Sua empresa cresceu.<br />
              Seus <span className="astro-gradient-text">processos acompanharam?</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-foreground/80 max-w-2xl leading-relaxed">
              A Astro identifica gargalos, organiza sua operação e transforma atendimento, processos e tecnologia em uma rotina mais eficiente e controlada.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                asChild
                className="astro-primary-cta bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-7 py-6 text-base md:text-lg shadow-gold hover:scale-[1.02] transition-all"
              >
                <a href={WA_HERO} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                  <Rocket size={20} />
                  <span className="text-left leading-tight">
                    <strong className="block">Diagnóstico ASTRO</strong>
                    <small className="block font-normal opacity-80 text-[11px] md:text-xs">Descubra os gargalos da sua empresa</small>
                  </span>
                </a>
              </Button>

              <Button
                size="lg"
                asChild
                variant="outline"
                className="border border-foreground/30 bg-background/20 text-foreground hover:bg-background/35 font-semibold px-7 py-6 backdrop-blur-md"
              >
                <a href="#solucoes" className="flex items-center gap-5">
                  Conhecer soluções <ArrowRight size={18} />
                </a>
              </Button>
            </div>

            <div className="astro-reference-benefits mt-10">
              <div>
                <Target className="text-accent" size={27} />
                <span><strong>Mais eficiência</strong><small>Menos retrabalho</small></span>
              </div>
              <div>
                <BarChart3 className="text-accent" size={27} />
                <span><strong>Mais controle</strong><small>Processos mais claros</small></span>
              </div>
              <div>
                <Users className="text-accent" size={27} />
                <span><strong>Mais organização</strong><small>Clientes e equipe</small></span>
              </div>
            </div>
          </div>

          <div className="astro-photo-banner" aria-label="Composição visual de atendimento, processos e equipe">
            <div className="astro-photo-orbit astro-photo-orbit-a" aria-hidden="true" />
            <div className="astro-photo-orbit astro-photo-orbit-b" aria-hidden="true" />
            <div className="astro-photo-dot astro-photo-dot-a" aria-hidden="true" />
            <div className="astro-photo-dot astro-photo-dot-b" aria-hidden="true" />
            <div className="astro-photo-dot astro-photo-dot-c" aria-hidden="true" />

            <figure className="astro-banner-photo astro-banner-photo-main">
              <img src={atendimentoImg} alt="Profissional de atendimento trabalhando com sua equipe" />
            </figure>
            <figure className="astro-banner-photo astro-banner-photo-small">
              <img src={processosImg} alt="Profissionais analisando e organizando processos em conjunto" />
            </figure>
            <figure className="astro-banner-photo astro-banner-photo-team">
              <img src={equipeImg} alt="Equipe trabalhando de forma organizada" />
            </figure>

            <div className="astro-banner-core" aria-hidden="true">
              <span className="astro-banner-star">✦</span>
              <strong>ASTRO</strong>
              <small>CONSULTORIA</small>
              <p>Processos que geram resultados de verdade.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
