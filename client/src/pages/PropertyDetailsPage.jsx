import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, BedDouble, Bath, Ruler, Calendar, Heart, Share, Home } from 'lucide-react';
import { sampleProperties } from '../data/sampleData';
import PropertyCard from '@/components/property/PropertyCard';
import HomeLoanCalculator from '@/components/calculator/HomeLoanCalculator';
import AgentContactDetails from '@/components/Agent/AgentContactDetails';
import SchedualVisit from '@/components/Agent/ScheduleVisit';
import { Button } from '@/components/ui/button'
import { Card } from "@/components/ui/card"
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
  TypographyLarge
} from '@/custom/Typography';

const PropertyDetailsPage = () => {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const [isLiked, setIsLiked] = useState(false);

  // Find the property by ID
  const property = sampleProperties.find(prop => prop.id === id) || sampleProperties[0];

  // Similar properties
  const similarProperties = sampleProperties
    .filter(p => p.id !== property.id && p.type === property.type)
    .slice(0, 4);

  const tabs = ['overview', 'details', 'amenities', 'location'];

  return (
    <div className="pt-20 pb-12 bg-gray-50 mt-5">
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
                <BreadcrumbLink href="/search">
                  {property.type === 'rent' ? 'Rent' : 'Buy'}
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{property?.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Property Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div>
              <TypographyH2>{property?.title}</TypographyH2>
              <TypographyMuted className='flex items-center my-2 font-medium tracking-wide'>
                <MapPin size={16} className="mr-1" />
                {property?.location}
              </TypographyMuted>
              <TypographyH4 className="text-blue-600 font-bold">
                ₹{property?.type === 'rent'
                  ? `${property?.price?.toLocaleString()}/month`
                  : property?.price?.toLocaleString()}
              </TypographyH4>
            </div>
            <div className="flex items-center space-x-3 mt-4 md:mt-0">
              <Button
                variant="outline"
                onClick={() => setIsLiked(!isLiked)}
                className={` ${isLiked
                  ? 'bg-red-50 hover:bg-red-100 border-red-200 hover:text-red-500 text-red-500'
                  : 'text-muted-foreground'
                  }`}
              >
                <Heart size={18} className={`${isLiked ? 'fill-red-500' : ''}`} />
                {isLiked ? 'Saved' : 'Save'}
              </Button>
              <Button variant="outline" className="text-muted-foreground">
                <Share size={18} /> Share
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side - Property Images and Details */}
          <div className="lg:w-2/3">
            {/* Property Images */}
            <Card className="overflow-hidden mb-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-4">
                <div className="sm:col-span-2 h-72">
                  <img
                    src={property?.image}
                    alt={property?.title}
                    loading='lazy'
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                <div className="h-44">
                  <img
                    loading='lazy'
                    src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg"
                    alt="Property interior"
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                <div className="h-44">
                  <img
                    loading='lazy'
                    src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
                    alt="Property interior"
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
              </div>
            </Card>

            {/* Tabs Navigation */}
            <Card className="mb-6">
              <div className="flex border-b overflow-x-auto whitespace-nowrap scrollbar-hide">
                {tabs?.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-3 font-medium text-center flex-1 ${activeTab === tab
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-700 hover:text-blue-600'
                      }`}
                  >
                    {tab?.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="p-6">

                {activeTab === 'overview' && (
                  <div>
                    <TypographyH4 className='mb-2'>Property Overview</TypographyH4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      {[
                        {
                          label: 'Bedrooms',
                          value: property.bedrooms,
                          icon: <BedDouble size={24} className="text-blue-600 mb-2" />,
                        },
                        {
                          label: 'Bathrooms',
                          value: property.bathrooms,
                          icon: <Bath size={24} className="text-blue-600 mb-2" />,
                        },
                        {
                          label: 'Area',
                          value: `${property.area} sq.ft`,
                          icon: <Ruler size={24} className="text-blue-600 mb-2" />,
                        },
                        {
                          label: 'Year Built',
                          value: '2019',
                          icon: <Calendar size={24} className="text-blue-600 mb-2" />,
                        },
                      ].map((item) => (
                        <div
                          key={item.label}
                          className="flex flex-col items-center p-3 bg-gray-50 rounded-md"
                        >
                          {item.icon}
                          <TypographyMuted>{item?.label}</TypographyMuted>
                          <TypographySmall>{item?.value}</TypographySmall>
                        </div>
                      ))}
                    </div>
                    <TypographyMuted>
                      This beautiful {property.bedrooms} bedroom property in {property.location} offers a perfect blend of comfort and convenience. The property features modern amenities, spacious rooms, and is located in a prime area with easy access to schools, shopping centers, and public transportation.
                    </TypographyMuted>
                    <TypographyMuted>
                      The apartment boasts high-quality finishes, modern fixtures, and an efficient layout. With plenty of natural light and ventilation, this property offers a comfortable living environment. The kitchen is fully equipped with modern appliances, and the bathrooms feature premium fittings.
                    </TypographyMuted>
                  </div>
                )}


                {activeTab === 'details' && (
                  <div>
                    <TypographyH4 className='mb-4'>Property Details</TypographyH4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Basic Details */}
                      <div>
                        <h4 className="font-medium text-gray-700 mb-3">Basic Details</h4>
                        <ul className="space-y-2">
                          {[
                            { label: 'Property Type', value: 'Apartment' },
                            { label: 'Floor Number', value: '5 of 10' },
                            { label: 'Furnishing', value: 'Semi-Furnished' },
                            { label: 'Facing', value: 'East' },
                            { label: 'Overlooking', value: 'Garden' },
                          ].map((item) => (
                            <li key={item.label} className="flex justify-between">
                              <TypographyMuted>{item?.label}</TypographyMuted>
                              <TypographySmall>{item?.value}</TypographySmall>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Additional Details */}
                      <div>
                        <TypographyH4 className='mb-4'>Additional Details</TypographyH4>
                        <ul className="space-y-2">
                          {[
                            { label: 'Super Area', value: `${property.area} sq.ft` },
                            { label: 'Carpet Area', value: `${Math.floor(property.area * 0.85)} sq.ft` },
                            { label: 'Status', value: 'Ready to Move' },
                            { label: 'Possession', value: 'Immediate' },
                            { label: 'Transaction Type', value: 'Resale' },
                          ].map((item) => (
                            <li key={item.label} className="flex justify-between">
                              <TypographyMuted>{item?.label}</TypographyMuted>
                              <TypographySmall>{item?.value}</TypographySmall>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'amenities' && (
                  <div>
                    <TypographyH4 className='mb-2'>Amenities</TypographyH4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {[
                        'Swimming Pool',
                        'Gym',
                        'Parking',
                        'Power Backup',
                        "Children's Play Area",
                        'Security',
                        'Lift',
                        'Club House',
                        'Gas Pipeline',
                      ].map((amenity) => (
                        <div key={amenity} className="flex items-center p-3 bg-gray-50 rounded-md">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                            <i className="text-blue-600">✓</i>
                          </div>
                          <span>{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'location' && (
                  <div>
                    <TypographyH4 className='mb-2'>Location</TypographyH4>
                    <div className="bg-gray-200 h-64 mb-4 rounded-md flex items-center justify-center">
                      <p className="text-gray-500">Map View (Interactive map would be here)</p>
                    </div>
                    <h4 className="font-medium text-gray-700 mb-3">Nearby Places</h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        {
                          category: 'Education',
                          places: [
                            { name: 'City International School', distance: '0.5 km' },
                            { name: "St. Xavier's College", distance: '1.2 km' },
                          ],
                        },
                        {
                          category: 'Healthcare',
                          places: [
                            { name: 'Apollo Hospital', distance: '0.8 km' },
                            { name: 'City Care Clinic', distance: '1.5 km' },
                          ],
                        },
                      ].map((section) => (
                        <div key={section.category}>
                          <h5 className="font-medium mb-2">{section.category}</h5>
                          <ul className="space-y-2">
                            {section.places.map((place) => (
                              <li key={place.name} className="flex justify-between">
                                <TypographyMuted>{place?.name}</TypographyMuted>
                                <TypographySmall>{place?.distance}</TypographySmall>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </Card>

            {/* Similar Properties */}
            <Card className="p-6">
              <TypographyLarge className='mb-4'>Similar Properties</TypographyLarge>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {similarProperties.map(prop => (
                  <PropertyCard key={prop.id} property={prop} />
                ))}
              </div>
            </Card>
          </div>

          {/* Right Side - Contact and Details */}
          <div className="lg:w-1/3">
            {/* Contact Agent */}
            <AgentContactDetails />

            {/* Schedule a Visit */}
            <SchedualVisit />

            {/* Home Loan Calculator */}
            <HomeLoanCalculator property={property} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailsPage;