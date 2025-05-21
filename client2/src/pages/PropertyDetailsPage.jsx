import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, BedDouble, Bath, Ruler, Calendar, Heart, Share, Phone, Mail, Home } from 'lucide-react';
import { sampleProperties } from '../data/sampleData';
import PropertyCard from '../components/property/PropertyCard';

const PropertyDetailsPage = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const [isLiked, setIsLiked] = useState(false);

  // Find the property by ID
  const property = sampleProperties.find(prop => prop.id === id) || sampleProperties[0];

  // Similar properties
  const similarProperties = sampleProperties
    .filter(p => p.id !== property.id && p.type === property.type)
    .slice(0, 4);

  return (
    <div className="pt-16 pb-12 bg-gray-50">
      {/* Breadcrumbs */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center text-sm text-gray-500">
            <Link to="/" className="hover:text-blue-600 flex items-center">
              <Home size={14} className="mr-1" /> Home
            </Link>
            <span className="mx-2">/</span>
            <Link to="/search" className="hover:text-blue-600">
              {property.type === 'rent' ? 'Rent' : 'Buy'}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">{property.title}</span>
          </div>
        </div>
      </div>

      {/* Property Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{property.title}</h1>
              <div className="flex items-center text-gray-600 mb-1">
                <MapPin size={16} className="mr-1" />
                <span>{property.location}</span>
              </div>
              <div className="text-blue-600 font-bold text-xl">
                ₹{property.type === 'rent' 
                  ? `${property.price.toLocaleString()}/month` 
                  : property.price.toLocaleString()}
              </div>
            </div>
            <div className="flex items-center space-x-3 mt-4 md:mt-0">
              <button
                onClick={() => setIsLiked(!isLiked)}
                className={`flex items-center px-4 py-2 rounded-md border transition-colors duration-300 ${
                  isLiked 
                    ? 'bg-red-50 border-red-200 text-red-500' 
                    : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Heart size={18} className={`mr-2 ${isLiked ? 'fill-red-500' : ''}`} /> 
                {isLiked ? 'Saved' : 'Save'}
              </button>
              <button className="flex items-center px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 transition-colors duration-300">
                <Share size={18} className="mr-2" /> Share
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side - Property Images and Details */}
          <div className="lg:w-2/3">
            {/* Property Images */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-4">
                <div className="sm:col-span-2 h-72">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                <div className="h-44">
                  <img 
                    src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg" 
                    alt="Property interior"
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                <div className="h-44">
                  <img 
                    src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg" 
                    alt="Property interior"
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
              </div>
            </div>

            {/* Tabs Navigation */}
            <div className="bg-white rounded-lg shadow-md mb-6">
              <div className="flex border-b">
                <button
                  className={`px-4 py-3 font-medium text-center flex-1 ${
                    activeTab === 'overview' 
                      ? 'text-blue-600 border-b-2 border-blue-600' 
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                  onClick={() => setActiveTab('overview')}
                >
                  Overview
                </button>
                <button
                  className={`px-4 py-3 font-medium text-center flex-1 ${
                    activeTab === 'details' 
                      ? 'text-blue-600 border-b-2 border-blue-600' 
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                  onClick={() => setActiveTab('details')}
                >
                  Details
                </button>
                <button
                  className={`px-4 py-3 font-medium text-center flex-1 ${
                    activeTab === 'amenities' 
                      ? 'text-blue-600 border-b-2 border-blue-600' 
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                  onClick={() => setActiveTab('amenities')}
                >
                  Amenities
                </button>
                <button
                  className={`px-4 py-3 font-medium text-center flex-1 ${
                    activeTab === 'location' 
                      ? 'text-blue-600 border-b-2 border-blue-600' 
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                  onClick={() => setActiveTab('location')}
                >
                  Location
                </button>
              </div>

              {/* Tab Content */}
              <div className="p-6">
                {activeTab === 'overview' && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Property Overview</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      <div className="flex flex-col items-center p-3 bg-gray-50 rounded-md">
                        <BedDouble size={24} className="text-blue-600 mb-2" />
                        <span className="text-sm text-gray-500">Bedrooms</span>
                        <span className="font-medium">{property.bedrooms}</span>
                      </div>
                      <div className="flex flex-col items-center p-3 bg-gray-50 rounded-md">
                        <Bath size={24} className="text-blue-600 mb-2" />
                        <span className="text-sm text-gray-500">Bathrooms</span>
                        <span className="font-medium">{property.bathrooms}</span>
                      </div>
                      <div className="flex flex-col items-center p-3 bg-gray-50 rounded-md">
                        <Ruler size={24} className="text-blue-600 mb-2" />
                        <span className="text-sm text-gray-500">Area</span>
                        <span className="font-medium">{property.area} sq.ft</span>
                      </div>
                      <div className="flex flex-col items-center p-3 bg-gray-50 rounded-md">
                        <Calendar size={24} className="text-blue-600 mb-2" />
                        <span className="text-sm text-gray-500">Year Built</span>
                        <span className="font-medium">2019</span>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-6">
                      This beautiful {property.bedrooms} bedroom property in {property.location} offers a perfect blend of comfort and convenience. The property features modern amenities, spacious rooms, and is located in a prime area with easy access to schools, shopping centers, and public transportation.
                    </p>
                    <p className="text-gray-700">
                      The apartment boasts high-quality finishes, modern fixtures, and an efficient layout. With plenty of natural light and ventilation, this property offers a comfortable living environment. The kitchen is fully equipped with modern appliances, and the bathrooms feature premium fittings.
                    </p>
                  </div>
                )}

                {activeTab === 'details' && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Property Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-gray-700 mb-3">Basic Details</h4>
                        <ul className="space-y-2">
                          <li className="flex justify-between">
                            <span className="text-gray-600">Property Type</span>
                            <span className="font-medium">Apartment</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-gray-600">Floor Number</span>
                            <span className="font-medium">5 of 10</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-gray-600">Furnishing</span>
                            <span className="font-medium">Semi-Furnished</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-gray-600">Facing</span>
                            <span className="font-medium">East</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-gray-600">Overlooking</span>
                            <span className="font-medium">Garden</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-700 mb-3">Additional Details</h4>
                        <ul className="space-y-2">
                          <li className="flex justify-between">
                            <span className="text-gray-600">Super Area</span>
                            <span className="font-medium">{property.area} sq.ft</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-gray-600">Carpet Area</span>
                            <span className="font-medium">{Math.floor(property.area * 0.85)} sq.ft</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-gray-600">Status</span>
                            <span className="font-medium">Ready to Move</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-gray-600">Possession</span>
                            <span className="font-medium">Immediate</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-gray-600">Transaction Type</span>
                            <span className="font-medium">Resale</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'amenities' && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Amenities</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <div className="flex items-center p-3 bg-gray-50 rounded-md">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                          <i className="text-blue-600">✓</i>
                        </div>
                        <span>Swimming Pool</span>
                      </div>
                      <div className="flex items-center p-3 bg-gray-50 rounded-md">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                          <i className="text-blue-600">✓</i>
                        </div>
                        <span>Gym</span>
                      </div>
                      <div className="flex items-center p-3 bg-gray-50 rounded-md">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                          <i className="text-blue-600">✓</i>
                        </div>
                        <span>Parking</span>
                      </div>
                      <div className="flex items-center p-3 bg-gray-50 rounded-md">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                          <i className="text-blue-600">✓</i>
                        </div>
                        <span>Power Backup</span>
                      </div>
                      <div className="flex items-center p-3 bg-gray-50 rounded-md">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                          <i className="text-blue-600">✓</i>
                        </div>
                        <span>Children's Play Area</span>
                      </div>
                      <div className="flex items-center p-3 bg-gray-50 rounded-md">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                          <i className="text-blue-600">✓</i>
                        </div>
                        <span>Security</span>
                      </div>
                      <div className="flex items-center p-3 bg-gray-50 rounded-md">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                          <i className="text-blue-600">✓</i>
                        </div>
                        <span>Lift</span>
                      </div>
                      <div className="flex items-center p-3 bg-gray-50 rounded-md">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                          <i className="text-blue-600">✓</i>
                        </div>
                        <span>Club House</span>
                      </div>
                      <div className="flex items-center p-3 bg-gray-50 rounded-md">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                          <i className="text-blue-600">✓</i>
                        </div>
                        <span>Gas Pipeline</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'location' && (
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Location</h3>
                    <div className="bg-gray-200 h-64 mb-4 rounded-md flex items-center justify-center">
                      <p className="text-gray-500">Map View (Interactive map would be here)</p>
                    </div>
                    <h4 className="font-medium text-gray-700 mb-3">Nearby Places</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-medium mb-2">Education</h5>
                        <ul className="space-y-2">
                          <li className="flex justify-between">
                            <span className="text-gray-600">City International School</span>
                            <span className="font-medium">0.5 km</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-gray-600">St. Xavier's College</span>
                            <span className="font-medium">1.2 km</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium mb-2">Healthcare</h5>
                        <ul className="space-y-2">
                          <li className="flex justify-between">
                            <span className="text-gray-600">Apollo Hospital</span>
                            <span className="font-medium">0.8 km</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="text-gray-600">City Care Clinic</span>
                            <span className="font-medium">1.5 km</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Similar Properties */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold mb-4">Similar Properties</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {similarProperties.map(prop => (
                  <PropertyCard key={prop.id} property={prop} />
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Contact and Details */}
          <div className="lg:w-1/3">
            {/* Contact Agent */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4">Contact Agent</h3>
              <div className="flex items-center mb-6">
                <img 
                  src="https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg" 
                  alt="Agent" 
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-medium">Amit Kapoor</h4>
                  <p className="text-sm text-gray-500">SpacesWala.com Agent</p>
                  <div className="flex items-center mt-1">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map(star => (
                        <svg key={star} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-xs text-gray-500 ml-1">(42 reviews)</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <button className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md transition-colors duration-300">
                  <Phone size={18} className="mr-2" /> Call Agent
                </button>
                <button className="w-full flex items-center justify-center border border-blue-600 text-blue-600 hover:bg-blue-50 py-3 rounded-md transition-colors duration-300">
                  <Mail size={18} className="mr-2" /> Email Agent
                </button>
              </div>
            </div>

            {/* Schedule a Visit */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-lg font-semibold mb-4">Schedule a Visit</h3>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Preferred Date
                  </label>
                  <input 
                    type="date" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Preferred Time
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                    <option>Morning (9AM - 12PM)</option>
                    <option>Afternoon (12PM - 3PM)</option>
                    <option>Evening (3PM - 6PM)</option>
                  </select>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md transition-colors duration-300"
                >
                  Schedule Visit
                </button>
              </form>
            </div>

            {/* Home Loan Calculator */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">Home Loan Calculator</h3>
              <form>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Loan Amount (₹)
                  </label>
                  <input 
                    type="text" 
                    value={property.price.toLocaleString()}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Interest Rate (%)
                  </label>
                  <input 
                    type="text" 
                    defaultValue="8.5"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-medium mb-2">
                    Loan Tenure (Years)
                  </label>
                  <input 
                    type="text" 
                    defaultValue="20"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div className="p-4 bg-gray-50 rounded-md mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Monthly EMI</span>
                    <span className="font-medium">₹58,674</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Interest Payable</span>
                    <span className="font-medium">₹40,25,760</span>
                  </div>
                </div>
                <button 
                  type="button"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition-colors duration-300"
                >
                  Apply for Home Loan
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsPage;