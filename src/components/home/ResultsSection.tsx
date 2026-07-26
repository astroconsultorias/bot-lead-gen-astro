import React from "react";
import { Button } from "@/components/ui/button";

const WA_ABOUT =
  "https://wa.me/5551981520555?text=" +
  encodeURIComponent(
    "Olá, gostaria de falar com a Astro Consultoria."
  );

const ResultsSection: React.FC = () => {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-semibold tracking-wider uppercase text-accent mb-3">
              Sobre a Astro
            </span>
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-foreground">
              Organização, atendimento e tecnologia aplicados a{" "}
              <span className="text-accent">pequenos negócios</span>
            </h2>
          </div>

          <div className="space-y-5 text-muted-foreground leading-relaxed text-base md:text-lg">
            <p>
              A Astro Consultoria nasceu para ajudar pequenos empresários que possuem bons serviços, mas enfrentam dificuldades para organizar o atendimento, os processos, as vendas e o uso da tecnologia.
            </p>
            <p>
              Nossa atuação combina experiência em administração, atendimento ao cliente, gestão de pessoas, processos e transformação digital.
            </p>
            <p>
              Acreditamos que nenhuma ferramenta resolve sozinha os problemas de uma empresa. Por isso, seguimos uma ordem simples:
            </p>

            <div className="bg-background border border-accent/30 rounded-2xl p-6 text-center">
              <p className="text-xl md:text-2xl font-bold font-heading text-foreground">
                Pessoas <span className="text-accent">→</span> Processos{" "}
                <span className="text-accent">→</span> Tecnologia
              </p>
            </div>

            <p>
              Primeiro entendemos quem executa o trabalho. Depois organizamos o processo. Por fim, escolhemos a tecnologia adequada.
            </p>
            <p>
              Nosso objetivo é transformar situações confusas em rotinas claras, mensuráveis e possíveis de executar.
            </p>
          </div>

          <div className="text-center mt-10">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-gold hover:scale-105 transition-all"
            >
              <a
                href={WA_ABOUT}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar com a Astro pelo WhatsApp"
              >
                Falar com a Astro
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
