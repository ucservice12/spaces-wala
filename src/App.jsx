import Banner from "@/components/landing-page/Banner"
import Footer from "@/components/landing-page/Footer"
import Home from "@/components/landing-page/Home"
import Property from "@/components/landing-page/Property"
import Projects from "@/components/landing-page/Projects"
import Partner from "@/components/landing-page/Partner"
import CommitmentAndVision from "./components/landing-page/CommitmentAndVision"
import Testimonial from "@/components/landing-page/Testimonial"

function App() {
  return (
    <>
      <Banner />
      <Home />
      <div className="max-w-6xl mx-auto px-6 sm:px-0">
        <Projects />
        <Partner />
        <Property />
        <CommitmentAndVision />
        <Testimonial />
      </div>
      <Footer />
    </>
  )
}

export default App
