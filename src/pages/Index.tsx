import React from "react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import PainSection from "@/components/home/PainSection";
import TargetAudienceSection from "@/components/home/TargetAudienceSection";
import SolutionsSection from "@/components/home/SolutionsSection";
import DifferentialsSection from "@/components/home/DifferentialsSection";
import ProcessSection from "@/components/home/ProcessSection";
import ResultsSection from "@/components/home/ResultsSection";
import CasesSection from "@/components/home/CasesSection";
import DiagnosticSection from "@/components/home/DiagnosticSection";
import FAQSection from "@/components/home/FAQSection";
import CtaSection from "@/components/home/CtaSection";

const Index: React.FC = () => {
  return (
    <Layout>
      <div className="flex flex-col w-full">
        <HeroSection />
        <PainSection />
        <TargetAudienceSection />
        <SolutionsSection />
        <DifferentialsSection />
        <ProcessSection />
        <ResultsSection />
        <CasesSection />
        <DiagnosticSection />
        <FAQSection />
        <CtaSection />
      </div>
    </Layout>
  );
};

export default Index;
