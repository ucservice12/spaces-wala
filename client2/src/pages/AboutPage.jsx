import { Link } from 'react-router-dom';
import { Home, Users, Award, Target } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center text-sm text-gray-500">
            <Link to="/" className="hover:text-blue-600 flex items-center">
              <Home size={14} className="mr-1" /> Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-700">About Us</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative py-16 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              About SpacesWala.com
            </h1>
            <p className="text-lg">
              Transforming the way people buy, sell and rent properties in India
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Our Story */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Story</h2>
          <p className="text-gray-600 mb-4">
            Founded in 2012, SpacesWala.com has grown from a small startup to India's leading full-stack real estate platform. Our mission is to make real estate transactions simple, efficient, and transparent for everyone involved.
          </p>
          <p className="text-gray-600">
            We combine cutting-edge technology with deep industry expertise to provide comprehensive solutions for property buyers, sellers, and renters. Our platform features advanced search algorithms, detailed property insights, and a seamless user experience.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <p className="text-3xl font-bold text-blue-600 mb-2">1M+</p>
            <p className="text-gray-600">Properties Listed</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <p className="text-3xl font-bold text-blue-600 mb-2">500+</p>
            <p className="text-gray-600">Cities Covered</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <p className="text-3xl font-bold text-blue-600 mb-2">10M+</p>
            <p className="text-gray-600">Monthly Users</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <p className="text-3xl font-bold text-blue-600 mb-2">50K+</p>
            <p className="text-gray-600">Partner Agents</p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">
                We continuously strive to improve and innovate in the real estate technology space.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Customer First</h3>
              <p className="text-gray-600">
                Our customers are at the heart of everything we do, driving our decisions and innovations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">
                We maintain the highest standards in our services and operations.
              </p>
            </div>
          </div>
        </div>

        {/* Leadership */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img 
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" 
                alt="CEO" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">Rahul Sharma</h3>
              <p className="text-gray-600">CEO & Co-founder</p>
            </div>
            <div className="text-center">
              <img 
                src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg" 
                alt="CTO" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">Priya Patel</h3>
              <p className="text-gray-600">CTO</p>
            </div>
            <div className="text-center">
              <img 
                src="https://images.pexels.com/photos/2379006/pexels-photo-2379006.jpeg" 
                alt="COO" 
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">Amit Kumar</h3>
              <p className="text-gray-600">COO</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Join Our Journey</h2>
          <p className="text-gray-600 mb-6">
            Be part of the revolution in Indian real estate. List your property or start your search today.
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              to="/contact" 
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
            >
              Contact Us
            </Link>
            <Link 
              to="/careers" 
              className="bg-white text-blue-600 px-6 py-2 rounded-md border border-blue-600 hover:bg-blue-50 transition-colors duration-300"
            >
              View Careers
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;