
import React from 'react';
import { Linkedin, Github, Dribbble, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Hero = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: socialRef, isVisible: socialVisible } = useScrollAnimation();

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-16 bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <div 
              ref={heroRef}
              className={`transition-all duration-1000 ${
                heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Hi, I'm <span className="text-primary hover:text-primary/80 transition-colors duration-300">Alexa</span>
              </h1>
              <p className="text-xl md:text-2xl text-primary font-semibold mb-4">
                Frontend Developer
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                High level experience in web design and development knowledge, 
                producing quality work.
              </p>
            </div>

            {/* Social Links */}
            <div 
              ref={socialRef}
              className={`flex justify-center lg:justify-start space-x-4 mb-8 transition-all duration-1000 delay-300 ${
                socialVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <a 
                href="#" 
                className="w-12 h-12 bg-background rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-primary hover:text-primary/80 group border border-border"
              >
                <Linkedin size={20} className="group-hover:scale-110 transition-transform duration-200" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-background rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-foreground hover:text-muted-foreground group border border-border"
              >
                <Github size={20} className="group-hover:scale-110 transition-transform duration-200" />
              </a>
              <a 
                href="#" 
                className="w-12 h-12 bg-background rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 text-pink-500 hover:text-pink-600 group border border-border"
              >
                <Dribbble size={20} className="group-hover:scale-110 transition-transform duration-200" />
              </a>
            </div>

            {/* CTA Button */}
            <div className={`transition-all duration-1000 delay-500 ${
              socialVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <Button 
                onClick={scrollToContact}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-semibold flex items-center space-x-2 mx-auto lg:mx-0 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                <span>Contact Me</span>
                <Send size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </div>

            {/* Scroll Down Indicator */}
            <div className="mt-16 animate-bounce hover:animate-pulse transition-all duration-300 cursor-pointer">
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-sm text-muted-foreground mb-2">Scroll down</span>
                <div className="w-6 h-10 border-2 border-border rounded-full flex justify-center hover:border-primary transition-colors duration-300">
                  <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className={`relative group transition-all duration-1000 delay-700 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="w-80 h-80 bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-end justify-center overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
                  alt="Alexa - Frontend Developer"
                  className="w-72 h-72 object-cover object-top rounded-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-background rounded-full shadow-lg flex items-center justify-center animate-pulse hover:animate-bounce transition-all duration-300 border border-border">
                <div className="w-8 h-8 bg-primary/20 rounded-full"></div>
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-yellow-400 dark:bg-yellow-500 rounded-full shadow-lg animate-pulse hover:animate-spin transition-all duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
