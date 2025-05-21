import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  favorites: string[];
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  addToFavorites: (propertyId: string) => void;
  removeFromFavorites: (propertyId: string) => void;
  isPropertyFavorited: (propertyId: string) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string): Promise<boolean> => {
    // Simulate API call
    if (email.includes('@') && password.length >= 6) {
      setUser({
        id: '1',
        name: 'Demo User',
        email,
        favorites: [],
      });
      return true;
    }
    return false;
  };

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    // Simulate API call
    if (name && email.includes('@') && password.length >= 6) {
      setUser({
        id: '1',
        name,
        email,
        favorites: [],
      });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  const addToFavorites = (propertyId: string) => {
    if (user) {
      setUser({
        ...user,
        favorites: [...user.favorites, propertyId],
      });
    }
  };

  const removeFromFavorites = (propertyId: string) => {
    if (user) {
      setUser({
        ...user,
        favorites: user.favorites.filter(id => id !== propertyId),
      });
    }
  };

  const isPropertyFavorited = (propertyId: string) => {
    return user ? user.favorites.includes(propertyId) : false;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        register,
        logout,
        addToFavorites,
        removeFromFavorites,
        isPropertyFavorited,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};