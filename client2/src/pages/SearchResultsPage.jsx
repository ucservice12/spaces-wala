import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Filter, MapPin, ArrowDownUp, Grid, List, Home } from 'lucide-react';
import PropertyCard from '../components/property/PropertyCard';
import { sampleProperties } from '../data/sampleData';

const filterOptions = {
  priceRange: { title: 'Price Range', type: 'range', placeholders: ['Min', 'Max'] },
  propertyType: {
    title: 'Property Type',
    type: 'checkbox',
    options: ['Apartment', 'Villa', 'Independent House', 'Plot'],
  },
  bedrooms: { title: 'Bedrooms', type: 'button', options: [1, 2, 3, 4, '4+'] },
  bathrooms: { title: 'Bathrooms', type: 'button', options: [1, 2, 3, '3+'] },
  area: { title: 'Area (sq.ft)', type: 'range', placeholders: ['Min', 'Max'] },
  amenities: {
    title: 'Amenities',
    type: 'checkbox',
    options: ['Swimming Pool', 'Gym', "Children's Play Area", 'Power Backup'],
  },
};

const renderFilterSection = (mobile = false) =>
  Object.entries(filterOptions).map(([key, config]) => (
    <div key={key} className="mb-6">
      <h3 className="font-medium mb-3">{config.title}</h3>
      {config.type === 'range' && (
        <div className="flex gap-2">
          {config.placeholders.map((ph, idx) => (
            <input
              key={idx}
              type="text"
              placeholder={ph}
              className="w-1/2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          ))}
        </div>
      )}
      {config.type === 'checkbox' && (
        <div className="space-y-2">
          {config.options.map((option) => (
            <label key={option} className="flex items-center">
              <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" />
              <span className="ml-2 text-gray-700">{option}</span>
            </label>
          ))}
        </div>
      )}
      {config.type === 'button' && (
        <div className="flex flex-wrap gap-2">
          {config.options.map((option) => (
            <button
              key={option}
              className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  ));

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('relevance');
  const [viewMode, setViewMode] = useState('grid');

  const type = searchParams.get('type') || 'buy';
  const location = searchParams.get('location') || '';
  const city = searchParams.get('city') || '';

  const filteredProperties = sampleProperties.filter((property) => {
    if (type && property.type !== type) return false;
    if (location && !property.location.toLowerCase().includes(location.toLowerCase())) return false;
    if (city && !property.location.toLowerCase().includes(city.toLowerCase())) return false;
    return true;
  });

  const sortedProperties = [...filteredProperties].sort((a, b) => {
    switch (sortBy) {
      case 'price-low-high':
        return a.price - b.price;
      case 'price-high-low':
        return b.price - a.price;
      case 'newest':
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      default:
        return 0;
    }
  });

  return (
    <div className="pt-16 pb-12 bg-gray-50 min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center text-sm text-gray-500">
            <Link to="/" className="hover:text-blue-600 flex items-center">
              <Home size={14} className="mr-1" /> Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">
              {type === 'rent' ? 'Rent' : type === 'sell' ? 'Sell' : 'Buy'}{' '}
              {location || city ? `in ${location || city}` : ''}
            </span>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            {type === 'rent' ? 'Rental Properties' : 'Properties for Sale'}{' '}
            {location || city ? ` in ${location || city}` : ''}
          </h1>
          <p className="text-gray-600 mt-1">{filteredProperties.length} properties found</p>
        </div>
      </div>

      {/* Filters & Results */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Desktop Filters */}
          <div className="hidden lg:block lg:w-1/4 bg-white rounded-lg shadow-md p-6 h-fit">
            <h2 className="text-lg font-semibold mb-4">Filters</h2>
            {renderFilterSection()}
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition-colors duration-300">
              Apply Filters
            </button>
          </div>

          {/* Results */}
          <div className="lg:w-3/4">
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden mb-4">
              <button
                className="w-full flex items-center justify-center bg-white p-3 rounded-lg shadow-md"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter size={18} className="mr-2" />
                Filters
              </button>
              {showFilters && (
                <div className="bg-white rounded-lg shadow-md p-6 mt-2">
                  {renderFilterSection(true)}
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition-colors duration-300">
                    Apply Filters
                  </button>
                </div>
              )}
            </div>

            {/* Sort and View */}
            <div className="flex flex-wrap justify-between items-center mb-4 bg-white p-3 rounded-lg shadow-md">
              <div className="flex items-center mb-2 sm:mb-0">
                <ArrowDownUp size={18} className="mr-2 text-gray-500" />
                <select
                  className="border-none focus:ring-0 text-gray-700 pr-8"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="relevance">Relevance</option>
                  <option value="price-low-high">Price: Low to High</option>
                  <option value="price-high-low">Price: High to Low</option>
                  <option value="newest">Newest First</option>
                </select>
              </div>
              <div className="flex items-center gap-3">
                <button
                  className={`p-2 rounded-md ${
                    viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'bg-white text-gray-600'
                  }`}
                  onClick={() => setViewMode('grid')}
                >
                  <Grid size={18} />
                </button>
                <button
                  className={`p-2 rounded-md ${
                    viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'bg-white text-gray-600'
                  }`}
                  onClick={() => setViewMode('list')}
                >
                  <List size={18} />
                </button>
              </div>
            </div>

            {/* Properties */}
            {sortedProperties.length > 0 ? (
              <div
                className={
                  viewMode === 'grid'
                    ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'
                    : 'space-y-4'
                }
              >
                {sortedProperties.map((property) =>
                  viewMode === 'grid' ? (
                    <PropertyCard key={property.id} property={property} />
                  ) : (
                    <div key={property.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                      <div className="flex flex-col sm:flex-row">
                        <div className="sm:w-1/3 h-48 sm:h-auto">
                          <img
                            src={property.image}
                            alt={property.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="sm:w-2/3 p-4">
                          <h3 className="text-xl font-semibold text-gray-800 mb-2">{property.title}</h3>
                          <div className="flex items-center text-gray-500 mb-3">
                            <MapPin size={16} className="mr-1" />
                            <span className="text-sm">{property.location}</span>
                          </div>
                          <div className="flex flex-wrap gap-4 mb-4">
                            <div className="text-sm text-gray-600">{property.bedrooms} Beds</div>
                            <div className="text-sm text-gray-600">{property.bathrooms} Baths</div>
                            <div className="text-sm text-gray-600">{property.area} sq.ft</div>
                          </div>
                          <div className="flex justify-between items-center">
                            <div className="text-blue-600 font-bold text-lg">
                              ₹
                              {property.type === 'rent'
                                ? `${property.price.toLocaleString()}/mo`
                                : property.price.toLocaleString()}
                            </div>
                            <Link
                              to={`/property/${property.id}`}
                              className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                            >
                              View Details
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <p className="text-gray-600 mb-4">No properties found matching your criteria.</p>
                <Link to="/" className="text-blue-600 hover:text-blue-800 font-medium">
                  Return to Home
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultsPage;
