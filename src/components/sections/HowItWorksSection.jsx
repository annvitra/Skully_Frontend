import React from 'react';
import { ClipboardList, Truck, CheckCircle } from 'lucide-react';
const HowItWorksSection = () => {
  const steps = [{
    icon: <ClipboardList size={32} className="text-primary" />,
    title: 'List Equipment',
    description: 'List your farming equipment for rent or browse available equipment in your area.',
    imageUrl: 'https://images.unsplash.com/photo-1590682680695-43b964a3ae17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80'
  }, {
    icon: <Truck size={32} className="text-primary" />,
    title: 'Book & Collect',
    description: 'Book equipment for your required dates, make secure payments, and arrange collection.',
    imageUrl: 'https://images.unsplash.com/photo-1592982563882-1ea2954d7b0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80'
  }, {
    icon: <CheckCircle size={32} className="text-primary" />,
    title: 'Deliver & Sell',
    description: 'Use equipment efficiently, improve yield, and sell your produce at the best market rates.',
    imageUrl: 'https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80'
  }];
  return <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-neutral-dark mb-4">
            How It Works
          </h2>
          <p className="font-roboto text-gray-600 max-w-2xl mx-auto">
            Farm Scapes makes equipment sharing, AI-powered farming, and market
            access simple and accessible for all farmers.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => <div key={index} className="relative">
              {/* Step number */}
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-poppins font-bold z-10">
                {index + 1}
              </div>
              {/* Step card */}
              <div className="rounded-lg overflow-hidden shadow-md border border-gray-100 bg-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/30 h-full flex flex-col">
                {/* Image */}
                <div className="h-48 overflow-hidden">
                  <img src={step.imageUrl} alt={`Step ${index + 1}: ${step.title}`} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                </div>
                {/* Content */}
                <div className="p-6 flex-grow">
                  <div className="flex items-center mb-4">
                    <div className="mr-3">{step.icon}</div>
                    <h3 className="font-poppins font-semibold text-xl text-neutral-dark">
                      {step.title}
                    </h3>
                  </div>
                  <p className="font-roboto text-gray-600">
                    {step.description}
                  </p>
                </div>
                {/* Connector line (for desktop) */}
                {index < steps.length - 1 && <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-1 bg-primary z-0"></div>}
              </div>
            </div>)}
        </div>
        {/* Prototype machine promo */}
        <div className="mt-16 bg-gray-50 rounded-lg p-6 md:p-8 border border-gray-200">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
              <h3 className="font-poppins font-bold text-2xl text-neutral-dark mb-4">
                Try Our Prototype Machine
              </h3>
              <p className="font-roboto text-gray-600 mb-4">
                Experience the future of farming with our Smart Kinetic Utility
                for Land & Labor Yield. Book a demo to see how our compact,
                app-controlled plough can transform your farming operations.
              </p>
              <div className="font-roboto text-sm text-gray-500 mb-4">
                <p className="mb-1">✓ App-controlled farming automation</p>
                <p className="mb-1">✓ Affordable at just ₹500/day</p>
                <p>✓ Easy to operate and maintain</p>
              </div>
              <button className="px-6 py-2 bg-accent text-white rounded-md font-medium hover:bg-accent-dark transition-colors">
                Book a Demo
              </button>
            </div>
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-md border border-gray-200 bg-white p-4">
                <div className="aspect-video bg-gray-200 rounded flex items-center justify-center">
                  <span className="text-gray-500 font-roboto">
                    Prototype Machine Demo Video
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HowItWorksSection;