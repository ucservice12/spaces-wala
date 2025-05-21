import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin } from 'lucide-react';

const TABS = [
  { key: 'buy', label: 'Buy' },
  { key: 'rent', label: 'Rent' },
  { key: 'sell', label: 'Sell' },
];
const CITIES = ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Pune', 'Kolkata'];

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

  const baseTab =
    'flex-1 py-2 font-medium text-center transition-colors duration-300 focus:outline-none';
  const activeTabStyle = 'bg-blue-600 text-white';
  const inactiveTabStyle =
    variant === 'light'
      ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      : 'bg-gray-800 text-gray-300 hover:bg-gray-700';

  return (
    <div
      className={`rounded-lg shadow-lg p-4 ${variant === 'light' ? 'bg-white' : 'bg-gray-900'} ${className} max-w-2xl mx-auto w-full`}
    >
      {/* Tabs */}
      <div className="flex mb-4">
        {TABS.map((tab, idx) => (
          <button
            key={tab.key}
            className={`${baseTab} ${activeTab === tab.key ? activeTabStyle : inactiveTabStyle}
              ${idx === 0 ? 'rounded-tl-md rounded-bl-md' : ''}
              ${idx === TABS.length - 1 ? 'rounded-tr-md rounded-br-md' : ''}
              text-sm sm:text-base`}
            onClick={() => setActiveTab(tab.key)}
            type="button"
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Search Form */}
      <form onSubmit={handleSearch}>
        <div className="relative">
          <div className="flex items-center border-2 border-gray-300 rounded-md focus-within:border-blue-500 bg-white">
            <span className="pl-3 pr-2 text-gray-400">
              <MapPin size={20} />
            </span>
            <input
              type="text"
              placeholder="Search for a location..."
              className="py-3 w-full outline-none text-gray-700 text-sm sm:text-base"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
              autoComplete="off"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-r-md transition-colors duration-300"
            >
              <Search size={20} />
            </button>
          </div>

          {/* Suggestions */}
          {showSuggestions && (
            <div className="absolute left-0 right-0 bg-white mt-1 border border-gray-200 rounded-md shadow-lg z-10 max-h-56 overflow-y-auto">
              <div className="p-2 border-b border-gray-200">
                <p className="text-xs text-gray-500">Popular Cities</p>
              </div>
              <ul>
                {CITIES.filter(city =>
                  city.toLowerCase().includes(location.toLowerCase())
                ).map((city) => (
                  <li
                    key={city}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-100 flex items-center text-gray-700"
                    onMouseDown={() => {
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