
import React from 'react';
import { Monitor, Smartphone, Palette } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Services = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  {/* 🛠️ Update your services below - add, remove, or modify as needed */}
  const services = [
    {
      icon: Monitor,
      title: 'UI/UX Design',
      description: 'Creating intuitive and visually appealing user interfaces with modern design principles, user research, and comprehensive prototyping for optimal user experience.'
    },
    {
      icon: Smartphone,
      title: 'Frontend Development',
      description: 'Building responsive, high-performance web applications using cutting-edge technologies like React, TypeScript, and modern CSS frameworks for seamless user interactions.'
    },
    {
      icon: Palette,
      title: 'Branding & Identity',
      description: 'Developing cohesive brand identities including logo design, color schemes, typography, and comprehensive brand guidelines that create memorable digital experiences.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl font-bold text-foreground mb-4 hover:text-primary transition-colors duration-300">Services</h2>
          <p className="text-muted-foreground">What I offer</p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const { ref, isVisible } = useScrollAnimation();
            
            return (
              <div 
                key={index} 
                ref={ref}
                className={`bg-background border border-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-1000 hover:-translate-y-2 group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <service.icon className="text-primary group-hover:scale-110 transition-transform duration-200" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
