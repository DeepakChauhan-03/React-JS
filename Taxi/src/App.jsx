import React from 'react';
import { Car } from 'lucide-react';
import { Helmet, HelmetProvider } from "react-helmet-async";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import OutstationTrips from './components/OutstationTrips';
import Cars from './components/Cars';
import About from './components/About';
import Contact from './components/Contact';
import WhyChooseUs from './components/WhyChooseUs';

const App = () => {
  return (
      <div className="min-h-screen bg-white selection:bg-orange-100 selection:text-orange-900">
        

        <Navbar />
        
        <main>
          <Hero />
          <Services />
          <Cars />
          <OutstationTrips />
          <WhyChooseUs />
          <About />
          <Contact />
        </main>

      {/* Footer */}
         <footer className="bg-gray-900 text-white py-12">
              <div className="container mx-auto px-4">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-2 rounded-xl">
                      <Car className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Varanasi Nigam Taxi Services</h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-400 mb-6">
                    Your trusted travel partner in the spiritual city of Varanasi
                  </p>
        
                  <div className="border-t border-gray-800 pt-6">
                    <p className="text-gray-400">
                      © 2025 Varanasi Nigam Taxi Services. All rights reserved.
                    </p>
                    <p className="text-gray-500 mt-2">
                      Made with ❤️ in Varanasi
                    </p>
                  </div>
                </div>
              </div>
            </footer>
      </div>
    
  );
};

export default App;