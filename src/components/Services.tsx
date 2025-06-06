
import React from 'react';
import { Monitor, Smartphone, Palette } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: 'UI/UX Design',
      description: 'Web page design and mobile app design, prototyping and wireframing.'
    },
    {
      icon: Smartphone,
      title: 'Frontend Development',
      description: 'Development of custom websites and applications with modern technologies.'
    },
    {
      icon: Palette,
      title: 'Branding',
      description: 'I create brand identity design and digital marketing materials.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 hover:text-primary-600 transition-colors duration-300">Services</h2>
          <p className="text-gray-600">What I offer</p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white border border-gray-100 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary-200 group-hover:scale-110 transition-all duration-300">
                <service.icon className="text-primary-600 group-hover:scale-110 transition-transform duration-200" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4 group-hover:text-primary-600 transition-colors duration-300">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
