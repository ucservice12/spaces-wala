import { useState } from 'react';
import { motion } from 'framer-motion';
import { Trash2, Edit, Heart, HeartOff, MapPin, Bed, Bath, Ruler, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const initialSavedListings = [
  {
    id: 1,
    title: 'Cozy Studio Apartment',
    location: 'Bandra, Mumbai',
    price: '₹65 Lakh',
    type: 'Apartment',
    beds: 1,
    baths: 1,
    area: '650 sqft',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 2,
    title: 'Luxury 3BHK Flat',
    location: 'HSR Layout, Bangalore',
    price: '₹1.1 Cr',
    type: 'Condominium',
    beds: 3,
    baths: 2,
    area: '1800 sqft',
    image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  },
  {
    id: 3,
    title: 'Spacious 2BHK House',
    location: 'Koregaon Park, Pune',
    price: '₹85 Lakh',
    type: 'Villa',
    beds: 2,
    baths: 2,
    area: '2200 sqft',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
  }
];

export default function SavedListingsPage() {
  const [savedListings, setSavedListings] = useState(initialSavedListings);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  const handleRemove = (id) => {
    const confirmDelete = confirm('Remove this property from saved listings?');
    if (confirmDelete) {
      setSavedListings(prev => prev.filter(item => item.id !== id));
    }
  };

  const handleEdit = (property) => {
    setEditingId(property.id);
    setEditForm({
      title: property.title,
      location: property.location,
      price: property.price
    });
  };

  const handleSaveEdit = (id) => {
    setSavedListings(prev => 
      prev.map(item => 
        item.id === id ? { ...item, ...editForm } : item
      )
    );
    setEditingId(null);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
  };

  const filteredListings = savedListings.filter(listing =>
    listing.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    listing.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50 py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-2"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Saved Listings</h1>
          <p className="text-gray-500 text-sm sm:text-base">Your favorite properties in one place</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="relative max-w-md mx-auto"
        >
          <Input
            placeholder="Search saved listings..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
        </motion.div>

        {filteredListings.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center py-16 bg-white rounded-xl border border-gray-100 shadow-sm"
          >
            <HeartOff className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-xl font-medium text-gray-900">
              {searchTerm ? 'No matching listings found' : 'No saved listings yet'}
            </h3>
            <p className="text-gray-500 mt-2 max-w-md mx-auto">
              {searchTerm 
                ? `No saved properties match "${searchTerm}"`
                : 'Start saving properties to see them here'}
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredListings.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
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
                  
                  {editingId === property.id ? (
                    <div className="p-5 space-y-4">
                      <Input
                        value={editForm.title}
                        onChange={(e) => setEditForm({...editForm, title: e.target.value})}
                        placeholder="Property title"
                      />
                      <Input
                        value={editForm.location}
                        onChange={(e) => setEditForm({...editForm, location: e.target.value})}
                        placeholder="Location"
                      />
                      <Input
                        value={editForm.price}
                        onChange={(e) => setEditForm({...editForm, price: e.target.value})}
                        placeholder="Price"
                      />
                      <div className="flex gap-2 pt-2">
                        <Button 
                          variant="outline" 
                          className="flex-1"
                          onClick={handleCancelEdit}
                        >
                          Cancel
                        </Button>
                        <Button 
                          className="flex-1"
                          onClick={() => handleSaveEdit(property.id)}
                        >
                          Save
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="p-5 space-y-4">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
                          {property.title}
                        </h3>
                        <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                          <MapPin className="w-4 h-4" />
                          {property.location}
                        </p>
                      </div>

                      <div className="grid grid-cols-3 gap-2 text-center text-xs">
                        <div className="bg-gray-50 p-2 rounded">
                          <p className="font-medium text-gray-500 flex items-center justify-center gap-1">
                            <Bed className="w-3 h-3" /> Beds
                          </p>
                          <p className="text-gray-900 font-semibold">{property.beds}</p>
                        </div>
                        <div className="bg-gray-50 p-2 rounded">
                          <p className="font-medium text-gray-500 flex items-center justify-center gap-1">
                            <Bath className="w-3 h-3" /> Baths
                          </p>
                          <p className="text-gray-900 font-semibold">{property.baths}</p>
                        </div>
                        <div className="bg-gray-50 p-2 rounded">
                          <p className="font-medium text-gray-500 flex items-center justify-center gap-1">
                            <Ruler className="w-3 h-3" /> Area
                          </p>
                          <p className="text-gray-900 font-semibold">{property.area}</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <p className="text-lg font-bold text-gray-900">{property.price}</p>
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleEdit(property)}
                          >
                            <Edit className="w-4 h-4 mr-1" /> Edit
                          </Button>
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => handleRemove(property.id)}
                          >
                            <Trash2 className="w-4 h-4 mr-1" /> Remove
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}