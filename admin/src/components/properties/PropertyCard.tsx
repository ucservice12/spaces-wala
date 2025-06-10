import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, BedDouble, Bath, Square as SquareFeet, Home, Building2, Tag, Edit, Trash2, CheckCircle, XCircle } from 'lucide-react';
import { Property } from '../../types/property';

interface PropertyCardProps {
  property: Property;
  onEdit: () => void;
  onDelete: () => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, onEdit, onDelete }) => {
  const {
    id,
    title,
    price,
    image,
    location,
    bedrooms,
    bathrooms,
    area,
    type,
    status,
    isVerified
  } = property;

  const getStatusBadge = () => {
    switch (status) {
      case 'For Sale':
        return <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">For Sale</span>;
      case 'For Rent':
        return <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">For Rent</span>;
      case 'Sold':
        return <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs font-medium">Sold</span>;
      case 'Draft':
        return <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">Draft</span>;
      default:
        return null;
    }
  };

  const getTypeIcon = () => {
    switch (type) {
      case 'Apartment':
        return <Building2 size={14} />;
      case 'House':
        return <Home size={14} />;
      default:
        return <Home size={14} />;
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden transition duration-200 hover:shadow-md border border-gray-100">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 left-2 flex gap-2">
          {getStatusBadge()}
          <span className="bg-gray-800 bg-opacity-75 text-white px-2 py-1 rounded text-xs font-medium flex items-center">
            {getTypeIcon()}
            <span className="ml-1">{type}</span>
          </span>
        </div>
        {isVerified && (
          <div className="absolute top-2 right-2 bg-blue-600 text-white p-1 rounded-full">
            <CheckCircle size={16} />
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="p-4">
        <Link to={`/properties/${id}`} className="block">
          <h3 className="text-lg font-medium text-gray-800 mb-1 hover:text-primary-600 transition duration-200">{title}</h3>
        </Link>
        <div className="flex items-center text-gray-500 mb-3">
          <MapPin size={14} className="mr-1" />
          <p className="text-sm truncate">{location}</p>
        </div>
        <div className="flex justify-between items-center mb-3">
          <div className="text-xl font-semibold text-primary-600">
            ${price.toLocaleString()}
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <Tag size={14} className="mr-1" />
            <span>ID: {id.substring(0, 8)}</span>
          </div>
        </div>
        
        {/* Features */}
        <div className="flex justify-between text-sm text-gray-500 border-t border-gray-100 pt-3">
          <div className="flex items-center">
            <BedDouble size={16} className="mr-1" />
            <span>{bedrooms} Beds</span>
          </div>
          <div className="flex items-center">
            <Bath size={16} className="mr-1" />
            <span>{bathrooms} Baths</span>
          </div>
          <div className="flex items-center">
            <SquareFeet size={16} className="mr-1" />
            <span>{area} ft²</span>
          </div>
        </div>
      </div>
      
      {/* Actions */}
      <div className="flex border-t border-gray-100">
        <Link 
          to={`/properties/${id}`}
          className="flex-1 text-center py-3 text-gray-600 hover:bg-gray-50 hover:text-primary-600 text-sm font-medium transition duration-200"
        >
          View Details
        </Link>
        <button 
          onClick={onEdit}
          className="flex-1 flex justify-center items-center py-3 text-gray-600 hover:bg-gray-50 hover:text-primary-600 text-sm font-medium transition duration-200 border-l border-gray-100"
        >
          <Edit size={14} className="mr-1" />
          Edit
        </button>
        <button 
          onClick={onDelete}
          className="flex-1 flex justify-center items-center py-3 text-red-600 hover:bg-gray-50 hover:text-red-700 text-sm font-medium transition duration-200 border-l border-gray-100"
        >
          <Trash2 size={14} className="mr-1" />
          Delete
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;