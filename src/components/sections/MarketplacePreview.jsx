import React from 'react';
import { Calendar, MapPin, Star, Clock } from 'lucide-react';
import Card, { CardContent, CardFooter } from '../ui/Card';
import Button from '../ui/Button';
// Mock equipment data
const equipmentItems = [{
  id: 1,
  name: 'Kubota Mini Tractor',
  price: 800,
  location: 'Gorakhpur',
  rating: 4.6,
  reviews: 23,
  image: 'https://images.unsplash.com/photo-1590682681796-47fa2925fced?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
}, {
  id: 2,
  name: 'Water Pump Set',
  price: 300,
  location: 'Varanasi',
  rating: 4.2,
  reviews: 18,
  image: 'https://images.unsplash.com/photo-1548407260-da850faa41e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
}, {
  id: 3,
  name: 'Harvester Machine',
  price: 1200,
  location: 'Lucknow',
  rating: 4.8,
  reviews: 15,
  image: 'https://images.unsplash.com/photo-1591208333284-ea2e4a767e89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
}, {
  id: 4,
  name: 'Seed Drill',
  price: 500,
  location: 'Patna',
  rating: 4.4,
  reviews: 12,
  image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
}];
const EquipmentCard = ({
  item
}) => {
  return <Card className="h-full flex flex-col">
      <div className="h-48 overflow-hidden">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
      </div>
      <CardContent className="flex-grow">
        <h3 className="font-poppins font-semibold text-lg mb-2 text-neutral-dark">
          {item.name}
        </h3>
        <div className="flex items-center mb-2 text-gray-600 font-roboto">
          <Clock size={16} className="mr-1" />
          <span className="text-primary font-semibold">₹{item.price}/day</span>
        </div>
        <div className="flex items-center mb-2 text-gray-600 font-roboto">
          <MapPin size={16} className="mr-1" />
          <span>{item.location}</span>
        </div>
        <div className="flex items-center text-gray-600 font-roboto">
          <Star size={16} className="mr-1 text-amber-500" />
          <span>
            {item.rating} ({item.reviews} reviews)
          </span>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <Button variant="outline" size="sm">
          <Calendar size={16} className="mr-1" /> Check Availability
        </Button>
        <Button variant="primary" size="sm">
          Book Now
        </Button>
      </CardFooter>
    </Card>;
};
const MarketplacePreview = () => {
  return <section className="py-16 bg-neutral-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-neutral-dark mb-2">
              Equipment Marketplace
            </h2>
            <p className="font-roboto text-gray-600 max-w-2xl">
              Browse, book, and rent farming equipment from verified farmers in
              your area.
            </p>
          </div>
          <Button variant="primary" to="/marketplace" className="mt-4 md:mt-0">
            View All Equipment
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {equipmentItems.map(item => <EquipmentCard key={item.id} item={item} />)}
        </div>
        <div className="mt-12 bg-white rounded-lg p-6 shadow-sm border border-gray-100">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h3 className="font-poppins font-semibold text-2xl text-neutral-dark mb-4">
                Want to list your equipment?
              </h3>
              <p className="font-roboto text-gray-600 mb-4">
                Earn extra income by renting out your farming equipment when
                you're not using it. Our platform handles bookings, payments,
                and verification.
              </p>
              <Button variant="accent">List Your Equipment</Button>
            </div>
            <div className="md:w-1/3 bg-gray-50 p-4 rounded-lg">
              <div className="font-poppins font-semibold text-lg mb-3 text-neutral-dark">
                Benefits of Listing
              </div>
              <ul className="font-roboto text-gray-600 space-y-2">
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Earn from idle equipment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Verified renters only</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Secure payments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">✓</span>
                  <span>Equipment insurance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default MarketplacePreview;