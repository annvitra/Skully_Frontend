import React, { useEffect } from 'react';
import Hero from '../components/sections/Hero';
import FeatureSection from '../components/sections/FeatureSection';
import HowItWorksSection from '../components/sections/HowItWorksSection';
import MarketplacePreview from '../components/sections/MarketplacePreview';
import AIRecommendationsPreview from '../components/sections/AIRecommendationsPreview';
import Button from '../components/ui/Button';
const Home = () => {
  // Smooth scroll effect for section reveals
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, {
      threshold: 0.1
    });
    document.querySelectorAll('.reveal-section').forEach(section => {
      observer.observe(section);
    });
    return () => {
      document.querySelectorAll('.reveal-section').forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);
  return <div>
      <Hero />
      <div className="reveal-section opacity-0">
        <FeatureSection />
      </div>
      <div className="reveal-section opacity-0">
        <HowItWorksSection />
      </div>
      <div className="reveal-section opacity-0">
        <MarketplacePreview />
      </div>
      <div className="reveal-section opacity-0">
        <AIRecommendationsPreview />
      </div>
      {/* Call to Action Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl mb-6">
            Ready to Transform Your Farming?
          </h2>
          <p className="font-roboto text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of farmers who are already benefiting from our
            platform. Get started today and see the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" to="/signup?role=farmer">
              I'm a Farmer
            </Button>
            <Button variant="outline" size="lg" to="/signup?role=buyer" className="border-white text-white hover:bg-white/20">
              I'm a Buyer
            </Button>
            <Button variant="outline" size="lg" to="/prototype-machine" className="border-white text-white hover:bg-white/20">
              Book Prototype Demo
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default Home;