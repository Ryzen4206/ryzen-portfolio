
import React from 'react';
import { Code, Database, Palette } from 'lucide-react';

const Skills = () => {
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
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 hover:text-primary-600 transition-colors duration-300">Skills</h2>
          <p className="text-gray-600">My technical level</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-primary-200 group-hover:scale-110 transition-all duration-300">
                  <category.icon className="text-primary-600 group-hover:scale-110 transition-transform duration-200" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-primary-600 transition-colors duration-300">{category.title}</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2 group/skill">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700 group-hover/skill:text-primary-600 transition-colors duration-300">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div 
                        className="bg-primary-600 h-2 rounded-full transition-all duration-1000 ease-out hover:bg-primary-700"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
