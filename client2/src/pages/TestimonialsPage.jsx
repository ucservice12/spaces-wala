import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Star } from 'lucide-react';

const TestimonialsPage = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Rahul Sharma',
      location: 'Mumbai',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      rating: 5,
      text: 'SpacesWala.com made my property search incredibly easy. The platform is user-friendly, and I found my dream apartment within weeks. The virtual tours saved me so much time!',
      date: 'March 10, 2024',
      type: 'Buyer'
    },
    {
      id: 2,
      name: 'Priya Patel',
      location: 'Bangalore',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
      rating: 5,
      text: 'As a property owner, I was amazed by how quickly I could list and sell my property. The platforms reach is impressive, and the support team was always helpful.',
      date: 'March 8, 2024',
      type: 'Seller'
    },
    {
      id: 3,
      name: 'Amit Kumar',
      location: 'Delhi',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      rating: 4,
      text: 'The loan calculator and EMI tools helped me plan my finances better. Thanks to SpacesWala.com, Im now a proud homeowner!',
      date: 'March 5, 2024',
      type: 'Buyer'
    },
    {
      id: 4,
      name: 'Sneha Reddy',
      location: 'Hyderabad',
      image: 'https://images.pexels.com/photos/3754438/pexels-photo-3754438.jpeg',
      rating: 5,
      text: 'Ive been using SpacesWala.com for my rental properties, and its been a game-changer. The tenant verification process is thorough, and the rental agreement service is excellent.',
      date: 'March 3, 2024',
      type: 'Landlord'
    },
    {
      id: 5,
      name: 'Vikram Singh',
      location: 'Pune',
      image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
      rating: 4,
      text: 'The property insights and area guides were invaluable in my decision-making process. SpacesWala.com provides comprehensive information that you cant find elsewhere.',
      date: 'February 28, 2024',
      type: 'Buyer'
    },
    {
      id: 6,
      name: 'Meera Shah',
      location: 'Chennai',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg',
      rating: 5,
      text: 'Found my perfect rental apartment through SpacesWala.com. The filters are so detailed, and the photos are always high quality. Highly recommended!',
      date: 'February 25, 2024',
      type: 'Tenant'
    }
  ];

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
            <span className="text-gray-700">Testimonials</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative py-16 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Customers Say
            </h1>
            <p className="text-lg">
              Real stories from real people who found their perfect home with SpacesWala.com
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <p className="text-3xl font-bold text-blue-600 mb-2">50K+</p>
            <p className="text-gray-600">Happy Customers</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <p className="text-3xl font-bold text-blue-600 mb-2">4.8/5</p>
            <p className="text-gray-600">Average Rating</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <p className="text-3xl font-bold text-blue-600 mb-2">95%</p>
            <p className="text-gray-600">Success Rate</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <p className="text-3xl font-bold text-blue-600 mb-2">30K+</p>
            <p className="text-gray-600">Properties Sold</p>
          </div>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      size={16}
                      className={index < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">{testimonial.rating}/5</span>
                </div>

                <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
                
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{testimonial.date}</span>
                  <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded">
                    {testimonial.type}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Ready to Find Your Perfect Home?
            </h2>
            <p className="text-gray-600 mb-6">
              Join thousands of satisfied customers who found their dream property with SpacesWala.com
            </p>
            <div className="flex justify-center gap-4">
              <Link 
                to="/search" 
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors duration-300"
              >
                Start Your Search
              </Link>
              <Link 
                to="/contact" 
                className="bg-white text-blue-600 px-6 py-3 rounded-md border border-blue-600 hover:bg-blue-50 transition-colors duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;