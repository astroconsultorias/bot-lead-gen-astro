import React from "react";
import Layout from "@/components/layout/Layout";
import FounderSection from "@/components/home/FounderSection";
import MissionVisionValues from "@/components/home/MissionVisionValues";

const About: React.FC = () => {
  return (
    <Layout>
      <section className="pt-24 lg:pt-32 pb-8 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-heading text-primary mb-4">
              Sobre a AstroAtendimento
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Conheça a história e o propósito por trás da transformação de pequenos negócios.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-accent to-accent/60 mx-auto rounded-full mt-6" />
          </div>
        </div>
      </section>

      <FounderSection />
      <MissionVisionValues />
    </Layout>
  );
};

export default About;