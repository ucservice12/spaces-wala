import { Property, City } from '../types';

export const sampleProperties: Property[] = [
  {
    id: '1',
    title: 'Luxury 3BHK Apartment',
    type: 'buy',
    price: 9500000,
    location: 'Bandra West, Mumbai',
    bedrooms: 3,
    bathrooms: 3,
    area: 1600,
    image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
    featured: true,
    date: '2023-05-15'
  },
  {
    id: '2',
    title: 'Modern 2BHK Flat',
    type: 'rent',
    price: 45000,
    location: 'Indiranagar, Bangalore',
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
    featured: true,
    date: '2023-06-22'
  },
  {
    id: '3',
    title: 'Spacious 4BHK Villa',
    type: 'buy',
    price: 18000000,
    location: 'Koregaon Park, Pune',
    bedrooms: 4,
    bathrooms: 4.5,
    area: 3200,
    image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
    date: '2023-07-05'
  },
  {
    id: '4',
    title: 'Cozy 1BHK Apartment',
    type: 'rent',
    price: 22000,
    location: 'Hauz Khas, Delhi',
    bedrooms: 1,
    bathrooms: 1,
    area: 650,
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg',
    date: '2023-08-12'
  },
  {
    id: '5',
    title: 'Premium 3BHK Apartment',
    type: 'buy',
    price: 12500000,
    location: 'Salt Lake City, Kolkata',
    bedrooms: 3,
    bathrooms: 3,
    area: 1800,
    image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
    date: '2023-04-28'
  },
  {
    id: '6',
    title: 'Elegant 2BHK Flat',
    type: 'rent',
    price: 35000,
    location: 'Adyar, Chennai',
    bedrooms: 2,
    bathrooms: 2,
    area: 1100,
    image: 'https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg',
    date: '2023-09-03'
  },
  {
    id: '7',
    title: 'Luxury 5BHK Villa',
    type: 'buy',
    price: 25000000,
    location: 'Jubilee Hills, Hyderabad',
    bedrooms: 5,
    bathrooms: 5.5,
    area: 4500,
    image: 'https://images.pexels.com/photos/1105754/pexels-photo-1105754.jpeg',
    featured: true,
    date: '2023-03-19'
  },
  {
    id: '8',
    title: 'Modern 3BHK Apartment',
    type: 'rent',
    price: 55000,
    location: 'Pali Hill, Mumbai',
    bedrooms: 3,
    bathrooms: 3,
    area: 1750,
    image: 'https://images.pexels.com/photos/1853552/pexels-photo-1853552.jpeg',
    date: '2023-10-17'
  },
  {
    id: '9',
    title: 'Spacious 3BHK Flat',
    type: 'buy',
    price: 8500000,
    location: 'HSR Layout, Bangalore',
    bedrooms: 3,
    bathrooms: 2,
    area: 1400,
    image: 'https://images.pexels.com/photos/2119713/pexels-photo-2119713.jpeg',
    date: '2023-11-08'
  },
  {
    id: '10',
    title: 'Cozy 2BHK Apartment',
    type: 'rent',
    price: 28000,
    location: 'Aundh, Pune',
    bedrooms: 2,
    bathrooms: 2,
    area: 950,
    image: 'https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg',
    date: '2023-12-01'
  }
];

export const featuredCities: City[] = [
  {
    id: '1',
    name: 'Mumbai',
    image: 'https://images.pexels.com/photos/2179602/pexels-photo-2179602.jpeg',
    propertyCount: 1258
  },
  {
    id: '2',
    name: 'Delhi',
    image: 'https://images.pexels.com/photos/789750/pexels-photo-789750.jpeg',
    propertyCount: 985
  },
  {
    id: '3',
    name: 'Bangalore',
    image: 'https://images.pexels.com/photos/3574881/pexels-photo-3574881.jpeg',
    propertyCount: 1482
  },
  {
    id: '4',
    name: 'Hyderabad',
    image: 'https://images.pexels.com/photos/672916/pexels-photo-672916.jpeg',
    propertyCount: 865
  },
  {
    id: '5',
    name: 'Chennai',
    image: 'https://images.pexels.com/photos/2402956/pexels-photo-2402956.jpeg',
    propertyCount: 756
  },
  {
    id: '6',
    name: 'Pune',
    image: 'https://images.pexels.com/photos/3198643/pexels-photo-3198643.jpeg',
    propertyCount: 678
  }
];