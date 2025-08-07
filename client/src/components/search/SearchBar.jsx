import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, ChevronDown } from 'lucide-react';
import { fetchSuggestions } from '../../machine/property';

// Tabs for different search categories
const TABS = [
  { key: 'buy', label: 'Buy' },
  { key: 'rent', label: 'Rent' },
  { key: 'sell', label: 'Sell' },
  { key: 'commercial', label: 'Commercial' },
  { key: 'pg', label: 'PG/Co-Living' },
];

// List of cities for the city dropdown
const Cities = [
  "Mumbai", "Bengaluru", "Hyderabad", "Pune", "Chennai", "Delhi", "Gurgaon", "Noida",
  "Kolkata", "Ahmedabad", "Thane", "Navi Mumbai", "Ghaziabad", "Greater Noida",
  "Faridabad", "Lucknow", "Jaipur", "Chandigarh", "Indore", "Nagpur", "Coimbatore",
  "Vizag", "Vadodara", "Bhopal", "Mysuru", "Surat", "Patna", "Kanpur", "Rajkot",
  "Vijayawada", "Ludhiana", "Nashik", "Varanasi", "Aurangabad", "Jodhpur", "Madurai",
  "Agra", "Meerut", "Jabalpur", "Ranchi", "Amritsar", "Guwahati", "Jamshedpur",
  "Raipur", "Dehradun", "Trivandrum", "Thrissur", "Salem", "Gwalior"
];

// Popular search locations based on city
const popularByCity = {
  Pune: ["Wakad", "Baner", "Kothrud", "Viman Nagar", "Hinjewadi"],
  Bengaluru: ["Whitefield", "Electronic City", "JP Nagar", "KR Puram", "Devanahalli"],
  Mumbai: ["Andheri West", "Borivali", "Dadar", "Mira Road East", "Chembur"],
  Nashik: ["Gangapur Road", "Indira Nagar", "College Road"],
};

// Image imports for tab-based background changes
import heroBuy from '@/assets/hero/herobuy.jpg';
import hero2 from '@/assets/hero/hero2.jpg';
import hero3 from '@/assets/hero/hero3.jpg';
import commercial from '@/assets/hero/commercial.jpg';
import herobgimage from '@/assets/hero/herobgimage.jpeg';
import pgliving from '@/assets/hero/pgliving.avif';

// Mapping tab keys to their corresponding background images
const TAB_IMAGES = {
  buy: herobgimage,
  rent: hero2,
  sell: hero3,
  commercial: commercial,
  pg: pgliving
};

