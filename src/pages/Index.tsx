
import React from "react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ProblemSection from "@/components/home/ProblemSection";
import SolutionSection from "@/components/home/SolutionSection";
import BenefitsSection from "@/components/home/BenefitsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CtaSection from "@/components/home/CtaSection";
import CredibilitySection from "@/components/home/CredibilitySection";

const Index: React.FC = () => {
  return (
    <Layout>
      <div className="flex flex-col w-full">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <BenefitsSection />
        <CredibilitySection />
        <TestimonialsSection />
        <CtaSection />
      </div>
    </Layout>
  );
};

export default Index;
