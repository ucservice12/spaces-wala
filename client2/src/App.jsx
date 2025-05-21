import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
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

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/property/:id" element={<PropertyDetailsPage />} />
            <Route path="/search" element={<SearchResultsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/apartments" element={<ApartmentsPage />} />
            <Route path="/villas" element={<VillasPage />} />
            <Route path="/plots" element={<PlotsPage />} />
            <Route path="/commercial" element={<CommercialPage />} />
            <Route path="/pg-coliving" element={<PgCoLivingPage />} />
            <Route path="/luxury-homes" element={<LuxuryHomesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;