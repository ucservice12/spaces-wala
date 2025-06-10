export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  type: string;
  status: 'For Sale' | 'For Rent' | 'Sold' | 'Draft';
  isVerified: boolean;
  amenities: string[];
  dateAdded: string;
}