import { HeroSection } from './components/hero-section';
import { TargetAudience } from './components/target-audience';
import { ProgramSection } from './components/program-section';
import { FeaturesSection } from './components/features-section';
import { DetailsSection } from './components/details-section';
import { PricingSection } from './components/pricing-section';
import { CTASection } from './components/cta-section';

export default function App() {
  const handleEnrollClick = () => {
    // Scroll to CTA section
    const ctaSection = document.querySelector('section:last-of-type');
    ctaSection?.scrollIntoView({ behavior: 'smooth' });
    
    // In a real application, this would open a registration form or redirect to a registration page
    console.log('Enrollment button clicked');
  };

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-white">
      {/* Hero Section */}
      <HeroSection onEnrollClick={handleEnrollClick} />

      {/* Target Audience */}
      <TargetAudience />

      {/* Program Section */}
      <ProgramSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Details Section */}
      <DetailsSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* CTA Section */}
      <CTASection onEnrollClick={handleEnrollClick} />

      {/* Footer */}
      <footer className="bg-[#1a1f2e] border-t border-white/10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Курс «Английский для путешествий». Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
}
