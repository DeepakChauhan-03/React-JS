import React, { useState, useEffect } from 'react';
import { Car, Phone, Menu, X } from 'lucide-react';

// Navbar Component
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const whatsappNumber = "9455522307";
  const whatsappMessage = encodeURIComponent("Hello, I want to book a taxi from Varanasi Nigam Taxi Services.");

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg py-3' : 'bg-white/95 backdrop-blur-md py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-2 rounded-xl">
              <Car className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-gray-900 leading-none">Varanasi Nigam</h1>
              <p className="text-xs text-orange-600 font-medium">Taxi Services</p>
            </div>
            <div className="block sm:hidden">
              <h1 className="text-base font-bold text-gray-900">VN Taxi Services</h1>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-orange-600 transition font-medium">Home</button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-orange-600 transition font-medium">Services</button>
            <button onClick={() => scrollToSection('cars')} className="text-gray-700 hover:text-orange-600 transition font-medium">Cars</button>
            <button onClick={() => scrollToSection('outstation')} className="text-gray-700 hover:text-orange-600 transition font-medium">Outstation</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-orange-600 transition font-medium">About</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-orange-600 transition font-medium">Contact</button>
          </div>

          {/* Book Now Button */}
          <div className="flex items-center gap-3">
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 sm:px-6 py-2.5 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 text-sm sm:text-base flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Book Now</span>
              <span className="sm:hidden">Book</span>
            </a>
            
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100 pt-4 animate-fadeIn">
            <div className="flex flex-col gap-3">
              <button onClick={() => scrollToSection('home')} className="text-left text-gray-700 hover:text-orange-600 transition font-medium py-2">Home</button>
              <button onClick={() => scrollToSection('services')} className="text-left text-gray-700 hover:text-orange-600 transition font-medium py-2">Services</button>
              <button onClick={() => scrollToSection('cars')} className="text-left text-gray-700 hover:text-orange-600 transition font-medium py-2">Cars</button>
              <button onClick={() => scrollToSection('outstation')} className="text-left text-gray-700 hover:text-orange-600 transition font-medium py-2">Outstation</button>
              <button onClick={() => scrollToSection('about')} className="text-left text-gray-700 hover:text-orange-600 transition font-medium py-2">About</button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700 hover:text-orange-600 transition font-medium py-2">Contact</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;