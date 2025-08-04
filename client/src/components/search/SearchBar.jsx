// import React, { useEffect, useRef, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Search, MapPin, ChevronDown } from 'lucide-react';
// import { fetchSuggestions } from '../../machine/property';
// const TABS = [
//   { key: 'buy', label: 'Buy' },
//   { key: 'rent', label: 'Rent' },
//   { key: 'commercial', label: 'Commercial' },
//   { key: 'pg', label: 'PG/Co-Living' },
//   { key: 'plots', label: 'Plots' },
// ];


// const Cities = [
//   "Mumbai", "Bengaluru", "Hyderabad", "Pune", "Chennai", "Delhi", "Gurgaon", "Noida",
//   "Kolkata", "Ahmedabad", "Thane", "Navi Mumbai", "Ghaziabad", "Greater Noida",
//   "Faridabad", "Lucknow", "Jaipur", "Chandigarh", "Indore", "Nagpur", "Coimbatore",
//   "Vizag", "Vadodara", "Bhopal", "Mysuru", "Surat", "Patna", "Kanpur", "Rajkot",
//   "Vijayawada", "Ludhiana", "Nashik", "Varanasi", "Aurangabad", "Jodhpur", "Madurai",
//   "Agra", "Meerut", "Jabalpur", "Ranchi", "Amritsar", "Guwahati", "Jamshedpur",
//   "Raipur", "Dehradun", "Trivandrum", "Thrissur", "Salem", "Gwalior"
// ];

// const popularByCity = {
//   Pune: ["Wakad", "Baner", "Kothrud", "Viman Nagar", "Hinjewadi"],
//   Bengaluru: ["Whitefield", "Electronic City", "JP Nagar", "KR Puram", "Devanahalli"],
//   Mumbai: ["Andheri West", "Borivali", "Dadar", "Mira Road East", "Chembur"],
// };

// const SearchBar = ({ className = '', variant = 'light', activeTab, setActiveTab }) => {
//   const navigate = useNavigate();
//   // const [activeTab, setActiveTab] = useState('buy');
//   const [location, setLocation] = useState('');
//   const [city, setCity] = useState('');
//   const [query, setQuery] = useState('');
//   const [showCityDropdown, setShowCityDropdown] = useState(false);
//   const [showPopularSearches, setShowPopularSearches] = useState(false);
//   const [filteredCities, setFilteredCities] = useState(Cities);
//   const [popularLocations, setPopularLocations] = useState([]);
//   const [suggestions, setSuggestions] = useState([]);

//   const cityInputRef = useRef(null);
//   const cityDropdownRef = useRef(null);
//   const popularSearch = useRef(null);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (location.trim()) {
//       navigate(`/search?type=${activeTab}&location=${encodeURIComponent(location.trim())}`);
//     }
//   };

//   const handleCityInput = (value) => {
//     setCity(value);
//     setLocation(value);
//     setQuery('');
//     const filtered = Cities.filter((c) =>
//       c.toLowerCase().includes(value.toLowerCase())
//     );
//     setFilteredCities(filtered);
//   };

//   const handleCitySelect = (value) => {
//     setCity(value);
//     setLocation(value);
//     setQuery('');
//     setShowCityDropdown(false);
//     setShowPopularSearches(false);
//   };

//   useEffect(() => {
//     setPopularLocations(popularByCity[city] || []);
//   }, [city]);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (
//         !cityDropdownRef.current?.contains(event.target) &&
//         !cityInputRef.current?.contains(event.target) &&
//         !popularSearch.current?.contains(event.target)
//       ) {
//         setShowCityDropdown(false);
//         setShowPopularSearches(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   useEffect(() => {
//     if (query.length < 2 || !city) {
//       setSuggestions([]);
//       return;
//     }

//     const controller = new AbortController();
//     const delayDebounce = setTimeout(() => {
//       fetchSuggestions(query, city, controller, setSuggestions); // for get locations in city
//     }, 300);

