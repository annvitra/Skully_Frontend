import React from 'react';
import { Smartphone, Settings, Clock, Users, Shield } from 'lucide-react';
import Button from '../components/ui/Button';
const PrototypeMachine = () => {
  return <div className="pt-20">
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="font-poppins font-bold text-3xl md:text-4xl mb-4">
            Prototype Machine
          </h1>
          <p className="font-roboto text-lg max-w-2xl">
            Experience the future of farming with our Smart Kinetic Utility for
            Land & Labor Yield.
          </p>
        </div>
      </div>
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2">
              <h2 className="font-poppins font-bold text-2xl md:text-3xl text-neutral-dark mb-6">
                Smart Farming Assistant
              </h2>
              <p className="font-roboto text-gray-600 mb-6">
                Our compact, app-controlled plough is designed specifically for
                small and medium farms. It automates routine tasks, reduces
                manual labor, and increases precision in farming operations.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <div className="mt-1 mr-3 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Smartphone size={18} />
                  </div>
                  <div>
                    <h3 className="font-poppins font-medium text-neutral-dark mb-1">
                      App Control
                    </h3>
                    <p className="font-roboto text-sm text-gray-600">
                      Control operations remotely from your smartphone
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-3 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Settings size={18} />
                  </div>
                  <div>
                    <h3 className="font-poppins font-medium text-neutral-dark mb-1">
                      Customizable
                    </h3>
                    <p className="font-roboto text-sm text-gray-600">
                      Adjust settings for different crops and soil types
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-3 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Clock size={18} />
                  </div>
                  <div>
                    <h3 className="font-poppins font-medium text-neutral-dark mb-1">
                      Time-saving
                    </h3>
                    <p className="font-roboto text-sm text-gray-600">
                      Reduce manual labor hours by up to 60%
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-1 mr-3 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Users size={18} />
                  </div>
                  <div>
                    <h3 className="font-poppins font-medium text-neutral-dark mb-1">
                      Shareable
                    </h3>
                    <p className="font-roboto text-sm text-gray-600">
                      Rent or share with other farmers on our platform
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-accent/10 p-4 rounded-md mb-6">
                <div className="flex items-center">
                  <Shield size={20} className="text-accent mr-2" />
                  <h3 className="font-poppins font-medium text-neutral-dark">
                    Affordable Access
                  </h3>
                </div>
                <p className="font-roboto text-sm text-gray-600 mt-1">
                  Compact, app-controlled plough — rent/share for just ₹500/day
                  through our platform.
                </p>
              </div>
              <Button variant="accent" size="lg">
                Book a Demo
              </Button>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 font-roboto">
                    Prototype Machine Video Demo
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-poppins font-semibold text-xl text-neutral-dark mb-4">
                    How to Control the Prototype
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-poppins font-bold mr-3">
                        1
                      </div>
                      <div className="flex-1 p-3 bg-gray-50 rounded-md">
                        <p className="font-roboto text-gray-700">
                          Connect to the machine via Bluetooth
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-poppins font-bold mr-3">
                        2
                      </div>
                      <div className="flex-1 p-3 bg-gray-50 rounded-md">
                        <p className="font-roboto text-gray-700">
                          Select task type (ploughing, seeding, etc.)
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-poppins font-bold mr-3">
                        3
                      </div>
                      <div className="flex-1 p-3 bg-gray-50 rounded-md">
                        <p className="font-roboto text-gray-700">
                          Set parameters (depth, speed, pattern)
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-poppins font-bold mr-3">
                        4
                      </div>
                      <div className="flex-1 p-3 bg-gray-50 rounded-md">
                        <p className="font-roboto text-gray-700">
                          Start operation and monitor progress in real-time
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default PrototypeMachine;