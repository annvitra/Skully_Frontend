import React from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Calendar, Droplet, Bug, TrendingUp } from 'lucide-react';
import Card, { CardContent, CardHeader } from '../ui/Card';
import Button from '../ui/Button';
// Mock data for charts
const soilMoistureData = [{
  name: 'Week 1',
  value: 45
}, {
  name: 'Week 2',
  value: 60
}, {
  name: 'Week 3',
  value: 55
}, {
  name: 'Week 4',
  value: 40
}, {
  name: 'Week 5',
  value: 50
}, {
  name: 'Week 6',
  value: 65
}];
const yieldComparisonData = [{
  name: 'Baseline',
  value: 100
}, {
  name: 'With AI',
  value: 118
}];
const AIRecommendationsPreview = () => {
  return <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl text-neutral-dark mb-4">
            AI-Driven Farming Recommendations
          </h2>
          <p className="font-roboto text-gray-600 max-w-2xl mx-auto">
            Get personalized insights based on your crops, soil conditions, and
            local weather to maximize your yield.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Demo Input Form */}
          <Card className="h-full">
            <CardHeader className="bg-primary/5">
              <h3 className="font-poppins font-semibold text-xl text-neutral-dark">
                Input Your Farming Details
              </h3>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div>
                  <label className="block font-roboto text-sm font-medium text-gray-700 mb-1">
                    Crop Type
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50">
                    <option value="">Select a crop</option>
                    <option value="wheat">Wheat</option>
                    <option value="rice">Rice</option>
                    <option value="maize">Maize</option>
                    <option value="potato">Potato</option>
                    <option value="sugarcane">Sugarcane</option>
                  </select>
                </div>
                <div>
                  <label className="block font-roboto text-sm font-medium text-gray-700 mb-1">
                    Location
                  </label>
                  <input type="text" placeholder="Enter your location" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-roboto text-sm font-medium text-gray-700 mb-1">
                      Planting Date
                    </label>
                    <input type="date" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50" />
                  </div>
                  <div>
                    <label className="block font-roboto text-sm font-medium text-gray-700 mb-1">
                      Field Size (acres)
                    </label>
                    <input type="number" placeholder="Enter field size" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50" />
                  </div>
                </div>
                <div>
                  <label className="block font-roboto text-sm font-medium text-gray-700 mb-1">
                    Soil Type
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50">
                    <option value="">Select soil type</option>
                    <option value="loam">Loam</option>
                    <option value="clay">Clay</option>
                    <option value="sandy">Sandy</option>
                    <option value="silt">Silt</option>
                  </select>
                </div>
                <Button variant="primary" fullWidth className="mt-2">
                  Get Recommendations
                </Button>
              </form>
            </CardContent>
          </Card>
          {/* Demo Output */}
          <Card className="h-full">
            <CardHeader className="bg-accent/5">
              <h3 className="font-poppins font-semibold text-xl text-neutral-dark">
                Your AI Recommendations
              </h3>
            </CardHeader>
            <CardContent>
              <div className="bg-green-50 border border-green-100 rounded-md p-4 mb-6">
                <p className="font-roboto text-green-800">
                  <strong>Optimal sowing window:</strong> Nov 15–Nov 30.{' '}
                  <strong>Irrigation:</strong> drip twice/week.{' '}
                  <strong>Estimated yield:</strong> +18% vs baseline.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="bg-white border border-gray-100 rounded-md p-4 shadow-sm">
                  <div className="flex items-center mb-2">
                    <Calendar size={20} className="text-primary mr-2" />
                    <h4 className="font-poppins font-medium text-neutral-dark">
                      Sowing Schedule
                    </h4>
                  </div>
                  <p className="font-roboto text-sm text-gray-600">
                    Prepare soil by Nov 10. Sow seeds between Nov 15-30 for
                    optimal germination based on soil temperature and moisture
                    forecast.
                  </p>
                </div>
                <div className="bg-white border border-gray-100 rounded-md p-4 shadow-sm">
                  <div className="flex items-center mb-2">
                    <Droplet size={20} className="text-primary mr-2" />
                    <h4 className="font-poppins font-medium text-neutral-dark">
                      Irrigation Plan
                    </h4>
                  </div>
                  <p className="font-roboto text-sm text-gray-600">
                    Implement drip irrigation twice weekly. Estimated water
                    savings of 30% compared to flood irrigation methods.
                  </p>
                </div>
                <div className="bg-white border border-gray-100 rounded-md p-4 shadow-sm">
                  <div className="flex items-center mb-2">
                    <Bug size={20} className="text-primary mr-2" />
                    <h4 className="font-poppins font-medium text-neutral-dark">
                      Pest Alerts
                    </h4>
                  </div>
                  <p className="font-roboto text-sm text-gray-600">
                    High risk of aphid infestation in week 4-6. Apply neem-based
                    organic pesticide as preventive measure.
                  </p>
                </div>
                <div className="bg-white border border-gray-100 rounded-md p-4 shadow-sm">
                  <div className="flex items-center mb-2">
                    <TrendingUp size={20} className="text-primary mr-2" />
                    <h4 className="font-poppins font-medium text-neutral-dark">
                      Yield Forecast
                    </h4>
                  </div>
                  <p className="font-roboto text-sm text-gray-600">
                    Following recommendations could increase yield by 18% above
                    regional baseline, with estimated ROI of 1.4x.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Soil Moisture Chart */}
                <div>
                  <h4 className="font-poppins font-medium text-sm text-neutral-dark mb-2">
                    Projected Soil Moisture Levels
                  </h4>
                  <div className="h-48">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={soilMoistureData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="value" stroke="#2E7D32" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                {/* Yield Comparison Chart */}
                <div>
                  <h4 className="font-poppins font-medium text-sm text-neutral-dark mb-2">
                    Expected Yield Comparison
                  </h4>
                  <div className="h-48">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={yieldComparisonData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="value" fill="#FFA726" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};
export default AIRecommendationsPreview;