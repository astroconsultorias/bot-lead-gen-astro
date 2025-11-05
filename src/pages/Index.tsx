
import React from "react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import JeanCesarSection from "@/components/about/JeanCesarSection";
import MissionVisionValues from "@/components/home/MissionVisionValues";
import SolutionsCards from "@/components/home/SolutionsCards";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CtaSection from "@/components/home/CtaSection";

const Index: React.FC = () => {
  return (
    <Layout>
      <div className="flex flex-col w-full">
        <HeroSection />
        <JeanCesarSection />
        <MissionVisionValues />
        <SolutionsCards />
        <TestimonialsSection />
        <CtaSection />
      </div>
    </Layout>
  );
};

export default Index;
