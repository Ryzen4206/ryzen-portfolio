
import React from 'react';
import { Download, Award, Users, Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const stats = [
    { icon: Award, value: '08+', label: 'Years experience' },
    { icon: Users, value: '20+', label: 'Completed projects' },
    { icon: Coffee, value: '5+', label: 'Companies worked' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-gray-600">My introduction</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="flex justify-center">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80"
                  alt="About Alexa"
                  className="w-80 h-96 object-cover rounded-2xl shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary-600 rounded-2xl opacity-20"></div>
              </div>
            </div>

            {/* Content */}
            <div>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Web developer, with extensive knowledge and years of experience, working in web 
                technologies and UI/UX design, delivering quality work.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <stat.icon className="text-primary-600" size={24} />
                    </div>
                    <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Download CV Button */}
              <Button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-full font-semibold flex items-center space-x-2">
                <span>Download CV</span>
                <Download size={18} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
