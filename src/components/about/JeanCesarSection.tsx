import React from "react";
import { Briefcase, GraduationCap, Settings, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import jeanPortrait from "@/assets/jean-cesar-portrait.jpg";

const JeanCesarSection: React.FC = () => {
  const highlights = [
    {
      icon: Briefcase,
      text: "+10 anos de experiência em atendimento corporativo",
    },
    {
      icon: GraduationCap,
      text: "Especialista em comunicação e educação digital",
    },
    {
      icon: Settings,
      text: "Consultor em automação e experiência do cliente",
    },
    {
      icon: Globe,
      text: "Atuação em projetos de transformação em diversos segmentos",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Título principal */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#0E3A59' }}>
            Uma jornada dedicada a transformar o atendimento em resultados.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            De grandes multinacionais à educação digital — uma história movida por pessoas, técnica e propósito.
          </p>
        </div>

        {/* Layout duas colunas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
          {/* Coluna esquerda - Imagem */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="absolute -inset-4 rounded-lg opacity-20 blur-xl" style={{ background: '#D1A24C' }}></div>
              <div className="relative p-2 rounded-lg" style={{ background: 'linear-gradient(135deg, #D1A24C 0%, #0E3A59 100%)' }}>
                <img
                  src={jeanPortrait}
                  alt="Jean Cesar Villela Rodrigues"
                  className="w-full max-w-md h-auto rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>

          {/* Coluna direita - Texto */}
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-3xl font-bold mb-6" style={{ color: '#0E3A59' }}>
              Quem é Jean Cesar Villela Rodrigues
            </h3>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Com <strong>mais de 10 anos de experiência em atendimento corporativo</strong>, atuei em grandes multinacionais dos setores de telecomunicações, varejo e serviços financeiros, liderando equipes, treinando profissionais e implementando melhorias que impactaram milhares de clientes.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Durante essa trajetória, aprendi que <strong>atender bem não é talento — é técnica, empatia e processo</strong>.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Essa vivência me levou à <strong>educação digital</strong>, onde desenvolvi programas de treinamento e ferramentas que capacitam equipes e empreendedores a atenderem com excelência, sem perder a essência humana.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Hoje, como fundador da <strong style={{ color: '#0E3A59' }}>AstroAtendimento</strong>, aplico todo esse conhecimento para ajudar pessoas e empresas a unirem tecnologia inteligente e comportamento humano — transformando o atendimento em uma vantagem competitiva real.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed font-semibold" style={{ color: '#0E3A59' }}>
              Meu propósito é claro: mostrar que o atendimento é o coração de qualquer negócio — e que, quando feito com estratégia e empatia, ele multiplica resultados.
            </p>
          </div>
        </div>

        {/* Cards de destaque */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg border-2 hover:shadow-lg transition-all duration-300 animate-fade-in hover-scale"
              style={{ 
                borderColor: '#D1A24C',
                animationDelay: `${index * 0.1}s`
              }}
            >
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: '#D1A24C20' }}
              >
                <highlight.icon size={24} style={{ color: '#D1A24C' }} />
              </div>
              <p className="text-gray-800 font-medium leading-relaxed">
                {highlight.text}
              </p>
            </div>
          ))}
        </div>

        {/* Frase de autoridade */}
        <div 
          className="text-center py-12 px-6 rounded-lg mb-12 animate-fade-in"
          style={{ 
            background: 'linear-gradient(135deg, #0E3A5905 0%, #D1A24C15 100%)',
            border: '2px solid #D1A24C30'
          }}
        >
          <p 
            className="text-2xl md:text-3xl font-bold italic"
            style={{ color: '#0E3A59' }}
          >
            "Técnica, empatia e tecnologia — o tripé que transforma atendimentos em experiências inesquecíveis."
          </p>
        </div>

        {/* Botão de ação */}
        <div className="text-center animate-fade-in">
          <Button
            asChild
            size="lg"
            className="text-lg px-8 py-6 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            style={{ 
              backgroundColor: '#D1A24C',
              color: '#0E3A59',
              border: '2px solid #0E3A59'
            }}
          >
            <a
              href="https://wa.me/5551999041181?text=Olá%20Jean,%20quero%20melhorar%20meu%20atendimento."
              target="_blank"
              rel="noopener noreferrer"
            >
              Agende uma consultoria com Jean
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JeanCesarSection;
