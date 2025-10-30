import React from 'react';
import HowItWorksSection from '../components/sections/HowItWorksSection';
const HowItWorks = () => {
  return <div className="pt-20">
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="font-poppins font-bold text-3xl md:text-4xl mb-4">
            How It Works
          </h1>
          <p className="font-roboto text-lg max-w-2xl">
            Learn how Farm Scapes connects farmers, equipment, AI, and markets
            to create a sustainable farming ecosystem.
          </p>
        </div>
      </div>
      <HowItWorksSection />
      {/* Additional content would go here */}
    </div>;
};
export default HowItWorks;