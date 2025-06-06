
import React from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const projects = [
    {
      title: 'Modern Website',
      category: 'Web Design',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&q=80',
      description: 'Modern responsive website with clean design'
    },
    {
      title: 'Brand App',
      category: 'App',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=600&q=80',
      description: 'Mobile application with custom branding'
    },
    {
      title: 'App Design',
      category: 'Design',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80',
      description: 'Beautiful app interface design'
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 hover:text-primary-600 transition-colors duration-300">Portfolio</h2>
          <p className="text-gray-600">Most recent work</p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button className="bg-white text-gray-800 hover:bg-gray-100 rounded-full p-3 hover:scale-110 transition-all duration-300 shadow-lg">
                      <ExternalLink size={20} />
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-primary-600 transition-colors duration-300">{project.title}</h3>
                  <p className="text-primary-600 text-sm font-medium mb-2">{project.category}</p>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <div className="flex justify-center mt-12 space-x-4">
            <Button className="bg-primary-600 hover:bg-primary-700 text-white rounded-full p-3 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl">
              <ChevronLeft size={20} />
            </Button>
            <Button className="bg-primary-600 hover:bg-primary-700 text-white rounded-full p-3 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl">
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
