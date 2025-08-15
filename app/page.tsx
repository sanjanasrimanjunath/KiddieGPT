// app/page.tsx
import Header from "./_components/header";
import Hero from "./_components/hero";
import Features from "./_components/FeaturesSection";
import HowItWorks from "./_components/HowItWorks";
import Benefits from "./_components/Benefits";
import Testimonials from "./_components/TestimonialsSection";
import CTA from "./_components/CTA";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Benefits />
        <Testimonials />
        <CTA />
      </main>
    </>
  );
}
