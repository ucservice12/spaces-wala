import { useState } from 'react';
import { motion } from 'framer-motion';
import { Pencil, Trash2, Plus, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

// Using high-quality free images from Unsplash
const dummyProperties = [
  {
    id: 1,
    title: 'Luxury Beach Villa',
    location: 'Goa, India',
    price: '₹1.2 Cr',
    type: 'Villa',
    beds: 4,
    baths: 3,
    size: '3200 sqft',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 2,
    title: 'Modern City Apartment',
    location: 'Bangalore, India',
    price: '₹75 Lakh',
    type: 'Apartment',
    beds: 3,
    baths: 2,
    size: '1800 sqft',
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 3,
    title: 'Cozy Studio Flat',
    location: 'Pune, India',
    price: '₹45 Lakh',
    type: 'Studio',
    beds: 1,
    baths: 1,
    size: '800 sqft',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80'
  }
];

export default function MyPropertiesPage() {
  const [properties, setProperties] = useState(dummyProperties);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProperties = properties.filter(property =>
    property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    property.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id) => {
    const confirmed = confirm('Are you sure you want to delete this property?');
    if (confirmed) {
      setProperties(prev => prev.filter(p => p.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-2"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">My Properties</h2>
          <p className="text-gray-500 text-sm sm:text-base">Manage and track your property listings</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-between gap-4"
        >
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search properties..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Add New Property
          </Button>
        </motion.div>

        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProperties.map((property) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5 }}
              >
                <Card className="overflow-hidden shadow-sm hover:shadow-md transition-all rounded-xl border border-gray-100">
                  <div className="relative">
                    <img
                      src={property.image}
                      alt={property.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-md text-xs font-medium text-gray-800">
                      {property.type}
                    </div>
                  </div>
                  <div className="p-5 space-y-3">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
                        {property.title}
                      </h3>
                      <p className="text-sm text-gray-500 flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        {property.location}
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-center text-xs">
                      <div className="bg-gray-50 p-2 rounded">
                        <p className="font-medium text-gray-500">Beds</p>
                        <p className="text-gray-900 font-semibold">{property.beds}</p>
                      </div>
                      <div className="bg-gray-50 p-2 rounded">
                        <p className="font-medium text-gray-500">Baths</p>
                        <p className="text-gray-900 font-semibold">{property.baths}</p>
                      </div>
                      <div className="bg-gray-50 p-2 rounded">
                        <p className="font-medium text-gray-500">Area</p>
                        <p className="text-gray-900 font-semibold">{property.size}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <p className="text-lg font-bold text-gray-900">{property.price}</p>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="gap-1.5"
                        >
                          <Pencil className="w-3.5 h-3.5" />
                          Edit
                        </Button>
                        <Button
                          variant="destructive"
                          size="sm"
                          className="gap-1.5"
                          onClick={() => handleDelete(property.id)}
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16 bg-white rounded-xl border border-gray-100 shadow-sm"
          >
            <div className="mx-auto max-w-md space-y-4">
              <Search className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="text-xl font-medium text-gray-900">No properties found</h3>
              <p className="text-gray-500">
                {searchTerm 
                  ? `No properties match your search for "${searchTerm}"`
                  : "You haven't listed any properties yet"}
              </p>
              <Button className="mt-4 gap-2">
                <Plus className="w-4 h-4" />
                Add Your First Property
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}