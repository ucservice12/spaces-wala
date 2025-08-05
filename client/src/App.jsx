import { Routes, Route, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import MainLayout from './components/layout/main/MainLayout';
import DashboardLayout from './components/layout/DashboardLayout';
import PrivateRoute from './context/PrivateRoute';

import HomePage from './pages/HomePage';
import PropertyDetailsPage from './pages/PropertyDetailsPage';
import SearchResultsPage from './pages/SearchResultsPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ApartmentsPage from './pages/ApartmentsPage';
import VillasPage from './pages/VillasPage';
import PlotsPage from './pages/PlotsPage';
import CommercialPage from './pages/CommercialPage';
import PgCoLivingPage from './pages/PgCoLivingPage';
import LuxuryHomesPage from './pages/LuxuryHomesPage';
import AboutPage from './pages/AboutPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import TestimonialsPage from './pages/TestimonialsPage';
import PostPropertyForm from './pages/postproperty/PostPropertyForm';
import RentPageMain from './pages/payrentPage/RentPageMain';
import Developers from './pages/packages/Developers';
import Brokers from './pages/packages/Brokers';

import ProfilePage from './pages/dashboardpages/ProfilePage';
import MyPropertiesPage from './pages/dashboardpages/MyPropertiesPage';
import SavedListingsPage from './pages/dashboardpages/SavedListingsPage';
import AnalyticsPage from './pages/dashboardpages/AnalyticsPage';
import MessagesPage from './pages/dashboardpages/MessagesPage';
import SettingsPage from './pages/dashboardpages/SettingsPage';
import MyActivity from './pages/dashboardpages/MyActivity';
import MyReviewsPage from './pages/dashboardpages/MyReviewsPage';
import { isauthrize } from './machine/auth';
import NotFound from './pages/NotFoundPage';

function App() {
  const dispatch = useDispatch();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  useEffect(() => {
    dispatch(isauthrize());
  }, [dispatch]);

  return (
    <>
      <Routes>
        {/* Public Routes wrapped in MainLayout */}
        <Route path="/" element={<MainLayout toggleSidebar={toggleSidebar} />}>
          <Route index element={<HomePage />} />
          <Route path="property/:id" element={<PropertyDetailsPage />} />
          <Route path="search" element={<SearchResultsPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="apartments" element={<ApartmentsPage />} />
          <Route path="villas" element={<VillasPage />} />
          <Route path="plots" element={<PlotsPage />} />
          <Route path="commercial" element={<CommercialPage />} />
          <Route path="pg-coliving" element={<PgCoLivingPage />} />
          <Route path="luxury-homes" element={<LuxuryHomesPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="careers" element={<CareersPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="testimonials" element={<TestimonialsPage />} />
          <Route path="payrent" element={<RentPageMain />} />
          <Route path="packages/developers" element={<Developers />} />
          <Route path="packages/brokers" element={<Brokers />} />
           <Route path="moblie/profile" element={<Brokers />} />
          {/* Dashboard Private Routes */}
          <Route path="dashboard" element={<DashboardLayout />}>
            <Route path="profile" element={<ProfilePage />} />
            <Route path="my-properties" element={<MyPropertiesPage />} />
            <Route path="saved" element={<SavedListingsPage />} />
            <Route path="analytics" element={<AnalyticsPage />} />
            <Route path="messages" element={<MessagesPage />} />
            <Route path="settings" element={<SettingsPage />} />
            <Route path="my-activity" element={<MyActivity />} />
            <Route path="my-reviews" element={<MyReviewsPage />} />
           
          </Route>
          
          {/* Protected Routes */}
          <Route
            element={
              <PrivateRoute>
                <Outlet />
              </PrivateRoute>
            }
          >
            {/* Seller Private Route */}
            <Route path="/seller/post-property" element={<PostPropertyForm />} />
          </Route>

          {/* Catch-all route for 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
     
    </>
  );
}

export default App;