import React from 'react';
import { Star, Check } from 'lucide-react';

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

export default About;