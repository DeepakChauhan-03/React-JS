import React from 'react';
import { Users, Wind, Phone } from 'lucide-react';

const Cars = () => {
//   const cars = [
//     { name: "Swift Dzire", seats: "4+1", ac: "Climate Control", type: "Sedan", image: "https://tse3.mm.bing.net/th/id/OIP.CTw3Nw7_QIX-EAJsgIS5twHaDx?rs=1&pid=ImgDetMain&o=7&rm=3" },
//     { name: "Innova Crysta", seats: "6+1", ac: "Dual Zone AC", type: "Premium SUV", image: "https://static.vecteezy.com/system/resources/previews/020/188/849/original/toyota-innova-crysta-top-model-2393cc-automatic-transmission-turbo-engine-6-speed-gear-free-png.png" },
//     { name: "Maruti Ertiga", seats: "6+1", ac: "Powerful AC", type: "Family SUV", image: "https://tse1.mm.bing.net/th/id/OIP.A8Aqjo5isAHPLbpv4T7cYAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3" }
//   ];
const cars = [
    { name: "Swift Dzire", price: 12, seats: 4, ac: "AC Available", featured: true, image:"https://tse3.mm.bing.net/th/id/OIP.CTw3Nw7_QIX-EAJsgIS5twHaDx?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "Maruti Ertiga", price: 13, seats: 6, ac: "AC Available", featured: false, image:"https://tse1.mm.bing.net/th/id/OIP.A8Aqjo5isAHPLbpv4T7cYAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "Innova", price: 16, seats: 6, ac: "AC Available", featured: true, image:"https://static.vecteezy.com/system/resources/previews/020/188/849/original/toyota-innova-crysta-top-model-2393cc-automatic-transmission-turbo-engine-6-speed-gear-free-png.png" },
    { name: "Aura", price: 19, seats: 4, ac: "AC Available", featured: true, image:"https://tse1.mm.bing.net/th/id/OIP.PYJOx_9QWJvOs2cmbRGD-wHaEo?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "Kia Carens", price: 18, seats: 7, ac: "AC Available", featured: false , image:"https://www.kia.com/content/dam/kwcms/kme/global/en/assets/gnb/kia-carens.png" },
    { name: "Wagnor", price: 25, seats: 4, ac: "AC Available", featured: false , image:"https://imgd.aeplcdn.com/1056x594/n/h5360sa_1458598.jpg?q=75&wm=1"}
  ];

  const whatsappNumber = "9455522307";

  return (
    <section id="cars" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Choose Your <span className="text-orange-600">Ride</span></h2>
          <div className="h-1.5 w-24 bg-orange-600 mx-auto rounded-full" />
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <div key={index} className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group">
              <div className="relative h-56 bg-gradient-to-b from-gray-50 to-white flex items-center justify-center p-6 overflow-hidden">
                <img 
                  className='w-full h-full object-contain group-hover:scale-110 transition-transform duration-500'
                  src={car.image} 
                  alt={car.name} 
                />
                {/* <div className="absolute top-6 left-6 bg-orange-600 text-white px-4 py-1.5 rounded-full text-xs font-bold">
                  {car.type}
                </div> */}
                {cars.featured && (
          <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold">
            Popular
          </div>
        )}
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{car.name}</h3>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3 text-gray-700 bg-gray-50 p-3 rounded-2xl">
                    <Users className="w-5 h-5 text-orange-600" />
                    <span className="font-medium">{car.seats} Seats</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700 bg-gray-50 p-3 rounded-2xl">
                    <Wind className="w-5 h-5 text-orange-600" />
                    <span className="font-medium">{car.ac}</span>
                  </div>
                </div>
                <a 
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Hello, I want to book a ${car.name}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gray-900 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-orange-600 transition-colors group-hover:shadow-lg active:scale-95"
                >
                  <Phone className="w-5 h-5" />  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cars;