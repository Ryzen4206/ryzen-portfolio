
import React from 'react';
import { Linkedin, Github, Dribbble, Send, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Hero = () => {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: socialRef, isVisible: socialVisible } = useScrollAnimation();

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5"></div>
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto gap-12">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div 
              ref={heroRef}
              className={`transition-all duration-1000 ${
                heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              {/* 👉 Insert your name and role here */}
              <div className="mb-6">
                <p className="text-muted-foreground text-lg mb-2 font-medium">👋 Hello, I'm</p>
                <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4 leading-tight">
                  <span className="text-gradient animate-glow">Alexa</span>
                </h1>
                {/* 💼 Update your job title/role */}
                <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                  <p className="text-xl md:text-2xl text-primary font-semibold">
                    Frontend Developer
                  </p>
                </div>
              </div>
              
              {/* 📝 Replace with your personal introduction */}
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Crafting beautiful, responsive web experiences with modern technologies. 
                Passionate about clean code and user-centered design.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 transition-all duration-1000 delay-300 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <Button 
                onClick={scrollToContact}
                className="btn-primary group"
              >
                <span>Get In Touch</span>
                <Send size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
              
              <Button variant="outline" className="btn-secondary group">
                <Download size={18} className="group-hover:translate-y-1 transition-transform duration-200" />
                <span>Download CV</span>
              </Button>
            </div>

            {/* 🔗 Update your social media links below */}
            <div 
              ref={socialRef}
              className={`flex justify-center lg:justify-start space-x-6 mb-12 transition-all duration-1000 delay-500 ${
                socialVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              {/* 💼 Replace # with your LinkedIn profile URL */}
              <a 
                href="#" 
                className="w-12 h-12 bg-card/60 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 text-primary hover:text-primary/80 group border border-border/50 hover:border-primary/50"
              >
                <Linkedin size={20} className="group-hover:scale-110 transition-transform duration-200" />
              </a>
              {/* 🐙 Replace # with your GitHub profile URL */}
              <a 
                href="#" 
                className="w-12 h-12 bg-card/60 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 text-foreground hover:text-muted-foreground group border border-border/50 hover:border-primary/50"
              >
                <Github size={20} className="group-hover:scale-110 transition-transform duration-200" />
              </a>
              {/* 🎨 Replace # with your Dribbble profile URL */}
              <a 
                href="#" 
                className="w-12 h-12 bg-card/60 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-md hover:shadow-lg hover:scale-110 transition-all duration-300 text-pink-500 hover:text-pink-600 group border border-border/50 hover:border-pink-500/50"
              >
                <Dribbble size={20} className="group-hover:scale-110 transition-transform duration-200" />
              </a>
            </div>

            {/* Scroll Down Indicator */}
            <div className={`animate-bounce-gentle transition-all duration-1000 delay-700 ${
              socialVisible ? 'opacity-100' : 'opacity-0'
            }`}>
              <div className="flex flex-col items-center lg:items-start">
                <span className="text-sm text-muted-foreground mb-3 font-medium">Scroll to explore</span>
                <div className="w-6 h-10 border-2 border-border rounded-full flex justify-center hover:border-primary transition-colors duration-300 relative">
                  <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className={`relative group transition-all duration-1000 delay-700 ${
              heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              {/* 🖼️ Replace with your profile image URL */}
              <div className="relative">
                <div className="w-80 h-80 md:w-96 md:h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl flex items-end justify-center overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 animate-glow border border-border/20">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
                    alt="Alexa - Frontend Developer"
                    className="w-72 h-72 md:w-80 md:h-80 object-cover object-top rounded-3xl transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-card/80 backdrop-blur-sm rounded-2xl shadow-lg flex items-center justify-center animate-float hover:animate-bounce-gentle transition-all duration-300 border border-border/50">
                  <div className="w-8 h-8 bg-primary/30 rounded-xl"></div>
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl shadow-lg animate-float hover:animate-spin transition-all duration-300" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 -left-8 w-6 h-6 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full shadow-md animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
