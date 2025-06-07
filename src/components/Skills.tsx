
import React from 'react';
import { Code, Database, Palette } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const Skills = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();

  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend developer',
      skills: [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 80 },
        { name: 'JavaScript', level: 90 },
        { name: 'React', level: 85 }
      ]
    },
    {
      icon: Database,
      title: 'Backend developer',
      skills: [
        { name: 'PHP', level: 80 },
        { name: 'Node.js', level: 70 },
        { name: 'Firebase', level: 90 },
        { name: 'Python', level: 55 }
      ]
    },
    {
      icon: Palette,
      title: 'Designer',
      skills: [
        { name: 'Figma', level: 90 },
        { name: 'Sketch', level: 85 },
        { name: 'Photoshop', level: 85 },
        { name: 'Adobe XD', level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30 dark:bg-secondary/10">
      <div className="container mx-auto px-4">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl font-bold text-foreground mb-4 hover:text-primary transition-colors duration-300">Skills</h2>
          <p className="text-muted-foreground">My technical level</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {skillCategories.map((category, index) => {
            const { ref, isVisible } = useScrollAnimation();
            
            return (
              <div 
                key={index} 
                ref={ref}
                className={`bg-background rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-1000 group hover:-translate-y-1 border border-border ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <category.icon className="text-primary group-hover:scale-110 transition-transform duration-200" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{category.title}</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2 group/skill">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground group-hover/skill:text-primary transition-colors duration-300">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                        <div 
                          className={`bg-primary h-2 rounded-full transition-all duration-1000 ease-out hover:bg-primary/80 ${
                            isVisible ? `w-[${skill.level}%]` : 'w-0'
                          }`}
                          style={{ 
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${(index * 200) + (skillIndex * 100)}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
