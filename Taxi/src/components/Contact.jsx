import React from 'react';
import { Phone, MapPin, Clock, Shield } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Need Help? <span className="text-orange-600">Contact Us</span></h2>
              <p className="text-gray-600 mb-10 leading-relaxed text-lg">
                Our support team is available 24/7 to assist you with your booking or any queries. Don't hesitate to reach out!
              </p>
              
              <div className="space-y-6">
                <a href="tel:+919455522307" className="flex items-center gap-6 bg-white p-6 rounded-[2rem] shadow-lg border border-gray-100 group transition hover:border-orange-500">
                  <div className="bg-orange-100 p-4 rounded-2xl text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Call Us Anytime</p>
                    <p className="text-xl font-bold text-gray-900">+91 9455522307</p>
                  </div>
                </a>
                
                <div className="flex items-center gap-6 bg-white p-6 rounded-[2rem] shadow-lg border border-gray-100 group transition hover:border-orange-500">
                  <div className="bg-orange-100 p-4 rounded-2xl text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium">Our Location</p>
                    <p className="text-xl font-bold text-gray-900">Varanasi, Uttar Pradesh</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-8 rounded-[2.5rem] shadow-lg flex flex-col items-center justify-center text-center space-y-4 border border-gray-100">
                <Clock className="w-10 h-10 text-orange-600" />
                <p className="font-bold text-gray-900">On Time Pickup</p>
              </div>
              <div className="bg-white p-8 rounded-[2.5rem] shadow-lg flex flex-col items-center justify-center text-center space-y-4 border border-gray-100">
                <Shield className="w-10 h-10 text-orange-600" />
                <p className="font-bold text-gray-900">Safe Travel</p>
              </div>
              <div className="col-span-2 bg-gradient-to-br from-orange-500 to-orange-600 p-8 rounded-[2.5rem] text-white shadow-xl">
                <h4 className="text-xl font-bold mb-2">24/7 Support</h4>
                <p className="opacity-90">Always ready to help with your journey. Call us for emergency bookings!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;