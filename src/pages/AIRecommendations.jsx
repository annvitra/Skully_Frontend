import React from 'react';
import AIRecommendationsPreview from '../components/sections/AIRecommendationsPreview';
const AIRecommendations = () => {
  return <div className="pt-20">
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="font-poppins font-bold text-3xl md:text-4xl mb-4">
            AI Recommendations
          </h1>
          <p className="font-roboto text-lg max-w-2xl">
            Get personalized insights based on your crops, soil conditions, and
            local weather to maximize your yield.
          </p>
        </div>
      </div>
      <AIRecommendationsPreview />
    </div>;
};
export default AIRecommendations;