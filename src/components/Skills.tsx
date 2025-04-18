import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Layers, Monitor, Server, DivideIcon as LucideIcon, Languages } from 'lucide-react';

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: string[];
}

const Skills: React.FC = () => {
  const skillCategories: SkillCategory[] = [
    {
      name: 'Full Stack Development',
      icon: <Code className="h-6 w-6" />,
      skills: ['React', 'Node.js', 'JavaScript', 'TypeScript', 'HTML/CSS', 'Next.js']
    },
    {
      name: 'AI/ML & Data Science',
      icon: <Database className="h-6 w-6" />,
      skills: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-Learn', 'Pandas', 'OpenCV']
    },
    {
      name: 'IoT & Embedded Systems',
      icon: <Layers className="h-6 w-6" />,
      skills: ['Raspberry Pi', 'Arduino', 'ESP32', 'Sensors', 'OpenWrt']
    },
    {
      name: 'Software & Tools',
      icon: <Monitor className="h-6 w-6" />,
      skills: ['Git', 'Docker', 'AWS', 'Linux', 'Figma', 'VS Code']
    },
    {
      name: 'Presentation & Communication',
      icon: <Server className="h-6 w-6" />,
      skills: ['Technical Writing', 'Documentation', 'Public Speaking']
    },
    {
      name: 'Language',
      icon: <Languages className="h-6 w-6" />,
      skills: ['English']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="py-20">
      <div className="section-container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index} 
              className="card h-full"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mr-4">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                  {category.name}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;