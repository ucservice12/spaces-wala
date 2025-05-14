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

import AboutUs from "@/pages/AboutUs";
import TermsCondition from "@/pages/Terms&Condition";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import NotFound from "@/pages/NotFound";
import ContactUs from "@/pages/ContactUs";
import RequestInfo from "@/pages/RequestInfo";
import FeedBackSend from "@/pages/FeedBackSend";
import AllTestimonials from "@/pages/AllTestimonials";
import SafetyGuid from "@/pages/SafetyGuid";
import AreaConverter from "@/pages/AreaConverter";

const Layout = () => (
  <>
    {/* <Banner /> */}
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      {!isOnSpecialPage && <Navbar2 />}

      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsCondition />} />
        <Route path="/request-info" element={<RequestInfo />} />
        <Route path="/feedback" element={<FeedBackSend />} />
        <Route path="/testimonials" element={<AllTestimonials />} />
        <Route path="/safety-guide" element={<SafetyGuid />} />
        <Route path="/area-converter" element={<AreaConverter />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
