import React from "react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import PainSection from "@/components/home/PainSection";
import DiagnosticSection from "@/components/home/DiagnosticSection";
import SolutionsSection from "@/components/home/SolutionsSection";
import TargetAudienceSection from "@/components/home/TargetAudienceSection";
import ProcessSection from "@/components/home/ProcessSection";
import CasesSection from "@/components/home/CasesSection";
import DifferentialsSection from "@/components/home/DifferentialsSection";
import ResultsSection from "@/components/home/ResultsSection";
import FAQSection from "@/components/home/FAQSection";
import CtaSection from "@/components/home/CtaSection";

const Index: React.FC = () => {
  return (
    <Layout>
      <div className="flex flex-col w-full">
        <HeroSection />
        <PainSection />
        <DiagnosticSection />
        <SolutionsSection />
        <TargetAudienceSection />
        <ProcessSection />
        <CasesSection />
        <DifferentialsSection />
        <ResultsSection />
        <FAQSection />
        <CtaSection />
      </div>
    </Layout>
  );
};

export default Index;
