import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Banner from "@/components/landing-page/Banner";
import Footer from "@/components/Footer";
import Home from "@/components/landing-page/Home";
import Property from "@/components/landing-page/Property";
import Projects from "@/components/landing-page/Projects";
import Partner from "@/components/landing-page/Partner";
import CommitmentAndVision from "@/components/landing-page/CommitmentAndVision";
import Testimonial from "@/components/landing-page/Testimonial";
import News from "@/components/landing-page/News";
import Navbar2 from "@/components/Navbar-2";

import TermsCondition from "@/pages/Terms&Condition";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";

// Define the Layout Component that will contain the common parts (Banner, Home, etc.)
const Layout = () => (
  <>
    <Banner />
    <Home />
    <div className="max-w-6xl mx-auto px-6 sm:px-0">
      <Projects />
      <Property />
      <News />
      <Partner />
      <CommitmentAndVision />
      <Testimonial />
    </div>
  </>
);

function App() {
  const location = useLocation();

  const isOnSpecialPage = location.pathname === "/";

  // Scroll to the top of the page whenever the route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      {/* Conditionally render Navbar2 based on whether the current route is not active */}
      {!isOnSpecialPage && <Navbar2 />}

      {/* Routes will render the content based on the current route */}
      <Routes>
        {/* Main route for the layout */}
        <Route path="/" element={<Layout />} />
        {/* Privacy policy page route */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsCondition />} />

        {/* Catch-all route for 404 page */}
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Footer will be shown on all routes */}
      <Footer />
    </>
  );
}

export default App;
