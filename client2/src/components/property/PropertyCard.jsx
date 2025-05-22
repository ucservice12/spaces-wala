import { Link } from 'react-router-dom';
import { MapPin, Ruler, BedDouble, Bath, ArrowRightToLine } from 'lucide-react';
import { TypographyLarge } from '@/custom/Typography';
import { Button } from '@/components/ui/button';

const PropertyCard = ({ property, className = '' }) => {
  return (
    <Link
      to={`/property/${property?.id}`}
      className={`block bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg ${className}`}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          loading='lazy'
          src={property?.image}
          alt={property?.title}
          className="w-full h-full object-cover"
        />
        {property?.featured && (
          <div className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 text-xs rounded">
            Featured
          </div>
        )}
        {property?.type === 'rent' ? (
          <div className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 text-xs rounded">
            For Rent
          </div>
        ) : (
          <div className="absolute top-2 right-2 bg-purple-600 text-white px-2 py-1 text-xs rounded">
            For Sale
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <TypographyLarge>{property?.title}</TypographyLarge>
        </div>

        <div className="flex items-center text-gray-500 mb-3">
          <MapPin size={16} className="mr-1" />
          <span className="text-sm truncate">{property.location}</span>
        </div>

        <div className="flex justify-between mb-4">
          <div className="flex items-center text-gray-600">
            <BedDouble size={16} className="mr-1" />
            <span className="text-sm">{property.bedrooms} Beds</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Bath size={16} className="mr-1" />
            <span className="text-sm">{property.bathrooms} Baths</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Ruler size={16} className="mr-1" />
            <span className="text-sm">{property.area} sq.ft</span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <TypographyLarge className="text-blue-600">
            ₹{property.type === 'rent'
              ? `${property.price.toLocaleString()}/mo`
              : property.price.toLocaleString()}
          </TypographyLarge>
          <Button variant="link" size="xs" className="text-blue-600">
            View Details  <ArrowRightToLine />
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