const SearchBar = ({ className = '', variant = 'dark', onTabChange }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('buy');
  const [location, setLocation] = useState('');
  const [city, setCity] = useState('Nashik');
  const [query, setQuery] = useState('');
  const [showCityDropdown, setShowCityDropdown] = useState(false);
  const [showPopularSearches, setShowPopularSearches] = useState(false);
  const [filteredCities, setFilteredCities] = useState(Cities);
  const [popularLocations, setPopularLocations] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  // Refs to manage dropdown visibility
  const cityInputRef = useRef(null);
  const cityDropdownRef = useRef(null);
  const popularSearch = useRef(null);

  // Handle form submission
  const handleSearch = (e) => {
    e.preventDefault();
    if (location.trim()) {
      navigate(`/search?type=${activeTab}&location=${encodeURIComponent(location.trim())}`);
    }
  };

  // Handle city input and filter cities
  const handleCityInput = (value) => {
    setCity(value);
    setLocation(value);
    setQuery('');
    const filtered = Cities.filter((c) =>
      c.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCities(filtered);
  };

  // Handle city selection
  const handleCitySelect = (value) => {
    setCity(value);
    setLocation(value);
    setQuery('');
    setShowCityDropdown(false);
    setShowPopularSearches(false);
  };

  // Handle query input changes
  const handleQueryChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setLocation(value);
  };

  // Show popular searches on query input focus
  const handleQueryFocus = () => {
    if (!query && popularLocations.length > 0) {
      setShowPopularSearches(true);
    }
  };

  // Handle tab clicks
  const handleTabClick = (tabKey) => {
    setActiveTab(tabKey);
    if (onTabChange) {
      onTabChange(TAB_IMAGES[tabKey]);
    }
  };

  // Update popular locations when city changes
  useEffect(() => {
    setPopularLocations(popularByCity[city] || []);
  }, [city]);

  // Handle clicks outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        !cityDropdownRef.current?.contains(event.target) &&
        !cityInputRef.current?.contains(event.target) &&
        !popularSearch.current?.contains(event.target)
      ) {
        setShowCityDropdown(false);
        setShowPopularSearches(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Fetch suggestions with debounce
  useEffect(() => {
    if (query.length < 2 || !city) {
      setSuggestions([]);
      return;
    }
    const controller = new AbortController();
    const delayDebounce = setTimeout(() => {
      fetchSuggestions(query, city, controller, setSuggestions);
    }, 300);
    return () => {
      clearTimeout(delayDebounce);
      controller.abort();
    };
  }, [query, city]);

  return (
    <div className={`w-full max-w-4xl mx-auto px-4 sm:px-0 ${className}`}>
      {/* Navigation Tabs */}
      <div
        role="tablist"
        className="bg-gray-700 rounded-t-2xl p-2 sm:p-3 shadow-2xl"
        aria-label="Search options"
      >
        <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              role="tab"
              aria-selected={activeTab === tab.key}
              aria-controls={`panel-${tab.key}`}
              className={`
                py-2 px-3 sm:px-6 text-xs sm:text-sm font-semibold transition-all duration-300 relative
                ${
                  activeTab === tab.key
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white'
                }
              `}
              onClick={() => handleTabClick(tab.key)}
            >
              {tab.label}
              {activeTab === tab.key && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-[2px] bg-white rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Search Section */}
      <div className="bg-white rounded-b-2xl shadow-2xl p-3 sm:p-4 w-full -mt-2">
        <form onSubmit={handleSearch}>
          <div className="relative" ref={cityDropdownRef}>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center bg-white rounded-lg sm:rounded-full shadow-md border border-gray-100 focus-within:shadow-lg transition-shadow duration-300">
              {/* City input and dropdown trigger */}
              <div
                className="flex items-center px-3 py-2 cursor-pointer relative w-full sm:w-1/3 sm:min-w-[120px] sm:max-w-[180px] border-b sm:border-b-0 sm:border-r border-gray-300"
                onClick={() => {
                  setShowCityDropdown(!showCityDropdown);
                  setShowPopularSearches(false);
                }}
              >
                <input
                  type="text"
                  ref={cityInputRef}
                  className="w-full text-xs sm:text-sm text-gray-800 bg-transparent outline-none font-medium placeholder-gray-500 truncate"
                  value={city}
                  onChange={(e) => handleCityInput(e.target.value)}
                  onFocus={() => setShowCityDropdown(true)}
                  placeholder="Select City"
                  aria-label="City"
                />
                <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform duration-300 ml-2 ${showCityDropdown ? 'rotate-180' : ''}`} />
              </div>

              {/* Query input */}
              <div className="relative flex-1 mt-2 sm:mt-0">
                <input
                  type="text"
                  className="w-full px-3 sm:px-4 py-2 text-xs sm:text-sm text-gray-700 bg-transparent outline-none placeholder-gray-400"
                  value={query}
                  onChange={handleQueryChange}
                  onFocus={() => {
                    setShowPopularSearches(true);
                    setShowCityDropdown(false);
                  }}
                  placeholder="Search for locality, landmark, project, or builder"
                  aria-label="Search query"
                />
              </div>

              {/* Search button */}
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-full transition-colors duration-300 flex items-center justify-center shadow-lg transform active:scale-95 mt-2 sm:mt-0"
                aria-label="Search"
              >
                <Search size={16} className="sm:hidden" />
                <span className="hidden sm:block text-xs sm:text-sm">Search</span>
              </button>
            </div>

            {/* City Dropdown */}
            {showCityDropdown && (
              <div className="absolute top-full left-0 bg-white border border-gray-200 rounded-lg shadow-xl z-50 w-full sm:w-64 mt-2 animate-fade-in-down">
                <div className="p-3 border-b border-gray-200">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Top Cities</p>
                </div>
                <div className="max-h-60 overflow-y-auto custom-scroll">
                  {filteredCities.length > 0 ? (
                    filteredCities.map((c, index) => (
                      <div
                        key={index}
                        className="px-4 py-2 sm:py-3 cursor-pointer hover:bg-gray-100 text-xs sm:text-sm text-gray-800 flex items-center gap-3 transition-colors duration-200"
                        onClick={() => handleCitySelect(c)}
                      >
                        <MapPin className="h-4 w-4 text-gray-400" />
                        {c}
                      </div>
                    ))
                  ) : (
                    <div className="px-4 py-3 text-gray-500 text-xs sm:text-sm">No cities found</div>
                  )}
                </div>
              </div>
            )}

            {/* Popular Searches Dropdown */}
            {showPopularSearches && !query && popularLocations.length > 0 && (
              <div
                className="absolute top-full left-0 sm:left-1/3 bg-white border border-gray-200 rounded-lg shadow-xl z-50 w-full sm:w-[65%] mt-2 animate-fade-in-down"
                ref={popularSearch}
              >
                <div className="p-3 border-b border-gray-200 text-xs sm:text-sm font-semibold text-gray-600">
                  Popular searches in <span className="font-bold">{city}</span>:
                </div>
                <div className="max-h-60 overflow-y-auto custom-scroll">
                  {popularLocations.map((loc, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 px-4 py-2 sm:py-3 text-xs sm:text-sm text-gray-800 hover:bg-gray-100 cursor-pointer transition-colors duration-200"
                      onClick={() => {
                        setQuery(loc);
                        setLocation(loc);
                        setShowPopularSearches(false);
                      }}
                    >
                      <MapPin className="h-4 w-4 text-gray-500" />
                      <span>{loc}</span>
                      <span className="ml-auto text-[10px] text-gray-400 tracking-wider uppercase">Locality</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Suggestions Dropdown */}
            {query && suggestions.length > 0 && (
              <div className="absolute top-full left-0 sm:left-1/3 bg-white border border-gray-200 rounded-lg shadow-xl z-50 w-full sm:w-[65%] mt-2 max-h-60 overflow-y-auto custom-scroll animate-fade-in-down">
                {suggestions.map((s, i) => (
                  <div
                    key={i}
                    className="px-4 py-2 sm:py-3 hover:bg-gray-100 cursor-pointer text-xs sm:text-sm text-gray-800 transition-colors duration-200"
                    onClick={() => {
                      setQuery(s);
                      setLocation(s);
                      setSuggestions([]);
                    }}
                  >
                    <div className="flex items-center">
                      <Search className="h-4 w-4 text-gray-400 mr-2" />
                      {s}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;