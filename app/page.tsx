import { AboutSection } from '@/components/AboutSection';
import { CtaBanner } from '@/components/CtaBanner';
import { ExperienceSection } from '@/components/ExperienceSection';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { ProductShowcase } from '@/components/ProductShowcase';
import { Testimonials } from '@/components/Testimonials';
import { WhyChooseUs } from '@/components/WhyChooseUs';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <ProductShowcase />
      <WhyChooseUs />
      <ExperienceSection />
      <Testimonials />
      <CtaBanner />
      <Footer />
    </main>
  );
}