//     return () => {
//       clearTimeout(delayDebounce);
//       controller.abort();
//     };
//   }, [query, city]);

//   const baseTab = 'flex-1 py-2 font-medium text-center transition-colors duration-300 focus:outline-none';
//   const activeTabStyle = 'bg-blue-600 text-white';
//   const inactiveTabStyle = variant === 'light' ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' : 'bg-gray-800 text-gray-300 hover:bg-gray-700';

//   return (
//     <div
//       className={`rounded-lg shadow-lg  p-4 ${variant === 'light' ? 'backdrop-blur-xl bg-gradient-to-r from-[#3c1e6e]/10 to-[#472672]/60' : 'bg-gray-900'} ${className} max-w-2xl mx-auto w-full`}
//     >
//       {/* Tabs */}
//       <div className="flex justify-center sm:justify-start mb-4 gap-6 px-2">
//         {TABS.map((tab, idx) => (
//           <button
//             key={idx}
//             type="button"
//             onClick={() => setActiveTab(tab.key)}
//             className={`relative pb-1 text-sm sm:text-base font-medium
//         ${activeTab === tab.key ? 'text-white' : 'text-white/70 hover:text-white'}
//       `}
//           >
//             {tab.label}
//             {activeTab === tab.key && (
//               <span className="absolute left-0 -bottom-0.5 h-[2px] w-full bg-white rounded-full" />
//             )}
//           </button>
//         ))}
//       </div>


//       {/* Search Form */}
//       <form onSubmit={handleSearch}>
//         <div className="relative" ref={cityDropdownRef}>
//           {/* Search bar container */}
//           <div className="flex flex-row flex-wrap items-center bg-white rounded-full px-2 md:px-4 py-2 shadow-sm border border-gray-300 mt-2 gap-2 w-full">
//             {/* City input */}
//             <input
//               type="text"
//               ref={cityInputRef}
//               className=" hidden md:block w-[10%] md:w-[20%] px-2 py-2 text-sm text-gray-800 bg-transparent outline-none min-w-[80px]"
//               value={city}
//               onChange={(e) => handleCityInput(e.target.value)}
//               onFocus={() => {
//                 setShowCityDropdown(true);
//                 setShowPopularSearches(false);
//               }}
//               placeholder="City"
//             />
//             <ChevronDown className=" hidden md:block h-4 w-4 text-gray-500 mr-2" />

//             {/* Divider */}
//             <div className=" hidden md:block h-8 w-px bg-gray-300 md:mx-2" />

//             {/* Main input */}
//             <input
//               type="text"
//               className="flex-1 px-2 py-2 text-sm text-gray-700 bg-transparent outline-none min-w-[120px]"
//               value={query}
//               onChange={(e) => setQuery(e.target.value)}
//               onFocus={() => {
//                 if (popularLocations.length > 0 && !query) {
//                   setShowPopularSearches(true);
//                 }
//               }}
//               placeholder="Search for locality, landmark, project, or builder"
//             />

//             {/* Search button */}
//             <button
//               type="submit"
//               className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors duration-300 flex items-center justify-center"
//             >
//               <Search size={20} />
//             </button>
//           </div>

//           {/* City Dropdown */}
//           {showCityDropdown && (
//             <div className="absolute top-full left-0 bg-white border border-gray-300 rounded-md shadow-lg z-50 w-44 mt-2">
//               <div className="p-3 border-b border-gray-200">
//                 <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
//                   Top Cities
//                 </p>
//               </div>
//               <div className="max-h-60 overflow-y-auto custom-scroll">
//                 {filteredCities.length > 0 ? (
//                   filteredCities.map((c, index) => (
//                     <div
//                       key={index}
//                       className="px-4 py-1 cursor-pointer hover:bg-gray-100 text-sm text-black flex items-center gap-2"
//                       onClick={() => handleCitySelect(c)}
//                     >
//                       <MapPin className="h-4 w-4 text-gray-500" />
//                       {c}
//                     </div>
//                   ))
//                 ) : (
//                   <div className="px-4 py-2 text-gray-500 text-sm">No cities found</div>
//                 )}
//               </div>
//             </div>
//           )}

