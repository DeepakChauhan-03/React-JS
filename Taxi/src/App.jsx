import React, { useState, useEffect } from 'react';
import { Car, Phone, Clock, Shield, Star, MapPin, Users, Wind, ChevronRight, Menu, X, Check } from 'lucide-react';

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

  const whatsappNumber = "919999999999";
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
              <h1 className="text-base font-bold text-gray-900">VN Taxi</h1>
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

// Hero Section
const Hero = () => {
  const whatsappNumber = "919999999999";
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

// Service Card Component
const ServiceCard = ({ icon: Icon, title, description, delay }) => {
  return (
    <div 
      className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="bg-gradient-to-br from-orange-500 to-orange-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

// Services Section
const Services = () => {
  const services = [
    {
      icon: MapPin,
      title: "Airport Transfer",
      description: "Comfortable airport pickups and drops with flight tracking and on-time guarantee."
    },
    {
      icon: Car,
      title: "Local City Ride",
      description: "Travel anywhere in Varanasi with our clean, affordable, and reliable taxi service."
    },
    {
      icon: MapPin,
      title: "Outstation Trips",
      description: "Plan your weekend getaways with our comfortable cars and experienced drivers."
    },
    {
      icon: Star,
      title: "Temple & Sightseeing Tour",
      description: "Explore Varanasi's spiritual heritage with our guided temple and Ganga Ghat tours."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-orange-600">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From airport transfers to temple tours, we've got all your travel needs covered
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Outstation Routes Card Component
const RouteCard = ({ route }) => {
  const whatsappNumber = "919999999999";
  const whatsappMessage = encodeURIComponent(
    `Hello, I want to book a taxi for outstation trip.\n\nRoute: ${route.from} to ${route.to}\nDistance: ${route.distance}\nPickup Date: \nPickup Time: \nReturn Trip: `
  );

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
      <div className="relative h-32 bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
        <MapPin className="w-16 h-16 text-white opacity-20 absolute" />
        <div className="relative z-10 text-center text-white">
          <p className="text-sm font-medium opacity-90">{route.from}</p>
          <div className="flex items-center gap-2 my-2">
            <div className="w-8 h-0.5 bg-white"></div>
            <Car className="w-6 h-6" />
            <div className="w-8 h-0.5 bg-white"></div>
          </div>
          <p className="text-sm font-medium opacity-90">{route.to}</p>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{route.from} → {route.to}</h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Distance:</span>
            <span className="font-semibold text-gray-900">{route.distance}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Approx. Time:</span>
            <span className="font-semibold text-gray-900">{route.duration}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Starting from:</span>
            <span className="font-bold text-orange-600 text-lg">₹{route.startingPrice}</span>
          </div>
        </div>

        {route.popular && (
          <div className="bg-orange-50 text-orange-700 px-3 py-1.5 rounded-lg text-xs font-semibold mb-4 inline-block">
            🔥 Popular Route
          </div>
        )}

        <a
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105"
        >
          <Phone className="w-4 h-4" />
          Book This Trip
        </a>
      </div>
    </div>
  );
};

// Outstation Trips Section
const OutstationTrips = () => {
  const routes = [
    {
      from: "Varanasi",
      to: "Ayodhya",
      distance: "200 km",
      duration: "4-5 hours",
      startingPrice: "2400",
      popular: true
    },
    {
      from: "Varanasi",
      to: "Delhi",
      distance: "820 km",
      duration: "12-14 hours",
      startingPrice: "9800",
      popular: true
    },
    {
      from: "Varanasi",
      to: "Gorakhpur",
      distance: "230 km",
      duration: "4-5 hours",
      startingPrice: "2800",
      popular: false
    },
    {
      from: "Varanasi",
      to: "Nepal (Kathmandu)",
      distance: "450 km",
      duration: "8-10 hours",
      startingPrice: "5400",
      popular: true
    },
    {
      from: "Varanasi",
      to: "Patna (Bihar)",
      distance: "250 km",
      duration: "5-6 hours",
      startingPrice: "3000",
      popular: false
    },
    {
      from: "Varanasi",
      to: "Lucknow",
      distance: "320 km",
      duration: "6-7 hours",
      startingPrice: "3800",
      popular: true
    },
    {
      from: "Varanasi",
      to: "Allahabad (Prayagraj)",
      distance: "125 km",
      duration: "2-3 hours",
      startingPrice: "1500",
      popular: false
    },
    {
      from: "Varanasi",
      to: "Gaya (Bihar)",
      distance: "240 km",
      duration: "5-6 hours",
      startingPrice: "2900",
      popular: false
    },
    {
      from: "Varanasi",
      to: "Bodhgaya",
      distance: "250 km",
      duration: "5-6 hours",
      startingPrice: "3000",
      popular: true
    }
  ];

  return (
    <section id="outstation" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Popular <span className="text-orange-600">Outstation Routes</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Travel across UP, Bihar, Nepal and beyond with our comfortable outstation taxi service
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {routes.map((route, index) => (
            <RouteCard key={index} route={route} />
          ))}
        </div>

        {/* Custom Route CTA */}
        <div className="mt-12 bg-gradient-to-br from-orange-50 to-orange-100 p-8 sm:p-12 rounded-3xl text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Need a Custom Route?
          </h3>
          <p className="text-gray-700 mb-6 text-lg max-w-2xl mx-auto">
            Planning a trip to somewhere not listed? We cover entire Uttar Pradesh, Bihar, and nearby states. Get a custom quote now!
          </p>
          <a
            href={`https://wa.me/919999999999?text=${encodeURIComponent("Hello, I need a custom outstation trip quote.\n\nFrom: \nTo: \nDate: \nPassengers: ")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg"
          >
            <Phone className="w-5 h-5" />
            Get Custom Quote
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

// Car Card Component
const CarCard = ({ car }) => {
  const whatsappNumber = "919999999999";
  const whatsappMessage = encodeURIComponent(
    `Hello, I want to book a taxi.\n\nCar: ${car.name}\nPickup: \nDrop: \nDate: \nTime: `
  );

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
      {/* Car Image */}
      <div className="relative h-48 bg-gradient-to-br from-orange-100 to-orange-50 flex items-center justify-center overflow-hidden">
        <Car className="w-32 h-32 text-orange-600 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
        {car.featured && (
          <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold">
            Popular
          </div>
        )}
      </div>

      {/* Car Details */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{car.name}</h3>
        
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-3xl font-bold text-orange-600">₹{car.price}</span>
          <span className="text-gray-600">/km</span>
        </div>

        {/* Features */}
        <div className="space-y-2 mb-6">
          <div className="flex items-center gap-2 text-gray-700">
            <Users className="w-4 h-4 text-orange-600" />
            <span className="text-sm">{car.seats} Seats</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700">
            <Wind className="w-4 h-4 text-orange-600" />
            <span className="text-sm">{car.ac}</span>
          </div>
        </div>

        {/* Book Button */}
        <a
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group-hover:scale-105"
        >
          <Phone className="w-4 h-4" />
          Book Now
        </a>
      </div>
    </div>
  );
};

// Cars Section
const Cars = () => {
  const cars = [
    { name: "Swift Dzire", price: 12, seats: 4, ac: "AC Available", featured: false },
    { name: "Toyota Etios", price: 13, seats: 4, ac: "AC Available", featured: false },
    { name: "Maruti Ertiga", price: 16, seats: 6, ac: "AC Available", featured: true },
    { name: "Innova Crysta", price: 19, seats: 7, ac: "AC Available", featured: true },
    { name: "Kia Carens", price: 18, seats: 6, ac: "AC Available", featured: false },
    { name: "Tempo Traveller", price: 25, seats: 12, ac: "AC Available", featured: false }
  ];

  return (
    <section id="cars" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-orange-600">Fleet</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from our range of well-maintained vehicles for your perfect journey
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car, index) => (
            <CarCard key={index} car={car} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Why Choose Us Section
const WhyChooseUs = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Trusted Local Drivers",
      description: "All our drivers are verified, licensed, and know Varanasi like the back of their hand."
    },
    {
      icon: Star,
      title: "Transparent Pricing",
      description: "No hidden charges. Pay exactly what you see with our clear per-kilometer rates."
    },
    {
      icon: Car,
      title: "Clean & Sanitized Cars",
      description: "Every vehicle is thoroughly cleaned and sanitized before and after each ride."
    },
    {
      icon: Phone,
      title: "Quick WhatsApp Booking",
      description: "Book your ride in seconds through WhatsApp. No app downloads or registrations needed."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-white to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-orange-600">Us?</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're not just a taxi service, we're your trusted travel partner in Varanasi
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center group hover:-translate-y-2"
            >
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-600 transition-colors duration-300">
                <benefit.icon className="w-8 h-8 text-orange-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// About Section
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              About <span className="text-orange-600">Us</span>
            </h2>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-white p-8 sm:p-12 rounded-3xl shadow-xl">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                <span className="font-bold text-orange-600">Varanasi Nigam Taxi Services</span> is your trusted local taxi partner in the spiritual city of Varanasi. We understand that whether you're a tourist exploring the ancient ghats and temples or a local commuting for work, you need reliable, safe, and affordable transportation.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                Started as a small family business, we've grown through word-of-mouth and customer trust. Our drivers aren't just chauffeurs – they're knowledgeable locals who can guide you through Varanasi's rich cultural heritage while ensuring a comfortable journey.
              </p>

              <p className="text-gray-700 leading-relaxed text-lg">
                We pride ourselves on <span className="font-semibold text-orange-600">punctuality, cleanliness, and transparency</span>. No hidden charges, no last-minute surprises – just honest, dependable service that treats every passenger like family. From early morning temple visits to late-night airport drops, we're here 24/7 to serve you.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 mt-10 pt-10 border-t border-orange-200">
              <div className="text-center">
                <p className="text-4xl font-bold text-orange-600 mb-2">5+</p>
                <p className="text-gray-600 font-medium">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-orange-600 mb-2">1000+</p>
                <p className="text-gray-600 font-medium">Happy Customers</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-bold text-orange-600 mb-2">24/7</p>
                <p className="text-gray-600 font-medium">Available Service</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Contact Section
const Contact = () => {
  const whatsappNumber = "919999999999";
  const whatsappMessage = encodeURIComponent("Hello, I want to inquire about taxi services.");

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Get in <span className="text-orange-600">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions? Need a custom quote? We're just a message away!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6">
            {/* Contact Info Cards */}
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-orange-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
                <Phone className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Phone Number</h3>
              <a href="tel:+919999999999" className="text-orange-600 text-lg font-semibold hover:underline">
                +91 9999999999
              </a>
              <p className="text-gray-600 mt-2 text-sm">Call us anytime</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-orange-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
                <Phone className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">WhatsApp</h3>
              <a 
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 text-lg font-semibold hover:underline"
              >
                Chat with us
              </a>
              <p className="text-gray-600 mt-2 text-sm">Quick response guaranteed</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-orange-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
                <MapPin className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Location</h3>
              <p className="text-gray-700 text-lg font-semibold">Varanasi, UP</p>
              <p className="text-gray-600 mt-2 text-sm">Serving entire city & nearby areas</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-orange-100 w-14 h-14 rounded-2xl flex items-center justify-center mb-4">
                <Clock className="w-7 h-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Working Hours</h3>
              <p className="text-gray-700 text-lg font-semibold">24/7 Available</p>
              <p className="text-gray-600 mt-2 text-sm">Round the clock service</p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <a 
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-5 rounded-full font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg"
            >
              <Phone className="w-6 h-6" />
              Book Your Ride Now
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer
const Footer = () => {
  return (
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
  );
};

// Main App
export default function VaranasiTaxiApp() {
  return (
    <div className="font-sans antialiased">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
        
        * {
          font-family: 'Poppins', sans-serif;
          scroll-behavior: smooth;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }

        .animate-fadeInRight {
          animation: fadeInRight 0.8s ease-out;
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-floatDelay {
          animation: float 3s ease-in-out infinite;
          animation-delay: 1s;
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
          background: #ff6b00;
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #e55a00;
        }
      `}</style>
      
      <Navbar />
      <Hero />
      <Services />
      <Cars />
      <OutstationTrips />
      <WhyChooseUs />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
