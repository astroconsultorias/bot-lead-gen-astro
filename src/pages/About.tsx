
import React from "react";
import Layout from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";

const About: React.FC = () => {
  return (
    <Layout>
      <section className="pt-16 lg:pt-24 pb-16 bg-astro-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge className="bg-astro-purple/10 text-astro-purple hover:bg-astro-purple/20 mb-4">
              Nossa História
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Sobre a Astro Consultoria
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conheça nossa trajetória e a equipe por trás das soluções que estão
              transformando o atendimento via WhatsApp no Brasil.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Nossa Trajetória
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                A Astro Consultoria nasceu da experiência prática em grandes
                corporações como Walmart e Hospital de Clínicas de Porto Alegre (HCPA),
                onde identificamos a necessidade crítica de otimização nos processos de
                atendimento ao cliente.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Fundada por Jean Villéla, especialista em automação e com formação
                sólida em TI e Educação Digital, a Astro combina conhecimento técnico
                avançado com metodologias científicas de treinamento para criar soluções
                completas e mensuráveis.
              </p>
              <p className="text-lg text-gray-600">
                Hoje, ajudamos empresas de todos os portes a implementar bots inteligentes
                de WhatsApp e treinar suas equipes com metodologias baseadas em
                neurociência, gerando resultados concretos e transformando a maneira como
                as empresas se comunicam com seus clientes.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="https://placehold.co/600x400/1E3A8A/FFF?text=Nossa+História"
                alt="História da Astro Consultoria"
                className="w-full max-w-md h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-astro-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nossa Equipe
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conheça os especialistas por trás das soluções da Astro Consultoria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src="https://placehold.co/400x400/1E3A8A/FFF?text=Jean+Villéla"
                alt="Jean Villéla"
                className="w-full h-auto aspect-square object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Jean Villéla</h3>
              <p className="text-astro-blue font-medium mb-4">CEO & Fundador</p>
              <p className="text-gray-600 mb-4">
                Especialista em automação de processos com mais de 10 anos de experiência
                em multinacionais. Pós-graduado em TI e Educação Digital.
              </p>
              <div className="flex gap-2">
                <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-200">
                  Automação
                </Badge>
                <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-200">
                  IA
                </Badge>
                <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-200">
                  WhatsApp
                </Badge>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src="https://placehold.co/400x400/7C3AED/FFF?text=Ana+Silva"
                alt="Ana Silva"
                className="w-full h-auto aspect-square object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ana Silva</h3>
              <p className="text-astro-blue font-medium mb-4">Especialista em Treinamento</p>
              <p className="text-gray-600 mb-4">
                Mestre em Educação com foco em metodologias ativas e neurociência
                aplicada ao aprendizado corporativo.
              </p>
              <div className="flex gap-2">
                <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-200">
                  Treinamento
                </Badge>
                <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-200">
                  Metodologia
                </Badge>
                <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-200">
                  Educação
                </Badge>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <img
                src="https://placehold.co/400x400/F97316/FFF?text=Carlos+Mendes"
                alt="Carlos Mendes"
                className="w-full h-auto aspect-square object-cover rounded-lg mb-6"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Carlos Mendes</h3>
              <p className="text-astro-blue font-medium mb-4">Desenvolvedor de Bots</p>
              <p className="text-gray-600 mb-4">
                Especialista em desenvolvimento de chatbots e soluções de automação
                para WhatsApp e outras plataformas de mensageria.
              </p>
              <div className="flex gap-2">
                <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-200">
                  Desenvolvimento
                </Badge>
                <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-200">
                  Chatbots
                </Badge>
                <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-200">
                  APIs
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nossos Valores
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Princípios que guiam nosso trabalho e relacionamento com clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-astro-blue">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Eficiência</h3>
              <p className="text-gray-600">
                Buscamos continuamente otimizar processos e resultados, garantindo
                o melhor uso de recursos e tempo.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-astro-purple">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Inovação</h3>
              <p className="text-gray-600">
                Estamos sempre à frente, incorporando novas tecnologias e metodologias
                para oferecer soluções de ponta.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-astro-orange">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Resultados</h3>
              <p className="text-gray-600">
                Focamos em métricas mensuráveis e objetivos claros, garantindo ROI
                positivo para nossos clientes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-green-500">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Humanização</h3>
              <p className="text-gray-600">
                Mesmo com automação, mantemos o atendimento humanizado e centrado
                nas necessidades do cliente.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
