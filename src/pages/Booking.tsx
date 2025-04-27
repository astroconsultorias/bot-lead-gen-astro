
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm, Controller } from "react-hook-form";
import { Badge } from "@/components/ui/badge";
import { Calendar as CalendarIcon, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const Booking: React.FC = () => {
  const [step, setStep] = useState(1);
  const [dateSelected, setDateSelected] = useState("");
  const [timeSelected, setTimeSelected] = useState("");

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm();

  const availableDates = [
    "29/04/2025",
    "30/04/2025",
    "01/05/2025",
    "02/05/2025",
    "05/05/2025",
  ];

  const availableTimes = [
    "09:00",
    "10:00",
    "11:00",
    "14:00",
    "15:00",
    "16:00",
  ];

  const interestOptions = [
    "Bots de WhatsApp",
    "Treinamento para Equipe",
    "Consultoria de Implementação",
    "Conhecer todos os serviços",
  ];

  const nextStep = () => {
    setStep(step + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };

  const onSubmit = async (data: any) => {
    try {
      // Combine form data with selected date and time
      const bookingData = {
        ...data,
        date: dateSelected,
        time: timeSelected,
      };
      
      console.log("Booking data:", bookingData);
      
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      // Move to confirmation step
      nextStep();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Erro ao agendar diagnóstico. Por favor, tente novamente.");
    }
  };

  return (
    <Layout>
      <section className="pt-16 lg:pt-24 pb-16 bg-astro-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <Badge className="bg-astro-orange/10 text-astro-orange hover:bg-astro-orange/20 mb-4">
              Diagnóstico Gratuito
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Agende Seu Diagnóstico
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              30 minutos com um especialista para avaliar como podemos ajudar
              seu negócio a crescer com automação e treinamento.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            {/* Progress Steps */}
            <div className="flex items-center justify-center mb-16">
              <div className={`flex items-center ${step >= 1 ? "text-astro-blue" : "text-gray-400"}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= 1 ? "bg-astro-blue text-white" : "bg-gray-200 text-gray-600"
                }`}>
                  1
                </div>
                <span className="ml-2 font-medium">Escolha a Data</span>
              </div>
              <div className={`w-12 h-1 mx-2 ${step >= 2 ? "bg-astro-blue" : "bg-gray-200"}`}></div>
              <div className={`flex items-center ${step >= 2 ? "text-astro-blue" : "text-gray-400"}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= 2 ? "bg-astro-blue text-white" : "bg-gray-200 text-gray-600"
                }`}>
                  2
                </div>
                <span className="ml-2 font-medium">Suas Informações</span>
              </div>
              <div className={`w-12 h-1 mx-2 ${step >= 3 ? "bg-astro-blue" : "bg-gray-200"}`}></div>
              <div className={`flex items-center ${step >= 3 ? "text-astro-blue" : "text-gray-400"}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= 3 ? "bg-astro-blue text-white" : "bg-gray-200 text-gray-600"
                }`}>
                  3
                </div>
                <span className="ml-2 font-medium">Confirmação</span>
              </div>
            </div>

            {/* Step 1: Choose Date and Time */}
            {step === 1 && (
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Selecione a Data e Horário
                </h2>
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 mb-3 flex items-center">
                      <CalendarIcon className="h-4 w-4 mr-2 text-astro-blue" />
                      Data Disponível
                    </h3>
                    <div className="grid grid-cols-1 gap-2">
                      {availableDates.map((date, index) => (
                        <button
                          key={index}
                          type="button"
                          className={`p-3 border rounded-md text-left ${
                            dateSelected === date
                              ? "border-astro-blue bg-astro-blue/5"
                              : "border-gray-200 hover:border-astro-blue/50"
                          }`}
                          onClick={() => setDateSelected(date)}
                        >
                          {date}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 mb-3">Horário Disponível</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {availableTimes.map((time, index) => (
                        <button
                          key={index}
                          type="button"
                          className={`p-3 border rounded-md text-center ${
                            timeSelected === time
                              ? "border-astro-blue bg-astro-blue/5"
                              : "border-gray-200 hover:border-astro-blue/50"
                          } ${!dateSelected && "opacity-50 cursor-not-allowed"}`}
                          onClick={() => setTimeSelected(time)}
                          disabled={!dateSelected}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                    {!dateSelected && (
                      <p className="text-sm text-gray-500 mt-2">
                        Selecione uma data primeiro
                      </p>
                    )}
                  </div>
                </div>

                {dateSelected && timeSelected ? (
                  <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-md">
                    <p className="text-green-800 font-medium">
                      Você selecionou: {dateSelected} às {timeSelected}
                    </p>
                  </div>
                ) : (
                  <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-md">
                    <p className="text-yellow-700">
                      Por favor, selecione uma data e horário para continuar.
                    </p>
                  </div>
                )}

                <div className="mt-8 flex justify-end">
                  <Button
                    onClick={nextStep}
                    disabled={!dateSelected || !timeSelected}
                    className="bg-astro-blue hover:bg-astro-blue/90 text-white"
                  >
                    Continuar
                  </Button>
                </div>
              </div>
            )}

            {/* Step 2: Personal Information */}
            {step === 2 && (
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Suas Informações
                </h2>
                
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
                      WhatsApp
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
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Empresa
                    </label>
                    <Input
                      id="company"
                      placeholder="Nome da sua empresa"
                      {...register("company", { required: "Nome da empresa é obrigatório" })}
                      className={errors.company ? "border-red-500" : ""}
                    />
                    {errors.company && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.company.message as string}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">
                      Principal interesse
                    </label>
                    <Controller
                      name="interest"
                      control={control}
                      rules={{ required: "Selecione um interesse" }}
                      render={({ field }) => (
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <SelectTrigger className={errors.interest ? "border-red-500" : ""}>
                            <SelectValue placeholder="Selecione seu principal interesse" />
                          </SelectTrigger>
                          <SelectContent>
                            {interestOptions.map((option, index) => (
                              <SelectItem key={index} value={option}>
                                {option}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    />
                    {errors.interest && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.interest.message as string}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Mensagem (opcional)
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Conte-nos um pouco sobre o que você busca com nossos serviços"
                      rows={4}
                      {...register("message")}
                    />
                  </div>

                  <div className="pt-4 flex justify-between">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={prevStep}
                    >
                      Voltar
                    </Button>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-astro-blue hover:bg-astro-blue/90 text-white"
                    >
                      {isSubmitting ? "Enviando..." : "Agendar Diagnóstico"}
                    </Button>
                  </div>
                </form>
              </div>
            )}

            {/* Step 3: Confirmation */}
            {step === 3 && (
              <div className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-6">
                  <div className="bg-green-100 p-4 rounded-full">
                    <CheckCircle className="h-16 w-16 text-green-600" />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Diagnóstico Agendado com Sucesso!
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Reservamos seu horário para <span className="font-medium">{dateSelected} às {timeSelected}</span>. Em breve você receberá um e-mail de confirmação com os detalhes e link para a reunião online.
                </p>
                <div className="bg-gray-50 p-6 rounded-md mb-8">
                  <h3 className="font-medium text-gray-900 mb-3">Próximos passos:</h3>
                  <ol className="text-left space-y-3">
                    <li className="flex items-start gap-2">
                      <span className="bg-astro-blue text-white w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                      <span>Você receberá um e-mail de confirmação em instantes.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-astro-blue text-white w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                      <span>Prepare algumas informações sobre seu negócio para aproveitar melhor o tempo da consultoria.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-astro-blue text-white w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                      <span>No horário agendado, clique no link que enviamos por e-mail para acessar a reunião.</span>
                    </li>
                  </ol>
                </div>
                <Button
                  asChild
                  className="bg-astro-blue hover:bg-astro-blue/90 text-white"
                >
                  <a href="/">Voltar à Página Inicial</a>
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Booking;
