// import React, { useEffect, useRef, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { Search, MapPin, ChevronDown } from 'lucide-react';
// import { fetchSuggestions } from '../../machine/property';
// import { Button } from '@/components/ui/button';

// const TABS = [
//   { key: 'buy', label: 'BUY' },
//   { key: 'rent', label: 'RENT' },
//   { key: 'commercial', label: 'COMMERCIAL' },
//   { key: 'pg', label: 'PG/CO-LIVING' },
//   { key: 'plots', label: 'PLOTS' },
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

// const SearchBar = ({ className = '', variant = 'light' }) => {
//   const navigate = useNavigate();
//   const [activeTab, setActiveTab] = useState('buy');
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
//       fetchSuggestions(query, city, controller, setSuggestions);
//     }, 300);

//     return () => {
//       clearTimeout(delayDebounce);
//       controller.abort();
//     };
//   }, [query, city]);

//   return (
//     <div className={` bg-gradient-to-br from-purple-600 via-purple-700 to-blue-200  ${className}`}>
//       <div className="container mx-auto px-4 py-8">
//         {/* Navigation Tabs */}
//         <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-2 mb-6 max-w-4xl mx-auto">
//           <div className="flex flex-wrap gap-1">
//             {TABS.map((tab) => (
//               <button
//                 key={tab.key}
//                 onClick={() => setActiveTab(tab.key)}
//                 className={`px-6 py-3 rounded-xl font-medium text-sm transition-all duration-200 ${
//                   activeTab === tab.key
//                     ? 'bg-white text-gray-900 shadow-lg'
//                     : 'text-white/80 hover:text-white hover:bg-white/10'
//                 }`}
//               >
//                 {tab.label}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Search Section */}
//         <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-4xl mx-auto">
//           <form onSubmit={handleSearch}>
//             <div className="flex flex-col md:flex-row gap-4" ref={cityDropdownRef}>
//               {/* Location Dropdown */}
//               <div className="relative">
//                 <button 
//                   type="button"
//                   ref={cityInputRef}
//                   className="flex items-center justify-between w-full md:w-48 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-700 font-medium hover:bg-gray-100 transition-colors"
//                   onClick={() => setShowCityDropdown(!showCityDropdown)}
//                 >
//                   <span>{city || 'Select City'}</span>
//                   <ChevronDown className="w-5 h-5 text-gray-400" />
//                 </button>

//                 {/* City Dropdown */}
//                 {showCityDropdown && (
//                   <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-lg z-50 w-full max-h-60 overflow-y-auto">
//                     <div className="p-3 border-b border-gray-200">
//                       <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Top Cities</p>
//                     </div>
//                     {filteredCities.length > 0 ? (
//                       filteredCities.map((c, index) => (
//                         <div
//                           key={index}
//                           className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-sm text-black flex items-center gap-2"
//                           onClick={() => handleCitySelect(c)}
//                         >
//                           <MapPin className="h-4 w-4 text-gray-500" />
//                           {c}
//                         </div>
//                       ))
//                     ) : (
//                       <div className="px-4 py-2 text-gray-500 text-sm">No cities found</div>
//                     )}
//                   </div>
//                 )}
//               </div>

//               {/* Search Input */}
//               <div className="flex-1 relative">
//                 <input
//                   type="text"
//                   className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
//                   value={query}
//                   onChange={(e) => setQuery(e.target.value)}
//                   onFocus={() => {
//                     if (popularLocations.length > 0 && !query) {
//                       setShowPopularSearches(true);
//                     }
//                   }}
//                   placeholder="Search for locality, landmark, project, or builder"
//                 />

//                 {/* Popular Locations */}
//                 {showPopularSearches && !query && popularLocations?.length > 0 && (
//                   <div
//                     className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-lg z-50 w-full"
//                     ref={popularSearch}
//                   >
//                     <div className="p-3 border-b border-gray-200 text-sm font-semibold text-gray-600">
//                       Popular search in <span className="font-bold">{city}</span>:
//                     </div>
//                     {popularLocations.map((loc, i) => (
//                       <div
//                         key={i}
//                         className="flex items-center gap-2 px-4 py-2 text-sm text-black hover:bg-gray-100 cursor-pointer"
//                         onClick={() => {
//                           setQuery(loc);
//                           setLocation(loc);
//                           setShowPopularSearches(false);
//                         }}
//                       >
//                         <MapPin className="h-4 w-4 text-gray-500" />
//                         {loc}
//                         <span className="ml-auto text-[10px] text-gray-400 tracking-widest">LOCALITY</span>
//                       </div>
//                     ))}
//                   </div>
//                 )}

//                 {/* Google Suggestions */}
//                 {query && suggestions.length > 0 && (
//                   <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-xl shadow-lg z-50 w-full max-h-60 overflow-y-auto">
//                     {suggestions.map((s, i) => (
//                       <div
//                         key={i}
//                         className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-black"
//                         onClick={() => {
//                           setQuery(s);
//                           setLocation(s);
//                         }}
//                       >
//                         {s}
//                       </div>
//                     ))}
//                   </div>
//                 )}
//               </div>

//               {/* Search Button */}
//               <Button 
//                 type="submit"
//                 className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-xl font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-200 flex items-center gap-2"
//               >
//                 <Search className="w-5 h-5" />
//                 Search
//               </Button>
//             </div>
//           </form>
//         </div>

//         {/* Additional Content Area */}
//         {/* <div className="mt-8 text-center">
//           <p className="text-white/80 text-lg">
//             Find your perfect property with our advanced search
//           </p>
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default SearchBar;