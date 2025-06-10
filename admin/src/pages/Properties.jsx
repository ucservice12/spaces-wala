import { useState } from 'react';
import { Building2, Plus, Filter, Search } from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import PropertyCard from '../components/properties/PropertyCard';
import AddEditPropertyModal from '../components/properties/AddEditPropertyModal';
import { mockProperties } from '../data/mockProperties';
import { addProperties } from '../machine/property';

const Properties = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('All');
  const [properties, setProperties] = useState(mockProperties);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState(undefined);

  const filterTypes = ['All', 'Apartment', 'House', 'Villa', 'Commercial'];

  const filteredProperties = properties.filter((property) => {
    const matchesSearch =
      property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = filterType === 'All' || property.type === filterType;

    return matchesSearch && matchesType;
  });

  const handleAddProperty = async (newProperty) => {
    const property = {
      ...newProperty,
      id: `prop-${Date.now()}`,
      isVerified: false,
      amenities: [],
      dateAdded: new Date().toISOString().split('T')[0],
    };
    setProperties([property, ...properties]);
    await addProperties(newProperty);
  };

  const handleEditProperty = (updatedProperty) => {
    if (!selectedProperty) return;

    setProperties(
      properties.map((property) =>
        property.id === selectedProperty.id
          ? { ...property, ...updatedProperty }
          : property
      )
    );
  };

  const handleDeleteProperty = (id) => {
    if (window.confirm('Are you sure you want to delete this property?')) {
      setProperties(properties.filter((property) => property.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Properties"
        subtitle="Manage all property listings"
        icon={<Building2 size={24} />}
        actions={
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="bg-primary-600 hover:bg-primary-700 text-white py-2 px-4 rounded-lg flex items-center transition duration-200"
          >
            <Plus size={18} className="mr-1" />
            Add Property
          </button>
        }
      />

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow flex flex-col sm:flex-row gap-4">
        {/* Search */}
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search by title, location..."
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm placeholder-gray-400 
                     focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Type Filter */}
        <div className="relative w-full sm:w-auto">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Filter size={18} className="text-gray-400" />
          </div>
          <select
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md text-sm
                     focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 appearance-none"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            {filterTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Properties Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProperties.map((property) => (
          <PropertyCard
            key={property.id}
            property={property}
            onEdit={() => {
              setSelectedProperty(property);
              setIsEditModalOpen(true);
            }}
            onDelete={() => handleDeleteProperty(property.id)}
          />
        ))}
      </div>

      {/* No Results */}
      {filteredProperties.length === 0 && (
        <div className="bg-white p-8 rounded-lg shadow text-center">
          <Building2 size={48} className="mx-auto text-gray-300 mb-4" />
          <h3 className="text-lg font-medium text-gray-800 mb-1">
            No properties found
          </h3>
          <p className="text-gray-500">
            Try adjusting your search or filter criteria
          </p>
        </div>
      )}

      {/* Add Property Modal */}
      <AddEditPropertyModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSave={handleAddProperty}
      />

      {/* Edit Property Modal */}
      <AddEditPropertyModal
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
          setSelectedProperty(undefined);
        }}
        property={selectedProperty}
        onSave={handleEditProperty}
      />
    </div>
  );
};

export default Properties;
