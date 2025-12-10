import React from "react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import FounderSection from "@/components/home/FounderSection";
import MissionVisionValues from "@/components/home/MissionVisionValues";
import ServicesSection from "@/components/home/ServicesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CtaSection from "@/components/home/CtaSection";

const Index: React.FC = () => {
  return (
    <Layout>
      <div className="flex flex-col w-full">
        <HeroSection />
        <FounderSection />
        <MissionVisionValues />
        <ServicesSection />
        <TestimonialsSection />
        <CtaSection />
      </div>
    </Layout>
  );
};

export default Index;