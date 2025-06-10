import mongoose from 'mongoose';
import dotenv from 'dotenv';
import colors from 'colors';
import User from './models/userModel.js';
import Property from './models/propertyModel.js';
import connectDB from './config/db.js';

dotenv.config();

// Connect to MongoDB
connectDB();

// Sample data for seeding
const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: 'password123',
    phone: '555-123-4567',
    isAdmin: true,
    isAgent: true,
  },
  {
    name: 'Agent User',
    email: 'agent@example.com',
    password: 'password123',
    phone: '555-987-6543',
    isAdmin: false,
    isAgent: true,
  },
  {
    name: 'Regular User',
    email: 'user@example.com',
    password: 'password123',
    phone: '555-456-7890',
    isAdmin: false,
    isAgent: false,
  },
];

const properties = [
  {
    title: 'Modern Apartment in Downtown',
    images: [
      'https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg',
      'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
    ],
    category: 'Apartment',
    description: 'A beautiful modern apartment in the heart of downtown. Features high ceilings, large windows, and premium finishes throughout.',
    location: {
      address: '123 Main St',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      coordinates: {
        lat: 40.7128,
        lng: -74.0060,
      },
    },
    price: 2500,
    features: {
      bedrooms: 2,
      bathrooms: 2,
      area: 1200,
      furnished: true,
      parking: true,
      garden: false,
      balcony: true,
      securitySystem: true,
    },
    propertyType: 'Rent',
    amenities: ['Gym', 'Pool', 'Elevator', 'Central AC', 'In-unit Laundry'],
    isAvailable: true,
    isFeatured: true,
  },
  {
    title: 'Spacious Family Home',
    images: [
      'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
      'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
    ],
    category: 'House',
    description: 'Spacious family home with large backyard and modern amenities. Perfect for families looking for comfort and convenience.',
    location: {
      address: '456 Oak Ave',
      city: 'Los Angeles',
      state: 'CA',
      zipCode: '90001',
      coordinates: {
        lat: 34.0522,
        lng: -118.2437,
      },
    },
    price: 750000,
    features: {
      bedrooms: 4,
      bathrooms: 3,
      area: 2500,
      furnished: false,
      parking: true,
      garden: true,
      balcony: false,
      securitySystem: true,
    },
    propertyType: 'Sale',
    amenities: ['Central AC', 'Fireplace', 'Garage', 'Backyard', 'Hardwood Floors'],
    isAvailable: true,
    isFeatured: true,
  },
  {
    title: 'Luxury Villa with Pool',
    images: [
      'https://images.pexels.com/photos/32870/pexels-photo.jpg',
      'https://images.pexels.com/photos/261173/pexels-photo-261173.jpeg',
    ],
    category: 'Villa',
    description: 'Stunning luxury villa with private pool and panoramic views. The epitome of luxury living with high-end finishes and smart home features.',
    location: {
      address: '789 Palm Dr',
      city: 'Miami',
      state: 'FL',
      zipCode: '33101',
      coordinates: {
        lat: 25.7617,
        lng: -80.1918,
      },
    },
    price: 1500000,
    features: {
      bedrooms: 5,
      bathrooms: 5,
      area: 4000,
      furnished: true,
      parking: true,
      garden: true,
      balcony: true,
      securitySystem: true,
    },
    propertyType: 'Sale',
    amenities: ['Pool', 'Jacuzzi', 'Smart Home', 'Wine Cellar', 'Home Theater', 'Private Garden'],
    isAvailable: true,
    isFeatured: true,
  },
  {
    title: 'Commercial Space in Business District',
    images: [
      'https://images.pexels.com/photos/260931/pexels-photo-260931.jpeg',
      'https://images.pexels.com/photos/260689/pexels-photo-260689.jpeg',
    ],
    category: 'Commercial',
    description: 'Prime commercial space in the heart of the business district. Open layout with modern amenities suitable for various business types.',
    location: {
      address: '101 Commerce St',
      city: 'Chicago',
      state: 'IL',
      zipCode: '60601',
      coordinates: {
        lat: 41.8781,
        lng: -87.6298,
      },
    },
    price: 5000,
    features: {
      bedrooms: 0,
      bathrooms: 2,
      area: 3000,
      furnished: false,
      parking: true,
      garden: false,
      balcony: false,
      securitySystem: true,
    },
    propertyType: 'Rent',
    amenities: ['Elevator', 'Conference Room', 'High-speed Internet', 'Reception Area', '24/7 Access'],
    isAvailable: true,
    isFeatured: false,
  },
  {
    title: 'Residential Plot in Suburban Area',
    images: [
      'https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg',
      'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg',
    ],
    category: 'Plot',
    description: 'Large residential plot in a growing suburban area. Perfect for building your dream home with ample space for landscaping and outdoor activities.',
    location: {
      address: '555 Green Rd',
      city: 'Austin',
      state: 'TX',
      zipCode: '78701',
      coordinates: {
        lat: 30.2672,
        lng: -97.7431,
      },
    },
    price: 250000,
    features: {
      bedrooms: 0,
      bathrooms: 0,
      area: 10000,
      furnished: false,
      parking: false,
      garden: false,
      balcony: false,
      securitySystem: false,
    },
    propertyType: 'Sale',
    amenities: ['Gated Community', 'Park Access', 'Road Access'],
    isAvailable: true,
    isFeatured: false,
  },
];

// Import Data
const importData = async () => {
  try {
    await User.deleteMany();
    await Property.deleteMany();

    // Insert users
    const createdUsers = await User.insertMany(users);

    // Get admin user ID for properties
    const adminUser = createdUsers[0]._id;
    const agentUser = createdUsers[1]._id;

    // Add user to properties
    const propertiesToInsert = properties.map((property, index) => {
      return {
        ...property,
        user: index % 2 === 0 ? adminUser : agentUser, // Alternate between admin and agent
      };
    });

    await Property.insertMany(propertiesToInsert);

    console.log('Data Imported!'.green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

// Destroy Data
const destroyData = async () => {
  try {
    await User.deleteMany();
    await Property.deleteMany();

    console.log('Data Destroyed!'.red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

// Check command line arguments to determine action
if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}