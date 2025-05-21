import SearchBar from '../search/SearchBar';

const Hero = () => {
  return (
    <div className="relative min-h-[600px] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg" 
          alt="Modern home exterior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/40"></div>
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 z-10 relative py-28">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-md md:text-xl lg:text-4xl font-bold text-white mb-6 leading-tight">
            Find Your Perfect Home with SpacesWala.com
          </h3>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Discover properties for buying, renting, or selling across India. Your dream home is just a search away.
          </p>

          {/* Search Bar */}
          <SearchBar className="mt-8" />

          {/* Statistics */}
          <div className="flex flex-wrap gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm px-5 py-3 rounded-lg text-white">
              <p className="text-2xl font-bold">15K+</p>
              <p className="text-gray-200 text-sm">Properties Listed</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-5 py-3 rounded-lg text-white">
              <p className="text-2xl font-bold">10K+</p>
              <p className="text-gray-200 text-sm">Happy Customers</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm px-5 py-3 rounded-lg text-white">
              <p className="text-2xl font-bold">500+</p>
              <p className="text-gray-200 text-sm">Cities Covered</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;