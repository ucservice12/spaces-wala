import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, ChevronDown } from 'lucide-react';
import { fetchSuggestions } from '../../machine/property';

// Your constants remain unchanged
const TABS = [
  { key: 'buy', label: 'Buy' },
  { key: 'rent', label: 'Rent' },
  { key: 'sell', label: 'Sell' },
  { key: 'commercial', label: 'Commercial' },
  { key: 'pg', label: 'PG/Co-Living' },

];

const Cities = [
  "Mumbai", "Bengaluru", "Hyderabad", "Pune", "Chennai", "Delhi", "Gurgaon", "Noida",
  "Kolkata", "Ahmedabad", "Thane", "Navi Mumbai", "Ghaziabad", "Greater Noida",
  "Faridabad", "Lucknow", "Jaipur", "Chandigarh", "Indore", "Nagpur", "Coimbatore",
  "Vizag", "Vadodara", "Bhopal", "Mysuru", "Surat", "Patna", "Kanpur", "Rajkot",
  "Vijayawada", "Ludhiana", "Nashik", "Varanasi", "Aurangabad", "Jodhpur", "Madurai",
  "Agra", "Meerut", "Jabalpur", "Ranchi", "Amritsar", "Guwahati", "Jamshedpur",
  "Raipur", "Dehradun", "Trivandrum", "Thrissur", "Salem", "Gwalior"
];

const popularByCity = {
  Pune: ["Wakad", "Baner", "Kothrud", "Viman Nagar", "Hinjewadi"],
  Bengaluru: ["Whitefield", "Electronic City", "JP Nagar", "KR Puram", "Devanahalli"],
  Mumbai: ["Andheri West", "Borivali", "Dadar", "Mira Road East", "Chembur"],
  Nashik: ["Gangapur Road", "Indira Nagar", "College Road"], // Added Nashik for the example
};

