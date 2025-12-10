import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  business: string;
  result: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({
  quote,
  author,
  business,
  result,
}) => {
  return (
    <div className="bg-card p-8 rounded-2xl shadow-soft border border-border hover-lift relative">
      {/* Quote icon */}
      <div className="absolute -top-4 left-8">
        <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shadow-gold">
          <Quote size={20} className="text-accent-foreground" />
        </div>
      </div>

      {/* Stars */}
      <div className="flex mb-4 pt-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={18} className="text-accent fill-accent" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-foreground/80 italic mb-6 text-lg leading-relaxed">"{quote}"</p>

      {/* Author info */}
      <div className="flex items-center justify-between border-t border-border pt-4">
        <div>
          <p className="font-semibold text-primary">{author}</p>
          <p className="text-sm text-muted-foreground">{business}</p>
        </div>
        <div className="bg-accent/10 text-accent font-semibold px-4 py-2 rounded-full text-sm">
          {result}
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials: TestimonialProps[] = [
    {
      quote: "O Jean transformou completamente meu atendimento. Em menos de uma semana, já estava atendendo melhor e vendendo mais!",
      author: "Maria Santos",
      business: "Salão de Beleza",
      result: "+45% clientes",
    },
    {
      quote: "A automação humanizada fez toda a diferença. Meus clientes elogiam o atendimento e eu tenho mais tempo para focar no que importa.",
      author: "Pedro Oliveira",
      business: "Loja de Roupas",
      result: "3x mais vendas",
    },
    {
      quote: "Finalmente encontrei alguém que entende a realidade de um pequeno negócio. O investimento se pagou no primeiro mês!",
      author: "Ana Paula",
      business: "Clínica Estética",
      result: "ROI em 30 dias",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-primary mb-4">
            O Que Dizem Nossos Clientes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
            Histórias reais de pequenos negócios que transformaram seu atendimento
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent/60 mx-auto rounded-full" />
        </div>

        <div className="relative">
          {/* Desktop View */}
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
                className="rounded-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <div className="flex gap-2 items-center">
                {testimonials.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 rounded-full transition-all ${
                      index === currentSlide
                        ? "w-6 bg-accent"
                        : "w-2 bg-border"
                    }`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="rounded-full border-accent text-accent hover:bg-accent hover:text-accent-foreground"
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