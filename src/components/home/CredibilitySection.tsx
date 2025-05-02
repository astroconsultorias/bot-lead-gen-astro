
import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Shield, Award, Users, Medal } from "lucide-react";

const CredibilitySection: React.FC = () => {
  const credentials = [
    {
      icon: <Shield className="h-6 w-6 text-astro-blue" />,
      title: "Empresa Certificada",
      description: "Certificações oficiais em automação e desenvolvimento de IA"
    },
    {
      icon: <Award className="h-6 w-6 text-astro-orange" />,
      title: "Premiada no Setor",
      description: "Reconhecida por soluções inovadoras em atendimento digital"
    },
    {
      icon: <Users className="h-6 w-6 text-astro-purple" />,
      title: "Equipe de Especialistas",
      description: "Profissionais com mais de 10 anos de experiência em tecnologia"
    },
    {
      icon: <Medal className="h-6 w-6 text-green-600" />,
      title: "Resultados Comprovados",
      description: "Mais de 500 empresas atendidas com sucesso"
    }
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Por Que Confiar na Astro Consultoria
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nossa autoridade no mercado é construída sobre bases sólidas de conhecimento,
            experiência e resultados comprovados.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {credentials.map((credential, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-astro-blue">
                  <div className="p-2 bg-gray-50 rounded-full w-fit mb-4">
                    {credential.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{credential.title}</h3>
                  <p className="text-gray-600 text-sm">{credential.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-first lg:order-last">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <AspectRatio ratio={4/3}>
                <img 
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" 
                  alt="Equipe Astro Consultoria em reunião estratégica" 
                  className="object-cover w-full h-full"
                />
              </AspectRatio>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-white/90 flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/1e21dbc2-5ede-422e-b8fb-5d0c7c77f6ce.png" 
                      alt="Astro Logo" 
                      className="h-8 w-8"
                    />
                  </div>
                  <div>
                    <p className="text-white font-semibold">Astro Consultoria</p>
                    <p className="text-white/70 text-sm">Excelência em Automação</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex flex-wrap gap-4 justify-center">
              <img 
                src="https://placehold.co/100x60/1E3A8A/FFFFFF?text=Partner+1" 
                alt="Parceiro 1" 
                className="h-10 object-contain"
              />
              <img 
                src="https://placehold.co/100x60/7C3AED/FFFFFF?text=Partner+2" 
                alt="Parceiro 2" 
                className="h-10 object-contain"
              />
              <img 
                src="https://placehold.co/100x60/F97316/FFFFFF?text=Partner+3" 
                alt="Parceiro 3" 
                className="h-10 object-contain"
              />
              <img 
                src="https://placehold.co/100x60/333333/FFFFFF?text=Partner+4" 
                alt="Parceiro 4" 
                className="h-10 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;
