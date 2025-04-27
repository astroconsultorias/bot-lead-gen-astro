
import React from "react";
import { CircleDollarSign, Clock, Users } from "lucide-react";

const ProblemSection: React.FC = () => {
  const stats = [
    {
      icon: <Clock className="h-8 w-8 text-astro-blue" />,
      value: "62%",
      text: "dos clientes desistem após 5 minutos de espera",
    },
    {
      icon: <CircleDollarSign className="h-8 w-8 text-astro-blue" />,
      value: "75%",
      text: "das vendas são perdidas por falta de atendimento rápido",
    },
    {
      icon: <Users className="h-8 w-8 text-astro-blue" />,
      value: "83%",
      text: "preferem empresas com atendimento automatizado",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-astro-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            O Problema que Resolvemos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Empresas perdem clientes e vendas todos os dias por causa de atendimentos lentos
            e processos manuais que não escalam. Veja o impacto disso:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <h3 className="text-3xl font-bold text-astro-purple text-center mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-600 text-center">{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
