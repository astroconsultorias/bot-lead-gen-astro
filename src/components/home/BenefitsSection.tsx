
import React from "react";
import { TrendingUp, Clock, CircleDollarSign, Users } from "lucide-react";

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  accentColor: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description, accentColor }) => {
  return (
    <div className={`bg-white p-8 rounded-lg shadow-md hover:shadow-lg border-t-4 ${accentColor} transition-all duration-300 hover:-translate-y-1`}>
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: <TrendingUp className="h-8 w-8 text-astro-blue" />,
      title: "Aumento de vendas",
      description:
        "Clientes relatam aumento médio de 27% nas vendas após implementação dos nossos bots e treinamentos.",
      accentColor: "border-astro-blue",
    },
    {
      icon: <Clock className="h-8 w-8 text-astro-purple" />,
      title: "Atendimento 24/7",
      description:
        "Seu negócio funcionando e gerando leads mesmo quando você está dormindo ou fora do expediente.",
      accentColor: "border-astro-purple",
    },
    {
      icon: <CircleDollarSign className="h-8 w-8 text-astro-orange" />,
      title: "Redução de custos",
      description:
        "Economize até 62% em custos operacionais ao automatizar processos repetitivos de atendimento.",
      accentColor: "border-astro-orange",
    },
    {
      icon: <Users className="h-8 w-8 text-green-500" />,
      title: "Equipe otimizada",
      description:
        "Sua equipe focada no que realmente importa: fechar vendas e criar relacionamentos de valor.",
      accentColor: "border-green-500",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-astro-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Benefícios Comprovados
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Veja como nossa solução pode transformar seu negócio com resultados
            mensuráveis e impacto direto na sua operação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              accentColor={benefit.accentColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
