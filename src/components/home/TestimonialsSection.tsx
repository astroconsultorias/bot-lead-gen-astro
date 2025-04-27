
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  image: string;
  rating: number;
  result: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({
  quote,
  author,
  position,
  company,
  image,
  rating,
  result,
}) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
          />
        ))}
      </div>
      <p className="text-gray-700 italic mb-6">"{quote}"</p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src={image}
            alt={author}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-gray-900">{author}</p>
            <p className="text-sm text-gray-500">
              {position}, {company}
            </p>
          </div>
        </div>
        <div className="bg-astro-purple/10 text-astro-purple font-medium px-4 py-1 rounded-full text-sm">
          {result}
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      quote:
        "Os bots implementados pela Astro revolucionaram nosso atendimento. Conseguimos atender 3x mais clientes com a mesma equipe e aumentamos nossas vendas em 32%.",
      author: "Carlos Silva",
      position: "Diretor Comercial",
      company: "Tech Solutions",
      image: "https://placehold.co/200x200/1E3A8A/FFF?text=CS",
      rating: 5,
      result: "+32% em vendas",
    },
    {
      quote:
        "O treinamento científico transformou nossa equipe. A metodologia é incrível e os resultados apareceram já nos primeiros 30 dias de implementação.",
      author: "Marina Oliveira",
      position: "Gerente de Atendimento",
      company: "Grupo Saúde",
      image: "https://placehold.co/200x200/7C3AED/FFF?text=MO",
      rating: 5,
      result: "-45% em tempo de resposta",
    },
    {
      quote:
        "A combinação de bots inteligentes e treinamento foi o diferencial para escalarmos. O ROI foi positivo já no primeiro mês de operação.",
      author: "Rafael Mendes",
      position: "CEO",
      company: "Construtech",
      image: "https://placehold.co/200x200/F97316/FFF?text=RM",
      rating: 5,
      result: "ROI de 380%",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Histórias reais de empresas que transformaram seu atendimento e
            alcançaram resultados extraordinários com a Astro Consultoria.
          </p>
        </div>

        <div className="relative">
          {/* Desktop View - Show all testimonials */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>

          {/* Mobile View - Carousel */}
          <div className="md:hidden">
            <TestimonialCard {...testimonials[currentSlide]} />
            <div className="flex justify-center mt-6 gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="rounded-full"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <div className="flex gap-2 items-center">
                {testimonials.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 rounded-full transition-all ${
                      index === currentSlide
                        ? "w-6 bg-astro-blue"
                        : "w-2 bg-gray-300"
                    }`}
                  ></div>
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="rounded-full"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
