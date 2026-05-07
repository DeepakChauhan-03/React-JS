import React from 'react'
import { Shield,Star,Car,Phone } from 'lucide-react';

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


export default WhyChooseUs
