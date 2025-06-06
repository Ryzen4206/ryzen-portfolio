
import React from 'react';
import { Linkedin, Github, Dribbble } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <button 
            onClick={scrollToTop}
            className="text-3xl font-bold text-primary-400 mb-4 hover:text-primary-300 hover:scale-105 transition-all duration-300"
          >
            Alexa
          </button>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Frontend developer with passion for creating beautiful and functional web experiences.
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="#" 
              className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 hover:scale-110 transition-all duration-300 group"
            >
              <Linkedin size={20} className="group-hover:scale-110 transition-transform duration-200" />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 hover:scale-110 transition-all duration-300 group"
            >
              <Github size={20} className="group-hover:scale-110 transition-transform duration-200" />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-pink-600 hover:scale-110 transition-all duration-300 group"
            >
              <Dribbble size={20} className="group-hover:scale-110 transition-transform duration-200" />
            </a>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500 text-sm">
              © 2024 Alexa. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
