import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Property } from '../types/property';
import { properties } from '../data/properties';

interface PropertyContextType {
  allProperties: Property[];
  featuredProperties: Property[];
  compareProperties: Property[];
  searchResults: Property[];
  addToCompare: (property: Property) => void;
  removeFromCompare: (propertyId: string) => void;
  setSearchResults: (results: Property[]) => void;
  getPropertyById: (id: string) => Property | undefined;
}

const PropertyContext = createContext<PropertyContextType | undefined>(undefined);

export const useProperties = () => {
  const context = useContext(PropertyContext);
  if (!context) {
    throw new Error('useProperties must be used within a PropertyProvider');
  }
  return context;
};

export const PropertyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [allProperties] = useState<Property[]>(properties);
  const [compareProperties, setCompareProperties] = useState<Property[]>([]);
  const [searchResults, setSearchResults] = useState<Property[]>([]);

  const featuredProperties = allProperties.filter(property => property.featured);

  const addToCompare = (property: Property) => {
    if (compareProperties.length < 3 && !compareProperties.some(p => p.id === property.id)) {
      setCompareProperties([...compareProperties, property]);
    }
  };

  const removeFromCompare = (propertyId: string) => {
    setCompareProperties(compareProperties.filter(property => property.id !== propertyId));
  };

  const getPropertyById = (id: string) => {
    return allProperties.find(property => property.id === id);
  };

  return (
    <PropertyContext.Provider
      value={{
        allProperties,
        featuredProperties,
        compareProperties,
        searchResults,
        addToCompare,
        removeFromCompare,
        setSearchResults,
        getPropertyById,
      }}
    >
      {children}
    </PropertyContext.Provider>
  );
};