
import React from "react";
import { useForm } from "react-hook-form";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Calendar, Mail, MessageSquare, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data: any) => {
    // Simulate form submission
    try {
      // In a real application, you would send this data to your backend
      console.log("Form data:", data);
      
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Erro ao enviar mensagem. Por favor, tente novamente.");
    }
  };

  return (
    <Layout>
      <section className="pt-16 lg:pt-24 pb-16 bg-astro-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge className="bg-astro-blue/10 text-astro-blue hover:bg-astro-blue/20 mb-4">
              Fale Conosco
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Entre em Contato
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Estamos prontos para ajudar você a transformar seu atendimento e aumentar seus resultados.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Envie-nos uma mensagem
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Preencha o formulário abaixo e nossa equipe entrará em contato o mais breve possível.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome completo
                  </label>
                  <Input
                    id="name"
                    placeholder="Seu nome"
                    {...register("name", { required: "Nome é obrigatório" })}
                    className={errors.name ? "border-red-500" : ""}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message as string}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-mail
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    {...register("email", {
                      required: "E-mail é obrigatório",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Endereço de e-mail inválido",
                      },
                    })}
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message as string}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefone
                  </label>
                  <Input
                    id="phone"
                    placeholder="(00) 00000-0000"
                    {...register("phone", { required: "Telefone é obrigatório" })}
                    className={errors.phone ? "border-red-500" : ""}
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phone.message as string}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Como podemos ajudar?"
                    rows={5}
                    {...register("message", {
                      required: "Mensagem é obrigatória",
                      minLength: {
                        value: 10,
                        message: "Mensagem muito curta",
                      },
                    })}
                    className={errors.message ? "border-red-500" : ""}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message.message as string}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-astro-blue hover:bg-astro-blue/90 text-white w-full"
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                </Button>
              </form>
            </div>

            <div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Outras formas de contato
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-astro-blue/10 rounded-lg">
                      <MessageSquare className="h-6 w-6 text-astro-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-1">
                        WhatsApp
                      </h3>
                      <p className="text-gray-600">
                        <a
                          href="https://wa.me/5551981520555"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-astro-blue transition-colors"
                        >
                          (51) 99999-9999
                        </a>
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Atendimento das 8h às 18h (seg-sex)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-astro-blue/10 rounded-lg">
                      <Phone className="h-6 w-6 text-astro-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-1">
                        Telefone
                      </h3>
                      <p className="text-gray-600">
                        <a
                          href="tel:5551981520555"
                          className="hover:text-astro-blue transition-colors"
                        >
                          (51) 98152-0555
                        </a>
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Atendimento das 8h às 18h (seg-sex)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-astro-blue/10 rounded-lg">
                      <Mail className="h-6 w-6 text-astro-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-1">
                        E-mail
                      </h3>
                      <p className="text-gray-600">
                        <a
                          href="mailto:contato@astroconsultoria.com.br"
                          className="hover:text-astro-blue transition-colors"
                        >
                          contato@astroconsultoria.com.br
                        </a>
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        Retorno em até 24 horas úteis
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-astro-blue/10 rounded-lg">
                      <Calendar className="h-6 w-6 text-astro-blue" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-1">
                        Agendar Diagnóstico
                      </h3>
                      <p className="text-gray-600">
                        <a
                          href="/agendamento"
                          className="text-astro-orange hover:text-astro-orange/90 transition-colors"
                        >
                          Clique aqui para agendar seu diagnóstico gratuito
                        </a>
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        30 minutos com um de nossos especialistas
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-white p-8 rounded-lg shadow-md">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-astro-blue/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-astro-blue" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Nosso Escritório
                    </h2>
                    <p className="text-gray-600">
                      Travessa Ferreira de Abreu, 5<br />
                      Porto Alegre - RS, 90040-260<br />
                      Brasil
                    </p>
                  </div>
                </div>
                <div className="aspect-video w-full rounded-lg overflow-hidden shadow-md">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3454.0!2d-51.2177!3d-30.0277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951978567f17f28d%3A0x2c2c5b7f8c8c8c8c!2sTravessa%20Ferreira%20de%20Abreu%2C%205%20-%20Porto%20Alegre%2C%20RS%2C%2090040-260!5e0!3m2!1spt-BR!2sbr!4v1234567890!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização da Astro Consultoria"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
