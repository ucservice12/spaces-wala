import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Filter, MapPin, ArrowDownUp, Grid, List, Home, BedDouble, Bath, Ruler, ArrowRightToLine } from 'lucide-react';
import PropertyCard from '@/components/property/PropertyCard';
import { sampleProperties } from '../data/sampleData';
import { Button } from '@/components/ui/button'
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  TypographyMuted,
  TypographyH2,
  TypographySmall,
  TypographyH4,
} from '@/custom/Typography';

const filterOptions = {
  priceRange: { title: 'Price Range', type: 'range', placeholders: ['Min', 'Max'] },
  propertyType: {
    title: 'Property Type',
    type: 'checkbox',
    options: ['Apartment', 'Villa', 'Independent House', 'Plot'],
  },
  bedrooms: { title: 'Bedrooms', type: 'button', options: [1, 2, 3, 4, '4+'] },
  bathrooms: { title: 'Bathrooms', type: 'button', options: [1, 2, 3, '3+'] },
  area: { title: 'Area (sq.ft)', type: 'range', placeholders: ['Min', 'Max'] },
  amenities: {
    title: 'Amenities',
    type: 'checkbox',
    options: ['Swimming Pool', 'Gym', "Children's Play Area", 'Power Backup'],
  },
};

const renderFilterSection = (mobile = false) =>
  Object.entries(filterOptions).map(([key, config]) => (
    <div key={key} className="mb-6">
      <TypographySmall>
        {config?.title}
      </TypographySmall>
      {config.type === 'range' && (
        <div className="flex gap-2 mt-2">
          {config.placeholders.map((ph, idx) => (
            <Input
              key={idx}
              type="text"
              placeholder={ph}
            />
          ))}
        </div>
      )}
      {config.type === 'checkbox' && (
        <div className="space-y-2 mt-2">
          {config.options.map((option) => (
            <label key={option} className="flex items-center">
              <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" />
              <TypographyMuted className="ml-2">{option}</TypographyMuted>
            </label>
          ))}
        </div>
      )}
      {config.type === 'button' && (
        <div className="flex flex-wrap gap-2">
          {config.options.map((option) => (
            <button
              key={option}
              className="px-4 mt-2 py-2 border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  ));

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const [showFilters, setShowFilters] = useState(false);
  const [sortBy, setSortBy] = useState('relevance');
  const [viewMode, setViewMode] = useState('grid');

  const type = searchParams.get('type') || 'buy';
  const location = searchParams.get('location') || '';
  const city = searchParams.get('city') || '';

  const filteredProperties = sampleProperties.filter((property) => {
    if (type && property.type !== type) return false;
    if (location && !property.location.toLowerCase().includes(location.toLowerCase())) return false;
    if (city && !property.location.toLowerCase().includes(city.toLowerCase())) return false;
    return true;
  });

  const sortedProperties = [...filteredProperties].sort((a, b) => {
    switch (sortBy) {
      case 'price-low-high':
        return a.price - b.price;
      case 'price-high-low':
        return b.price - a.price;
      case 'newest':
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      default:
        return 0;
    }
  });

  return (
    <div className="pt-16 pb-12 bg-gray-50 mt-5">
      {/* Breadcrumbs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className='flex items-center gap-1'>
                  <Home size={14} /> Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>
                  {type === 'rent' ? 'Rent' : type === 'sell' ? 'Sell' : 'Buy'}{' '}
                  {location || city ? `in ${location || city}` : ''}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Header */}
      <>
        <div className="max-w-7xl mx-auto grid gap-2 px-4 py-6">
          <TypographyH2>
            {type === 'rent' ? 'Rental Properties' : 'Properties for Sale'}{' '}
            {location || city ? ` in ${location || city}` : ''}
          </TypographyH2>
          <TypographyMuted className="text-md">
            {filteredProperties?.length} properties found
          </TypographyMuted>
        </div>
      </>

      {/* Filters & Results */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Desktop Filters */}
          <Card className="hidden lg:block lg:w-1/4 p-6 h-fit">
            <TypographyH4 className='mb-4'>Filters</TypographyH4>
            {renderFilterSection()}
            <Button className="w-full">
              Apply Filters
            </Button>
          </Card>

          {/* Results */}
          <div className="lg:w-3/4">
            {/* Mobile Filter Toggle */}
            <div className="lg:hidden mb-4">
              <button
                className="w-full flex items-center justify-center bg-white p-3 rounded-lg shadow-md"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter size={18} className="mr-2" />
                Filters
              </button>
              {showFilters && (
                <div className="bg-white rounded-lg shadow-md p-6 mt-2">
                  {renderFilterSection(true)}
                  <Button className="w-full">
                    Apply Filters
                  </Button>
                </div>
              )}
            </div>

            {/* Sort and View */}
            <Card className="flex flex-wrap justify-between items-center mb-4 p-3">
              <div className="flex items-center mb-2 sm:mb-0">
                <ArrowDownUp size={18} className="mr-4 text-gray-500" />
                <Select>
                  <SelectTrigger className="w-[150px]">
                    <SelectValue placeholder="filter" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="relevance">Relevance</SelectItem>
                    <SelectItem value="price-low-high">Price: Low to High</SelectItem>
                    <SelectItem value="price-high-low">Price: High to Low</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center gap-3">
                <button
                  className={`p-2 rounded-md ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'bg-white text-gray-600'
                    }`}
                  onClick={() => setViewMode('grid')}
                >
                  <Grid size={18} />
                </button>
                <button
                  className={`p-2 rounded-md ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'bg-white text-gray-600'
                    }`}
                  onClick={() => setViewMode('list')}
                >
                  <List size={18} />
                </button>
              </div>
            </Card>

            {/* Properties */}
            {sortedProperties.length > 0 ? (
              <div
                className={
                  viewMode === 'grid'
                    ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'
                    : 'space-y-4'
                }
              >
                {sortedProperties?.map((property) =>
                  viewMode === 'grid' ? (
                    <PropertyCard key={property?.id} property={property} />
                  ) : (
                    <Card key={property?.id} className="overflow-hidden">
                      <div className="flex flex-col sm:flex-row">
                        <div className="sm:w-1/3 h-48 sm:h-auto">
                          <img
                            src={property?.image}
                            alt={property?.title}
                            loading='lazy'
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="sm:w-2/3 p-4 space-y-4">
                          <TypographyH4 className='mb-2'>{property?.title}</TypographyH4>
                          <div className="flex items-center text-gray-500 mb-3">
                            <MapPin size={16} className="mr-1" />
                            <span className="text-sm">{property?.location}</span>
                          </div>
                          <div className="flex gap-6 mb-4">
                            <div className="flex items-center text-gray-600">
                              <BedDouble size={16} className="mr-1" />
                              <span className="text-sm">{property?.bedrooms} Beds</span>
                            </div>
                            <div className="flex items-center text-gray-600">
                              <Bath size={16} className="mr-1" />
                              <span className="text-sm">{property?.bathrooms} Baths</span>
                            </div>
                            <div className="flex items-center text-gray-600">
                              <Ruler size={16} className="mr-1" />
                              <span className="text-sm">{property?.area} sq.ft</span>
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <TypographyH4 className="text-blue-600 font-bold">
                              ₹
                              {property?.type === 'rent'
                                ? `${property?.price?.toLocaleString()}/mo`
                                : property?.price?.toLocaleString()}
                            </TypographyH4>
                            <Link
                              to={`/property/${property?.id}`}
                            >
                              <Button variant="link" size="xs" className="text-blue-600">
                                View Details  <ArrowRightToLine />
                              </Button>
                            </Link>

                          </div>
                        </div>
                      </div>
                    </Card>
                  )
                )}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <TypographyMuted>
                  No properties found matching your criteria.
                </TypographyMuted>
                <Link to="/" className="text-blue-600 hover:text-blue-800 font-medium">
                  Return to Home
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div >
  );
};

export default SearchResultsPage;
