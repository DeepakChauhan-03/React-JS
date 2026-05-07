import React from 'react';
import { MapPin, Phone, ChevronRight, Car, Clock, Shield, Star , Check } from 'lucide-react';

const Hero = () => {
  const whatsappNumber = "9455522307";
  const whatsappMessage = encodeURIComponent("Hello, I want to book a taxi from Varanasi Nigam Taxi Services.");

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-50">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff6b00' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fadeInUp">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" />
              Serving Varanasi & Beyond
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Book Trusted Taxi in <span className="text-orange-600">Varanasi</span> in Minutes
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Airport pickup, Local rides, Outstation trips & Temple tours with verified drivers.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <a 
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg flex items-center justify-center gap-2 group"
              >
                <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Book Now on WhatsApp
              </a>
              <button 
                onClick={() => scrollToSection('cars')}
                className="bg-white text-orange-600 border-2 border-orange-600 px-8 py-4 rounded-full font-bold hover:bg-orange-50 transition-all duration-300 text-lg flex items-center justify-center gap-2"
              >
                View Cars
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <Clock className="w-8 h-8 text-orange-600 mb-2 mx-auto lg:mx-0" />
                <h3 className="font-bold text-gray-900 text-sm mb-1">24/7 Service</h3>
                <p className="text-xs text-gray-600">Always Available</p>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <Shield className="w-8 h-8 text-orange-600 mb-2 mx-auto lg:mx-0" />
                <h3 className="font-bold text-gray-900 text-sm mb-1">Verified Drivers</h3>
                <p className="text-xs text-gray-600">100% Trusted</p>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <Star className="w-8 h-8 text-orange-600 mb-2 mx-auto lg:mx-0" />
                <h3 className="font-bold text-gray-900 text-sm mb-1">Affordable Pricing</h3>
                <p className="text-xs text-gray-600">Best Rates</p>
              </div>
              <div className="bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
                <Check className="w-8 h-8 text-orange-600 mb-2 mx-auto lg:mx-0" />
                <h3 className="font-bold text-gray-900 text-sm mb-1">On Time Pickup</h3>
                <p className="text-xs text-gray-600">Punctual Service</p>
              </div>
            </div>
          </div>

          {/* Right Image/Illustration */}
          <div className="relative hidden lg:block animate-fadeInRight">
            <div className="relative z-10">
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <Car className="w-full h-64 text-white" strokeWidth={1.5} />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl animate-float">
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Check className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">1000+</p>
                    <p className="text-xs text-gray-600">Happy Rides</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl animate-floatDelay">
                <div className="flex items-center gap-3">
                  <div className="bg-orange-100 p-2 rounded-full">
                    <Star className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">4.9/5</p>
                    <p className="text-xs text-gray-600">Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;