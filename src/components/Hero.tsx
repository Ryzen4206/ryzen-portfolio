
import React from 'react';
import { Linkedin, Github, Dribbble, Download, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-16 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
                Hi, I'm <span className="text-primary-600 hover:text-primary-700 transition-colors duration-300">Alexa</span>
              </h1>
              <p className="text-xl md:text-2xl text-primary-600 font-semibold mb-4">
                Frontend Developer
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                High level experience in web design and development knowledge, 
                producing quality work.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4 mb-8 animate-slide-up">
              <a 
                href="#" 
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-primary-600 hover:text-primary-700 group"
              >
                <Linkedin size={20} className="group-hover:scale-110 transition-transform duration-200" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-gray-700 hover:text-gray-900 group"
              >
                <Github size={20} className="group-hover:scale-110 transition-transform duration-200" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-pink-500 hover:text-pink-600 group"
              >
                <Dribbble size={20} className="group-hover:scale-110 transition-transform duration-200" />
              </a>
            </div>

            {/* CTA Button */}
            <div className="animate-slide-up">
              <Button 
                onClick={scrollToContact}
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-full font-semibold flex items-center space-x-2 mx-auto lg:mx-0 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span>Contact Me</span>
                <Send size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </div>

            {/* Scroll Down Indicator */}
            <div className="mt-16 animate-bounce hover:animate-pulse transition-all duration-300 cursor-pointer">
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-sm text-gray-500 mb-2">Scroll down</span>
                <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center hover:border-primary-600 transition-colors duration-300">
                  <div className="w-1 h-3 bg-gray-400 rounded-full mt-2"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative animate-fade-in group">
              <div className="w-80 h-80 bg-gradient-purple rounded-full flex items-end justify-center overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
                  alt="Alexa - Frontend Developer"
                  className="w-72 h-72 object-cover object-top rounded-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center animate-pulse hover:animate-bounce transition-all duration-300">
                <div className="w-8 h-8 bg-primary-100 rounded-full"></div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-yellow-400 rounded-full shadow-lg animate-pulse hover:animate-spin transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
