import React from 'react';
import { ChevronRight } from 'lucide-react';
import Button from '../ui/Button';
const Hero = () => {
  return <div className="relative min-h-screen flex items-center pt-16 pb-20 overflow-hidden">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2232&q=80')"
      }}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/80"></div>
      </div>
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-white">
        <div className="max-w-3xl animate-fade-in-up">
          <h1 className="font-poppins font-bold text-4xl md:text-5xl lg:text-6xl mb-4">
            Farm Scapes — S.K.U.L.L.Y.
          </h1>
          <p className="font-roboto text-xl md:text-2xl mb-8 text-white/90">
            Powering small farms with AI, shared equipment, and affordable
            automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button variant="primary" size="lg" to="/signup?role=farmer" className="bg-white text-primary hover:bg-gray-100">
              I'm a Farmer
              <ChevronRight size={20} className="ml-1" />
            </Button>
            <Button variant="accent" size="lg" to="/signup?role=buyer">
              I'm a Buyer
              <ChevronRight size={20} className="ml-1" />
            </Button>
            <Button variant="outline" size="lg" to="/prototype-machine" className="border-white text-white hover:bg-white/20">
              Book Prototype Demo
            </Button>
          </div>
          {/* KPI Strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <div className="text-center">
              <p className="font-poppins font-bold text-3xl">120+</p>
              <p className="font-roboto text-white/80">Farms Piloted</p>
            </div>
            <div className="text-center">
              <p className="font-poppins font-bold text-3xl">15</p>
              <p className="font-roboto text-white/80">Equipment Partners</p>
            </div>
            <div className="text-center">
              <p className="font-poppins font-bold text-3xl">₹4,00,000</p>
              <p className="font-roboto text-white/80">in Transactions</p>
            </div>
          </div>
          {/* Trust line */}
          <div className="mt-8 flex items-center justify-center md:justify-start">
            <p className="font-roboto text-sm text-white/70 flex flex-wrap justify-center md:justify-start">
              <span className="flex items-center mx-2">
                <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                Aadhaar-verified farmers
              </span>
              <span className="flex items-center mx-2">
                <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                24/7 support
              </span>
              <span className="flex items-center mx-2">
                <span className="w-2 h-2 bg-accent rounded-full mr-2"></span>
                Local language assistance
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>;
};
export default Hero;