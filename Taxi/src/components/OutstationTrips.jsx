import React from 'react';
import { Phone } from 'lucide-react';

const OutstationTrips = () => {
 const routes = [
    {
      from: "Varanasi",
      to: "Ayodhya",
      distance: "200 km",
      duration: "4-5 hours",
      startingPrice: "2400",
      popular: true,
      image: "https://tse1.mm.bing.net/th/id/OIP.MBuyyyHK1Znlisi80NalVAHaEj?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      from: "Varanasi",
      to: "Delhi",
      distance: "820 km",
      duration: "12-14 hours",
      startingPrice: "9800",
      popular: true,
      image:"https://tse3.mm.bing.net/th/id/OIP.r4Z_xHDU-NWGYB6MwPzS1gHaFj?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      from: "Varanasi",
      to: "Gorakhpur",
      distance: "230 km",
      duration: "4-5 hours",
      startingPrice: "2800",
      popular: false,
      image: "https://sacredsites.com/images/asia/india/gallery/uttar-pradesh/Gorakhnath-Temple-Gorakhpur-1.jpg"
    },
    {
      from: "Varanasi",
      to: "Nepal (Kathmandu)",
      distance: "450 km",
      duration: "8-10 hours",
      startingPrice: "5400",
      popular: true,
      image:"https://tse1.mm.bing.net/th/id/OIP.-la-yCBeX4TMu-UG7CnRLAHaE8?w=1024&h=683&rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      from: "Varanasi",
      to: "Patna (Bihar)",
      distance: "250 km",
      duration: "5-6 hours",
      startingPrice: "3000",
      popular: false,
      image: "https://tse1.mm.bing.net/th/id/OIP.Dm_FV9xAEoKPSk3rwajizwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      from: "Varanasi",
      to: "Lucknow",
      distance: "320 km",
      duration: "6-7 hours",
      startingPrice: "3800",
      popular: true,
      image:"https://tse3.mm.bing.net/th/id/OIP.KQDsaVJmxRsEeylH00Om3AHaEU?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      from: "Varanasi",
      to: "Allahabad (Prayagraj)",
      distance: "125 km",
      duration: "2-3 hours",
      startingPrice: "1500",
      popular: false,
      image:"https://tse4.mm.bing.net/th/id/OIP.5gUasj-F1XdeIoV-Q98_oQHaDb?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
      from: "Varanasi",
      to: "Gaya (Bihar)",
      distance: "240 km",
      duration: "5-6 hours",
      startingPrice: "2900",
      popular: false,
      image:"https://static.toiimg.com/photo/69372761/3.jpg?width=748&resize=4"
    },
    // {
    //   from: "Varanasi",
    //   to: "Bodhgaya",
    //   distance: "250 km",
    //   duration: "5-6 hours",
    //   startingPrice: "3000",
    //   popular: true
    // }
  ];

  const whatsappNumber = "9455522307";

  return (
    <section id="outstation" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Popular <span className="text-orange-600">Outstation Routes</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Explore neighboring cities with our comfortable outstation taxi service at the best rates.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {routes.map((route, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group border border-gray-100">
              <div className="relative h-40 overflow-hidden">
                <img 
                  className='h-full w-full object-cover group-hover:scale-110 transition-transform duration-500'
                  src={route.image} 
                  alt={route.to} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-xs font-medium uppercase tracking-wider opacity-90">{route.from} to</p>
                  <h3 className="text-xl font-bold">{route.to}</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between text-sm mb-4">
                  <div className="text-center p-2 bg-gray-50 rounded-2xl flex-1 mr-2">
                    <p className="text-gray-500 text-xs uppercase">Distance</p>
                    <p className="font-bold text-gray-900">{route.distance}</p>
                  </div>
                  <div className="text-center p-2 bg-gray-50 rounded-2xl flex-1">
                    <p className="text-gray-500 text-xs uppercase">Duration</p>
                    <p className="font-bold text-gray-900">{route.duration}</p>
                  </div>
                </div>
                <a 
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hello, I want to book a taxi from ${route.from} to ${route.to}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-2xl font-bold flex items-center justify-center gap-2 hover:shadow-lg transition-all active:scale-95"
                >
                  <Phone className="w-4 h-4" /> Book This Trip
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OutstationTrips;