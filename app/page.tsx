import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PowerSection } from "@/components/PowerSection";
import { UseCases } from "@/components/UseCases";
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
      <main className="w-full overflow-x-hidden">
        <Hero />
        <section id="como-funciona">
          <PowerSection />
        </section>
        <UseCases />
        <HumanAIDiff />
        <CaseStudies />
        <StatsSection />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CtaFinal />
      </main>
      <Footer />
    </>
  );
}
