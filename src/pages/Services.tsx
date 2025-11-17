import React from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Bot, CheckCircle, Users, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import botWhatsappImg from "@/assets/bot-whatsapp.jpg";
import treinamentoCientificoImg from "@/assets/treinamento-cientifico.jpg";

const Services: React.FC = () => {
  return (
    <Layout>
      <section className="pt-16 lg:pt-24 pb-16 bg-astro-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge className="bg-astro-purple/10 text-astro-purple hover:bg-astro-purple/20 mb-4">
              Nossos Serviços
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Soluções Completas para seu Negócio
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conheça os serviços da Astro Consultoria e descubra como podemos transformar
              sua comunicação com clientes e aumentar seus resultados.
            </p>
          </div>
        </div>
      </section>

      {/* Bots de WhatsApp */}
      <section className="py-16 lg:py-24" id="bots">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block p-3 bg-astro-blue/10 rounded-lg mb-6">
                <Bot size={32} className="text-astro-blue" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Bots de WhatsApp
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Automatize seu atendimento no WhatsApp com bots inteligentes que funcionam
                24 horas por dia, 7 dias por semana. Aumente sua capacidade de atendimento,
                qualifique leads e feche vendas mesmo quando você está fora do escritório.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-astro-blue flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">
                    <span className="font-medium">Atendimento 24/7:</span> Nunca perca uma oportunidade de negócio por falta de atendimento imediato.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-astro-blue flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">
                    <span className="font-medium">Qualificação de Leads:</span> Colete informações importantes e qualifique leads automaticamente.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-astro-blue flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">
                    <span className="font-medium">Integração com CRM:</span> Todos os dados coletados são integrados ao seu sistema de gestão.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-astro-blue flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">
                    <span className="font-medium">Fluxos Personalizados:</span> Bots criados com a cara da sua empresa e adaptados ao seu negócio.
                  </p>
                </div>
              </div>
              
              <Button asChild className="bg-astro-blue hover:bg-astro-blue/90 text-white">
                <Link to="/contato">Solicitar Demonstração</Link>
              </Button>
            </div>
            <div className="flex justify-center">
              <img
                src={botWhatsappImg}
                alt="Bot de WhatsApp"
                className="w-full max-w-md h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Treinamento Científico */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-astro-light" id="treinamento">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 flex justify-center">
              <img
                src={treinamentoCientificoImg}
                alt="Treinamento Científico para Equipes"
                className="w-full max-w-md h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-block p-3 bg-astro-purple/10 rounded-lg mb-6">
                <Users size={32} className="text-astro-purple" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Treinamento Científico para Equipes
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Metodologia exclusiva baseada em neurociência para capacitar sua equipe
                e multiplicar resultados. Treinamentos práticos, objetivos e com impacto
                mensurável nos indicadores do seu negócio.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-astro-purple flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">
                    <span className="font-medium">Base Científica:</span> Metodologias baseadas em neurociência e aprendizado acelerado.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-astro-purple flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">
                    <span className="font-medium">Prática Imediata:</span> Conteúdo 100% aplicável ao dia a dia da sua operação.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-astro-purple flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">
                    <span className="font-medium">Acompanhamento:</span> Suporte contínuo após o treinamento para garantir implementação.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-astro-purple flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">
                    <span className="font-medium">Customização:</span> Programas adaptados às necessidades específicas do seu negócio.
                  </p>
                </div>
              </div>
              
              <Button asChild className="bg-astro-purple hover:bg-astro-purple/90 text-white">
                <Link to="/contato">Conhecer Metodologia</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Consultoria de Implementação */}
      <section className="py-16 lg:py-24" id="consultoria">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block p-3 bg-astro-orange/10 rounded-lg mb-6">
                <Zap size={32} className="text-astro-orange" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Consultoria de Implementação
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Acompanhamento passo a passo na implementação das soluções da Astro.
                Nossa equipe trabalha lado a lado com seu negócio para garantir resultados
                rápidos e duradouros.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-astro-orange flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">
                    <span className="font-medium">Diagnóstico Completo:</span> Análise detalhada dos processos atuais e pontos de melhoria.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-astro-orange flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">
                    <span className="font-medium">Plano de Ação:</span> Estratégia personalizada com etapas claras para implementação.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-astro-orange flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">
                    <span className="font-medium">Acompanhamento:</span> Reuniões periódicas de alinhamento e ajustes na estratégia.
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-astro-orange flex-shrink-0 mt-0.5" />
                  <p className="text-gray-700">
                    <span className="font-medium">Relatórios de Resultados:</span> Métricas claras para acompanhar o progresso e ROI.
                  </p>
                </div>
              </div>
              
              <Button asChild className="bg-astro-orange hover:bg-astro-orange/90 text-white">
                <Link to="/contato">Solicitar Consultoria</Link>
              </Button>
            </div>
            <div className="flex justify-center">
              <img
                src="https://placehold.co/600x400/F97316/FFF?text=Consultoria"
                alt="Consultoria de Implementação"
                className="w-full max-w-md h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-astro-blue">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Transforme seu Negócio Hoje Mesmo
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Agende seu diagnóstico gratuito e descubra como nossos serviços podem
            ser personalizados para atender às necessidades específicas da sua empresa.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-astro-orange hover:bg-astro-orange/90 text-white font-semibold px-8 py-6 text-lg"
          >
            <Link to="/agendamento">Agendar Diagnóstico Grátis</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
