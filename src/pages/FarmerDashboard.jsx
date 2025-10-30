import React from 'react';
const FarmerDashboard = () => {
  return <div className="pt-20">
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="font-poppins font-bold text-3xl md:text-4xl mb-4">
            Farmer Dashboard
          </h1>
          <p className="font-roboto text-lg max-w-2xl">
            Manage your farm, equipment, and sales in one place.
          </p>
        </div>
      </div>
      {/* Dashboard content would go here */}
      <div className="container mx-auto px-4 md:px-6 py-12">
        <p className="text-center text-gray-600">
          Detailed dashboard implementation coming soon...
        </p>
      </div>
    </div>;
};
export default FarmerDashboard;