import React from 'react';
import { Cpu, Droplet, BarChart3, TrendingUp } from 'lucide-react';

/**
 * @typedef {object} FeatureProps
 * @property {React.ReactNode} icon
 * @property {string} title
 * @property {string} description
 */

/**
 * @param {FeatureProps} props
 */
const Feature = ({
  icon,
  title,
  description
}) => {
  return <div className="p-6 rounded-lg bg-white shadow-sm border border-gray-100 hover:shadow-md hover:border-primary/30 transition-all duration-300">
      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
        {icon}
      </div>
      <h3 className="font-poppins font-semibold text-lg mb-2 text-neutral-dark">
        {title}
      </h3>
      <p className="font-roboto text-gray-600">{description}</p>
    </div>;
};
const FeatureSection = () => {
  const features = [{
    icon: <Cpu size={24} />,
    title: 'AI-Driven Recommendations',
    description: 'Get personalized insights on sowing times, irrigation schedules, and pest control based on your specific crops and local conditions.'
  }, {
    icon: <Droplet size={24} />,
    title: 'Irrigation Management',
    description: 'Monitor soil moisture, schedule irrigation, and optimize water usage to improve yield while conserving resources.'
  }, {
    icon: <BarChart3 size={24} />,
    title: 'Equipment Sharing',
    description: 'Rent or share farming equipment with verified farmers in your area, reducing costs and maximizing utilization.'
  }, {
    icon: <TrendingUp size={24} />,
    title: 'Mandi Price Discovery',
    description: 'Access real-time market prices, connect with buyers directly, and get the best value for your produce.'
  }];
  return <section className="py-16 bg-neutral-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-neutral-dark mb-4">
            Smart Farming Solutions
          </h2>
          <p className="font-roboto text-gray-600 max-w-2xl mx-auto">
            Our platform combines AI, shared equipment, and real-time data to
            help small and medium farmers increase yield and reduce costs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => <Feature key={index} icon={feature.icon} title={feature.title} description={feature.description} />)}
        </div>
      </div>
    </section>;
};
export default FeatureSection;