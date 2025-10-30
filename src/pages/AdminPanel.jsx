import React from 'react';
const AdminPanel = () => {
  return <div className="pt-20">
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="font-poppins font-bold text-3xl md:text-4xl mb-4">
            Admin Panel
          </h1>
          <p className="font-roboto text-lg max-w-2xl">
            Manage users, listings, and platform analytics.
          </p>
        </div>
      </div>
      {/* Admin panel content would go here */}
      <div className="container mx-auto px-4 md:px-6 py-12">
        <p className="text-center text-gray-600">
          Detailed admin panel implementation coming soon...
        </p>
      </div>
    </div>;
};
export default AdminPanel;