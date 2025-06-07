
import React from 'react';
import { Linkedin, Github, Dribbble } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Footer = () => {
  const { ref: footerRef, isVisible: footerVisible } = useScrollAnimation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div 
          ref={footerRef}
          className={`text-center transition-all duration-1000 ${
            footerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <button 
            onClick={scrollToTop}
            className="text-3xl font-bold text-primary mb-4 hover:text-primary/80 hover:scale-105 transition-all duration-300"
          >
            Alexa
          </button>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Frontend developer with passion for creating beautiful and functional web experiences.
          </p>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="#" 
              className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 group"
            >
              <Linkedin size={20} className="group-hover:scale-110 transition-transform duration-200 text-background" />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center hover:bg-muted/80 hover:scale-110 transition-all duration-300 group"
            >
              <Github size={20} className="group-hover:scale-110 transition-transform duration-200 text-background" />
            </a>
            <a 
              href="#" 
              className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center hover:bg-pink-600 hover:scale-110 transition-all duration-300 group"
            >
              <Dribbble size={20} className="group-hover:scale-110 transition-transform duration-200 text-background" />
            </a>
          </div>

          <div className="border-t border-muted pt-8">
            <p className="text-muted-foreground text-sm">
              © 2024 Alexa. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
