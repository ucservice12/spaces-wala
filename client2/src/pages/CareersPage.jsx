import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Briefcase, MapPin, Clock, Users, Code, BarChart as ChartBar, Headphones } from 'lucide-react';

const CareersPage = () => {
  const departments = [
    {
      icon: <Code className="w-6 h-6" />,
      name: 'Engineering',
      description: 'Build the future of real estate technology',
      openings: 12
    },
    {
      icon: <ChartBar className="w-6 h-6" />,
      name: 'Sales & Marketing',
      description: 'Drive growth and customer acquisition',
      openings: 8
    },
    {
      icon: <Users className="w-6 h-6" />,
      name: 'Operations',
      description: 'Ensure smooth business operations',
      openings: 5
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      name: 'Customer Support',
      description: 'Help customers succeed',
      openings: 7
    }
  ];

  const openPositions = [
    {
      title: 'Senior Software Engineer',
      department: 'Engineering',
      location: 'Mumbai',
      type: 'Full-time',
      experience: '5-8 years'
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'Bangalore',
      type: 'Full-time',
      experience: '4-7 years'
    },
    {
      title: 'Sales Manager',
      department: 'Sales',
      location: 'Delhi',
      type: 'Full-time',
      experience: '3-5 years'
    },
    {
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Pune',
      type: 'Full-time',
      experience: '2-5 years'
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
            <span className="text-gray-700">Careers</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative py-16 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Join Our Team
            </h1>
            <p className="text-lg mb-8">
              Help us transform the real estate industry in India
            </p>
            <a 
              href="#openings" 
              className="bg-white text-blue-600 px-6 py-3 rounded-md hover:bg-blue-50 transition-colors duration-300 inline-block"
            >
              View Open Positions
            </a>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Why Join Us */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Why Join SpacesWala.com?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Growth Opportunities</h3>
              <p className="text-gray-600">
                Fast-paced environment with plenty of opportunities to learn and grow.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Great Culture</h3>
              <p className="text-gray-600">
                Collaborative environment where innovation and creativity thrive.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <ChartBar className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Impact</h3>
              <p className="text-gray-600">
                Make a real difference in how people find and secure their homes.
              </p>
            </div>
          </div>
        </div>

        {/* Departments */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Our Departments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  {dept.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{dept.name}</h3>
                <p className="text-gray-600 mb-4">{dept.description}</p>
                <p className="text-blue-600 font-semibold">{dept.openings} open positions</p>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div id="openings" className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Open Positions</h2>
          <div className="space-y-4">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 text-gray-600">
                      <span className="flex items-center">
                        <Briefcase size={16} className="mr-1" />
                        {position.department}
                      </span>
                      <span className="flex items-center">
                        <MapPin size={16} className="mr-1" />
                        {position.location}
                      </span>
                      <span className="flex items-center">
                        <Clock size={16} className="mr-1" />
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <button className="mt-4 md:mt-0 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Benefits & Perks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Competitive Salary</h3>
              <p className="text-gray-600">Market-leading compensation packages</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Health Insurance</h3>
              <p className="text-gray-600">Comprehensive medical coverage</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Flexible Work</h3>
              <p className="text-gray-600">Remote work options available</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Learning & Development</h3>
              <p className="text-gray-600">Continuous learning opportunities</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;