const SearchBar = ({ className = '', variant = 'dark' }) => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('buy');
  const [location, setLocation] = useState('');
  const [city, setCity] = useState('Nashik'); // Set default city as per image
  const [query, setQuery] = useState('');
  const [showCityDropdown, setShowCityDropdown] = useState(false);
  const [showPopularSearches, setShowPopularSearches] = useState(false);
  const [filteredCities, setFilteredCities] = useState(Cities);
  const [popularLocations, setPopularLocations] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const cityInputRef = useRef(null);
  const cityDropdownRef = useRef(null);
  const popularSearch = useRef(null);

  const handleSearch = (e) => {
    e.preventDefault();
    if (location.trim()) {
      navigate(`/search?type=${activeTab}&location=${encodeURIComponent(location.trim())}`);
    }
  };

  const handleCityInput = (value) => {
    setCity(value);
    setLocation(value);
    setQuery('');
    const filtered = Cities.filter((c) =>
      c.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCities(filtered);
  };

  const handleCitySelect = (value) => {
    setCity(value);
    setLocation(value);
    setQuery('');
    setShowCityDropdown(false);
    setShowPopularSearches(false);
  };

  const handleQueryChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    setLocation(value); // Sync location with query
  };

  const handleQueryFocus = () => {
    if (!query && popularLocations.length > 0) {
      setShowPopularSearches(true);
    }
  };

  // Your existing logic for setting popular locations
  useEffect(() => {
    setPopularLocations(popularByCity[city] || []);
  }, [city]);

  // Your existing logic for handling clicks outside dropdowns
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
    <div className={`w-full max-w-4xl mx-auto ${className}`}>
      {/* Navigation Tabs */}
      <div
        role="tablist"
        className="bg-gray-700 rounded-t-2xl p-2 mx-auto blur-50 shadow-2xl"
        aria-label="Search options"
      >
        <div className="flex flex-wrap justify-center sm:justify-start gap-1">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              role="tab"
              aria-selected={activeTab === tab.key}
              aria-controls={`panel-${tab.key}`}
              className={`
                py-2 px-6 md:px-8 rounded-full text-sm font-semibold transition-all duration-300 relative
                ${activeTab === tab.key
                  ? 'text-white'
                  : 'text-gray-400 hover:text-white'
                }
              `}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
              {activeTab === tab.key && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-[3px] bg-violet-500 rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Search Section */}
      <div className="bg-white rounded-b-2xl shadow-2xl p-2 w-full -mt-2">
        <form onSubmit={handleSearch}>
          <div className="relative" ref={cityDropdownRef}>
            <div className="flex items-center bg-white rounded-full shadow-md border border-gray-100 focus-within:shadow-lg transition-shadow duration-300">
              {/* City input and dropdown trigger */}
              <div
                className="flex items-center px-4 py-2 cursor-pointer relative w-1/3 min-w-[150px] max-w-[200px]"
                onClick={() => {
                  setShowCityDropdown(!showCityDropdown);
                  setShowPopularSearches(false); // Close other dropdown
                }}
              >
                <input
                  type="text"
                  ref={cityInputRef}
                  className="w-full text-sm text-gray-800 bg-transparent outline-none font-medium placeholder-gray-500 truncate"
                  value={city}
                  onChange={(e) => handleCityInput(e.target.value)}
                  onFocus={() => setShowCityDropdown(true)}
                  placeholder="Select City"
                  aria-label="City"
                />
                <ChevronDown className={`h-4 w-4 text-gray-500 transition-transform duration-300 ml-2 ${showCityDropdown ? 'rotate-180' : ''}`} />
              </div>

              <div className="h-10 w-px bg-gray-300 mx-1" />

              {/* Query input */}
              <div className="relative flex-1">
                <input
                  type="text"
                  className="w-full px-4 py-2 text-sm text-gray-700 bg-transparent outline-none placeholder-gray-400"
                  value={query}
                  onChange={handleQueryChange}
                  onFocus={() => {
                    setShowPopularSearches(true);
                    setShowCityDropdown(false); // Close other dropdown
                  }}
                  placeholder="Search for locality, landmark, project, or builder"
                  aria-label="Search query"
                />
              </div>

              {/* Search button */}
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full transition-colors duration-300 flex items-center justify-center shadow-lg transform active:scale-95"
                aria-label="Search"
              >
                <Search size={20} className="md:hidden" />
                <span className="hidden md:block">Search</span>
              </button>
            </div>

            {/* City Dropdown */}
            {showCityDropdown && (
              <div className="absolute top-full left-0 bg-white border border-gray-200 rounded-lg shadow-xl z-50 w-64 mt-3 animate-fade-in-down">
                <div className="p-3 border-b border-gray-200">
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Top Cities</p>
                </div>
                <div className="max-h-60 overflow-y-auto custom-scroll">
                  {filteredCities.length > 0 ? (
                    filteredCities.map((c, index) => (
                      <div
                        key={index}
                        className="px-4 py-3 cursor-pointer hover:bg-gray-100 text-sm text-gray-800 flex items-center gap-3 transition-colors duration-200"
                        onClick={() => handleCitySelect(c)}
                      >
                        <MapPin className="h-4 w-4 text-gray-400" />
                        {c}
                      </div>
                    ))
                  ) : (
                    <div className="px-4 py-3 text-gray-500 text-sm">No cities found</div>
                  )}
                </div>
              </div>
            )}

            {/* Popular Searches Dropdown */}
            {showPopularSearches && !query && popularLocations.length > 0 && (
              <div
                className="absolute top-full left-1/3 bg-white border border-gray-200 rounded-lg shadow-xl z-50 w-[65%] mt-3 animate-fade-in-down"
                ref={popularSearch}
              >
                <div className="p-3 border-b border-gray-200 text-sm font-semibold text-gray-600">
                  Popular searches in <span className="font-bold">{city}</span>:
                </div>
                <div className="max-h-60 overflow-y-auto custom-scroll">
                  {popularLocations.map((loc, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 px-4 py-3 text-sm text-gray-800 hover:bg-gray-100 cursor-pointer transition-colors duration-200"
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
              <div className="absolute top-full left-1/3 bg-white border border-gray-200 rounded-lg shadow-xl z-50 w-[65%] mt-3 max-h-60 overflow-y-auto custom-scroll animate-fade-in-down">
                {suggestions.map((s, i) => (
                  <div
                    key={i}
                    className="px-4 py-3 hover:bg-gray-100 cursor-pointer text-sm text-gray-800 transition-colors duration-200"
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