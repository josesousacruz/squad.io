import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { LogosRail } from "@/components/LogosRail";
import { PainSection } from "@/components/PainSection";
import { HowItWorks } from "@/components/HowItWorks";
import { ServicesGrid } from "@/components/ServicesGrid";
import { HumanAIDiff } from "@/components/HumanAIDiff";
import { CaseStudies } from "@/components/CaseStudies";
import { StatsSection } from "@/components/StatsSection";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { CtaFinal } from "@/components/CtaFinal";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="w-full pt-16 overflow-x-hidden">
        <Hero />
        <LogosRail />
        <PainSection />
        <HowItWorks />
        <section id="servicos">
          <ServicesGrid />
        </section>
        <HumanAIDiff />
        <section id="cases">
          <CaseStudies />
        </section>
        <StatsSection />
        <Pricing />
        <Testimonials />
        <section id="faq">
          <FAQ />
        </section>
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
