import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Properties from './pages/Properties';
import PropertyDetails from './pages/PropertyDetails';
import Users from './pages/Users';
import Leads from './pages/Leads';
import Settings from './pages/Settings';
import Content from './pages/Content';
import Bookings from './pages/Bookings';
import Login from './pages/Login';
import MainLayout from './components/layout/MainLayout';
import { AppProvider } from './context/AppContext';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />

          {/* Protected routes */}
          <Route element={isAuthenticated ? <MainLayout /> : <Navigate to="/login" />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/properties" element={<Properties />} />
            <Route path="/properties/:id" element={<PropertyDetails />} />
            <Route path="/users" element={<Users />} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/content" element={<Content />} />
            <Route path="/bookings" element={<Bookings />} />
            <Route path="/settings" element={<Settings />} />
          </Route>

          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;