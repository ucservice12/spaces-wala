import Hero from '../components/layout/Hero';
import { sampleProperties, featuredCities } from '../data/sampleData';
import { Home, Building, Users, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PropertyCard from '../components/property/PropertyCard';

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <Hero />

      {/* Featured Properties Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Featured Properties</h2>
            <Link 
              to="/search" 
              className="flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300"
            >
              View All <ChevronRight size={18} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {sampleProperties.slice(0, 8).map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Cities Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">Find Properties in Popular Cities</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {featuredCities.map(city => (
              <Link 
                key={city.id} 
                to={`/search?city=${city.name}`} 
                className="group"
              >
                <div className="bg-gray-100 rounded-lg overflow-hidden shadow-md transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-lg">
                  <div className="h-32 overflow-hidden">
                    <img 
                      src={city.image} 
                      alt={city.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-3 text-center bg-white">
                    <h3 className="font-medium text-gray-800">{city.name}</h3>
                    <p className="text-sm text-gray-500">{city.propertyCount}+ Properties</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-12">Our Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <Home className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Buy a Home</h3>
              <p className="text-gray-600 mb-4">Find your place with an immersive photo experience and the most listings, including things you won't find anywhere else.</p>
              <Link 
                to="/search?type=buy" 
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
              >
                Browse Homes <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <Building className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Rent a Home</h3>
              <p className="text-gray-600 mb-4">We're creating a seamless online experience from shopping on the largest rental network, to applying, to paying rent.</p>
              <Link 
                to="/search?type=rent" 
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
              >
                Find Rentals <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Sell a Home</h3>
              <p className="text-gray-600 mb-4">No matter what path you take to sell your home, we can help you navigate a successful sale.</p>
              <Link 
                to="/sell" 
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
              >
                Sell Your Home <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-12">What Our Customers Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg" 
                  alt="Customer" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">Rahul Sharma</h4>
                  <p className="text-sm text-gray-600">Mumbai</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "SpacesWala.com made finding my dream apartment so easy. The filters are intuitive and the virtual tours saved me so much time!"
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg" 
                  alt="Customer" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">Priya Patel</h4>
                  <p className="text-sm text-gray-600">Bangalore</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "I sold my property within a month of listing it on SpacesWala.com. The process was smooth and the team was very supportive."
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" 
                  alt="Customer" 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">Vikram Singh</h4>
                  <p className="text-sm text-gray-600">Delhi</p>
                </div>
              </div>
              <p className="text-gray-700 italic">
                "The loan calculator and EMI tools helped me plan my finances better. Thanks to SpacesWala.com, I'm now a proud homeowner!"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download App Section */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Download the SpacesWala.com App</h2>
              <p className="text-blue-100 mb-6">
                Get the full experience on the go. Search properties, connect with agents, and manage your favorite listings all from your phone.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#" className="inline-block">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                    alt="Get it on Google Play" 
                    className="h-12"
                  />
                </a>
                <a href="#" className="inline-block">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                    alt="Download on the App Store" 
                    className="h-12"
                  />
                </a>
              </div>
            </div>
            <div className="md:w-1/3">
              <img 
                src="https://images.pexels.com/photos/6893562/pexels-photo-6893562.jpeg" 
                alt="SpacesWala.com mobile app" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;