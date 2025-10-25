import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, MessageSquare, Calendar, Video } from "lucide-react";
import { Link } from "react-router-dom";

const ExpressSection: React.FC = () => {
  const whatsappNumber = "5551981520555";
  const whatsappMessage = encodeURIComponent("Quero meu AstroAtendimento Express");

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-white via-astro-light to-blue-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-astro-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-astro-purple/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Badge NOVO PRODUTO */}
        <div className="text-center mb-6">
          <Badge className="bg-astro-orange text-white hover:bg-astro-orange/90 text-sm font-semibold px-4 py-2">
            🆕 NOVO PRODUTO
          </Badge>
        </div>

        {/* Título e Subtítulo */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            🚀 AstroAtendimento Express
          </h2>
          <p className="text-2xl md:text-3xl text-astro-blue font-semibold mb-4">
            Transforme seu atendimento em até 48h
          </p>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Organize sua agenda, padronize seu atendimento e impressione seus clientes — sem complicação tecnológica.
          </p>
        </div>

        {/* Descrição */}
        <div className="max-w-4xl mx-auto mb-12">
          <p className="text-lg text-gray-700 text-center leading-relaxed">
            O <span className="font-bold text-astro-purple">AstroAtendimento Express</span> é um serviço rápido e completo para quem quer começar a atender com mais eficiência e profissionalismo. Em até 48h, você terá seu sistema de agendamento configurado, um mini-treinamento exclusivo e mensagens prontas para encantar seus clientes.
          </p>
        </div>

        {/* Benefícios em Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-astro-blue/10 rounded-lg mb-4">
              <Calendar className="w-6 h-6 text-astro-blue" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Configuração Completa</h3>
            <p className="text-gray-600 text-sm">
              Agendamento online configurado (Google Calendar ou Setmore)
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-astro-purple/10 rounded-lg mb-4">
              <Video className="w-6 h-6 text-astro-purple" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Mini-Treinamento</h3>
            <p className="text-gray-600 text-sm">
              Vídeo rápido e prático de atendimento profissional
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-astro-orange/10 rounded-lg mb-4">
              <MessageSquare className="w-6 h-6 text-astro-orange" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Templates Prontos</h3>
            <p className="text-gray-600 text-sm">
              3 modelos de mensagens automáticas personalizadas
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100 rounded-lg mb-4">
              <Clock className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Entrega Rápida</h3>
            <p className="text-gray-600 text-sm">
              Tudo pronto e funcionando em até 48 horas
            </p>
          </div>
        </div>

        {/* Preço e CTAs */}
        <div className="max-w-2xl mx-auto bg-gradient-to-br from-astro-blue to-astro-purple rounded-2xl p-8 md:p-12 text-center text-white shadow-2xl">
          <div className="mb-6">
            <p className="text-sm uppercase tracking-wide mb-2 opacity-90">Investimento</p>
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="text-5xl md:text-6xl font-bold">R$ 250</span>
            </div>
            <p className="text-xl font-semibold bg-astro-orange/20 backdrop-blur-sm inline-block px-6 py-2 rounded-full">
              em até 10x sem juros no cartão
            </p>
          </div>

          <div className="flex items-center justify-center gap-2 mb-6 text-sm">
            <Clock className="w-4 h-4" />
            <span>Entrega garantida em até 48h</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-astro-orange hover:bg-astro-orange/90 text-white font-bold px-8 py-6 text-lg"
            >
              <Link to="/agendamento">Quero meu AstroAtendimento Express</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white text-astro-blue hover:bg-gray-100 font-bold px-8 py-6 text-lg border-2"
            >
              <a href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} target="_blank" rel="noopener noreferrer">
                Falar com um consultor
              </a>
            </Button>
          </div>
        </div>

        {/* Demonstração do Processo */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">
            Como funciona?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-astro-blue rounded-full text-white font-bold text-2xl mb-4">
                1
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Solicitação do Serviço</h4>
              <p className="text-gray-600">Você contrata e nos envia as informações do seu negócio</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-astro-purple rounded-full text-white font-bold text-2xl mb-4">
                2
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Configuração</h4>
              <p className="text-gray-600">Nossa equipe configura tudo para você em até 48h</p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-astro-orange rounded-full text-white font-bold text-2xl mb-4">
                3
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Entrega e Treinamento</h4>
              <p className="text-gray-600">Você recebe tudo pronto + treinamento para começar</p>
            </div>
          </div>
        </div>

        {/* Depoimentos */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-10">
            O que nossos clientes dizem
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Em dois dias já tínhamos tudo funcionando. Atendimento ficou muito mais profissional!"
              </p>
              <p className="font-semibold text-gray-900">— Maria Silva, Estética</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Valeu cada centavo — reduziu minhas faltas em 40%."
              </p>
              <p className="font-semibold text-gray-900">— João Santos, Barbearia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpressSection;
