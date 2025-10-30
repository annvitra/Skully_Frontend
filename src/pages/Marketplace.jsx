import React, { useState } from 'react';
import { Search, Filter, MapPin, Star, Clock, Calendar, X } from 'lucide-react';
import Card, { CardContent, CardFooter } from '../components/ui/Card';
import Button from '../components/ui/Button';
// Extended mock equipment data
const allEquipment = [{
  id: 1,
  name: 'Kubota Mini Tractor',
  price: 800,
  location: 'Gorakhpur',
  district: 'Gorakhpur',
  rating: 4.6,
  reviews: 23,
  category: 'Tractors',
  available: true,
  owner: 'Ramesh Kumar',
  description: 'Well-maintained 25HP mini tractor, perfect for small to medium farms',
  specifications: '25HP, 4WD, with rotavator attachment',
  image: 'https://images.unsplash.com/photo-1590682681796-47fa2925fced?ixlib=rb-4.0.3&auto=format&fit=crop&w=1074&q=80'
}, {
  id: 2,
  name: 'Water Pump Set - 5HP',
  price: 300,
  location: 'Varanasi',
  rating: 4.2,
  reviews: 18,
  category: 'Pump',
  owner: 'Shyam Lal',
  description: 'Powerful water pump for irrigation. Can cover up to 2 acres efficiently.',
  specifications: {
    power: '5 HP',
    fuelType: 'Diesel',
    condition: 'Good'
  },
  availability: ['2024-01-15', '2024-01-18', '2024-01-19'],
  image: 'https://images.unsplash.com/photo-1548407260-da850faa41e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
}, {
  id: 3,
  name: 'Combine Harvester',
  price: 1200,
  location: 'Lucknow',
  rating: 4.8,
  reviews: 15,
  category: 'Harvester',
  owner: 'Mohan Singh',
  description: 'Modern combine harvester for wheat, rice, and other crops. Reduces harvest time by 70%.',
  specifications: {
    power: '50 HP',
    fuelType: 'Diesel',
    condition: 'Excellent'
  },
  availability: ['2024-01-20', '2024-01-21', '2024-01-22'],
  image: 'https://images.unsplash.com/photo-1591208333284-ea2e4a767e89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
}, {
  id: 4,
  name: 'Seed Drill Machine',
  price: 500,
  location: 'Patna',
  rating: 4.4,
  reviews: 12,
  category: 'Seeder',
  owner: 'Rajesh Yadav',
  description: 'Precision seed drill for uniform sowing. Adjustable row spacing and seed depth.',
  specifications: {
    rows: '9',
    type: 'Tractor-mounted',
    condition: 'Good'
  },
  availability: ['2024-01-15', '2024-01-16', '2024-01-23'],
  image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
}, {
  id: 5,
  name: 'Rotavator',
  price: 600,
  location: 'Gorakhpur',
  rating: 4.5,
  reviews: 20,
  category: 'Tiller',
  owner: 'Suresh Prasad',
  description: 'Heavy-duty rotavator for soil preparation. Perfect for breaking hard soil.',
  specifications: {
    width: '6 feet',
    type: 'Tractor-mounted',
    condition: 'Excellent'
  },
  availability: ['2024-01-17', '2024-01-18', '2024-01-19'],
  image: 'https://images.unsplash.com/photo-1625246333195-78d73c5207fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
}, {
  id: 6,
  name: 'Sprayer - Battery Operated',
  price: 200,
  location: 'Varanasi',
  rating: 4.3,
  reviews: 16,
  category: 'Sprayer',
  owner: 'Dinesh Kumar',
  description: 'Efficient battery-operated sprayer for pesticides and fertilizers. Covers large areas quickly.',
  specifications: {
    capacity: '16 Liters',
    type: 'Battery',
    condition: 'Good'
  },
  availability: ['2024-01-15', '2024-01-16', '2024-01-17', '2024-01-18'],
  image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
}];
const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDistrict, setSelectedDistrict] = useState('All');
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedEquipment, setSelectedEquipment] = useState(null);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const categories = ['All', 'Tractors', 'Pumps', 'Harvesters', 'Seed Drills', 'Sprayers', 'Tillers'];
  const districts = ['All', 'Gorakhpur', 'Varanasi', 'Lucknow', 'Patna', 'Deoria', 'Kushinagar'];
  const filteredEquipment = allEquipment.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesDistrict = selectedDistrict === 'All' || item.district === selectedDistrict;
    const matchesPrice = item.price >= priceRange[0] && item.price <= priceRange[1];
    return matchesSearch && matchesCategory && matchesDistrict && matchesPrice;
  });
  const openBookingModal = equipment => {
    setSelectedEquipment(equipment);
    setShowBookingModal(true);
  };
  return <div className="pt-20 min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="font-poppins font-bold text-3xl md:text-4xl mb-4">
            Equipment Marketplace
          </h1>
          <p className="font-roboto text-lg max-w-2xl">
            Browse, book, and rent farming equipment from verified farmers in
            your area. Save costs and increase efficiency.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 py-8">
        {/* Search and Filter Bar */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input type="text" placeholder="Search equipment..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50" />
            </div>
            <Button variant="outline" onClick={() => setShowFilters(!showFilters)} className="md:w-auto">
              <Filter size={20} className="mr-2" />
              Filters
            </Button>
          </div>
          {/* Filters Panel */}
          {showFilters && <div className="mt-4 pt-4 border-t border-gray-200 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block font-roboto text-sm font-medium text-gray-700 mb-2">
                  Category
                </label>
                <select value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50">
                  {categories.map(cat => <option key={cat} value={cat}>
                      {cat}
                    </option>)}
                </select>
              </div>
              <div>
                <label className="block font-roboto text-sm font-medium text-gray-700 mb-2">
                  District
                </label>
                <select value={selectedDistrict} onChange={e => setSelectedDistrict(e.target.value)} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50">
                  {districts.map(dist => <option key={dist} value={dist}>
                      {dist}
                    </option>)}
                </select>
              </div>
              <div>
                <label className="block font-roboto text-sm font-medium text-gray-700 mb-2">
                  Price Range (₹/day)
                </label>
                <div className="flex items-center gap-2">
                  <input type="number" value={priceRange[0]} onChange={e => setPriceRange([parseInt(e.target.value), priceRange[1]])} className="w-20 px-2 py-1 border border-gray-300 rounded-md text-sm" />
                  <span>-</span>
                  <input type="number" value={priceRange[1]} onChange={e => setPriceRange([priceRange[0], parseInt(e.target.value)])} className="w-20 px-2 py-1 border border-gray-300 rounded-md text-sm" />
                </div>
              </div>
            </div>}
        </div>
        {/* Results Summary */}
        <div className="mb-6">
          <p className="font-roboto text-gray-600">
            Showing{' '}
            <span className="font-semibold">{filteredEquipment.length}</span>{' '}
            equipment available
          </p>
        </div>
        {/* Equipment Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredEquipment.map(item => <Card key={item.id} className="h-full flex flex-col">
              <div className="h-48 overflow-hidden relative">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                {item.available && <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                    Available
                  </div>}
              </div>
              <CardContent className="flex-grow">
                <h3 className="font-poppins font-semibold text-lg mb-2 text-neutral-dark">
                  {item.name}
                </h3>
                <p className="font-roboto text-sm text-gray-600 mb-3">
                  {item.description}
                </p>
                <div className="flex items-center mb-2 text-gray-600 font-roboto">
                  <Clock size={16} className="mr-1" />
                  <span className="text-primary font-semibold">
                    ₹{item.price}/day
                  </span>
                </div>
                <div className="flex items-center mb-2 text-gray-600 font-roboto text-sm">
                  <MapPin size={14} className="mr-1" />
                  <span>{item.location}</span>
                </div>
                <div className="flex items-center text-gray-600 font-roboto text-sm">
                  <Star size={14} className="mr-1 text-amber-500 fill-amber-500" />
                  <span>
                    {item.rating} ({item.reviews} reviews)
                  </span>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center gap-2">
                <Button variant="outline" size="sm" onClick={() => openBookingModal(item)} fullWidth>
                  View Details
                </Button>
                <Button variant="primary" size="sm" onClick={() => openBookingModal(item)} fullWidth>
                  Book Now
                </Button>
              </CardFooter>
            </Card>)}
        </div>
        {/* Booking Modal */}
        {showBookingModal && selectedEquipment && <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="font-poppins font-bold text-2xl text-neutral-dark">
                    {selectedEquipment.name}
                  </h2>
                  <button onClick={() => setShowBookingModal(false)} className="text-gray-500 hover:text-gray-700">
                    <X size={24} />
                  </button>
                </div>
                <img src={selectedEquipment.image} alt={selectedEquipment.name} className="w-full h-64 object-cover rounded-lg mb-4" />
                <div className="space-y-4">
                  <div>
                    <h3 className="font-poppins font-semibold text-lg mb-2">
                      Description
                    </h3>
                    <p className="font-roboto text-gray-600">
                      {selectedEquipment.description}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-poppins font-semibold text-lg mb-2">
                      Specifications
                    </h3>
                    <p className="font-roboto text-gray-600">
                      {selectedEquipment.specifications}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="font-roboto text-sm text-gray-500">Owner</p>
                      <p className="font-roboto font-medium">
                        {selectedEquipment.owner}
                      </p>
                    </div>
                    <div>
                      <p className="font-roboto text-sm text-gray-500">
                        Location
                      </p>
                      <p className="font-roboto font-medium">
                        {selectedEquipment.location}
                      </p>
                    </div>
                    <div>
                      <p className="font-roboto text-sm text-gray-500">Price</p>
                      <p className="font-roboto font-medium text-primary">
                        ₹{selectedEquipment.price}/day
                      </p>
                    </div>
                    <div>
                      <p className="font-roboto text-sm text-gray-500">
                        Rating
                      </p>
                      <p className="font-roboto font-medium">
                        {selectedEquipment.rating} ⭐ (
                        {selectedEquipment.reviews} reviews)
                      </p>
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <h3 className="font-poppins font-semibold text-lg mb-3">
                      Book This Equipment
                    </h3>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block font-roboto text-sm font-medium text-gray-700 mb-1">
                          Start Date
                        </label>
                        <input type="date" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50" />
                      </div>
                      <div>
                        <label className="block font-roboto text-sm font-medium text-gray-700 mb-1">
                          End Date
                        </label>
                        <input type="date" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50" />
                      </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-md mb-4">
                      <div className="flex justify-between mb-2">
                        <span className="font-roboto">Rental (3 days)</span>
                        <span className="font-roboto font-semibold">
                          ₹{selectedEquipment.price * 3}
                        </span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span className="font-roboto">Platform Fee</span>
                        <span className="font-roboto font-semibold">
                          ₹{Math.round(selectedEquipment.price * 3 * 0.05)}
                        </span>
                      </div>
                      <div className="border-t pt-2 flex justify-between">
                        <span className="font-poppins font-semibold">
                          Total
                        </span>
                        <span className="font-poppins font-semibold text-primary">
                          ₹
                          {selectedEquipment.price * 3 + Math.round(selectedEquipment.price * 3 * 0.05)}
                        </span>
                      </div>
                    </div>
                    <Button variant="primary" fullWidth size="lg">
                      Confirm Booking
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>}
      </div>
    </div>;
};
export default Marketplace;