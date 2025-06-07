
import React from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Portfolio = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  {/* 🔧 Add your projects in the list below */}
  const projects = [
    {
      title: 'Modern Website',
      category: 'Web Design',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&q=80',
      description: 'Modern responsive website with clean design',
      // 🔗 Add your project links here
      link: '#'
    },
    {
      title: 'Brand App',
      category: 'App',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&q=80',
      description: 'Mobile application with custom branding',
      // 🔗 Add your project links here
      link: '#'
    },
    {
      title: 'App Design',
      category: 'Design',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80',
      description: 'Beautiful app interface design',
      // 🔗 Add your project links here
      link: '#'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-secondary/30 dark:bg-secondary/10">
      <div className="container mx-auto px-4">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl font-bold text-foreground mb-4 hover:text-primary transition-colors duration-300">Portfolio</h2>
          <p className="text-muted-foreground">Most recent work</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const { ref, isVisible } = useScrollAnimation();
              
              return (
                <div 
                  key={index} 
                  ref={ref}
                  className={`bg-background rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-1000 group cursor-pointer hover:-translate-y-2 border border-border ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="relative overflow-hidden">
                    {/* 🖼️ Replace project images with your own */}
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      {/* 🔗 Update project links */}
                      <Button 
                        onClick={() => window.open(project.link, '_blank')}
                        className="bg-background text-foreground hover:bg-accent rounded-full p-3 hover:scale-110 transition-all duration-300 shadow-lg border border-border"
                      >
                        <ExternalLink size={20} />
                      </Button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                    <p className="text-primary text-sm font-medium mb-2">{project.category}</p>
                    <p className="text-muted-foreground">{project.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation arrows */}
          <div className="flex justify-center mt-12 space-x-4">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full p-3 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl">
              <ChevronLeft size={20} />
            </Button>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full p-3 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl">
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
