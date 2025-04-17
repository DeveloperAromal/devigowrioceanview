// import CustomHeader from "./components/includes/CustomHeader";
import BestPlace from "./components/screens/BestPlace";
import Location from "./components/screens/Location";
import Hero from "./components/screens/Hero";
import Testimonial from "./components/screens/Testimonial";
import CTA from "./components/screens/CTA";
import Navbar from "./components/screens/Navbar";
import Footer from "./components/screens/Footer";
import Highlights from "./components/screens/Highlights";
export default function LandingPage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <BestPlace />
      <Highlights />
      <Testimonial />
      <Location />
      <CTA />
      <Footer />
    </main>
  );
}
