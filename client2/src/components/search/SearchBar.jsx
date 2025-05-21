import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin } from 'lucide-react';

const SearchBar = ({ className = '', variant = 'light' }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('buy');
  const [location, setLocation] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    if (location.trim()) {
      navigate(`/search?type=${activeTab}&location=${encodeURIComponent(location.trim())}`);
    }
  };

  const citySuggestions = [
    'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Pune', 'Kolkata'
  ];

  return (
    <div className={`rounded-lg shadow-lg p-4 ${variant === 'light' ? 'bg-white' : 'bg-gray-900'} ${className}`}>
      {/* Tabs */}
      <div className="flex mb-4">
        <button
          className={`flex-1 py-2 font-medium text-center transition-colors duration-300 rounded-tl-md rounded-bl-md ${
            activeTab === 'buy'
              ? 'bg-blue-600 text-white'
              : `${variant === 'light' ? 'bg-gray-100 text-gray-700' : 'bg-gray-800 text-gray-300'} hover:bg-gray-200`
          }`}
          onClick={() => setActiveTab('buy')}
        >
          Buy
        </button>
        <button
          className={`flex-1 py-2 font-medium text-center transition-colors duration-300 ${
            activeTab === 'rent'
              ? 'bg-blue-600 text-white'
              : `${variant === 'light' ? 'bg-gray-100 text-gray-700' : 'bg-gray-800 text-gray-300'} hover:bg-gray-200`
          }`}
          onClick={() => setActiveTab('rent')}
        >
          Rent
        </button>
        <button
          className={`flex-1 py-2 font-medium text-center transition-colors duration-300 rounded-tr-md rounded-br-md ${
            activeTab === 'sell'
              ? 'bg-blue-600 text-white'
              : `${variant === 'light' ? 'bg-gray-100 text-gray-700' : 'bg-gray-800 text-gray-300'} hover:bg-gray-200`
          }`}
          onClick={() => setActiveTab('sell')}
        >
          Sell
        </button>
      </div>

      {/* Search Form */}
      <form onSubmit={handleSearch}>
        <div className="relative">
          <div className="flex items-center border-2 border-gray-300 rounded-md focus-within:border-blue-500 bg-white">
            <div className="pl-3 pr-2 text-gray-400">
              <MapPin size={20} />
            </div>
            <input
              type="text"
              placeholder="Search for a location..."
              className="py-3 w-full outline-none text-gray-700"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-r-md transition-colors duration-300"
            >
              <Search size={20} />
            </button>
          </div>

          {/* Location Suggestions */}
          {showSuggestions && (
            <div className="absolute left-0 right-0 bg-white mt-1 border border-gray-200 rounded-md shadow-lg z-10">
              <div className="p-2 border-b border-gray-200">
                <p className="text-sm text-gray-500">Popular Cities</p>
              </div>
              <ul>
                {citySuggestions.map((city) => (
                  <li
                    key={city}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100 flex items-center text-gray-700"
                    onClick={() => {
                      setLocation(city);
                      setShowSuggestions(false);
                    }}
                  >
                    <MapPin size={16} className="mr-2 text-gray-400" /> {city}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
