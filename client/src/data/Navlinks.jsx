
import {
  Home,
  Building2,
  MapPin,
  Bed,
  DollarSign,
  Newspaper,
  BookOpen,
  Tag,
} from 'lucide-react';  

const categoryImages = {
  apartment: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=500&auto=format&fit=crop",
  house: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=500&auto=format&fit=crop",
  plot: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&auto=format&fit=crop",
  pg: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500&auto=format&fit=crop",
  "post-property": "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=500&auto=format&fit=crop",
  pricing: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=500&auto=format&fit=crop",
  services: "https://images.unsplash.com/photo-1558002038-1055907df827?w=500&auto=format&fit=crop",
  "home-loans": "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=500&auto=format&fit=crop",
  "property-news": "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=500&auto=format&fit=crop",
  guides: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=500&auto=format&fit=crop"
};

export const menuItems = [
  {
    label: 'Buy',
    links: [
      {
        to: '/search?type=buy&category=apartment',
        label: 'Apartments',
        icon: Building2,
        image: categoryImages.apartment,
        description: 'Explore a wide range of apartments available for purchase in prime locations.',
      },
      {
        to: '/search?type=buy&category=house',
        label: 'Houses',
        icon: Home,
        image: categoryImages.house,
        description: 'Find independent houses and villas for sale tailored to your lifestyle.',
      },
      {
        to: '/search?type=buy&category=plot',
        label: 'Plots',
        icon: MapPin,
        image: categoryImages.plot,
        description: 'Browse open land and residential plots ideal for building your dream home.',
      },
    ],
  },
  {
    label: 'Rent',
    links: [
      {
        to: '/search?type=rent&category=apartment',
        label: 'Apartments',
        icon: Building2,
        image: categoryImages.apartment,
        description: 'Rent stylish and affordable apartments in your preferred area.',
      },
      {
        to: '/search?type=rent&category=house',
        label: 'Houses',
        icon: Home,
        image: categoryImages.house,
        description: 'View listings for rental homes and independent living spaces.',
      },
      {
        to: '/search?type=rent&category=pg',
        label: 'PG/Co-living',
        icon: Bed,
        image: categoryImages.pg,
        description: 'Shared and private PG accommodations for students and working professionals.',
      },
    ],
  },
  {
    label: 'Sell',
    links: [
      {
        to: '/seller/post-property',
        label: 'Post Property',
        icon: Tag,
        image: categoryImages["post-property"],
        description: 'List your property for sale or rent to reach genuine buyers and tenants.',
      },
      {
        to: '/sell/pricing',
        label: 'Pricing',
        icon: DollarSign,
        image: categoryImages.pricing,
        description: 'Understand market rates and pricing trends before selling your property.',
      },
      {
        to: '/sell/services',
        label: 'Services',
        icon: Bed,
        image: categoryImages.services,
        description: 'Explore professional services like staging, photography, and legal help.',
      },
    ],
  },
  {
    label: 'Resources',
    links: [
      {
        to: '/resources/home-loans',
        label: 'Home Loans',
        icon: DollarSign,
        image: categoryImages["home-loans"],
        description: 'Compare loan offers from top banks and calculate EMI easily.',
      },
      {
        to: '/resources/property-news',
        label: 'Property News',
        icon: Newspaper,
        image: categoryImages["property-news"],
        description: 'Stay updated with the latest real estate news, trends, and policies.',
      },
      {
        to: '/resources/guides',
        label: "Buyer's Guide",
        icon: BookOpen,
        image: categoryImages.guides,
        description: 'Step-by-step guidance on buying property, legal checks, and documentation.',
      },
    ],
  },
];
