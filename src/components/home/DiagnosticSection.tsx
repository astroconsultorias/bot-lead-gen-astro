import React from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight, Check } from "lucide-react";

const includes = [
  "Análise rápida da estrutura atual",
  "Identificação dos principais gargalos",
  "Orientação sobre prioridade de ação",
  "Visão clara do que precisa ser resolvido primeiro",
];

const DiagnosticSection: React.FC = () => {
  return (
    <section id="diagnostico" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-primary to-primary/95 rounded-3xl p-8 md:p-12 text-primary-foreground text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-6">
              Comece com um <span className="text-accent">diagnóstico estratégico</span>
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
              Se você sente que seu negócio poderia estar melhor, mas ainda não sabe exatamente onde está o problema, o diagnóstico é o melhor ponto de partida.
            </p>

            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-primary-foreground/10">
              <p className="font-semibold mb-4 text-left">O que inclui:</p>
              <div className="space-y-3">
                {includes.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-left">
                    <Check className="h-5 w-5 text-accent shrink-0" />
                    <span className="text-primary-foreground/90">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-primary-foreground/70 text-sm mb-8">
              É a forma mais inteligente de parar de agir no escuro e começar a tomar decisões com mais clareza.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                asChild
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg shadow-gold hover:scale-105 transition-all"
              >
                <a href="/agendamento" className="flex items-center gap-2">
                  Agendar diagnóstico
                  <ArrowRight size={20} />
                </a>
              </Button>
              <Button
                size="lg"
                asChild
                variant="outline"
                className="border-2 border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 font-semibold"
              >
                <a
                  href="https://wa.me/5551981520555?text=Olá,%20quero%20saber%20mais%20sobre%20o%20diagnóstico%20da%20Astro!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle size={20} />
                  Falar com a Astro no WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiagnosticSection;
