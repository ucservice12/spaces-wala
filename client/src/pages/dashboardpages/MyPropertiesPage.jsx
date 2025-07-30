
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Pencil, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const dummyProperties = [
  {
    id: 1,
    title: 'Luxury Villa in Goa',
    location: 'Goa, India',
    price: '₹1.2 Cr',
    image: '/assets/property1.jpg'
  },
  {
    id: 2,
    title: 'Modern Apartment in Bangalore',
    location: 'Bangalore, India',
    price: '₹75 Lakh',
    image: '/assets/property2.jpg'
  },
  {
    id: 3,
    title: 'Studio Flat in Pune',
    location: 'Pune, India',
    price: '₹45 Lakh',
    image: '/assets/property3.jpg'
  }
];

export default function MyPropertiesPage() {
  const [properties, setProperties] = useState(dummyProperties);

  const handleDelete = (id) => {
    const confirmed = confirm('Are you sure you want to delete this property?');
    if (confirmed) {
      setProperties(prev => prev.filter(p => p.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 py-12 px-6">
      <div className="max-w-6xl mx-auto space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-800">My Properties</h2>
          <p className="text-gray-500">Manage your listed properties</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="overflow-hidden shadow-md hover:shadow-lg transition rounded-xl">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4 space-y-2">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {property.title}
                  </h3>
                  <p className="text-sm text-gray-500">{property.location}</p>
                  <p className="text-base font-medium text-gray-700">{property.price}</p>

                  <div className="flex justify-end gap-3 pt-4">
                    <Button
                      size="sm"
                      variant="outline"
                      className="text-sm px-3"
                    >
                      <Pencil className="w-4 h-4 mr-1" /> Edit
                    </Button>
                    <Button
                      size="sm"
                      variant="destructive"
                      className="text-sm px-3"
                      onClick={() => handleDelete(property.id)}
                    >
                      <Trash2 className="w-4 h-4 mr-1" /> Delete
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
