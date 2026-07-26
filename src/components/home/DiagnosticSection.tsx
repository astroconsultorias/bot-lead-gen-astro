import React from "react";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Users,
  MessageCircle,
  Workflow,
  ClipboardCheck,
  Cpu,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const WA_RAIOX =
  "https://wa.me/5551981520555?text=" +
  encodeURIComponent(
    "Olá, quero entender melhor como funciona o Raio-X Empresarial ASTRO para minha empresa."
  );

const pilares = [
  { icon: <Building2 className="h-5 w-5" />, label: "Empresa e modelo de negócio" },
  { icon: <Users className="h-5 w-5" />, label: "Clientes e aquisição" },
  { icon: <MessageCircle className="h-5 w-5" />, label: "Atendimento" },
  { icon: <Workflow className="h-5 w-5" />, label: "Processos" },
  { icon: <ClipboardCheck className="h-5 w-5" />, label: "Gestão" },
  { icon: <Cpu className="h-5 w-5" />, label: "Tecnologia" },
  { icon: <TrendingUp className="h-5 w-5" />, label: "Crescimento" },
];

const entregas = [
  "Visão geral do cenário atual",
  "Identificação dos principais gargalos",
  "Prioridades de melhoria",
  "Riscos encontrados",
  "Oportunidades de ganho",
  "Recomendações práticas",
  "Plano inicial de ação",
  "Indicação das soluções mais adequadas",
];

const DiagnosticSection: React.FC = () => {
  return (
    <section id="diagnostico" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-primary to-primary/95 rounded-3xl p-8 md:p-12 text-primary-foreground">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <span className="inline-block text-xs font-semibold tracking-wider uppercase text-accent mb-3">
                Produto de entrada
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
                Raio-X Empresarial <span className="text-accent">ASTRO</span>
              </h2>
              <p className="text-xl text-primary-foreground/90 font-medium mb-4">
                Descubra onde sua empresa perde tempo, clientes e oportunidades.
              </p>
              <p className="text-primary-foreground/80 leading-relaxed">
                O Raio-X Empresarial ASTRO é um diagnóstico consultivo que avalia os principais pontos da operação e identifica os gargalos que precisam ser resolvidos primeiro.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/10">
                <p className="font-semibold mb-4 text-accent uppercase text-xs tracking-wider">
                  Áreas avaliadas
                </p>
                <ul className="space-y-3">
                  {pilares.map((p, i) => (
                    <li key={i} className="flex items-center gap-3 text-primary-foreground/90">
                      <span className="text-accent">{p.icon}</span>
                      <span>{p.label}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 border border-primary-foreground/10">
                <p className="font-semibold mb-4 text-accent uppercase text-xs tracking-wider">
                  Você recebe
                </p>
                <ul className="space-y-2.5">
                  {entregas.map((e, i) => (
                    <li key={i} className="flex items-start gap-2 text-primary-foreground/90 text-sm">
                      <span className="text-accent mt-1">•</span>
                      <span>{e}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-center">
              <Button
                size="lg"
                asChild
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg shadow-gold hover:scale-105 transition-all"
              >
                <a
                  href={WA_RAIOX}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Solicitar o Raio-X Empresarial ASTRO pelo WhatsApp"
                  className="flex items-center gap-2"
                >
                  Quero fazer o Raio-X da minha empresa
                  <ArrowRight size={20} />
                </a>
              </Button>
              <p className="text-xs text-primary-foreground/60 mt-4">
                O Raio-X é um diagnóstico consultivo — não é auditoria, certificação ou garantia de resultados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiagnosticSection;
