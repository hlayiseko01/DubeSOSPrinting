import Announcement from './components/Announcement';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesPrices from './components/ServicesPrices';
import PriceEstimator from './components/PriceEstimator';
import ContactLocation from './components/ContactLocation';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-dark-main select-none selection:bg-brand-orange-light selection:text-brand-orange">
      {/* 1. Announcement Banner */}
      <Announcement />
      
      {/* 2. Sticky Glass Navigation Bar */}
      <Navbar />
      
      {/* 3. Hero Showcase Area */}
      <Hero />
      
      {/* 4. Elegant Services & Pricing Side-By-Side Cards */}
      <ServicesPrices />
      
      {/* 5. Live Print interactive Price Estimator */}
      <PriceEstimator />
      
      {/* 6. Form Messenger callback & Physical Map location specs */}
      <ContactLocation />
      
      {/* 7. Footer */}
      <Footer />
    </div>
  );
}