//           {/* Popular Locations */}
//           {showPopularSearches && !query && popularLocations?.length > 0 && (
//             <div
//               className="absolute top-full left-0 sm:left-[26.5%] bg-white border border-gray-300 rounded-md shadow-lg z-50 w-full sm:w-[70%] mt-2"
//               ref={popularSearch}
//             >
//               <div className="p-3 border-b border-gray-200 text-sm font-semibold text-gray-600">
//                 Popular search in <span className="font-bold">{city}</span>:
//               </div>
//               {popularLocations.map((loc, i) => (
//                 <div
//                   key={i}
//                   className="flex items-center gap-2 px-4 py-2 text-sm text-black hover:bg-gray-100 cursor-pointer"
//                   onClick={() => {
//                     setQuery(loc);
//                     setLocation(loc);
//                     setShowPopularSearches(false);
//                   }}
//                 >
//                   <MapPin className="h-4 w-4 text-gray-500" />
//                   {loc}
//                   <span className="ml-auto text-[10px] text-gray-400 tracking-widest">LOCALITY</span>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* Google Suggestions */}
//           {query && suggestions.length > 0 && (
//             <div className="absolute top-full left-0 sm:left-1/4 bg-white border border-gray-300 rounded-md shadow-lg z-50 w-full sm:w-[70%] mt-2 max-h-60 overflow-y-auto">
//               {suggestions.map((s, i) => (
//                 <div
//                   key={i}
//                   className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-black"
//                   onClick={() => {
//                     setQuery(s);
//                     setLocation(s);
//                   }}
//                 >
//                   {s}
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </form>
//     </div>


//   );
// };

// export default SearchBar;

import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MapPin, ChevronDown } from 'lucide-react';
import { fetchSuggestions } from '../../machine/property';

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
  Nashik: ["Gangapur Road", "Indira Nagar", "College Road"],
};
import heroBuy from '@/assets/hero/herobuy.jpg';
import hero2 from '@/assets/hero/hero2.jpg';
import hero3 from '@/assets/hero/hero3.jpg';
import commercial from '@/assets/hero/herobuy.jpg';
import herobgimage from '@/assets/hero/herobgimage.jpeg';
import pgliving from '@/assets/hero/pgliving.avif';

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
  const [city, setCity] = useState('Pune'); // Set default city as per image
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
    setLocation(value);
  };

  const handleQueryFocus = () => {
    if (!query && popularLocations.length > 0) {
      setShowPopularSearches(true);
    }
  };

  // New function to handle tab click and notify parent
  const handleTabClick = (tabKey) => {
    setActiveTab(tabKey);
    // Check if the prop exists before calling it
    if (onTabChange) {
      onTabChange(TAB_IMAGES[tabKey]);
    }
  };

  useEffect(() => {
    setPopularLocations(popularByCity[city] || []);
  }, [city]);

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
      <div className="bg-white rounded-b-2xl shadow-2xl p-2 w-full -mt-2">
        <form onSubmit={handleSearch}>
          <div className="relative" ref={cityDropdownRef}>
            <div className="flex items-center bg-white rounded-full shadow-md border border-gray-100 focus-within:shadow-lg transition-shadow duration-300">
              {/* City input and dropdown trigger */}
              <div
                className="flex items-center px-4 py-2 cursor-pointer relative w-1/3 min-w-[150px] max-w-[200px]"
                onClick={() => {
                  setShowCityDropdown(!showCityDropdown);
                  setShowPopularSearches(false);
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
                  className="w-full px-0 py-2 text-sm text-gray-700 bg-transparent outline-none placeholder-gray-400"
                  value={query}
                  onChange={handleQueryChange}
                  onFocus={() => {
                    setShowPopularSearches(true);
                    setShowCityDropdown(false);
                  }}
                  placeholder="Search for locality, landmark, project, or builder."
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
