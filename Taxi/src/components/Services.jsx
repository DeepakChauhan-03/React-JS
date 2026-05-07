import React from 'react';
import { MapPin, Car, Star } from 'lucide-react';

const Services = () => {
  const services = [
    { icon: MapPin, title: "Airport Transfer", description: "Comfortable airport pickups and drops with on-time guarantee and professional drivers." },
    { icon: Car, title: "Local City Ride", description: "Travel anywhere in Varanasi with our clean, well-maintained, and affordable taxi service." },
    { icon: MapPin, title: "Outstation Trips", description: "Plan your weekend getaways or business trips with our reliable outstation taxi service." },
    { icon: Star, title: "Temple Tour", description: "Explore the spiritual heritage of Varanasi with our specialized Kashi Vishwanath temple tours." }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our <span className="text-orange-600">Services</span></h2>
          <div className="h-1.5 w-24 bg-orange-600 mx-auto rounded-full" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100">
              <div className="bg-orange-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;