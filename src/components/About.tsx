
import React from 'react';
import { Download, Award, Users, Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const About = () => {
  const { ref: aboutRef, isVisible: aboutVisible } = useScrollAnimation();
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();

  const stats = [
    { icon: Award, value: '08+', label: 'Years experience' },
    { icon: Users, value: '20+', label: 'Completed projects' },
    { icon: Coffee, value: '5+', label: 'Companies worked' }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div 
          ref={aboutRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            aboutVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl font-bold text-foreground mb-4 hover:text-primary transition-colors duration-300">About Me</h2>
          <p className="text-muted-foreground">My introduction</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div 
              ref={imageRef}
              className={`flex justify-center transition-all duration-1000 delay-300 ${
                imageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
            >
              <div className="relative group">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=600&q=80"
                  alt="About Alexa"
                  className="w-80 h-96 object-cover rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Content */}
            <div className={`transition-all duration-1000 delay-500 ${
              imageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Web developer, with extensive knowledge and years of experience, working in web 
                technologies and UI/UX design, delivering quality work.
              </p>

              {/* Stats */}
              <div 
                ref={statsRef}
                className={`grid grid-cols-3 gap-6 mb-8 transition-all duration-1000 delay-700 ${
                  statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group cursor-pointer">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <stat.icon className="text-primary group-hover:scale-110 transition-transform duration-200" size={24} />
                    </div>
                    <div className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Download CV Button */}
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-semibold flex items-center space-x-2 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl group">
                <span>Download CV</span>
                <Download size={18} className="group-hover:translate-y-1 transition-transform duration-200" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
