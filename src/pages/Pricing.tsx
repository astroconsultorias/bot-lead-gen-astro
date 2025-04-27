
import React from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, HelpCircle, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Startup",
      price: "R$ 597",
      description: "Ideal para pequenos negócios iniciando com automação",
      featured: true,
      promo: "Oferta Especial",
      features: [
        "1 bot de WhatsApp com até 3 fluxos",
        "Setup inicial e configuração",
        "Treinamento básico para 1 pessoa",
        "Suporte por 30 dias",
        "Até 500 atendimentos mensais",
      ],
      limitations: [
        "Sem integrações com CRM/ERP",
        "Sem relatórios avançados",
        "Sem consultoria personalizada",
      ],
    },
    {
      name: "Básico",
      price: "R$ 997",
      description: "Para empresas que buscam solidificar sua automação",
      featured: false,
      features: [
        "1 bot de WhatsApp com até 5 fluxos",
        "Setup completo e configuração",
        "Treinamento para até 3 pessoas",
        "Suporte por 90 dias",
        "Até 1.500 atendimentos mensais",
        "1 integração com CRM/ERP",
      ],
      limitations: ["Sem consultoria personalizada"],
    },
    {
      name: "Premium",
      price: "R$ 2.500",
      description: "Solução completa para escalar seu atendimento",
      featured: false,
      features: [
        "2 bots de WhatsApp com fluxos ilimitados",
        "Setup completo e configuração avançada",
        "Treinamento para equipe ilimitada",
        "Suporte prioritário por 12 meses",
        "Atendimentos ilimitados",
        "Integrações ilimitadas",
        "Consultoria estratégica mensal",
        "Relatórios avançados de desempenho",
      ],
      limitations: [],
    },
  ];

  const faqs = [
    {
      question: "Qual a forma de pagamento?",
      answer:
        "Aceitamos pagamentos via PIX, cartão de crédito (em até 12x), boleto bancário e transferência. Para contratos anuais, oferecemos condições especiais de pagamento e descontos.",
    },
    {
      question: "Quanto tempo leva para implementar o bot?",
      answer:
        "O tempo de implementação varia de acordo com a complexidade dos fluxos, mas geralmente conseguimos deixar seu bot operacional entre 7 a 15 dias após a contratação e aprovação dos fluxos.",
    },
    {
      question: "Existe alguma garantia?",
      answer:
        "Sim! Oferecemos garantia de satisfação de 7 dias. Se você não estiver satisfeito com nossos serviços nesse período, devolvemos 100% do valor investido, sem questionamentos.",
    },
    {
      question: "Preciso ter conhecimento técnico?",
      answer:
        "Não. Nossa equipe cuida de toda a implementação técnica e oferece treinamento completo para que você e sua equipe possam gerenciar o sistema facilmente, sem necessidade de conhecimentos técnicos avançados.",
    },
    {
      question: "É possível personalizar os pacotes?",
      answer:
        "Sim. Entendemos que cada negócio tem necessidades específicas. Entre em contato conosco para discutir uma solução personalizada para sua empresa.",
    },
  ];

  return (
    <Layout>
      <section className="pt-16 lg:pt-24 pb-16 bg-astro-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge className="bg-astro-orange/10 text-astro-orange hover:bg-astro-orange/20 mb-4">
              Investimento
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Pacotes e Preços
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Escolha o pacote ideal para o seu negócio e comece a transformar seu atendimento hoje mesmo.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-lg overflow-hidden border ${
                  plan.featured
                    ? "border-astro-orange relative"
                    : "border-gray-200"
                }`}
              >
                {plan.featured && plan.promo && (
                  <div className="bg-astro-orange text-white text-center py-2 font-medium">
                    {plan.promo} - Por Tempo Limitado
                  </div>
                )}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-6">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-gray-900">
                      {plan.price}
                    </span>
                    <span className="text-gray-500">/mês</span>
                  </div>

                  <Button
                    asChild
                    className={`w-full mb-8 ${
                      plan.featured
                        ? "bg-astro-orange hover:bg-astro-orange/90"
                        : "bg-astro-blue hover:bg-astro-blue/90"
                    } text-white`}
                  >
                    <Link to="/agendamento">Contratar Agora</Link>
                  </Button>

                  <div className="space-y-4">
                    <p className="font-medium text-gray-900">O que está incluído:</p>
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}

                    {plan.limitations.length > 0 && (
                      <>
                        <p className="font-medium text-gray-900 pt-4">Limitações:</p>
                        {plan.limitations.map((limitation, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <X className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600">{limitation}</span>
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-astro-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Perguntas Frequentes
              </h2>
              <p className="text-lg text-gray-600">
                Tire suas dúvidas sobre os pacotes e formas de pagamento.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-12 bg-white p-6 rounded-lg border border-gray-200 flex items-start gap-4">
              <div className="p-2 bg-blue-100 rounded-full">
                <HelpCircle className="h-6 w-6 text-astro-blue" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900 mb-2">
                  Precisa de ajuda para escolher?
                </h3>
                <p className="text-gray-600 mb-4">
                  Não tem certeza de qual pacote é o ideal para o seu negócio?
                  Entre em contato com nossa equipe para uma avaliação personalizada.
                </p>
                <Button asChild variant="outline" className="border-astro-blue text-astro-blue">
                  <Link to="/contato">Falar com Consultor</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
