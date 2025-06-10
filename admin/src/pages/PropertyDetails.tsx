import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockProperties } from '../data/mockProperties';
import { Building2, ChevronLeft, MapPin, BedDouble, Bath, Square as SquareFeet, CalendarClock, CheckCircle, Edit, Trash2, ShieldCheck, Tag, Share2 } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';

const PropertyDetails = () => {
  const { id } = useParams<{ id: string }>();
  const property = mockProperties.find(p => p.id === id);

  if (!property) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Property Not Found</h2>
        <p className="text-gray-600 mb-6">The property you're looking for doesn't exist or has been removed.</p>
        <Link 
          to="/properties" 
          className="inline-flex items-center text-primary-600 hover:text-primary-800"
        >
          <ChevronLeft size={16} className="mr-1" />
          Back to Properties
        </Link>
      </div>
    );
  }

  const { 
    title, 
    price, 
    image, 
    description, 
    location, 
    bedrooms, 
    bathrooms, 
    area, 
    type, 
    status, 
    isVerified, 
    amenities, 
    dateAdded 
  } = property;

  return (
    <div className="space-y-6">
      <PageHeader
        title={title}
        subtitle={location}
        icon={<Building2 size={24} />}
        actions={
          <div className="flex space-x-3">
            <button className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 py-2 px-4 rounded-lg flex items-center transition duration-200">
              <Share2 size={18} className="mr-1" />
              Share
            </button>
            <button className="bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-lg flex items-center transition duration-200">
              <Edit size={18} className="mr-1" />
              Edit Property
            </button>
          </div>
        }
      />

      <div className="bg-white rounded-lg shadow overflow-hidden">
        {/* Property Main Image */}
        <div className="relative h-80 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 flex space-x-2">
            {status === 'For Sale' && (
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                For Sale
              </span>
            )}
            {status === 'For Rent' && (
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                For Rent
              </span>
            )}
            {status === 'Sold' && (
              <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium">
                Sold
              </span>
            )}
            {status === 'Draft' && (
              <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                Draft
              </span>
            )}
          </div>
          <div className="absolute bottom-4 right-4 bg-black bg-opacity-75 text-white px-3 py-2 rounded text-lg font-bold">
            ${price.toLocaleString()}
          </div>
        </div>

        {/* Property Details */}
        <div className="p-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6">
            <div className="flex items-center mb-3 md:mb-0">
              <div className="flex items-center mr-4">
                <Tag size={18} className="mr-1 text-gray-500" />
                <span className="text-gray-600">ID: {id}</span>
              </div>
              <div className="flex items-center mr-4">
                <CalendarClock size={18} className="mr-1 text-gray-500" />
                <span className="text-gray-600">Added: {dateAdded}</span>
              </div>
              {isVerified && (
                <div className="flex items-center text-green-600">
                  <CheckCircle size={18} className="mr-1" />
                  <span>Verified</span>
                </div>
              )}
            </div>
            <div className="flex items-center">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-50 text-primary-700 mr-2">
                {type}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-gray-50 p-4 rounded-lg flex items-center justify-center">
              <BedDouble size={24} className="mr-3 text-primary-600" />
              <div>
                <p className="text-lg font-semibold">{bedrooms}</p>
                <p className="text-sm text-gray-500">Bedrooms</p>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg flex items-center justify-center">
              <Bath size={24} className="mr-3 text-primary-600" />
              <div>
                <p className="text-lg font-semibold">{bathrooms}</p>
                <p className="text-sm text-gray-500">Bathrooms</p>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg flex items-center justify-center">
              <SquareFeet size={24} className="mr-3 text-primary-600" />
              <div>
                <p className="text-lg font-semibold">{area}</p>
                <p className="text-sm text-gray-500">Square Feet</p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <p className="text-gray-700 leading-relaxed">{description}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Location</h3>
            <div className="flex items-start">
              <MapPin size={20} className="mr-2 text-gray-500 mt-1" />
              <p className="text-gray-700">{location}</p>
            </div>
            <div className="mt-4 bg-gray-100 h-64 rounded-lg flex items-center justify-center">
              <p className="text-gray-500 text-sm">Map would be displayed here</p>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Amenities</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {amenities.map((amenity, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle size={16} className="mr-2 text-green-500" />
                  <span className="text-gray-700">{amenity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Property Actions */}
        <div className="border-t border-gray-200 p-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
            <div className="flex space-x-3">
              <button className="bg-red-50 text-red-600 hover:bg-red-100 py-2 px-4 rounded-lg flex items-center transition duration-200">
                <Trash2 size={18} className="mr-1" />
                Delete
              </button>
              {!isVerified && (
                <button className="bg-green-50 text-green-600 hover:bg-green-100 py-2 px-4 rounded-lg flex items-center transition duration-200">
                  <ShieldCheck size={18} className="mr-1" />
                  Verify
                </button>
              )}
            </div>
            <Link 
              to="/properties" 
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg flex items-center justify-center transition duration-200"
            >
              <ChevronLeft size={18} className="mr-1" />
              Back to Properties
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;